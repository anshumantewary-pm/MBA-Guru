Academy.add("B7", "practice", {
  quiz: [
    { q: "Three deals: ₹10 lakh at 20%, ₹20 lakh at 50% and ₹5 lakh at 90%. The weighted pipeline is:", options: ["₹35 lakh", "₹16.5 lakh", "₹12 lakh", "₹20 lakh"], answer: 1, explain: "Multiply each deal by its probability and add: ₹10 lakh × 20% = ₹2 lakh, ₹20 lakh × 50% = ₹10 lakh, ₹5 lakh × 90% = ₹4.5 lakh, so 2 + 10 + 4.5 = ₹16.5 lakh. ₹35 lakh is the unweighted total, which ignores the chance that deals do not close." },
    { q: "A deal with no next action date should be:", options: ["left alone", "moved to won", "given a dated next action or closed as lost", "doubled in value"], answer: 2, explain: "Every open deal must have a next action and a date; without one it is not being worked. The rep either gives it a specific, dated next step or closes it as lost with a reason. Leaving it alone keeps a false deal in the forecast." },
    { q: "“Commit” in a forecast means:", options: ["every deal in the pipeline", "deals the rep is highly confident will close this period", "lost deals", "next year's deals"], answer: 1, explain: "Commit is the high-confidence category: deals the rep expects to close this period, backed by evidence. Treating every pipeline deal as commit is the common mistake that makes forecasts unreliable." },
    { q: "Sales cycle length is:", options: ["average days from first contact to close", "meetings per week", "days of leave", "contract length"], answer: 0, explain: "Cycle length measures how long deals take, from first contact to close, averaged across deals. Contract length is how long the customer signs for, a different number. A growing cycle often signals missing decision makers." },
    { q: "Team rates against benchmark: lead to meeting 20% (benchmark 20%), meeting to proposal 60% (benchmark 50%), proposal to won 15% (benchmark 30%). Where do you work first?", options: ["lead to meeting", "meeting to proposal", "proposal to won", "nowhere, all are fine"], answer: 2, explain: "Proposal to won is 15% against a 30% benchmark, half its benchmark and the biggest gap. Lead to meeting is on benchmark and meeting to proposal is above it, so neither is the priority." }
  ],
  tasks: [
    {
      title: "Clean the CRM",
      time: "90 min",
      steps: [
        "Check that the tracker has the eight fields and that stage, source and lost reason use drop-down lists.",
        "Write one line of exit criteria for each stage and share it with the team.",
        "Filter for open deals with no next action date or an overdue one.",
        "With each rep, give every such deal a specific, dated next action or close it as lost with a reason.",
        "Check every open deal against its stage's exit criteria and move any that do not qualify.",
        "Record pipeline value before and after the clean-up."
      ],
      deliverable: "A cleaned tracker, written stage exit criteria, and a before-and-after note on pipeline value and deals closed as lost.",
      checks: [
        "Self-check against the rubric: does every open deal in your real tracker now have a next action and a date?",
        "Could a new rep read the exit criteria and place a deal in the right stage?"
      ]
    },
    {
      title: "Team dashboard in a Google Sheet",
      time: "2 hours",
      steps: [
        "Create a dashboard tab that reads from the tracker tab.",
        "Add weekly activity per rep (calls, meetings, demos).",
        "Add pipeline value by stage, both unweighted and weighted by stage probability.",
        "Add conversion rates for each stage, shown next to your benchmark.",
        "Add average cycle length (days from first contact to close) and average deal size and margin for won deals.",
        "Add repeat and referral share of revenue, and highlight the weakest stage automatically.",
        "Share it with the team and review it in the next weekly team review."
      ],
      deliverable: "A live team dashboard with activity, pipeline by stage, conversions, cycle length and deal size, linked in the playbook.",
      checks: [
        "Self-check against the rubric: is the dashboard built on your real tracker data, not sample rows?",
        "Does it make the weakest stage obvious at a glance?"
      ]
    },
    {
      title: "30-minute forecast call and 4-week accuracy check",
      time: "30 min plus 30 min review",
      steps: [
        "Ask each rep to tag deals closing this period as commit, best case or pipeline, with one line of evidence for every commit deal.",
        "Share the list before the call.",
        "Run the call rep by rep: commit total, changes since last week, evidence for new commit deals.",
        "Move deals between categories where evidence does not support them, and state the team's commit and best-case numbers.",
        "Keep deal coaching out of the call; note deals to discuss in the pipeline review.",
        "After 4 weeks, compare commit and best case with actuals per rep and discuss what made forecasts accurate or not."
      ],
      deliverable: "The forecast sheet with commit and best-case numbers, plus a one-page accuracy comparison after 4 weeks.",
      checks: [
        "Self-check against the rubric: is the forecast based on real deals, and does the 4-week note say what changed in how you forecast?",
        "Did the call stay within 30 minutes and settle the number?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: the 30-minute forecast call",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a forecast call using a sample pipeline, challenging commit deals with evidence questions and settling commit and best-case numbers.",
      "Pairs practise with their own cleaned trackers: one plays the manager, one the rep, then swap.",
      "Coach gives feedback on whether challenges used facts rather than pressure, whether deal coaching crept in, and whether the call ended with clear numbers.",
      "Week 10 joint session: PMs sit in on live sales calls with sales managers and bring lost-reason patterns to the 4P review."
    ]
  },
  reportBack: "Friday report-back: how much did your pipeline change after the clean-up, which stage is weakest, and what did you forecast as commit and best case?",
  resources: [
    "HubSpot Academy and Salesforce Trailhead sales modules (verify current free content)"
  ]
});
