/* MBA Guru Academy — router and views. */
(function () {
  const { esc, fmt, block } = window.Content;
  const C = window.CATALOG;
  const MODS = window.CATALOG_MODULES;
  const QUOTES = window.QUOTES;
  const S = window.Store;
  const app = document.getElementById("app");

  const byId = Object.fromEntries(MODS.map((m) => [m.id, m]));
  const roleById = Object.fromEntries(C.roles.map((r) => [r.id, r]));
  const TRACK_NAMES = { foundation: "Common foundation", product: "Track A · Product Managers", sales: "Track B · Sales Managers", marketing: "Track C · Marketing", digital: "Track D · Digital Marketing", capstone: "Capstone" };

  const path = (roleId) => [
    ...MODS.filter((m) => m.track === "foundation"),
    ...MODS.filter((m) => m.track === roleId),
    byId.CAP
  ];
  const lessonCount = (id) => (S.get().counts || {})[id] || 7;

  function moduleProgress(id) {
    const st = S.get();
    const l = Math.min(1, (st.lessons[id] || []).length / lessonCount(id));
    const v = st.video[id] ? 1 : 0;
    const q = S.quizPassed(id) ? 1 : st.quiz[id] ? 0.5 : 0;
    const t = (st.tasks[id] && st.tasks[id].score) ? 1 : 0;
    const pct = Math.round((l * 0.4 + v * 0.15 + q * 0.25 + t * 0.2) * 100);
    return { pct, done: l === 1 && v && q === 1 && t, started: pct > 0 };
  }

  function grade(roleId) {
    const st = S.get();
    const mods = path(roleId);
    const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);
    const quiz = avg(mods.map((m) => ((st.quiz[m.id] || {}).official || 0) / 5));
    const tasks = avg(mods.map((m) => ((st.tasks[m.id] || {}).score || 0) / 4));
    const rp = avg(C.roleplay.map((r) => (st.roleplay[r.behaviour] || 0) / 4));
    const capScores = C.capstoneRubric.map((r) => st.capstone[r.criterion] || 0);
    const cap = avg(capScores) / 4;
    const parts = { quiz: quiz * 15, tasks: tasks * 40, roleplay: rp * 15, capstone: cap * 30 };
    const total = Math.round(parts.quiz + parts.tasks + parts.roleplay + parts.capstone);
    const allQuizzes = mods.every((m) => S.quizPassed(m.id));
    const capAvg = avg(capScores);
    return { parts, total, allQuizzes, capAvg, certified: total >= 70 && allQuizzes && capAvg >= 3 };
  }

  /* ---------- shared pieces ---------- */
  const sky = (extra = "") => `
    <div class="sky" aria-hidden="true">
      <div class="sun"></div><div class="sea"></div>
      <div class="rock left"></div><div class="rock right"></div>
      <div class="cloud lit" style="width:38vw;height:22vh;left:-8vw;top:8vh;--t:46s"></div>
      <div class="cloud" style="width:32vw;height:18vh;right:-6vw;top:14vh;--t:58s"></div>
      <div class="cloud lit" style="width:24vw;height:12vh;left:38vw;top:2vh;--t:70s;opacity:.7"></div>
      ${extra}
      <div class="cloudbank"></div>
    </div>`;

  function pageHead({ crumbs, thin, bold, sub, after = "" }) {
    return `
      <header class="page-head">
        ${sky()}
        <div class="inner">
          <nav class="crumbs label" aria-label="Breadcrumb">${crumbs}</nav>
          <h1><span class="thin">${thin}</span><span class="bold">${bold}</span></h1>
          ${sub ? `<p class="sub">${sub}</p>` : ""}
          ${after}
        </div>
      </header>`;
  }

  const footer = () => `
    <footer class="footer">
      <p class="big reveal">Sell<b>Better</b></p>
      <p class="lede reveal" style="text-align:center;margin-top:30px">${esc(window.PRINCIPLES[Math.floor(Math.random() * window.PRINCIPLES.length)])}</p>
      <div class="foot-row">
        <span class="label">MBA Guru Academy · Sales &amp; Marketing Mastery</span>
        <span class="row-gap">
          <a class="label" href="#/programme">Programme</a>
          <a class="label" href="#/progress">Progress</a>
          <a class="label" href="https://github.com/anshumantewary-pm/MBA-Guru">GitHub</a>
        </span>
      </div>
    </footer>`;

  function toast(msg) {
    const t = document.querySelector(".toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- home ---------- */
  function home() {
    const st = S.get();
    const n = QUOTES.length;
    app.innerHTML = `
      <section class="hero">
        ${sky()}
        <div class="hero-inner">
          <div class="counter" aria-hidden="true"><span class="cur">1</span><i></i><span>${n}</span></div>
          <h1 class="display"><span class="thin">MBA</span><span class="bold">Guru</span></h1>
          <p class="tagline">Sales &amp; Marketing Mastery — a 12-week, role-based programme with lessons, video, quizzes and practical work on a real product.</p>
          <div class="row-gap" style="justify-content:center;margin-top:10px">
            <a class="pill solid" href="${st.role ? "#/role/" + st.role : "#roles"}">${st.role ? "Continue your track" : "Choose your role"}</a>
            <a class="pill" href="#/programme">The programme</a>
          </div>
          <a class="scroll-cue" href="#quotes" aria-label="Scroll down"></a>
        </div>
        <div class="hero-foot">
          <div class="links"><span class="label">12 weeks</span><span class="label hide-xs">37 modules</span><span class="label hide-xs">4 roles</span></div>
          <div class="links"><a class="label" href="#/progress">My progress</a><span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>
        </div>
      </section>

      <div class="dusk">
        <section class="section center" id="quotes">
          <div class="quote-stage">
            ${QUOTES.map((q, i) => `
              <figure class="quote-slide ${i === 0 ? "on" : ""} ${q.text.length > 110 ? "long" : ""}" data-i="${i}" style="margin:0">
                <p class="headline">${esc(q.lead)} ${esc(q.tail)}</p>
                <blockquote class="lede" style="margin:0">${esc(q.text)}</blockquote>
                <figcaption class="label">— ${esc(q.by)}</figcaption>
              </figure>`).join("")}
          </div>
          <div class="quote-dots" role="tablist" aria-label="Quotes">${QUOTES.map((_, i) => `<button role="tab" aria-label="Quote ${i + 1}" data-q="${i}" class="${i === 0 ? "on" : ""}"></button>`).join("")}</div>
          <a class="pill mt-l" href="#roles">Begin your track</a>
        </section>

        <section class="section" id="roles">
          <div class="wrap">
            <div class="reveal">
              <span class="label eyebrow">Weeks 4 to 11 · Role tracks</span>
              <h2 class="headline">Choose your role.</h2>
              <p class="lede">Everyone shares one <em>foundation</em>, then each role gets its own eight modules.</p>
            </div>
            <div class="roles reveal">
              ${C.roles.map((r) => `
                <a class="role ${st.role === r.id ? "chosen" : ""}" href="#/role/${r.id}" data-role="${r.id}" style="--hue:${r.hue}">
                  <span class="num">${r.numeral}</span>
                  <h3><b>Track ${r.letter}</b>${esc(r.name)}</h3>
                  <p>${esc(r.promise)}</p>
                  <p class="who">For ${esc(r.who.toLowerCase())}.</p>
                  <div class="foot"><span class="label">Day-90 metric: <span class="gold">${esc(r.metric)}</span></span></div>
                  <div class="foot"><span class="pill small">${st.role === r.id ? "Continue" : "Enter track"}</span><span class="label chosen-tag">Your track</span></div>
                </a>`).join("")}
            </div>
          </div>
        </section>

        <div class="cloud-divider" aria-hidden="true"><div class="cloud deep" style="left:-10vw;top:10px;--t:50s"></div><div class="cloud" style="right:-14vw;top:40px;--t:64s;opacity:.6"></div></div>

        <section class="section">
          <div class="wrap">
            <div class="reveal">
              <span class="label eyebrow">Weeks 1 to 3 · Common foundation</span>
              <h2 class="headline">The 4Ps, as one system.</h2>
              <p class="lede"><em>${esc(C.programme.idea)}</em></p>
            </div>
            <div class="ps reveal">
              ${C.fourPs.map((p) => `<div><div class="p">${esc(p.p)}</div><div class="q">“${esc(p.question)}”</div><div class="o">${esc(p.owner)}</div></div>`).join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="wrap split">
            <div class="reveal">
              <span class="label eyebrow">How a week runs</span>
              <div class="big-num">6 hrs</div>
              <p class="lede" style="font-size:clamp(26px,3vw,38px)">a week, for twelve weeks. Learn on Monday, practise on Tuesday, <em>apply it on real work</em> by Friday.</p>
            </div>
            <div class="rows reveal">
              ${C.rhythm.map((r) => `<div class="row"><span class="k">${esc(r.day)}</span><span class="v">${esc(r.what)}</span><span class="t">${esc(r.time)}</span></div>`).join("")}
            </div>
          </div>
        </section>

        <section class="section center">
          <div class="narrow reveal">
            <span class="label eyebrow">Certification</span>
            <h2 class="headline">Earn it with real work.</h2>
            <p class="lede" style="font-size:clamp(26px,3.2vw,40px)">${esc(C.certification)}</p>
          </div>
          <div class="weights wrap reveal" style="text-align:left">
            ${C.assessment.map((a) => `<div class="w"><b>${a.weight}%</b><span class="label">${esc(a.part)}</span><p class="muted" style="margin:10px 0 0;font-size:14px">${esc(a.how)}</p></div>`).join("")}
          </div>
          <a class="pill mt-l" href="#/progress">See my progress</a>
        </section>
      </div>
      ${footer()}`;

    // quote carousel
    const slides = [...app.querySelectorAll(".quote-slide")];
    const dots = [...app.querySelectorAll(".quote-dots button")];
    const cur = app.querySelector(".counter .cur");
    let qi = 0;
    const show = (i) => {
      qi = (i + n) % n;
      slides.forEach((s, k) => s.classList.toggle("on", k === qi));
      dots.forEach((d, k) => { d.classList.remove("on"); void d.offsetWidth; d.classList.toggle("on", k === qi); });
      cur.textContent = qi + 1;
    };
    dots.forEach((d) => d.addEventListener("click", () => { show(+d.dataset.q); restart(); }));
    let timer;
    const restart = () => { clearInterval(timer); timer = setInterval(() => show(qi + 1), 7000); };
    restart();
    cleanup.push(() => clearInterval(timer));

    app.querySelectorAll("[data-role]").forEach((a) => a.addEventListener("click", () => S.set({ role: a.dataset.role })));
  }

  /* ---------- role path ---------- */
  function rolePage(roleId) {
    const r = roleById[roleId];
    if (!r) return notFound();
    if (S.get().role !== roleId) S.set({ role: roleId });
    const st = S.get();
    const mods = path(roleId);
    const done = mods.filter((m) => moduleProgress(m.id).done).length;
    const g = grade(roleId);
    const next = mods.find((m) => !moduleProgress(m.id).done) || mods[0];

    const list = (title, sub, items) => `
      <section class="phase reveal">
        <div class="phase-head"><h2>${title}</h2><span class="label">${sub}</span></div>
        <ol class="mods">
          ${items.map((m) => {
            const p = moduleProgress(m.id);
            return `<li><a class="mod" href="#/module/${m.id}">
              <span class="id">${m.id === "CAP" ? "CAP" : m.id}</span>
              <span><span class="t">${esc(m.title)}</span><span class="o" style="display:block">${esc(m.outcome)}</span></span>
              <span class="meter-col"><span class="wk">${esc(m.week)}</span><span class="meter mt-s" style="display:block"><i style="--v:${p.pct}%"></i></span></span>
              <span class="status ${p.done ? "done" : p.started ? "going" : ""}">${p.done ? "Complete" : p.started ? p.pct + "%" : "Not started"}</span>
            </a></li>`;
          }).join("")}
        </ol>
      </section>`;

    app.innerHTML = `
      ${pageHead({
        crumbs: `<a href="#/">Home</a><span>/</span><span>Track ${r.letter}</span>`,
        thin: esc(r.name),
        bold: "Your 12-week track",
        sub: esc(r.promise),
        after: `<div class="stats">
            <div class="stat"><b>${done}/${mods.length}</b><span>Modules complete</span></div>
            <div class="stat"><b>${g.total}%</b><span>Programme score</span></div>
            <div class="stat"><b>${mods.filter((m) => S.quizPassed(m.id)).length}</b><span>Quizzes passed</span></div>
          </div>
          <div class="row-gap mt-m"><a class="pill solid" href="#/module/${next.id}">${done ? "Continue" : "Start"} · ${next.id}</a><a class="pill" href="#/progress">Progress &amp; certificate</a></div>`
      })}
      <div class="dusk"><div class="section" style="padding-top:60px"><div class="wrap">
        <div class="card reveal">
          <h3>Set up your playbook</h3>
          <p>Program rule one: pick one real product at the start and apply every module to it.</p>
          <div class="split" style="gap:16px;grid-template-columns:repeat(3,1fr)">
            <label><span class="label">Your name (for the certificate)</span><input type="text" data-field="name" value="${esc(st.name)}" placeholder="Your full name"></label>
            <label><span class="label">Your real product</span><input type="text" data-field="product" value="${esc(st.product)}" placeholder="e.g. Billing app for kirana stores"></label>
            <label><span class="label">Stretch goal for week 11</span><input type="text" data-field="stretch" value="${esc(st.stretch)}" placeholder="e.g. 10 meetings from LinkedIn"></label>
          </div>
        </div>
        ${list("Common foundation", "Weeks 1 – 3 · All roles", mods.filter((m) => m.track === "foundation"))}
        ${list(esc(TRACK_NAMES[roleId]), "Weeks 4 – 11", mods.filter((m) => m.track === roleId))}
        ${list("Capstone", "Week 12 · Mixed group of four", [byId.CAP])}
        <div class="joint reveal">
          <span class="label">Joint sessions across tracks · 60 minutes each</span>
          <ul>${C.joint.map((j) => `<li><strong class="gold">Week ${j.week}.</strong> ${esc(j.text)}</li>`).join("")}</ul>
        </div>
      </div></div></div>
      ${footer()}`;

    app.querySelectorAll("[data-field]").forEach((inp) =>
      inp.addEventListener("change", () => { S.set({ [inp.dataset.field]: inp.value.trim() }); toast("Saved"); })
    );
  }

  /* ---------- module ---------- */
  async function modulePage(id, tab = "overview", sub) {
    const m = byId[id];
    if (!m) return notFound();
    const role = roleById[S.get().role];
    const trackLabel = TRACK_NAMES[m.track];
    app.innerHTML = `${pageHead({
      crumbs: `<a href="#/">Home</a><span>/</span>${role && role.id !== m.track ? `<a href="#/role/${role.id}">Track ${role.letter}</a><span>/</span>` : ""}${role && role.id === m.track ? `<a href="#/role/${role.id}">${esc(trackLabel)}</a>` : `<span>${esc(trackLabel)}</span>`}`,
      thin: esc(m.title),
      bold: `${m.id === "CAP" ? "Capstone" : "Module " + m.id} · ${esc(m.week)}`,
      sub: `<strong>Outcome:</strong> ${esc(m.outcome)}`
    })}<nav class="tabs" aria-label="Module sections"></nav><div class="dusk"><div class="mod-body"><div class="wrap" id="mod-body"><div class="loading">Opening the module…</div></div></div></div>${footer()}`;

    const data = await window.Content.loadModule(id);
    if (current !== token) return;
    if (data.lessons) {
      const counts = Object.assign({}, S.get().counts, { [id]: data.lessons.lessons.length });
      S.set({ counts });
    }
    const st = S.get();
    const nLessons = data.lessons ? data.lessons.lessons.length : 0;
    const lessonsDone = (st.lessons[id] || []).length;
    const tabs = [
      ["overview", "Overview", false],
      ["lessons", `Lessons${nLessons ? " · " + nLessons : ""}`, nLessons && lessonsDone >= nLessons],
      ["video", "Video lesson", !!st.video[id]],
      ["quiz", "Quiz", S.quizPassed(id)],
      ["practice", "Practical tasks", !!(st.tasks[id] && st.tasks[id].score)]
    ];
    app.querySelector(".tabs").innerHTML = tabs
      .map(([k, label, ok]) => `<a href="#/module/${id}/${k}" class="${tab === k ? "on" : ""}">${label}${ok ? '<span class="tick">✓</span>' : ""}</a>`).join("");

    const body = app.querySelector("#mod-body");
    if (!data.lessons && !data.video && !data.practice) {
      body.innerHTML = `<div class="empty">This module's content is being prepared. Check back shortly.</div>`;
      return;
    }
    ({ overview, lessons: lessonsView, video: videoView, quiz: quizView, practice: practiceView }[tab] || overview)(body, m, data, sub);
    reveal();
  }

  function overview(body, m, data) {
    const st = S.get();
    const n = data.lessons ? data.lessons.lessons.length : 0;
    const mins = data.lessons ? data.lessons.lessons.reduce((a, l) => a + (l.minutes || 0), 0) : 0;
    const vmins = data.video ? Math.round(data.video.scenes.reduce((a, s) => a + window.Player.sceneSeconds(s), 0) / 60) : 0;
    const q = st.quiz[m.id];
    const p = moduleProgress(m.id);
    const idx = MODS.indexOf(m);
    body.innerHTML = `
      <div class="overview-grid">
        <div class="reveal">
          <span class="label eyebrow">What you will be able to do</span>
          <p class="outcome">${esc(m.outcome)}</p>
          ${st.product ? `<p class="muted">Apply every part of this module to <strong class="gold">${esc(st.product)}</strong>.</p>` : `<p class="muted">Tip: name your real product on your <a class="link" href="#/role/${st.role || "product"}">track page</a> so every task is applied to it.</p>`}
          <ul class="checklist mt-m">
            <li><a href="#/module/${m.id}/lessons">Monday · ${n} lessons <span class="faint">(${mins} min reading)</span></a><span class="state ${(st.lessons[m.id] || []).length >= n && n ? "done" : ""}">${(st.lessons[m.id] || []).length}/${n}</span></li>
            <li><a href="#/module/${m.id}/video">Monday · Video lesson <span class="faint">(${vmins} min)</span></a><span class="state ${st.video[m.id] ? "done" : ""}">${st.video[m.id] ? "Watched" : "To watch"}</span></li>
            <li><a href="#/module/${m.id}/practice">Tuesday · Live workshop</a><span class="state">Cohort</span></li>
            <li><a href="#/module/${m.id}/practice">Wed – Thu · Practical tasks</a><span class="state ${st.tasks[m.id] && st.tasks[m.id].score ? "done" : ""}">${st.tasks[m.id] && st.tasks[m.id].score ? "Scored " + st.tasks[m.id].score + "/4" : "To do"}</span></li>
            <li><a href="#/module/${m.id}/quiz">Friday · Report-back and quiz</a><span class="state ${S.quizPassed(m.id) ? "done" : ""}">${q ? "Best " + q.best + "/5" : "Pass 4/5"}</span></li>
          </ul>
          <div class="row-gap mt-m">
            <a class="pill solid" href="#/module/${m.id}/lessons">${p.started ? "Continue" : "Begin"} module</a>
            ${MODS[idx + 1] ? `<a class="pill" href="#/module/${MODS[idx + 1].id}">Next: ${MODS[idx + 1].id}</a>` : ""}
          </div>
        </div>
        <div class="reveal">
          <div class="card">
            <span class="label">Module progress</span>
            <div class="big-num" style="font-size:96px;margin-top:10px">${p.pct}%</div>
            <span class="meter mt-s" style="display:block"><i style="--v:${p.pct}%"></i></span>
          </div>
          ${data.lessons ? `<div class="card"><h3>Lessons</h3><ol style="padding-left:20px;margin:0">${data.lessons.lessons.map((l, i) => `<li style="margin:6px 0"><a class="link" style="color:var(--cream);text-decoration:none" href="#/module/${m.id}/lessons/${i}">${esc(l.title)}</a></li>`).join("")}</ol></div>` : ""}
        </div>
      </div>`;
  }

  function lessonsView(body, m, data, sub) {
    if (!data.lessons) { body.innerHTML = `<div class="empty">Lessons for this module are coming soon.</div>`; return; }
    const ls = data.lessons.lessons;
    const i = Math.max(0, Math.min(ls.length - 1, parseInt(sub || "0", 10) || 0));
    const l = ls[i];
    const done = S.lessonDone(m.id, i);
    body.innerHTML = `
      <div class="lesson-layout">
        <nav class="lesson-nav" aria-label="Lessons">
          ${ls.map((x, k) => `<a href="#/module/${m.id}/lessons/${k}" class="${k === i ? "on" : ""} ${S.lessonDone(m.id, k) ? "done" : ""}"><span class="n">${k + 1}</span><span>${esc(x.title)}</span></a>`).join("")}
        </nav>
        <article class="prose">
          <div class="label kicker">${m.id} · Lesson ${i + 1} of ${ls.length} · ${l.minutes || 10} min read</div>
          <h2>${fmt(l.title)}</h2>
          ${l.summary ? `<p class="summary">${fmt(l.summary)}</p>` : ""}
          ${(l.blocks || []).map(block).join("")}
          ${l.takeaways && l.takeaways.length ? `<div class="takeaways"><span class="label">Key takeaways</span><ul>${l.takeaways.map((t) => `<li>${fmt(t)}</li>`).join("")}</ul></div>` : ""}
          <div class="lesson-actions">
            ${i > 0 ? `<a class="pill" href="#/module/${m.id}/lessons/${i - 1}">← Previous</a>` : `<span></span>`}
            <button class="pill solid" data-complete>${done ? "Completed ✓ · " : "Mark complete · "}${i < ls.length - 1 ? "Next lesson" : "Watch the video"}</button>
          </div>
        </article>
      </div>`;
    body.querySelector("[data-complete]").addEventListener("click", () => {
      S.markLesson(m.id, i, true);
      location.hash = i < ls.length - 1 ? `#/module/${m.id}/lessons/${i + 1}` : `#/module/${m.id}/video`;
    });
    window.scrollTo({ top: document.querySelector(".tabs").offsetTop - 10, behavior: "instant" in window ? "instant" : "auto" });
  }

  function videoView(body, m, data) {
    if (!data.video) { body.innerHTML = `<div class="empty">The video lesson for this module is coming soon.</div>`; return; }
    body.innerHTML = `
      <div class="narrow" style="max-width:1080px">
        <span class="label eyebrow">Video lesson · ${m.id}</span>
        <h2 class="headline" style="margin-bottom:28px">${fmt(data.video.title)}</h2>
        <div id="player"></div>
        <p class="faint mt-m" style="font-size:13.5px">Narration uses your browser's built-in voice. Turn VOICE off to watch with captions only; use the space bar to pause and the arrow keys to move between scenes.</p>
        <div class="row-gap mt-m"><a class="pill" href="#/module/${m.id}/lessons">Lessons</a><a class="pill solid" href="#/module/${m.id}/practice">Go to practical tasks</a></div>
      </div>`;
    const p = window.Player.mount(body.querySelector("#player"), data.video, {
      moduleId: m.id,
      label: m.id === "CAP" ? "Capstone" : `Module ${m.id} · ${TRACK_NAMES[m.track]}`,
      onComplete: () => { S.markVideo(m.id); toast("Video complete"); }
    });
    cleanup.push(() => p.destroy());
  }

  function quizView(body, m, data) {
    if (!data.practice) { body.innerHTML = `<div class="empty">The quiz for this module is coming soon.</div>`; return; }
    const quiz = data.practice.quiz;
    const picks = new Array(quiz.length).fill(null);
    const prev = S.get().quiz[m.id];

    const draw = (result) => {
      body.innerHTML = `
        <div class="quiz">
          <span class="label eyebrow">Friday quiz · ${m.id}</span>
          <h2 class="headline">Five questions. Pass with four.</h2>
          <p class="muted">One retake counts toward certification; after that, retakes are open-book practice. ${prev ? `Attempts so far: ${prev.attempts}. Best: ${prev.best}/5.` : ""}</p>
          ${result ? `<div class="result ${result.score >= 4 ? "pass" : "fail"}">
              <div class="score">${result.score}/5</div>
              <div><h3 class="serif" style="font-size:30px;margin:0 0 6px;font-weight:400">${result.score >= 4 ? "Passed. Well done." : "Not yet. Review and retake."}</h3>
              <p class="muted" style="margin:0">${result.q.attempts > 2 ? "This attempt was practice; your certification score is " + result.q.official + "/5." : "Counted toward certification: " + result.q.official + "/5."} Read each explanation below, then bring the questions you missed to the next session.</p></div>
            </div>` : ""}
          ${quiz.map((q, k) => `
            <div class="q">
              <div class="qn">Question ${k + 1}</div>
              <h3>${fmt(q.q)}</h3>
              <div class="opts">
                ${q.options.map((o, j) => {
                  let cls = picks[k] === j ? "picked" : "";
                  if (result) cls = j === q.answer ? "right" : picks[k] === j ? "wrong" : "";
                  return `<button class="opt ${cls}" data-q="${k}" data-o="${j}" ${result ? "disabled" : ""}><span class="l">${"ABCD"[j]}</span><span>${fmt(o)}</span></button>`;
                }).join("")}
              </div>
              ${result ? `<div class="explain"><strong class="gold">${picks[k] === q.answer ? "Correct." : "Answer: " + "ABCD"[q.answer] + "."}</strong> ${fmt(q.explain)}</div>` : ""}
            </div>`).join("")}
          <div class="row-gap mt-m">
            ${result ? `<button class="pill solid" data-retake>Retake quiz</button><a class="pill" href="#/module/${m.id}/practice">Practical tasks</a>` : `<button class="pill solid" data-submit ${picks.includes(null) ? "disabled" : ""}>Submit answers</button><span class="faint" style="font-size:13px">${picks.filter((p) => p !== null).length} of ${quiz.length} answered</span>`}
          </div>
        </div>`;
      body.querySelectorAll(".opt:not([disabled])").forEach((b) => b.addEventListener("click", () => { picks[+b.dataset.q] = +b.dataset.o; draw(); }));
      const sub = body.querySelector("[data-submit]");
      if (sub) sub.addEventListener("click", () => {
        const score = quiz.reduce((a, q, k) => a + (picks[k] === q.answer ? 1 : 0), 0);
        const q = S.recordQuiz(m.id, score);
        draw({ score, q });
        window.scrollTo({ top: document.querySelector(".tabs").offsetTop - 10 });
      });
      const re = body.querySelector("[data-retake]");
      if (re) re.addEventListener("click", () => { picks.fill(null); draw(); });
    };
    draw();
  }

  function practiceView(body, m, data) {
    if (!data.practice) { body.innerHTML = `<div class="empty">Practical tasks for this module are coming soon.</div>`; return; }
    const p = data.practice;
    const t = S.task(m.id);
    const st = S.get();
    body.innerHTML = `
      <div class="overview-grid" style="grid-template-columns:1.5fr 1fr">
        <div>
          <span class="label eyebrow">Wednesday – Thursday · Apply it on real work</span>
          <h2 class="headline" style="margin-bottom:10px">Practical tasks</h2>
          <p class="muted" style="margin-bottom:30px">${st.product ? `Do every task on <strong class="gold">${esc(st.product)}</strong>.` : "Do every task on your one real product."} Your notes are saved in this browser and collected into your playbook.</p>
          ${p.tasks.map((task, k) => `
            <div class="task reveal">
              <div class="task-head"><h3>${fmt(task.title)}</h3>${task.time ? `<span class="label time">${esc(task.time)}</span>` : ""}</div>
              <ul class="steps-check">${(task.steps || []).map((s, j) => `<li><label><input type="checkbox" data-step="${k}-${j}" ${t.steps[k + "-" + j] ? "checked" : ""}><span>${fmt(s)}</span></label></li>`).join("")}</ul>
              ${task.deliverable ? `<div class="deliverable"><span class="label">Deliverable for your playbook</span>${fmt(task.deliverable)}</div>` : ""}
              ${task.checks && task.checks.length ? `<ul class="muted" style="font-size:14.5px">${task.checks.map((c) => `<li>${fmt(c)}</li>`).join("")}</ul>` : ""}
              <label><span class="label">Your playbook notes</span><textarea rows="5" data-note="${k}" placeholder="Write what you did, the real data you used and what changed.">${esc(t.notes[k] || "")}</textarea></label>
              <span class="saved" data-saved="${k}">Saved</span>
            </div>`).join("")}
          <div class="task">
            <h3>Score your work</h3>
            <p class="muted">Rate yourself honestly on the practical task rubric. Your facilitator's score replaces this in a live cohort.</p>
            ${C.taskRubric.map((r) => `<p style="margin:8px 0"><strong class="gold">${r.score}</strong> <span class="muted">${esc(r.text)}</span></p>`).join("")}
            <div class="scale" data-taskscore>${[1, 2, 3, 4].map((v) => `<button class="${t.score === v ? "on" : ""}" data-v="${v}">${v}</button>`).join("")}</div>
          </div>
        </div>
        <aside>
          ${p.workshop ? `<div class="card reveal"><span class="label">Tuesday · Live workshop</span><h3 class="mt-s">${fmt(p.workshop.title)}</h3><p class="faint" style="font-size:13px">${esc(p.workshop.format || "")}</p><ol style="padding-left:20px">${(p.workshop.steps || []).map((s) => `<li style="margin:8px 0">${fmt(s)}</li>`).join("")}</ol></div>` : ""}
          ${p.reportBack ? `<div class="card reveal"><span class="label">Friday · Report-back</span><p class="mt-s">${fmt(p.reportBack)}</p></div>` : ""}
          ${p.resources && p.resources.length ? `<div class="card reveal"><span class="label">Read or watch</span><ul style="padding-left:18px">${p.resources.map((r) => `<li style="margin:8px 0">${fmt(r)}</li>`).join("")}</ul></div>` : ""}
          <div class="card reveal"><span class="label">Then</span><p class="mt-s">Take the Friday quiz once the tasks are done.</p><a class="pill small" href="#/module/${m.id}/quiz">Go to quiz</a></div>
        </aside>
      </div>`;

    body.querySelectorAll("[data-step]").forEach((c) => c.addEventListener("change", () => S.toggleStep(m.id, c.dataset.step, c.checked)));
    body.querySelectorAll("[data-note]").forEach((ta) => {
      let h;
      ta.addEventListener("input", () => {
        clearTimeout(h);
        h = setTimeout(() => {
          S.setNote(m.id, ta.dataset.note, ta.value);
          const s = body.querySelector(`[data-saved="${ta.dataset.note}"]`);
          s.classList.add("show");
          setTimeout(() => s.classList.remove("show"), 1200);
        }, 500);
      });
    });
    body.querySelectorAll("[data-taskscore] button").forEach((b) => b.addEventListener("click", () => {
      S.setTaskScore(m.id, +b.dataset.v);
      body.querySelectorAll("[data-taskscore] button").forEach((x) => x.classList.toggle("on", x === b));
      toast("Task scored " + b.dataset.v + "/4");
    }));
  }

  /* ---------- progress & certificate ---------- */
  function progressPage() {
    const st = S.get();
    const roleId = st.role;
    if (!roleId) {
      app.innerHTML = `${pageHead({ crumbs: `<a href="#/">Home</a><span>/</span><span>Progress</span>`, thin: "Your progress", bold: "Choose a role first", sub: "Your progress, scores and certificate appear here once you pick a track." , after: `<a class="pill solid mt-m" href="#roles">Choose your role</a>` })}${footer()}`;
      return;
    }
    const r = roleById[roleId];
    const g = grade(roleId);
    const mods = path(roleId);
    const scale = (key, val, kind) => `<div class="scale" data-${kind}="${esc(key)}">${[1, 2, 3, 4].map((v) => `<button class="${val === v ? "on" : ""}" data-v="${v}">${v}</button>`).join("")}</div>`;
    const date = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

    app.innerHTML = `
      ${pageHead({
        crumbs: `<a href="#/">Home</a><span>/</span><a href="#/role/${r.id}">Track ${r.letter}</a><span>/</span><span>Progress</span>`,
        thin: "Progress",
        bold: "& certification",
        sub: esc(C.certification)
      })}
      <div class="dusk"><div class="section" style="padding-top:60px"><div class="wrap">
        <div class="split reveal" style="align-items:center">
          <div class="ring" style="--v:${g.total}"><b>${g.total}%</b></div>
          <div>
            <h2 class="headline">${g.certified ? "You are certified." : "Keep going."}</h2>
            <ul class="checklist mt-m">
              <li><span>Overall score of 70% or more</span><span class="state ${g.total >= 70 ? "done" : ""}">${g.total}%</span></li>
              <li><span>Every quiz passed (4 out of 5)</span><span class="state ${g.allQuizzes ? "done" : ""}">${mods.filter((m) => S.quizPassed(m.id)).length}/${mods.length}</span></li>
              <li><span>Capstone average of 3 or more</span><span class="state ${g.capAvg >= 3 ? "done" : ""}">${g.capAvg.toFixed(1)}/4</span></li>
            </ul>
          </div>
        </div>

        <div class="weights reveal">
          <div class="w"><b>${g.parts.quiz.toFixed(1)}</b><span>of 15 · Quizzes</span></div>
          <div class="w"><b>${g.parts.tasks.toFixed(1)}</b><span>of 40 · Practical tasks</span></div>
          <div class="w"><b>${g.parts.roleplay.toFixed(1)}</b><span>of 15 · Role-plays</span></div>
          <div class="w"><b>${g.parts.capstone.toFixed(1)}</b><span>of 30 · Capstone</span></div>
        </div>

        <section class="phase reveal">
          <div class="phase-head"><h2>Modules</h2><span class="label">${esc(r.name)} path</span></div>
          <ol class="mods">${mods.map((m) => { const p = moduleProgress(m.id); const q = st.quiz[m.id]; const t = st.tasks[m.id]; return `<li><a class="mod" href="#/module/${m.id}"><span class="id">${m.id}</span><span class="t" style="font-size:22px">${esc(m.title)}</span><span class="meter-col faint" style="font-size:13px">Quiz ${q ? q.official + "/5" : "—"} · Task ${t && t.score ? t.score + "/4" : "—"}</span><span class="status ${p.done ? "done" : p.started ? "going" : ""}">${p.pct}%</span></a></li>`; }).join("")}</ol>
        </section>

        <div class="split mt-l">
          <section class="reveal">
            <span class="label eyebrow">Role-play scorecard · 15%</span>
            <h2 class="serif" style="font-size:40px;font-weight:400;margin:0">Live role-plays</h2>
            <p class="muted">Facilitator plus two peers score each behaviour from 1 to 4. Record the agreed scores here.</p>
            <table class="scorecard">${C.roleplay.map((x) => `<tr><td>${esc(x.behaviour)}</td><td>${esc(x.good)}</td><td>${scale(x.behaviour, st.roleplay[x.behaviour], "rp")}</td></tr>`).join("")}</table>
          </section>
          <section class="reveal">
            <span class="label eyebrow">Capstone rubric · 30%</span>
            <h2 class="serif" style="font-size:40px;font-weight:400;margin:0">Panel scores</h2>
            <p class="muted">A panel of three scores each criterion from 1 to 4. Record the panel's scores here.</p>
            <table class="scorecard">${C.capstoneRubric.map((x) => `<tr><td>${esc(x.criterion)}</td><td><strong class="gold">4:</strong> ${esc(x.four)}<br><span class="faint">1: ${esc(x.one)}</span></td><td>${scale(x.criterion, st.capstone[x.criterion], "cap")}</td></tr>`).join("")}</table>
          </section>
        </div>

        <section class="mt-l reveal">
          <div class="phase-head"><h2>Your playbook</h2><span class="label">All your task notes in one document</span></div>
          <div class="row-gap mt-m no-print">
            <button class="pill solid" data-dl>Download playbook (.md)</button>
            <button class="pill" data-backup>Back up progress</button>
            <label class="pill" style="cursor:pointer">Restore backup<input type="file" accept="application/json" data-restore hidden></label>
            <button class="pill" data-reset>Reset all progress</button>
          </div>
        </section>

        <section class="mt-l reveal">
          <div class="phase-head"><h2>Certificate</h2><span class="label">${g.certified ? "Ready to print" : "Unlocks when all three conditions are met"}</span></div>
          <div class="certificate ${g.certified ? "" : "locked"}">
            <div class="c-brand">MBA GURU ACADEMY</div>
            <h2>Certificate of Mastery</h2>
            <p>This certifies that</p>
            <div class="c-name">${esc(st.name || "Your Name")}</div>
            <p>has completed the 12-week <strong>Sales &amp; Marketing Mastery</strong> programme, ${esc(r.name)} track, applying every module to ${esc(st.product || "a real product")}, with an overall score of ${g.total}%.</p>
            <div class="c-foot"><div><b>${date}</b>Date</div><div><b>Track ${r.letter}</b>${esc(r.short)}</div><div><b>${g.total}%</b>Score</div></div>
          </div>
          ${g.certified ? `<div class="row-gap mt-m no-print" style="justify-content:center"><button class="pill solid" onclick="window.print()">Print certificate</button></div>` : ""}
        </section>
      </div></div></div>
      ${footer()}`;

    const bindScale = (kind, fn) => app.querySelectorAll(`[data-${kind}]`).forEach((row) => row.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => { fn(row.dataset[kind], +b.dataset.v); route(); })));
    bindScale("rp", (k, v) => S.setRoleplay(k, v));
    bindScale("cap", (k, v) => S.setCapstone(k, v));

    app.querySelector("[data-dl]").addEventListener("click", () => downloadPlaybook(roleId));
    app.querySelector("[data-backup]").addEventListener("click", () => download("mba-guru-progress.json", S.export(), "application/json"));
    app.querySelector("[data-restore]").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((txt) => { try { S.import(txt); toast("Progress restored"); route(); } catch (err) { toast("That file is not a valid backup"); } });
    });
    app.querySelector("[data-reset]").addEventListener("click", () => { if (confirm("Reset all progress in this browser? This cannot be undone.")) { S.reset(); location.hash = "#/"; } });
  }

  function download(name, text, type) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  async function downloadPlaybook(roleId) {
    const st = S.get();
    const mods = path(roleId);
    let md = `# ${st.product || "Product"} — Sales & Marketing Playbook\n\n${st.name ? "Prepared by " + st.name + " · " : ""}${roleById[roleId].name} track · MBA Guru Academy\n\n`;
    if (st.stretch) md += `**Stretch goal:** ${st.stretch}\n\n`;
    for (const m of mods) {
      const data = await window.Content.load(m.id, "practice").catch(() => null);
      const t = st.tasks[m.id];
      md += `## ${m.id}. ${m.title}\n\n*Outcome:* ${m.outcome}\n\n`;
      if (!data) { md += "_Content not available._\n\n"; continue; }
      data.tasks.forEach((task, k) => {
        md += `### ${task.title}\n\n`;
        if (task.deliverable) md += `*Deliverable:* ${task.deliverable}\n\n`;
        md += ((t && t.notes[k]) || "_No notes yet._") + "\n\n";
      });
      if (t && t.score) md += `*Self-score:* ${t.score}/4\n\n`;
    }
    download(`${(st.product || "playbook").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-playbook.md`, md, "text/markdown");
  }

  /* ---------- programme ---------- */
  function programmePage() {
    app.innerHTML = `
      ${pageHead({ crumbs: `<a href="#/">Home</a><span>/</span><span>Programme</span>`, thin: "The programme", bold: "12 weeks · 4 roles · 37 modules", sub: esc(C.programme.summary) })}
      <div class="dusk"><div class="section" style="padding-top:60px"><div class="wrap">
        <div class="split reveal">
          <div><span class="label eyebrow">Programme rules</span><ol class="prose" style="padding-left:22px">${C.rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ol></div>
          <div><span class="label eyebrow">Weekly rhythm</span><div class="rows">${C.rhythm.map((r) => `<div class="row"><span class="k">${esc(r.day)}</span><span class="v">${esc(r.what)}</span><span class="t">${esc(r.time)}</span></div>`).join("")}</div></div>
        </div>
        ${["foundation", ...C.roles.map((r) => r.id), "capstone"].map((tr) => `
          <section class="phase reveal">
            <div class="phase-head"><h2>${esc(TRACK_NAMES[tr])}</h2><span class="label">${tr === "foundation" ? "Weeks 1 – 3" : tr === "capstone" ? "Week 12" : "Weeks 4 – 11"}</span></div>
            <ol class="mods">${MODS.filter((m) => m.track === tr).map((m) => `<li><a class="mod" href="#/module/${m.id}"><span class="id">${m.id}</span><span><span class="t">${esc(m.title)}</span><span class="o" style="display:block">${esc(m.outcome)}</span></span><span class="meter-col wk">${esc(m.week)}</span><span class="status">Open →</span></a></li>`).join("")}</ol>
          </section>`).join("")}
        <section class="phase reveal">
          <div class="phase-head"><h2>Assessment</h2><span class="label">How certification works</span></div>
          <div class="rows">${C.assessment.map((a) => `<div class="row"><span class="k">${esc(a.part)}</span><span class="v">${esc(a.how)}</span><span class="t">${a.weight}%</span></div>`).join("")}</div>
          <div class="split mt-l">
            <div><span class="label eyebrow">Practical task rubric</span><div class="rows">${C.taskRubric.map((r) => `<div class="row" style="grid-template-columns:40px 1fr"><span class="k gold">${r.score}</span><span class="v">${esc(r.text)}</span></div>`).join("")}</div></div>
            <div><span class="label eyebrow">Role-play scorecard</span><div class="rows">${C.roleplay.map((r) => `<div class="row" style="grid-template-columns:140px 1fr"><span class="k" style="font-size:20px">${esc(r.behaviour)}</span><span class="v">${esc(r.good)}</span></div>`).join("")}</div></div>
          </div>
        </section>
        <section class="phase reveal">
          <div class="phase-head"><h2>The capstone playbook</h2><span class="label">Eight parts · one per lead role</span></div>
          <div class="rows">${C.playbook.map((p, i) => `<div class="row"><span class="k">${i + 1}. ${esc(p.part)}</span><span class="v">${esc(p.contains)}</span><span class="t">${esc(p.lead)}</span></div>`).join("")}</div>
        </section>
      </div></div></div>
      ${footer()}`;
  }

  function notFound() {
    app.innerHTML = `${pageHead({ crumbs: `<a href="#/">Home</a>`, thin: "Lost at sea", bold: "Page not found", sub: "That page doesn't exist.", after: `<a class="pill solid mt-m" href="#/">Back home</a>` })}`;
  }

  /* ---------- router ---------- */
  let cleanup = [];
  let token = 0, current = 0;
  function route() {
    cleanup.forEach((fn) => { try { fn(); } catch (e) { /* ignore */ } });
    cleanup = [];
    current = ++token;
    const h = location.hash.replace(/^#\/?/, "");
    if (h === "roles" || h === "quotes") { // in-page anchors on home
      if (!document.getElementById(h)) home();
      setTimeout(() => { const el = document.getElementById(h); if (el) el.scrollIntoView(); }, 60);
      return reveal();
    }
    const [page, a, b, c] = h.split("/");
    document.querySelectorAll(".nav a").forEach((n) => n.classList.toggle("active", n.getAttribute("href") === "#/" + (page || "")));
    closeMenu();
    if (!page) home();
    else if (page === "role") rolePage(a);
    else if (page === "module") modulePage(a, b, c);
    else if (page === "progress") progressPage();
    else if (page === "programme") programmePage();
    else notFound();
    if (page !== "module" || !b) window.scrollTo(0, 0);
    document.title = page === "module" && byId[a] ? `${a} · ${byId[a].title} — MBA Guru` : "MBA Guru Academy";
    reveal();
  }

  /* ---------- chrome ---------- */
  let io;
  function reveal() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")); return; }
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach((e) => io.observe(e));
  }

  const bar = document.querySelector(".topbar");
  window.addEventListener("scroll", () => bar.classList.toggle("scrolled", window.scrollY > 40), { passive: true });
  const menuBtn = document.querySelector(".menu-btn"), nav = document.querySelector(".nav");
  function closeMenu() { nav.classList.remove("open"); menuBtn.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); menuBtn.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href="#roles"], a[href="#quotes"]');
    if (!a) return;
    e.preventDefault();
    const go = () => { const el = document.getElementById(a.getAttribute("href").slice(1)); if (el) el.scrollIntoView({ behavior: "smooth" }); };
    if (!document.getElementById("roles")) { location.hash = "#/"; setTimeout(go, 120); } else go();
  });

  window.addEventListener("hashchange", route);
  route();
})();
