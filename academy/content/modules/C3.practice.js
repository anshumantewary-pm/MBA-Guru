Academy.add("C3", "practice", {
  quiz: [
    { q: "Revenue target ₹1 crore, average deal ₹2 lakh, opportunity-to-win rate 20%. Opportunities needed:", options: ["50", "100", "250", "500"], answer: 2, explain: "₹1 crore ÷ ₹2 lakh = 50 customers; 50 ÷ 0.2 = 250 opportunities. The tempting answer, 50, is the number of customers, not opportunities; you must divide by the win rate to move back up the funnel." },
    { q: "If SQL-to-opportunity conversion is 50%, how many SQLs produce those opportunities?", options: ["500", "125", "250", "1,000"], answer: 0, explain: "250 opportunities ÷ 0.5 = 500 SQLs. Answering 125 comes from multiplying by 50% instead of dividing; moving up the funnel always means dividing by the conversion rate." },
    { q: "An MQL becomes an SQL when:", options: ["marketing likes it", "sales accepts and qualifies it against agreed criteria", "it opens an email", "it visits the website"], answer: 1, explain: "An SQL is a lead that sales has accepted and qualified against criteria both teams agreed, such as need, budget, authority and timing. Opening an email or visiting the website is intent that may help a lead become an MQL, but it does not make it sales qualified." },
    { q: "In a 70-20-10 budget, the 10% goes to:", options: ["proven channels", "salaries", "experiments", "GST"], answer: 2, explain: "The 10% funds experiments with untested channels, each with a success measure and stop rule. Proven channels get the 70%, promising channels the 20%; salaries and GST are not part of the split." },
    { q: "Many Indian B2B buyers face the most pressure to commit budget in:", options: ["March, at fiscal year-end", "June", "August", "there is no pattern"], answer: 0, explain: "Most Indian companies follow an April to March fiscal year, so remaining budgets must often be committed or spent by 31 March. That is why year-end campaigns need to launch in January or February, allowing for the sales cycle." }
  ],
  tasks: [
    {
      title: "Reverse funnel maths for next quarter",
      time: "60 min",
      steps: [
        "Get next quarter's revenue target from your sales or business plan.",
        "Pull your average deal size and the last two quarters' conversion rates by stage from the CRM.",
        "Calculate customers needed: revenue ÷ average deal.",
        "Divide back up the funnel: opportunities, SQLs, MQLs and leads, showing each calculation.",
        "Spread the lead numbers by month, allowing for your sales cycle length.",
        "Compare with current monthly lead volume and write the gap in one line.",
        "Label any rate that is an estimate rather than real data."
      ],
      deliverable: "A one-page reverse funnel sheet from revenue down to leads, with the monthly plan and the gap.",
      checks: [
        "Self-check against the rubric: are the conversion rates from your own CRM, with estimates clearly labelled?",
        "Did you divide (not multiply) at each stage, and does the bottom line add back up to the revenue target?"
      ]
    },
    {
      title: "One-page quarterly marketing plan",
      time: "2 hours",
      steps: [
        "Agree lead, MQL, SQL, opportunity and customer definitions with your sales manager and note them at the top.",
        "Write 2 to 4 SMART objectives tied to the reverse funnel, each with an owner and data source.",
        "Name the 1 or 2 target segments from your C1 research.",
        "Pull the core message and pillars from your C2 messaging house for each segment.",
        "Choose 3 to 5 channels across owned, earned and paid media, based on where buyers search and buy.",
        "Build a 13-week calendar with festivals, fiscal dates, trade fairs and closing weeks, and place each campaign.",
        "Tag each activity as brand or demand."
      ],
      deliverable: "A one-page quarterly plan: objectives, segments, messages, channels and calendar.",
      checks: [
        "Self-check against the rubric: is every objective SMART and linked to a funnel number?",
        "Does sales agree with the stage definitions and the calendar?"
      ]
    },
    {
      title: "Budget by channel on a 70-20-10 split",
      time: "60 min",
      steps: [
        "Take your total quarterly budget and the channel list from your plan.",
        "Classify each channel as proven, promising or experiment, using last quarter's customer data.",
        "Allocate 70%, 20% and 10% across the three groups.",
        "Set a target cost per lead for each channel: budget ÷ leads expected.",
        "Add up expected leads and compare with the leads needed from your reverse funnel.",
        "Write a stop rule for every experiment, and budget for GST on bought media where it applies (verify current rates)."
      ],
      deliverable: "A budget table by channel with group, amount, expected leads, target CPL and stop rules.",
      checks: [
        "Self-check against the rubric: do the expected leads cover the funnel need, or is the gap stated with a plan to close it?",
        "Is the 10% genuinely for experiments, each with a stop rule?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: funnel maths and budget clinic",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates the reverse funnel live, from a ₹1 crore target down to leads, and shows the multiply-instead-of-divide mistake.",
      "Facilitator splits a sample ₹10 lakh budget 70-20-10 and sets target CPLs.",
      "Pairs practise: each runs their own reverse funnel while the partner checks every division and conversion rate source.",
      "Pairs role-play a five-minute budget review: one presents the plan, the other plays a sceptical finance head asking how each line ties to revenue.",
      "Coach gives feedback on accuracy of the maths, realism of rates and clarity of the link from budget to revenue."
    ]
  },
  reportBack: "Friday report-back: share your reverse funnel, the gap between leads needed and leads you produce today, and what your sales manager said when you agreed the stage definitions.",
  resources: [
    "Marketing Management (Kotler and Keller), chapters on marketing planning"
  ]
});
