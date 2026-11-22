Academy.add("F2", "practice", {
  quiz: [
    { q: "Cost is ₹600 and price is ₹1,000. The gross margin is:", options: ["66.7%", "40%", "60%", "37.5%"], answer: 1, explain: "Margin is profit as a share of price: (1,000 − 600) ÷ 1,000 = 40%. The tempting 66.7% is the markup, 400 ÷ 600, which divides profit by cost instead of price. That is the common mix-up." },
    { q: "Fixed costs are ₹2,00,000, price is ₹1,000 and variable cost is ₹600 per unit. Break-even is:", options: ["200 units", "333 units", "500 units", "2,000 units"], answer: 2, explain: "Each unit contributes ₹1,000 − ₹600 = ₹400 toward fixed costs, so break-even is 2,00,000 ÷ 400 = 500 units. Dividing by the full price (200 units) ignores variable cost, and dividing by the variable cost (333 units) uses the wrong number." },
    { q: "\"Can I get it easily?\" is answered by:", options: ["Product", "Price", "Promotion", "Place"], answer: 3, explain: "Place covers the channel, location and logistics, which decide whether the buyer can get the product easily. Promotion answers why the buyer should trust and choose you, which is a different question." },
    { q: "Which is a value statement?", options: ["\"Has 5 GB storage\"", "\"Saves your team 6 hours a week, about ₹18,000 a month\"", "\"Stores all your files\"", "\"Comes in three colours\""], answer: 1, explain: "Value is what the product means for the buyer in rupees, time or risk, and this option quantifies both time and money. \"Has 5 GB storage\" and \"Comes in three colours\" are features, and \"Stores all your files\" is a benefit with no value attached." },
    { q: "In the maturity stage, focus usually shifts to:", options: ["differentiation, retention and cost efficiency", "explaining the category to first buyers", "MVP testing", "high launch prices for early adopters"], answer: 0, explain: "In maturity most buyers understand the category and many rivals offer similar products, so firms compete by standing out, keeping customers and controlling cost. Explaining the category, MVP testing and early-adopter pricing belong to the introduction stage." }
  ],
  tasks: [
    {
      title: "One-page 4P snapshot",
      time: "2 hours",
      steps: [
        "Write the four buyer questions as headings on one page.",
        "Under each, describe in one or two lines how your product answers it today.",
        "Gather evidence for each P: lost-deal reasons, support tickets, partner feedback, funnel numbers.",
        "Rate each P from 1 to 5 based on that evidence.",
        "Name your weakest P and state the evidence in two or three bullet points.",
        "Write two lines on how fixing the weakest P would affect each of the other three."
      ],
      deliverable: "A one-page 4P snapshot naming the weakest P with evidence.",
      checks: [
        "Self-check against the rubric: is the weakest P backed by real customer or sales data, not opinion?",
        "Have you shown how the other three Ps would be affected?"
      ]
    },
    {
      title: "Unit economics table",
      time: "2 hours",
      steps: [
        "List all variable costs per unit, including delivery, packaging, commissions and payment fees.",
        "List monthly fixed costs.",
        "Verify the current GST rate for your category and record the source and date checked.",
        "Show the price before and after GST.",
        "Calculate gross margin % on the pre-GST price, and break-even units.",
        "Set a floor price and write the reason for it.",
        "Estimate customer acquisition cost (CAC) from last quarter's sales and marketing spend divided by new customers.",
        "Ask someone in finance or accounts to check at least one number."
      ],
      deliverable: "A unit economics table: cost per unit, price before and after GST, gross margin %, break-even units, floor price and CAC.",
      checks: [
        "Self-check against the rubric: are the numbers from your real product and checked, not sample data?",
        "Is margin calculated on price (not cost) and before GST?",
        "Is the GST rate verified with a dated source?"
      ]
    },
    {
      title: "Three-minute mixed-group presentation",
      time: "60 min prep, 3 min to present",
      steps: [
        "Pick the P your role mostly owns.",
        "Write one example each of how product, price, place or promotion decisions by other roles change your P.",
        "Prepare one slide or one sheet with your P in the centre and the other three around it.",
        "Rehearse once to keep within 3 minutes.",
        "Present to your mixed group and note one dependency a colleague raised that you had missed."
      ],
      deliverable: "Your one-page dependency map plus notes on the group's feedback.",
      checks: [
        "Self-check against the rubric: did you use a real example from your product rather than a textbook one?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: finding the weakest P with numbers",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a 4P snapshot and unit economics on a sample product, including working back from the final price through GST and partner margins.",
      "Mixed-role groups of four calculate margin, markup and break-even for each member's real product and challenge each other's evidence for the weakest P.",
      "Coach gives feedback on the spot on margin-markup mix-ups, GST handling and weak evidence.",
      "Each learner revises their weakest-P statement and reads it to the group.",
      "Group agrees one example of a change in one P that broke another."
    ]
  },
  reportBack: "Friday report-back: share your weakest P and the evidence, one number from your unit economics that surprised you, and what a real customer or partner said when you tested it.",
  resources: [
    "Marketing Management (Kotler and Keller), chapters on the marketing mix",
    "Khan Academy or Coursera audit mode for costing and break-even (verify what is free)"
  ]
});
