Academy.add("A3", "practice", {
  quiz: [
    { q: "Pilot success criteria should be agreed:", options: ["after the pilot ends", "before the pilot starts, in writing", "by engineering only", "never, pilots are informal"], answer: 1, explain: "Criteria agreed in writing before the start stop either side reinterpreting the result and link success directly to the path to paid. Agreeing them afterwards invites bending the criteria to fit whatever happened, and engineering alone cannot speak for the customer's definition of value." },
    { q: "Activation is best defined as:", options: ["app downloads", "sign-ups", "the first moment a user gets real value, such as sending a first invoice", "monthly active users"], answer: 2, explain: "Activation marks the first moment of real value, ideally a specific event with a time limit. Downloads and sign-ups are tempting because they are easy to count, but they show interest, not value. Monthly active users is a usage measure, not the first moment of value." },
    { q: "A retention cohort table shows:", options: ["revenue by region", "what share of users who started in a given month are still active later", "ad spend by channel", "price tiers"], answer: 1, explain: "Each row is a group of users who started in the same period, and each column shows the share still active after 1, 2, 3 months. Reading down a column shows whether newer cohorts retain better. Revenue, ad spend and price tiers are tracked in other reports." },
    { q: "An SLA is:", options: ["a written commitment on service levels such as response or resolution time", "a sales target", "a marketing plan", "a feature list"], answer: 0, explain: "A service level agreement sets out measurable commitments such as uptime, response time and resolution time, and often what happens if they are missed. It is part of quality for a service product, not a sales or marketing document." },
    { q: "A good North Star metric:", options: ["counts page views", "tracks the value customers receive and predicts revenue", "is set by a competitor", "changes every week"], answer: 1, explain: "A North Star measures value delivered to customers, which is why it tends to predict revenue, and it stays stable long enough for the team to work towards it. Page views measure activity, not value, and a metric that changes every week cannot guide the team." }
  ],
  tasks: [
    {
      title: "Pilot plan for 5 customers",
      time: "2 hours",
      steps: [
        "Write entry criteria that match your target segment.",
        "Name 5 real customers and check each against the entry criteria.",
        "Write numeric success criteria and how each will be measured.",
        "Set the duration with start and end dates, a weekly check-in and a written feedback form.",
        "Name an owner on your side and on each customer's side, including the decision-maker.",
        "Write the path to paid: plan, price, billing start date and what happens on a partial result.",
        "Confirm the plan with at least one customer by email before the start."
      ],
      deliverable: "A pilot plan for 5 named customers: goals, success criteria, timeline, owners and conversion to paid.",
      checks: [
        "Self-check against the rubric: are the customers real and the success criteria agreed with them in writing?",
        "Is the path to paid specific enough (price, plan, date) to act on the day the pilot ends?"
      ]
    },
    {
      title: "North Star, input metrics and a retention cohort table",
      time: "2 hours",
      steps: [
        "Write your North Star metric in one line and explain why it tracks customer value and predicts revenue.",
        "List 3 input metrics the team can influence directly.",
        "Define your activation event with a time limit.",
        "Export or prepare users with their start month and monthly activity (real data if you have it, sample data clearly labelled if not).",
        "Build a monthly retention cohort table showing the share active in months 1, 2 and 3.",
        "Write three sentences on what the table shows across rows and down columns.",
        "Add feature adoption for your top 3 features if data allows."
      ],
      deliverable: "A one-page metric set: North Star, 3 input metrics, activation definition and a retention cohort table with your reading of it.",
      checks: [
        "Self-check against the rubric: is the North Star about customer value rather than activity, and is the data real or clearly labelled sample?",
        "Is the activation event specific, measurable and time-limited?"
      ]
    },
    {
      title: "Compliance and data checklist",
      time: "90 min",
      steps: [
        "List every regime that may apply to your category, such as BIS, FSSAI, Legal Metrology, labelling or sector rules for goods, or scope and SLAs for services.",
        "For each item, find the official source and record the link name and the date you checked it (verify).",
        "Mark each item as applies, does not apply, or unsure, and add an owner for every unsure item.",
        "Build a data map: each personal data field, its purpose, where it is stored, who can access it and how long it is kept.",
        "Add DPDP notice, consent, security and breach-response items, noting which apply when under the phased rollout (verify).",
        "Review the checklist with a qualified adviser or your legal or compliance team if available."
      ],
      deliverable: "A compliance and data checklist with a source and check date for every item, plus a personal data map.",
      checks: [
        "Self-check against the rubric: does every item have a named official source and date, with (verify) noted where rules may change?",
        "Have you removed or justified every personal data field?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: agreeing pilot success criteria",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a pilot kick-off call: agreeing entry criteria, numeric success criteria, the decision-maker and the path to paid, then walks through reading a sample retention cohort table.",
      "Pairs practise: one plays the pilot customer's owner, the other the PM, and they agree written success criteria and conversion terms in 10 minutes.",
      "Pairs swap roles, then each learner reads their partner's cohort table aloud and explains what it shows.",
      "Coach gives feedback on whether criteria were numeric and agreed before the start, whether the decision-maker was named, and whether the metric reading focused on customer value."
    ]
  },
  reportBack: "Friday report-back: which customers agreed to your pilot, what success criteria and conversion terms did they accept in writing, and what did your first week of feedback or your cohort table tell you?",
  resources: [
    "Lean Analytics (Alistair Croll and Benjamin Yoskovitz)",
    "DPDP Rules, 2025 notification and PIB release (verify what applies when)",
    "Official BIS, FSSAI and Legal Metrology sources for your category (verify)",
    "Agile Project Management Professional Certificate, University of Maryland (edX): Agile Process, Project and Program Controls course",
    "Simultaneous Management (Alexander Laufer), on managing uncertainty in projects"
  ]
});
