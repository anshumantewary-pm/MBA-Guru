Academy.add("D7", "practice", {
  quiz: [
    { q: "Since July 2025, WhatsApp Business Platform charges are based on:", options: ["each conversation", "each delivered template message, by category", "a flat monthly fee", "the number of contacts"], answer: 1, explain: "Since 1 July 2025, Meta charges per delivered template message, priced by category (marketing, utility, authentication). Conversation-based pricing was the older model, which is why option a is tempting; providers may add their own fees, but Meta's charge is not a flat fee or per contact." },
    { q: "Before sending a marketing template, you need:", options: ["the person's opt-in", "their GST number", "a phone call", "nothing"], answer: 0, explain: "You must have the person's opt-in to receive messages from you on WhatsApp. Messaging people who did not agree leads to blocks and reports that hurt your number, and consent is also expected under India's data protection rules (verify current obligations). A GST number or a phone call is not a consent mechanism." },
    { q: "\"Your order has shipped\" belongs in which category?", options: ["marketing", "authentication", "utility", "service"], answer: 2, explain: "A shipping update relates to a transaction the customer started, so it is a utility message. Authentication is for one-time passcodes, marketing is for promotions, and \"service\" describes free-form replies within the customer service window rather than a template category." },
    { q: "SPF, DKIM and DMARC help with:", options: ["email deliverability, by authenticating your domain", "SEO", "WhatsApp pricing", "ad targeting"], answer: 0, explain: "These DNS records prove that email claiming to come from your domain really does, which helps mailbox providers trust it and put it in the inbox. They have nothing to do with search rankings, WhatsApp charges or ad audiences." },
    { q: "In a nurture sequence, the email after the welcome usually:", options: ["asks for payment", "speaks to the buyer's problem and adds value", "offers a discount", "asks for referrals"], answer: 1, explain: "The second email builds trust by addressing the buyer's problem and giving something useful, which earns the right to make an offer later. Asking for payment, discounting or asking for referrals this early comes before any trust exists and usually lowers response." }
  ],
  tasks: [
    {
      title: "Build an opt-in flow and write 3 templates",
      time: "2 hours",
      steps: [
        "Choose one opt-in source: a website form or widget, a QR code (counter, packaging, invoice) or a click-to-WhatsApp ad.",
        "Write the opt-in wording: what people will receive, how often, and how to stop.",
        "Set up the entry point with a pre-filled first message, and test it on two phones.",
        "Write the welcome template: thank them, confirm what they will receive, give one helpful next step and the opt-out instruction.",
        "Write the follow-up template and the offer template, each personal, three to five lines, one call to action, with buttons.",
        "Assign each template its honest category and submit for approval through your provider, or save as quick replies if you use the app.",
        "Set up a consent log with opt-in date, source and type."
      ],
      deliverable: "A diagram or screenshots of the opt-in flow, the three templates with categories, and the consent log with the first opted-in contacts.",
      checks: [
        "Self-check against the rubric: is the flow live with real opt-ins, not just a plan?",
        "Does every template have one call to action and a clear way to opt out of marketing?"
      ]
    },
    {
      title: "Write a 5-email nurture sequence for one persona",
      time: "3 hours",
      steps: [
        "Choose one persona and stage, such as new leads from the website.",
        "From interviews and sales calls, note their top problem, top objection and best proof story.",
        "Write the welcome email: thank, deliver what they asked for, set expectations.",
        "Write the problem email with real value and no hard sell, then the proof email with a customer like them.",
        "Write the offer email with one clear offer and a reason to act now, then a short, personal check-in.",
        "Write specific, plain subject lines and set timings, with an exit rule when someone books or buys.",
        "Confirm SPF, DKIM and DMARC are set up on your sending domain before switching the sequence on."
      ],
      deliverable: "The five emails with subject lines, timings, the persona and stage they target, and the exit rule.",
      checks: [
        "Self-check against the rubric: does each email use the persona's real words and problems rather than generic copy?",
        "Does email two add value on the buyer's problem without asking for payment or offering a discount?"
      ]
    },
    {
      title: "Send one broadcast and track the response",
      time: "90 min plus a week of tracking",
      steps: [
        "Pick one offer with a clear deadline and calculate the margin per order.",
        "Select only opted-in contacts and exclude anyone on your do-not-message list.",
        "If on the Platform, check Meta's current India rate card and your provider's fees and estimate the cost (verify).",
        "Write the broadcast template: personal, short, one offer, one button, plus an opt-out option.",
        "Send to the list and record numbers sent and delivered.",
        "Over seven days, log replies, opt-outs, enquiries and orders attributed to the broadcast.",
        "Calculate reply rate, order rate, cost per order and revenue against cost."
      ],
      deliverable: "A one-page broadcast report: list size, delivered, replies, opt-outs, orders, cost, revenue, and what you will change next time.",
      checks: [
        "Self-check against the rubric: are the results real numbers from your broadcast, with cost per order calculated?",
        "Were only opted-in contacts messaged, and were opt-outs honoured straight away?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: templates that get replies and the second email",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates rewriting a bulk-blast style WhatsApp message into a personal, short template with one button, and classifies five sample messages into marketing, utility and authentication.",
      "Pairs swap their welcome, follow-up and offer templates and read them as phone notification previews; each partner marks the first line that would make them stop reading.",
      "Pairs practise writing email two for each other's persona: pure value on the buyer's problem, under 200 words.",
      "Pairs walk through each other's lead handoff: what message arrives in the first five minutes, who is alerted and within what SLA.",
      "Coach gives feedback on opt-in clarity, honest categorisation, single calls to action, and where a human must take over from automation."
    ]
  },
  reportBack: "Friday report-back: how many people opted in, and from which source? Share your broadcast numbers (delivered, replies, opt-outs, orders, cost per order) and one reply from a real customer. What surprised you, and what will you change in the next message?",
  resources: [
    "WhatsApp Business help pages.",
    "HubSpot Academy email marketing course (verify)."
  ]
});
