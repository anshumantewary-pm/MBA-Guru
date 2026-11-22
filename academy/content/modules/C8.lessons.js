Academy.add("C8", "lessons", {
  lessons: [
    {
      title: "Metrics by funnel stage",
      minutes: 10,
      summary: "How to track reach, leads, MQLs, SQLs, opportunities and customers, and the conversion rates between them.",
      blocks: [
        { type: "p", text: "Leadership does not need fifty marketing metrics. It needs to see how buyers move through the funnel and where they drop out. Track one number at each stage, **reach, leads, MQLs, SQLs, opportunities and customers**, plus the conversion rate between each pair. That tells you where to spend your next rupee and your next hour." },
        { type: "h", text: "The funnel stages" },
        { type: "table", head: ["Stage", "Definition", "Typical source of data"], rows: [
          ["Reach", "People who saw or heard your message", "Ad platforms, website analytics, event footfall"],
          ["Leads", "People who gave contact details", "Forms, WhatsApp enquiries, event lists"],
          ["MQLs", "Leads that meet the agreed fit and intent criteria", "CRM or scoring sheet"],
          ["SQLs", "MQLs sales has confirmed as having a real need", "CRM"],
          ["Opportunities", "Deals with a value and a next step", "CRM pipeline"],
          ["Customers", "Deals won and paid", "CRM and finance"]
        ]},
        { type: "h", text: "Set up the funnel view" },
        { type: "steps", items: [
          "Use the MQL and SQL definitions agreed with sales in your SLA.",
          "Pull counts for each stage for the last three months, by channel where possible.",
          "Calculate conversion between each stage: next stage ÷ this stage.",
          "Compare with the previous period and with your plan.",
          "Find the weakest conversion step and ask why. That is your first improvement target."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Mumbai B2B payroll firm's monthly funnel: reach 2,00,000; leads 1,200 (0.6%); MQLs 300 (25%); SQLs 120 (40%); opportunities 60 (50%); customers 15 (25%). Lead-to-MQL is the weakest step, because many leads come from a broad ad aimed at individual job seekers. Tightening targeting is likely to lift MQLs more than adding budget." },
        { type: "callout", tone: "india", title: "Messy data is normal", text: "Many Indian SMBs track enquiries in WhatsApp chats and spreadsheets. Start by logging every lead in one sheet with date, source and stage. A simple, consistent sheet is better than a CRM no one updates." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Reporting reach and likes but not customers.",
          "Changing stage definitions month to month, so trends mean nothing.",
          "Counting leads without a source, so channels cannot be compared.",
          "Looking at totals only, never at conversion between stages."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Fill in the six funnel numbers for last month and calculate the five conversion rates. Circle the weakest step and write one reason you think it is weak." }
      ],
      takeaways: [
        "Track one number per stage and the conversion between stages.",
        "Use the stage definitions agreed with sales.",
        "The weakest conversion step is the first place to improve.",
        "Consistent simple data beats complex data no one trusts."
      ]
    },
    {
      title: "CAC by channel",
      minutes: 9,
      summary: "How to calculate customer acquisition cost for each channel and use it to move budget.",
      blocks: [
        { type: "p", text: "Customer acquisition cost, or CAC, tells you what it costs to win one customer. Calculated by channel, it shows which channels are worth more money. **CAC by channel = spend on that channel ÷ customers won from it.** A channel with cheap leads may have an expensive CAC if those leads rarely buy." },
        { type: "p", text: "Blended CAC, total marketing and sales spend divided by all new customers, is useful for the board, but it hides the differences that drive budget decisions. One excellent channel can mask a poor one. Channel CAC also needs a time lag: in B2B, spend in July may produce customers in September, so compare spend and customers over a window that matches your sales cycle." },
        { type: "h", text: "Calculate it" },
        { type: "steps", items: [
          "List channels: search ads, social ads, events, partners, referrals, outbound, content.",
          "Add up all spend per channel for the period: media, agency fees, tools, event costs and, where you can, people time.",
          "Count customers won whose source was that channel, using the CRM source field.",
          "Divide spend by customers for each channel.",
          "Compare CAC with customer value. A healthy channel has LTV well above CAC; many teams aim for at least three times.",
          "Shift budget gradually from high-CAC channels to low-CAC channels, then re-check."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a channel cost ₹2 lakh and won 8 customers. CAC = ₹2,00,000 ÷ 8 = ₹25,000. The tempting wrong answer is ₹16,000, which comes from multiplying 2 by 8 instead of dividing. If average LTV is ₹1,00,000, LTV to CAC is 4 to 1, a healthy channel." },
        { type: "table", head: ["Channel", "Spend", "Customers", "CAC"], rows: [
          ["Search ads", "₹2,00,000", "8", "₹25,000"],
          ["Trade events", "₹3,00,000", "6", "₹50,000"],
          ["Partner webinars", "₹60,000", "4", "₹15,000"],
          ["Referrals", "₹30,000", "5", "₹6,000"]
        ]},
        { type: "callout", tone: "warn", title: "Read with care", text: "A small channel with few customers can look cheap by luck. Check at least a quarter of data, note the sales cycle, and remember that some channels feed others, so do not cut a channel only on CAC without looking at attribution." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using cost per lead instead of cost per customer.",
          "Leaving agency fees, tools or event staff costs out of spend.",
          "No source recorded on customers, so CAC cannot be calculated.",
          "Comparing CAC without comparing customer value by channel."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build the table above for last quarter with your real spend and customers by channel. Mark the cheapest and the most expensive channel and note one budget move you would test." }
      ],
      takeaways: [
        "CAC = channel spend ÷ customers won from that channel.",
        "Include all costs, not just media.",
        "Compare CAC with LTV, not just with other channels.",
        "Move budget gradually and re-check."
      ]
    },
    {
      title: "Marketing ROI",
      minutes: 9,
      summary: "How to calculate marketing ROI from attributed revenue and marketing cost, and how to present it honestly.",
      blocks: [
        { type: "p", text: "Marketing ROI answers the question every finance head asks: for every rupee spent, what came back? **Marketing ROI = (attributed revenue − marketing cost) ÷ marketing cost.** The result is a percentage. It is only as good as the attribution behind it, so state your method each time you report it." },
        { type: "p", text: "ROI is the number most often challenged in a leadership meeting, so agree the rules with finance before you report it. Settle three questions in advance: which costs count (is the marketing team's salary included?), which revenue counts (only marketing-sourced, or a share of influenced?), and over what window (revenue closed within 90 or 180 days of the activity). Once agreed, apply the same rules every month so trends are comparable." },
        { type: "h", text: "Calculate it" },
        { type: "steps", items: [
          "Decide the period and the scope: one campaign, one channel or all marketing.",
          "Total the marketing cost: media, events, agencies, tools, content production and, if agreed, team cost.",
          "Total the revenue attributed to marketing using your chosen attribution model.",
          "Subtract cost from revenue, then divide by cost.",
          "State the attribution model and time window next to the number.",
          "Where margins are low, also show ROI on gross margin, since revenue overstates the return."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: attributed revenue is ₹12 lakh and cost is ₹3 lakh. Marketing ROI = (12 − 3) ÷ 3 = 300%. The tempting wrong answer is 400%, which is revenue divided by cost (a 4 times return on spend), not ROI. If gross margin is 40%, margin-based ROI is (₹4.8 lakh − ₹3 lakh) ÷ ₹3 lakh = 60%, a more sober view." },
        { type: "table", head: ["Measure", "Formula", "Using the example"], rows: [
          ["Marketing ROI", "(Revenue − cost) ÷ cost", "(12 − 3) ÷ 3 = 300%"],
          ["Return on spend", "Revenue ÷ cost", "12 ÷ 3 = 4×"],
          ["Margin ROI", "(Gross margin − cost) ÷ cost", "(4.8 − 3) ÷ 3 = 60%"]
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Confusing ROI with return on spend.",
          "Counting pipeline as revenue.",
          "Claiming all revenue for marketing, including deals sales sourced alone.",
          "Not stating the attribution model, so leadership cannot judge the number."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Calculate ROI for one campaign from last quarter. Show it three ways: ROI, return on spend and margin ROI, and write one line on which attribution model you used." }
      ],
      takeaways: [
        "ROI = (attributed revenue − cost) ÷ cost.",
        "400% versus 300%: do not confuse ROI with return on spend.",
        "Show margin ROI when margins are thin.",
        "Always state the attribution model and time window."
      ]
    },
    {
      title: "Attribution models: first touch, last touch and multi-touch",
      minutes: 10,
      summary: "How first-touch, last-touch and multi-touch attribution assign credit, and why each tells only part of the story.",
      blocks: [
        { type: "p", text: "A B2B buyer rarely converts after one touch. They may see a LinkedIn post, attend a webinar, search your brand name, receive a WhatsApp follow-up and then book a demo. **Attribution** decides which of those touches gets credit for the deal. There are three common models, and **each tells part of the story**." },
        { type: "h", text: "The three models" },
        { type: "table", head: ["Model", "Credit goes to", "Good at showing", "Blind to"], rows: [
          ["First touch", "The first interaction", "What creates awareness and new names", "What closes deals"],
          ["Last touch", "The final interaction before conversion", "What converts", "What started the journey"],
          ["Multi-touch", "Shared across touches (equal, or weighted to first and last)", "The whole journey", "Simple; depends on good tracking"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Gurugram HR-tech deal worth ₹4 lakh had four touches: LinkedIn ad, webinar, brand search ad, sales email. First touch gives ₹4 lakh to LinkedIn. Last touch gives ₹4 lakh to the sales email. An equal multi-touch model gives ₹1 lakh to each. A weighted model might give 40% to first, 40% to last and 10% to each middle touch: LinkedIn ₹1.6 lakh, email ₹1.6 lakh, webinar ₹40,000, search ₹40,000. Same deal, very different stories." },
        { type: "h", text: "Choose and use a model" },
        { type: "steps", items: [
          "Check what your tracking can support. If you cannot record every touch, start with first and last touch.",
          "Report at least two models side by side so leadership sees the range.",
          "Pick one model for budget decisions and keep it stable for at least two quarters.",
          "Use UTM tags, CRM source fields and a 'how did you hear about us?' question to fill gaps.",
          "Review with sales: does the model match what reps see in deals?"
        ]},
        { type: "callout", tone: "india", title: "Offline touches", text: "In India many journeys include offline touches: a dealer recommendation, a trade fair, a call from a cousin in the same business. Software misses these. Ask buyers directly and record the answer in the CRM." },
        { type: "callout", tone: "warn", title: "Tracking and privacy", text: "Tracking tools must follow consent and privacy rules, and platform tracking features change. Verify current DPDP requirements and platform policies when setting up tracking." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using last touch only and cutting the channels that create demand.",
          "Switching models every month to make numbers look better.",
          "Treating the model's output as fact rather than an estimate.",
          "Ignoring offline and word-of-mouth touches."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take five recent won deals and list every touch you can find for each. Credit them under first touch, last touch and equal multi-touch, and see which channel's story changes most." }
      ],
      takeaways: [
        "Last touch credits the final interaction; first touch credits the first.",
        "Multi-touch shares credit across the journey.",
        "Each model tells part of the story; show more than one.",
        "Keep the model stable and capture offline touches."
      ]
    },
    {
      title: "Sourced versus influenced pipeline",
      minutes: 8,
      summary: "The difference between pipeline marketing created and pipeline marketing touched, and how to report both without double-counting.",
      blocks: [
        { type: "p", text: "Two questions about marketing's contribution often get mixed up. Did marketing **create** the deal? Or did marketing **touch** the buyer at some point during it? **Sourced pipeline** is pipeline marketing created: the first meaningful contact came from a marketing activity. **Influenced pipeline** is pipeline where marketing touched the buyer at some point, even if sales or a partner started it." },
        { type: "h", text: "Why both matter" },
        { type: "list", items: [
          "Sourced pipeline shows marketing's ability to create new demand.",
          "Influenced pipeline shows marketing's role in moving deals forward: case studies, events, nurture emails.",
          "Influenced is always the same or bigger than sourced, because sourced deals are also influenced.",
          "Adding them together double-counts; report them separately."
        ]},
        { type: "h", text: "Set it up" },
        { type: "steps", items: [
          "Add an 'original source' field to every opportunity, set at creation and not changed later.",
          "Log marketing touches on contacts and opportunities: events attended, webinars, content downloaded, campaigns received.",
          "Agree with sales which touches count as influence, such as attending an event or engaging with a nurture email, and a time window, such as 90 days before or during the deal.",
          "Report sourced and influenced pipeline as two separate numbers, each with win rates.",
          "Compare win rates and deal speed for influenced versus non-influenced deals."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chandigarh industrial-equipment firm has ₹5 crore of open pipeline. ₹1.5 crore was sourced by marketing (trade fair and webinar leads). A further ₹2 crore was sourced by sales but the buyers attended a customer meet or read a case study. Sourced pipeline is ₹1.5 crore; influenced pipeline is ₹3.5 crore (₹1.5 crore + ₹2 crore). The report shows both, never ₹5 crore 'from marketing'." },
        { type: "table", head: ["Measure", "Question it answers", "Example"], rows: [
          ["Sourced pipeline", "Did marketing create the deal?", "₹1.5 crore"],
          ["Influenced pipeline", "Did marketing touch the buyer at some point?", "₹3.5 crore"],
          ["Not touched", "Deals with no marketing contact", "₹1.5 crore"]
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Claiming influenced pipeline as if marketing created it.",
          "Counting a single email open as influence.",
          "Overwriting the original source when a deal changes hands.",
          "Adding sourced and influenced together."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your open opportunities and mark each as marketing-sourced, marketing-influenced only, or not touched. Agree the influence rule with a sales manager in one sentence." }
      ],
      takeaways: [
        "Sourced: marketing created it. Influenced: marketing touched it.",
        "Report them separately; never add them.",
        "Lock the original source at creation.",
        "Agree with sales what counts as influence."
      ]
    },
    {
      title: "Brand health: awareness, consideration and share of search",
      minutes: 9,
      summary: "How to track brand health through awareness, consideration and share of search alongside funnel metrics.",
      blocks: [
        { type: "p", text: "Funnel metrics show demand you are capturing now. Brand health shows whether future demand is growing. A brand that more buyers know and consider will find leads cheaper over time. Three practical measures are **awareness, consideration and share of search**." },
        { type: "table", head: ["Measure", "Question", "How to measure"], rows: [
          ["Awareness", "Have buyers in our segment heard of us?", "Short surveys at events, dealer meets or via a panel; unaided ('which brands do you know?') and aided ('have you heard of X?')"],
          ["Consideration", "Would they include us when they next buy?", "Survey question; share of shortlists in sales conversations"],
          ["Share of search", "What share of category brand searches are for us?", "Brand search volume ÷ total brand search volume for you and main competitors"]
        ]},
        { type: "h", text: "Calculate share of search" },
        { type: "steps", items: [
          "List your brand and your three to five main competitors.",
          "Use a search trends or keyword tool to get monthly search interest or volume for each brand name, in your region.",
          "Divide your volume by the total for all brands in the list.",
          "Track it monthly and compare it with your market share where you know it.",
          "Look for regional differences, for example by state."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kolkata paint brand and three competitors. Monthly brand searches in West Bengal: own brand 12,000; competitor A 30,000; competitor B 14,000; competitor C 4,000. Total 60,000. Share of search = 12,000 ÷ 60,000 = 20%. Six months after a regional campaign, it has risen to 24%, a sign that awareness and interest are growing ahead of sales." },
        { type: "callout", tone: "india", title: "Search in many languages", text: "Indian buyers search in English, Hindi, regional languages and mixed scripts, and increasingly by voice. Include common spellings and transliterations of your brand name, and verify which search tools and features are currently available for Indian languages." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Measuring only social media followers as brand health.",
          "Running surveys with leading questions.",
          "Comparing share of search across very different regions without care.",
          "Expecting brand measures to move in a month."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Calculate your share of search against three competitors for the last six months. Add three short brand questions to the feedback form at your next event or dealer meet." }
      ],
      takeaways: [
        "Brand health predicts future demand.",
        "Track awareness, consideration and share of search.",
        "Share of search = your brand searches ÷ all category brand searches.",
        "Brand measures move slowly; track trends, not single months."
      ]
    },
    {
      title: "Reporting: what happened, why and what you will do next",
      minutes: 10,
      summary: "How to write a one-page monthly report leadership can act on, ending with next actions and what you need.",
      blocks: [
        { type: "p", text: "A report is useful only if it leads to a decision. Leadership does not want a list of every post or a sheet of raw data. It wants three things: **what happened, why it happened, and what you will do next**, along with what you need from them. A good leadership report ends with next actions and asks." },
        { type: "h", text: "The one-page structure" },
        { type: "table", head: ["Section", "Content", "Length"], rows: [
          ["Headline", "One sentence: the most important result and its meaning", "1 line"],
          ["What happened", "Funnel numbers vs plan, CAC by channel, ROI, sourced and influenced pipeline", "5 to 6 numbers"],
          ["Why", "Two or three reasons, backed by data or sales feedback", "3 bullets"],
          ["What we will do next", "Specific actions with owners and dates", "3 bullets"],
          ["Asks", "Decisions, budget or help needed from leadership", "1 to 2 bullets"]
        ]},
        { type: "h", text: "Write it" },
        { type: "steps", items: [
          "Start from the monthly dashboard; pick the five or six numbers that matter against plan.",
          "Write the headline last, once you know the story.",
          "For each big variance, explain why in plain language, using sales feedback and win-loss reasons.",
          "Turn each 'why' into an action with an owner and date.",
          "End with a clear ask: approve a budget shift, decide on a market, help from another team.",
          "Share it a day before the review so the meeting is about decisions, not reading."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example headline for a Pune SaaS firm: 'October customers hit 18 against plan of 15, led by partner webinars; search CAC rose 30%.' What happened: leads 900, MQLs 240, customers 18; CAC search ₹32,000, partners ₹14,000; ROI 260%. Why: a joint webinar with a payroll partner drew a high-fit audience; search costs rose with a new competitor bidding on our brand. Next: two more partner webinars by December (owner: Priya); tighten search keywords (owner: Arjun). Ask: approve moving ₹1 lakh from search to partner co-marketing for Q4." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "A 20-slide deck of every activity.",
          "Numbers with no comparison to plan or last period.",
          "Explaining away bad results instead of saying what you will change.",
          "No ask, so leadership has nothing to decide."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write last month's one-page report using the five sections. Make sure it ends with three dated next actions and one clear ask, and send it to your manager." }
      ],
      takeaways: [
        "Report what happened, why, and what you will do next.",
        "Compare every number with plan or last period.",
        "Turn each reason into an owned, dated action.",
        "End with a clear ask so leadership can decide."
      ]
    }
  ]
});
