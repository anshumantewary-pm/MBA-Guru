Academy.add("D2", "practice", {
  quiz: [
    { q: "\"Best CRM for small business\" signals which intent?", options: ["learn", "compare", "local", "navigational"], answer: 1, explain: "Words like “best”, “vs” and “top” show the buyer is choosing between options, which is compare intent. It is not learn intent, because they already understand the category and want help deciding; a comparison page or buyer's guide fits best." },
    { q: "A pillar page is:", options: ["a broad-topic page linking to detailed supporting pages", "the homepage", "an ad", "the privacy policy"], answer: 0, explain: "In a content cluster, the pillar covers a broad topic and links out to supporting pages that each answer one sub-question in depth, with links back. The homepage introduces the business as a whole and is not organised around one topic." },
    { q: "For local buyers searching \"near me\", the most important free asset is:", options: ["a press release", "a Google Business Profile with reviews", "a TV ad", "a long About page"], answer: 1, explain: "Near-me searches usually show the local map pack, which is built from Google Business Profiles, and reviews and completeness strongly affect who appears. A TV ad is not free, and a press release or About page does not appear in the map pack." },
    { q: "To be drawn on by AI search answers, a page should:", options: ["hide text inside images", "repeat keywords many times", "answer questions clearly and early, with proof and structured data", "block crawlers"], answer: 2, explain: "AI answers draw on pages that answer questions directly, with proof, FAQs, structured data and original data. Hiding text in images and blocking crawlers make content unreadable to these systems, and keyword repetition lowers quality." },
    { q: "Which shows first-hand experience?", options: ["a stock photo", "real photos, data and the author's own use of the product", "a high word count", "many ads"], answer: 1, explain: "Experience is shown by evidence that the author actually did or used the thing: real photos, their own test data and first-person detail. A stock photo could come from anyone, and word count or ads say nothing about experience." }
  ],
  tasks: [
    {
      title: "Keyword map: 30 keywords by intent",
      time: "2 hours",
      steps: [
        "Write 5 to 10 seed phrases in your buyers' own language, including Hindi or regional phrasing where they use it.",
        "Collect at least 80 phrases from Google autosuggest, People also ask, Google Trends, Search Console queries and sales or WhatsApp questions.",
        "Tag each phrase as learn, compare, buy or local, and remove phrases your buyers would not use.",
        "Group near-duplicates and keep the 30 most valuable keywords or clusters.",
        "Search each main phrase and note the dominant page type in the top results.",
        "Assign each keyword to exactly one existing or planned page, with the page type and priority."
      ],
      deliverable: "A keyword map sheet of 30 keywords with intent, page type, assigned URL and priority, added to the playbook.",
      checks: [
        "Self-check against the rubric: keywords come from real sources such as Search Console and customer questions, not invented lists.",
        "No two pages are assigned the same keyword.",
        "Compare, buy and local keywords are prioritised."
      ]
    },
    {
      title: "Write or rewrite one page for a top buyer question",
      time: "3 hours plus 4 weeks of tracking",
      steps: [
        "Choose the buyer question closest to revenue from your keyword map and check the intent on the results page.",
        "Record the page's current clicks, impressions and average position in Search Console as a baseline (zero for a new page).",
        "Write a unique title and meta description, one H1 and sub-headings that follow buyer questions.",
        "Open with a specific two-sentence answer, then add steps, a table or examples.",
        "Add proof: a named author, real photos and one real number or customer story with permission.",
        "Add an FAQ section, structured data, internal links and alt text, and check mobile speed.",
        "Publish, request indexing in Search Console, and log clicks and position weekly for 4 weeks."
      ],
      deliverable: "The live page URL, a before-and-after Search Console log over 4 weeks, and a one-page note on what changed.",
      checks: [
        "Self-check against the rubric: the page answers a real buyer question with real proof.",
        "The answer appears in the first two or three sentences.",
        "Weekly Search Console figures are logged for 4 weeks."
      ]
    },
    {
      title: "Set up or improve your Google Business Profile",
      time: "2 hours plus weekly posts",
      steps: [
        "Claim and verify the profile, or audit the existing one for name, address, phone, hours and website consistency.",
        "Check the categories of the top three competitors in the map pack and set the most accurate primary category and secondary categories.",
        "Upload at least 10 real photos of the premises, team, products and work.",
        "Write a short WhatsApp review request with your review link and send it to recent satisfied customers until you have 5 new genuine reviews.",
        "Reply to every review, positive or negative, within 48 hours.",
        "Add a UTM-tagged website link and publish one post a week."
      ],
      deliverable: "Screenshots of the completed profile, the count of new reviews and a posting calendar, with profile calls and clicks noted.",
      checks: [
        "Self-check against the rubric: all photos and reviews are genuine, with no paid or incentivised reviews.",
        "The profile has 10 photos, 5 new reviews and weekly posts scheduled."
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: rewrite a page to answer the buyer first",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates intent checking by searching three phrases live and naming the page type each needs.",
      "Facilitator rewrites the opening, title and FAQ of a sample weak page into an answer-ready page with proof.",
      "Pairs swap keyword maps and check that intents are tagged correctly and no keyword is assigned to two pages.",
      "Pairs rewrite the first 100 words of each other's chosen page so it answers the question directly.",
      "Pairs review each other's Google Business Profile for category, photos and review replies.",
      "Coach gives feedback on intent match, clarity of the early answer, and the quality of proof."
    ]
  },
  reportBack: "Friday report-back prompt: which page you rewrote and what Search Console shows so far, how many new genuine reviews you received, and one buyer question you discovered that you had not expected.",
  resources: [
    "Google Search Central's SEO starter guide",
    "Google Business Profile help",
    "Google India blog on AI Mode and Search Live in Indian languages",
    "Google Search Central guidance on structured data (verify supported types)"
  ]
});
