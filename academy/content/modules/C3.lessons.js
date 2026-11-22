Academy.add("C3", "lessons", {
  lessons: [
    {
      title: "Start from revenue: reverse funnel maths",
      minutes: 12,
      summary: "How to work backwards from a revenue target to the number of customers, opportunities, SQLs, MQLs and leads you need.",
      blocks: [
        { type: "p", text: "Most marketing plans start with activity: \"We will run three campaigns and post daily.\" A strong plan starts with revenue and works backwards. The logic is simple: **revenue ÷ average deal = customers needed**. Then divide by each conversion rate, stage by stage, back up the funnel until you know how many leads you need. Now every channel and every rupee has a target tied to the business." },
        { type: "h", text: "The method" },
        { type: "steps", items: [
          "Take the revenue target for the period from your sales or business plan.",
          "Divide by the average deal size to get customers needed.",
          "Divide customers by the opportunity-to-win rate to get opportunities needed.",
          "Divide opportunities by the SQL-to-opportunity rate to get SQLs needed.",
          "Divide SQLs by the MQL-to-SQL rate to get MQLs needed.",
          "Divide MQLs by the lead-to-MQL rate to get leads needed.",
          "Spread the totals across months, allowing for your sales cycle length."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bengaluru B2B software firm targets ₹1 crore of new revenue next quarter. Average deal: ₹2 lakh. ₹1,00,00,000 ÷ ₹2,00,000 = **50 customers**. Opportunity-to-win rate 20%: 50 ÷ 0.2 = **250 opportunities**. SQL-to-opportunity 50%: 250 ÷ 0.5 = **500 SQLs**. MQL-to-SQL 40%: 500 ÷ 0.4 = **1,250 MQLs**. Lead-to-MQL 25%: 1,250 ÷ 0.25 = **5,000 leads**. If marketing currently produces 1,500 leads a month, the gap is about 500 leads a month, which becomes the plan's central problem." },
        { type: "table", head: ["Stage", "Conversion to next stage (example)", "Volume needed"], rows: [
          ["Leads", "25% become MQLs", "5,000"],
          ["MQLs", "40% become SQLs", "1,250"],
          ["SQLs", "50% become opportunities", "500"],
          ["Opportunities", "20% are won", "250"],
          ["Customers", "Average deal ₹2 lakh", "50 = ₹1 crore"]
        ] },
        { type: "h", text: "Where the rates come from" },
        { type: "list", items: [
          "Your CRM: the last two or three quarters of actual conversions by stage.",
          "If you have no history, start with sales team estimates, label them as assumptions and update monthly.",
          "Calculate separately for each major segment or channel if their rates differ a lot."
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Multiplying instead of dividing when moving back up the funnel.",
          "Using one blended rate when channels convert very differently.",
          "Ignoring the sales cycle: leads generated in the last month of the quarter may close next quarter.",
          "Forgetting that improving a conversion rate can be cheaper than buying more leads."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull last quarter's conversion rates from your CRM and run the reverse funnel for next quarter's revenue target. Compare the leads needed with what you produce now, and write the gap in one line." }
      ],
      takeaways: [
        "Revenue ÷ average deal = customers needed.",
        "Divide by each conversion rate to move back up the funnel.",
        "Use real CRM rates, label assumptions, and update monthly.",
        "The gap between needed and current leads defines the plan."
      ]
    },
    {
      title: "Agree funnel definitions with sales",
      minutes: 10,
      summary: "How to define lead, MQL, SQL, opportunity and customer jointly with sales, so the funnel numbers mean the same thing to everyone.",
      blocks: [
        { type: "p", text: "Funnel maths only works if every stage means the same thing to marketing and sales. If marketing counts every form fill as a qualified lead and sales ignores half of them, both teams will argue about numbers instead of fixing the funnel. Write the definitions down and agree them together." },
        { type: "table", head: ["Stage", "Definition to agree", "Who decides"], rows: [
          ["Lead", "Any identifiable person or company who has shown interest (form, call, WhatsApp enquiry, event scan)", "Automatic"],
          ["MQL (marketing qualified lead)", "A lead that fits the target profile and has shown enough intent, by agreed criteria", "Marketing, by agreed rules"],
          ["SQL (sales qualified lead)", "An MQL that sales has accepted and qualified against agreed criteria, such as need, budget, authority and timing", "Sales"],
          ["Opportunity", "An SQL with a confirmed need and a defined deal in the pipeline", "Sales"],
          ["Customer", "Signed and paid, or first order invoiced", "Finance or sales ops"]
        ] },
        { type: "h", text: "Steps to agree definitions" },
        { type: "steps", items: [
          "Book a 60-minute meeting with the sales manager and two salespeople.",
          "Look at 20 recent leads together and sort them into \"would work\" and \"would not work\". Ask why.",
          "Turn the reasons into MQL criteria: fit (industry, size, location, role) and intent (asked for a demo, price, visit).",
          "Agree SQL criteria using a qualification checklist such as BANT (budget, authority, need, timing).",
          "Agree a service level: for example, sales contacts every MQL within one working day and accepts or rejects it within three, with a reason.",
          "Write the definitions on one page, set them up in the CRM, and review them monthly."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Ahmedabad packaging supplier's marketing team reports 900 leads a month; sales says \"they are all junk\". Reviewing 20 together shows that students and job seekers fill in the website form. The agreed MQL rule: business email or GST number given, company in food, pharma or FMCG, and a request for a quote or sample. MQLs fall to 220 a month, but sales accepts 60% of them as SQLs instead of almost none. Both teams now trust the numbers." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Marketing defining MQL alone and celebrating volume.",
          "No feedback loop: sales rejects leads silently instead of recording a reason.",
          "Definitions that live in a slide but not in the CRM.",
          "Changing definitions mid-quarter without restating the numbers."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Sit with your sales manager for an hour, review 20 recent leads together, and agree one-page definitions for lead, MQL, SQL, opportunity and customer, plus a follow-up service level." }
      ],
      takeaways: [
        "An MQL becomes an SQL only when sales accepts and qualifies it against agreed criteria.",
        "Define every stage jointly and write it down.",
        "Agree a service level and a rejection reason for every MQL.",
        "Put the definitions into the CRM, not just a slide."
      ]
    },
    {
      title: "SMART objectives",
      minutes: 8,
      summary: "How to turn vague marketing goals into specific, measurable, achievable, relevant and time-bound objectives.",
      blocks: [
        { type: "p", text: "\"Increase brand awareness\" and \"grow leads\" are wishes, not objectives. Nobody can tell at the end of the quarter whether they were met. SMART objectives fix that. Each objective is **Specific** (what exactly), **Measurable** (a number), **Achievable** (stretching but realistic given budget and team), **Relevant** (tied to the revenue goal) and **Time-bound** (by when)." },
        { type: "table", head: ["Vague", "SMART"], rows: [
          ["Grow leads", "Generate 1,250 MQLs from food and pharma manufacturers in Gujarat and Maharashtra between April and June"],
          ["Improve conversion", "Raise MQL-to-SQL conversion from 30% to 40% by 30 June by applying the new MQL definition"],
          ["Build the brand in the south", "Get 40 qualified dealer enquiries from Tamil Nadu and Karnataka by the end of Q2, at a cost per lead of ₹1,500 or less"]
        ] },
        { type: "h", text: "Steps to write SMART objectives" },
        { type: "steps", items: [
          "Start from the reverse funnel: the leads, MQLs and SQLs you need.",
          "Write 2 to 4 objectives, no more. Each should move a funnel number or a conversion rate.",
          "Check each against the five letters and rewrite any that fail.",
          "Name an owner and a data source for each, such as the CRM report or ad platform dashboard.",
          "Add a midpoint check, such as the end of month two, so you can correct course.",
          "Share the objectives with sales and finance so everyone judges the quarter by the same numbers."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kolkata edtech firm's draft plan says \"Increase awareness among schools\". Rewritten: \"Book 120 demo meetings with principals of private CBSE schools in West Bengal and Odisha between 1 July and 30 September, through school visits, webinars and WhatsApp follow-up.\" It links to revenue because the firm knows roughly one demo in five becomes a school contract. The midpoint check on 15 August shows 35 demos, behind pace, so the team adds two district-level principal meetups." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Objectives about activity (\"post 60 times\") rather than outcomes.",
          "Too many objectives; focus disappears.",
          "Numbers with no source, so nobody can measure them.",
          "Unrealistic targets that the team stops believing in by week three."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Rewrite your current marketing goals as two to four SMART objectives tied to your reverse funnel. For each, name the owner, the data source and the midpoint check date." }
      ],
      takeaways: [
        "SMART: specific, measurable, achievable, relevant, time-bound.",
        "Tie each objective to a funnel number or conversion rate.",
        "Keep to two to four objectives, each with an owner and data source.",
        "Set a midpoint check to correct course."
      ]
    },
    {
      title: "Channel mix: owned, earned and paid",
      minutes: 11,
      summary: "How to choose channels by where your buyers already search and buy, across owned, earned and paid media.",
      blocks: [
        { type: "p", text: "Channels are where your message meets buyers. Group them into three types. **Owned media** is what you control: website, WhatsApp catalogue and broadcasts, email list, YouTube channel, brochures, your own events. **Earned media** is what others say about you: reviews, referrals, press coverage, dealer recommendations, social shares. **Paid media** is attention you buy: search ads, social ads, trade fair stalls, sponsorships, print. Choose the mix by where buyers already search and buy, not by what is fashionable." },
        { type: "table", head: ["Type", "Strength", "Weakness", "Examples"], rows: [
          ["Owned", "Low running cost, you control it, builds over time", "Slow to build an audience", "Website, WhatsApp, email, YouTube"],
          ["Earned", "Most trusted by buyers", "Hard to control or scale quickly", "Reviews, referrals, dealer word, press"],
          ["Paid", "Fast, scalable, targetable", "Stops when spending stops; can be costly", "Google and Meta ads, trade fairs, sponsorships"]
        ] },
        { type: "h", text: "Steps to choose your mix" },
        { type: "steps", items: [
          "From your C1 research, list where your target segment looks for information and where they buy.",
          "Check your CRM for which channels produced last quarter's customers, not just leads.",
          "Score each candidate channel on reach to the segment, cost per lead, conversion to SQL and time to results.",
          "Pick 3 to 5 channels for the quarter, covering at least one owned, one earned and one paid route.",
          "Make sure owned media is ready before paying for traffic: the landing page, WhatsApp number and follow-up process must work."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore textile machinery spares company finds that its mill buyers search Google for part numbers, ask other mill engineers for recommendations, and meet suppliers at trade fairs. Its mix: owned (a part-number catalogue page and WhatsApp ordering), earned (a referral offer for maintenance engineers and Google reviews), and paid (search ads on part numbers and one regional trade fair). It drops a planned Instagram campaign because its buyers do not look for spares there." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Picking channels because competitors use them.",
          "Judging channels by leads rather than by customers and revenue.",
          "Spreading budget thinly across ten channels.",
          "Paying for traffic to a weak website or a WhatsApp number nobody answers."
        ] },
        { type: "callout", tone: "india", title: "Where Indian buyers often decide", text: "In many Indian B2B and SMB categories, earned routes such as dealers, distributors, accountants and community groups carry more trust than ads. Ask your research which intermediaries buyers consult, and treat enabling them as a channel in your plan." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List every channel you used last quarter, tag each as owned, earned or paid, and note how many customers (not leads) each produced. Choose three to five for next quarter." }
      ],
      takeaways: [
        "Owned, earned and paid media each have a role.",
        "Choose channels by where buyers already search and buy.",
        "Judge channels by customers and revenue, not leads alone.",
        "Fix owned media before buying traffic."
      ]
    },
    {
      title: "Budget split: the 70-20-10 rule",
      minutes: 10,
      summary: "How to split a marketing budget between proven, promising and experimental channels, with a target cost per lead for each.",
      blocks: [
        { type: "p", text: "A common rule for splitting a marketing budget is **70-20-10**: 70% on proven channels that reliably produce customers, 20% on promising channels that show early results, and 10% on experiments you have not tried. The split protects this quarter's revenue while still finding next year's best channels. It is a starting rule, not a law; adjust it to your stage and risk appetite." },
        { type: "h", text: "Steps to build the budget" },
        { type: "steps", items: [
          "Start from the leads needed in your reverse funnel and your total budget for the quarter.",
          "Classify each channel: proven (consistent customers for 2 or more quarters), promising (some results, not yet consistent) or experiment (untested).",
          "Allocate 70%, 20% and 10% of the budget across the three groups.",
          "Set a target cost per lead (CPL) for each channel: budget ÷ leads expected. Check that the funnel still works at that CPL.",
          "Write a stop rule for each experiment, such as \"stop if CPL is above ₹3,000 after ₹25,000 spent\".",
          "Remember to budget GST on bought media and services where it applies (verify current rates)."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Mumbai B2B services firm has a quarterly budget of ₹10 lakh. Proven, ₹7 lakh: Google search ads ₹4 lakh at a target CPL of ₹800 (500 leads), and two industry events ₹3 lakh at ₹2,000 (150 leads). Promising, ₹2 lakh: LinkedIn ads at ₹1,600 (125 leads). Experiment, ₹1 lakh: a WhatsApp referral programme with dealers at a target ₹1,000 (100 leads), with a stop rule after ₹40,000 spent. Total expected: about 875 leads. If the funnel needs 1,000, the team either finds more budget, lowers CPL or improves conversion." },
        { type: "table", head: ["Group", "Share", "Purpose", "Review"], rows: [
          ["Proven", "70%", "Hit this quarter's target", "Monthly on CPL and customers"],
          ["Promising", "20%", "Scale what is starting to work", "Monthly; move to proven if consistent"],
          ["Experiments", "10%", "Find new channels", "Against stop rule; drop or promote"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Putting the 10% into salaries or overheads; it is for experiments.",
          "Running experiments with no success measure or stop rule.",
          "Never promoting a promising channel, or never cutting a proven one that has stopped working.",
          "Setting CPL targets without checking that the leads convert to customers."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Classify your channels as proven, promising or experiment, split next quarter's budget 70-20-10, and set a target cost per lead and a stop rule for each line." }
      ],
      takeaways: [
        "70% proven, 20% promising, 10% experiments.",
        "Set a target cost per lead for every channel.",
        "Give each experiment a stop rule.",
        "Check the funnel still delivers at your CPLs."
      ]
    },
    {
      title: "Building the marketing calendar",
      minutes: 10,
      summary: "How to plan around Indian festivals, the April to March fiscal year, trade fair seasons and buyers' closing months.",
      blocks: [
        { type: "p", text: "Timing changes results. The same campaign can work well in one month and fail in another. A marketing calendar puts your campaigns against the moments that drive buying in your segment: national and regional **festivals**, buyers' **April to March fiscal year** with its March year-end, **trade fair season** and your own sales **closing months**." },
        { type: "h", text: "What to mark on the calendar" },
        { type: "list", items: [
          "National festivals such as Diwali, plus regional ones that matter to your segment, such as Pongal, Onam, Durga Puja, Gudi Padwa or Baisakhi.",
          "Fiscal year-end in March, when many B2B buyers face pressure to commit or use remaining budget.",
          "April, when new budgets open and planning starts.",
          "Trade fairs and industry events in your category, and the weeks before them for invitations.",
          "Seasonal demand in your category: harvest, monsoon, wedding season, school admissions.",
          "Quiet periods to avoid: when your buyers are busy, closed or travelling."
        ] },
        { type: "h", text: "Steps" },
        { type: "steps", items: [
          "Draw the 13 weeks of the quarter in a sheet.",
          "Mark festivals, fiscal dates, trade fairs and seasonal peaks for your segments. Verify festival dates each year, as many follow the lunar calendar.",
          "Work back from each moment: when must the campaign launch, given your sales cycle?",
          "Place campaigns, content and offers, and mark each with owner and channel.",
          "Share it with sales so field activity lines up with marketing."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Delhi firm selling office furniture to companies plans Q4 (January to March). Buyers' remaining budgets must be spent by 31 March, and purchase orders take about four weeks. So the team launches a \"year-end fit-out\" campaign in the second week of January, runs follow-up through February, and plans sales closing pushes for the first three weeks of March. A Holi-themed offer is dropped because it would land too late to affect March orders." },
        { type: "table", head: ["Moment", "Typical B2B effect", "Typical consumer and SMB effect"], rows: [
          ["Jan to March", "Year-end budget decisions", "Varies by category"],
          ["April to May", "New budgets, planning, vendor reviews", "New business year for many traders"],
          ["Festival season", "Slower decisions in some sectors", "Peak buying and gifting in many categories"]
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a 13-week calendar for next quarter. Mark festivals relevant to your segments, the fiscal dates, trade fairs and closing weeks, then place each campaign so it lands before the moment it targets." }
      ],
      takeaways: [
        "Plan around festivals, the April to March fiscal year, trade fairs and closing months.",
        "Many B2B buyers face most pressure to commit budget in March.",
        "Work back from each moment using your sales cycle.",
        "Verify festival dates each year."
      ]
    },
    {
      title: "Brand versus demand",
      minutes: 9,
      summary: "Why some spend builds memory with future buyers and some captures buyers ready now, and how to balance the two.",
      blocks: [
        { type: "p", text: "Only a small share of your potential buyers is ready to buy at any moment. **Demand** activity captures those buyers now: search ads, retargeting, offers, sales follow-up. **Brand** activity builds memory and trust with buyers who will be ready later, so that when they start looking, your name comes to mind first: consistent content, events, sponsorships, PR, community presence. A plan that is all demand can hit this quarter and starve the next year. A plan that is all brand can look good and miss the target." },
        { type: "table", head: ["", "Brand", "Demand"], rows: [
          ["Goal", "Be remembered and trusted when the need arises", "Convert buyers who need it now"],
          ["Examples", "Educational videos, trade fair presence, community events, consistent social content", "Search ads, demo offers, retargeting, sales follow-up"],
          ["Measured by", "Branded search, recall in buyer interviews, direct enquiries, share of voice", "Leads, CPL, SQLs, revenue"],
          ["Time to effect", "Months", "Days to weeks"]
        ] },
        { type: "h", text: "Steps to balance the two" },
        { type: "steps", items: [
          "Tag every line in your budget as brand or demand.",
          "Check the balance against your situation: a new brand in a category may need more brand activity; a known brand with a short-term revenue gap may lean on demand.",
          "For brand lines, choose a leading indicator you can track, such as branded search volume or the share of new leads who say they already knew you.",
          "For demand lines, track CPL and conversion to SQL.",
          "Review the balance every quarter, not every week; brand effects take time."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune industrial safety equipment company spends 90% of its budget on search ads. Leads are steady, but CPL keeps rising and new buyers have rarely heard of it. It shifts 25% into brand: a monthly safety training webinar for plant managers and a stall at a regional safety expo. After two quarters, more new leads say they \"saw the webinar\" or \"met you at the expo\", branded searches rise, and these leads convert to SQL at a higher rate than cold search leads." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Cutting all brand spend whenever a quarter looks tight.",
          "Judging brand activity on next week's leads.",
          "Calling untargeted spending \"brand\" to avoid measurement.",
          "Brand messages that differ from the messaging house, so memory never builds."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Tag each line of your budget as brand or demand, write the current split as a percentage, and choose one leading indicator to track for your brand activity this quarter." }
      ],
      takeaways: [
        "Brand builds memory with future buyers; demand captures buyers ready now.",
        "You need both; balance depends on your stage and target.",
        "Measure brand with leading indicators such as branded search and recall.",
        "Review the balance quarterly."
      ]
    }
  ]
});
