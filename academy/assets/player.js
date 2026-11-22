/* Video lesson player.
   Plays a module's scene script as an animated video: each scene animates on a painted stage while the
   narration is spoken by the browser's speech engine and shown as captions. With the voice off, scenes
   advance on a reading-pace timer, so the lesson still plays like a video. */
(function () {
  const { esc, fmt } = window.Content;
  const WPM = 155; // narration pace used for timing and the timeline

  const sceneSeconds = (s) => Math.max(6, Math.round((s.narration || "").split(/\s+/).length / (WPM / 60)) + 2);
  const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
  const sentences = (t) => (t.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) || [t]).map((x) => x.trim()).filter(Boolean);

  function sceneHTML(s, label) {
    let i = 0;
    const a = (html, tag = "div", cls = "") => `<${tag} class="a ${cls}" style="--i:${i++}">${html}</${tag}>`;
    const head = s.heading ? a(fmt(s.heading), "h2") : "";
    switch (s.layout) {
      case "title":
        return `<div>${a(esc(label), "div", "s-label")}${a(fmt(s.heading), "h2", "big")}${s.sub ? a(fmt(s.sub), "div", "s-sub") : ""}</div>`;
      case "bullets":
        return `<div>${head}<ul>${(s.points || []).map((p, n) => a(`<b>${String(n + 1).padStart(2, "0")}</b><span>${fmt(p)}</span>`, "li")).join("")}</ul></div>`;
      case "stat":
        return `<div>${s.heading ? a(fmt(s.heading), "div", "s-label") : ""}${a(fmt(s.value), "div", "s-value")}${a(fmt(s.label), "div", "s-statlabel")}</div>`;
      case "compare": {
        const col = (c) => `<h4>${fmt(c.title)}</h4>${(c.points || []).map((p) => `<p>${fmt(p)}</p>`).join("")}`;
        return `<div style="width:100%">${head}<div class="cmp">${a(col(s.left || {}))}${a(col(s.right || {}))}</div></div>`;
      }
      case "flow": {
        const steps = (s.steps || []).map((p, n) => (n ? `<i style="--i:${i}"></i>` : "") + a(fmt(p), "span")).join("");
        return `<div>${head}<div class="flow">${steps}</div></div>`;
      }
      case "formula":
        return `<div>${head}${a(fmt(s.formula), "div", "formula")}${s.example ? a(fmt(s.example), "div", "example") : ""}</div>`;
      case "quote":
        return `<div>${a(fmt(s.text), "blockquote")}${s.by ? a(esc(s.by), "div", "by") : ""}</div>`;
      default:
        return `<div>${head}</div>`;
    }
  }

  function pickVoice() {
    if (!("speechSynthesis" in window)) return null;
    const voices = speechSynthesis.getVoices();
    const pref = [/en-IN/i, /en-GB/i, /en-US/i, /^en/i];
    for (const re of pref) {
      const v = voices.find((x) => re.test(x.lang) && /natural|neural|google|premium|enhanced/i.test(x.name)) || voices.find((x) => re.test(x.lang));
      if (v) return v;
    }
    return voices[0] || null;
  }

  function mount(root, video, { moduleId, label, onComplete }) {
    const scenes = video.scenes || [];
    const durs = scenes.map(sceneSeconds);
    const starts = durs.reduce((acc, d, n) => (acc.push(n ? acc[n - 1] + durs[n - 1] : 0), acc), []);
    const total = durs.reduce((a, b) => a + b, 0);
    const canSpeak = "speechSynthesis" in window;

    let idx = 0, playing = false, voiceOn = canSpeak, captionsOn = true, rate = 1;
    let elapsed = 0, tick = null, lastT = 0, speechDone = false, queue = [], qPos = 0, token = 0;

    root.innerHTML = `
      <div class="player" tabindex="0" aria-label="Video lesson: ${esc(video.title)}">
        <div class="stage">
          <div class="sky"><div class="sun"></div><div class="sea"></div><div class="cloud lit" style="width:46%;height:30%;left:-6%;top:6%;--t:40s"></div><div class="cloud" style="width:40%;height:26%;right:-8%;top:14%;--t:52s"></div><div class="cloudbank"></div></div>
          <div class="shade"></div>
          <div class="wm">MBA Guru · ${esc(moduleId)}</div>
          <div class="scn"></div>
          <div class="scene"></div>
          <div class="captions" aria-live="polite"><span></span></div>
          <button class="big-play" aria-label="Play video"><span></span></button>
        </div>
        <div class="controls">
          <button class="ctl" data-act="prev" aria-label="Previous scene"><svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM20 5v14L9 12z"/></svg></button>
          <button class="ctl" data-act="play" aria-label="Play"><svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg></button>
          <button class="ctl" data-act="next" aria-label="Next scene"><svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM4 5v14l11-7z"/></svg></button>
          <div class="timeline" role="group" aria-label="Scenes">${scenes.map((_, n) => `<button style="--w:${durs[n]}" data-seek="${n}" aria-label="Scene ${n + 1}"><i></i></button>`).join("")}</div>
          <span class="time">0:00 / ${mmss(total)}</span>
          <button class="ctl hide-sm" data-act="rate" aria-label="Playback speed">1×</button>
          <button class="ctl ${voiceOn ? "on" : ""}" data-act="voice" aria-label="Narration voice" ${canSpeak ? "" : "disabled"}>VOICE</button>
          <button class="ctl on" data-act="cc" aria-label="Captions">CC</button>
          <button class="ctl hide-sm" data-act="fs" aria-label="Full screen"><svg viewBox="0 0 24 24"><path d="M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"/></svg></button>
        </div>
      </div>
      <div class="transcript">
        <details><summary><span class="label">Transcript · ${scenes.length} scenes · ${mmss(total)}</span><span class="label">Show</span></summary>
          <ol>${scenes.map((s, n) => `<li data-seek="${n}"><span class="tc">${mmss(starts[n])}</span><span>${fmt(s.narration)}</span></li>`).join("")}</ol>
        </details>
      </div>`;

    const $ = (sel) => root.querySelector(sel);
    const player = $(".player"), sceneEl = $(".scene"), cap = $(".captions span"), capBox = $(".captions");
    const bars = [...root.querySelectorAll(".timeline button")], tLines = [...root.querySelectorAll(".transcript li")];
    const playBtn = root.querySelector('[data-act="play"]'), big = $(".big-play"), timeEl = $(".time"), scn = $(".scn");

    function render(n, animate) {
      const s = scenes[n];
      sceneEl.className = "scene" + (animate ? " play" : "") + (playing ? "" : " paused");
      sceneEl.innerHTML = sceneHTML(s, label);
      if (!animate) sceneEl.querySelectorAll(".a").forEach((e) => { e.style.opacity = 1; e.style.transform = "none"; });
      scn.textContent = `${n + 1} / ${scenes.length}`;
      cap.textContent = "";
      tLines.forEach((l, k) => l.classList.toggle("on", k === n));
      queue = sentences(s.narration || "");
      qPos = 0;
      paint();
    }

    function paint() {
      const sceneT = Math.min(elapsed, durs[idx]);
      bars.forEach((b, k) => b.querySelector("i").style.setProperty("--p", k < idx ? "100%" : k > idx ? "0%" : (sceneT / durs[idx]) * 100 + "%"));
      timeEl.textContent = `${mmss(starts[idx] + sceneT)} / ${mmss(total)}`;
      if (!voiceOn && captionsOn && queue.length) {
        // Without speech, captions step through sentences in proportion to elapsed time.
        const lens = queue.map((q) => q.length), sum = lens.reduce((a, b) => a + b, 0);
        let acc = 0, k = 0;
        const target = (sceneT / durs[idx]) * sum;
        while (k < queue.length - 1 && acc + lens[k] < target) acc += lens[k++];
        cap.textContent = queue[k];
      }
    }

    function speakFrom(k) {
      if (!voiceOn || !canSpeak) return;
      const my = ++token;
      speechSynthesis.cancel();
      speechDone = false;
      const voice = pickVoice();
      const say = (j) => {
        if (my !== token) return;
        if (j >= queue.length) { speechDone = true; return; }
        qPos = j;
        const u = new SpeechSynthesisUtterance(queue[j].replace(/₹\s?/g, "rupees "));
        if (voice) u.voice = voice;
        u.rate = rate;
        u.onstart = () => { if (my === token && captionsOn) cap.textContent = queue[j]; };
        u.onend = () => say(j + 1);
        u.onerror = () => say(j + 1);
        speechSynthesis.speak(u);
      };
      say(k);
    }

    function loop(t) {
      if (!playing) return;
      const dt = Math.min(0.25, (t - lastT) / 1000) * rate;
      lastT = t;
      elapsed += dt;
      // With speech on, the scene ends when both the voice finishes and the minimum time has passed.
      const minT = voiceOn ? Math.min(durs[idx], 4) : durs[idx];
      if (voiceOn) elapsed = Math.min(elapsed, durs[idx] - 0.01 + (speechDone ? 1 : 0));
      const done = voiceOn ? speechDone && elapsed >= minT : elapsed >= durs[idx];
      paint();
      if (done) {
        if (idx < scenes.length - 1) { go(idx + 1, true); }
        else { pause(); elapsed = durs[idx]; paint(); finished(); return; }
      }
      tick = requestAnimationFrame(loop);
    }

    function finished() {
      big.classList.remove("hide");
      big.setAttribute("aria-label", "Replay video");
      if (onComplete) onComplete();
    }

    function go(n, autoplay) {
      idx = Math.max(0, Math.min(scenes.length - 1, n));
      elapsed = 0;
      render(idx, true);
      if (playing || autoplay) speakFrom(0);
    }

    function play() {
      if (playing) return;
      if (idx === scenes.length - 1 && elapsed >= durs[idx]) { idx = 0; elapsed = 0; render(0, true); }
      playing = true;
      big.classList.add("hide");
      sceneEl.classList.remove("paused");
      if (!sceneEl.classList.contains("play")) sceneEl.classList.add("play");
      playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>';
      playBtn.setAttribute("aria-label", "Pause");
      if (canSpeak && voiceOn) {
        if (speechSynthesis.paused) speechSynthesis.resume();
        else speakFrom(qPos);
      }
      lastT = performance.now();
      tick = requestAnimationFrame(loop);
    }

    function pause() {
      playing = false;
      cancelAnimationFrame(tick);
      sceneEl.classList.add("paused");
      playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>';
      playBtn.setAttribute("aria-label", "Play");
      if (canSpeak) { token++; speechSynthesis.cancel(); }
    }

    const toggle = () => (playing ? pause() : play());

    root.addEventListener("click", (e) => {
      const t = e.target.closest("[data-act],[data-seek],.big-play");
      if (!t) return;
      if (t.classList.contains("big-play")) return play();
      if (t.dataset.seek != null) { go(+t.dataset.seek, false); if (!playing) play(); return; }
      switch (t.dataset.act) {
        case "play": return toggle();
        case "prev": return go(elapsed > 2 ? idx : idx - 1, false);
        case "next": return go(idx + 1, false);
        case "rate": {
          rate = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : rate === 1.5 ? 0.85 : 1;
          t.textContent = rate + "×";
          if (playing && voiceOn) speakFrom(qPos);
          return;
        }
        case "voice":
          voiceOn = !voiceOn; t.classList.toggle("on", voiceOn);
          if (!voiceOn) { token++; speechSynthesis.cancel(); } else if (playing) speakFrom(qPos);
          return;
        case "cc": captionsOn = !captionsOn; t.classList.toggle("on", captionsOn); capBox.classList.toggle("off", !captionsOn); return;
        case "fs":
          if (document.fullscreenElement) document.exitFullscreen();
          else if (player.requestFullscreen) player.requestFullscreen();
          return;
      }
    });

    player.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "k") { e.preventDefault(); toggle(); }
      else if (e.key === "ArrowRight") go(idx + 1, false);
      else if (e.key === "ArrowLeft") go(idx - 1, false);
      else if (e.key === "c") root.querySelector('[data-act="cc"]').click();
    });

    if (canSpeak) speechSynthesis.getVoices();
    render(0, false);

    return { destroy() { pause(); } };
  }

  window.Player = { mount, sceneSeconds, mmss };
})();
