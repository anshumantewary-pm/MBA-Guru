Academy.add("C8", "practice", {
  quiz: [
    { q: "A channel cost ₹2 lakh and won 8 customers. CAC is:", options: ["₹16,000", "₹25,000", "₹2,50,000", "₹8,000"], answer: 1, explain: "CAC = spend ÷ customers = ₹2,00,000 ÷ 8 = ₹25,000. ₹16,000 comes from multiplying 2 by 8 rather than dividing, and ₹2,50,000 misplaces the decimal." },
    { q: "Attributed revenue is ₹12 lakh and cost ₹3 lakh. Marketing ROI is:", options: ["400%", "300%", "25%", "75%"], answer: 1, explain: "ROI = (revenue − cost) ÷ cost = (12 − 3) ÷ 3 = 300%. The tempting 400% is revenue ÷ cost, which is return on spend, not ROI, because it forgets to subtract the cost." },
    { q: "Last-touch attribution gives all credit to:", options: ["the final interaction before conversion", "the first ad seen", "an equal split", "the salesperson"], answer: 0, explain: "Last touch credits only the final interaction before the buyer converted. Crediting the first ad seen is first-touch attribution, and an equal split is a multi-touch model." },
    { q: "Influenced pipeline means:", options: ["deals marketing created from scratch", "deals where marketing touched the buyer at some point", "lost deals", "forecast deals"], answer: 1, explain: "Influenced pipeline includes any deal where marketing touched the buyer, even if sales or a partner started it. Deals marketing created from scratch are sourced pipeline, a subset of influenced." },
    { q: "A good leadership report ends with:", options: ["a list of every post", "raw data only", "what you will do next and what you need", "apologies"], answer: 2, explain: "Leadership needs to decide, so the report should end with dated next actions and clear asks. Lists of activity and raw data leave them with nothing to act on." }
  ],
  tasks: [
    {
      title: "Monthly marketing dashboard (week 11 joint session)",
      time: "2 hours in the joint session plus prep",
      steps: [
        "Before the session, agree the stage definitions (reach, leads, MQLs, SQLs, opportunities, customers) using your C6 SLA.",
        "With the digital marketers, list the data source for each stage: ad platforms, website analytics, CRM, event lists.",
        "Build one shared funnel view by month and by channel, with conversion rates between stages.",
        "Add CAC by channel, marketing ROI with its attribution model, and sourced and influenced pipeline as separate rows.",
        "Add one or two brand health measures, such as share of search.",
        "Agree who updates each number, by which date each month, and check it loads with last month's real data."
      ],
      deliverable: "A shared monthly marketing dashboard with funnel stages, conversions, CAC by channel, ROI, sourced and influenced pipeline and brand health, plus owners for each data source.",
      checks: [
        "Self-check against the rubric: is the dashboard filled with real data for last month?",
        "Are the stage definitions the same ones sales signed in the SLA?"
      ]
    },
    {
      title: "CAC by channel for last quarter",
      time: "90 min",
      steps: [
        "List every channel used last quarter.",
        "Total full spend per channel: media, agency fees, tools, events and staff costs where agreed.",
        "Count customers won per channel using the CRM source field; flag customers with no source.",
        "Divide spend by customers for each channel.",
        "Compare each CAC with average LTV for that channel's customers.",
        "Write one budget move you would test next quarter and why."
      ],
      deliverable: "A CAC-by-channel table for last quarter with LTV comparison and one recommended budget test.",
      checks: [
        "Self-check against the rubric: is spend complete and are customers counted from real CRM data?",
        "Did you note channels where small numbers make CAC unreliable?"
      ]
    },
    {
      title: "One-page leadership report",
      time: "90 min",
      steps: [
        "Pick the five or six numbers from the dashboard that matter most against plan.",
        "Write what happened, with each number compared with plan or last period.",
        "Explain why, using data, sales feedback and win-loss reasons.",
        "Turn each reason into a next action with an owner and date.",
        "Write one or two clear asks: decisions, budget or help needed.",
        "Write the one-line headline last, and share the report a day before the review."
      ],
      deliverable: "A one-page report: headline, what happened, why, next actions and asks.",
      checks: [
        "Self-check against the rubric: does it end with dated next actions and a specific ask?",
        "Is the attribution model stated next to any ROI figure?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: from dashboard to decision",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates calculating CAC and ROI from a sample channel table, highlighting the 400% versus 300% slip.",
      "Facilitator credits one sample deal under first-touch, last-touch and multi-touch models.",
      "Pairs turn a sample dashboard into a one-page report and present it in two minutes to a partner acting as the CEO.",
      "The 'CEO' asks one challenging question about attribution or sourced versus influenced pipeline.",
      "Coach gives feedback on calculation accuracy, clarity of the why, and whether the report ends with an actionable ask."
    ]
  },
  reportBack: "Friday report-back: share your one-page report with your manager. Which number surprised you, what did leadership decide or ask, and what will you change next month?",
  resources: [
    "Google Skillshop analytics courses (verify current list)."
  ]
});
