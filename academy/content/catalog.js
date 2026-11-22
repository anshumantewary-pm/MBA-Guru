/* Programme structure: roles, tracks, weekly rhythm, assessment, rubrics. */
window.CATALOG = {
  programme: {
    name: "Sales & Marketing Mastery",
    weeks: 12,
    hoursPerWeek: 6,
    summary:
      "A 12-week programme that trains four roles on one shared 4Ps foundation, then gives each role its own 8-module track. Every module has lessons, a video lesson, a 5-question quiz and practical tasks done on a real product.",
    idea: "Every P answers a buyer question, and sales is where all four meet."
  },

  fourPs: [
    { p: "Product", question: "Does this solve my problem?", owner: "Product Managers" },
    { p: "Price", question: "Is it worth it, and can I afford it?", owner: "Product Managers with Sales Managers" },
    { p: "Place", question: "Can I get it easily?", owner: "Sales Managers" },
    { p: "Promotion", question: "Why should I trust and choose you?", owner: "Marketing and Digital Marketing" }
  ],

  roles: [
    {
      id: "product",
      letter: "A",
      numeral: "I",
      name: "Product Manager",
      short: "Product",
      who: "PMs, product owners, founder's office",
      promise:
        "Validate a problem, scope an MVP, position and price it with sales, launch it, and run the feedback loop.",
      metric: "Adoption of what you launched",
      hue: "#c8743a"
    },
    {
      id: "sales",
      letter: "B",
      numeral: "II",
      name: "Sales Manager",
      short: "Sales",
      who: "Team leads, area and regional managers, key account managers, senior reps stepping up",
      promise:
        "Run a repeatable sales system, coach reps, negotiate, forecast, and manage territories and partners.",
      metric: "Win rate and days to close",
      hue: "#b2412e"
    },
    {
      id: "marketing",
      letter: "C",
      numeral: "III",
      name: "Marketing",
      short: "Marketing",
      who: "Brand, product marketing, field and trade marketing",
      promise:
        "Research the market, position and message, plan campaigns and events, enable sales, and prove ROI.",
      metric: "Cost per qualified lead and pipeline sourced",
      hue: "#d49a4a"
    },
    {
      id: "digital",
      letter: "D",
      numeral: "IV",
      name: "Digital Marketing",
      short: "Digital",
      who: "SEO, content, social, performance, CRM and WhatsApp",
      promise:
        "Run a tracked digital funnel across search, LinkedIn, YouTube, Instagram, paid ads, WhatsApp and email.",
      metric: "Conversion rate and cost per qualified lead by channel",
      hue: "#8e5a3c"
    }
  ],

  rules: [
    "Pick one real product at the start and apply every module to it. Switching mid-way breaks the learning.",
    "Keep all deliverables in one playbook. By week 12 it is a working team playbook.",
    "Don't move on until the module's task is done and its quiz is passed.",
    "GST, platform fees, telecom and data-privacy rules change. Check anything marked (verify) before relying on it."
  ],

  rhythm: [
    { day: "Monday", what: "Self-study: lesson notes, the video lesson and one resource", time: "60 min" },
    { day: "Tuesday", what: "Live workshop: the facilitator demonstrates, learners practise, the coach gives feedback on the spot", time: "120 min" },
    { day: "Wed – Thu", what: "Apply it on real work: the module's practical tasks", time: "120 min" },
    { day: "Friday", what: "Cohort report-back on what you tried with real customers, then the module quiz", time: "45 min" },
    { day: "Saturday", what: "Optional peer coaching: review one recording with a partner", time: "30 min" }
  ],

  joint: [
    { week: 7, text: "PMs hand their positioning (A4) to marketers, who turn it into a campaign brief (C4)." },
    { week: 8, text: "PMs present price tiers (A5); sales managers stress-test them in a negotiation role-play (B5). Together they sign off a discount policy." },
    { week: 9, text: "Launch readiness review: PMs (A6), sales managers (B6) and marketers (C6) check the enablement kit." },
    { week: 10, text: "PMs sit in on live sales calls with sales managers (A7, B7)." },
    { week: 11, text: "Marketers and digital marketers build one shared funnel dashboard (C8, D8)." }
  ],

  assessment: [
    { part: "Module quizzes", weight: 15, how: "5 questions each. Pass mark 4 out of 5; one retake allowed." },
    { part: "Practical tasks", weight: 40, how: "Scored 1 to 4 on the practical task rubric." },
    { part: "Role-plays and presentations", weight: 15, how: "Facilitator plus two peers, using the role-play scorecard." },
    { part: "Capstone", weight: 30, how: "Panel of three: one sales, one product and one marketing leader." }
  ],
  certification:
    "Certified with 70% overall, every quiz passed and a capstone average of at least 3 out of 4.",

  taskRubric: [
    { score: 4, text: "Real customer data, the concept applied correctly, specific enough to act on tomorrow, plus a one-page note on what changed." },
    { score: 3, text: "Real data and correct, but some parts generic." },
    { score: 2, text: "Mostly sample data, or the concept partly misapplied." },
    { score: 1, text: "Incomplete, or theory with no application." }
  ],

  roleplay: [
    { behaviour: "Opening", good: "Purpose, agenda and a time check in the first minute." },
    { behaviour: "Discovery", good: "At least 3 problem and 3 implication questions; the buyer talks most." },
    { behaviour: "Listening", good: "Summarises the buyer's words back before pitching." },
    { behaviour: "Tailoring", good: "The pitch or demo uses the buyer's problem and language." },
    { behaviour: "Objections", good: "Listen, acknowledge, clarify, answer with proof, confirm." },
    { behaviour: "Negotiation", good: "Every concession traded; stays above the floor price." },
    { behaviour: "Close", good: "A clear ask and a dated next step." }
  ],

  capstoneRubric: [
    { criterion: "Customer insight", four: "The buyer's own words from 10 or more interviews, and a clear first segment.", one: "Generic statements, no evidence." },
    { criterion: "4P fit", four: "Price, channel and message all fit the product and the buyer.", one: "The Ps contradict each other." },
    { criterion: "Numbers", four: "Unit economics and funnel maths are checked and realistic.", one: "Numbers missing or wrong." },
    { criterion: "Ready to run", four: "Owners, dates and a 90-day plan for every part.", one: "Ideas only." },
    { criterion: "Pitch and Q&A", four: "Clear and confident; hard questions answered with evidence.", one: "Reads slides; avoids questions." }
  ],

  playbook: [
    { part: "Customer", lead: "Marketing", contains: "Two personas and the segment to win first, with interview evidence" },
    { part: "Product", lead: "Product Manager", contains: "Positioning statement, current offer or MVP, three proof points, and who should not buy" },
    { part: "Price", lead: "Product Manager with Sales Manager", contains: "Unit economics, three tiers, floor price and discount policy" },
    { part: "Place", lead: "Sales Manager", contains: "Channel mix, partner terms and a plan for one tier 2 city" },
    { part: "Promotion", lead: "Marketing", contains: "Core message, 4-week campaign and content plan, referral process and funnel maths" },
    { part: "Digital", lead: "Digital Marketing", contains: "Channel plan with tracking, budget, target cost per qualified lead, and one live result from D3 to D7" },
    { part: "Sales", lead: "Sales Manager", contains: "Stage definitions, scripts, objection bank and a recorded mock negotiation" },
    { part: "System", lead: "All four", contains: "Shared tracker and dashboard, weekly review routine, and a 90-day target for each role" }
  ]
};
