Academy.add("C6", "practice", {
  quiz: [
    { q: "A marketing-sales SLA defines:", options: ["salaries", "lead definitions, follow-up time and what happens to unworked leads", "office hours", "the logo"], answer: 1, explain: "The SLA is a written promise between the two teams: what counts as a qualified lead, how fast sales follows up, and how cold or unworked leads are handled. It has nothing to do with pay or branding." },
    { q: "Lead scoring combines:", options: ["fit and intent", "age and gender", "price and margin", "likes and shares"], answer: 0, explain: "Fit measures who the lead is against your ideal customer, and intent measures what they did, such as requesting a demo. Likes and shares are activity signals that say little about buying." },
    { q: "Sales ignores your battlecard. The first fix is to:", options: ["send it again", "ask reps what they need on calls and rebuild it with them", "make it longer", "delete it"], answer: 1, explain: "Material is ignored when it does not answer what buyers actually ask. Asking reps and rebuilding with them fixes the cause; resending or lengthening it repeats the problem." },
    { q: "Why should marketing attend the pipeline review?", options: ["to see what happens to its leads and learn what converts", "to approve discounts", "to forecast", "to hire"], answer: 0, explain: "The pipeline review shows which sources and campaigns turn into progressing deals and where marketing leads stall. Discount approval and forecasting belong to sales management." },
    { q: "A lead matches your ideal customer and downloads the pricing guide. They are:", options: ["low fit, low intent", "high fit, low intent", "high fit, high intent", "low fit, high intent"], answer: 2, explain: "Matching the ideal customer profile is high fit, and downloading a pricing guide is a strong buying signal, so high intent. The tempting answer 'high fit, low intent' ignores how close to a purchase a pricing download is." }
  ],
  tasks: [
    {
      title: "One-page SLA with a sales manager",
      time: "2 hours",
      steps: [
        "Pull 20 won deals and 20 rejected leads from the CRM and note common traits and rejection reasons.",
        "Meet a sales manager and agree one-sentence MQL and SQL definitions.",
        "Calculate the monthly MQL target from the revenue target, average deal size and MQL-to-customer rate, and check it against rep capacity.",
        "Agree the follow-up time, number and channels of attempts, and the consent rules for calls and WhatsApp (verify current TRAI and platform rules).",
        "Write the cold-lead rule: when an unworked lead returns to marketing, the reason code and the nurture it enters.",
        "Agree a weekly review of SLA numbers for the first month, and both sign the page."
      ],
      deliverable: "A signed one-page SLA: definitions, volume target, follow-up time, attempts, cold-lead handling and review rhythm.",
      checks: [
        "Self-check against the rubric: are the targets calculated from your real revenue and conversion data?",
        "Does the SLA place clear promises on both marketing and sales?"
      ]
    },
    {
      title: "Battlecard and objection sheet built with sales",
      time: "2 hours",
      steps: [
        "Ask two reps which competitor and which three objections come up most on calls.",
        "Draft a one-page battlecard: where you win, where they win, questions to ask, landmines to avoid, and one proof point.",
        "Draft an objection sheet: objection, clarifying question, answer, proof.",
        "Check every competitor claim against public information.",
        "Have the reps use both on live calls for a week and collect feedback.",
        "Rebuild both, cutting anything unused, and add them to the content library with an owner and review date."
      ],
      deliverable: "One battlecard and one objection sheet, each one page, tested on live calls and stored in the content library.",
      checks: [
        "Self-check against the rubric: were the items built from real call questions and revised after rep feedback?",
        "Can a rep find the answer on a phone screen within 30 seconds?"
      ]
    },
    {
      title: "Sit in on three sales calls",
      time: "3 hours",
      steps: [
        "Agree with a sales manager which three calls you can join, and get the buyer's consent if calls are recorded.",
        "Listen only; note the problem in the buyer's own words, questions asked and objections raised.",
        "Write down at least five exact words or phrases buyers used.",
        "Compare them with your current website, ads and brochure copy.",
        "Rewrite one headline, one email and one WhatsApp message using the buyer's language.",
        "Share the changes with the reps and ask if they sound like their buyers."
      ],
      deliverable: "Call notes with five buyer phrases, and before-and-after versions of three pieces of messaging.",
      checks: [
        "Self-check against the rubric: are the phrases exact buyer words from real calls, not paraphrase?",
        "Does at least one updated message go live this week?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: writing the SLA and rebuilding a battlecard",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates sizing an MQL target from revenue and drafting the six SLA clauses.",
      "Facilitator shows a weak battlecard and rebuilds it live into a one-page, phone-friendly version.",
      "Pairs of marketers and sales managers negotiate their SLA follow-up time and cold-lead rule.",
      "Pairs score five sample leads on fit and intent and place them on the grid.",
      "Coach gives feedback on whether the SLA is balanced, the lead definitions are testable, and the battlecard answers real buyer questions."
    ]
  },
  reportBack: "Friday report-back: did the sales manager sign the SLA, and what did they change? Which buyer phrases did you hear on calls, and what messaging did you update?",
  resources: [
    "Predictable Revenue (Aaron Ross and Marylou Tyler)."
  ]
});
