Academy.add("CAP", "practice", {
  quiz: [
    { q: "Which role leads the Place part of the capstone playbook, covering channel mix, partner terms and a plan for one tier 2 city?", options: ["Product Manager", "Marketing", "Sales Manager", "Digital Marketing"], answer: 2, explain: "Place is led by the Sales Manager, who owns channels, partners and territories. Product Managers lead Product and co-lead Price, while Marketing and Digital Marketing lead Promotion and Digital." },
    { q: "A group's price part positions its middle tier as premium, but the campaign's core message is \"lowest price in the market\". Which capstone criterion is most at risk?", options: ["Customer insight", "4P fit", "Pitch and Q&A", "Ready to run"], answer: 1, explain: "4P fit scores whether price, channel and message all fit the product and the buyer; a 1 means the Ps contradict each other, as here. Customer insight is about interview evidence and ready to run is about owners and dates, neither of which this contradiction directly affects." },
    { q: "A group wants 30 new customers in 90 days, and 20% of qualified leads become customers. How many qualified leads does the shared funnel need?", options: ["60", "120", "150", "600"], answer: 2, explain: "Qualified leads needed = new customers ÷ lead-to-customer rate = 30 ÷ 0.2 = 150, about 12 a week over 90 days. The wrong options come from slips with the rate: 60 assumes half of leads convert, and 600 treats 20% as 5%." },
    { q: "Which of these is required for a learner to be certified?", options: ["70% overall, every quiz passed and a capstone average of 3 or more", "A capstone score of 4 on every criterion", "70% on the capstone only", "Passing at least half the quizzes and presenting the pitch"], answer: 0, explain: "Certification needs 70% overall, every module quiz passed and a capstone average of at least 3 out of 4. A perfect 4 on every criterion is not required, and the capstone alone or half the quizzes is not enough." },
    { q: "A panellist asks a question about your part and you do not know the answer. The best response is:", options: ["give your best guess confidently", "pass the question to another group member", "say you don't know, and explain how and by when you will find out", "move on to your next slide"], answer: 2, explain: "The rubric rewards answering hard questions with evidence; when you have none, honesty plus a clear plan to find out keeps credibility, as F4's integrity lesson teaches. Guessing confidently risks a wrong answer, and passing it on or moving on reads as avoiding the question, which scores a 1." }
  ],
  tasks: [
    {
      title: "Assemble the eight-part playbook",
      time: "6 to 8 hours across the group",
      steps: [
        "List every deliverable from F1 to F4 and each member's track modules against the eight parts.",
        "Mark each as current, needs updating or missing, and assign an owner and date to each gap.",
        "Each lead writes their part in one or two pages, with evidence moved to an appendix.",
        "Re-verify every item marked (verify), such as GST rates, platform fees, WhatsApp rates and privacy rules, and date the check.",
        "Add the System part together: shared tracker, dashboard, Friday review routine and a 90-day target per role.",
        "Write a one-page summary at the front of the playbook."
      ],
      deliverable: "The complete eight-part go-to-market playbook with a one-page summary and evidence appendix.",
      checks: [
        "Self-check against the capstone rubric: does Customer insight include the buyer's own words from 10 or more interviews?",
        "Does every part have owners, dates and a link to the 90-day plan (ready to run)?"
      ]
    },
    {
      title: "Fit check and self-score",
      time: "2 hours",
      steps: [
        "Swap parts within the group so each member reads all eight.",
        "Run the fit check across customer, product, price, place, promotion, sales, digital and system, and list every contradiction.",
        "Fix each contradiction and record what changed.",
        "Check every number: margin on pre-GST price, break-even, funnel conversions, CAC and the funnel maths from your target back to weekly leads.",
        "Each member scores all five capstone criteria privately from 1 to 4, then compare and discuss gaps of two or more points.",
        "Improve the lowest criterion and re-score."
      ],
      deliverable: "A fit-check log of contradictions fixed, and before and after self-scores on the five criteria.",
      checks: [
        "Self-check against the capstone rubric: do price, channel and message now all fit the product and buyer (4P fit)?",
        "Are unit economics and funnel maths checked by someone other than their author (numbers)?"
      ]
    },
    {
      title: "Rehearse the pitch and Q&A",
      time: "3 hours",
      steps: [
        "Draft a 15-minute running order in which every member presents their own part.",
        "Build no more than 12 slides, one idea each, opening with the buyer's problem and a real quote.",
        "Each member writes the five hardest questions about their part; swap and add questions from other roles.",
        "Prepare evidence-based answers of under a minute each.",
        "Rehearse twice with a timer, once with a peer from another group playing a sceptical panellist.",
        "Agree who answers which type of question."
      ],
      deliverable: "Final slides, running order and a bank of at least 20 hard questions with evidence-based answers.",
      checks: [
        "Self-check against the capstone rubric: can each member answer hard questions with evidence without reading slides (pitch and Q&A)?"
      ]
    },
    {
      title: "Plan after the program",
      time: "30 min",
      steps: [
        "Book the next four quarterly 4P reviews for your product.",
        "Name two possible mentors and message one.",
        "Register for one event at SaaSBoomi, Nasscom or a local trade association.",
        "Book the day-90 impact check and three monthly manager check-ins on one habit.",
        "Agree a day-90 meeting with your capstone group to compare results."
      ],
      deliverable: "A one-page after-program plan with dates in the calendar.",
      checks: [
        "Self-check: is every item booked with a date, not just listed?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: capstone fit check and pitch rehearsal",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a fit check on a sample playbook, finding contradictions between price, channel and message, and then models a strong answer to a hard panel question with evidence.",
      "Each group runs its own fit check, then rehearses a 15-minute pitch while another group plays the panel and asks 10 minutes of hard questions.",
      "Coach gives feedback on the spot on 4P fit, numbers, ownership of each part and how well questions were answered with evidence.",
      "Groups self-score against the five capstone criteria and agree the one change that most lifts their lowest score.",
      "Mixed-role pairs swap objections: PMs challenge sales parts and sales managers challenge product and price parts."
    ]
  },
  reportBack: "Friday report-back: share the biggest contradiction your fit check found and how you fixed it, one hard question you rehearsed, and the first action from your playbook you will run with a real customer on Monday.",
  resources: [
    "Your own playbook from weeks 1 to 11",
    "SPIN Selling (Neil Rackham)",
    "Never Split the Difference (Chris Voss)",
    "SaaSBoomi, Nasscom or a local trade association for ongoing learning",
    "Re-check every item marked (verify): GST, platform fees, WhatsApp rates, TRAI and DPDP rules"
  ]
});
