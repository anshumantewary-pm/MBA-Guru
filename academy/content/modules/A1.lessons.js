Academy.add("A1", "lessons", {
  lessons: [
    {
      title: "Start from customer pain, not a feature idea",
      minutes: 9,
      summary: "Why product work begins with a painful, frequent problem you heard from real customers, and how to mine your F1 interviews for it.",
      blocks: [
        { type: "p", text: "Most failed products did not fail because the team could not build them. They failed because nobody needed them badly enough to change what they already do. A feature idea feels like progress because it is concrete: *a dashboard*, *an app*, *an AI assistant*. But a feature is only a guess about how to remove a pain. If the pain is weak, rare or already solved well enough, the cleverest feature will not sell." },
        { type: "p", text: "Starting from pain means your first question is never \"would you use this?\" but \"what goes wrong today, how often, and what does it cost you?\" The answer gives you something you can test, size and price later in the track." },
        { type: "h", text: "Reuse your F1 interviews" },
        { type: "p", text: "In F1 you interviewed customers about their work and their buying. Those notes are your first evidence base. Go back through them looking for pains, not compliments. Mark every moment where a customer described a delay, a loss, a workaround, an argument with a colleague or a cost they resent." },
        { type: "steps", items: [
          "Collect all your F1 interview notes in one sheet, one row per interview.",
          "For each interview, copy out every sentence that describes a problem, in the customer's own words.",
          "Tag each problem with how often it happens (daily, weekly, monthly, rarely) and whether the customer has spent money or time trying to fix it.",
          "Group similar problems. Count how many different customers mentioned each group.",
          "Pick the one or two problems that are frequent, costly and mentioned by several people. These are your candidates for validation."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore team wanted to build a *stock dashboard* for small hardware shops. Re-reading 12 interviews, they found only 2 owners mentioned stock visibility, but 9 complained about chasing credit customers for payment, often by phone at night. Seven had tried a notebook, a spreadsheet or a paid reminder app. The real pain was **collections**, not stock. The team changed its problem candidate before writing a line of code." },
        { type: "h", text: "Signals of a real pain" },
        { type: "list", items: [
          "The customer raises it without being prompted.",
          "They can describe the last time it happened in detail.",
          "They have already tried to solve it: a hack, a hire, a tool, a spreadsheet.",
          "It costs them money, time, customers or reputation, and they can roughly say how much.",
          "Emotion shows: frustration, embarrassment, worry about the boss or the tax filing."
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Listening only for evidence that supports the feature you already love.",
          "Treating one loud customer as a market.",
          "Confusing a nice-to-have (\"it would be good if...\") with a must-solve pain."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Open your F1 notes and build the pain sheet described above. Bring your top two pains, with how many customers mentioned each and one direct quote, to Tuesday's workshop." }
      ],
      takeaways: [
        "A feature is a guess; the pain is the fact you test against.",
        "Real pains are frequent, costly and already being worked around.",
        "Your F1 interviews are evidence; mine them before running new ones.",
        "Count how many customers share a pain before you trust it."
      ]
    },
    {
      title: "Writing a sharp problem statement",
      minutes: 9,
      summary: "How to write a problem statement that names who has the problem, when it happens, today's workaround and its cost in rupees, time or risk.",
      blocks: [
        { type: "p", text: "A problem statement is a short paragraph that the whole team, and later the sales team, can agree on. It stops the product drifting. When someone proposes a new feature, you ask: does this help the person in the problem statement, at the moment it happens, more than their current workaround does? If not, it waits." },
        { type: "h", text: "The four parts" },
        { type: "table", head: ["Part", "Question it answers", "Weak version", "Sharp version"], rows: [
          ["Who", "Which specific person or business?", "Small businesses", "Owners of 1 to 3 outlet pharmacies in tier 2 cities"],
          ["When", "What triggers the problem?", "During operations", "In the last week of the month, when GST invoices must be matched with distributor bills"],
          ["Workaround", "What do they do today?", "They struggle", "The owner's nephew types bills into a spreadsheet over two evenings"],
          ["Cost", "What does it cost in rupees, time or risk?", "It is inefficient", "About 8 hours a month, plus late fees and the risk of mismatched input tax credit"]
        ] },
        { type: "p", text: "The workaround matters because it is your real competitor. Buyers rarely compare you with another startup; they compare you with the spreadsheet, the accountant, the WhatsApp group or simply doing nothing. The cost matters because it sets the ceiling for what you can charge and the strength of the reason to switch." },
        { type: "h", text: "How to write it" },
        { type: "steps", items: [
          "Write the *who* as narrowly as your evidence allows. You can widen later.",
          "Name the trigger moment: a date, an event, a customer request, an inspection.",
          "Describe today's workaround in concrete terms: who does it, with what tool.",
          "Estimate the cost. Convert time into rupees using a realistic hourly value, and name any risk (penalty, lost customer, failed audit).",
          "Read it aloud to one customer and ask: \"Is this right? What did I miss?\""
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: \"Owners of single-site physiotherapy clinics in Indore (who) lose bookings when patients message after clinic hours and get no reply until the next morning (when). Today the receptionist checks WhatsApp at 10 am and calls back (workaround). Owners estimate 4 to 6 lost bookings a week at ₹600 each, roughly ₹10,000 to ₹15,000 a month (cost).\" Every number came from three owners' own estimates and is labelled as such." },
        { type: "callout", tone: "warn", title: "Avoid the solution in disguise", text: "\"Clinics lack an AI booking bot\" is not a problem statement; it is your solution wearing a costume. Nobody lacks your product. They lack bookings, time or certainty." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your problem statement using the four parts. Put a source next to each number (interview, invoice, your own estimate). Test it on one customer before Friday." }
      ],
      takeaways: [
        "A problem statement has four parts: who, when, workaround, cost.",
        "Today's workaround is your true competitor.",
        "Express cost in rupees, hours or risk, with a source for each figure.",
        "If your product's name appears in the problem, rewrite it."
      ]
    },
    {
      title: "The design thinking loop",
      minutes: 9,
      summary: "How to use empathise, define, ideate, prototype and test as a fast, repeatable loop rather than a one-off workshop.",
      blocks: [
        { type: "p", text: "Design thinking is a disciplined way to move from a fuzzy situation to a tested idea. It has five stages, and the power is in running them as a loop: each test teaches you something that sends you back to empathise or define with better information." },
        { type: "table", head: ["Stage", "What you do", "Output"], rows: [
          ["Empathise", "Observe and interview users in their real setting", "Notes, photos, quotes, a journey of the task"],
          ["Define", "Turn what you saw into one sharp problem statement", "The four-part problem statement"],
          ["Ideate", "Generate many possible solutions before judging any", "15 to 30 rough ideas, then 2 or 3 chosen"],
          ["Prototype", "Make the cheapest version that a user can react to", "Paper sketch, clickable mock, a manual service"],
          ["Test", "Put the prototype in front of real users and watch", "Evidence, and a decision on what to change"]
        ] },
        { type: "h", text: "Running one loop in a week" },
        { type: "steps", items: [
          "Monday: spend half a day where the work happens. Sit at a shop counter, ride along with a field rep, watch an accountant close the month.",
          "Tuesday: write or refine your problem statement from what you saw.",
          "Wednesday: hold a 45-minute ideation session. Aim for quantity first; no criticism for the first 20 minutes. Then vote on 2 or 3 ideas.",
          "Thursday: build a prototype in a few hours, for example a Figma screen, a printed form or a WhatsApp flow you run by hand.",
          "Friday: test with 5 users. Give them a task, stay quiet, and note where they hesitate or ask questions."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Jaipur team building a tool for textile wholesalers spent a morning in a market lane and saw that orders arrived as voice notes in Hindi and Marwari-flavoured Hindi, not typed text. Their first idea, an order form, was dropped. They prototyped a staff member who converted voice notes into a printed order slip within 30 minutes. Four of five traders tested it for a week. The loop moved them from *form* to *voice-first ordering* in five days." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Skipping empathise and starting at ideate, which produces solutions to imagined problems.",
          "Building a polished prototype, which makes users polite rather than honest.",
          "Treating design thinking as a one-day offsite instead of a weekly habit.",
          "Testing with colleagues instead of real users."
        ] },
        { type: "callout", tone: "india", title: "Indian context", text: "In many Indian SMBs the decision-maker is not the daily user. The owner pays, but the munim, the store manager or the owner's son does the work. Empathise with both, and test the prototype with the person who will actually touch it." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Book half a day to observe one customer doing the task your problem statement describes. Write down three things you did not expect. Use them to revise your statement." }
      ],
      takeaways: [
        "Empathise, define, ideate, prototype, test, then loop again.",
        "Ideate comes after define: generate many ideas, then choose.",
        "Prototypes should be cheap and rough so users give honest reactions.",
        "Observe the real user, who is often not the buyer."
      ]
    },
    {
      title: "The evidence ladder",
      minutes: 9,
      summary: "How to rank validation evidence from weak opinions to strong commitments of time, money or reputation, and how to ask for commitments.",
      blocks: [
        { type: "p", text: "Not all evidence is equal. People are kind, busy and optimistic about their future selves. When you ask whether they would use a product, most say yes. That answer costs them nothing, so it tells you almost nothing. The evidence ladder ranks signals by what they cost the customer." },
        { type: "table", head: ["Rung", "Example", "Strength"], rows: [
          ["Opinions", "\"Great idea\", likes on a post, \"I would definitely buy\" in a survey", "Weak"],
          ["Past behaviour", "They already pay for a workaround, built a spreadsheet, or hired someone to do it", "Better"],
          ["Commitment of time", "They book a pilot slot, give two hours for onboarding, share real data", "Strong"],
          ["Commitment of reputation", "They introduce you to their boss, their association or a peer", "Strong"],
          ["Commitment of money", "A deposit, a pre-order, a signed paid pilot", "Strongest"]
        ] },
        { type: "h", text: "Why past behaviour beats opinion" },
        { type: "p", text: "Ask \"How did you handle this last month?\" instead of \"Would you use this?\" A customer who has spent ₹3,000 a month on a part-time data-entry person has proven the pain is real and given you a price anchor. A customer who says the problem is \"very important\" but has done nothing about it for three years is telling you it is not." },
        { type: "h", text: "How to ask for a commitment" },
        { type: "steps", items: [
          "Finish the conversation by summarising the problem in their words and confirming it.",
          "Offer a concrete next step that costs them something: \"Can we start a 2-week pilot on Monday with your real invoices?\"",
          "For money, offer a small, refundable deposit or a discounted pre-order: \"₹2,000 now, adjusted against the first year.\"",
          "If they hesitate, ask what would have to be true for them to say yes. That answer is valuable data.",
          "Record every response, including the no's, in the same sheet."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Lucknow team pitching a school fee-collection tool to 20 principals got 17 \"very interested\" replies (opinion), 6 principals who already paid a clerk overtime to chase fees (past behaviour), 4 who agreed to a pilot with one class (time) and 2 who paid a ₹5,000 setup deposit (money). The team reported the 2 deposits and 4 pilots as its evidence, not the 17 compliments." },
        { type: "callout", tone: "warn", title: "Common mistake", text: "Adding up rungs. Two hundred survey replies saying \"likely to buy\" do not equal five deposits. Report each rung separately and lead with the highest one you reached." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Sort your current evidence into the five rungs. Then plan one conversation this week where you ask for a commitment one rung higher than anything you have so far." }
      ],
      takeaways: [
        "Opinions are free, so they are weak evidence.",
        "Past behaviour, such as money already spent on a workaround, is better.",
        "Commitments of time, reputation or money are strongest.",
        "Always end a discovery call by asking for a concrete commitment."
      ]
    },
    {
      title: "Cheap tests that produce real evidence",
      minutes: 10,
      summary: "Six low-cost ways to test demand before building: landing page, WhatsApp catalogue, pre-order, sample batch, concierge MVP and fake-door button.",
      blocks: [
        { type: "p", text: "A cheap test is any experiment that produces evidence from real behaviour at a fraction of the cost of building the product. The goal is to climb the evidence ladder in days, not months. Choose the test that matches your product type and the question you most need answered." },
        { type: "table", head: ["Test", "How it works", "Best for", "What it measures"], rows: [
          ["Landing page", "One page describing the offer with a sign-up or \"request a demo\" button", "Software, services", "Visit to sign-up rate"],
          ["WhatsApp catalogue", "List the product in a WhatsApp Business catalogue and share it with target groups", "Goods, D2C, local services", "Enquiries and orders per share"],
          ["Pre-order", "Take payment, often by UPI, before the product is ready, with a clear delivery date", "Goods, courses, hardware", "Willingness to pay now"],
          ["Sample batch", "Make a small run, for example 200 units, and sell through 3 to 5 outlets", "FMCG, food, apparel", "Sell-through and repeat orders"],
          ["Concierge MVP", "Deliver the outcome by hand, with people and spreadsheets, as if it were the product", "Services, B2B software", "Whether the outcome is valued and paid for"],
          ["Fake-door button", "Add a button for a feature not yet built; clicks show a \"coming soon, join the list\" message", "Existing products", "Interest, by counting clicks"]
        ] },
        { type: "h", text: "Running a cheap test well" },
        { type: "steps", items: [
          "Write the one question the test must answer, for example \"Will clinic owners pay ₹999 a month for after-hours booking?\"",
          "Pick the cheapest test that answers it with behaviour, not opinion.",
          "Decide the traffic source in advance: a WhatsApp group, a distributor's retailer list, ₹5,000 of ads, or 50 direct messages.",
          "Set the pass mark before you start (lesson 7).",
          "Run for a fixed period, usually 7 days, without changing the offer midway.",
          "Record the numbers and decide: build, change or stop."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kochi spice brand wanted to test a ₹499 monthly subscription box. Instead of building a subscription website, it shared a WhatsApp catalogue item with 400 past buyers and asked for UPI pre-payment for the first box. Across 7 days, 31 customers paid. The pass mark had been 20. The team then invested in proper subscription billing, knowing demand existed." },
        { type: "callout", tone: "warn", title: "Be honest with test customers", text: "A fake door or pre-order must not mislead. Tell users plainly that the feature is coming soon, give a delivery date for pre-orders, and refund promptly if you do not proceed. Check that your payment and refund process follows current consumer protection and payment rules (verify)." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Building a beautiful landing page and then sending no traffic to it.",
          "Changing the price or offer halfway, which makes the result unreadable.",
          "Counting visits or likes instead of the action that matters: sign-ups, payments, orders."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Choose one cheap test from the table for your top problem. Write the question it answers, the traffic source and the metric you will count. This becomes practical task 3." }
      ],
      takeaways: [
        "Cheap tests replace opinion with behaviour in days.",
        "Match the test to your product: pre-order for goods, concierge for services.",
        "A fake door measures interest by counting clicks on a feature not yet built.",
        "Traffic and a fixed offer matter as much as the test itself."
      ]
    },
    {
      title: "Bottom-up market sizing",
      minutes: 10,
      summary: "How to size a market from reachable customers, expected adoption and annual price, instead of top-down \"1% of India\" claims.",
      blocks: [
        { type: "p", text: "Pitch decks often say \"India has 6 crore MSMEs; if we get just 1%, we will have 6 lakh customers.\" This is top-down sizing, and it tells nobody anything. It does not say who you can reach, why they would buy, or what they would pay. Bottom-up sizing builds the number from things you can check." },
        { type: "callout", tone: "india", title: "The formula", text: "**Bottom-up market = reachable target customers × expected adoption × annual price.** Each term needs a source you can name." },
        { type: "h", text: "Building each term" },
        { type: "list", items: [
          "**Reachable target customers**: the businesses or people who match your problem statement *and* that you can actually reach through a channel you have, such as a distributor list, an association directory, a marketplace or a sales team in that city.",
          "**Expected adoption**: the share likely to buy within a set period, ideally taken from your own cheap test or pilot conversion, not a hopeful guess.",
          "**Annual price**: what one customer would pay in a year, based on willingness-to-pay conversations or the cost of today's workaround."
        ] },
        { type: "steps", items: [
          "Pick one segment and one geography. Do not size \"India\" first.",
          "Count reachable customers from a list you can name: a trade association, GST-registered businesses in a category from a data vendor, a distributor's retailer list, or a manual count.",
          "Use your test or pilot results to set adoption. If you have none yet, use a conservative range and label it as an assumption.",
          "Set the annual price from your interviews.",
          "Multiply, then repeat for a second city to see how the number changes.",
          "Write down every assumption next to the number."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a clinic booking tool sizes two cities. **Pune**: the team counts about 1,200 single-site physiotherapy and dental clinics it can reach through two equipment distributors. Its landing page test converted 6% of contacted clinics to demos, and it assumes 1 in 3 demos converts, so adoption is about 2%. Annual price is ₹12,000. Pune = 1,200 × 2% × ₹12,000 = **₹2,88,000** a year. **Nashik**: 300 reachable clinics × 2% × ₹9,000 (lower price expected) = **₹54,000** a year. Small numbers, but real ones. They show the team needs more segments or a higher price before this is a business." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Using total customers instead of reachable ones; taking adoption from a global report; using a monthly price as if it were annual; and hiding the assumptions. A sizing nobody can challenge is a sizing nobody should trust." },
        { type: "p", text: "Bottom-up sizing is also a planning tool. If the number is too small, you can see which lever to pull: reach more customers through a new channel, raise adoption with a better offer, or raise the price by solving a costlier problem." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a bottom-up sizing for one segment in one metro and one tier 2 city, with a source for each term. This is practical task 2." }
      ],
      takeaways: [
        "Bottom-up = reachable customers × expected adoption × annual price.",
        "\"1% of India\" is not sizing; it skips reach, reason and price.",
        "Take adoption from your own tests wherever possible.",
        "Size city by city and write every assumption down."
      ]
    },
    {
      title: "Set the pass mark first",
      minutes: 8,
      summary: "Why every validation test needs a numeric pass mark written before it starts, and how to choose one.",
      blocks: [
        { type: "p", text: "If you run a test without deciding in advance what counts as success, almost any result can be read as encouraging. Twelve sign-ups becomes \"strong early interest\". One paid pilot becomes \"a lighthouse customer\". This is not dishonesty; it is how human beings protect ideas they care about. A pass mark set before the test removes that temptation." },
        { type: "h", text: "What a good pass mark looks like" },
        { type: "list", items: [
          "It is a number tied to behaviour: sign-ups, payments, pilot slots, repeat orders.",
          "It has a denominator: \"30 sign-ups from 500 visits\", \"3 paid pilots from 15 demos\".",
          "It has a time limit, usually 7 to 14 days.",
          "It links to a decision: pass means build, near-miss means change, fail means stop.",
          "It is written down and shared with your manager or cohort before the test starts."
        ] },
        { type: "h", text: "Choosing the number" },
        { type: "steps", items: [
          "Work backwards from what the business needs. If you need 100 paying customers in a year and can run 1,500 demos, you need roughly a 7% demo-to-paid rate.",
          "Check that the pass mark, if hit, would make the bottom-up sizing worthwhile.",
          "Set a fail line as well as a pass line. The zone between them means \"change something and retest\".",
          "Write the rule in one sentence and post it in your cohort channel."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bhopal ed-tech team tests a ₹2,499 weekend coding course for school students. Before launch it writes: \"**Pass**: 25 paid enrolments from 600 landing page visits in 7 days (about 4%). **Fail**: fewer than 10. **Between 10 and 24**: change the price or the message and retest once.\" After 7 days: 640 visits, 14 enrolments. The result falls in the middle zone, so the team tests a ₹1,799 price the next week, as agreed, instead of claiming success or giving up." },
        { type: "table", head: ["Result", "Decision", "Next step"], rows: [
          ["At or above pass mark", "Build", "Plan the MVP (A2)"],
          ["Between fail line and pass mark", "Change", "Change one variable and retest"],
          ["Below fail line", "Stop", "Return to your pain sheet and pick another problem"]
        ] },
        { type: "callout", tone: "warn", title: "Common mistake", text: "Moving the pass mark after seeing results. If you discover the pass mark was unrealistic, note it, set a new one and run a fresh test. Never relabel the old result." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Before you start practical task 3, write your pass line, fail line, time limit and decision rule in one sentence. Post it to your cohort channel. Report the result against it on Friday." }
      ],
      takeaways: [
        "Set the pass mark before the test so no result can be read as success afterwards.",
        "A pass mark has a number, a denominator and a time limit.",
        "Use a pass line and a fail line; the middle means change and retest.",
        "Link each result to a decision: build, change or stop."
      ]
    }
  ]
});
