Academy.add("A5", "lessons", {
  lessons: [
    {
      title: "Pricing methods: cost-plus, competitor, value, penetration and skimming",
      minutes: 11,
      summary: "Compare the main ways to set a price and learn why value-based pricing wins when you can prove the value.",
      blocks: [
        { type: "p", text: "Every price is set by one of a handful of methods, whether the team admits it or not. Knowing which method you are using, and its blind spots, is the first step to a price you can defend in front of sales, finance and the buyer." },
        { type: "table", head: ["Method", "How it works", "Strength", "Blind spot"], rows: [
          ["Cost-plus", "Unit cost plus a target margin", "Simple, protects margin", "Ignores what the buyer would pay; leaves money on the table"],
          ["Competitor-based", "Price near the market leader or alternative", "Easy to justify to buyers", "Copies someone else's cost and strategy; invites price wars"],
          ["Value-based", "Price as a share of the rupee value you create", "Highest defensible price", "Needs proof of value, which takes discovery work"],
          ["Penetration", "Launch low to win share fast, raise later", "Speed, network effects", "Hard to raise prices; attracts price-sensitive buyers"],
          ["Skimming", "Launch high for early adopters, lower over time", "Recovers investment early", "Invites competitors under your price"]
        ] },
        { type: "h", text: "Why value-based is strongest" },
        { type: "p", text: "Cost tells you your floor. Competitors tell you the buyer's alternative. Only value tells you the ceiling. When you can show a buyer that your product saves or earns them a clear number of rupees, the price discussion moves from 'Why so expensive?' to 'Is this a good share of what I gain?' The catch is the word *prove*: value-based pricing without evidence is just a high price." },
        { type: "steps", items: [
          "Work out your floor: fully loaded cost per customer per month, plus the minimum margin finance needs.",
          "List the buyer's next-best alternative and what it costs them today (manual work, a competitor, doing nothing).",
          "Quantify the value: hours saved, errors avoided, revenue gained, in rupees per month.",
          "Set a price that captures roughly 10 to 30% of that value, staying above the floor.",
          "Check it against competitor prices; if you are far above, make sure your proof explains the gap."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore SaaS firm sells billing software to textile traders. Cost to serve is ₹600 per account per month, so a cost-plus price at 70% margin would be about ₹2,000. Competitors charge ₹1,500. Discovery shows the software saves an accountant 20 hours a month (about ₹8,000 of salary) and cuts late GST filings. Capturing 30% of ₹8,000 suggests ₹2,400. The firm launches at ₹2,499 with a savings calculator in every demo, well above both cost-plus and competitor anchors." },
        { type: "h", text: "Penetration versus skimming" },
        { type: "p", text: "Choose penetration when the market is large, switching costs grow over time and network effects reward early share. Choose skimming when early adopters value novelty, supply is limited or you need to recover heavy development cost. In India, penetration is common in consumer apps; for B2B SMB tools, be careful, because a low launch price becomes the reference price that every renewal is judged against." },
        { type: "list", items: [
          "Mistake: pricing only from cost and then wondering why the sales team discounts to win.",
          "Mistake: copying a competitor who has a different cost base or business model.",
          "Mistake: claiming value-based pricing without a single customer-verified number."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your current price, your floor, the main competitor's price and one rupee value number from a real customer. If you cannot fill the value cell, book two discovery calls this week to find it." }
      ],
      takeaways: [
        "Cost sets the floor, competitors set the reference, value sets the ceiling.",
        "Value-based pricing works only when you can prove the value in rupees.",
        "Penetration pricing creates a low reference price that is hard to raise later.",
        "Always know which method you are actually using."
      ]
    },
    {
      title: "Willingness to pay: asking the four price questions",
      minutes: 10,
      summary: "Use the four price-perception questions in buyer interviews to find an acceptable price range before you launch.",
      blocks: [
        { type: "p", text: "Most teams discuss price for the first time when a deal is already on the table. By then the buyer is negotiating, not telling the truth. Willingness-to-pay (WTP) conversations happen earlier, in discovery or beta interviews, when the buyer has no reason to bargain." },
        { type: "h", text: "The four questions" },
        { type: "list", items: [
          "At what price would this feel **too cheap**, so you would doubt the quality?",
          "At what price would it feel like **a bargain**, a great buy?",
          "At what price would it start to feel **expensive**, but you would still consider it?",
          "At what price would it be **too expensive** to consider at all?"
        ] },
        { type: "p", text: "This is the logic of the Van Westendorp price sensitivity method. With a handful of interviews you will not get a statistically precise curve, but you will see a range: the zone between 'bargain' and 'expensive' where most buyers are comfortable." },
        { type: "steps", items: [
          "Explain the product and its value first; WTP questions without context produce random numbers.",
          "Ask all four questions in order, and write the exact rupee answers.",
          "Ask 'Why that number?' after each answer; the reasons reveal the buyer's reference points.",
          "Ask what they pay today for the alternative, including staff time.",
          "Plot the answers from 5 to 10 buyers in a simple table and look for the overlap.",
          "Set your target price inside the overlap, then test it with a real offer to a few buyers."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Jaipur PM interviews 6 boutique owners about a WhatsApp catalogue tool. 'Too cheap' answers cluster at ₹199 a month, 'bargain' at ₹399 to ₹499, 'expensive' at ₹999 to ₹1,200 and 'too expensive' at ₹1,500 and above. The acceptable range is roughly ₹500 to ₹1,000. Two owners mention they pay a part-time helper ₹3,000 a month to update catalogues, which supports pricing at the upper end, ₹799, with a ₹1,499 tier for multi-store owners." },
        { type: "table", head: ["What buyers say", "What it usually means"], rows: [
          ["'Anything is too expensive'", "They have not understood the value yet"],
          ["Very wide spread across buyers", "You may have two segments; price them separately"],
          ["Tight cluster near competitor price", "The competitor is the reference; differentiate or match"]
        ] },
        { type: "callout", tone: "warn", title: "Stated is not the same as paid", text: "Buyers state one number and pay another. Treat WTP answers as a range to test, not a final price. Confirm with real offers, pilot invoices or a pricing page test." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add the four price questions to your next five customer conversations and log the answers in one sheet, with the buyer's segment and reasons." }
      ],
      takeaways: [
        "Ask about price in discovery, before the buyer starts negotiating.",
        "The four questions give you a comfortable range, not a single number.",
        "Always ask 'Why that number?' to learn the buyer's reference point.",
        "Validate stated willingness to pay with real offers."
      ]
    },
    {
      title: "Pricing models: per user, per use, tiered, outcome-based and freemium",
      minutes: 10,
      summary: "Choose the unit you charge for so that price grows with the value the customer gets.",
      blocks: [
        { type: "p", text: "The pricing model is the unit you charge for. It matters as much as the number. A good model is easy for the buyer to understand, easy for you to bill, and grows as the customer gets more value. A poor model punishes customers for using the product more." },
        { type: "table", head: ["Model", "Charge for", "Fits when", "Watch out for"], rows: [
          ["Per user (seat)", "Each named user", "Value grows with each person using it (CRM, HR tools)", "Buyers share logins to save money"],
          ["Per use (usage)", "Transactions, messages, GB, API calls", "Value tracks volume (payments, messaging)", "Unpredictable bills scare SMB buyers"],
          ["Tiered", "Bundles at set prices", "Segments differ in needs and budgets", "Too many tiers confuse buyers"],
          ["Outcome-based", "A share of a result (leads, savings, collections)", "Outcome is measurable and you control much of it", "Disputes over attribution"],
          ["Freemium / free trial", "Free entry, paid upgrade", "Low cost to serve, product sells itself", "Free users who never convert"]
        ] },
        { type: "h", text: "How to choose the value metric" },
        { type: "steps", items: [
          "List the ways customers get value: more users, more invoices, more orders, more locations.",
          "Pick the one that best tracks value and that the buyer can predict in advance.",
          "Check you can measure and bill it accurately every month.",
          "Test whether a small customer and a large customer would both feel the price is fair.",
          "Decide whether to pair it with tiers so buyers see a fixed price for a range of usage."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Indore logistics SaaS first charges ₹500 per user. Large transporters have 3 office users but 200 trucks, so they pay ₹1,500 for huge value, while small fleets with 5 users pay more for less. The PM switches to per-vehicle pricing in tiers: up to 20 vehicles ₹2,000 a month, 21 to 100 ₹6,000, above 100 custom. Revenue from the top 10 accounts rises and small fleets stop complaining." },
        { type: "h", text: "Freemium or free trial?" },
        { type: "p", text: "A **free trial** (say 14 days of the full product) works when value shows quickly and you have a sales or onboarding team to help convert. **Freemium** (a permanently free limited plan) works when the cost to serve a free user is tiny and free users spread the product. For Indian SMB buyers, a trial with guided onboarding on WhatsApp often converts better than freemium, because the buyer needs help to see the value. Test both if you can." },
        { type: "list", items: [
          "Mistake: charging per user when one user generates most of the value.",
          "Mistake: pure usage pricing for buyers who need a fixed monthly budget.",
          "Mistake: freemium plans so generous that nobody needs to upgrade."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down your current value metric and two alternatives. For your three largest and three smallest customers, calculate what each would pay under each model, and note which feels fairest." }
      ],
      takeaways: [
        "The unit you charge for matters as much as the price.",
        "Pick a value metric that grows with the customer's value and is predictable.",
        "Tiers give buyers a fixed budget while still scaling with usage.",
        "Trials suit products that need help to show value; freemium suits low-cost, viral products."
      ]
    },
    {
      title: "Packaging: tiers and the fences that keep buyers in the right one",
      minutes: 11,
      summary: "Design good, better, best tiers and the fences that stop large buyers paying the small-buyer price.",
      blocks: [
        { type: "p", text: "Packaging decides what goes in each offer. Most B2B and many consumer products settle on three tiers, often called basic, standard and premium. Three tiers let a buyer compare, give the middle option a natural pull, and let the premium tier serve as an anchor and a home for your most demanding customers." },
        { type: "h", text: "What a fence is" },
        { type: "p", text: "A **price fence** is a limit or feature difference that keeps each buyer in the tier that matches their value. Without fences, a 200-person distributor happily buys the ₹999 plan built for a 5-person shop. Good fences are easy to understand, hard to work around and tied to value, not to arbitrary pain." },
        { type: "list", items: [
          "Usage limits: users, invoices, orders, outlets, storage.",
          "Feature fences: integrations, approvals, reports, multi-branch, API access.",
          "Support level: email only, WhatsApp support, dedicated account manager, onboarding visits.",
          "Commercial terms: monthly versus annual, SLA, custom contract."
        ] },
        { type: "steps", items: [
          "Segment your customers by size and need (use your F1 segments).",
          "List every feature and service, and mark which segment truly needs each one.",
          "Put the must-haves for the smallest segment in basic; keep it useful, not crippled.",
          "Put what most mid-sized customers need in standard; this should be your target tier.",
          "Put power features, higher limits and premium support in premium.",
          "Choose one or two clear fences between each tier and test them with five customers."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Lucknow school ERP packages three tiers. Basic at ₹15,000 a year covers fees and attendance for up to 300 students with email support. Standard at ₹35,000 adds exams, parent app and WhatsApp alerts for up to 1,000 students with WhatsApp support. Premium at ₹75,000 adds multi-campus, transport tracking, unlimited students and an onboarding visit. The fences are student count, multi-campus and support level, all of which match how schools grow." },
        { type: "table", head: ["Tier", "Job of the tier", "Typical share of buyers (illustrative)"], rows: [
          ["Basic", "Entry point; lets small buyers start", "20 to 30%"],
          ["Standard", "Where most buyers should land", "50 to 60%"],
          ["Premium", "Anchor and home for large or demanding buyers", "10 to 20%"]
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Fences that annoy every buyer (limiting basic to 2 logins when everyone needs 3), too many tiers, tiers named after internal jargon, and a premium tier that nobody ever buys because it has no clear reason to exist." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft three tiers for your product with what each includes, a price and one or two fences. Show it to one sales manager and ask: 'Which tier would your last five customers pick, and would any of them cheat the fence?'" }
      ],
      takeaways: [
        "Three tiers make comparison easy and pull buyers to the middle.",
        "A fence is a limit or feature difference that keeps buyers in the right tier.",
        "Good fences track how customers grow and get value.",
        "Design standard as the tier most buyers should choose."
      ]
    },
    {
      title: "Unit economics: margin, CAC, LTV and payback",
      minutes: 13,
      summary: "Calculate gross margin, CAC, lifetime value and CAC payback so your prices hold up as you grow.",
      blocks: [
        { type: "p", text: "A price only works if each customer earns back what it cost to win and serve them. Unit economics is the arithmetic of one customer. Finance, investors and good sales leaders all ask for it, and a PM who owns pricing should be able to calculate it without help." },
        { type: "table", head: ["Metric", "Formula", "What it tells you"], rows: [
          ["Gross margin", "(Revenue − cost to serve) ÷ revenue", "Share of each rupee left after delivering the product"],
          ["CAC", "Total sales and marketing spend ÷ new customers won", "What it costs to win one customer"],
          ["LTV", "Monthly revenue per account × gross margin ÷ monthly churn", "Gross profit one customer brings over their life"],
          ["CAC payback", "CAC ÷ (monthly revenue × gross margin)", "Months to earn back the cost of winning them"],
          ["LTV : CAC", "LTV ÷ CAC", "Return on acquisition spend; 3 or more is a common rule of thumb"]
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: average revenue per account is ₹5,000 a month, gross margin is 80% and monthly churn is 2%. Monthly gross profit is ₹5,000 × 0.8 = ₹4,000. LTV is ₹4,000 ÷ 0.02 = ₹2,00,000. If CAC is ₹60,000, payback is ₹60,000 ÷ ₹4,000 = 15 months, and LTV to CAC is ₹2,00,000 ÷ ₹60,000 = 3.3. That clears the rule of thumb, but a 15-month payback ties up cash, so the team looks for ways to cut CAC or collect annual payment up front." },
        { type: "h", text: "Building the sheet" },
        { type: "steps", items: [
          "Get revenue per account per month by tier, after average discounts, not list price.",
          "Calculate cost to serve: hosting, payment and messaging fees, support and onboarding time.",
          "Get sales and marketing spend for a period and the number of new customers in that period; divide for CAC.",
          "Take monthly churn from billing data (customers lost ÷ customers at start of month).",
          "Calculate LTV, payback and LTV to CAC per tier and per channel.",
          "Set a **floor price**: the lowest price at which payback and LTV to CAC still meet your targets."
        ] },
        { type: "p", text: "The floor price is the number sales should know by heart. Below it, a deal loses money over its life. It is also the anchor for your discount policy in lesson 8." },
        { type: "list", items: [
          "Mistake: using list price when the real average price is 20% lower after discounts.",
          "Mistake: leaving out field sales salaries, partner commissions or onboarding time from CAC.",
          "Mistake: one blended CAC that hides a very expensive channel.",
          "Mistake: forgetting that annual prepayment improves cash even when LTV is unchanged."
        ] },
        { type: "callout", tone: "india", title: "India note", text: "Long credit periods (60 or 90 days) delay cash and stretch real payback. Add the credit period to your payback months when you present to finance." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a one-tab sheet with margin, CAC, LTV, payback and floor price for your product using last quarter's real numbers. Mark any number you had to estimate." }
      ],
      takeaways: [
        "LTV = monthly revenue × gross margin ÷ monthly churn.",
        "CAC payback = CAC ÷ monthly gross profit per account.",
        "An LTV to CAC ratio of 3 or more is a common rule of thumb, not a law.",
        "Calculate a floor price and share it with sales."
      ]
    },
    {
      title: "Psychological pricing: anchors, per-day framing and price endings",
      minutes: 9,
      summary: "Use anchoring, small-unit framing and price endings to make a fair price feel right to the buyer.",
      blocks: [
        { type: "p", text: "Buyers do not judge prices in isolation. They compare against whatever number they saw first, the unit the price is expressed in and even the last digits. Psychological pricing does not replace value; it helps a fair price be perceived as fair." },
        { type: "h", text: "Three tools" },
        { type: "list", items: [
          "**Anchoring**: show a higher option first (premium tier, the cost of the problem, the enterprise plan) so the target tier looks reasonable.",
          "**Per-day or per-use framing**: ₹36,000 a year sounds large; 'under ₹100 a day' or '₹3 per invoice' connects to everyday spending.",
          "**Price endings**: round numbers (₹50,000) signal premium and confidence; endings in 9 or 99 (₹4,999) signal value and a deal."
        ] },
        { type: "steps", items: [
          "Order your pricing page and proposal from premium to basic, so the first number seen is the highest.",
          "State the cost of the problem before the price ('Late GST filing penalties and staff time cost you about ₹15,000 a month').",
          "Add a per-day, per-user or per-transaction equivalent under each tier price.",
          "Choose round numbers for premium and enterprise offers and 9 or 99 endings for SMB and consumer tiers.",
          "Highlight the tier you want most buyers to choose ('Most popular')."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kochi clinic software firm lists Premium at ₹60,000 a year, Standard at ₹29,999 and Basic at ₹14,999. Under Standard it shows 'about ₹82 a day, less than one consultation'. Before the tiers, the page shows that a missed follow-up reminder costs a clinic roughly ₹1,000 in lost revenue each time. In this example, more trial users chose Standard after the page was reordered from premium to basic." },
        { type: "table", head: ["Signal you want", "Use", "Avoid"], rows: [
          ["Premium, expert", "₹50,000, ₹1,00,000", "₹49,999 for a consulting offer"],
          ["Value, accessible", "₹999, ₹4,999", "₹1,000 for an entry consumer plan"],
          ["Small and easy", "Per day, per order", "Only the annual total"]
        ] },
        { type: "callout", tone: "warn", title: "Stay honest", text: "Anchors must be real offers you would actually sell. Fake 'original prices', countdown timers that reset and hidden charges damage trust and may breach consumer protection rules. Show taxes clearly." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Rewrite your pricing page or proposal price section: order tiers high to low, add a per-day or per-use line and check every price ending matches the signal you want." }
      ],
      takeaways: [
        "The first number a buyer sees becomes the anchor.",
        "Per-day or per-use framing makes larger prices feel manageable.",
        "Round numbers signal premium; 9 and 99 endings signal value.",
        "Psychological pricing supports value; it never replaces it."
      ]
    },
    {
      title: "India specifics: GST, credit terms, payment modes, festivals and bargaining",
      minutes: 11,
      summary: "Adapt price lists and terms to Indian buying habits: GST display, credit periods, UPI, festival offers and expected bargaining.",
      blocks: [
        { type: "p", text: "A price that works on a spreadsheet can fail in an Indian sale because of how tax is shown, when cash arrives or how the buyer expects to negotiate. These details belong in the pricing design, not as afterthoughts handled by each salesperson." },
        { type: "h", text: "The five details to decide" },
        { type: "list", items: [
          "**GST display**: B2B buyers usually expect prices exclusive of GST because they claim input credit; consumers expect inclusive prices. State clearly which you show.",
          "**Credit terms**: 30, 60 or 90-day credit is common with distributors and enterprises. Longer credit is a cost to you and should be priced.",
          "**Advance versus on-delivery**: advance payment, part advance or cash on delivery each carry different risk and cash flow.",
          "**Payment modes**: UPI, UPI autopay for subscriptions, cards, net banking, NEFT or RTGS for larger invoices, and payment gateway fees.",
          "**Festival pricing and bargaining**: Diwali, Navratri, Onam, Pongal, financial year-end; and buyers who expect a first discount as a matter of habit."
        ] },
        { type: "callout", tone: "india", title: "Verify current GST rules", text: "GST rates, the classification of your product or service, invoicing rules and e-invoicing thresholds change. Check the GST portal and CBIC guides, and confirm with your finance team or CA before publishing a price list." },
        { type: "steps", items: [
          "Decide for each segment whether list prices are shown inclusive or exclusive of GST, and write it on every price.",
          "Set standard credit terms and a price difference for longer credit, such as 2% more for 90 days.",
          "Offer an early-payment or annual-advance benefit instead of a plain discount.",
          "Include gateway or UPI autopay fees in your cost to serve.",
          "Plan festival offers once a year with marketing, with a start and end date.",
          "Build expected bargaining into the plan: know your opening price, target and floor."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Surat machine-parts supplier quotes ₹1,00,000 plus GST to distributors on 30-day credit. A distributor asks for 90 days. Money costs the supplier about 1% a month, so 60 extra days cost about ₹2,000. The supplier offers 90 days at ₹1,02,000, or 2% off for advance payment at ₹98,000. The buyer picks advance, and the supplier's cash flow improves." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Quoting a B2B price without saying whether GST is included, giving 90-day credit for free, running festival discounts that never end, and letting every rep invent their own bargaining room." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add a terms block to your price list: GST treatment, standard credit period, advance benefit and accepted payment modes. Ask finance to check the GST line." }
      ],
      takeaways: [
        "State clearly whether prices include GST, and verify current rules.",
        "Credit days cost money; price them.",
        "Offer benefits for advance or annual payment rather than plain discounts.",
        "Plan for bargaining with an opening price, a target and a floor."
      ]
    },
    {
      title: "Discount discipline: never give without getting",
      minutes: 10,
      summary: "Agree a discount policy with sales so every concession is traded for something of value and stays above the floor.",
      blocks: [
        { type: "p", text: "Discounts are the fastest way to destroy the pricing work of the previous seven lessons. One unplanned 20% discount at quarter end can wipe out a year of careful packaging, because the buyer and their peers now know the real price. The rule is simple: **never give a discount without getting something back**." },
        { type: "h", text: "What you can ask for in return" },
        { type: "list", items: [
          "A longer contract (annual or two-year instead of monthly).",
          "Faster payment (advance instead of 60-day credit).",
          "A larger volume or more locations.",
          "A case study, testimonial video or reference call.",
          "Signing by a specific date that helps your planning.",
          "A reduced scope, such as fewer onboarding visits."
        ] },
        { type: "steps", items: [
          "Agree a discount ladder with sales managers: for example, up to 5% the rep decides, 5 to 15% the sales manager approves, above 15% the PM and finance approve.",
          "Link each level to a trade: what the buyer must give for each step.",
          "Set the floor price from your unit economics sheet; no deal goes below it.",
          "Teach reps the phrase: 'I can look at that if we can agree on…' rather than 'Let me check'.",
          "Log every discount with its reason and the trade in the CRM.",
          "Review discounts monthly: average discount by rep, tier and segment."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a buyer wants 10% off a ₹3,00,000 annual deal. The rep does not refuse and does not cave. She says, 'We can do 10% if you pay annually in advance and agree to a case study after 90 days.' The buyer agrees. The firm gives up ₹30,000 but gains ₹2,70,000 in cash on day one instead of quarterly, plus a reference story for the next ten deals." },
        { type: "table", head: ["Discount", "Who approves", "Buyer gives"], rows: [
          ["Up to 5%", "Rep", "Signs this month"],
          ["5 to 15%", "Sales manager", "Annual contract or advance payment"],
          ["Above 15%", "PM and finance", "Multi-year, volume and case study; never below floor"]
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Discounting before the buyer asks, giving the full discount in one step, and escalating straight to a manager, which teaches buyers to always ask for the boss." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft a one-page discount policy with limits, trades and approvers, and bring it to the joint session with sales managers to agree it." }
      ],
      takeaways: [
        "Never give a discount without getting something back.",
        "Use a discount ladder with clear limits and approvers.",
        "The floor price from unit economics is the line no deal crosses.",
        "Track discounts monthly so policy becomes habit."
      ]
    }
  ]
});
