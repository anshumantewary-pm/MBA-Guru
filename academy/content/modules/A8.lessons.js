Academy.add("A8", "lessons", {
  lessons: [
    {
      title: "Feedback sources: where the truth about your product lives",
      minutes: 13,
      summary: "Collect feedback systematically from complaints, returns, reviews, churn interviews, support tickets and sales win-loss notes.",
      blocks: [
        { type: "p", text: "Every company already receives more feedback than it uses. It sits in support tickets, WhatsApp chats with distributors, app store reviews, return reasons and the notes reps write after a lost deal. The PM's job is to bring these streams together so decisions rest on patterns, not on the loudest customer or the latest escalation." },
        { type: "table", head: ["Source", "What it reveals", "Watch out for"], rows: [
          ["Complaints", "Where the product or service fails badly", "Over-represents angry customers"],
          ["Returns and refunds", "Gaps between promise and reality", "Return reason codes are often vague"],
          ["Reviews (app stores, Google, marketplaces)", "How buyers describe value and pain in public", "Extremes; check for fake reviews"],
          ["Churn interviews", "Why customers left", "Polite reasons hide real ones; probe"],
          ["Support tickets", "Daily friction and confusion", "Volume depends on how easy it is to contact you"],
          ["Sales win-loss notes", "Why buyers chose you or someone else", "Reps blame price; verify with buyers"]
        ] },
        { type: "steps", items: [
          "List every feedback source you have and who owns each one today.",
          "Agree a common tag set across sources, for example: onboarding, pricing, missing feature, bug, support, trust.",
          "Each week, pull new items from each source into one sheet or tool with source, date, segment and tag.",
          "Count by tag and segment, and pick out the exact customer quotes that best illustrate each pattern.",
          "Share a one-page feedback summary with sales, support and engineering every fortnight."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bhopal ed-tech PM pulls one month of feedback: 340 support tickets, 85 app reviews, 22 refund requests and 9 lost-deal notes. Tagged together, 38% of items relate to video buffering on mobile data in smaller towns. No single team saw the pattern, because support thought it was a network issue and sales never heard about it. A low-bandwidth mode moves to the top of the roadmap." },
        { type: "list", items: [
          "Mistake: reading only the source closest to you (PMs often read only app reviews).",
          "Mistake: counting requests without noting the segment and revenue behind them.",
          "Mistake: summarising in your own words and losing the customer's language."
        ] },
        { type: "callout", tone: "india", title: "India note", text: "Much feedback in India arrives by voice note or WhatsApp to a rep or distributor, often in regional languages. Ask reps and partners to forward these weekly, and tag them like any other source. Handle personal data carefully and verify current DPDP obligations for storing customer messages." },
        { type: "h", text: "Going deeper: the sprint review is a feedback source too" },
        { type: "p", text: "The fastest feedback loop you control is the **sprint review**: every one or two weeks, show the real, working product to stakeholders and a few users, and ask what should change. The Agile course is firm about the anti-pattern: a slide presentation is not a review. Demo the live product, keep it short, show planned work in the team's actual tool, and invite end users whenever you can." },
        { type: "list", items: [
          "**Watch the room.** Energy and questions at a review are data. Waning excitement from stakeholders is an early warning that the work is drifting from what matters to them.",
          "**Log what you hear** in the same feedback sheet as tickets and calls, tagged \"review\", so it is not lost.",
          "**Turn requests into stories** in the backlog the same day, with the problem behind each one, not just the ask."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull the last 30 days from at least four sources into one sheet, tag every item with the shared tag set, and write the top 3 patterns with one customer quote each." }
      ],
      takeaways: [
        "Feedback sources: complaints, returns, reviews, churn interviews, tickets, win-loss notes.",
        "Use one tag set across all sources.",
        "Count patterns by segment and keep customers' exact words.",
        "Share a short summary every fortnight."
      ],
      selfCheck: [
        "Which feedback source closest to you might be giving a skewed picture?",
        "What does falling stakeholder energy at sprint reviews tell you?",
        "Why should reviews show the live product rather than slides?"
      ]
    },
    {
      title: "Win-loss analysis with sales",
      minutes: 11,
      summary: "Interview won and lost buyers within 30 days and tag the reasons so product and sales learn from every decision.",
      blocks: [
        { type: "p", text: "A lost deal is the most expensive market research you will ever pay for, and a won deal tells you what to protect. Win-loss analysis means interviewing buyers about their decision, for wins and losses, soon after they decide, and tagging the reasons so patterns emerge." },
        { type: "h", text: "Why within 30 days, and why both" },
        { type: "p", text: "Within about 30 days, buyers still remember the alternatives they compared, who influenced them and what tipped the decision. A year later, memory is rewritten. Interviewing only lost deals tells you what went wrong but not what is working; interviewing only wins flatters you. You need both to see the difference." },
        { type: "steps", items: [
          "Agree with the sales manager which decided deals to cover each month, for example all deals above ₹2 lakh plus a sample of small ones.",
          "Have someone other than the rep who sold the deal run the interview, ideally the PM, so buyers speak freely.",
          "Ask for 20 minutes: 'We want to learn, not to re-sell.'",
          "Ask: What problem were you solving? Which options did you consider? What made you choose? What nearly changed your mind?",
          "Tag the main reason: price, fit, trust, timing or competitor, plus a short note.",
          "Review tags monthly with sales and agree one product fix and one sales fix."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune B2B software firm reviews 12 decisions in a quarter, 6 wins and 6 losses. Reps had logged 'price' for five of the six losses. In interviews, only two buyers named price; three said they did not trust that the product would integrate with their existing ERP, and one had simply delayed the purchase (timing). The PM builds an integration proof video and the sales team adds an integration check to discovery." },
        { type: "table", head: ["Tag", "Typical buyer words", "Usually fixed by"], rows: [
          ["Price", "'Too costly for what we get'", "Packaging, value proof, tiers"],
          ["Fit", "'It did not do X the way we work'", "Product or targeting"],
          ["Trust", "'Not sure you would be around or could deliver'", "References, case studies, pilots"],
          ["Timing", "'Not now, maybe next financial year'", "Nurture and follow-up"],
          ["Competitor", "'They already had a relationship with us'", "Positioning and battlecards"]
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Taking the rep's CRM reason as the truth, interviewing only losses, waiting months, and running the interview as a sales pitch to reopen the deal." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Ask your sales manager for 3 deals decided in the last 30 days, at least one win and one loss, and book a 20-minute interview with each buyer." }
      ],
      takeaways: [
        "Interview won and lost buyers within about 30 days of the decision.",
        "Tag reasons: price, fit, trust, timing, competitor.",
        "Someone other than the selling rep should interview.",
        "Turn patterns into one product fix and one sales fix each month."
      ],
      selfCheck: [
        "Why interview within 30 days of the decision?",
        "Why interview wins as well as losses?",
        "Which win-loss tag appears most in your last quarter?"
      ]
    },
    {
      title: "Experiment design: hypothesis to decision",
      minutes: 15,
      summary: "Write experiment briefs with a hypothesis, metric, audience, duration, pass mark and decision so tests lead to action.",
      blocks: [
        { type: "p", text: "Many teams 'try things' and then argue about whether they worked. A good experiment is decided before it starts: what you believe, how you will measure it, who sees it, how long it runs, what result counts as a pass and what you will do either way. Six fields turn opinion into evidence." },
        { type: "table", head: ["Field", "What to write", "Example"], rows: [
          ["Hypothesis", "Change, metric, audience, expected effect", "Adding a setup checklist will lift 7-day activation for new SMB accounts from 30% to 40%"],
          ["Metric", "One primary metric, defined precisely", "% of new accounts that create and send a first invoice within 7 days"],
          ["Audience", "Who is in the test and the control", "New SMB sign-ups, split 50:50"],
          ["Duration", "How long, or how many users", "4 weeks or 600 sign-ups, whichever is later"],
          ["Pass mark", "The result that counts as success", "Test group at least 37% and above control"],
          ["Decision", "What you will do on pass or fail", "Pass: roll out to all; fail: interview 10 drop-offs and redesign"]
        ] },
        { type: "h", text: "What makes a good hypothesis" },
        { type: "p", text: "'The new onboarding is better' cannot be tested. 'Users will love it' has no metric. A good hypothesis names the change, the audience, the metric, the current value and the expected value. If you cannot write it that way, you are not ready to test." },
        { type: "steps", items: [
          "Start from a pattern in your feedback or dashboard, not from a favourite idea.",
          "Write the hypothesis in the form: 'Doing X will move metric Y for audience Z from A to B.'",
          "Check you can measure the metric today; if not, fix tracking first.",
          "Make sure the audience is large enough to see a difference; small tests need large effects.",
          "Fix duration and pass mark before launch, and do not stop early because results look good.",
          "Record the result and the decision in one shared experiment log."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chandigarh invoicing app runs the setup checklist test above. After 4 weeks, 640 sign-ups are split evenly. Control activation is 31%; the checklist group reaches 38%, above the 37% pass mark. The decision, written before the test, is to roll out to all new accounts. The PM also notes that the effect was weaker for users on low-end Android phones, which becomes the next hypothesis." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Changing several things at once, picking the metric after seeing results, stopping as soon as numbers look good, and running tests nobody has agreed to act on." },
        { type: "h", text: "Going deeper: small batches learn faster" },
        { type: "p", text: "At the start of any project, your influence over the outcome is highest but your information is lowest. The Agile course calls this the **knowledge gap**. Big releases make the gap huge: you lock in many decisions before you learn anything. Small experiments shrink it, because each one is quick, cheap to undo and teaches you something before the next decision." },
        { type: "table", head: ["Batch size", "Cost of each run", "Cost of waiting", "Typical result"], rows: [
          [
            "One big release a quarter",
            "Low setup cost per feature",
            "High: months before any feedback",
            "Large corrections, long arguments"
          ],
          [
            "Small weekly experiments",
            "Higher setup cost unless automated",
            "Low: feedback within days",
            "Small, precise corrections that are easy to approve"
          ]
        ] },
        { type: "p", text: "The best batch size balances the cost of setting up each run against the cost of waiting for feedback. Automation (feature flags, automated tests, easy rollbacks) lowers the setup cost, which is why mature teams can run smaller and smaller experiments. Small corrections are also easier politically: leadership approves a two-week change far faster than a quarterly re-plan." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write one experiment brief with all six fields for a problem from your feedback summary, and get your engineering lead and one stakeholder to agree the pass mark and decision before it starts." }
      ],
      takeaways: [
        "Six fields: hypothesis, metric, audience, duration, pass mark, decision.",
        "A good hypothesis names change, audience, metric, current and expected values.",
        "Fix the pass mark and duration before starting.",
        "Write down the decision, pass or fail."
      ],
      selfCheck: [
        "What is the knowledge gap, and how do small batches shrink it?",
        "What lowers the setup cost of running experiments?",
        "Write one hypothesis with a metric, a target and a time limit."
      ]
    },
    {
      title: "The product health dashboard",
      minutes: 14,
      summary: "Build a one-page dashboard of North Star, activation, retention, NPS or CSAT, feature adoption and revenue with weekly trends.",
      blocks: [
        { type: "p", text: "A product health dashboard is the PM's equivalent of a patient's vital signs. It shows, on one page, whether the product is creating value and whether that value is growing. It should take less than five minutes to read and should make the next question obvious." },
        { type: "table", head: ["Metric", "Question", "Example definition"], rows: [
          ["North Star", "Are customers getting the core value?", "Invoices sent per week across all accounts"],
          ["Activation", "Do new customers reach first value?", "% of new accounts sending a first invoice within 7 days"],
          ["Retention", "Do they keep coming back?", "% of accounts active in week 4 and week 12 after sign-up; monthly logo churn"],
          ["NPS or CSAT", "How do they feel?", "NPS: 'How likely are you to recommend us?' 0 to 10; CSAT after support"],
          ["Feature adoption", "Are key features used?", "% of active accounts using the feature in 30 days"],
          ["Revenue", "Is value turning into money?", "MRR, expansion and contraction, average revenue per account"]
        ] },
        { type: "h", text: "NPS in one paragraph" },
        { type: "p", text: "Net Promoter Score asks how likely the customer is to recommend you on a 0 to 10 scale. Scores of 9 and 10 are promoters, 7 and 8 passives, 0 to 6 detractors. NPS is the percentage of promoters minus the percentage of detractors. Always add a follow-up 'Why?' question; the reasons matter more than the score." },
        { type: "steps", items: [
          "Choose your North Star: the one metric that best captures customer value delivered.",
          "Define each metric precisely, including the time window and who counts as active.",
          "Build the sheet with metrics as rows and the last 12 weeks as columns.",
          "Add a target and a simple red, amber, green status for each metric.",
          "Update it weekly on the same day, ideally from automatic exports.",
          "Review it in a 15-minute weekly meeting with engineering, sales and support leads."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Vizag fleet-tracking PM's dashboard shows the North Star (vehicles tracked daily) rising 4% a week, but week-12 retention falling from 78% to 70% over the quarter and NPS dropping. The 'Why?' answers point to inaccurate fuel reports. Without the 12-week trend, the rising North Star would have hidden a growing retention problem." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Twenty metrics instead of six, vanity metrics such as total downloads, no trend so nobody sees direction, and definitions that change every month." },
        { type: "h", text: "Going deeper: control through actuals, and turn data into decisions" },
        { type: "p", text: "A dashboard is only useful if it leads to decisions. The Agile course argues for **transparency of actuals, not estimates**: show what customers actually did and what the team actually finished, not forecasts or percent-complete guesses. It also recommends turning each metric into a simple yes-or-no trigger, so the weekly review ends with actions rather than discussion." },
        { type: "table", head: ["Metric", "Trigger", "Decision"], rows: [
          [
            "Activation rate",
            "Below 40% for two weeks",
            "Run an onboarding experiment next sprint"
          ],
          [
            "Month-2 retention",
            "Falls 5 points versus the last cohort",
            "Interview 5 churned accounts within 10 days"
          ],
          ["P1 support tickets", "More than 3 in a week", "Fix before any new feature work"],
          ["Team happiness (1 to 5)", "Below 3 for two sprints", "Spend the retro on the cause"]
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Create a Google Sheet with 5 metrics from the table, define each in one line, and fill in as many of the last 12 weeks as you can from real data." }
      ],
      takeaways: [
        "Dashboard: North Star, activation, retention, NPS or CSAT, feature adoption, revenue.",
        "NPS asks how likely the customer is to recommend you.",
        "Show a 12-week trend, a target and a status.",
        "Review weekly with engineering, sales and support."
      ],
      selfCheck: [
        "Why show actuals rather than estimates on a dashboard?",
        "Write a yes-or-no trigger for your North Star metric.",
        "Which metric on your dashboard has never led to a decision?"
      ]
    },
    {
      title: "Life-cycle calls: invest, maintain or sunset",
      minutes: 10,
      summary: "Decide whether to invest in, maintain or sunset each feature or product using usage, cost and revenue evidence.",
      blocks: [
        { type: "p", text: "Products accumulate features the way homes accumulate clutter. Each one costs something to maintain, test, support and explain, even if few customers use it. A regular life-cycle call asks of each feature or product: should we **invest** in it, **maintain** it, or **sunset** it?" },
        { type: "table", head: ["Call", "Typical signals", "What you do"], rows: [
          ["Invest", "High or rising usage, tied to revenue or retention, strategic segment", "Add engineering time, improve, promote"],
          ["Maintain", "Steady usage, moderate value, low cost", "Fix bugs, keep working, no new features"],
          ["Sunset", "Low usage, high maintenance cost, no link to revenue", "Announce, migrate users, remove"]
        ] },
        { type: "steps", items: [
          "List features or product lines and, for each, gather usage (% of active accounts), maintenance cost (engineering and support time) and link to revenue or retention.",
          "Mark each as invest, maintain or sunset with one sentence of reasoning.",
          "For sunset candidates, identify which customers use it and how much revenue they represent.",
          "Talk to the heaviest users first: understand their need and offer an alternative.",
          "Announce with a clear date, give enough notice, and provide migration help.",
          "Remove the feature and redirect the saved effort to an invest item."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Mysuru HR software firm reviews a fax-to-email feature built years ago. It is used by 2% of customers, takes roughly 3 engineering days a month to keep working, and none of its users cite it as a reason to stay. It is a sunset candidate. The PM calls the 14 accounts using it, offers a scan-to-WhatsApp alternative, announces a 90-day sunset and moves the saved time to the attendance app, an invest item with 60% adoption." },
        { type: "list", items: [
          "A feature used by few customers is not automatically a sunset; check whether those few are your largest accounts.",
          "Sunsetting badly loses trust; sunsetting well, with notice and help, rarely does.",
          "Revisit maintain items each quarter; they drift into sunset or invest."
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Never sunsetting anything, cutting a feature that a key account depends on without asking, and announcing a sunset with a week's notice." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List your ten oldest features with usage, maintenance effort and revenue link, and mark each invest, maintain or sunset. Share the sunset candidates with your sales manager." }
      ],
      takeaways: [
        "Every feature is an invest, maintain or sunset call.",
        "Low usage, high cost and no revenue link signal sunset.",
        "Check who uses a feature before cutting it.",
        "Sunset with notice, migration help and a clear date."
      ],
      selfCheck: [
        "Why is low usage alone not enough reason to sunset a feature?",
        "What does each old feature cost you to maintain each month?",
        "How much notice will you give customers before a sunset?"
      ]
    },
    {
      title: "The quarterly 4P review: find the weakest P",
      minutes: 10,
      summary: "Each quarter, review product, price, place and promotion, find the weakest P now and commit to one big fix.",
      blocks: [
        { type: "p", text: "Product, price, place and promotion work as a system. A strong product with weak distribution stalls; great promotion of an over-priced product brings traffic that does not convert. The quarterly 4P review steps back from weekly metrics to ask one question: **which P is weakest now, and what is the one big fix for next quarter?**" },
        { type: "table", head: ["P", "Evidence to review", "Weak if, for example"], rows: [
          ["Product", "Activation, retention, NPS, feedback tags, win-loss 'fit' reasons", "Retention falling, many fit losses"],
          ["Price", "Win-loss 'price' reasons, average discount, LTV to CAC, payback", "Discounts rising, LTV to CAC below 3"],
          ["Place", "Channel conversion, partner performance, reach in target regions", "Good demand but buyers cannot find or buy you"],
          ["Promotion", "Pipeline from marketing, cost per lead, brand awareness", "Too few qualified leads for sales capacity"]
        ] },
        { type: "steps", items: [
          "Gather the quarter's dashboard, win-loss tags, feedback summary and unit economics.",
          "Score each P from 1 (weak) to 5 (strong) with one line of evidence.",
          "Invite sales and marketing leads to score independently, then compare.",
          "Agree the weakest P, the one where improvement would move revenue most.",
          "Choose one big fix with an owner, a metric and a target for next quarter.",
          "Write it on one page and review progress at each monthly check-in."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Raipur agri-inputs app scores Product 4 (good retention), Price 3, Promotion 4 (plenty of leads) and Place 2: farmers in two target districts can only pay on delivery, and the app has no dealer pick-up points. The one big fix is to sign 30 dealer pick-up partners with cash and UPI collection, owned by the channel lead, with a target of 25% of orders through dealers by quarter end." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Picking five fixes and finishing none, always choosing 'product' because PMs control it, and scoring without evidence." },
        { type: "p", text: "The review ties this track together: segmentation and positioning shape product, A5 shapes price, A6 shapes place and launch, and the feedback loops in this module tell you which one to fix next." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Score your product on the 4Ps with one line of evidence each, ask one sales manager to do the same, and write the one big fix you would propose for next quarter." }
      ],
      takeaways: [
        "The 4Ps work as a system; the weakest one limits growth.",
        "Score each P with evidence and compare with sales and marketing.",
        "Pick one big fix with an owner, metric and target.",
        "Review it every quarter."
      ],
      selfCheck: [
        "Which P is weakest for your product, and what is the evidence?",
        "Why do PMs tend to pick \"product\" as the fix?",
        "What one fix will you finish this quarter?"
      ]
    },
    {
      title: "Continuous improvement: retros, PDCA and changing at the right time",
      minutes: 14,
      summary: "How product teams improve their own way of working: the PDCA loop, a retro format that produces actions, Shu-Ha-Ri maturity, and limiting changes to sprint boundaries.",
      blocks: [
        { type: "p", text: "Feedback loops improve the product. A second loop improves the team that builds it. Agile's approach to control comes from W. Edwards Deming's **Plan, Do, Check, Act (PDCA)** cycle: plan a small change, try it, check what happened, and adopt or drop it. Because the loop runs every sprint, a team does not need to get its process right on day one. Most teams become noticeably better within a few sprints if they run the loop honestly." },
        { type: "h", text: "A retro that produces actions" },
        { type: "p", text: "The Agile course calls reviews and retros the least performed but most needed events. Open discussion is a weak format: the loudest voices dominate, quieter people hold back, and nothing gets written down. A short, structured game works better, especially in teams where people are not used to speaking openly to seniors." },
        { type: "steps", items: [
          "**Round 1, what went well and what went badly (10 minutes):** everyone writes sticky notes silently, one idea per note.",
          "Everyone posts their notes; the team groups similar notes and gives each group a label.",
          "The facilitator leads a short discussion of the biggest groups.",
          "**Round 2, what we can do (10 minutes):** silently write concrete actions, then post and group them.",
          "Turn the top one to three actions into backlog stories with an owner, so they compete for time like any other work.",
          "Check last retro's actions first next time. If they were not done, ask why before adding new ones.",
          "Do something social together afterwards, even just chai. Treat people like people."
        ] },
        { type: "dialogue", title: "Turning a complaint into a backlog story", lines: [
          { who: "Tester", say: "Every sprint, five stories reach testing on the last two days." },
          { who: "Scrum master", say: "What could we try next sprint?" },
          { who: "Developer", say: "A WIP limit of two in testing, so we stop starting new stories when it's full." },
          { who: "PM", say: "Let's write it as a story: as a team, we want no more than two stories waiting in testing, so that bugs are found early. We'll check at the next retro whether the last-day pile-up has gone." }
        ], note: "The action is specific, has a measure, and goes on the board. Vague resolutions such as \"communicate better\" never change anything." },
        { type: "h", text: "Shu, Ha, Ri: how process maturity grows" },
        { type: "table", head: ["Stage", "Meaning", "What it looks like"], rows: [
          [
            "Shu (obey)",
            "Follow the practices exactly as taught",
            "A new team runs every Scrum event by the book for several sprints"
          ],
          [
            "Ha (adapt)",
            "Make small, deliberate changes",
            "The team shortens reviews, adds a WIP limit, tests a new stand-up format"
          ],
          [
            "Ri (create)",
            "Design new practices from internalised principles",
            "The team designs its own workflow and can explain why each part exists"
          ]
        ] },
        { type: "p", text: "The common mistake is to jump straight to Ri: a new team skips retros or invents its own rules before it understands why the original practices exist. Earn the right to adapt by following the basics first." },
        { type: "h", text: "Change at the boundaries" },
        { type: "p", text: "Change distracts, but refusing to change is worse. Agile teams balance the two by limiting changes to **boundaries**. Sprint content and process changes happen at sprint planning and retros. Roadmap and team-structure changes happen at release boundaries. Mid-sprint, the team is protected from new priorities except genuine emergencies such as a production outage or a key customer at risk, which go through a fast lane that everyone swarms on." },
        { type: "case", label: "Case study", title: "Retros that stopped being a ritual", situation: "An illustrative Chennai SaaS team held retros every sprint, but the same complaints came back each time: unclear stories, late testing, interruptions from sales.", action: "The team switched to the silent two-round format, limited actions to two per retro, put them on the board as stories with owners, and reviewed them first at the next retro. The PM agreed with the sales head that new requests would wait for sprint planning unless a customer was at risk.", result: "Within four sprints, mid-sprint interruptions fell from about six to one per sprint, the last-day testing pile-up disappeared, and the team's happiness score rose from 2.8 to 3.9.", lesson: "A retro only works if its actions are few, owned, tracked like real work and checked next time." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Run, or ask your scrum master to run, the next retro with the silent two-round format. Put no more than two actions on the board as stories with owners, and record the team happiness score so you can compare next sprint." }
      ],
      takeaways: [
        "PDCA every sprint means the process improves continuously; it need not be perfect on day one.",
        "Silent, structured retros beat open discussion and give quieter people a voice.",
        "Retro actions become backlog stories with owners, checked at the next retro.",
        "Follow the basics (Shu) before adapting (Ha) or inventing (Ri).",
        "Change at sprint and release boundaries; protect the sprint except for true emergencies."
      ],
      selfCheck: [
        "Why does a silent writing round surface more issues than open discussion?",
        "What happens to retro actions that are not put on the board?",
        "Which stage of Shu-Ha-Ri is your team at, and what is the evidence?"
      ]
    }
  ]
});
