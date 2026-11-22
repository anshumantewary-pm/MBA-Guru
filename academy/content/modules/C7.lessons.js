Academy.add("C7", "lessons", {
  lessons: [
    {
      title: "Retention economics: why keeping customers pays",
      minutes: 10,
      summary: "Why keeping and growing existing customers usually costs far less than winning new ones, and how to put a number on it.",
      blocks: [
        { type: "p", text: "Most marketing budgets go to winning new customers. Yet a customer you already have knows you, trusts you and has already paid the cost of switching to you. **Keeping and growing customers usually costs far less than winning new ones**, and retained customers buy more, refer others and are cheaper to serve. Retention is not only a customer success job; it is a marketing lever." },
        { type: "h", text: "The numbers that matter" },
        { type: "table", head: ["Metric", "Formula", "What it tells you"], rows: [
          ["Retention rate", "Customers at end of period who were customers at start ÷ customers at start", "How many you keep"],
          ["Churn rate", "1 − retention rate", "How many you lose"],
          ["Customer lifetime value (LTV)", "Margin per period × periods retained", "What a customer is worth"],
          ["CAC", "Acquisition spend ÷ new customers", "What a new customer costs"],
          ["Expansion revenue", "Upsell + cross-sell from existing customers", "Growth without new acquisition"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bhopal accounting software firm earns ₹1,500 margin per customer per month. Customers stay on average 12 months, so LTV is ₹1,500 × 12 = ₹18,000. CAC is ₹9,000. If better onboarding lifts average life to 18 months, LTV rises to ₹27,000 with no extra acquisition spend. Put another way, each extra six months of retention adds ₹9,000 of margin per customer, as much as it costs to win a brand-new customer." },
        { type: "h", text: "Where to look first" },
        { type: "steps", items: [
          "Calculate your churn rate for the last two quarters by segment.",
          "Find when customers leave: in the first 30 days, at first renewal, or later.",
          "Call five customers who left and ask what changed.",
          "Estimate the LTV gain from cutting churn by a few points, and compare it with the cost of the fix.",
          "Pick one retention action for the next month and set a target."
        ]},
        { type: "callout", tone: "india", title: "India context", text: "For SMB customers in tier 2 and 3 cities, churn often comes from a lack of support in the customer's language or from a staff change at the customer, where the trained person leaves. A WhatsApp help line and a short re-training video for new staff can be cheap fixes." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Spending everything on acquisition while the bucket leaks.",
          "Measuring churn only for the whole base, hiding a bad segment.",
          "Treating retention as someone else's job.",
          "Discounting at renewal instead of fixing the reason customers leave."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Work out your churn rate and LTV for one segment. Call two customers who left in the last quarter and write down the reason in their words." }
      ],
      takeaways: [
        "Retaining and growing customers usually costs less than winning new ones.",
        "LTV = margin per period × periods retained.",
        "Find when and why customers leave, by segment.",
        "Small gains in retention can be worth more than large acquisition spends."
      ]
    },
    {
      title: "The customer journey map",
      minutes: 11,
      summary: "How to map stages, touchpoints, how the customer feels at each, and the moments that matter, from first contact to renewal.",
      blocks: [
        { type: "p", text: "A **customer journey map** shows the stages a customer goes through, the touchpoints at each stage, how the customer feels, and the moments that matter most. It is drawn from the customer's point of view, not from your org chart. Its purpose is to find where the experience breaks and pick one fix." },
        { type: "h", text: "The parts of a map" },
        { type: "list", items: [
          "**Stages**: for example aware, consider, buy, onboard, use, renew, refer.",
          "**Touchpoints**: every place the customer meets you: ad, website, rep call, invoice, WhatsApp support, delivery, renewal reminder.",
          "**Feelings**: what the customer thinks and feels at each step, from interviews, not guesses.",
          "**Moments that matter**: the few points that decide whether they stay, such as first delivery or first support call.",
          "**Pain points and fixes**: what goes wrong and who owns the fix."
        ]},
        { type: "h", text: "Build one in a workshop" },
        { type: "steps", items: [
          "Pick one segment; one map per segment.",
          "Interview five customers about their experience from first hearing of you to today.",
          "Draw the stages across a wall or sheet and list touchpoints under each.",
          "Add a feeling line, rising and falling, using customer quotes.",
          "Circle the two or three moments that matter, where feelings dip and churn risk rises.",
          "Choose one fix, name an owner and a date, and measure the result."
        ]},
        { type: "table", head: ["Stage", "Touchpoint", "Feeling", "Fix"], rows: [
          ["Buy", "Proposal and GST invoice", "Confident", "None needed"],
          ["Onboard", "Setup call, login", "Confused by setup", "Hindi setup video and day-2 WhatsApp check-in"],
          ["Use", "Monthly report", "Unsure of value", "Value summary each month"],
          ["Renew", "Renewal invoice", "Surprised by price", "Reminder 30 days ahead with usage summary"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kanpur leather-goods exporter's B2B buyers told interviewers they felt anxious between order and dispatch because they heard nothing for three weeks. That gap was the moment that mattered. The fix was a WhatsApp update at three points: order confirmed, production started, dispatched with tracking. Repeat orders from that segment became the measure of success." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Mapping from internal process instead of customer experience.",
          "Guessing feelings instead of asking customers.",
          "One map for every segment, so nothing is specific.",
          "A beautiful map with no fix put in place."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pick one segment and interview two customers about their journey. Sketch the stages and the feeling line, and circle the moment that matters most." }
      ],
      takeaways: [
        "A journey map shows stages, touchpoints and how the customer feels.",
        "Build it from customer interviews, one segment at a time.",
        "Find the moments that matter where feelings dip.",
        "A map is finished only when one fix is in place."
      ]
    },
    {
      title: "Onboarding communication: the first 30 days",
      minutes: 10,
      summary: "How to plan the first 30 days of communication so new customers reach first value fast.",
      blocks: [
        { type: "p", text: "The first 30 days decide whether a customer stays. A new customer who reaches **first value**, the first moment the product clearly does its job for them, is far more likely to renew. One who struggles with setup and hears nothing is likely to quietly stop using it. Onboarding communication is the planned sequence of messages and calls that gets them to first value fast." },
        { type: "h", text: "Define first value" },
        { type: "p", text: "First value is specific: the first invoice raised in billing software, the first order received through a dealer app, the first batch dispatched on time, the first report a manager reads. Agree with product and customer success what it is for each segment, and how you will know it happened." },
        { type: "h", text: "A 30-day sequence" },
        { type: "table", head: ["Day", "Channel", "Message"], rows: [
          ["0", "Email and WhatsApp", "Welcome, named contact, one first step"],
          ["1 to 2", "Call", "Setup help; book training"],
          ["3", "WhatsApp", "Short how-to video for the first value action"],
          ["7", "Call or WhatsApp", "Check first value reached; fix blockers"],
          ["14", "Email", "Next feature tip; customer story from a similar business"],
          ["30", "Call", "Review results; ask for feedback; plan next goal"]
        ]},
        { type: "steps", items: [
          "Define first value for the segment and the action that leads to it.",
          "Write each message: short, one action each, in the customer's language.",
          "Set triggers: if first value is not reached by day 7, a person calls.",
          "Name an owner for each step.",
          "Track time to first value and 90-day retention for customers who reached it versus those who did not."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Vadodara inventory app finds that customers who record 20 stock entries in the first week are much more likely to stay. It sets first value as '20 entries'. Day 0: welcome with a Gujarati setup video. Day 2: call to load the first 20 items. Day 7: an automatic check; if fewer than 20 entries, a support person calls. After three months, the team compares retention for customers who reached 20 entries in week one against those who did not." },
        { type: "callout", tone: "warn", title: "Messaging rules", text: "WhatsApp business messages need customer opt-in and must follow template and pricing rules that change over time. Verify current WhatsApp Business Platform rates and policies before building the sequence." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Sending a long welcome email with ten things to do.",
          "Going silent after the sale.",
          "Treating onboarding as training only, not as reaching a result.",
          "No trigger for customers who are stuck."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down first value for one segment. Check how many of last month's new customers reached it within 7 days, and draft the day-0 and day-7 messages." }
      ],
      takeaways: [
        "The first 30 days decide retention.",
        "Define first value and design messages to reach it fast.",
        "One action per message, in the customer's language.",
        "Trigger a human call when a customer is stuck."
      ]
    },
    {
      title: "Referral programs: ask at the right moment",
      minutes: 11,
      summary: "How to design a referral program with the right trigger, exact words, a thank-you gesture and a possible double-sided reward.",
      blocks: [
        { type: "p", text: "In India, word of mouth carries great weight: buyers trust a peer in the same trade or city more than any ad. A referral program turns that trust into a system. The four parts are: **ask right after a win, use exact words, add a thank-you gesture, and consider rewarding both sides.**" },
        { type: "h", text: "The four parts" },
        { type: "table", head: ["Part", "What good looks like"], rows: [
          ["Trigger", "Right after the customer gets a clear result: first value reached, a good review, a successful delivery, a positive NPS score"],
          ["Script", "Exact words that make it easy: who to refer, why, and how"],
          ["Thank-you gesture", "A personal message, a small gift, recognition; delivered promptly"],
          ["Reward", "Optional; a double-sided reward gives something to both the referrer and the new customer"]
        ]},
        { type: "h", text: "Design and launch" },
        { type: "steps", items: [
          "Choose the trigger moment from your journey map, such as day 30 when first results are reviewed.",
          "Write the ask in exact words, for example: 'Glad the billing is saving you time. Do you know one other shop owner in your market who struggles with GST invoices? I'd be happy to show them what you've seen.'",
          "Make it easy: a WhatsApp message they can forward, or a short form with the friend's name and number, shared only with the friend's consent.",
          "Decide the reward: for example one month free for the referrer and the new customer.",
          "Set up tracking: a referral code or a CRM field for 'referred by'.",
          "Launch to 10 customers, then measure asks, referrals, conversions and cost."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Rajkot billing software firm asks customers who rate it 9 or 10. Reward: one month free (worth ₹800) for both sides when the referred shop pays its first month. Of 10 customers asked, 6 refer one person each, and 3 of those become customers. Cost: 3 × ₹800 × 2 = ₹4,800, or ₹1,600 per new customer, compared with a CAC of around ₹5,000 from ads in this example." },
        { type: "callout", tone: "india", title: "Use the network", text: "Trade associations, market committees and WhatsApp groups of dealers or shop owners are natural referral networks. A customer who is a respected member of the local association can open many doors, but only if they are genuinely happy." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Asking at the first meeting, before any result.",
          "Asking when the customer has a complaint open.",
          "A vague ask such as 'do you know anyone?'",
          "Forgetting to thank the referrer, so they never refer again."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List ten customers who got a clear result recently. Write your exact referral ask, pick a thank-you gesture, and send the ask to three of them." }
      ],
      takeaways: [
        "Ask right after the customer gets a clear result.",
        "Use exact words that make referring easy.",
        "Always thank promptly; consider rewarding both sides.",
        "Track referrals so you can calculate their cost per customer."
      ]
    },
    {
      title: "Reviews and testimonials: ask, ease, permission, share",
      minutes: 9,
      summary: "How to collect reviews and testimonials by asking, making it easy, getting written permission and then sharing them.",
      blocks: [
        { type: "p", text: "Buyers trust other customers more than they trust you. A short video of a dealer in Indore explaining how your product helped, or a Google review from a clinic in Mysuru, does more selling than a brochure. The process has four steps: **ask, make it easy, get permission, then share.**" },
        { type: "h", text: "The four steps" },
        { type: "steps", items: [
          "**Ask** at a moment of success, using the same triggers as referrals: a good result, a high NPS score, a thank-you message from the customer.",
          "**Make it easy**: offer three guided questions, accept a voice note or WhatsApp text, or offer to write it from a call and send it for approval.",
          "**Get permission** in writing: what will be used (name, photo, company, logo, quote, video), where, and for how long.",
          "**Share** it where buyers decide: website, proposals, sales battlecards, Google Business Profile, social posts and dealer material."
        ]},
        { type: "h", text: "Three guided questions" },
        { type: "list", items: [
          "What was the problem before you started using us?",
          "What changed, ideally with a number?",
          "What would you say to someone in your position who is considering it?"
        ]},
        { type: "table", head: ["Format", "Effort for customer", "Best use"], rows: [
          ["Text quote", "Low", "Website, proposals"],
          ["Photo with quote", "Low", "Social posts, brochures"],
          ["Short video (30 to 90 seconds)", "Medium", "Sales follow-ups, events, YouTube"],
          ["Online review", "Low", "Search and local discovery"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Thrissur dental-supply firm calls a clinic owner who has just renewed. The rep asks the three questions on a call, writes a four-line quote, and sends it on WhatsApp with a simple permission note: 'May we use this quote with your name, clinic name and photo on our website and brochures for two years?' The owner replies 'Yes, approved', which is saved with the quote in the CRM." },
        { type: "callout", tone: "warn", title: "Permission and honesty", text: "Never publish a testimonial without permission, and never write fake reviews or offer payment in exchange for positive reviews. Keep a record of each consent. Platform review policies and data protection rules (DPDP) apply; verify current requirements." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Publishing a customer's words or logo without asking.",
          "Asking for a testimonial with no guidance, so you get 'good service'.",
          "Collecting testimonials and never using them in sales material.",
          "Losing the permission record."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pick three happy customers. Ask each the three guided questions, draft their testimonial, and send it for written approval with a clear permission note." }
      ],
      takeaways: [
        "Ask at a moment of success and guide the answer.",
        "Get written permission covering what, where and how long.",
        "Put testimonials where buyers decide, especially in sales material.",
        "Never fake, buy or publish without consent."
      ]
    },
    {
      title: "Community: user groups, WhatsApp communities and customer events",
      minutes: 9,
      summary: "How to build a customer community that helps users learn from each other and strengthens retention and advocacy.",
      blocks: [
        { type: "p", text: "A community is a place where customers meet each other, not just you. When users help each other solve problems, share tips and celebrate results, they stay longer and speak for you. Three common forms work well in India: **user groups, WhatsApp communities and customer events**." },
        { type: "p", text: "Community works because peers trust each other's experience. A pharmacy owner in Nashik will believe another pharmacy owner's tip about stock management faster than your support article. For you, a community lowers support load, surfaces product ideas, gives early warning of problems and creates a steady supply of testimonials and referrals. The cost is mainly time: someone must host it every week." },
        { type: "h", text: "Pick the right form" },
        { type: "table", head: ["Form", "Good for", "Effort"], rows: [
          ["User group (city or industry)", "Peer learning, deep relationships", "Monthly or quarterly meetings"],
          ["WhatsApp community", "Quick tips, announcements, peer help", "Daily moderation"],
          ["Customer event", "Recognition, roadmap sharing, referrals", "One or two per year"]
        ]},
        { type: "h", text: "Start a community" },
        { type: "steps", items: [
          "Define the purpose in one line, from the customer's point of view: for example 'help pharmacy owners in Pune run their stores better'.",
          "Invite 20 to 30 engaged customers first and ask two of them to help host.",
          "Write simple rules: no selling, respect, privacy of members' numbers, what topics belong.",
          "Plan a rhythm: a weekly tip, a monthly question, a quarterly meet.",
          "Spotlight members: share their results with permission.",
          "Track engagement, retention of members versus non-members, and referrals from members."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Ludhiana machine-tool maker starts a WhatsApp community for its 80 workshop-owner customers in Punjab, with announcement and discussion groups. Each week a service engineer shares one maintenance tip in Punjabi. Members start answering each other's questions. Once a quarter there is an evening meet in Ludhiana. The company tracks whether members renew service contracts at a higher rate than non-members." },
        { type: "callout", tone: "warn", title: "Privacy", text: "In WhatsApp groups members can see each other's numbers. Ask permission before adding anyone, use community and announcement features thoughtfully, and verify current WhatsApp policies and DPDP rules." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using the group as an advertising channel.",
          "Adding customers without asking.",
          "Starting with no moderator, so spam and complaints take over.",
          "Launching big, then going silent."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write a one-line purpose for a customer community, list 20 customers to invite, and ask two of them if they would help host it." }
      ],
      takeaways: [
        "Communities help customers learn from each other.",
        "Start small with engaged customers and co-hosts.",
        "No selling, clear rules and steady rhythm.",
        "Measure member retention and referrals."
      ]
    },
    {
      title: "NPS and CSAT: measure and follow up within a week",
      minutes: 10,
      summary: "How to measure NPS and CSAT and follow up with unhappy customers within a week.",
      blocks: [
        { type: "p", text: "You cannot improve what you do not measure. Two simple measures are widely used. **NPS (Net Promoter Score)** asks how likely the customer is to recommend you on a 0 to 10 scale. **CSAT (customer satisfaction)** asks how satisfied they were with a specific interaction, often on a 1 to 5 scale. The score matters less than what you do next: **follow up with unhappy customers within a week.**" },
        { type: "h", text: "How NPS works" },
        { type: "table", head: ["Score", "Group", "Action"], rows: [
          ["9 to 10", "Promoters", "Thank; ask for referral or testimonial"],
          ["7 to 8", "Passives", "Ask what would make it a 10"],
          ["0 to 6", "Detractors", "Call within a week; fix the issue"]
        ]},
        { type: "p", text: "NPS = percentage of promoters − percentage of detractors. It ranges from −100 to +100. Passives count in the total number of responses but not in either group, which is why a 7 or 8 is not as good as it sounds. CSAT is usually reported as the percentage of customers who chose 4 or 5 on a 5-point scale. Use NPS for the overall relationship and CSAT for single moments such as a delivery, an installation or a support ticket." },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Guwahati tea-packaging firm surveys 200 business customers. 90 score 9 or 10 (45% promoters), 70 score 7 or 8 (35% passives), and 40 score 0 to 6 (20% detractors). NPS = 45 − 20 = 25. The 40 detractors are split among the account managers and each is called within seven days. Most complaints are about late delivery during the monsoon, which goes to operations as a fix." },
        { type: "h", text: "Run the loop" },
        { type: "steps", items: [
          "Send NPS at a fixed point, such as 90 days after start and then every six months; send CSAT after key interactions such as support or delivery.",
          "Always add one open question: 'What is the main reason for your score?'",
          "Route detractors to a named owner automatically.",
          "Call each detractor within a week, listen, apologise where needed, and agree a fix.",
          "Tell the customer what you changed.",
          "Review themes monthly with product and operations."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Measuring the score and doing nothing with detractors.",
          "Treating 7 and 8 as promoters.",
          "Surveying so often that customers stop answering.",
          "Chasing the number instead of fixing the reasons."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Send a two-question NPS survey to 20 customers by WhatsApp or email. Call every detractor within seven days, and send promoters your referral ask." }
      ],
      takeaways: [
        "Promoters 9 to 10, passives 7 to 8, detractors 0 to 6.",
        "NPS = % promoters − % detractors.",
        "Call every detractor within a week and close the loop.",
        "Promoters are your referral and testimonial pool."
      ]
    }
  ]
});
