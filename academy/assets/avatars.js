/* Profession avatars: small illustrated portraits drawn as inline SVG, three per role.
   Each role's avatars share its gear (a PM's lanyard, a sales manager's headset and tie, a
   marketer's scarf, a digital marketer's headphones) and a badge with the role's icon. */
(function () {
  const SKIN = { a: "#f1c7a0", b: "#d9a47a", c: "#b97c55", d: "#8d5a3b" };
  const HAIR = { black: "#1f1410", brown: "#4a2a1a", grey: "#9a8f88", dark: "#2c1a12" };

  // id, label, skin, hair style, hair colour, top colour, extras
  const LIST = {
    product: [
      { id: "product-1", label: "Product lead", skin: "b", hair: "short", hc: "black", top: "#3e5b78", glasses: true },
      { id: "product-2", label: "Product owner", skin: "a", hair: "bun", hc: "brown", top: "#6b4f8a" },
      { id: "product-3", label: "Founder's office", skin: "c", hair: "curly", hc: "dark", top: "#2f6d64" }
    ],
    sales: [
      { id: "sales-1", label: "Area sales manager", skin: "c", hair: "sidepart", hc: "black", top: "#2b2f45" },
      { id: "sales-2", label: "Key account manager", skin: "b", hair: "long", hc: "black", top: "#7a2f2a" },
      { id: "sales-3", label: "Regional head", skin: "d", hair: "turban", hc: "#b8542c", top: "#33363d", beard: true }
    ],
    marketing: [
      { id: "marketing-1", label: "Brand manager", skin: "a", hair: "long", hc: "brown", top: "#a3573b" },
      { id: "marketing-2", label: "Product marketer", skin: "c", hair: "short", hc: "dark", top: "#5a6b3a", glasses: true },
      { id: "marketing-3", label: "Trade marketing", skin: "b", hair: "bun", hc: "black", top: "#8a4b6b" }
    ],
    digital: [
      { id: "digital-1", label: "Performance marketer", skin: "b", hair: "curly", hc: "black", top: "#1f5d7a" },
      { id: "digital-2", label: "Content creator", skin: "d", hair: "long", hc: "dark", top: "#7a3f86" },
      { id: "digital-3", label: "SEO and CRM", skin: "a", hair: "sidepart", hc: "grey", top: "#3d6b4a", glasses: true }
    ]
  };
  const HUE = { product: "#c8743a", sales: "#b2412e", marketing: "#d49a4a", digital: "#8e5a3c" };
  const all = Object.values(LIST).flat();
  const byId = Object.fromEntries(all.map((a) => [a.id, a]));
  const roleOf = (id) => (id || "").split("-")[0];

  const hairBack = (s, c) => ({
    long: `<path d="M36 50 Q34 24 60 23 Q86 24 84 50 L86 86 Q60 94 34 86 Z" fill="${c}"/>`,
    bun: `<circle cx="60" cy="22" r="9" fill="${c}"/>`,
    curly: ""
  }[s] || "");

  const hairFront = (s, c) => ({
    short: `<path d="M39 50 Q37 26 60 25 Q83 26 81 50 Q78 37 60 36 Q44 36 39 50 Z" fill="${c}"/>`,
    sidepart: `<path d="M39 50 Q37 25 62 25 Q84 27 81 49 Q77 35 66 35 Q58 40 44 39 Q40 43 39 50 Z" fill="${c}"/>`,
    long: `<path d="M39 52 Q38 27 60 26 Q82 27 81 52 Q76 36 62 34 Q54 42 39 52 Z" fill="${c}"/>`,
    bun: `<path d="M39 50 Q38 28 60 27 Q82 28 81 50 Q77 37 60 36 Q43 37 39 50 Z" fill="${c}"/>`,
    curly: [[42, 40], [48, 31], [57, 27], [66, 28], [74, 33], [79, 41], [40, 48], [80, 48]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="${c}"/>`).join(""),
    turban: `<path d="M37 46 Q36 21 60 20 Q84 21 83 46 Q73 37 60 39 Q47 37 37 46 Z" fill="${c}"/><path d="M42 37 Q60 26 79 38 M44 30 Q60 24 76 31" stroke="rgba(0,0,0,.22)" stroke-width="2" fill="none"/>`
  }[s] || "");

  // Role gear drawn over the body and head.
  const gear = {
    product: (t) => `<path d="M50 88 L60 104 L70 88" stroke="#f2cc95" stroke-width="2.5" fill="none"/><rect x="55" y="103" width="10" height="13" rx="2" fill="#fbf5ec"/><rect x="57" y="106" width="6" height="2" fill="${t}"/>`,
    sales: () => `<path d="M53 86 L60 92 L67 86 L64 84 L56 84 Z" fill="#fbf5ec"/><path d="M58 91 L62 91 L64 112 L60 117 L56 112 Z" fill="#c9a24a"/>
      <path d="M37 50 Q37 22 60 22 Q83 22 83 50" stroke="#2a2a2a" stroke-width="3.5" fill="none"/><rect x="33" y="45" width="7" height="13" rx="3" fill="#2a2a2a"/><rect x="80" y="45" width="7" height="13" rx="3" fill="#2a2a2a"/><path d="M36 57 Q38 68 50 68" stroke="#2a2a2a" stroke-width="2" fill="none"/><circle cx="51" cy="68" r="2.4" fill="#2a2a2a"/>`,
    marketing: () => `<path d="M40 90 Q60 100 80 90 Q78 98 66 101 L70 116 L62 116 L60 102 Q48 100 40 90 Z" fill="#f2cc95"/>`,
    digital: () => `<path d="M37 60 Q36 18 60 18 Q84 18 83 60" stroke="#20242b" stroke-width="4" fill="none"/><path d="M60 90 L60 104" stroke="#20242b" stroke-width="2"/><rect x="31" y="49" width="10" height="16" rx="4" fill="#20242b"/><rect x="79" y="49" width="10" height="16" rx="4" fill="#20242b"/>`
  };

  // Role badge icons, drawn in a 24x24 box.
  const icon = {
    product: `<path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M9.5 19h5M10.5 21.5h3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`,
    sales: `<circle cx="12" cy="12" r="8.5" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="1.4" fill="#fff"/>`,
    marketing: `<path d="M4 10v4h3l7 4V6L7 10z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M17 9.5q2 2.5 0 5M19.5 7.5q3.5 4.5 0 9" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
    digital: `<rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M9.5 16v-3M12 16v-6M14.5 16v-4.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`
  };

  let uid = 0;
  function svg(id, opts = {}) {
    const a = byId[id] || all[0];
    const role = roleOf(a.id);
    const skin = SKIN[a.skin], hc = HAIR[a.hc] || a.hc, hue = HUE[role];
    const g = "av" + ++uid;
    const badge = opts.badge === false ? "" :
      `<g transform="translate(84 84)"><circle cx="14" cy="14" r="15" fill="${hue}" stroke="#2a0c07" stroke-width="3"/><g transform="translate(2 2)">${icon[role]}</g></g>`;
    return `<svg class="avatar-svg" viewBox="0 0 120 120" role="img" aria-label="${a.label} avatar"${opts.size ? ` width="${opts.size}" height="${opts.size}"` : ""}>
      <defs><radialGradient id="${g}" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="${hue}" stop-opacity=".95"/><stop offset="1" stop-color="#43130b"/></radialGradient>
      <clipPath id="${g}c"><circle cx="60" cy="60" r="58"/></clipPath></defs>
      <circle cx="60" cy="60" r="58" fill="url(#${g})"/>
      <g clip-path="url(#${g}c)">
        ${hairBack(a.hair, hc)}
        <path d="M18 122 Q20 90 46 86 L74 86 Q100 90 102 122 Z" fill="${a.top}"/>
        <rect x="53" y="68" width="14" height="20" rx="6" fill="${skin}"/>
        <ellipse cx="60" cy="50" rx="21" ry="23" fill="${skin}"/>
        <ellipse cx="39.5" cy="52" rx="3.5" ry="5" fill="${skin}"/><ellipse cx="80.5" cy="52" rx="3.5" ry="5" fill="${skin}"/>
        ${a.beard ? `<path d="M40 54 Q42 76 60 77 Q78 76 80 54 Q76 66 60 66 Q44 66 40 54 Z" fill="${hc === HAIR.grey ? "#bbb" : "#1f1410"}"/>` : ""}
        <circle cx="52" cy="51" r="2.2" fill="#2a1a12"/><circle cx="68" cy="51" r="2.2" fill="#2a1a12"/>
        <path d="M47 45 Q52 42.5 56 45 M64 45 Q68 42.5 73 45" stroke="#2a1a12" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M54 61 Q60 66 66 61" stroke="#7a3a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
        ${a.glasses ? `<g fill="none" stroke="#2a1a12" stroke-width="1.8"><circle cx="52" cy="51" r="6"/><circle cx="68" cy="51" r="6"/><path d="M58 51h4"/></g>` : ""}
        ${hairFront(a.hair, hc)}
        ${gear[role](a.top)}
      </g>
      ${badge}
    </svg>`;
  }

  const forRole = (role) => LIST[role] || [];
  const label = (id) => (byId[id] ? byId[id].label : "");
  window.Avatars = { svg, forRole, label, roleOf, all, has: (id) => !!byId[id] };
})();
