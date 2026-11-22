Academy.add("A2", "practice", {
  quiz: [
    { q: "Reach is 2,000, impact 2, confidence 80% and effort 4 person-months. The RICE score is:", options: ["1,600", "400", "800", "3,200"], answer: 2, explain: "RICE = (Reach × Impact × Confidence) ÷ Effort = 2,000 × 2 × 0.8 ÷ 4 = 3,200 ÷ 4 = 800. The tempting 3,200 forgets to divide by effort, and 400 leaves out the impact factor of 2. Always convert confidence to a decimal before multiplying." },
    { q: "In the Kano model, a delighter is:", options: ["a basic need buyers expect", "an unexpected feature that pleases when present and costs nothing when absent", "a compliance must-have", "a performance feature"], answer: 1, explain: "Delighters are features nobody asked for: customers do not complain when they are missing but are pleasantly surprised when they appear. Basic needs and compliance items are expected, so their absence causes dissatisfaction. Performance features give more satisfaction the better they get." },
    { q: "Non-goals in a PRD exist to:", options: ["say what this release won't build, to stop scope creep", "list bugs", "list competitors", "record the budget"], answer: 0, explain: "Non-goals make explicit what the release will not include, so the team and sales can point to an agreed page when new requests arrive. Bugs belong in the tracker, and competitors and budget have their own documents." },
    { q: "A now, next, later roadmap mainly shows:", options: ["exact launch dates", "engineering estimates", "the order and priority of outcomes", "pricing"], answer: 2, explain: "An outcome roadmap groups outcomes and themes into three horizons by priority and certainty. Only the now horizon usually carries firm dates, so exact launch dates are not its main purpose. Estimates and pricing live elsewhere." },
    { q: "An acceptance criterion is:", options: ["a design mock", "a testable condition that shows the story is done", "a sales target", "a vision statement"], answer: 1, explain: "Acceptance criteria are yes-or-no conditions, often written as given, when, then, that must all be true for a user story to count as done. A design mock shows how it looks but does not define done, and sales targets and vision statements sit at a different level." }
  ],
  tasks: [
    {
      title: "MVP list: must, nice, not-now",
      time: "90 min",
      steps: [
        "Copy your A1 problem statement and validation result to the top of a sheet.",
        "List every feature idea from customers, sales, leadership and engineering.",
        "Write the core job in one line.",
        "Sort each feature into must-have, nice-to-have or not-now, asking whether the core job fails without it.",
        "For each must-have, check whether a manual step could replace it for the first 50 customers.",
        "Label each feature as Kano basic, performance or delighter, and confirm every basic need is a must-have.",
        "Review the list with one customer and one engineer, and note changes."
      ],
      deliverable: "An MVP feature list in three buckets, with a one-line reason for each must-have and each not-now.",
      checks: [
        "Self-check against the rubric: is every must-have tied to the validated problem using real customer evidence?",
        "Is the must-have list short enough that it could ship in one release?"
      ]
    },
    {
      title: "RICE score 10 backlog items and defend the top 3",
      time: "2 hours",
      steps: [
        "Choose 10 real backlog items for your product.",
        "Agree the goal the scores serve and fix the reach period (for example one quarter).",
        "Estimate reach from data where possible: active users, pipeline, ticket counts.",
        "Score impact on the fixed scale (3, 2, 1, 0.5, 0.25) and confidence as 100%, 80% or 50%.",
        "Get effort in person-months from engineering, including design and testing.",
        "Calculate (Reach × Impact × Confidence) ÷ Effort for each and sort.",
        "Prepare a two-minute defence of the top 3 and one reason any lower item might be overruled.",
        "Present to the cohort and record the challenges you received."
      ],
      deliverable: "A RICE table with working for 10 items, the top 3 highlighted, and notes on cohort challenges.",
      checks: [
        "Self-check against the rubric: are reach and effort based on real data or engineering estimates, not guesses?",
        "Are the calculations correct and consistent in time period and scale?",
        "Does your note record what changed after the cohort's challenge?"
      ]
    },
    {
      title: "One-page PRD",
      time: "2 hours",
      steps: [
        "Paste in the problem statement and name the users and buyer.",
        "Write 3 success metrics, each with a number and a deadline, at least one being a customer outcome.",
        "List the scope as the must-have features, using your MoSCoW musts if you ran a session.",
        "Write at least 3 non-goals, including requests you expect to hear.",
        "Write 2 or 3 user stories with testable acceptance criteria for the top feature.",
        "List risks with mitigations, and open questions with owners and dates.",
        "Ask one engineer to estimate it and one salesperson to explain it back in a minute; fix any gaps."
      ],
      deliverable: "A one-page PRD for the capstone playbook: problem, users, 3 success metrics, scope, 3+ non-goals, risks and open questions.",
      checks: [
        "Self-check against the rubric: could engineering estimate it and sales explain it tomorrow?",
        "Are all success metrics measurable and are there at least 3 non-goals?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: rank it and defend it",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates scoring five sample backlog items with RICE on screen, then runs a short MoSCoW session for one release and writes the won't list aloud.",
      "Pairs practise: each learner scores three of their own items while the partner challenges reach, impact and confidence.",
      "Pairs role-play a trade-off conversation: one plays the PM, the other an engineer reporting a three-week slip; the PM must cut scope, not quality, and decide within the time-box.",
      "Coach gives feedback on the consistency of scales, the clarity of the defence, and whether the trade-off kept quality and recorded the reason."
    ]
  },
  reportBack: "Friday report-back: share your top 3 RICE items and your PRD's non-goals. What did an engineer and a salesperson say when they read your PRD, and what did you change because of it?",
  resources: [
    "Inspired (Marty Cagan)"
  ]
});
