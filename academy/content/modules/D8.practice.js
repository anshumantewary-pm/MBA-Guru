Academy.add("D8", "practice", {
  quiz: [
    { q: "A GA4 funnel exploration shows:", options: ["where users drop between steps", "ad spend", "search rank", "email opens"], answer: 0, explain: "A funnel exploration counts how many users complete each step you define and where they abandon. Ad spend lives in the ad platforms, search rank in Search Console or SEO tools, and email opens in your email tool, not in a GA4 funnel." },
    { q: "You stop an A/B test after 2 days because B is ahead. The risk is:", options: ["none", "a false winner from too little data", "higher ad cost", "a policy ban"], answer: 1, explain: "Early results swing widely by chance, so a lead after two days is often noise; stopping then can crown a false winner. Saying there is no risk is the tempting answer because B really is ahead, but the sample is too small and too short to cover weekly patterns. Fix the duration in advance." },
    { q: "A landing page converts 2% of 5,000 visits. A test lifts it to 3%. Extra leads per 5,000 visits:", options: ["50", "100", "150", "25"], answer: 0, explain: "2% of 5,000 is 100 leads and 3% is 150, so the test adds 150 − 100 = 50 extra leads. 100 and 150 are the before and after totals, not the difference." },
    { q: "A good monthly digital report includes:", options: ["every metric available", "results by channel, cost per qualified lead, lessons and next tests", "likes only", "nothing on cost"], answer: 1, explain: "A report exists to drive decisions, so it shows results by channel, cost per qualified lead, what was learned and what will be tested next. Every metric available buries the story, likes say nothing about leads or revenue, and a report with no cost cannot guide budget." },
    { q: "When AI drafts your posts, you:", options: ["publish without review", "run competitors' posts through it", "check facts, brand voice and permissions before publishing", "never use AI"], answer: 2, explain: "AI speeds up drafting, but a human must check facts, brand voice, permissions and copyright before anything goes live. Publishing unreviewed risks false claims, feeding in competitors' posts risks copying, and refusing AI entirely gives up real time savings." }
  ],
  tasks: [
    {
      title: "Build a Looker Studio funnel dashboard (week 11 joint session)",
      time: "3 hours, in the joint session with marketers",
      steps: [
        "Before the session, agree definitions of lead, qualified lead and customer with sales and with the marketers on your product.",
        "Check that leads in the CRM carry source and campaign from UTM tags, and export them to a Google Sheet with lead ID, date, source, campaign, stage, qualified flag and revenue.",
        "Export Meta and LinkedIn spend and results to sheets with the same date and channel columns.",
        "In Looker Studio, connect GA4, Google Ads and the sheets, and blend on date and channel where needed.",
        "Lay out one page: scorecards for the 8 to 10 numbers, a channel table with cost per qualified lead, a funnel chart from your GA4 steps, a weekly trend line and a date control.",
        "Check three numbers against the source systems to make sure the blends are right.",
        "Share the dashboard with the team and set a weekly review slot."
      ],
      deliverable: "A shared Looker Studio dashboard link, the definitions sheet, and a short note of the first decision the dashboard prompted.",
      checks: [
        "Self-check against the rubric: does the dashboard use real data from your GA4, ad accounts and CRM, with cost per qualified lead by channel?",
        "Could a sales head read it in two minutes and say what to do next?"
      ]
    },
    {
      title: "Run one A/B test and write the result",
      time: "2 hours to set up, 2 weeks running",
      steps: [
        "Use your GA4 funnel exploration to pick the biggest leak on a landing page, or pick an email in your nurture sequence.",
        "Write the hypothesis: because X, changing Y will improve metric Z.",
        "Build version B with one change only.",
        "Estimate whether you have enough traffic; if not, choose a bolder change or a higher-traffic page or list.",
        "Fix the duration (at least one to two full weeks) or target sample in advance and write it down.",
        "Run the test with a 50/50 split and do not stop early.",
        "At the end, record both rates, the difference in leads per 1,000 visitors, and the decision: adopt, keep or retest."
      ],
      deliverable: "A one-page test write-up: hypothesis, change, duration, sample sizes, results, decision and the next test.",
      checks: [
        "Self-check against the rubric: is the test run on real traffic with one change, and is the result specific enough to act on?",
        "Was the duration set before launch and respected?"
      ]
    },
    {
      title: "Write the monthly digital report",
      time: "2 hours",
      steps: [
        "Refresh the dashboard for the last full month.",
        "Fill the results-by-channel table: spend, leads, qualified leads, customers and revenue, against last month and target.",
        "Show cost per qualified lead by channel with the target, and flag any channel above it.",
        "Compare first-touch and last-touch views for customers won, using the CRM.",
        "Write three lessons, each with a number and a cause, including your A/B test result.",
        "List next month's scale, stop and test decisions with owners and dates.",
        "Write a one-sentence headline a founder could act on, and keep the main report to two pages."
      ],
      deliverable: "A two-page monthly digital report for your product, added to the playbook's Digital section.",
      checks: [
        "Self-check against the rubric: is every number from your own systems, and does every lesson lead to a decision?",
        "Does the report lead with qualified leads and cost, not reach and likes?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: reading a funnel and calling a test",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates building a GA4 funnel exploration live, breaks it down by device, and names the biggest leak; then shows how to write a hypothesis for it.",
      "Pairs practise on each other's GA4 property or a demo account: build a four-step funnel and agree the biggest drop and its likely cause.",
      "Pairs swap test plans and challenge them: is there one change, enough traffic and a fixed duration written down?",
      "Pairs review sample test results at day 2 and at day 14 and decide when a winner can honestly be called.",
      "Coach gives feedback on funnel step definitions, hypothesis quality, the value of each lift in extra leads, and whether each report lesson ends in a decision."
    ]
  },
  reportBack: "Friday report-back: show your dashboard and the cost per qualified lead by channel. Share your A/B test hypothesis and where it stands, and one decision you made from the data this week. What did a real customer's journey look like in first-touch versus last-touch terms?",
  resources: [
    "Google Skillshop analytics courses (verify current list).",
    "Looker Studio help."
  ]
});
