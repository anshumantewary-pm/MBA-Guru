Academy.add("A2", "lessons", {
  lessons: [
    {
      title: "MVP: the smallest version that solves the core problem",
      minutes: 14,
      summary: "How to define a minimum viable product by sorting features into must-have, nice-to-have and not-now against the validated problem.",
      blocks: [
        { type: "p", text: "A minimum viable product is the smallest version of your product that solves the core problem well enough that a real customer will use it, and ideally pay for it. *Minimum* means you leave out everything that does not serve that core problem. *Viable* means what remains must actually work. A buggy, half-finished product is not an MVP; it is a bad product." },
        { type: "p", text: "Your A1 problem brief is the filter. Every feature is judged by one question: does the person in the problem statement need this to get rid of the pain, at the moment it happens, better than today's workaround?" },
        { type: "h", text: "Sorting features into three buckets" },
        { type: "table", head: ["Bucket", "Test", "What happens to it"], rows: [
          ["Must-have", "Without it, the core problem is not solved or the customer cannot use the product at all", "Goes into the MVP"],
          ["Nice-to-have", "Makes the product better, faster or nicer, but the problem is solved without it", "Backlog, scored later with RICE"],
          ["Not-now", "Serves a different segment, a future problem, or an internal wish", "Parked, with a reason written down"]
        ] },
        { type: "steps", items: [
          "List every feature anyone has suggested: customers, sales, founders, engineers.",
          "Write the core job in one line from your problem statement.",
          "For each feature, ask: \"If we remove this, can the customer still get the job done?\" If yes, it is not a must-have.",
          "Challenge each must-have once more: can a manual step or a simple workaround replace it for the first 50 customers?",
          "Review the list with one pilot customer and one engineer.",
          "Freeze the must-have list for this release."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Surat team building a collections tool for textile traders lists 18 features. The core job is \"get credit customers to pay on time without awkward phone calls\". Must-haves: upload a customer list, send scheduled WhatsApp reminders with the amount due, and a UPI payment link. Nice-to-haves: a dashboard, Tally sync, multiple languages. Not-now: inventory, a mobile app for staff, a credit-scoring model. Tally sync looks essential, but for the first 30 traders a CSV export from Tally does the job, so it moves to nice-to-have. The MVP shrinks from 18 features to 4." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Treating every request from a large prospect as a must-have.",
          "Including features because a competitor has them, not because your customer needs them.",
          "Cutting quality instead of scope, so the 4 features you ship do not work reliably.",
          "Forgetting the non-product essentials: onboarding, billing, a way to get help."
        ] },
        { type: "h", text: "Going deeper: the Double Pareto and the One Thing" },
        { type: "p", text: "The 80/20 rule says about 20% of features deliver about 80% of the value. Apply it a second time to that top 20% and you get the **Double Pareto**: roughly 4% of items, about 1 in 25, deliver about 64% of the value. In a backlog of 50 ideas, two items probably matter more than the other 48 combined. That is why an MVP is not \"version 1 with fewer features\". It is a deliberate bet on the one or two things that carry most of the value." },
        { type: "p", text: "Strong companies can usually say their **One Thing** in one line of business value, with no technology in it. Southwest Airlines built three decades of industry-beating returns on being the low-fare airline: one aircraft type, no meals, no assigned seats. Google's core is being one search away from the customer. Your MVP needs the same kind of sentence, written as *who wants what, in order to do why*." },
        { type: "table", head: ["Question", "Why it helps", "Example answer"], rows: [
          [
            "If we could ship only one thing, what would it be?",
            "Forces the One Thing into the open",
            "Scheduled WhatsApp payment reminders"
          ],
          [
            "What could we reuse instead of building?",
            "Saves your one \"miracle\" for the hard part",
            "Use an existing UPI payment-link provider"
          ],
          [
            "Which good idea will we reject?",
            "Keeps scope tight around a single job",
            "Credit scoring of customers, for later"
          ],
          [
            "What would a quick, rough test look like?",
            "Proves value before polish",
            "Reminders sent by hand from a sheet for two weeks"
          ]
        ] },
        { type: "case", label: "Case study · from Agile practice", title: "One objective, two miracles, three epics", situation: "In the 1990s NASA's \"Faster, Better, Cheaper\" programme had to fly missions for a fraction of earlier budgets. The Stardust mission was asked to catch comet dust and bring it back to Earth.", action: "The project manager ran it on one objective: return at least 1,000 comet particles. Only two parts were genuinely new, the aerogel collector and the return capsule. Everything else was reused from earlier missions: a radio from a Mars lander, a camera design from Voyager, a computer from Mars Pathfinder. The epics were just three: reach the comet, collect the particles, come home.", result: "As taught in the University of Maryland Agile course, Stardust finished under its $150M budget and returned about twice the expected data. Reused parts had spare capacity, which later let the craft photograph a second comet.", lesson: "Limit each release to one objective, at most two hard new problems, and three must-have epics. Reuse everything else. The constraint is what makes the MVP fast." },
        { type: "callout", tone: "india", title: "India note", text: "Large prospects in India often ask for a long feature list as a condition of the first order. Write your One Thing on the first page of every proposal. It gives sales a polite reason to say \"that comes in phase two\" and keeps the MVP from turning into a custom project." },
        { type: "checklist", title: "Your MVP is ready to build when", items: [
          "You can state its One Thing as who wants what, in order to do why, with no technology in the sentence.",
          "It has one objective, no more than two genuinely new hard problems, and three or fewer must-have epics.",
          "Every must-have has a one-line reason tied to the core job.",
          "You have written down at least three good ideas you are rejecting for now."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List every feature idea for your product and sort them into must-have, nice-to-have and not-now. For each must-have, write one sentence on why the core problem fails without it. This is practical task 1." }
      ],
      takeaways: [
        "An MVP is minimum in scope but must be viable in quality.",
        "Judge every feature against the validated problem statement.",
        "Ask whether a manual step can replace a feature for early customers.",
        "Write down why each not-now item is parked."
      ],
      selfCheck: [
        "In a backlog of 50 ideas, roughly how many carry most of the value, and why?",
        "State your product's One Thing as who wants what, in order to do why.",
        "Which part of your MVP could you reuse instead of building?"
      ]
    },
    {
      title: "RICE scoring",
      minutes: 14,
      summary: "How to score backlog items with RICE, (Reach × Impact × Confidence) ÷ Effort, to compare very different ideas on one scale.",
      blocks: [
        { type: "p", text: "Once the MVP is defined, the backlog fills up fast: customer requests, sales asks, technical debt, ideas from the founder. RICE gives you one number per item so you can compare a small fix with a big new feature without shouting. It does not make the decision for you, but it makes your reasoning visible and open to challenge." },
        { type: "callout", tone: "india", title: "The formula", text: "**RICE score = (Reach × Impact × Confidence) ÷ Effort**" },
        { type: "table", head: ["Factor", "Meaning", "Typical scale"], rows: [
          ["Reach", "How many customers or users the item affects in a set period, such as a quarter", "A count: 200 users, 2,000 users"],
          ["Impact", "How much it moves the goal for each person reached", "3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal"],
          ["Confidence", "How sure you are about reach and impact, based on evidence", "100% = data, 80% = good signals, 50% = a hunch"],
          ["Effort", "Total work across product, design and engineering", "Person-months (or person-weeks)"]
        ] },
        { type: "h", text: "Scoring a backlog" },
        { type: "steps", items: [
          "Agree the goal the scores relate to, for example \"increase paid activations this quarter\".",
          "Fix the time period for reach, usually one quarter.",
          "Estimate reach from data: active users, pipeline, support ticket counts.",
          "Score impact using the fixed scale, not free numbers.",
          "Set confidence honestly. Use 50% for anything without evidence.",
          "Ask engineering for effort in person-months.",
          "Calculate, sort and then discuss the top items. Overrule the order only with a written reason."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Hyderabad HR software team scores three items for one quarter. **Payslips on WhatsApp**: reach 3,000 employees, impact 1, confidence 80%, effort 2 → (3,000 × 1 × 0.8) ÷ 2 = **1,200**. **Hindi interface**: reach 1,500, impact 2, confidence 50%, effort 3 → (1,500 × 2 × 0.5) ÷ 3 = **500**. **Bulk attendance upload**: reach 800, impact 3, confidence 100%, effort 1 → (800 × 3 × 1) ÷ 1 = **2,400**. The smallest-sounding item wins because it is cheap, certain and high-impact for the people it reaches." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Mixing time periods for reach; inflating impact for pet projects; setting confidence at 100% without data; forgetting design and testing in effort; and treating the score as final instead of as the start of a conversation." },
        { type: "p", text: "RICE works best when the same group scores the whole backlog in one sitting, so the scales stay consistent. Re-score each quarter, because reach and confidence change as you learn." },
        { type: "h", text: "Going deeper: put a price on delay" },
        { type: "p", text: "RICE compares items by value per unit of effort. It quietly assumes value is the same whenever you ship. Often it is not. **Cost of delay** is the value you lose for every week an item is not live: revenue not earned, cost not saved, customers lost to a rival or a deadline missed. When cost of delay is high, being fast is worth paying for." },
        { type: "p", text: "The Agile course uses an AmazonFresh warehouse to make the point. It estimated each day of delay at roughly $300K in lost profit plus about $164K in extra labour. At that rate it would be rational to pay up to twice the build cost to open in half the time. The same logic works at any scale, in rupees." },
        { type: "table", head: ["Item", "Value per week live", "Effort (weeks)", "Cost of delay ÷ effort", "Order"], rows: [
          [
            "GST e-invoice support (deadline in 6 weeks)",
            "₹4,00,000 at risk",
            "4",
            "1,00,000",
            "**1st**"
          ],
          ["WhatsApp payslips", "₹60,000", "2", "30,000", "2nd"],
          ["Hindi interface", "₹45,000", "3", "15,000", "3rd"],
          ["New analytics dashboard", "₹20,000", "4", "5,000", "4th"]
        ] },
        { type: "p", text: "Dividing cost of delay by effort (sometimes called CD3, or weighted shortest job first) puts short, urgent, valuable items first. Use it alongside RICE when deadlines, compliance dates or seasonal peaks such as Diwali are involved, because RICE alone will not see the cliff." },
        { type: "case", label: "Case study", title: "When the cheaper option costs more", situation: "An illustrative Jaipur travel-booking startup had to choose between building its own wedding-season booking engine (14 weeks, ₹18 lakh) and licensing one and customising it (5 weeks, ₹26 lakh).", action: "The PM estimated the cost of delay: each week the engine was not live in October and November meant about ₹3 lakh of lost bookings. Nine extra weeks of building in-house would cost about ₹27 lakh in lost bookings.", result: "Licensing was ₹8 lakh more expensive on paper but about ₹19 lakh better overall. Leadership approved it in one meeting, because the trade-off was in rupees, not opinions.", lesson: "When someone argues for the lowest-cost option, ask what a week of delay costs. Lost benefits usually exceed the extra cost of speed." },
        { type: "template", title: "Cost-of-delay estimate", lines: [
          "Item: ________________________",
          "Value per week once live: ₹______ (revenue gained / cost saved / risk avoided)",
          "Is there a cliff? (deadline, season, compliance date): ________",
          "Effort: ___ weeks",
          "Cost of delay ÷ effort = ______",
          "Confidence in the value estimate: low / medium / high, because ________"
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Score 10 backlog items with RICE in a sheet. Show the working for each. Pick the top 3 and prepare a two-minute defence of each for the cohort. This is practical task 2." }
      ],
      takeaways: [
        "RICE = (Reach × Impact × Confidence) ÷ Effort.",
        "Use fixed scales for impact and confidence so scores are comparable.",
        "Low effort and high confidence can beat a big, uncertain idea.",
        "The score starts the debate; a written reason is needed to overrule it."
      ],
      selfCheck: [
        "When does cost of delay change the order RICE gives you?",
        "Estimate the weekly cost of delay for your top backlog item.",
        "Why is the lowest-cost option often not the cheapest one?"
      ]
    },
    {
      title: "The Kano model",
      minutes: 9,
      summary: "How to classify features as basic needs, performance features or delighters, and why each type needs different treatment.",
      blocks: [
        { type: "p", text: "Customers do not value all features in the same way. The Kano model sorts features by how satisfaction changes when a feature is present, absent or improved. It helps you avoid two traps: over-investing in things customers take for granted, and ignoring the small surprises that make people talk about you." },
        { type: "table", head: ["Type", "When absent", "When present", "Example for a billing app"], rows: [
          ["Basic need", "Strong dissatisfaction; customer may leave", "No extra delight; simply expected", "GST-compliant invoice format, data not lost"],
          ["Performance", "Less satisfied", "More is better, roughly in proportion", "Speed of creating an invoice, number of payment options"],
          ["Delighter", "No complaint; nobody asked for it", "Pleasant surprise that builds loyalty", "Auto-reminder that thanks the customer when they pay by UPI"]
        ] },
        { type: "p", text: "Basic needs are table stakes. Get them wrong and nothing else matters, but polishing them further earns little. Performance features are where you compete: faster, cheaper, more. Delighters cost nothing to omit, but when present they create word of mouth. Over time, delighters become expected and slide down into basic needs." },
        { type: "h", text: "How to classify your features" },
        { type: "steps", items: [
          "List 10 to 15 features for your product.",
          "For each, ask 5 to 10 customers two questions: \"How would you feel if this feature were present?\" and \"How would you feel if it were absent?\"",
          "Offer the same answer choices each time: I like it, I expect it, I am neutral, I can live with it, I dislike it.",
          "Expected when present plus dislike when absent suggests a basic need. Like when present plus dislike when absent suggests performance. Like when present plus neutral when absent suggests a delighter.",
          "Tally the most common category for each feature."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chandigarh clinic software team surveys 8 doctors. Prescription printing is expected by all 8 (basic). Appointment speed and number of reminder channels scale with satisfaction (performance). A WhatsApp message to the patient on their birthday was never requested, but 6 of 8 doctors said they would love it (delighter). The team ships printing to a reliable standard, invests in speed, and adds the birthday message because it is cheap." },
        { type: "h", text: "Using Kano with your MVP" },
        { type: "list", items: [
          "All basic needs belong in the must-have list, even if they feel boring.",
          "Pick one or two performance features to be clearly better at than the workaround.",
          "Add at most one cheap delighter to the MVP; save the rest for later releases.",
          "Re-check every year, because yesterday's delighter becomes today's basic need."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your MVP list and label each feature basic, performance or delighter. Check that every basic need is a must-have and that you know which performance feature will beat today's workaround." }
      ],
      takeaways: [
        "Basic needs are expected; missing them causes strong dissatisfaction.",
        "Performance features give more satisfaction the better they get.",
        "Delighters are unexpected, please when present and cost nothing when absent.",
        "Delighters fade into basic needs over time."
      ],
      selfCheck: [
        "Which of your basic needs is weakest today?",
        "Which performance feature will beat the buyer's current workaround?",
        "Name a delighter in your category that has become a basic need."
      ]
    },
    {
      title: "MoSCoW for a single release",
      minutes: 13,
      summary: "How to use must, should, could and won't to agree the scope of one release with engineering, sales and leadership.",
      blocks: [
        { type: "p", text: "RICE ranks a long backlog. MoSCoW answers a narrower question: what goes into *this* release, with *this* team and *this* deadline? It is a negotiation tool. Everyone can see what is promised, what is hoped for and what has been explicitly ruled out." },
        { type: "table", head: ["Category", "Meaning", "Guide"], rows: [
          ["Must", "The release fails without it", "Keep to roughly 60% of available effort so there is buffer"],
          ["Should", "Important and expected, but the release still works without it", "Delivered if time allows; first to slip to the next release"],
          ["Could", "Desirable, small, low risk", "Only if everything above is done"],
          ["Won't (this time)", "Agreed to be out of this release", "Written down so nobody expects it"]
        ] },
        { type: "h", text: "Running a MoSCoW session" },
        { type: "steps", items: [
          "State the release goal in one line and the fixed date or capacity.",
          "Bring the top RICE items and any committed customer asks.",
          "Place each item in one category. Must items need a reason tied to the release goal.",
          "Add up effort for the musts. If it exceeds about 60% of capacity, demote items until it fits.",
          "Read the won't list aloud and get sales and leadership to agree it.",
          "Share the final list in writing the same day."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Bengaluru logistics startup has 10 person-weeks for a release aimed at \"first 20 paying fleet owners\". Musts (6 weeks): driver app check-in, trip log, monthly PDF report. Shoulds (3 weeks): fuel expense entry, Kannada and Tamil labels. Coulds (1 week): dark mode. Won't: GPS hardware integration, which a large prospect wants but needs 8 weeks alone. Sales agrees to tell that prospect it is planned for a later release rather than promise it now." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Marking everything as must; leaving the won't list empty; letting a single customer's demand jump straight into must without checking the release goal; and treating should as a promise." },
        { type: "callout", tone: "india", title: "Indian context", text: "In many Indian B2B sales, a senior buyer will ask for a custom feature as a condition of the deal. MoSCoW gives the PM and the sales manager a shared, written place to say \"won't this release\" politely, with a date for review, instead of a vague yes." },
        { type: "h", text: "Going deeper: commit only what you can finish in a bad week" },
        { type: "p", text: "Most teams pad every estimate to feel safe. Asked on Monday for a two-day job, people say \"Friday\". Padding then gets used up through late starts and gold-plating, so the safety disappears. The Agile course suggests a different deal: estimate at **50/50** (the duration you are as likely to beat as to miss), commit only the Musts you could finish even in a bad case, and fill the rest of the capacity with Should and Could items as stretch work." },
        { type: "table", head: ["Approach", "What gets promised", "Typical result"], rows: [
          [
            "Padded estimates, everything promised",
            "4 items, each padded about 2x",
            "4 items, often late, buffer used up by Student Syndrome"
          ],
          [
            "50/50 estimates, Musts committed, stretch backlog",
            "Musts guaranteed, Shoulds and Coulds as stretch",
            "Musts on time, plus about 2 extra stretch items: roughly 6 for the price of 4"
          ]
        ] },
        { type: "p", text: "Scope becomes the buffer instead of time. The Musts are safe, and customers usually get some Shoulds and Coulds as a bonus rather than a broken promise. Two more rules make it work: always open Musts first, and record Won't items in the backlog with a reason, so the same debate does not come back every week." },
        { type: "callout", tone: "warn", title: "MoSCoW at release level", text: "Use MoSCoW inside a sprint or a single release. For a whole roadmap or a large programme, no epic should be in plan unless it is essential to the objective. A roadmap full of Shoulds is a sign that the One Thing is not clear." },
        { type: "dialogue", title: "Saying it to a sales manager", lines: [
          { who: "Sales", say: "The client needs the Tamil invoice format in this release, or they won't sign." },
          { who: "PM", say: "Understood. Our Musts are committed, so the Tamil format can go in as a Should. If the sprint goes normally, it ships; if something breaks, it ships two weeks later." },
          { who: "Sales", say: "Can't you just promise it?" },
          { who: "PM", say: "I'd rather promise what I am sure of and over-deliver. Can we tell them it is planned for this release, with a firm date of the next one at the latest?" }
        ], note: "The PM protects the Musts, gives the request a fair chance as stretch work, and offers sales a date they can safely promise." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your next release and sort its items into must, should, could and won't. Check that musts fit in about 60% of capacity. Share the won't list with your sales counterpart and note their response." }
      ],
      takeaways: [
        "MoSCoW scopes one release: must, should, could, won't.",
        "Keep musts to about 60% of capacity to leave a buffer.",
        "The won't list is as important as the must list.",
        "Use it to say no to custom asks in writing, with a review date."
      ],
      selfCheck: [
        "What is a 50/50 estimate, and why does padding usually get used up?",
        "Why commit only the Musts you could finish in a bad week?",
        "Why record Won't items instead of deleting them?"
      ]
    },
    {
      title: "Outcome roadmaps: now, next, later",
      minutes: 14,
      summary: "How to build a roadmap around outcomes and themes in three horizons instead of a list of features with dates.",
      blocks: [
        { type: "p", text: "A traditional roadmap is a Gantt chart of features with dates. It looks precise, but most of the dates are guesses, and it invites the wrong conversation: \"Why is feature X late?\" instead of \"Are customers getting more value?\" An outcome roadmap shows the order and priority of the outcomes you are pursuing, grouped into three horizons." },
        { type: "table", head: ["Horizon", "Certainty", "What it contains"], rows: [
          ["Now", "High: in progress or about to start", "Specific outcomes, committed work, often with dates"],
          ["Next", "Medium: likely in the coming quarter or two", "Outcomes and themes, with candidate solutions"],
          ["Later", "Low: direction, not commitment", "Themes and problems to explore"]
        ] },
        { type: "h", text: "Outcomes, not features" },
        { type: "p", text: "An outcome is a change in customer behaviour or business result: \"Traders collect 20% more of overdue credit within 30 days\". A theme groups related outcomes: \"Faster collections\". A feature is one possible way to achieve the outcome: \"WhatsApp reminders\". Putting outcomes on the roadmap leaves the team free to find the best solution." },
        { type: "steps", items: [
          "List the 3 to 5 outcomes that matter most for the next year, each with a metric.",
          "Group them into themes.",
          "Place each outcome in now, next or later based on priority and dependency.",
          "Under now, list the committed work and dates. Under next and later, list problems and candidate ideas only.",
          "Add one line per item on why it is in that position.",
          "Review the roadmap monthly and move items as evidence changes."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kolkata school-fee platform's roadmap. **Now**: \"Parents pay on time\": reduce late fee payments from an estimated 35% to 20% (WhatsApp reminders with UPI links, live in 6 weeks). **Next**: \"Schools trust the numbers\": cut month-end reconciliation time for accountants by half. **Later**: \"Schools grow\": explore admissions enquiries. Sales can explain the direction to prospects without promising dates for next and later." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Putting dates on everything; writing features where outcomes should be; making later a dumping ground for every idea; and never updating the roadmap, so people stop trusting it." },
        { type: "h", text: "Going deeper: rolling-wave planning" },
        { type: "p", text: "Now, next and later is a simple version of **rolling-wave planning**: the further out the horizon, the less detail you plan. The Agile course breaks this into four levels. Each level has its own planning artefact, and everything above the task level is written in business terms, not technical ones." },
        { type: "table", head: ["Level", "Horizon and detail", "Artefact", "Example for a fee-collection product"], rows: [
          [
            "Capability (theme)",
            "Furthest out, least detail; more than two releases ahead",
            "Roadmap",
            "Schools collect fees without chasing parents"
          ],
          [
            "Feature (epic)",
            "About two releases out; valuable on its own; fits in 1 to 2 sprints",
            "Release plan",
            "Automated WhatsApp fee reminders"
          ],
          [
            "Story",
            "Next few sprints; still in business terms",
            "Look-ahead plan",
            "As a parent, I can pay from the reminder in two taps"
          ],
          [
            "Task",
            "Current sprint only; technical detail starts here",
            "Sprint task list",
            "Build the UPI deep link; test on low-end Android phones"
          ]
        ] },
        { type: "p", text: "A useful check: if you are describing *how* something works above the task level, you have slipped into specification too early. Leave the how to the team, close to the work. The exception is **enablers**, technical foundations such as automated testing or a new payment gateway that future features need. Keep them few, and tie each to the capabilities it unlocks." },
        { type: "case", label: "Case study", title: "A roadmap that stopped breaking", situation: "An illustrative Kochi edtech team kept a 12-month Gantt roadmap with 60 dated features. Every month half the dates moved, and sales stopped trusting it.", action: "The PM rebuilt it as four capabilities for the year, eight features for the next two releases, stories only for the next three sprints, and tasks only inside the current sprint.", result: "Planning meetings shortened from half a day to under two hours, and date changes dropped to about one a month, because only near-term work carried dates.", lesson: "Plan in detail only where you have information. Detail far ahead is guesswork that has to be redone." },
        { type: "checklist", title: "Rolling-wave check", items: [
          "Capabilities and features are written as business outcomes, not technical solutions.",
          "Only the current and next sprint have stories broken into tasks.",
          "Every enabler names the capability it unlocks.",
          "The roadmap is reviewed at every release boundary."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft a one-page now, next, later roadmap for your product with no more than 3 outcomes per horizon, each with a metric. Show it to a sales colleague and ask them to explain it back to you." }
      ],
      takeaways: [
        "A now, next, later roadmap shows the order and priority of outcomes.",
        "Only the now horizon carries firm dates.",
        "Outcomes describe a change in behaviour or results; features are one way to get there.",
        "Review monthly so the roadmap stays trusted."
      ],
      selfCheck: [
        "At which level of the rolling wave does technical detail begin?",
        "What is an enabler, and how should it appear on a roadmap?",
        "Which items on your roadmap carry more detail than you have information for?"
      ]
    },
    {
      title: "The one-page PRD",
      minutes: 14,
      summary: "How to write a one-page product requirements document covering problem, users, success metrics, scope, non-goals, risks and open questions.",
      blocks: [
        { type: "p", text: "A product requirements document (PRD) tells engineering what to build and why, and tells sales what is coming and for whom. Long PRDs go unread. A one-page PRD forces clarity: if you cannot fit it on a page, you probably do not yet understand the problem well enough." },
        { type: "table", head: ["Section", "What to write", "Tip"], rows: [
          ["Problem", "The four-part problem statement from A1", "Include the cost in rupees, time or risk"],
          ["Users", "Primary user and buyer, with any secondary users", "Name the user who touches it daily"],
          ["Success metrics", "Three measurable results, with targets and a time frame", "At least one should be a customer outcome, not usage"],
          ["Scope", "The must-have features for this release", "Link to user stories"],
          ["Non-goals", "What this release will not build", "At least three; this stops scope creep"],
          ["Risks", "What could make this fail: technical, adoption, compliance", "Add one mitigation each"],
          ["Open questions", "Things not yet decided, with an owner and a date", "Close them before build starts where possible"]
        ] },
        { type: "h", text: "Writing it" },
        { type: "steps", items: [
          "Copy in your problem statement and validation result from A1.",
          "Name the users and buyer.",
          "Write three success metrics, each with a number and a deadline.",
          "Paste the must-have list from your MVP or MoSCoW session.",
          "Write at least three non-goals, especially the requests you expect to hear.",
          "List the top risks and open questions with owners.",
          "Review with an engineer (can they estimate it?) and a salesperson (can they explain it?)."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example, excerpt from a PRD for a pharmacy reorder tool in Nagpur. **Success metrics**: 30 pharmacies active within 60 days; average reorder time down from 40 minutes to under 10; 70% of pilot pharmacies still placing weekly orders after 8 weeks. **Non-goals**: no inventory valuation for accounting; no integration with distributor ERPs in this release; no iOS app; no home-delivery features. **Open question**: which three distributors will accept orders in our format? Owner: Priya, due Friday." },
        { type: "callout", tone: "warn", title: "Why non-goals matter", text: "Non-goals say what the release won't build. Without them, every meeting adds \"just one more thing\". With them, the PM can point to an agreed page." },
        { type: "h", text: "Going deeper: the charter and the Definition of Done" },
        { type: "p", text: "In Agile teams, the one-page PRD often sits alongside a **charter** agreed before work starts. The charter covers five things: the **objective** (why the work exists and its business benefit), the **stakeholders** (sponsors, customers, influencers, regulators and affected departments, and why each cares), the **constraints** (standards, interfaces, dependencies), the **risks** (political, environmental, social, technological, with mitigation) and the **Definition of Done**." },
        { type: "p", text: "The **Definition of Done (DoD)** is the agreement on what has to be true before any piece of work counts as finished: for example, approved by the product owner, reviewed by a stakeholder, tested, and documented for support and sales. The course's phrase for it is \"closing is controlling\". Without an agreed DoD, work drifts into \"almost done\" and nobody can say what has truly shipped." },
        { type: "template", title: "Definition of Done: starter version", lines: [
          "A story is done only when:",
          "[ ] All acceptance criteria pass on a working build",
          "[ ] The product owner has accepted it",
          "[ ] At least one stakeholder or pilot user has reviewed it",
          "[ ] Help text / support note written (in the languages we support)",
          "[ ] Sales and support told what changed",
          "[ ] Usage tracking added for the success metric",
          "[ ] No open critical bugs"
        ], note: "Agree this with engineering, design, sales and support before the first sprint. Change it only at a sprint boundary." },
        { type: "callout", tone: "tip", title: "Requirements are where projects fail", text: "PMI's 2018 survey, quoted in the course, lists the top causes of project failure as shifting priorities (39%), shifting objectives (37%) and inaccurate requirements (35%). A one-page PRD with a clear objective, non-goals and a DoD attacks all three." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write a one-page PRD with 3 success metrics and at least 3 non-goals. Ask one engineer for a rough estimate and one salesperson to explain it in a minute. This is practical task 3." }
      ],
      takeaways: [
        "One page: problem, users, metrics, scope, non-goals, risks, open questions.",
        "Non-goals exist to say what this release won't build and stop scope creep.",
        "Success metrics need a number and a deadline.",
        "Engineering must be able to estimate it; sales must be able to explain it."
      ],
      selfCheck: [
        "Name the five parts of a charter.",
        "What does \"closing is controlling\" mean in practice?",
        "Write one Definition of Done item your team is missing today."
      ]
    },
    {
      title: "User stories with acceptance criteria",
      minutes: 15,
      summary: "How to write user stories in the \"As a, I want, so that\" format with testable acceptance criteria that define done.",
      blocks: [
        { type: "p", text: "A user story is a small piece of value described from the user's point of view. It keeps the team focused on who benefits and why, rather than on technical tasks. Acceptance criteria turn the story into something testable: a short list of conditions that must all be true before the story counts as done." },
        { type: "callout", tone: "india", title: "The format", text: "**As a** [user], **I want** [action] **so that** [outcome]. Then list acceptance criteria, often written as: *Given* [context], *when* [action], *then* [result]." },
        { type: "h", text: "Writing good stories" },
        { type: "list", items: [
          "One user, one action, one outcome per story.",
          "Small enough to build and test within one sprint.",
          "The *so that* is a real outcome the user cares about, not a restatement of the action.",
          "Independent where possible, so stories can be reordered."
        ] },
        { type: "steps", items: [
          "Take one must-have feature from your PRD.",
          "Break it into 3 to 6 stories, each for a specific user.",
          "Write each story in the standard format.",
          "Add 3 to 5 acceptance criteria per story, covering the normal case and at least one edge case.",
          "Check each criterion can be tested with a clear yes or no.",
          "Review with the engineer and tester who will work on it."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example story: \"As a **kirana owner**, I want to **send a payment reminder to a credit customer on WhatsApp** so that **I get paid without an awkward phone call**.\" Acceptance criteria: (1) Given a customer with an amount due, when I tap Remind, then a WhatsApp message with the amount and a UPI link is sent within 10 seconds. (2) The message shows my shop name, not the app's name. (3) If the customer has no WhatsApp number, I see an option to send an SMS instead. (4) I cannot send more than one reminder to the same customer in 24 hours. (5) The reminder appears in the customer's history with date and time." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Writing technical tasks as stories (\"As a developer, I want a database table\"); vague criteria such as \"it should be fast\" or \"easy to use\"; skipping edge cases; and adding criteria mid-sprint without re-estimating." },
        { type: "p", text: "Acceptance criteria also help sales and support. They describe exactly what the product does, which prevents over-promising in demos." },
        { type: "h", text: "Going deeper: the three-part user story" },
        { type: "p", text: "The Agile course teaches a fuller version of the user story with three parts. The **value statement** is \"As a [specific role], I want [function in business terms], in order to [real why]\". The **assumptions** hold everything else: constraints, standards, non-functional needs such as speed and security, and links to earlier or later stories. The **acceptance criteria** are logical or numerical tests the product owner can run on working software. The Definition of Done is the hidden fourth part that applies to every story." },
        { type: "table", head: ["Part", "Weak", "Strong"], rows: [
          ["Who", "As a user", "As a pharmacy owner with two branches"],
          ["What", "I want to log in with username and password", "I want to access my account"],
          [
            "Why",
            "so that I can log in",
            "so that I can see today's low-stock items before the distributor calls"
          ],
          [
            "Assumption",
            "(none written)",
            "Most owners use low-end Android phones on 4G; must work in Hindi and English"
          ],
          [
            "Acceptance",
            "It should be fast",
            "Low-stock list loads in under 3 seconds on a ₹8,000 phone over 4G"
          ]
        ] },
        { type: "p", text: "The *why* is the part most often botched, usually by restating the *what*. Getting it right often changes the solution or removes the story altogether. The course gives the example of a building manager whose story was \"reduce lighting cost to meet my goal of cutting energy costs 15%\". By questioning the assumptions (lighting is 40% of energy use, areas are over-lit, each fixture has two lamps), the team found the best fix was to remove one lamp per fixture: one person, a ladder and a weekend, fully reversible." },
        { type: "h", text: "Story maps make requirements visible" },
        { type: "p", text: "A **story map** lays out the user's steps from left to right, then lines up stories under each step. It shows gaps, such as a missing \"I can tell the payment failed\" story, that a flat list hides. Sketches, paper prototypes and reference products (\"search should work like the Flipkart search bar\") do the same job: they get past vague words to something people can react to." },
        { type: "template", title: "Three-part story card", lines: [
          "VALUE: As a ______________ (specific role)",
          "       I want ______________ (function, in business terms)",
          "       in order to ______________ (the real why)",
          "ASSUMPTIONS: constraints, standards, devices, languages, links to other stories",
          "  - ________",
          "ACCEPTANCE CRITERIA: tests the PO can run on working software",
          "  1. Given ______, when ______, then ______",
          "  2. ________",
          "  3. ________ (edge case)",
          "DONE = acceptance criteria pass + team Definition of Done"
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write 3 user stories for your top must-have feature, each with at least 3 testable acceptance criteria including one edge case. Ask an engineer whether each criterion is testable as yes or no." }
      ],
      takeaways: [
        "As a [user], I want [action] so that [outcome].",
        "An acceptance criterion is a testable condition that shows the story is done.",
        "Cover the normal case and at least one edge case.",
        "Replace vague words like \"fast\" with measurable conditions."
      ],
      selfCheck: [
        "What goes in the assumptions part of a three-part story?",
        "Rewrite \"log in with username and password\" in business terms.",
        "How did questioning assumptions change the lighting story's solution?"
      ]
    },
    {
      title: "Trade-offs with engineering and design",
      minutes: 13,
      summary: "How to make trade-offs with engineering and design by cutting scope rather than quality and by time-boxing decisions.",
      blocks: [
        { type: "p", text: "Every release meets reality: the estimate was wrong, a dependency slipped, a design turned out harder than expected. The PM's job is to make the trade-off quickly and well. The rule for this module is simple: **cut scope, not quality**, and **time-box decisions** so the team does not stall." },
        { type: "h", text: "Why cut scope, not quality" },
        { type: "p", text: "Shipping fewer features that work reliably builds trust. Shipping many features that crash, lose data or confuse users destroys it, and the cost returns as support tickets, churn and rework. In the Kano model, reliability is a basic need: customers do not reward it, but they punish its absence." },
        { type: "table", head: ["Lever", "Use it?", "Example"], rows: [
          ["Cut scope", "Yes, first choice", "Ship reminders in Hindi and English now, add Marathi next release"],
          ["Simplify the solution", "Yes", "Manual CSV import instead of a live accounting integration"],
          ["Move the date", "Sometimes, if the date is not fixed by a customer or event", "Shift release by one week, tell sales immediately"],
          ["Add people", "Rarely; new people slow a late project at first", "Only for separable work"],
          ["Cut quality or testing", "No", "Skipping testing of payment links"]
        ] },
        { type: "h", text: "Time-boxing decisions" },
        { type: "steps", items: [
          "When a trade-off appears, write the decision needed in one sentence.",
          "Set a deadline for the decision, usually 24 to 48 hours.",
          "Ask engineering and design for two or three options with effort and risk.",
          "Check each option against the PRD's success metrics and non-goals.",
          "Decide by the deadline, even with incomplete information, and record why.",
          "Tell sales and support the same day if anything customer-facing changes."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: two weeks before launch, a Pune team learns that the bank's payment-link API needs 3 extra weeks of work. Options: (a) delay launch 3 weeks; (b) launch with a static UPI QR code per shop, adding dynamic links next release; (c) skip testing to hit the date. The PM time-boxes the decision to 24 hours, rejects (c), and chooses (b) because the success metric is about getting paid, which a QR code still achieves. Sales updates its demo script that afternoon." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Letting decisions drift for a week; deciding alone without engineering's options; quietly cutting testing to protect a date; and not telling sales until after a customer is disappointed." },
        { type: "h", text: "Going deeper: dissolve the conflict instead of splitting the difference" },
        { type: "p", text: "Many PM trade-offs look like a straight choice: ship faster or keep costs down, add the big client's feature or protect the roadmap. The Theory of Constraints offers a tool called the **Evaporating Cloud** (also called the Vanishing Cloud). You write one shared objective, the two needs it depends on, the two conflicting actions, and the assumption linking each action to its need. Then you attack the weakest assumption, usually by rewriting it as \"the ONLY way to get [need] is to [action]\"." },
        { type: "table", head: ["Part of the cloud", "Example"], rows: [
          ["Objective", "A profitable release"],
          ["Need B", "Keep build cost low"],
          ["Need C", "Earn revenue early"],
          ["Action for B", "Go slower with a smaller team"],
          ["Action for C", "Go faster with more people"],
          [
            "Assumption to attack",
            "\"The ONLY way to keep cost low is to go slower.\" False if each week of delay costs more than the extra people."
          ]
        ] },
        { type: "p", text: "Once the false assumption is exposed, the conflict often disappears: in the example, a faster release turns out to be the cheaper one once cost of delay is counted. Use the cloud for important decisions only, because setting it up properly takes time. When the two sides genuinely want different things, fall back on negotiation, covered in A7." },
        { type: "case", label: "Case study", title: "Custom feature or roadmap?", situation: "An illustrative Mumbai B2B SaaS firm faced a demand from its largest prospect for a custom approval workflow, which would push the roadmap back six weeks.", action: "The PM drew the cloud. The shared objective was profitable growth. The assumption under \"build it\" was \"the ONLY way to win this client is to build their exact workflow\". In a call, the PM asked what the workflow was for. The answer was audit evidence for their finance team.", result: "A two-week export of the existing approval log, in the format the auditors wanted, met the real need. The client signed, and the roadmap slipped by two weeks instead of six.", lesson: "Behind most either-or trade-offs sits one assumption nobody has checked. Ask for the why before you choose." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down one trade-off your team is facing now. Ask for options, set a 48-hour deadline, and record the decision and the reason in your PRD's open questions section." }
      ],
      takeaways: [
        "Cut scope, not quality: reliability is a basic need.",
        "Simplify the solution before moving dates or adding people.",
        "Time-box decisions to 24 to 48 hours and record the reasoning.",
        "Tell sales and support the same day when scope changes."
      ],
      selfCheck: [
        "What are the five boxes of an Evaporating Cloud?",
        "Rewrite one of your current trade-offs as \"the ONLY way to... is to...\".",
        "When should you negotiate instead of drawing a cloud?"
      ]
    },
    {
      title: "Delivery in sprints: timeboxes, estimates and WIP limits",
      minutes: 15,
      summary: "How Agile teams turn a prioritised backlog into shipped work: the Scrum roles, timeboxed sprints, Planning Poker, 50/50 estimates, WIP limits, burndowns and reviews.",
      blocks: [
        { type: "p", text: "A good MVP and roadmap still fail if delivery is chaotic. Most product teams in India now run some form of **Scrum**: short, fixed timeboxes called sprints, a prioritised backlog, and a working product increment at the end of each sprint. As a PM you usually play the **product owner** role, so you need to know how the system works and where you can help or harm it." },
        { type: "h", text: "Three roles, one team" },
        { type: "table", head: ["Role", "Owns", "Common mistake"], rows: [
          [
            "Product owner (often the PM)",
            "The backlog: what is built and in what order; the final say on requirements",
            "Being absent mid-sprint, so questions wait days"
          ],
          [
            "Scrum master",
            "The process: planning, stand-ups, reviews, retros, removing blockers",
            "Becoming a status reporter instead of a facilitator"
          ],
          [
            "Development team",
            "The results: design, build, test and close the work",
            "Splitting into individual queues instead of working as one team"
          ]
        ] },
        { type: "p", text: "There is only one product owner per backlog. The product owner has no \"downtime\" during the sprint: they talk to customers and stakeholders, answer the team's questions quickly, and accept finished stories as they are ready rather than at the end." },
        { type: "h", text: "Why timeboxes beat task deadlines" },
        { type: "p", text: "Individual task deadlines create three predictable problems. People pad estimates (often about 2x), start late because the deadline feels far away (**Student Syndrome**), and use any spare time to polish (**gold-plating**). Early finishes are lost while late finishes delay everything downstream. A sprint timebox removes deadlines inside the sprint. The team works through prioritised stories one at a time, and an early finish simply means starting the next item sooner." },
        { type: "h", text: "Planning Poker for honest estimates" },
        { type: "steps", items: [
          "Agree a scale, such as 1, 2, 3, 5, 8, 13 story points. Points are relative size (complexity, uncertainty and effort), not hours.",
          "The product owner explains one story and answers questions briefly.",
          "Everyone picks a card silently, then all reveal at the same moment.",
          "The highest and lowest estimates explain their reasoning; then everyone votes again.",
          "After two rounds, take the middle value and confirm with a quick yes or no.",
          "At the end of planning, ask for a confidence vote on the whole sprint. Anyone with a thumbs-down explains, and the team adjusts."
        ] },
        { type: "p", text: "The silent, simultaneous reveal matters. In open discussion the loudest or most senior voice wins. Planning Poker gives every voice equal weight and surfaces misunderstandings early: if one person says 2 and another says 13, they are imagining different stories." },
        { type: "h", text: "Limit work in progress" },
        { type: "p", text: "Starting many things at once feels productive but delays everything. If you split your attention across four tasks, the first one finishes about 2.5 times later than if you had done it alone, and that is before the 15 to 20 minutes it takes to refocus after each switch. A **Kanban board** with columns such as Ready, In progress, Review, Testing and Done, and a hard limit on each column, keeps the team finishing before starting. When a column is full, people help clear it instead of opening new work." },
        { type: "table", head: ["Signal", "What it usually means", "What to do"], rows: [
          [
            "Burndown flat for days, then a cliff",
            "Stories too big, or too many open at once",
            "Split stories; lower WIP limits"
          ],
          [
            "Testing column always full",
            "Testing is the bottleneck",
            "Swarm on testing; automate tests"
          ],
          [
            "Many stories 90% done at sprint end",
            "Work started but not closed",
            "Stop starting, start finishing; check the Definition of Done"
          ],
          [
            "Team happiness dropping",
            "Trouble ahead; it often dips before velocity does",
            "Raise it in the retro and find the cause"
          ]
        ] },
        { type: "case", label: "Case study", title: "Fewer things in progress, more things shipped", situation: "An illustrative Gurugram fintech team of six had 14 stories in progress on the last day of a two-week sprint and finished 3. Every stand-up ended with \"almost done\".", action: "The scrum master set WIP limits of 3 in progress and 2 in testing. The product owner sat with the team for an hour a day to accept stories as they finished.", result: "Over the next three sprints the team finished 8 to 10 stories per sprint with the same people. Bugs reported by pilot customers fell, because testing no longer piled up at the end.", lesson: "Throughput comes from finishing, not starting. A WIP limit is the cheapest productivity tool a team has." },
        { type: "h", text: "Review and retro: the most skipped, most needed events" },
        { type: "list", items: [
          "**Sprint review:** demo the real, working product to stakeholders and users. No slides. Collect feedback and decide what comes next.",
          "**Retrospective:** each person silently writes what went well and what did not, the team groups the notes, discusses, and turns the top \"we can do\" items into backlog stories with owners.",
          "Keep both short and regular. A team that skips them stops improving."
        ] },
        { type: "dialogue", title: "A stand-up that works (15 minutes, no problem-solving)", lines: [
          { who: "Scrum master", say: "Let's walk the board from the right. Anything close to done?" },
          { who: "Dev 1", say: "Reminder scheduling passed testing. It just needs product owner acceptance." },
          { who: "PM", say: "I'll check it straight after this." },
          { who: "Dev 2", say: "The UPI link story is blocked. We're waiting on the payment provider's sandbox keys." },
          { who: "Scrum master", say: "I'll chase the provider today. Dev 2, can you pair on the Hindi templates meanwhile, so we stay inside the WIP limit?" }
        ], note: "Walking the board from right to left keeps attention on finishing work. Problems get an owner and are solved after the stand-up, not during it." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Sit in on your team's next planning and stand-up. Count the stories in progress and compare with the number finished in the last sprint. Propose one WIP limit and one Definition of Done item at the next retro." }
      ],
      takeaways: [
        "The product owner owns what and in what order; the scrum master owns the process; the team owns the results.",
        "Timeboxes remove task deadlines, padding and Student Syndrome; early finishes carry forward.",
        "Planning Poker's silent, simultaneous reveal gives every voice equal weight.",
        "Limit work in progress: finishing beats starting, and multitasking delays the top priority most.",
        "Demo real software in every review, and turn retro actions into backlog stories."
      ],
      selfCheck: [
        "Why does a four-task juggle delay the most important task the most?",
        "What does a flat burndown followed by a cliff usually tell you?",
        "As product owner, what can you do mid-sprint to help the team close stories?"
      ]
    }
  ]
});
