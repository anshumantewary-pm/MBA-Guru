Academy.add("A8", "practice", {
  quiz: [
    { q: "A good hypothesis is:", options: ["\"The new onboarding is better\"", "\"Adding a setup checklist will lift 7-day activation for new SMB accounts from 30% to 40%\"", "\"Users will love it\"", "\"We should test something\""], answer: 1, explain: "A good hypothesis names the change, the audience, the metric, the current value and the expected value, so it can clearly pass or fail. 'The new onboarding is better' sounds reasonable but has no metric or target, so nobody can prove it wrong." },
    { q: "Win-loss interviews work best:", options: ["a year later", "for won deals only", "within about 30 days of the decision, for wins and losses", "as a survey only"], answer: 2, explain: "Within about 30 days buyers still remember the options and what tipped the decision, and covering both wins and losses shows what to protect and what to fix. Won deals only would flatter you and hide why you lose." },
    { q: "NPS asks:", options: ["how likely the customer is to recommend you", "how much they paid", "how many features they use", "how fast support replied"], answer: 0, explain: "Net Promoter Score asks how likely the customer is to recommend you on a 0 to 10 scale; NPS is % promoters (9 to 10) minus % detractors (0 to 6). How fast support replied is closer to a CSAT or service-level measure." },
    { q: "A feature used by 2% of customers, costly to maintain and tied to no revenue is a candidate to:", options: ["invest in", "sunset", "re-price upward", "advertise"], answer: 1, explain: "Low usage, high maintenance cost and no link to revenue are the classic sunset signals. Before sunsetting, check who those 2% are, give notice and offer an alternative; investing would pour more effort into something customers do not value." },
    { q: "The quarterly 4P review asks:", options: ["which competitor to copy", "which P is weakest now and the one fix for next quarter", "how to cut prices", "who to hire"], answer: 1, explain: "The review scores product, price, place and promotion with evidence, then picks the weakest P and commits to one big fix with an owner and target. Cutting prices is only one possible fix, and only if price is the weakest P." }
  ],
  tasks: [
    {
      title: "Interview 3 lost or churned customers",
      time: "3 hours over the week",
      steps: [
        "Ask your sales manager or customer success lead for lost deals or churned accounts from the last 30 to 60 days.",
        "Send a short request by call or WhatsApp: 20 minutes, to learn, not to re-sell.",
        "Ask: What problem were you solving? What else did you consider? What made you decide? What nearly changed your mind?",
        "Write down exact phrases, especially the first reason they give and the reason that comes out after probing.",
        "Tag each interview: price, fit, trust, timing or competitor.",
        "Compare with the reason logged in the CRM and note any difference.",
        "Write the top 3 reasons with a quote in the customer's own words for each."
      ],
      deliverable: "A one-page win-loss note for the playbook: top 3 reasons with customer quotes, tags, and one product fix and one sales fix you propose.",
      checks: [
        "Self-check against the rubric: are these 3 real customers, with their own words quoted?",
        "Does the note say what you will change because of it?"
      ]
    },
    {
      title: "Experiment brief and decision",
      time: "2 hours to write, plus run time",
      steps: [
        "Pick one pattern from your feedback summary or dashboard.",
        "Write a hypothesis in the form: doing X will move metric Y for audience Z from A to B.",
        "Fill in the other five fields: metric definition, audience and control, duration, pass mark, decision on pass and on fail.",
        "Check with your analyst or engineer that the metric is tracked today.",
        "Get the engineering lead and one stakeholder to agree the pass mark and decision before starting.",
        "Run the experiment if you can; do not stop early.",
        "Record the result and the decision taken in the experiment log."
      ],
      deliverable: "A six-field experiment brief with the recorded result and decision (or the planned run date and agreed decision if it cannot run this week).",
      checks: [
        "Self-check against the rubric: is the hypothesis specific, with a current value and a target?",
        "Was the decision written before the result was known?"
      ]
    },
    {
      title: "Product health dashboard",
      time: "2 to 3 hours",
      steps: [
        "Choose 5 metrics: North Star, activation, retention, NPS or CSAT, and feature adoption or revenue.",
        "Write a one-line definition for each, including the time window.",
        "Build a Google Sheet with metrics as rows and the last 12 weeks as columns.",
        "Fill in real data from your analytics, billing and survey tools; mark any gaps.",
        "Add a target and a red, amber or green status for each metric.",
        "Add a simple line chart for each metric's 12-week trend.",
        "Share it with engineering, sales and support leads and set a weekly 15-minute review."
      ],
      deliverable: "A Google Sheet dashboard with 5 defined metrics, a 12-week trend, targets and status, plus a note on the one trend that worries you most.",
      checks: [
        "Self-check against the rubric: is the dashboard built from real data, not sample numbers?",
        "Could a colleague read it in under 5 minutes and know what to ask next?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: the win-loss interview and the experiment brief",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a 10-minute win-loss interview with a buyer who first says 'price', probing until the real reason (trust) emerges.",
      "Facilitator rewrites a vague hypothesis ('Users will love it') into a six-field experiment brief on the board.",
      "Pairs practise win-loss interviews on each other's real lost deals, swapping roles.",
      "Pairs rewrite each other's experiment hypotheses until each names the change, audience, metric, current value and target.",
      "Coach gives feedback on probing beyond the first reason, keeping the customer's words, and writing the decision before the result."
    ]
  },
  reportBack: "Friday report-back: share the top reason a real lost or churned customer gave you in their own words, the experiment you ran or planned and its decision, and the one dashboard trend that concerns you.",
  resources: [
    "Hooked, Nir Eyal (optional)"
  ]
});
