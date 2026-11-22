/* Loads module content files on demand and renders lesson blocks to HTML. */
(function () {
  const cache = {};
  const store = {};
  const waiting = {};

  // Content files call Academy.add(id, kind, data).
  window.Academy = {
    add(id, kind, data) {
      (store[id] = store[id] || {})[kind] = data;
      const key = id + "." + kind;
      if (waiting[key]) { waiting[key].forEach((fn) => fn(data)); delete waiting[key]; }
    }
  };

  function load(id, kind) {
    const key = id + "." + kind;
    if (store[id] && store[id][kind]) return Promise.resolve(store[id][kind]);
    if (cache[key]) return cache[key];
    cache[key] = new Promise((resolve, reject) => {
      (waiting[key] = waiting[key] || []).push(resolve);
      const s = document.createElement("script");
      s.src = "content/modules/" + key + ".js";
      s.async = true;
      s.onerror = () => { delete cache[key]; reject(new Error("Content for " + key + " is not available yet.")); };
      document.head.appendChild(s);
    });
    return cache[key];
  }

  const loadModule = (id) =>
    Promise.all(["lessons", "video", "practice"].map((k) => load(id, k).catch(() => null)))
      .then(([lessons, video, practice]) => ({ lessons, video, practice }));

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Inline formatting: **bold** and *italic* only, applied after escaping.
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
  }

  const TONES = { example: "Worked example", tip: "Tip", warn: "Watch out", india: "India context" };

  function block(b) {
    switch (b.type) {
      case "p": return `<p>${fmt(b.text)}</p>`;
      case "h": return `<h3>${fmt(b.text)}</h3>`;
      case "list": return `<ul>${(b.items || []).map((i) => `<li>${fmt(i)}</li>`).join("")}</ul>`;
      case "steps": return `<ol class="steps">${(b.items || []).map((i) => `<li><span>${fmt(i)}</span></li>`).join("")}</ol>`;
      case "callout": {
        const tone = TONES[b.tone] ? b.tone : "example";
        return `<aside class="callout ${tone}"><span class="label">${esc(b.title || TONES[tone])}</span><p>${fmt(b.text)}</p></aside>`;
      }
      case "table":
        return `<div class="table-wrap"><table><thead><tr>${(b.head || []).map((h) => `<th>${fmt(h)}</th>`).join("")}</tr></thead><tbody>${(b.rows || [])
          .map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      default: return "";
    }
  }

  const words = (lesson) => JSON.stringify(lesson.blocks || []).split(/\s+/).length;

  window.Content = { load, loadModule, esc, fmt, block, words };
})();
