Academy.add("B1", "practice", {
  quiz: [
    { q: "An exit criterion is:", options: ["the date a deal was created", "what must be true, with evidence, before a deal moves to the next stage", "the rep's feeling about the deal", "the deal size"], answer: 1, explain: "An exit criterion is a checkable condition, backed by evidence such as call notes or a named contact, that must be met before a deal advances. The rep's feeling is the tempting wrong answer: it is exactly what exit criteria are designed to replace, because feelings differ from rep to rep." },
    { q: "In BANT, \"A\" stands for:", options: ["authority", "awareness", "agreement", "amount"], answer: 0, explain: "BANT is budget, authority, need and timeline. Authority asks who decides and whether you are talking to them. \"Amount\" is tempting but is already covered by budget." },
    { q: "Which is a disqualifier?", options: ["a clear problem", "a trigger event such as expansion", "no budget owner and no deadline for 6 months or more", "a referral"], answer: 2, explain: "With no one who can release money and no deadline, the deal has no path to a decision, so it is a classic disqualifier. A clear problem, a trigger event and a referral are all positive signals that make a deal more likely to close." },
    { q: "Why map sales stages to the buyer's steps?", options: ["it looks good in the CRM", "so stages track buyer progress, not rep activity", "to shorten the pitch", "to skip qualification"], answer: 1, explain: "Mapping stages to connect, collaborate, create a solution, confirm and commit means a stage change reflects something the buyer did. That makes the pipeline predictive. It is not about appearance in the CRM, and it never replaces qualification." },
    { q: "In a large enterprise deal, the decision is usually made by:", options: ["one junior user", "the rep's contact alone", "a committee with an economic buyer", "the vendor"], answer: 2, explain: "Large firms decide through a committee, usually with finance, IT, procurement and users, and an economic buyer who can release the budget. Relying on the rep's contact alone is the tempting mistake; it is why many enterprise deals stall at the purchase order." }
  ],
  tasks: [
    {
      title: "One-page stage definitions with exit criteria",
      time: "90 min",
      steps: [
        "List your current CRM or tracker stages exactly as they are today.",
        "Map them to the eight stages (prospect, qualify, discover, pitch or demo, handle objections, negotiate, close, follow up and grow), merging or renaming where needed.",
        "Rename each stage so it describes buyer progress, and note the buyer step (connect, collaborate, create, confirm, commit) beside it.",
        "Pull your last 10 won and 5 lost deals and note what had happened before each moved stage.",
        "Write two or three exit criteria per stage, each with the evidence a manager would check.",
        "Review the page with two reps and adjust any criterion they find unclear.",
        "Fit it on one page and share it with the team."
      ],
      deliverable: "A one-page stage map: stage name, buyer step, goal, exit criteria and evidence for each stage.",
      checks: [
        "Self-check against the rubric: are the criteria drawn from your own won and lost deals (real data), or generic?",
        "Could another manager check every criterion without asking the rep?"
      ]
    },
    {
      title: "Five-question qualifying checklist",
      time: "60 min",
      steps: [
        "Write your ICP in three lines: company type and size, trigger events, disqualifiers.",
        "Decide whether your typical deal needs BANT or MEDDIC.",
        "Pick the five elements that most often separate your wins from losses.",
        "Turn each into one natural question a rep can ask in conversation.",
        "Next to each question, write what a good answer and a red-flag answer sound like.",
        "Test the checklist on three live deals and refine the wording."
      ],
      deliverable: "A five-question checklist with good and red-flag answers, plus your three-line ICP.",
      checks: [
        "Self-check against the rubric: is each question specific enough for a rep to use tomorrow?",
        "Does at least one question test a disqualifier?"
      ]
    },
    {
      title: "Audit 10 open deals against the exit criteria",
      time: "90 min",
      steps: [
        "Export 10 open deals across different reps and stages.",
        "For each deal, check every exit criterion of its current stage and the stages before it.",
        "Mark each deal as correctly staged, too far ahead, or disqualified.",
        "Count the deals in the wrong stage and note the most common missing criterion.",
        "Move the deals in the CRM and tell each rep why, with the next question to ask.",
        "Write a short note on what the audit revealed about coaching needs."
      ],
      deliverable: "An audit table of 10 deals with the count in the wrong stage, deals moved, and a one-paragraph coaching note.",
      checks: [
        "Self-check against the rubric: did you use real deals and actually move them in the CRM?",
        "Does your note name one specific skill to coach next?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: Stage definitions and the qualification conversation",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates rewriting three rep-activity stages into buyer-progress stages with exit criteria, using a volunteer's pipeline.",
      "Facilitator demonstrates a natural qualification conversation that uncovers budget, authority and the true decision-maker without sounding like an interrogation.",
      "Pairs practise: one plays a family-run SMB owner or an enterprise committee member, the other qualifies using their own five-question checklist; swap after ten minutes.",
      "Coach gives feedback on whether the questions sounded natural, whether the real decision-maker was found, and whether the rep recorded evidence rather than impressions.",
      "Each manager leaves with one stage definition rewritten and one checklist question improved."
    ]
  },
  reportBack: "Friday report-back: after auditing 10 deals, how many were in the wrong stage, which exit criterion was most often missing, and what happened when your reps asked the new qualifying questions on real calls?",
  resources: [
    "Predictable Revenue (Aaron Ross and Marylou Tyler)"
  ]
});
