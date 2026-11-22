/* Live landscape: a painted golden-hour scene drawn on canvas every frame.
   Drifting clouds, sun shafts, a hazy skyline, a shimmering lake, a swaying tree, grass, birds and
   floating motes of light, with gentle mouse parallax. Pauses when off screen or in a hidden tab, and
   draws a single still frame when the visitor prefers reduced motion. */
(function () {
  const TAU = Math.PI * 2;
  const rand = (a, b) => a + Math.random() * (b - a);
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function seeded(seed) {
    let s = seed >>> 0;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }

  function makeCloud(r, w) {
    // Paint one cloud once into an offscreen canvas: soft puffs, lit top, warm shaded base.
    const W = Math.round(w), H = Math.round(w * 0.42);
    const c = document.createElement("canvas");
    c.width = W; c.height = H;
    const g = c.getContext("2d");
    const puffs = 7 + Math.floor(r() * 6);
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < puffs; i++) {
        const x = W * (0.12 + 0.76 * (i / (puffs - 1))) + (r() - 0.5) * W * 0.08;
        const y = H * (0.62 - Math.sin((i / (puffs - 1)) * Math.PI) * 0.26) + (r() - 0.5) * H * 0.1;
        const rad = H * (0.22 + r() * 0.2) * (pass ? 0.8 : 1);
        const gr = g.createRadialGradient(x, y - rad * 0.35, rad * 0.1, x, y, rad);
        if (pass === 0) { gr.addColorStop(0, "rgba(214,176,150,0.55)"); gr.addColorStop(1, "rgba(214,176,150,0)"); }
        else { gr.addColorStop(0, "rgba(255,250,240,0.95)"); gr.addColorStop(0.6, "rgba(255,238,215,0.75)"); gr.addColorStop(1, "rgba(255,238,215,0)"); }
        g.fillStyle = gr;
        g.beginPath(); g.arc(x, y - (pass ? rad * 0.18 : 0), rad, 0, TAU); g.fill();
      }
    }
    return c;
  }

  function Scene(canvas, opts = {}) {
    const ctx = canvas.getContext("2d");
    const variant = opts.variant || "lake"; // "lake" (wide hero) or "city" (portrait card)
    const r = seeded(opts.seed || 11);
    let W = 0, H = 0, dpr = 1, t = 0, last = 0, raf = 0, running = false, visible = true;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let clouds = [], towers = [], blades = [], leaves = [], birds = [], motes = [], ridge1 = [], ridge2 = [];

    const sunX = () => W * (variant === "city" ? 0.42 : 0.7);
    const horizon = () => H * (variant === "city" ? 0.6 : 0.58);

    function build() {
      const hz = horizon();
      clouds = Array.from({ length: variant === "city" ? 6 : 9 }, (_, i) => {
        const w = W * rand(0.18, 0.36) * (variant === "city" ? 1.6 : 1);
        return { img: makeCloud(r, w), x: rand(-0.2, 1.1) * W, y: H * rand(0.04, 0.34), v: rand(4, 12) * (W / 1400), depth: rand(0.3, 1), a: rand(0.65, 1) };
      });
      // distant skyline: clustered towers, tallest near the centre of the cluster
      const cx = variant === "city" ? W * 0.5 : W * 0.34, spread = variant === "city" ? W * 0.62 : W * 0.34;
      towers = [];
      for (let i = 0; i < (variant === "city" ? 44 : 30); i++) {
        const x = cx + (r() - 0.5) * spread;
        const near = 1 - Math.abs(x - cx) / (spread / 2);
        const h = H * (0.05 + near * near * (variant === "city" ? 0.36 : 0.2) * (0.5 + r() * 0.7));
        towers.push({ x, w: W * rand(0.008, 0.022) * (variant === "city" ? 1.4 : 1), h, tone: r(), glint: r() });
      }
      towers.sort((a, b) => b.tone - a.tone);
      const ridge = (amp, seed) => Array.from({ length: 64 }, (_, i) => Math.sin(i * 0.31 + seed) * amp * 0.6 + Math.sin(i * 0.11 + seed * 2) * amp + Math.sin(i * 0.9 + seed) * amp * 0.18);
      ridge1 = ridge(H * 0.018, 1.3);
      ridge2 = ridge(H * 0.03, 4.1);
      // grass blades along the foreground bank
      blades = Array.from({ length: Math.round(W / 5) }, () => ({ x: rand(0, W), h: H * rand(0.03, 0.09), lean: rand(-0.4, 0.4), ph: rand(0, TAU), tone: r() }));
      // tree canopy clusters (left side)
      const tx = variant === "city" ? W * 0.9 : W * 0.1, ty = H * (variant === "city" ? 0.2 : 0.14);
      leaves = Array.from({ length: variant === "city" ? 150 : 120 }, () => {
        const ang = rand(0, TAU), rad = Math.sqrt(r()) * W * (variant === "city" ? 0.34 : 0.2);
        return { x: tx + Math.cos(ang) * rad * 1.25, y: ty + Math.sin(ang) * rad * 0.55, s: W * rand(0.018, 0.05) * (variant === "city" ? 1.5 : 1), tone: r(), ph: rand(0, TAU) };
      });
      birds = Array.from({ length: variant === "city" ? 7 : 5 }, () => ({ x: rand(0, W), y: H * rand(0.12, 0.4), v: rand(18, 34) * (W / 1400), s: rand(5, 9) * (W / 1400 + 0.4), ph: rand(0, TAU) }));
      motes = Array.from({ length: 70 }, () => ({ x: rand(0, W), y: rand(hz * 0.6, H), r: rand(0.6, 2.2), v: rand(4, 14), ph: rand(0, TAU) }));
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, rect.width); H = Math.max(1, rect.height);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (!running) draw(0);
    }

    function sky() {
      const hz = horizon();
      const g = ctx.createLinearGradient(0, 0, 0, hz);
      g.addColorStop(0, "#6f97bd");
      g.addColorStop(0.45, "#b9cfd9");
      g.addColorStop(0.8, "#f4dfbd");
      g.addColorStop(1, "#ffd8a0");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, hz + 2);
      // sun and glow
      const sx = sunX() + mx * 6, sy = hz * 0.62;
      const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, W * 0.45);
      glow.addColorStop(0, "rgba(255,248,225,0.95)");
      glow.addColorStop(0.08, "rgba(255,236,190,0.75)");
      glow.addColorStop(0.35, "rgba(255,210,150,0.22)");
      glow.addColorStop(1, "rgba(255,210,150,0)");
      ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
      // slow rotating light shafts
      ctx.save(); ctx.translate(sx, sy); ctx.rotate(t * 0.01);
      for (let i = 0; i < 12; i++) {
        ctx.rotate(TAU / 12);
        const a = 0.035 + 0.025 * Math.sin(t * 0.4 + i * 1.7);
        const gr = ctx.createLinearGradient(0, 0, W * 0.8, 0);
        gr.addColorStop(0, `rgba(255,240,205,${a})`); gr.addColorStop(1, "rgba(255,240,205,0)");
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(W * 0.9, -W * 0.03); ctx.lineTo(W * 0.9, W * 0.03); ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }

    function drawClouds(dt) {
      for (const c of clouds) {
        c.x += c.v * dt;
        if (c.x > W + 40) c.x = -c.img.width - rand(20, 200);
        ctx.globalAlpha = c.a;
        ctx.drawImage(c.img, c.x - mx * 14 * c.depth, c.y - my * 6 * c.depth);
      }
      ctx.globalAlpha = 1;
    }

    function skyline() {
      const hz = horizon();
      for (const tw of towers) {
        const x = tw.x - mx * 8;
        const haze = 0.35 + tw.tone * 0.4;
        ctx.fillStyle = `rgba(${150 + tw.tone * 40},${165 + tw.tone * 35},${185 + tw.tone * 25},${haze})`;
        ctx.fillRect(x, hz - tw.h, tw.w, tw.h + 2);
        // sunlit edge
        ctx.fillStyle = `rgba(255,236,200,${0.25 + tw.tone * 0.25})`;
        ctx.fillRect(x + tw.w * 0.7, hz - tw.h, tw.w * 0.3, tw.h);
        // occasional glint from glass
        const gl = Math.max(0, Math.sin(t * 0.7 + tw.glint * 20));
        if (gl > 0.96) { ctx.fillStyle = `rgba(255,250,235,${(gl - 0.96) * 18})`; ctx.fillRect(x + tw.w * 0.7, hz - tw.h * (0.3 + tw.glint * 0.5), tw.w * 0.3, 3); }
      }
    }

    function ridges() {
      const hz = horizon();
      const layer = (pts, base, color, par) => {
        ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(0, H);
        pts.forEach((p, i) => ctx.lineTo((i / (pts.length - 1)) * W - mx * par, base - Math.abs(p)));
        ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
      };
      layer(ridge1, hz + 1, "rgba(108,128,128,0.75)", 4);
      layer(ridge2, hz + H * 0.012, "rgba(56,82,70,0.95)", 10);
    }

    function lake() {
      const hz = horizon() + H * 0.012, bottom = H * (variant === "city" ? 0.8 : 0.84);
      const g = ctx.createLinearGradient(0, hz, 0, bottom);
      g.addColorStop(0, "#d9cdb3"); g.addColorStop(0.35, "#93aab0"); g.addColorStop(1, "#4f6f78");
      ctx.fillStyle = g; ctx.fillRect(0, hz, W, bottom - hz);
      // shimmer lines
      const rows = 46;
      for (let i = 0; i < rows; i++) {
        const k = i / rows, y = hz + (bottom - hz) * k * k;
        const len = W * (0.02 + k * 0.08);
        for (let j = 0; j < 10; j++) {
          const x = ((j * 0.13 + i * 0.071) % 1) * W + Math.sin(t * 0.6 + i + j) * 20;
          const a = 0.12 + 0.12 * Math.sin(t * 1.4 + i * 0.7 + j * 2.1);
          ctx.fillStyle = `rgba(255,246,225,${Math.max(0, a)})`;
          ctx.fillRect(x - mx * 6, y, len, 1 + k * 1.5);
        }
      }
      // sun glitter path
      const sx = sunX() + mx * 6;
      for (let i = 0; i < 70; i++) {
        const k = (i / 70), y = hz + (bottom - hz) * k;
        const w = W * (0.01 + k * 0.07) * (0.5 + 0.5 * Math.sin(t * 3 + i * 1.9));
        ctx.fillStyle = `rgba(255,244,214,${0.5 - k * 0.35})`;
        ctx.fillRect(sx - w / 2 + Math.sin(t * 2 + i) * 6, y, w, 1.6);
      }
    }

    function bank() {
      const top = H * (variant === "city" ? 0.78 : 0.82);
      const g = ctx.createLinearGradient(0, top, 0, H);
      g.addColorStop(0, "#5f7a3d"); g.addColorStop(0.5, "#3a5229"); g.addColorStop(1, "#1f2c17");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 20) ctx.lineTo(x - mx * 18, top + Math.sin(x * 0.006 + 1) * H * 0.02 + (variant === "city" ? (x / W) * -H * 0.05 : 0));
      ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
      // blades
      ctx.lineCap = "round";
      for (const b of blades) {
        const baseY = top + Math.sin(b.x * 0.006 + 1) * H * 0.02 + H * 0.02 + (variant === "city" ? (b.x / W) * -H * 0.05 : 0);
        const sway = Math.sin(t * 1.3 + b.ph + b.x * 0.004) * 0.25 + b.lean;
        const x = b.x - mx * 22;
        ctx.strokeStyle = `rgba(${120 + b.tone * 80},${150 + b.tone * 60},${70 + b.tone * 30},${0.55 + b.tone * 0.4})`;
        ctx.lineWidth = 1.2 + b.tone;
        ctx.beginPath(); ctx.moveTo(x, baseY);
        ctx.quadraticCurveTo(x + sway * b.h * 0.4, baseY - b.h * 0.6, x + sway * b.h, baseY - b.h);
        ctx.stroke();
      }
      // a few wildflowers catching the sun
      for (let i = 0; i < blades.length; i += 9) {
        const b = blades[i];
        const x = b.x - mx * 22 + Math.sin(t * 1.3 + b.ph) * 2;
        ctx.fillStyle = i % 2 ? "rgba(255,214,120,0.9)" : "rgba(255,246,230,0.85)";
        ctx.beginPath(); ctx.arc(x, H * 0.95 - b.h * 0.4, 1.8, 0, TAU); ctx.fill();
      }
    }

    function tree() {
      const sway = Math.sin(t * 0.5) * 6 + Math.sin(t * 1.3) * 2;
      const tx = variant === "city" ? W * 0.9 : W * 0.1;
      const baseX = variant === "city" ? W * 0.82 : W * 0.04;
      // trunk
      ctx.fillStyle = "#1d1810";
      ctx.beginPath();
      ctx.moveTo(baseX - W * 0.03, H);
      ctx.bezierCurveTo(baseX, H * 0.7, tx - W * 0.02, H * 0.45, tx + sway * 0.3, H * 0.16);
      ctx.lineTo(tx + W * 0.02 + sway * 0.3, H * 0.18);
      ctx.bezierCurveTo(tx + W * 0.03, H * 0.5, baseX + W * 0.06, H * 0.72, baseX + W * 0.07, H);
      ctx.closePath(); ctx.fill();
      // canopy
      for (const l of leaves) {
        const dx = sway * (1 - (l.y / H)) * 1.6 + Math.sin(t * 1.7 + l.ph) * 1.5 - mx * 26;
        const lit = l.tone > 0.72;
        ctx.fillStyle = lit ? `rgba(${120 + l.tone * 60},${140 + l.tone * 40},60,0.85)` : `rgba(${22 + l.tone * 30},${40 + l.tone * 40},${20 + l.tone * 18},0.92)`;
        ctx.beginPath(); ctx.arc(l.x + dx, l.y - my * 8, l.s, 0, TAU); ctx.fill();
      }
    }

    function drawBirds(dt) {
      ctx.strokeStyle = "rgba(40,40,45,0.7)"; ctx.lineWidth = 1.4;
      for (const b of birds) {
        b.x += b.v * dt; if (b.x > W + 30) { b.x = -30; b.y = H * rand(0.1, 0.4); }
        const f = Math.sin(t * 8 + b.ph) * b.s * 0.6;
        const x = b.x - mx * 10, y = b.y + Math.sin(t + b.ph) * 4;
        ctx.beginPath(); ctx.moveTo(x - b.s, y - f); ctx.quadraticCurveTo(x - b.s * 0.4, y - f * 0.2, x, y); ctx.quadraticCurveTo(x + b.s * 0.4, y - f * 0.2, x + b.s, y - f); ctx.stroke();
      }
    }

    function drawMotes(dt) {
      for (const m of motes) {
        m.y -= m.v * dt; m.x += Math.sin(t * 0.8 + m.ph) * 0.3;
        if (m.y < horizon() * 0.5) { m.y = H + 5; m.x = rand(0, W); }
        const a = 0.35 + 0.35 * Math.sin(t * 2 + m.ph);
        ctx.fillStyle = `rgba(255,240,200,${a})`;
        ctx.beginPath(); ctx.arc(m.x - mx * 30, m.y, m.r, 0, TAU); ctx.fill();
      }
    }

    function draw(dt) {
      mx += (tmx - mx) * 0.04; my += (tmy - my) * 0.04;
      sky(); drawClouds(dt); skyline(); ridges(); lake(); drawBirds(dt); bank(); tree(); drawMotes(dt);
    }

    function frame(now) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now; t += dt;
      draw(dt);
      raf = requestAnimationFrame(frame);
    }

    function start() { if (running || reduce || !visible || document.hidden) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    const ro = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    ro ? ro.observe(canvas) : window.addEventListener("resize", resize);
    const io = "IntersectionObserver" in window ? new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }) : null;
    if (io) io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    const onMove = (e) => { tmx = (e.clientX / window.innerWidth - 0.5) * 2; tmy = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("pointermove", onMove, { passive: true });

    t = rand(0, 100);
    resize();
    start();

    return {
      destroy() {
        stop();
        ro && ro.disconnect(); io && io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("pointermove", onMove);
      }
    };
  }

  window.LiveScene = Scene;
})();
