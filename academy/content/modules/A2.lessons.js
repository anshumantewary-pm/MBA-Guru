Academy.add("A2", "lessons", {
  lessons: [
    {
      title: "MVP: the smallest version that solves the core problem",
      minutes: 9,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List every feature idea for your product and sort them into must-have, nice-to-have and not-now. For each must-have, write one sentence on why the core problem fails without it. This is practical task 1." }
      ],
      takeaways: [
        "An MVP is minimum in scope but must be viable in quality.",
        "Judge every feature against the validated problem statement.",
        "Ask whether a manual step can replace a feature for early customers.",
        "Write down why each not-now item is parked."
      ]
    },
    {
      title: "RICE scoring",
      minutes: 10,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Score 10 backlog items with RICE in a sheet. Show the working for each. Pick the top 3 and prepare a two-minute defence of each for the cohort. This is practical task 2." }
      ],
      takeaways: [
        "RICE = (Reach × Impact × Confidence) ÷ Effort.",
        "Use fixed scales for impact and confidence so scores are comparable.",
        "Low effort and high confidence can beat a big, uncertain idea.",
        "The score starts the debate; a written reason is needed to overrule it."
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
      ]
    },
    {
      title: "MoSCoW for a single release",
      minutes: 8,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your next release and sort its items into must, should, could and won't. Check that musts fit in about 60% of capacity. Share the won't list with your sales counterpart and note their response." }
      ],
      takeaways: [
        "MoSCoW scopes one release: must, should, could, won't.",
        "Keep musts to about 60% of capacity to leave a buffer.",
        "The won't list is as important as the must list.",
        "Use it to say no to custom asks in writing, with a review date."
      ]
    },
    {
      title: "Outcome roadmaps: now, next, later",
      minutes: 9,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft a one-page now, next, later roadmap for your product with no more than 3 outcomes per horizon, each with a metric. Show it to a sales colleague and ask them to explain it back to you." }
      ],
      takeaways: [
        "A now, next, later roadmap shows the order and priority of outcomes.",
        "Only the now horizon carries firm dates.",
        "Outcomes describe a change in behaviour or results; features are one way to get there.",
        "Review monthly so the roadmap stays trusted."
      ]
    },
    {
      title: "The one-page PRD",
      minutes: 10,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write a one-page PRD with 3 success metrics and at least 3 non-goals. Ask one engineer for a rough estimate and one salesperson to explain it in a minute. This is practical task 3." }
      ],
      takeaways: [
        "One page: problem, users, metrics, scope, non-goals, risks, open questions.",
        "Non-goals exist to say what this release won't build and stop scope creep.",
        "Success metrics need a number and a deadline.",
        "Engineering must be able to estimate it; sales must be able to explain it."
      ]
    },
    {
      title: "User stories with acceptance criteria",
      minutes: 9,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write 3 user stories for your top must-have feature, each with at least 3 testable acceptance criteria including one edge case. Ask an engineer whether each criterion is testable as yes or no." }
      ],
      takeaways: [
        "As a [user], I want [action] so that [outcome].",
        "An acceptance criterion is a testable condition that shows the story is done.",
        "Cover the normal case and at least one edge case.",
        "Replace vague words like \"fast\" with measurable conditions."
      ]
    },
    {
      title: "Trade-offs with engineering and design",
      minutes: 8,
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
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down one trade-off your team is facing now. Ask for options, set a 48-hour deadline, and record the decision and the reason in your PRD's open questions section." }
      ],
      takeaways: [
        "Cut scope, not quality: reliability is a basic need.",
        "Simplify the solution before moving dates or adding people.",
        "Time-box decisions to 24 to 48 hours and record the reasoning.",
        "Tell sales and support the same day when scope changes."
      ]
    }
  ]
});
