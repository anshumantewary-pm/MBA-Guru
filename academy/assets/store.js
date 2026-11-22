/* Learner progress, kept in this browser. Every read and write is guarded so the app still works
   when storage is blocked (private windows, previews). */
(function () {
  const KEY = "mbaguru.academy.v1";
  const blank = () => ({
    name: "",
    product: "",
    role: null,
    stretch: "",
    lessons: {},   // { F1: [0, 2, 3] }
    video: {},     // { F1: true }
    quiz: {},      // { F1: { best: 4, attempts: 1, official: 4 } }
    tasks: {},     // { F1: { steps: { "0-1": true }, score: 3, notes: { 0: "..." } } }
    roleplay: {},  // { Opening: 3 }
    capstone: {},  // { "Customer insight": 3 }
    started: null
  });

  let state = blank();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* storage unavailable: keep in-memory state */ }

  const listeners = new Set();
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    listeners.forEach((fn) => fn(state));
  }

  const Store = {
    get: () => state,
    on: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    set(patch) { Object.assign(state, patch); if (!state.started) state.started = new Date().toISOString(); save(); },

    lessonDone(id, i) { return (state.lessons[id] || []).includes(i); },
    markLesson(id, i, done = true) {
      const s = new Set(state.lessons[id] || []);
      done ? s.add(i) : s.delete(i);
      state.lessons[id] = [...s].sort((a, b) => a - b);
      save();
    },
    markVideo(id) { if (!state.video[id]) { state.video[id] = true; save(); } },

    recordQuiz(id, score) {
      const q = state.quiz[id] || { best: 0, attempts: 0, official: 0 };
      q.attempts += 1;
      // The syllabus allows one retake: the first two attempts count, later ones are practice.
      if (q.attempts <= 2) q.official = Math.max(q.official, score);
      q.best = Math.max(q.best, score);
      q.last = score;
      state.quiz[id] = q;
      save();
      return q;
    },
    quizPassed(id) { const q = state.quiz[id]; return !!q && q.official >= 4; },

    task(id) { return (state.tasks[id] = state.tasks[id] || { steps: {}, score: 0, notes: {} }); },
    toggleStep(id, key, on) { this.task(id).steps[key] = on; save(); },
    setTaskScore(id, score) { this.task(id).score = score; save(); },
    setNote(id, idx, text) { this.task(id).notes[idx] = text; save(); },

    setRoleplay(b, v) { state.roleplay[b] = v; save(); },
    setCapstone(c, v) { state.capstone[c] = v; save(); },

    reset() { state = blank(); save(); },
    export() { return JSON.stringify(state, null, 2); },
    import(json) { state = Object.assign(blank(), JSON.parse(json)); save(); }
  };

  window.Store = Store;
})();
