Academy.add("A1", "practice", {
  quiz: [
    { q: "The strongest validation evidence is:", options: ["50 likes on a post", "5 buyers paying a deposit", "10 people saying \"great idea\"", "200 survey replies saying \"likely to buy\""], answer: 1, explain: "A deposit is a commitment of money, the top rung of the evidence ladder. Likes, compliments and survey intentions cost the customer nothing, so even large numbers of them are weaker than a few real payments. The 200 survey replies are tempting because of the volume, but stated intention is still only opinion." },
    { q: "Bottom-up market sizing uses:", options: ["a global market report", "GDP growth", "reachable target customers × expected adoption × price", "a competitor's revenue"], answer: 2, explain: "Bottom-up sizing multiplies customers you can actually reach by the share you expect to adopt and the annual price, each with a named source. Global reports, GDP growth and competitor revenue are top-down inputs that say nothing about your channel, your offer or your price." },
    { q: "A fake-door test measures:", options: ["server load", "interest, by counting clicks on a feature not yet built", "price elasticity", "brand awareness"], answer: 1, explain: "A fake-door test places a button or link for a feature that does not exist yet and counts how many users click it, which shows interest from real behaviour. It does not test price sensitivity or brand awareness, and users who click should be told honestly that the feature is coming soon." },
    { q: "In design thinking, the stage after \"define\" is:", options: ["test", "empathise", "launch", "ideate"], answer: 3, explain: "The loop runs empathise, define, ideate, prototype, test. Once the problem is defined, you ideate many possible solutions before choosing a few to prototype. Empathise comes before define, and testing only happens once there is a prototype." },
    { q: "Why set the pass mark before the test?", options: ["so no result can be read as success after the fact", "the CFO requires it", "to keep tests short", "to impress investors"], answer: 0, explain: "Without a pre-set target, almost any result can be reinterpreted as encouraging. Writing the pass line, fail line and time limit in advance links the result to an honest decision: build, change or stop. It is about discipline, not about satisfying a CFO or investors." }
  ],
  tasks: [
    {
      title: "One-page problem brief",
      time: "90 min",
      steps: [
        "Re-read your F1 interview notes and list every pain in the customer's own words.",
        "Group the pains, count how many customers mentioned each, and choose the strongest one.",
        "Write the four-part problem statement: who, when it happens, today's workaround, and its cost in rupees, time or risk.",
        "Add a source next to every number (interview, invoice, your estimate).",
        "Sort the evidence you have so far into the ladder: opinions, past behaviour, commitments of time, reputation or money.",
        "Read the brief to one real customer and note what they corrected.",
        "Fit it all on one page."
      ],
      deliverable: "A one-page problem brief (who, pain, workaround, cost, evidence so far) for the capstone playbook.",
      checks: [
        "Self-check against the rubric: is every claim backed by real customer data, with its source named?",
        "Is the problem specific enough that a colleague could find ten such customers tomorrow?",
        "Have you added a short note on what changed after the customer read it?"
      ]
    },
    {
      title: "Bottom-up sizing for two cities",
      time: "2 hours",
      steps: [
        "Choose one segment from your problem brief.",
        "Pick one metro and one tier 2 city where you could realistically sell.",
        "For each city, count reachable target customers from a named list or channel (association directory, distributor list, marketplace, manual count).",
        "Set expected adoption from a test or pilot result; if you have none, use a conservative range and label it as an assumption.",
        "Set the annual price from interviews or the cost of today's workaround.",
        "Multiply reachable customers × adoption × annual price for each city and show the working.",
        "Write two lines on which lever (reach, adoption or price) would most change the result."
      ],
      deliverable: "A sizing table for one metro and one tier 2 city, with sources and assumptions listed.",
      checks: [
        "Self-check against the rubric: does every term have a named source rather than a \"1% of India\" guess?",
        "Is the price annual, not monthly, and is adoption taken from evidence where possible?"
      ]
    },
    {
      title: "Seven-day validation test",
      time: "7 days (about 4 hours of work)",
      steps: [
        "Write the one question the test must answer.",
        "Choose a cheap test: landing page, WhatsApp catalogue, pre-order, sample batch, concierge MVP or fake-door button.",
        "Decide the traffic source and how many people you will reach.",
        "Write the pass line, fail line, time limit and decision rule in one sentence, and post it to the cohort before starting.",
        "Run the test for 7 days without changing the offer.",
        "Record the raw numbers daily in a sheet.",
        "Compare the result with the pass mark and write your decision: build, change or stop, with one paragraph of reasoning."
      ],
      deliverable: "A test report: question, method, pre-set pass mark, raw results and the build, change or stop decision.",
      checks: [
        "Self-check against the rubric: was the pass mark posted before the test began, and is the result read against it honestly?",
        "Did the test measure behaviour (sign-ups, payments, clicks) rather than opinions?",
        "Does your note say what you would change next time?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: from pain to pass mark",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a 10-minute problem interview that moves from opinion questions to a request for a commitment, then rewrites a weak problem statement into the four-part format live.",
      "Pairs practise: each learner interviews a partner playing their target customer, then writes the partner's problem statement in four parts and reads it back.",
      "Pairs swap and draft each other's pass mark for a 7-day test, with a pass line, fail line and time limit.",
      "Coach gives feedback on whether questions asked about past behaviour, whether the cost was in rupees, time or risk, and whether the pass mark had a denominator."
    ]
  },
  reportBack: "Friday report-back: share your 7-day test result against the pass mark you posted in advance. What did real customers actually do, which rung of the evidence ladder did you reach, and did you decide to build, change or stop?",
  resources: [
    "The Lean Startup (Eric Ries)",
    "Y Combinator's free videos on finding and validating problems",
    "Your own F1 interview notes, reused as the first evidence base",
    "Agile Project Management Professional Certificate, University of Maryland (edX): Agile Innovation and Problem Solving course",
    "Mindwise (Nicholas Epley), on why asking beats imagining what others think",
    "The Four Steps to the Epiphany (Steve Blank), the original Customer Development method",
    "The Goal (Eliyahu Goldratt), a novel that teaches bottlenecks and the Theory of Constraints",
    "Value Proposition Design (Osterwalder and others), for the value map"
  ]
});
