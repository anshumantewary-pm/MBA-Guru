Academy.add("A6", "practice", {
  quiz: [
    { q: "Why soft launch first?", options: ["to find and fix issues with a small segment before a wide launch", "ads are cheaper", "to skip sales training", "regulators require it"], answer: 0, explain: "A soft launch exposes problems to a small, friendly segment so you can fix them before thousands of customers see them. It does not replace sales training; the wide launch still needs the full checklist." },
    { q: "A battlecard is:", options: ["a product roadmap", "a one-page sales guide comparing you with a competitor, with traps and answers", "an invoice", "a press release"], answer: 1, explain: "A battlecard is a short sales guide against one competitor: where you win, where they win, traps to set and answers to common objections. A roadmap shows future plans and should not be shared as a sales tool." },
    { q: "In the growth stage, the main go-to-market job is to:", options: ["explain the category", "sunset the product", "scale the channels that already work", "cut all marketing"], answer: 2, explain: "In growth, demand is rising and you already know which channels convert, so the job is to scale them. Explaining the category is the introduction-stage job; by growth, buyers already understand it." },
    { q: "Which is an outcome metric rather than an output?", options: ["emails sent", "blog posts written", "slides in the deck", "activation rate of new customers"], answer: 3, explain: "Activation rate measures a change in customer behaviour, so it is an outcome. Emails, posts and slides are things the team produced, which are outputs; they can be high even when the launch fails." },
    { q: "A medium-tier launch fits:", options: ["a typo fix", "a major new feature for existing customers", "a new company", "a logo change"], answer: 1, explain: "Medium launches are for major features for existing customers, needing a release note, sales briefing and customer communication. A typo fix is a small launch, and a new product or company is a big launch." }
  ],
  tasks: [
    {
      title: "Launch plan table",
      time: "90 min",
      steps: [
        "Pick your next medium or big release and write its launch tier with a one-line reason.",
        "Copy the nine checklist items (positioning, pricing page, demo script, FAQ, battlecard, support training, help docs, marketing assets, tracking) into a table.",
        "Add rows for the soft launch: segment, widen criteria and weekly review.",
        "Add columns for task, owner, date and status, and fill every cell with a named person and a real date.",
        "Add 3 to 5 outcome metrics with baselines and 30-day targets at the bottom.",
        "Share the table with the sales manager and marketer and ask each to confirm their rows."
      ],
      deliverable: "A launch plan table for the playbook with task, owner, date and status for every checklist item, plus soft-launch criteria and outcome metrics.",
      checks: [
        "Self-check against the rubric: does every row have a real owner and date, specific enough to act on tomorrow?",
        "Are the metrics outcomes (activation, pipeline, win rate) rather than outputs?"
      ]
    },
    {
      title: "Sales enablement kit",
      time: "3 hours",
      steps: [
        "Pick the competitor your reps meet most often and gather what you know from lost deals and sales notes.",
        "Write a one-page battlecard: where you win, where they win, three traps to set, and the top objections with proven answers.",
        "Write a 10-minute demo flow: tell them what they will see, show it on a typical customer use case with 3 aha moments, tell them what it means.",
        "Collect 10 real questions from sales and support and write short, plain answers for the FAQ.",
        "Ask one rep to use the kit on a real call and note what was missing.",
        "Revise the kit and store it where reps can find it in under a minute."
      ],
      deliverable: "A sales enablement kit: one-page battlecard, 10-minute demo flow and 10-question FAQ, reviewed by sales and marketing.",
      checks: [
        "Self-check against the rubric: are the FAQ questions real ones from customers, not invented?",
        "Is every battlecard claim honest and backed by proof a buyer could check?"
      ]
    },
    {
      title: "Launch readiness review",
      time: "30 min review, plus fixes",
      steps: [
        "Book 30 minutes with one sales manager and one marketer about a week before launch.",
        "Send the launch plan table and enablement kit a day ahead.",
        "In the review, walk the checklist row by row and mark each green, amber or red.",
        "Ask each person: 'What will go wrong on day one?' and write the answers.",
        "Agree the top 3 gaps, with an owner and fix date for each.",
        "Fix the gaps and send a short update confirming they are closed."
      ],
      deliverable: "Review notes with the readiness status of each item, the top 3 gaps, and evidence each gap was fixed.",
      checks: [
        "Self-check against the rubric: did a real sales manager and marketer take part, and were the top 3 gaps actually fixed?",
        "Include a one-page note on what changed in the plan because of the review."
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: the launch readiness review",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a 10-minute readiness review on a sample launch, walking the checklist and surfacing the top 3 gaps.",
      "Facilitator shows a strong and a weak battlecard side by side and asks the group to spot the differences.",
      "Trios practise: a PM presents their own launch plan, a sales manager and a marketer challenge it with 'What will go wrong on day one?'",
      "Each PM revises one battlecard section live based on the challenge.",
      "Coach gives feedback on tier choice, owner and date completeness, honesty of the battlecard and whether metrics are outcomes."
    ]
  },
  reportBack: "Friday report-back: which of your top 3 launch gaps you fixed, what a real rep or customer said after using the enablement kit, and one launch metric baseline you now have.",
  resources: [
    "Launch write-ups on Indian SaaS company blogs",
    "For consumer products: Amazon Seller University and Flipkart Seller Hub tutorials (verify current marketplace fees and policies)"
  ]
});
