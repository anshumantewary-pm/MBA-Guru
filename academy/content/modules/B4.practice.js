Academy.add("B4", "practice", {
  quiz: [
    { q: "A solution costs ₹4 lakh and saves ₹10 lakh in year one. Year-one ROI is:", options: ["250%", "150%", "40%", "60%"], answer: 1, explain: "ROI = (gain − cost) ÷ cost = (₹10 lakh − ₹4 lakh) ÷ ₹4 lakh = ₹6 lakh ÷ ₹4 lakh = 150%. 250% is the tempting error of dividing gain by cost (10 ÷ 4) without first subtracting the cost; 40% is cost ÷ gain." },
    { q: "The first step in handling an objection is to:", options: ["listen fully", "answer at once", "offer a discount", "escalate"], answer: 0, explain: "Listening fully comes first, because the stated objection is often not the real one and you cannot clarify what you have not heard. Answering at once feels efficient but usually addresses the wrong concern, and an early discount gives value away for nothing." },
    { q: "\"I need to ask my partner.\" The best response is:", options: ["\"Can't you decide yourself?\"", "\"Sure, I'll wait.\"", "\"Makes sense. What will matter most to them, and could we set up a short call together?\"", "send the contract anyway"], answer: 2, explain: "This response respects the buyer's process, uncovers the partner's likely concerns and gets you into the conversation where the decision is made. 'Sure, I'll wait' is polite but passive: the deal goes into a meeting you are not part of, with no one to answer the partner's questions." },
    { q: "A proposal should open with:", options: ["company history", "the buyer's situation and the cost of doing nothing", "the price", "team photos"], answer: 1, explain: "Opening with the buyer's situation and the cost of doing nothing makes the proposal about their problem and frames the price against what inaction costs. Company history and team photos are about you, and opening with price invites a straight comparison with cheaper vendors." },
    { q: "A buyer doesn't trust a new vendor. What lowers their risk most?", options: ["a longer brochure", "a lower price", "a reference call and a small paid pilot", "more follow-up emails"], answer: 2, explain: "A reference call gives reassurance from a peer, and a small paid pilot lets the buyer test results with limited exposure, so both directly reduce risk. A lower price is tempting, but it does not reduce the risk that the product fails and can even make a new vendor look less credible." }
  ],
  tasks: [
    {
      title: "Build the objection bank: top 10 objections",
      time: "2 hours",
      steps: [
        "Ask every rep to list the objections they heard in the last month, word for word where possible.",
        "Group them into price, trust, timing, 'I need to ask someone' and product-specific objections.",
        "Choose the 10 most frequent or most damaging.",
        "For each, write a clarifying question that reveals the real concern.",
        "Write a short answer that follows listen, acknowledge, clarify, answer with proof, confirm.",
        "Attach one proof point to each: an ROI figure, a customer example, a reference or a guarantee.",
        "Store the bank in a shared sheet or document and set a monthly review date."
      ],
      deliverable: "An objection bank of 10 objections, each with a clarifying question, an answer and one proof point.",
      checks: [
        "Self-check against the rubric: are the objections real ones your team has heard, with proof from real customers?",
        "Does every answer start by clarifying rather than defending?"
      ]
    },
    {
      title: "Write one ROI-led proposal for a live deal",
      time: "3 hours",
      steps: [
        "Pick a live deal where discovery is complete and you have the buyer's numbers.",
        "Write section 1, their situation, using the buyer's own words from your notes.",
        "Calculate the cost of doing nothing per month and per year, stating assumptions.",
        "Describe the solution only against the problems in section 1.",
        "Build the ROI table: gains, all costs, ROI = (gain − cost) ÷ cost, payback period and a conservative case.",
        "Add investment (with GST shown; verify current rates), terms and a dated next-steps table.",
        "Get written feedback from a peer and the facilitator, revise, and walk the buyer through it on a call."
      ],
      deliverable: "One ROI-led proposal in the seven-section structure, plus the peer and facilitator feedback and your revisions.",
      checks: [
        "Self-check against the rubric: does the proposal use the buyer's real numbers and words, not generic claims?",
        "Is the ROI calculated correctly, with payback and a conservative case?",
        "Does it end with dated next steps?"
      ]
    },
    {
      title: "Objection relay: 10 objections in 20 minutes",
      time: "60 min",
      steps: [
        "Print the 10 objections from your bank on cards.",
        "Seat reps in a circle; one plays the buyer and reads an objection, the next rep handles it.",
        "Allow two minutes per objection, rotating handler and buyer each time.",
        "Peers score each handling on the objections row of the role-play scorecard (1 to 4): listen, acknowledge, clarify, answer with proof, confirm.",
        "Note the objections with the lowest average score.",
        "Rewrite those answers in the bank and repeat the relay next week."
      ],
      deliverable: "Relay score sheet for each rep and objection, and the updated objection bank.",
      checks: [
        "Self-check against the rubric: were scores tied to the five-step method, with notes on what each rep did?",
        "Did the lowest-scoring objections get rewritten?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: Handling objections with proof",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates the five-step method on a price objection that turns out to be a trust concern, then on 'I need to ask my partner'.",
      "Facilitator walks through one learner's ROI table and checks the calculation, payback and conservative case with the group.",
      "Pairs practise: one plays a sceptical owner raising price, trust, timing and authority objections; the other handles each using their bank; swap.",
      "Trios run a short objection relay with peer scoring on the objections row of the scorecard.",
      "Coach gives feedback on listening before answering, the quality of clarifying questions, and whether every answer used proof rather than opinion."
    ]
  },
  reportBack: "Friday report-back: which objection did you handle with a real buyer this week, what did your clarifying question reveal, and how did the buyer respond to your ROI-led proposal?",
  resources: [
    "Building a StoryBrand (Donald Miller), for pitch structure",
    "To Sell Is Human (Daniel Pink)"
  ]
});
