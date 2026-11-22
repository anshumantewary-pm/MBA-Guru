Academy.add("C1", "practice", {
  quiz: [
    { q: "Which is primary research?", options: ["an IBEF report", "interviews with 15 target buyers", "a competitor's annual report", "Google Trends"], answer: 1, explain: "Primary research is collected by you, for your question, from your own buyers, so interviews with 15 target buyers qualify. An IBEF report, a competitor's annual report and Google Trends all already exist and were collected by someone else, which makes them secondary research." },
    { q: "Which survey question is leading?", options: ["\"How often do you reorder stock?\"", "\"Which channel did you last buy from?\"", "\"Don't you agree our product saves time?\"", "\"What is your monthly budget?\""], answer: 2, explain: "\"Don't you agree...\" pushes the respondent towards a yes and assumes the product saves time, so the answer tells you little. The other three ask neutrally about behaviour or facts and leave the respondent free to answer either way." },
    { q: "An insight is:", options: ["any statistic", "a non-obvious buyer truth that changes what you do", "a competitor's ad", "a slogan"], answer: 1, explain: "An insight is a non-obvious buyer truth that changes a decision on message, channel, product or price. A statistic is only a fact until it reveals something that changes what you do, which is why \"any statistic\" is the tempting but wrong choice." },
    { q: "Why interview before surveying?", options: ["interviews find the right questions, and surveys then measure them", "surveys first are not allowed", "interviews are always cheaper", "there is no reason"], answer: 0, explain: "Interviews uncover what matters to buyers and the words they use, so the survey measures the right things. Surveys first are allowed, but they only count the options you already thought of; interviews are not always cheaper per person either." },
    { q: "For tier 2 buyers, what most often differs from metro buyers?", options: ["nothing", "the brand's logo", "language, trust sources and payment habits", "time zone"], answer: 2, explain: "Tier 2 and 3 buyers often prefer Hindi or a regional language, trust local references such as dealers and nearby customers, and have different payment habits such as UPI or distributor credit. India has a single time zone, and the logo does not change by town size." }
  ],
  tasks: [
    {
      title: "Research plan",
      time: "60 min",
      steps: [
        "Write the one marketing decision your research must inform this quarter.",
        "List 3 to 5 questions that decision depends on.",
        "For each question, choose the method: secondary source, interview, survey, field visit or social listening.",
        "Name specific sources (reports, rivals' sites, review pages, customer lists) and who you will interview.",
        "Set a timeline across the week, with interviews before the survey goes out.",
        "Note how you will handle consent and personal data (verify current DPDP requirements)."
      ],
      deliverable: "A one-page research plan in your playbook: decision, questions, methods, sources and timeline.",
      checks: [
        "Self-check against the rubric: is every question tied to a real decision on your own product, not a generic one?",
        "Does at least one method reach real buyers in your target segment?"
      ]
    },
    {
      title: "Survey of 30 or more target buyers",
      time: "3 hours over the week",
      steps: [
        "Draft 10 questions in Google Forms: 1 or 2 screening questions, 6 to 7 from interview themes, 1 open question.",
        "Rewrite any question that is leading, vague or asks two things at once.",
        "Pilot with 3 people from the segment and fix what confuses them.",
        "Distribute through channels your buyers use: customer list, sales team WhatsApp, dealer network, trade association.",
        "Follow up until you have 30 or more replies from the target segment; screen out the rest.",
        "Summarise the results: counts per answer, the top three themes from the open question and anything surprising."
      ],
      deliverable: "The survey link, the raw response count after screening, and a one-page summary of results.",
      checks: [
        "Self-check against the rubric: 30 or more real replies from the target segment, not friends or colleagues.",
        "Are results reported honestly as a directional read of this sample?"
      ]
    },
    {
      title: "One-page insight brief",
      time: "90 min",
      steps: [
        "Lay out findings from your interviews, survey, social listening and secondary research side by side.",
        "Look for tensions between what buyers say and do, and between team beliefs and evidence.",
        "Ask why three times about each surprising finding.",
        "Write three insights, each as one plain sentence from the buyer's point of view.",
        "Under each insight, cite evidence from three different sources.",
        "Add the action each insight implies: what you will start, stop or change in message, channel, product or price."
      ],
      deliverable: "A one-page insight brief with 3 insights, 3 sources each, and the action each implies.",
      checks: [
        "Self-check against the rubric: each insight is non-obvious and changes a decision you can act on tomorrow.",
        "Does each insight have three sources of different kinds, not three interviews saying the same thing?",
        "Attach a short note on what changed in your plan because of the brief."
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: interview and survey clinic",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a 10-minute buyer interview, asking about the last purchase and following the story without pitching.",
      "Facilitator rewrites three leading survey questions live with the group.",
      "Pairs practise: one plays a target buyer from the other's segment while the other interviews for 10 minutes, then swap.",
      "Pairs swap draft surveys and mark every leading, vague or double question.",
      "Coach gives feedback on interview behaviour (talk time, past-behaviour questions, capturing exact words) and on survey wording."
    ]
  },
  reportBack: "Friday report-back: share one thing a real buyer said in an interview or survey that surprised you, the insight you drew from it, and what you will change because of it.",
  resources: [
    "HubSpot Academy marketing courses (verify current list)",
    "Google Trends",
    "Nasscom and IBEF free summaries"
  ]
});
