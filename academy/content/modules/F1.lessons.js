Academy.add("F1", "lessons", {
  lessons: [
    {
      title: "Segmentation: who, where and what they need",
      minutes: 10,
      summary: "How to split a market into buyer groups by who they are, where they are and what they need, so every later decision has a clear target.",
      blocks: [
        { type: "p", text: "A market is not one crowd. It is many smaller groups of buyers who have different problems, budgets and ways of deciding. **Segmentation** is the work of splitting that crowd into groups whose members behave alike, so you can design, price and sell for each group on purpose instead of by accident." },
        { type: "p", text: "In India the same product can face completely different buyers. A billing app sold to a Bengaluru startup, a Ludhiana hosiery wholesaler and a household in Nagpur is really three products with three sales motions. Treating them as one market is the most common reason launches feel slow and messages feel vague." },
        { type: "h", text: "Three lenses that work in practice" },
        { type: "table", head: ["Lens", "Question it answers", "Examples"], rows: [
          ["Who they are", "What kind of buyer is this?", "SMB owner, corporate buyer, household, government department"],
          ["Where they are", "Where do they live and buy?", "Metro, tier 2, tier 3, rural; north or south; online or offline"],
          ["What they need", "What problem are they trying to solve?", "Save time, cut cost, comply with GST, look professional, reduce risk"]
        ] },
        { type: "p", text: "The first two lenses are easy to see but rarely enough on their own. The third lens, need, is what makes a segment useful, because people with the same need respond to the same message even when they look different on paper." },
        { type: "h", text: "How to segment your own market" },
        { type: "steps", items: [
          "List every type of buyer who has bought or enquired in the last six months. Use your CRM, invoices, WhatsApp enquiries and sales team memory.",
          "Tag each buyer with who they are, where they are and the main need they mentioned.",
          "Group buyers with the same need and similar profile. Aim for four to six segments, not twenty.",
          "For each segment, estimate size (how many such buyers exist), ability to pay and how easy they are to reach.",
          "Give each segment a plain name your team will remember, such as \"tier 2 distributors who lose stock track\"."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune SaaS firm selling inventory software tags its last 60 enquiries. It finds four groups: metro D2C brands needing marketplace sync (18 enquiries), tier 2 FMCG distributors needing stock and credit tracking (22), retail chains needing multi-store reports (8) and single shops wanting a cheap billing tool (12). The distributor segment is largest, but the single-shop segment cannot pay enough to cover a sales visit. That insight only appears once enquiries are split." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Segmenting by demographics alone, such as age or city, without any need attached.",
          "Creating so many segments that no one can act on them.",
          "Using segments from a report instead of from your own buyers.",
          "Forgetting the non-buyer: people who enquired and walked away are a segment too."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull your last 30 to 60 enquiries or customers into a sheet. Add three columns: who, where and need. Group them and name no more than six segments. Bring the sheet to Tuesday's workshop." }
      ],
      takeaways: [
        "Segment by who, where and what they need; need is the lens that makes segments useful.",
        "Build segments from your own buyers and enquiries, not from generic reports.",
        "Four to six named segments are enough to act on.",
        "Size, ability to pay and ease of reach decide which segments matter."
      ]
    },
    {
      title: "Targeting: choose where you can win first",
      minutes: 9,
      summary: "How to pick the one or two segments where you can win first, using a simple scoring method instead of gut feel.",
      blocks: [
        { type: "p", text: "Once you have segments, the temptation is to chase all of them. **Targeting** is the discipline of choosing the one or two segments where you can win first, and saying no to the rest for now. It is not about reaching every possible buyer; it is about concentrating limited money, people and attention where they will produce proof fastest." },
        { type: "p", text: "Winning a narrow segment gives you references, case studies and word of mouth inside that group. In India, where trust spreads through references, a strong position in one segment often opens the next one for you. Spreading thin gives you a few customers everywhere and proof nowhere." },
        { type: "h", text: "A simple targeting score" },
        { type: "p", text: "Score each segment from 1 to 5 on five factors, then add the scores. The highest totals are your candidates." },
        { type: "table", head: ["Factor", "What a 5 looks like"], rows: [
          ["Pain", "The problem is urgent and costs them money every week"],
          ["Ability to pay", "They can afford your price without long approvals"],
          ["Reach", "You can reach them through channels you already have"],
          ["Fit", "Your product solves their need today, not after a rebuild"],
          ["Competition", "Rivals are weak or absent in this segment"]
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: the Pune inventory firm scores its four segments. Tier 2 FMCG distributors: pain 5, pay 4, reach 4 (a sales rep already covers Nashik and Aurangabad), fit 4, competition 3, total 20. Metro D2C brands: pain 4, pay 4, reach 3, fit 3, competition 2, total 16. Retail chains: 15. Single shops: 11. The team targets distributors first and keeps D2C as the second segment for later in the year." },
        { type: "h", text: "How to decide" },
        { type: "steps", items: [
          "Score each segment with at least one person from sales and one from product, so both views are heard.",
          "Check the top scorer against real evidence: at least three buyers from that segment who described the pain.",
          "Pick one primary segment and at most one secondary segment.",
          "Write down which segments you are not targeting, and why, so the team stops drifting back to them.",
          "Set a review date, usually after one quarter, to check whether the choice is working."
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Choosing the biggest segment even when you cannot reach it or beat the incumbent.",
          "Picking a segment because the founder likes it, with no buyer evidence.",
          "Never writing down the excluded segments, so every new lead reopens the debate."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Score your segments from lesson 1 on the five factors with one colleague from another role. Pick one primary segment, write two lines on why, and list what you are saying no to." }
      ],
      takeaways: [
        "Targeting means choosing one or two segments to win first, not reaching everyone.",
        "Score pain, ability to pay, reach, fit and competition.",
        "Back the top choice with real buyer evidence.",
        "Write down the segments you are excluding."
      ]
    },
    {
      title: "Personas: a one-page buyer profile",
      minutes: 10,
      summary: "How to write a one-page persona covering role, budget, daily problems, how they decide, who influences them and what they fear.",
      blocks: [
        { type: "p", text: "A segment tells you which group to serve. A **persona** turns that group into a single, believable person your whole team can picture. It is a one-page profile that answers six questions: what is their role, what budget do they control, what problems fill their day, how do they decide, who influences them, and what do they fear?" },
        { type: "p", text: "Personas matter because people design and sell better for a person than for a statistic. When a PM, a sales manager and a marketer all picture the same distributor owner in Indore, their feature choices, sales scripts and ad copy start to line up." },
        { type: "h", text: "The six parts of a persona" },
        { type: "table", head: ["Part", "What to write", "Example"], rows: [
          ["Role", "Title, business type, size", "Owner, FMCG distributor, 25 staff, Indore"],
          ["Budget", "What they can spend without asking anyone", "Up to ₹50,000 a year on software"],
          ["Daily problems", "What goes wrong on a normal day", "Stock mismatch, unpaid retailer credit, salesman reports on WhatsApp"],
          ["How they decide", "Steps, time taken, evidence they need", "Asks two other distributors, wants a free trial, decides in 2 to 3 weeks"],
          ["Influencers", "Who shapes the decision", "Son who handles accounts, the CA, the brand's area sales manager"],
          ["Fears", "What could go wrong for them", "Data loss, staff not using it, wasting money on another tool"]
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example persona: \"Rakesh, 48, runs a family FMCG distributorship in Indore with 25 staff and 300 retailers. He loses about ₹40,000 a month to stock mismatches and slow credit collection. He trusts what other distributors tell him more than any advertisement. His son, who studied commerce, will run the tool, so the son's opinion counts. Rakesh's biggest fear is paying for software that staff abandon in a month, as happened with his last purchase.\"" },
        { type: "h", text: "How to build one" },
        { type: "steps", items: [
          "Start from real interviews, at least five people from the target segment.",
          "Write each part in the buyer's own words where you can. Quote phrases you heard.",
          "Keep it to one page. If it runs longer, you are listing trivia.",
          "Mark anything you guessed with a question mark, and test it in the next interviews.",
          "Share it with sales, product and marketing and ask, \"Do you recognise this person?\""
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Inventing hobbies and favourite apps instead of decision facts.",
          "Writing a persona with no fears; fear is often what blocks the sale.",
          "Leaving out influencers, which in Indian SMBs and corporates can matter as much as the buyer."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft one persona for your primary segment using the six-part table. Mark every guess with a question mark and add one interview question to test each guess." }
      ],
      takeaways: [
        "A persona covers role, budget, daily problems, how they decide, influencers and fears.",
        "Build it from real interviews and the buyer's own words.",
        "Keep it to one page and mark guesses clearly.",
        "Fears and influencers often explain lost deals better than features do."
      ]
    },
    {
      title: "Jobs to be done: the outcome behind the purchase",
      minutes: 10,
      summary: "How to describe what buyers are really hiring your product to do, such as saving time, looking good or avoiding risk.",
      blocks: [
        { type: "p", text: "Buyers do not want a product; they want a job done. The **jobs to be done** (JTBD) idea says people \"hire\" a product to make progress in a specific situation. A shop owner does not want accounting software; he wants to file GST without a late-night panic and without paying a penalty." },
        { type: "p", text: "Thinking in jobs changes what you compete with and what you say. If the job is \"get paid by retailers faster\", your rival is not only other software but also the owner's nephew who calls retailers every evening. Your message also shifts from features to the progress the buyer wants." },
        { type: "h", text: "Three layers of a job" },
        { type: "list", items: [
          "**Functional:** the practical task, such as tracking stock or generating an invoice.",
          "**Emotional:** how the buyer wants to feel, such as in control or less anxious at month end.",
          "**Social:** how the buyer wants to be seen, such as professional in front of a big brand or modern in front of family."
        ] },
        { type: "p", text: "Most purchases include all three. Saving time is functional, looking good is social, and avoiding risk often carries strong emotion." },
        { type: "h", text: "Writing a job statement" },
        { type: "steps", items: [
          "Describe the situation: \"When I...\" (the trigger moment, in the buyer's words).",
          "Describe the motivation: \"I want to...\" (the progress they seek).",
          "Describe the outcome: \"So I can...\" (the result that matters to them).",
          "Check it has no product or feature in it. A job is solution-free.",
          "Test it in interviews: does the buyer nod, or correct you?"
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore firm sells a WhatsApp ordering tool to kirana suppliers. Its first job statement was \"use our catalogue bot\", which is a feature. After ten interviews it became: \"When retailers call me at 9 pm with orders, I want to capture them without mistakes, so I can deliver next morning and not lose them to the other supplier.\" The new statement pointed to the real rival (phone calls and a notebook) and the real outcome (keeping the retailer)." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Writing demographics (\"35 to 45 year old owners\") instead of a job.",
          "Putting your feature list into the job statement.",
          "Ignoring the emotional and social layers, which often decide between two similar products."
        ] },
        { type: "callout", tone: "india", title: "India note", text: "In family-run firms, the social job often involves the family: a son wants to show his father that a new system works, or an owner wants to look professional to a national brand's area manager. Ask about these people directly." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write one job statement in the \"When I, I want to, so I can\" form for your primary segment. Read it aloud to two buyers and note how they change it." }
      ],
      takeaways: [
        "Buyers hire products to make progress in a specific situation.",
        "Jobs have functional, emotional and social layers.",
        "A good job statement contains no product or feature.",
        "The job reveals your true competitors, including informal workarounds."
      ]
    },
    {
      title: "Interviewing without leading",
      minutes: 11,
      summary: "How to run buyer interviews that ask about past behaviour, not opinions about your idea, so the signal you collect is reliable.",
      blocks: [
        { type: "p", text: "Most customer interviews produce false comfort. People are polite; when you ask \"Would you buy this?\" they say yes to avoid disappointing you. Opinions about the future are cheap. **Past behaviour** is evidence: what someone actually did, spent and struggled with last time tells you what they are likely to do next." },
        { type: "p", text: "The rule is simple: ask about the last time, never about your idea. \"Tell me about the last time you dealt with this problem\" gives a far more reliable signal than \"Do you like the idea?\"" },
        { type: "h", text: "Leading versus behaviour questions" },
        { type: "table", head: ["Avoid (leading or opinion)", "Ask instead (past behaviour)"], rows: [
          ["Would you buy this?", "Tell me about the last time you bought something to fix this."],
          ["How much would you pay?", "What did you spend on this problem last year, in money or time?"],
          ["Do you like the idea?", "What have you tried so far? What happened?"],
          ["Is this a big problem?", "When did it last happen? What did it cost you?"],
          ["Would this feature help?", "Walk me through how you handle it today, step by step."]
        ] },
        { type: "h", text: "Running the interview" },
        { type: "steps", items: [
          "Book 30 minutes and say you are learning, not selling. Do not show a demo or brochure.",
          "Open with context: their role, business and a normal day.",
          "Ask about the last purchase of this kind: what triggered it, who decided, what almost stopped it.",
          "Follow each answer one level deeper: \"What happened next?\" \"Why did that matter?\"",
          "Ask about money and time already spent; real spending is the strongest signal.",
          "Close by asking who else you should speak to. A referral is itself a sign the problem is real.",
          "Write notes within the hour, separating facts, quotes and your interpretations."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Jaipur team asked 12 shop owners \"Would you use a billing app?\" and 10 said yes. Two months later, 1 had signed up. A second round asked \"Tell me about the last time GST filing went wrong.\" Only 4 of 12 could describe one, and 3 of those 4 had already paid a CA extra to fix it. Those 3 became the first paying customers. The behaviour question found the real buyers; the opinion question found polite people." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Pitching halfway through because the buyer sounded interested.",
          "Counting compliments as validation.",
          "Talking more than the buyer; aim for them to speak at least 70% of the time.",
          "Interviewing only friends or existing fans."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Rewrite your interview guide so every question asks about the past. Book three interviews for this week and record, with consent, what triggered their last purchase, who decided and what almost stopped it." }
      ],
      takeaways: [
        "Past behaviour is evidence; opinions about your idea are not.",
        "Ask about the last time, what it cost and what they tried.",
        "Never pitch during a discovery interview.",
        "Money or time already spent is the strongest signal of real pain."
      ]
    },
    {
      title: "Competitor mapping: the full set of alternatives",
      minutes: 9,
      summary: "How to map direct rivals, substitutes, doing nothing and the informal local option, so you know what buyers really compare you with.",
      blocks: [
        { type: "p", text: "Your real competition is whatever the buyer would do if you did not exist. That is far wider than the companies that look like you. A complete **competitor map** includes four groups: direct rivals, substitutes, doing nothing, and the informal local option." },
        { type: "table", head: ["Group", "What it means", "Example for a payroll tool"], rows: [
          ["Direct rivals", "Products like yours, sold to the same buyer", "Other payroll SaaS products"],
          ["Substitutes", "A different way to get the same job done", "The CA's office runs payroll; an Excel template"],
          ["Doing nothing", "Living with the problem", "Owner pays staff in cash and accepts errors"],
          ["Informal local option", "The neighbourhood or personal workaround", "A relative who does accounts on weekends"]
        ] },
        { type: "p", text: "In Indian SMB markets, doing nothing and the informal local option often win more deals than any named rival. If your map lists only direct rivals or whoever ranks first on Google, you will prepare for the wrong fight." },
        { type: "h", text: "Building a competitor sheet" },
        { type: "steps", items: [
          "From your interviews, list everything buyers mentioned using before or instead of you.",
          "Place each one in one of the four groups.",
          "Pick five that matter most and record their price, channel, main message and weakness.",
          "For doing nothing, estimate the cost of the problem; that is the price you must beat.",
          "Note why buyers chose each alternative, in their own words.",
          "Review the sheet each quarter; local options change quickly."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Lucknow coaching-institute software firm thought its rival was a national ed-tech platform. Interviews showed most institutes used a ₹500-a-month local developer's attendance app plus WhatsApp groups. The real comparison was ₹6,000 a year against the firm's ₹24,000. The team stopped attacking the national player and built a message around fee collection, the one thing the local app could not do, which justified the higher price." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Listing only funded or listed companies.",
          "Copying rivals' feature lists instead of understanding why buyers pick them.",
          "Underestimating inertia; \"we will manage for now\" is a competitor."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Start a competitor sheet with at least one entry in each of the four groups. For each, write price, channel, message and weakness. Add one sentence on what doing nothing costs your buyer." }
      ],
      takeaways: [
        "Map direct rivals, substitutes, doing nothing and the informal local option.",
        "Your real competitor is what the buyer would do without you.",
        "Record price, channel, message and weakness for each.",
        "The cost of doing nothing sets the bar your value must clear."
      ]
    },
    {
      title: "India buyer context",
      minutes: 11,
      summary: "How price sensitivity, reference-based trust, family-led SMB decisions, long corporate approval chains and regional differences shape selling in India.",
      blocks: [
        { type: "p", text: "Frameworks travel well; buyer behaviour does not. Five features of Indian buying shape almost every product, and ignoring any of them leads to stalled deals and confusing feedback." },
        { type: "h", text: "Five things to plan for" },
        { type: "list", items: [
          "**Price sensitivity:** buyers compare carefully and ask for discounts by habit. Value must be shown in rupees, time or risk, not claimed.",
          "**Trust built on references:** a recommendation from a peer, a trade association or a known brand often outweighs any advertisement.",
          "**Owner or family-led SMB decisions:** in a 40-person family-run distributor, the final decision usually sits with the owner or a family member, not the purchase executive.",
          "**Long approval chains in large firms:** corporates involve users, managers, IT, finance and procurement, with vendor registration and PO steps that can take months.",
          "**Language and regional differences:** the same product may need Hindi, Tamil, Marathi or Bengali material, and buying habits differ across states and between metros and tier 2 or 3 cities."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Hyderabad HR-tech firm spends six weeks with the HR executive of a 40-person family-run distributor in Vijayawada. The demo goes well, but the deal stalls. A single meeting with the owner and his daughter, arranged through a reference from another distributor, closes it in a week. The executive was a user and an influencer; the decision always sat with the family." },
        { type: "h", text: "Adapting your approach" },
        { type: "table", head: ["Buyer type", "What usually works"], rows: [
          ["Family-run SMB", "Meet the owner early, bring a peer reference, offer a trial, speak the local language"],
          ["Large corporate", "Map every approver, prepare security and finance documents, plan for procurement time"],
          ["Tier 2 and 3 buyers", "In-person or video demos, WhatsApp follow-up, local partners, clear rupee value"],
          ["Households", "Simple pricing, UPI payment, trusted brand or influencer proof, easy returns"]
        ] },
        { type: "h", text: "Steps to build context into your plan" },
        { type: "steps", items: [
          "For each target segment, write who signs, who influences and who can block.",
          "Collect two or three references you can name before you scale outreach.",
          "Decide which languages your sales and marketing material needs.",
          "Estimate a realistic decision time for each segment and plan your pipeline around it."
        ] },
        { type: "callout", tone: "warn", title: "Avoid stereotypes", text: "These patterns are common, not universal. A young founder in Surat may buy faster than a Mumbai corporate. Use the context as a set of questions to ask, then trust what your interviews tell you." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For your primary segment, write down who signs, who influences, who blocks, the likely decision time and the languages you need. Check each point in your next two interviews." }
      ],
      takeaways: [
        "Show value in rupees; Indian buyers are price-aware and compare carefully.",
        "References from peers often matter more than advertising.",
        "In family-run SMBs, the owner or family usually decides.",
        "Plan for long corporate approvals and regional language needs."
      ]
    }
  ]
});
