Academy.add("A6", "lessons", {
  lessons: [
    {
      title: "Launch tiers: match effort to impact",
      minutes: 10,
      summary: "Classify every release as a big, medium or small launch so the go-to-market effort fits the business impact.",
      blocks: [
        { type: "p", text: "Not every release deserves a press event, and not every release should slip out silently. Teams that treat every change as a big launch exhaust sales and marketing; teams that treat everything as small waste their best releases. A simple **launch tier** system fixes this by deciding the effort before the work starts." },
        { type: "table", head: ["Tier", "What it is", "Typical go-to-market effort"], rows: [
          ["Big", "A new product, a new segment or a new market", "Full positioning, pricing, sales training, campaign, PR, events, partner briefing, 6 to 10 weeks of preparation"],
          ["Medium", "A major new feature for existing customers", "Release note, customer email and WhatsApp broadcast, demo update, sales briefing, help docs, 2 to 4 weeks"],
          ["Small", "An improvement or fix", "Changelog entry, in-app note, support briefing, a few days"]
        ] },
        { type: "h", text: "How to assign the tier" },
        { type: "steps", items: [
          "Ask: does this open new revenue (new buyers, new segment) or deepen existing revenue?",
          "Estimate impact: pipeline it could create, customers affected, churn it could reduce.",
          "Ask: does sales need to say anything new, or does support need to answer anything new?",
          "Assign big, medium or small, and write one sentence explaining why.",
          "Agree the tier with the sales manager and marketer before you build the launch plan."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bengaluru HR software firm has three releases in one quarter. A payroll module for factories with contract labour opens a new segment worth an estimated ₹2 crore of pipeline: big launch. A WhatsApp leave-approval feature for existing customers: medium launch, with a broadcast to 1,200 admins and a 15-minute sales briefing. Faster payslip PDFs: small launch, with a changelog note. The marketing team spends 70% of its quarter on the payroll launch instead of splitting effort evenly." },
        { type: "list", items: [
          "Mistake: deciding the tier after the feature ships, when there is no time to prepare.",
          "Mistake: calling everything big because the engineering effort was big. Effort to build is not impact on buyers.",
          "Mistake: small launches with no support briefing, so customers hear about changes from confused agents.",
          "Mistake: no tier review afterwards to learn whether the effort was right."
        ] },
        { type: "callout", tone: "india", title: "India note", text: "For products sold through distributors or channel partners, a medium launch may still need a partner briefing in regional languages, because partners are often the first to field customer questions." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List the next three releases on your roadmap, assign each a tier with a one-line reason, and share the list with one sales manager and one marketer for agreement." }
      ],
      takeaways: [
        "Launch tiers are big (new product), medium (major feature) and small (improvement).",
        "Effort should match impact on buyers, not effort to build.",
        "Agree the tier with sales and marketing before planning.",
        "Every tier needs at least a support briefing."
      ]
    },
    {
      title: "Soft launch: small segment first, fix, then widen",
      minutes: 9,
      summary: "Release to a small, chosen segment first, fix what breaks, and widen only when clear criteria are met.",
      blocks: [
        { type: "p", text: "A soft launch releases the product or feature to a small segment before the wide launch. The purpose is to find and fix issues while they affect a few friendly customers, not thousands. It also gives sales real stories and proof before the big push." },
        { type: "h", text: "Choosing the soft-launch segment" },
        { type: "list", items: [
          "Customers who match the target segment closely, so lessons transfer.",
          "Customers with a good relationship with you, who will report problems rather than churn.",
          "A manageable number: often 10 to 50 accounts for B2B, or one city or region for consumer products.",
          "A mix that includes at least a few less tech-savvy users, so you see real friction."
        ] },
        { type: "steps", items: [
          "Define the soft-launch segment and invite them personally (call or WhatsApp, not just an email).",
          "Set 'widen' criteria in advance: for example, activation above 40%, no severity-one bugs for 2 weeks, support tickets per account below a set level.",
          "Give the segment a direct feedback line, such as a WhatsApp group or a named contact.",
          "Review usage and feedback weekly with engineering, support and sales.",
          "Fix the top issues, then check the criteria again.",
          "Widen in steps (next region, next segment) rather than to everyone at once."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chennai food-delivery software firm builds a kitchen display feature for restaurants. It soft launches to 25 restaurants in two Chennai neighbourhoods. In week one, kitchen staff struggle with English-only labels and the screen times out during rush hour. The team adds Tamil labels and fixes the timeout. By week three, 18 of 25 restaurants use it daily, above the 60% widen criterion, and the firm extends it to Coimbatore and Madurai before going national." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Soft launching with no criteria, so it drifts on for months; choosing only power users who hide real friction; and letting sales promise the feature to all customers during the soft launch." },
        { type: "p", text: "A soft launch is not a delay. It is the cheapest insurance you can buy against a public failure, and it produces the case studies that make the wide launch convincing." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For your next medium or big release, name the soft-launch segment, write three widen criteria with numbers, and set the first weekly review in the calendar." }
      ],
      takeaways: [
        "Soft launch to find and fix issues with a small segment first.",
        "Write widen criteria with numbers before you start.",
        "Give soft-launch customers a direct feedback line.",
        "Widen in steps, not all at once."
      ]
    },
    {
      title: "Channel fit: sell the way buyers already buy",
      minutes: 11,
      summary: "Choose direct, partner, marketplace or own-website and WhatsApp channels to match buyer habits and your margin.",
      blocks: [
        { type: "p", text: "The best product fails if it reaches buyers through the wrong channel. Channel fit means selling through the route your buyers already use to buy similar things, at a cost your margin can carry. Sales managers cover channel management in depth in B8; as a PM, you need to know which channel each launch depends on and design for it." },
        { type: "table", head: ["Channel", "Fits when", "Cost and margin impact"], rows: [
          ["Direct field sales", "High deal value, complex buying, several decision makers", "Highest cost per deal; needs large deals"],
          ["Inside sales (phone, video)", "Mid-value deals, buyers comfortable online", "Lower cost; good for SMB and mid-market"],
          ["Partners, distributors, resellers", "Buyers trust local intermediaries; tier 2 and 3 reach", "Partner margin of a significant share of price"],
          ["Marketplaces", "Consumers or SMBs already search there", "Commission and fees; less control of the customer"],
          ["Own website and WhatsApp", "Low-touch products, strong brand or referrals", "Lowest cost per sale; needs demand generation"]
        ] },
        { type: "steps", items: [
          "Ask five recent customers how they bought the last similar product: who did they call, where did they search, who did they pay?",
          "Calculate the margin left after each channel's cost (sales salaries, partner margin, marketplace fees).",
          "Compare against your unit economics from A5: does CAC payback still hold?",
          "Choose a primary channel and at most one secondary channel for the launch.",
          "Design what the channel needs: partner training, marketplace listing, WhatsApp catalogue, demo script."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Nagpur agri-tech firm launches a soil testing kit at ₹2,500. Field sales visits cost about ₹1,200 per sale, which leaves too little margin. Farmers already buy inputs from local agri-dealers they trust. The firm signs 40 dealers at a 20% margin (₹500 per kit), trains them with a Marathi demo video and adds a WhatsApp number for test results. The cost per sale falls by more than half and reach extends to villages the field team never visited." },
        { type: "callout", tone: "india", title: "India note", text: "Marketplace fees, commission structures and seller policies change often. Verify current rates on the platform's seller portal before you build them into pricing." },
        { type: "list", items: [
          "Mistake: choosing the channel the team is comfortable with, not the one buyers use.",
          "Mistake: forgetting partner margin when setting price, then squeezing partners.",
          "Mistake: launching on five channels at once with no owner for each."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Ask three customers how they bought, then write your launch's primary channel, its cost per sale and the margin left after it. Check it against your A5 floor price." }
      ],
      takeaways: [
        "Match how buyers already buy, and your margin.",
        "Every channel has a cost; check it against unit economics.",
        "Pick one primary channel and at most one secondary for a launch.",
        "Design the launch assets each channel needs."
      ]
    },
    {
      title: "The launch checklist: from positioning to tracking",
      minutes: 12,
      summary: "Work through a nine-item launch checklist so sales, support and marketing are ready on launch day.",
      blocks: [
        { type: "p", text: "Launches fail on small, forgotten items: the pricing page still shows old plans, support has never seen the feature, sales has no answer to the first competitor question. A checklist turns launch readiness from memory into a routine, and it becomes the backbone of your launch plan table with owners and dates." },
        { type: "table", head: ["Item", "What good looks like", "Usual owner"], rows: [
          ["Positioning", "One-line statement: for whom, what problem, why us (from A4)", "PM with marketing"],
          ["Pricing page", "Tiers, fences, GST treatment and FAQs updated", "PM"],
          ["Demo script", "10-minute flow with 3 aha moments", "PM with sales"],
          ["FAQ", "10 real questions with short answers", "PM with support"],
          ["Battlecard", "One page comparing you with a competitor, with traps and answers", "PM with sales"],
          ["Support training", "Agents have used the feature and know the top issues", "Support lead"],
          ["Help docs", "Setup guide, screenshots or short videos, regional languages if needed", "PM or docs"],
          ["Marketing assets", "Email, WhatsApp broadcast, social posts, landing page", "Marketing"],
          ["Tracking", "Events, UTM links and dashboard ready before day one", "PM with analytics"]
        ] },
        { type: "h", text: "The battlecard" },
        { type: "p", text: "A battlecard is a one-page sales guide comparing you with a specific competitor. It lists where you win, where they win, the traps to set ('Ask them how they handle multi-GSTIN invoicing'), the objections you will hear and proven answers. Reps use it minutes before a call, so keep it short and honest." },
        { type: "steps", items: [
          "Copy the checklist into a launch plan table with task, owner, date and status columns.",
          "Work backwards from launch day and assign a date to every item.",
          "Review status weekly; anything red two weeks before launch is escalated.",
          "Hold a launch readiness review a week before launch (see the practical task).",
          "On launch day, confirm tracking is firing before any campaign goes out."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Hyderabad accounting SaaS launches e-invoicing. The checklist shows the FAQ and support training are red with nine days to go. The PM runs a 45-minute session where six agents create test invoices, collecting 14 questions that become the FAQ. On launch day, support handles 120 tickets with a median reply time similar to normal weeks, and two of the most common questions were already answered in the FAQ." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Tracking added after launch (so the first weeks of data are lost), a battlecard that exaggerates, and help docs written by people who have never used the feature." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Turn the nine-item checklist into a launch plan table for your next release, with an owner and a date for every row, and share it with your sales manager and marketer." }
      ],
      takeaways: [
        "Use a checklist: positioning, pricing page, demo, FAQ, battlecard, support, docs, assets, tracking.",
        "Every item needs an owner and a date.",
        "A battlecard is a one-page sales guide against one competitor.",
        "Tracking must be live before launch day."
      ]
    },
    {
      title: "Launch metrics: outcomes, not outputs",
      minutes: 10,
      summary: "Measure launches by adoption, activation, pipeline, win rate and support load rather than by activity counts.",
      blocks: [
        { type: "p", text: "After a launch, teams love to report activity: emails sent, posts published, webinars held. These are **outputs**: things you did. What matters are **outcomes**: changes in customer and business behaviour. A launch with 50 posts and no activation has failed; a quiet launch that lifts win rate has succeeded." },
        { type: "table", head: ["Metric", "Question it answers", "Example definition"], rows: [
          ["Adoption", "Are customers trying it?", "% of active accounts that used the feature at least once in 30 days"],
          ["Activation", "Are new customers reaching first value?", "% of new accounts completing the key action within 7 days"],
          ["Pipeline created", "Is it generating new sales opportunities?", "₹ value of new opportunities tagged to the launch"],
          ["Win rate on new deals", "Does it help close deals?", "Won ÷ (won + lost) for deals where the feature was demoed"],
          ["Support tickets", "Is it causing confusion or bugs?", "Tickets per 100 accounts mentioning the feature"]
        ] },
        { type: "steps", items: [
          "Choose 3 to 5 metrics before launch, from the list above.",
          "Write a baseline for each (the number before launch).",
          "Set a target for 30 and 90 days after launch.",
          "Build the dashboard and confirm data is flowing before launch day.",
          "Review weekly for the first month with sales, support and marketing.",
          "Write a short launch review at 90 days: what worked, what to change next time."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Delhi CRM firm launches WhatsApp lead capture. Marketing reports 3 webinars and 40,000 emails. The PM's dashboard shows adoption at 22% of active accounts after 30 days against a 30% target, pipeline of ₹45 lakh tagged to the feature, and win rate on deals where it was demoed at 31% versus 24% without. Support tickets are high in week one because of a setup step. The team simplifies setup and adoption reaches 33% by day 60." },
        { type: "list", items: [
          "Output examples: emails sent, blog posts written, slides in the deck, demos booked.",
          "Outcome examples: activation rate of new customers, adoption, pipeline, win rate, churn.",
          "Use outputs to manage the team's work; use outcomes to judge the launch."
        ] },
        { type: "callout", tone: "warn", title: "Watch out", text: "Do not pick metrics after you see the data. Choosing the metric that looks best afterwards makes every launch look like a success and teaches you nothing." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For your next launch, write 3 outcome metrics with baselines and 30-day targets, and check with your analyst that each can be measured today." }
      ],
      takeaways: [
        "Judge launches by outcomes, not outputs.",
        "Core launch metrics: adoption, activation, pipeline, win rate, support tickets.",
        "Set baselines and targets before launch.",
        "Write a 90-day launch review."
      ]
    },
    {
      title: "Life cycle and go-to-market: the job changes with each stage",
      minutes: 10,
      summary: "Adapt the go-to-market job to the product's stage: educate, scale, differentiate and retain, or harvest and sunset.",
      blocks: [
        { type: "p", text: "Products and categories move through a life cycle: introduction, growth, maturity and decline. The right go-to-market job changes at each stage. A launch plan that worked at introduction will waste money in maturity, and a maturity playbook will kill a new category before it starts." },
        { type: "table", head: ["Stage", "Market looks like", "Main go-to-market job"], rows: [
          ["Introduction", "Few buyers understand the category", "Educate early adopters; explain the problem and the category"],
          ["Growth", "Demand rising, competitors arriving", "Scale the channels that already work"],
          ["Maturity", "Many similar options, slower growth", "Differentiate and retain; protect margin and share"],
          ["Decline", "Demand falling, better substitutes", "Harvest profit or sunset; move customers to newer products"]
        ] },
        { type: "h", text: "What changes in practice" },
        { type: "list", items: [
          "**Introduction**: content that explains the problem, pilots, founder or PM-led selling, close work with early adopters.",
          "**Growth**: double the budget on the channel with the best payback, hire reps in the regions that convert, partner programmes.",
          "**Maturity**: packaging and tiers, loyalty and renewal programmes, segment-specific features, competitive battlecards.",
          "**Decline**: reduce spend, raise price for remaining loyal users, migration offers, a clear sunset date."
        ] },
        { type: "steps", items: [
          "Place your product (or each product line) on the life cycle using growth rate, competitor count and buyer awareness.",
          "Write the main go-to-market job for that stage in one sentence.",
          "Check your current budget and team effort: are they doing that job?",
          "Move effort from the wrong job to the right one, starting next launch."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Ahmedabad payments firm has two products. Its UPI soundbox for kiranas is in growth: retailer referrals and distributor channels in Gujarat convert well, so the job is to scale those channels into Rajasthan and Madhya Pradesh rather than invent new ones. Its older card-swipe terminal is in decline: the firm stops advertising it, offers existing merchants a migration discount to the soundbox and sets a sunset date for new sales." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Explaining the category to buyers who already understand it, chasing new channels in growth instead of scaling what works, and keeping declining products alive on full marketing budgets." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Place your product on the life cycle, write its main go-to-market job in one sentence, and list one activity to stop and one to start." }
      ],
      takeaways: [
        "Introduction: educate early adopters.",
        "Growth: scale the channels that already work.",
        "Maturity: differentiate and retain.",
        "Decline: harvest or sunset."
      ]
    }
  ]
});
