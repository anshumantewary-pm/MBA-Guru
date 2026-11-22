Academy.add("A5", "practice", {
  quiz: [
    { q: "Average revenue per account is ₹5,000 a month, gross margin 80% and monthly churn 2%. LTV is about:", options: ["₹2,50,000", "₹2,00,000", "₹1,00,000", "₹4,000"], answer: 1, explain: "LTV = monthly revenue × gross margin ÷ monthly churn = 5,000 × 0.8 ÷ 0.02 = ₹2,00,000. ₹2,50,000 is what you get if you forget the 80% margin and use revenue instead of gross profit. ₹4,000 is only one month of gross profit." },
    { q: "CAC is ₹60,000 for that same account. CAC payback is:", options: ["15 months", "12 months", "20 months", "6 months"], answer: 0, explain: "Payback = CAC ÷ monthly gross profit = 60,000 ÷ (5,000 × 0.8) = 60,000 ÷ 4,000 = 15 months. Dividing by revenue (₹5,000) instead of gross profit gives 12 months, the tempting wrong answer." },
    { q: "A price fence is:", options: ["a discount", "a limit or feature difference that keeps buyers in the right tier", "a competitor's price", "a GST slab"], answer: 1, explain: "A fence, such as a user limit, multi-branch feature or support level, stops a large buyer from paying the small-buyer price. It is not a discount; a discount lowers price, while a fence protects it." },
    { q: "Value-based pricing sets price from:", options: ["cost plus a margin", "the competitor's price", "the rupee value you create for the buyer", "last year's price"], answer: 2, explain: "Value-based pricing starts from the rupee value the buyer gains, such as time saved or revenue earned, and captures a share of it. Cost plus a margin is cost-plus pricing, which sets a floor but ignores what the buyer would pay." },
    { q: "A buyer wants 10% off. Under discount discipline you:", options: ["give it to save the deal", "refuse to discuss price", "escalate at once", "trade it for something, such as a longer contract, faster payment or a case study"], answer: 3, explain: "Discount discipline means never giving without getting: trade the concession for a longer contract, advance payment, volume or a case study. Giving it to save the deal teaches buyers to always ask, and escalating at once teaches them to always ask for your boss." }
  ],
  tasks: [
    {
      title: "Three priced tiers with fences",
      time: "2 hours",
      steps: [
        "List your customer segments by size and need, using your F1 segmentation.",
        "List every feature, limit and service you offer, and mark which segment truly needs each.",
        "Draft basic, standard and premium: what each includes and who it is for.",
        "Choose one or two fences between each tier (users, volume, features, support level).",
        "Set a price for each tier using value evidence, the competitor reference and your floor price.",
        "Show the draft to one sales manager and two customers, and note which tier each would pick and why."
      ],
      deliverable: "A one-page tier table for the playbook: tier name, target buyer, inclusions, fences, price (with GST treatment stated) and the feedback you received.",
      checks: [
        "Self-check against the rubric: are prices and fences based on real customer feedback, not only sample data?",
        "Could a sales rep explain in one sentence why a buyer belongs in each tier?"
      ]
    },
    {
      title: "Unit economics sheet",
      time: "90 min",
      steps: [
        "Pull last quarter's average revenue per account per month, after discounts, by tier.",
        "Calculate cost to serve per account: hosting, payment and messaging fees, support and onboarding time.",
        "Calculate CAC: total sales and marketing spend divided by new customers in the same period, by channel if you can.",
        "Take monthly churn from billing data.",
        "Calculate gross margin, LTV, CAC payback and LTV to CAC for each tier.",
        "Work out the floor price: the lowest price at which payback and LTV to CAC still meet your targets.",
        "Mark every estimated number and who can confirm it."
      ],
      deliverable: "A Google Sheet tab with margin, CAC, LTV, payback and floor price per tier, plus a short note on the biggest risk in the numbers.",
      checks: [
        "Self-check against the rubric: are the formulas applied correctly (LTV uses gross margin, payback divides by gross profit)?",
        "Is the floor price specific enough that a sales manager could use it tomorrow?"
      ]
    },
    {
      title: "Willingness-to-pay conversations and the discount policy",
      time: "3 hours over the week, plus the joint session",
      steps: [
        "Book 20-minute conversations with 5 buyers or prospects from your target segment.",
        "Explain the product and its value, then ask the four price questions: too cheap, bargain, expensive, too expensive.",
        "Ask 'Why that number?' and what they pay today for the alternative; record exact words.",
        "Put the answers in one table and identify the comfortable price range.",
        "Draft a discount ladder: limits, what the buyer gives back at each level, and who approves.",
        "In the joint session, review the ladder with sales managers and agree final limits, trades and approvers.",
        "Write the agreed policy on one page and share it with every rep."
      ],
      deliverable: "A WTP summary table for 5 buyers with the price range, and a one-page discount policy signed off by sales managers.",
      checks: [
        "Self-check against the rubric: did you speak with 5 real buyers, and does the policy name a specific trade for every discount level?",
        "Does the policy include the floor price and an approver for every level?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: defending a price and trading a discount",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates presenting three tiers to a sceptical SMB buyer, anchoring with premium and showing per-day framing.",
      "Facilitator demonstrates a buyer asking for 10% off and the rep trading it for advance payment and a case study.",
      "Pairs practise: one PM presents their own tiers, the partner plays a buyer who bargains hard; then swap.",
      "Pairs practise the four willingness-to-pay questions on each other's product.",
      "Coach gives feedback on whether value was proven in rupees, whether every concession was traded, and whether the price stayed above the floor."
    ]
  },
  reportBack: "Friday report-back: share one willingness-to-pay answer that surprised you, the tier most buyers chose, and one discount request you traded (or failed to trade) and what happened.",
  resources: [
    "Monetizing Innovation, Madhavan Ramanujam and Georg Tacke",
    "$100M Offers, Alex Hormozi",
    "The GST portal and CBIC guides (verify current GST rates and invoicing rules)"
  ]
});
