Academy.add("A7", "practice", {
  quiz: [
    { q: "On a joint call, the next step is owned by:", options: ["the PM", "the sales rep", "the buyer's IT team", "nobody"], answer: 1, explain: "The rep owns the relationship and the next step; the PM goes deep on the problem and the product. If the PM takes the close, the buyer is unsure who to deal with, and if nobody owns it, the deal stalls." },
    { q: "Which is an implication question?", options: ["\"What happens to renewals when complaints take 3 days to resolve?\"", "\"How many agents do you have?\"", "\"Would you like a demo?\"", "\"Can you sign today?\""], answer: 0, explain: "An implication question explores the consequences of a problem, here linking slow complaints to renewals. 'How many agents do you have?' is a situation question: useful for facts, but it does not build urgency." },
    { q: "A buyer asks \"Can you add bulk upload?\" The best PM response is:", options: ["\"Yes, next month\"", "\"No\"", "\"What would bulk upload let you do, and how do you handle it today?\"", "\"Ask sales\""], answer: 2, explain: "Asking what it would let them do finds the problem behind the request, which may already be solvable. 'Yes, next month' is tempting because it pleases the buyer, but it is a roadmap promise you may not keep." },
    { q: "In a power-interest grid, high-power, low-interest stakeholders should be:", options: ["ignored", "managed closely every day", "kept satisfied with short, regular updates", "told only after launch"], answer: 2, explain: "They can block you but do not want detail, so short, regular updates keep them satisfied with no surprises. Managing them closely every day is for high-power, high-interest stakeholders and would waste their time." },
    { q: "In RACI, R and A stand for:", options: ["responsible and accountable", "reviewed and approved", "ready and active", "required and assigned"], answer: 0, explain: "R is responsible (does the work) and A is accountable (owns the outcome; exactly one person per task). C is consulted and I is informed. 'Reviewed and approved' sounds plausible but is not the RACI meaning." }
  ],
  tasks: [
    {
      title: "Join 3 sales calls",
      time: "3 to 4 hours over the week",
      steps: [
        "Ask a sales manager to schedule you on 3 discovery or demo calls with real prospects or customers.",
        "Before each call, hold a 10-minute prep with the rep: roles, no-go topics, what the rep wants from you.",
        "Prepare two problem, two implication and one need-payoff question for each call.",
        "On the call, take notes of the buyer's exact words.",
        "After each call, write four lines: the problem, its implication, the request the buyer made, and the problem behind the request.",
        "Debrief with the rep for 10 minutes and agree who owes what follow-up.",
        "Add the requests and underlying problems to your feature request log."
      ],
      deliverable: "A one-page call log for the playbook with problem, implication, request and problem behind it for each of the 3 calls, plus what you changed in your backlog.",
      checks: [
        "Self-check against the rubric: are these real calls with the buyer's own words, not paraphrased theory?",
        "Use the discovery scorecard (opening, discovery, listening, tailoring): did the buyer talk most, and did you ask at least 3 problem and 3 implication questions across the calls?"
      ]
    },
    {
      title: "10-minute demo role-play with a hard buyer",
      time: "2 hours preparation, 30 min role-play",
      steps: [
        "Pick a realistic buyer from your call notes and write their top 3 problems in their words.",
        "Plan one aha moment per problem and prepare demo data that looks like theirs.",
        "Write your tell, show, tell script: the opening preview and the closing 'what it means'.",
        "Ask a peer to play a hard buyer who interrupts, asks for a roadmap date and questions the price.",
        "Give the 10-minute demo, handling feature requests with 'What would that let you do?' and passing pricing to the rep.",
        "Two peers score you 1 to 4 on opening, discovery, listening and tailoring from the role-play scorecard.",
        "Note your lowest score and rehearse that part again."
      ],
      deliverable: "Demo flow with 3 aha moments, two peer scorecards and a short note on what you will change.",
      checks: [
        "Self-check against the scorecard: tailoring scores 3 or more only if the demo used the buyer's problem and language.",
        "Did you finish within 10 minutes and make no roadmap promises?"
      ]
    },
    {
      title: "Power-interest map and RACI for your next release",
      time: "90 min",
      steps: [
        "List every internal stakeholder group affected by your next release.",
        "Place each on a power-interest grid and write how and how often you will update them.",
        "List the release's main tasks: pricing, demo, training, docs, campaign, go or no-go decision.",
        "Mark R, A, C or I for each stakeholder per task, with exactly one A per task.",
        "Send the grid and RACI to the stakeholders and ask them to correct it.",
        "Resolve any disagreement on accountability and record the final version."
      ],
      deliverable: "A power-interest grid and a RACI table for your next release, confirmed by the named stakeholders.",
      checks: [
        "Self-check against the rubric: does each task have exactly one accountable person, using real names?",
        "Did at least two stakeholders review and confirm it?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: the joint call and the tailored demo",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator and a sales manager demonstrate a joint call: rep opens and closes, PM runs SPIN discovery and a short tell, show, tell demo.",
      "Facilitator demonstrates turning 'Can you add bulk upload?' into the problem behind it, and saying no well to a roadmap date request.",
      "Trios practise: PM, rep and hard buyer, rotating roles every 12 minutes.",
      "Observers score each round with the discovery scorecard: opening, discovery, listening, tailoring.",
      "Coach gives feedback on implication questions, demo tailoring, stopping early and avoiding promises."
    ]
  },
  reportBack: "Friday report-back: from the real sales calls you joined, share one implication question that landed, one feature request whose real problem surprised you, and how the buyer reacted.",
  resources: [
    "SPIN Selling, Neil Rackham",
    "Agile Project Management Professional Certificate, University of Maryland (edX): Agile Leadership Principles and Practices course",
    "Nudge (Richard Thaler and Cass Sunstein), on designing choices",
    "Primal Leadership (Daniel Goleman and others), on emotional intelligence and team climate"
  ]
});
