Academy.add("F1", "lessons", {
  lessons: [
    {
      title: "Segmentation: who, where and what they need",
      minutes: 15,
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
        { type: "h", text: "Going deeper: needs-based segments beat demographic ones" },
        { type: "p", text: "Demographic and geographic splits are cheap to collect, which is why most teams stop there. The trouble is that two buyers with the same profile can want completely different things. A 50-person garment exporter in Tiruppur and a 50-person garment exporter in Noida look identical on paper, but one may be fighting for working capital while the other is fighting buyer compliance audits. **A segment is only useful if its members would react to the same message, the same price and the same channel.** That test is behavioural, so it needs behavioural data: what triggered the enquiry, what they compared you with, and what they were willing to pay." },
        { type: "p", text: "A practical way to get there is to segment in two passes. First group by need, using the problem buyers describe in their own words. Then, inside each need group, use who and where to decide how to reach them. This keeps the segment defined by the problem while still telling sales which city, channel and language to use." },
        { type: "table", head: ["Test", "Question to ask of each segment", "Fail sign"], rows: [
          [
            "Identifiable",
            "Can a rep tell, from a phone call, whether a lead belongs here?",
            "\"We will know them when we see them\""
          ],
          [
            "Substantial",
            "Are there enough buyers to pay back the effort?",
            "Fewer than 200 reachable buyers for a B2B product"
          ],
          [
            "Accessible",
            "Do you have a channel that reaches them at a sensible cost?",
            "Only reachable through a partner you do not have"
          ],
          [
            "Distinct",
            "Would they respond differently from your other segments?",
            "Same message, price and channel as another segment"
          ],
          [
            "Actionable",
            "Can you change product, price or message for them?",
            "Nothing you would do differently"
          ]
        ] },
        { type: "case", label: "Case study", title: "One market, four segments, one surprise", situation: "A Pune SaaS firm selling inventory software had 60 enquiries in six months and a 9% close rate. The founder described the market as \"small and medium businesses that hold stock\".", action: "The team tagged each enquiry by who, where and need, then grouped by need first. They also added a column for the average deal size and the number of sales visits it took to close.", result: "Tier 2 FMCG distributors closed at 27% with an average deal of ₹72,000 a year and two visits. Single shops closed at 4% with ₹6,000 deals and three visits each, meaning every shop sale lost money once the rep's time was counted. Within a quarter the firm stopped field-selling to single shops, moved them to a self-serve plan, and lifted the overall close rate to 18%.", lesson: "Segmentation is not a slide. It becomes valuable the moment you attach close rate, deal size and cost to sell to each group, because that shows where the money is made and lost." },
        { type: "template", title: "Segment sheet: copy into your playbook", lines: [
          "Segment name (plain words): ______________________",
          "Main need, in the buyer's words: \"_______________________\"",
          "Who they are: ________   Where they are: ________",
          "Trigger that makes them look for a solution: ______________",
          "Approx. number of such buyers we can reach: ______",
          "Typical budget / ability to pay: ₹______ per year",
          "Best channel to reach them: ______________",
          "Evidence: __ enquiries, __ customers, __ interviews",
          "Close rate so far: __%   Average deal: ₹______"
        ], note: "Fill one sheet per segment. If you cannot fill the evidence line, the segment is still a hypothesis." },
        { type: "checklist", title: "Your segmentation is ready when", items: [
          "Every segment is named after a need, not only a city or company size.",
          "There are between four and six segments, each with a one-line description.",
          "Each segment has at least five real buyers or enquiries behind it.",
          "A new rep could place a fresh lead into the right segment within two minutes of talking to them.",
          "Non-buyers and lost deals are included, not only customers."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull your last 30 to 60 enquiries or customers into a sheet. Add three columns: who, where and need. Group them and name no more than six segments. Bring the sheet to Tuesday's workshop." }
      ],
      takeaways: [
        "Segment by who, where and what they need; need is the lens that makes segments useful.",
        "Build segments from your own buyers and enquiries, not from generic reports.",
        "Four to six named segments are enough to act on.",
        "Size, ability to pay and ease of reach decide which segments matter."
      ],
      selfCheck: [
        "Why is \"need\" a more useful lens than city or company size on its own?",
        "Your two biggest segments get the same message, price and channel. What does that suggest?",
        "Which of your current segments costs more to sell to than it pays back?"
      ]
    },
    {
      title: "Targeting: choose where you can win first",
      minutes: 14,
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
        { type: "h", text: "Going deeper: weight the factors and look for the beachhead" },
        { type: "p", text: "A plain total treats all five factors as equal, which is rarely true. Early in a product's life, **pain and reach matter most**, because you need customers quickly and cheaply. Later, ability to pay and competition matter more, because you are optimising for margin and defensibility. A simple fix is to give pain and reach double weight while you are still finding your first 20 customers." },
        { type: "p", text: "The ideal first target is a **beachhead**: a segment small enough to dominate, where customers talk to each other, so each win makes the next one easier. Trade clusters are natural beachheads in India: the pharma distributors of one district, the textile traders of Surat's ring road markets, or the auto component makers of Pune's Chakan belt. Buyers in a cluster share suppliers, associations and WhatsApp groups, so a reference travels fast." },
        { type: "table", head: ["Segment", "Pain ×2", "Pay", "Reach ×2", "Fit", "Competition", "Weighted total"], rows: [
          ["Tier 2 FMCG distributors", "10", "4", "8", "4", "3", "**29**"],
          ["Metro D2C brands", "8", "4", "6", "3", "2", "23"],
          ["Retail chains", "6", "5", "4", "3", "3", "21"],
          ["Single shops", "6", "1", "6", "4", "2", "19"]
        ] },
        { type: "case", label: "Case study", title: "Choosing the smaller segment on purpose", situation: "A Chennai firm building clinic management software had two candidate segments: all independent clinics in Tamil Nadu (large, scattered) and dental clinics in Chennai (about 1,500, tightly networked through the local dental association).", action: "The team chose Chennai dental clinics as its beachhead, even though the market was a fraction of the size. It sponsored two association events, built dental charting into the product, and offered the first 30 clinics a reference discount in exchange for a case study.", result: "It signed 30 clinics in five months, mostly through referrals, at a cost to acquire roughly a third of what cold outreach to general clinics had cost. The dental case studies then opened Coimbatore and Bengaluru dental clinics with almost no extra product work.", lesson: "A small segment you can win completely is worth more early on than a big segment where you are one of many. Look for groups that talk to each other." },
        { type: "template", title: "Targeting decision note", lines: [
          "Primary segment: ______________________",
          "Why we can win here (evidence, not opinion): ______________",
          "Secondary segment (later): ______________",
          "Segments we are NOT targeting this quarter, and why:",
          "  1. ________ because ________",
          "  2. ________ because ________",
          "What would make us change this decision: ______________",
          "Review date: ________   Agreed by: Product ____ Sales ____ Marketing ____"
        ] },
        { type: "checklist", title: "A good targeting choice", items: [
          "Is backed by at least three buyers who described the pain in their own words.",
          "Can be reached through a channel you already have or can build within a month.",
          "Is small enough that you could become the known name within a year.",
          "Has a written list of excluded segments that sales and marketing have agreed to."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Score your segments from lesson 1 on the five factors with one colleague from another role. Pick one primary segment, write two lines on why, and list what you are saying no to." }
      ],
      takeaways: [
        "Targeting means choosing one or two segments to win first, not reaching everyone.",
        "Score pain, ability to pay, reach, fit and competition.",
        "Back the top choice with real buyer evidence.",
        "Write down the segments you are excluding."
      ],
      selfCheck: [
        "Why might pain and reach deserve double weight in your first year?",
        "What makes a trade cluster a good beachhead?",
        "Name one segment you will say no to this quarter and the reason."
      ]
    },
    {
      title: "Personas: a one-page buyer profile",
      minutes: 15,
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
        { type: "h", text: "Going deeper: the buying committee, even in small firms" },
        { type: "p", text: "Most B2B purchases involve more than one person, even in a small business. Writing a single persona hides this. A better habit is to write one main persona for the person who feels the pain most, then add short notes on the others who shape the decision. The common roles are the **economic buyer** (signs and controls budget), the **user** (lives with the product daily), the **influencer** (whose opinion is trusted, such as a CA or a relative), and the **blocker** (who can delay or veto, such as IT or an accountant who fears losing work)." },
        { type: "table", head: ["Role", "In a family distributor", "In a mid-size manufacturer"], rows: [
          ["Economic buyer", "Owner or a son who runs operations", "Plant head or CFO"],
          ["User", "Billing clerk, warehouse supervisor", "Stores and dispatch team"],
          ["Influencer", "The firm's CA, a peer distributor", "IT manager, a consultant"],
          [
            "Blocker",
            "An accountant who maintains the old ledger",
            "Procurement, which insists on three quotes"
          ]
        ] },
        { type: "p", text: "Fears deserve special attention. Buyers rarely say them out loud, but they explain most stalled deals. Typical fears include losing data during a switch, staff refusing a new system, looking foolish in front of family if it fails, and being locked into a vendor who disappears. Ask \"What would worry you about changing how you do this?\" and listen for these themes." },
        { type: "case", label: "Case study", title: "The persona that found the real blocker", situation: "An Ahmedabad payroll startup kept losing deals at the last step with textile units of 80 to 200 workers. Its persona described a modern HR manager eager to digitise.", action: "The team re-interviewed six lost prospects and rewrote the persona. They added the influencer, the outside CA who had run payroll for years, and his fear: losing a steady monthly fee.", result: "Sales started meeting the CA early and offered a partner arrangement where the CA reviewed payroll inside the product and kept the client relationship. Win rate in that segment rose from about one in eight to one in three over two quarters.", lesson: "A persona that leaves out influencers and fears describes a buyer who does not exist. The person who can say no is as important as the person who says yes." },
        { type: "template", title: "One-page persona", lines: [
          "Name and photo (fictional, but believable): ________",
          "Role, business type, size, city: ________",
          "Budget they can approve alone: ₹______",
          "A normal day, in three lines: ________",
          "Top three problems (with quotes): ________",
          "How they decide (steps, time taken, who they ask): ________",
          "Influencers and blockers: ________",
          "Fears about changing: ________",
          "Where they get information (WhatsApp groups, associations, YouTube, CA): ________",
          "Words they use / words that put them off: ________",
          "Evidence: based on __ interviews. Guesses marked with (?)"
        ] },
        { type: "checklist", title: "Persona quality check", items: [
          "At least three quotes from real interviews appear on the page.",
          "Influencers, blockers and fears are filled in, not left blank.",
          "There are no hobbies or personal details that do not affect buying.",
          "A salesperson reading it could change how they open the next call."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft one persona for your primary segment using the six-part table. Mark every guess with a question mark and add one interview question to test each guess." }
      ],
      takeaways: [
        "A persona covers role, budget, daily problems, how they decide, influencers and fears.",
        "Build it from real interviews and the buyer's own words.",
        "Keep it to one page and mark guesses clearly.",
        "Fears and influencers often explain lost deals better than features do."
      ],
      selfCheck: [
        "Who are the economic buyer, user, influencer and blocker in your last lost deal?",
        "Which question would surface a buyer's fears without leading them?",
        "What on your current persona is a guess rather than evidence?"
      ]
    },
    {
      title: "Jobs to be done: the outcome behind the purchase",
      minutes: 15,
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
        { type: "h", text: "Going deeper: the forces that push and pull a switch" },
        { type: "p", text: "A job explains why someone wants progress. It does not explain why they actually switch. For that, JTBD practitioners use four **forces of progress**. Two push the buyer towards change: the **push** of the current problem and the **pull** of the new solution. Two hold them back: **anxiety** about the new thing and **habit** with the old one. A sale happens only when push and pull together outweigh anxiety and habit." },
        { type: "table", head: ["Force", "Question to ask", "Example from a kirana supplier"], rows: [
          [
            "Push of the situation",
            "What made the old way unbearable?",
            "Lost a big retailer after two wrong deliveries"
          ],
          [
            "Pull of the new solution",
            "What did you picture being better?",
            "Orders typed in once, no 9 pm calls"
          ],
          [
            "Anxiety about the new",
            "What worried you about switching?",
            "Salesmen may refuse to use an app"
          ],
          [
            "Habit of the present",
            "What was comfortable about the old way?",
            "The notebook always works, even without network"
          ]
        ] },
        { type: "p", text: "This changes what you build and say. Many teams spend all their energy increasing pull with more features, when the cheaper win is reducing anxiety (a free migration, a trial with their own data, a local reference) or breaking habit (an offline mode that works like the notebook)." },
        { type: "case", label: "Case study", title: "Selling against the notebook", situation: "The Coimbatore WhatsApp ordering tool had a strong job statement and good demos, yet only one in five trials converted. Suppliers liked it but kept going back to phone orders.", action: "The team ran switch interviews with ten converted and ten lapsed trial users, mapping the four forces. The biggest anxiety was salesmen refusing to change, and the biggest habit was the comfort of the notebook in low-network areas.", result: "They added a one-tap \"forward the order\" flow for salesmen, a simple offline mode, and a supplier-to-supplier reference call in the first week. Trial conversion rose to just under half within two months, with no new headline features.", lesson: "Most products lose to anxiety and habit, not to competitors. Map all four forces before adding features." },
        { type: "template", title: "Job statement and forces worksheet", lines: [
          "When I ______________________ (situation, trigger)",
          "I want to ____________________ (motivation, progress)",
          "So I can _____________________ (outcome that matters)",
          "",
          "Functional layer: ________  Emotional: ________  Social: ________",
          "Push (pain of today): ________",
          "Pull (picture of better): ________",
          "Anxiety (fear of the new): ________",
          "Habit (comfort of the old): ________",
          "One thing we can do to reduce anxiety: ________"
        ] },
        { type: "checklist", title: "A strong job statement", items: [
          "Contains no product name, feature or technology.",
          "Describes a specific trigger moment, not a general wish.",
          "Has an outcome a buyer would actually say out loud.",
          "Was corrected or confirmed by at least two real buyers."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write one job statement in the \"When I, I want to, so I can\" form for your primary segment. Read it aloud to two buyers and note how they change it." }
      ],
      takeaways: [
        "Buyers hire products to make progress in a specific situation.",
        "Jobs have functional, emotional and social layers.",
        "A good job statement contains no product or feature.",
        "The job reveals your true competitors, including informal workarounds."
      ],
      selfCheck: [
        "Rewrite a feature-based statement about your product as a solution-free job.",
        "Of the four forces, which one most often stops your buyers from switching?",
        "What is one low-cost way to reduce your buyer's anxiety about switching?"
      ]
    },
    {
      title: "Interviewing without leading",
      minutes: 16,
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
        { type: "h", text: "Going deeper: a sample interview, line by line" },
        { type: "p", text: "The hardest part of a good interview is not the opening question but the follow-up. Most interviewers accept the first, vague answer and move on. Strong interviewers stay on one story until they have the facts: when it happened, what it cost, who was involved, and what was tried. The dialogue below shows the difference." },
        { type: "dialogue", title: "Interview with a distributor owner (good follow-ups)", lines: [
          { who: "Interviewer", say: "Tell me about the last time stock records and actual stock did not match." },
          { who: "Owner", say: "Happens all the time. It is a headache." },
          { who: "Interviewer", say: "When was the most recent time you noticed it?" },
          { who: "Owner", say: "Last Diwali stock count. We were short on two fast-moving SKUs." },
          { who: "Interviewer", say: "What happened after you found out?" },
          { who: "Owner", say: "Three retailers' orders were short. One of them moved part of his business to another distributor." },
          { who: "Interviewer", say: "Roughly what was that worth to you?" },
          { who: "Owner", say: "Maybe ₹40,000 a month in billing from that retailer." },
          { who: "Interviewer", say: "What have you tried to stop it happening again?" },
          { who: "Owner", say: "My nephew does a weekly count now, and we bought a Tally add-on, but nobody updates it." }
        ], note: "Notice the interviewer never mentions a product. In six questions they found a specific incident, its cost in rupees, a workaround already paid for and the reason it failed. That is evidence. \"It is a headache\" alone is not." },
        { type: "table", head: ["Signal", "Weak", "Strong"], rows: [
          ["Problem", "\"It is annoying\"", "A dated incident with a cost"],
          [
            "Spending",
            "\"We might pay for a fix\"",
            "Already paid a CA, a developer or a nephew to fix it"
          ],
          ["Urgency", "\"Someday we should\"", "Actively looking, comparing options now"],
          [
            "Commitment",
            "Compliments about the idea",
            "Agrees to a follow-up, a pilot or an introduction"
          ]
        ] },
        { type: "callout", tone: "india", title: "India note", text: "Owners often answer in Hindi, Tamil or a mix of languages, and many prefer a phone call or a visit to a video call. Offer the language and format they are comfortable with, and keep a colleague who speaks it on the call. Accurate quotes in the buyer's own language are worth more than a neat English summary." },
        { type: "template", title: "Six-question interview guide", lines: [
          "1. Tell me about your role and a normal working day.",
          "2. Tell me about the last time [problem] happened. When was it?",
          "3. What happened next? What did it cost you in money or time?",
          "4. What have you tried to fix it? Why did you stop or keep using it?",
          "5. Who else was involved in deciding what to do?",
          "6. Who else should I speak to about this?",
          "Follow-ups to use anywhere: \"What happened next?\" \"Why did that matter?\" \"Can you give me an example?\""
        ] },
        { type: "checklist", title: "After each interview, check", items: [
          "You can name one dated incident and its approximate cost.",
          "You captured at least three exact quotes.",
          "You did not pitch, demo or describe your solution.",
          "You separated facts, quotes and your own interpretation in the notes.",
          "You asked for one referral."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Rewrite your interview guide so every question asks about the past. Book three interviews for this week and record, with consent, what triggered their last purchase, who decided and what almost stopped it." }
      ],
      takeaways: [
        "Past behaviour is evidence; opinions about your idea are not.",
        "Ask about the last time, what it cost and what they tried.",
        "Never pitch during a discovery interview.",
        "Money or time already spent is the strongest signal of real pain."
      ],
      selfCheck: [
        "Turn \"Would you use an app for this?\" into a past-behaviour question.",
        "What is the difference between a weak and a strong commitment signal?",
        "In your last interview, what share of the time did you talk?"
      ]
    },
    {
      title: "Competitor mapping: the full set of alternatives",
      minutes: 14,
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
        { type: "h", text: "Going deeper: compare on the buyer's criteria, not your features" },
        { type: "p", text: "A feature-by-feature grid almost always makes your product look best, because you chose the features. Buyers decide on a handful of criteria that matter to them: price, ease of starting, trust, support in their language, and whether it fixes the job. The more honest exercise is to list those criteria from interviews, then score every alternative, including doing nothing, the way a buyer would." },
        { type: "table", head: [
          "Buyer criterion",
          "Us",
          "National SaaS rival",
          "Local developer app",
          "Excel + WhatsApp"
        ], rows: [
          ["Monthly cost", "₹2,000", "₹3,500", "₹500", "Free"],
          ["Time to get started", "1 week", "3 to 4 weeks", "2 days", "Already in use"],
          ["Fee collection and reminders", "Yes", "Yes", "No", "Manual"],
          ["Support in Hindi, on call", "Yes", "Email only", "Yes, the developer", "None needed"],
          ["Trust (references nearby)", "Low today", "Medium", "High", "High"]
        ] },
        { type: "p", text: "Seen this way, the gaps are obvious. In this example the firm wins on fee collection and support but loses on trust and price against the local option. The plan writes itself: collect local references fast, and show the rupee value of fee collection so the price gap feels small." },
        { type: "case", label: "Case study", title: "When the real rival is \"we will manage\"", situation: "A Kochi team sold a maintenance-scheduling tool to small hotels and homestays. They had built a detailed comparison against two funded competitors but kept hearing \"not right now\".", action: "They reviewed 25 lost deals. Only three went to a competitor; the other 22 chose to carry on with a register and the manager's memory. The team calculated the cost of doing nothing: one AC breakdown in peak season meant refunds and bad reviews worth about ₹25,000 to ₹60,000.", result: "Sales replaced the competitor slide with a one-page \"cost of a peak-season breakdown\" sheet and a pre-season checklist offer. Lost-to-no-decision fell sharply the next season and became the team's main message.", lesson: "If most lost deals go to no decision, your competitor is inertia. Fight it with the cost of the problem, not with feature comparisons." },
        { type: "template", title: "Competitor sheet row", lines: [
          "Alternative: ________   Group: direct / substitute / do nothing / local",
          "Price (real, with source): ₹______",
          "How buyers find it (channel): ________",
          "Its main message, in its words: \"________\"",
          "Why buyers choose it, in their words: \"________\"",
          "Its weakness we can show, not just claim: ________",
          "Our one-line answer: ________",
          "Last checked on: ________"
        ] },
        { type: "checklist", title: "Competitor map check", items: [
          "At least one entry in each of the four groups.",
          "Prices are real and dated, not guessed.",
          "Comparison criteria came from buyer interviews.",
          "You know what share of lost deals went to no decision."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Start a competitor sheet with at least one entry in each of the four groups. For each, write price, channel, message and weakness. Add one sentence on what doing nothing costs your buyer." }
      ],
      takeaways: [
        "Map direct rivals, substitutes, doing nothing and the informal local option.",
        "Your real competitor is what the buyer would do without you.",
        "Record price, channel, message and weakness for each.",
        "The cost of doing nothing sets the bar your value must clear."
      ],
      selfCheck: [
        "Why does a feature grid usually flatter your own product?",
        "What share of your lost deals went to no decision, and what does that tell you?",
        "Estimate in rupees what doing nothing costs your typical buyer per month."
      ]
    },
    {
      title: "India buyer context",
      minutes: 15,
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
        { type: "h", text: "Going deeper: how a deal actually moves in two kinds of firm" },
        { type: "p", text: "The same product can take ten days to sell to a family business and six months to sell to a listed company. The difference is rarely about the product; it is about the steps the buyer's organisation requires. Mapping those steps early lets you forecast honestly and prepare documents before they are asked for." },
        { type: "table", head: ["Step", "Family-run SMB", "Large corporate"], rows: [
          [
            "First interest",
            "Owner or son sees a peer using it",
            "A manager raises a need, often after a budget cycle"
          ],
          [
            "Evaluation",
            "Demo, often at their premises, sometimes with family present",
            "Demos to users, then a shortlist of three vendors"
          ],
          [
            "Proof",
            "A reference call with a known peer, a short trial",
            "Pilot with success criteria, security review"
          ],
          [
            "Approval",
            "Owner decides, sometimes after asking a CA",
            "Finance, IT, legal and procurement sign-offs"
          ],
          [
            "Paperwork",
            "Invoice, UPI or cheque, GST details",
            "Vendor registration, NDA, MSA, PO, payment terms of 45 to 90 days"
          ],
          ["Typical time", "1 to 6 weeks", "3 to 9 months"]
        ] },
        { type: "case", label: "Case study", title: "Planning for procurement from day one", situation: "A Bengaluru analytics startup won an enthusiastic pilot with a large consumer goods company. The business team wanted to sign in March, but the deal slipped to September.", action: "On the next large deal, the team asked in the first meeting: \"Once you are happy, what steps does a new vendor go through here?\" They prepared vendor registration documents, a security questionnaire and a draft contract in parallel with the pilot.", result: "The second deal closed in about half the time, and cash flow forecasts became reliable because the team planned around the real steps instead of the champion's optimism.", lesson: "Enthusiasm is not approval. Ask about the process early and run the paperwork alongside the evaluation." },
        { type: "dialogue", title: "Asking about the decision process without sounding pushy", lines: [
          { who: "You", say: "If this works well in the trial, what usually happens next when you bring in a new supplier?" },
          { who: "Buyer", say: "I would discuss with my father, and our CA would check the costs." },
          { who: "You", say: "That makes sense. Would it help if I joined that conversation, or sent a one-page summary your CA could review?" },
          { who: "Buyer", say: "A summary would help. He likes to see the yearly cost and GST clearly." }
        ], note: "Asking \"what usually happens next\" is neutral and respectful. It surfaces the real decider and the influencer, and gives you a useful next step." },
        { type: "checklist", title: "Context mapped for each segment", items: [
          "Signer, influencers and blockers are named by role.",
          "Decision time is estimated from real deals, not hope.",
          "Required documents are listed and ready.",
          "Languages for sales and marketing material are decided.",
          "Two or three named references are available before outreach scales."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For your primary segment, write down who signs, who influences, who blocks, the likely decision time and the languages you need. Check each point in your next two interviews." }
      ],
      takeaways: [
        "Show value in rupees; Indian buyers are price-aware and compare carefully.",
        "References from peers often matter more than advertising.",
        "In family-run SMBs, the owner or family usually decides.",
        "Plan for long corporate approvals and regional language needs."
      ],
      selfCheck: [
        "What question reveals the real decision process early, without sounding pushy?",
        "Which documents would a large corporate buyer ask you for before a PO?",
        "Where might the patterns in this lesson not apply to your buyers?"
      ]
    }
  ]
});
