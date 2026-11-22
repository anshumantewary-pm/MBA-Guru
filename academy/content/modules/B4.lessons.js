Academy.add("B4", "lessons", {
  lessons: [
    {
      title: "The 3-minute pitch in the buyer's words",
      minutes: 10,
      summary: "Build a short pitch around their problem, its cost, your solution, proof and the next step, using the buyer's own language.",
      blocks: [
        { type: "p", text: "After good discovery, the pitch should be short. You already know the problem, its cost and what the buyer wants. The pitch simply plays that back, shows how you close the gap and asks for the next step. **Three minutes is enough** if every sentence is about the buyer." },
        { type: "h", text: "The five-part structure" },
        { type: "steps", items: [
          "**Their problem:** restate it in their words. 'You said order errors from the sales office are causing returns every week.'",
          "**Its cost:** the number they gave you. 'You estimated that at around ₹4 lakh a month in returns and rework.'",
          "**Your solution:** only the parts that address this problem, in plain language.",
          "**Proof:** one relevant customer story, data point or reference, ideally from a similar business.",
          "**The next step:** a specific, dated ask. 'Can we set up a 10-minute demo with your finance head on Thursday?'"
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example pitch from a Nashik rep selling order-management software to a pharma distributor: \"You mentioned that about 1 in 20 orders has an error and each one costs you a return trip and an unhappy chemist, roughly ₹4 lakh a month. Our system checks every order against stock and the chemist's past orders before it is confirmed, so errors are caught at the sales office. A distributor in Aurangabad with a similar network cut errors by more than half in three months. Could we do a 10-minute demo with your finance head on Thursday, using your own order data?\" (Illustrative; customers and figures are examples.)" },
        { type: "h", text: "Why the buyer's words matter" },
        { type: "p", text: "When buyers hear their own phrases, they feel understood and recognise the problem as theirs. When they hear your jargon ('AI-powered omnichannel platform'), they have to translate, and most will not bother. Use the notes you took in discovery." },
        { type: "table", head: ["Weak pitch", "Strong pitch"], rows: [
          ["Opens with company history", "Opens with their problem"],
          ["Lists every feature", "Shows only what solves their gap"],
          ["Vague benefits ('efficiency')", "Their number in rupees"],
          ["Ends with 'Any questions?'", "Ends with a dated next step"]
        ] },
        { type: "callout", tone: "warn", title: "Watch out", text: "If you cannot fill the 'cost' part with the buyer's number, discovery is not finished. Go back and ask implication questions before pitching." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write a 3-minute pitch for one live deal using the five parts and quoting the buyer's own words from your notes. Say it aloud with a timer, cut anything over three minutes, and use it in your next meeting." }
      ],
      takeaways: [
        "A pitch after discovery should take about three minutes.",
        "Structure: their problem, its cost, your solution, proof, next step.",
        "Use the buyer's own words and numbers, not your jargon.",
        "Always end with a specific, dated next step."
      ]
    },
    {
      title: "The 10-minute tailored demo",
      minutes: 10,
      summary: "Run a short demo built on the buyer's use case: tell them what they will see, show it, then tell them what it means.",
      blocks: [
        { type: "p", text: "Most demos are tours: the rep clicks through every screen and the buyer drifts off. A tailored demo shows only what solves the buyer's problem, using their data or scenario where possible, and lasts about ten minutes. Product managers learn the same craft in module A7; sales and product should use the same approach on joint calls." },
        { type: "h", text: "The tell-show-tell structure" },
        { type: "steps", items: [
          "**Tell them what they will see:** 'I'll show you how an order from a chemist in Malegaon gets checked before it is confirmed.'",
          "**Show it on their use case:** use their product names, cities, order sizes or a realistic copy of their data.",
          "**Tell them what it means:** 'So the error your team found last week would have been flagged here, before the truck left.'",
          "Repeat for no more than three 'aha' moments.",
          "Stop early, ask what they think, and agree the next step."
        ] },
        { type: "h", text: "Preparing the demo" },
        { type: "list", items: [
          "Re-read discovery notes and pick the top three problems.",
          "Map one product moment to each problem; drop everything else.",
          "Load realistic sample data: their product names, realistic rupee amounts, their cities.",
          "Rehearse once with a colleague and time it.",
          "Have a backup (screenshots or a recording) in case the internet or the projector fails."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Hyderabad rep demoing attendance software to a security-services firm with 1,200 guards across 80 sites skipped the standard 40-minute tour. She showed three moments: a guard marking attendance with a selfie at a site in Secunderabad, the supervisor's missed-shift alert on WhatsApp, and the month-end payroll file. The demo took 11 minutes. The owner asked to run a pilot on 10 sites, the first time a demo had produced a next step on the same call." },
        { type: "callout", tone: "india", title: "India note", text: "Many demos happen on patchy connections or on a phone screen in a busy office. Keep screens simple, zoom in, and be ready to share a short recording on WhatsApp afterwards. Demo in the language the buyer is comfortable with if you can." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Showing features the buyer never mentioned.",
          "Using generic 'ABC Corp' data that makes it hard to picture.",
          "Talking through the demo without pausing for reactions.",
          "Promising roadmap features to win the moment."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For your next demo, write the three problems, the three moments that solve them, and the 'what it means' sentence for each. Load realistic data and rehearse it in under ten minutes." }
      ],
      takeaways: [
        "A tailored demo lasts about ten minutes and covers only the buyer's use case.",
        "Use tell-show-tell for each of up to three 'aha' moments.",
        "Realistic data makes it easy for buyers to picture the result.",
        "Stop early, ask for reactions, and agree the next step."
      ]
    },
    {
      title: "Proposal structure: lead with their situation",
      minutes: 11,
      summary: "Write proposals that open with the buyer's situation and the cost of doing nothing, then the solution, ROI in rupees, investment, terms and dated next steps.",
      blocks: [
        { type: "p", text: "Many proposals in India are a quotation with a cover letter: company history, team photos, a product list and a price. The buyer flips straight to the price, compares it with a competitor and asks for a discount. An **ROI-led proposal** changes what the buyer compares: not your price against theirs, but the cost of doing nothing against the return from acting." },
        { type: "h", text: "The seven sections" },
        { type: "table", head: ["Section", "What it contains", "Length"], rows: [
          ["1. Their situation", "Current state and goals, in their words", "Half a page"],
          ["2. Cost of doing nothing", "What the problem costs each month or year, in rupees", "A short paragraph and one number"],
          ["3. The solution", "What you will do, mapped to each problem", "Half a page to one page"],
          ["4. ROI in rupees", "Gain, cost, ROI and payback period", "A small table"],
          ["5. Investment", "Price, clearly broken down, with GST shown (verify current rates)", "A small table"],
          ["6. Terms", "Payment schedule, contract length, support, what is excluded", "Bullets"],
          ["7. Dated next steps", "Who does what by when, through to go-live", "A short table"]
        ] },
        { type: "h", text: "How to write it" },
        { type: "steps", items: [
          "Start from your discovery notes and gap table; copy the buyer's phrases into section 1.",
          "Calculate the cost of doing nothing using their numbers, and state any assumptions.",
          "Describe the solution only in terms of the problems in section 1.",
          "Build the ROI table (see the next lesson).",
          "Keep the investment section clean: one-time and recurring costs, taxes and payment milestones.",
          "End with a dated plan: 'PO by 15th, kick-off by 22nd, go-live by 5th of next month.'",
          "Walk the buyer through the proposal on a call instead of just emailing it."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore rep proposing a maintenance system to a spinning mill opened with: 'Unplanned machine stoppages currently cost about 120 hours of production a month. At your contribution of roughly ₹5,000 per machine-hour, that is about ₹6 lakh a month, or ₹72 lakh a year, if nothing changes.' The price of ₹18 lakh appeared on page three, after the buyer had already agreed with the cost of doing nothing." },
        { type: "callout", tone: "warn", title: "Watch out", text: "Never email a proposal cold and wait. Buyers skip to the price. Book a 20-minute call to walk through it, so they read the situation and the cost of doing nothing first." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your current proposal template and reorder it into the seven sections. Move company history to an appendix. Rewrite section 1 for one live deal using the buyer's words." }
      ],
      takeaways: [
        "Open with the buyer's situation and the cost of doing nothing, not company history.",
        "Seven sections: situation, cost of doing nothing, solution, ROI, investment, terms, dated next steps.",
        "The buyer should agree with the cost before seeing the price.",
        "Walk the buyer through the proposal on a call."
      ]
    },
    {
      title: "ROI and payback in rupees",
      minutes: 10,
      summary: "Calculate ROI as (gain − cost) ÷ cost and show the payback period, using the buyer's own numbers.",
      blocks: [
        { type: "p", text: "Finance heads and owners think in returns. If you show the return clearly and honestly, the conversation moves from 'Is this too expensive?' to 'How fast can we start?' Two numbers do most of the work." },
        { type: "h", text: "The formulas" },
        { type: "list", items: [
          "**ROI = (gain − cost) ÷ cost**, shown as a percentage.",
          "**Payback period = cost ÷ monthly gain**, shown in months."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a solution costs ₹4 lakh and saves ₹10 lakh in year one. ROI = (₹10 lakh − ₹4 lakh) ÷ ₹4 lakh = ₹6 lakh ÷ ₹4 lakh = 150%. Monthly saving is about ₹10 lakh ÷ 12 = ₹83,333, so payback = ₹4 lakh ÷ ₹83,333, about 4.8 months. A common mistake is to divide gain by cost (10 ÷ 4 = 250%), which ignores that the cost must be recovered first." },
        { type: "h", text: "Building an honest ROI table" },
        { type: "steps", items: [
          "List each source of gain: costs saved, revenue gained, hours freed (converted to rupees), risks avoided.",
          "Use the buyer's numbers from discovery; state every assumption.",
          "Include every cost: licence or purchase, implementation, training, internal time, GST where it is a real cost to them (verify input credit rules).",
          "Calculate year-one ROI and payback; add a three-year view if the product lasts.",
          "Show a conservative case, such as half the expected gain, so the finance head trusts you."
        ] },
        { type: "table", head: ["Line", "Year one (example)"], rows: [
          ["Reduced returns and rework", "₹7,00,000"],
          ["Sales-office hours freed (300 hours × ₹1,000)", "₹3,00,000"],
          ["Total gain", "₹10,00,000"],
          ["Total cost (licence, set-up, training)", "₹4,00,000"],
          ["ROI = (10 − 4) ÷ 4", "150%"],
          ["Payback", "About 4.8 months"],
          ["Conservative case (half the gain): ROI = (5 − 4) ÷ 4", "25%; payback about 9.6 months"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Inflated gains the buyer does not believe, which damage trust in everything else.",
          "Leaving out internal costs like staff time for training.",
          "Showing ROI without payback; owners often care more about how quickly money comes back.",
          "Presenting the ROI as your claim rather than building it with the buyer; a table they helped fill is one they will defend internally."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build an ROI table for one live deal with the buyer's numbers, including a conservative case. Share it with the buyer's finance contact and ask which assumptions they would change." }
      ],
      takeaways: [
        "ROI = (gain − cost) ÷ cost; payback = cost ÷ monthly gain.",
        "Use the buyer's numbers and state every assumption.",
        "Include all costs and show a conservative case.",
        "Payback period often persuades owners more than ROI."
      ]
    },
    {
      title: "The objection method: listen, acknowledge, clarify, answer, confirm",
      minutes: 10,
      summary: "Handle any objection with five steps: listen fully, acknowledge, ask a clarifying question, answer with proof, then confirm.",
      blocks: [
        { type: "p", text: "An objection is not a rejection. It is the buyer telling you what stands between them and a yes. Reps who argue, rush or discount turn objections into lost deals. Reps who stay calm and curious turn them into information." },
        { type: "h", text: "The five steps" },
        { type: "steps", items: [
          "**Listen fully:** let the buyer finish, without interrupting or preparing your answer.",
          "**Acknowledge:** show you heard and respect the concern. 'That's a fair point to raise.'",
          "**Ask a clarifying question:** find the real concern behind the words. 'When you say it's expensive, is that compared with another option, or against the budget you have?'",
          "**Answer with proof:** respond to the real concern with evidence, such as a number, a case, a reference or a guarantee.",
          "**Confirm:** check it is resolved. 'Does that address your concern, or is there something else?'"
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Buyer: \"Your price is higher than the local vendor's.\" Rep (acknowledge): \"That's fair, and worth looking at.\" (Clarify): \"Apart from price, how are you comparing the two?\" Buyer: \"Honestly, I'm worried about support. The last software vendor vanished after installation.\" Rep (answer with proof): \"We have a support team in Indore, and I can connect you with a customer in Bhopal who has used us for three years.\" (Confirm): \"Would a call with them help you decide?\" The real objection was trust, not price." },
        { type: "h", text: "Why each step matters" },
        { type: "table", head: ["Step", "What goes wrong if you skip it"], rows: [
          ["Listen", "You answer the wrong objection"],
          ["Acknowledge", "The buyer feels dismissed and becomes defensive"],
          ["Clarify", "You treat the stated objection, not the real one"],
          ["Answer with proof", "Your answer is just an opinion"],
          ["Confirm", "The objection resurfaces later, often at signing"]
        ] },
        { type: "callout", tone: "warn", title: "Watch out", text: "The first instinct is to answer at once or offer a discount. Both skip listening and clarifying. Practise pausing for a full breath before you speak. If you do not know the answer, say so and promise a dated follow-up; a guessed answer that later proves wrong costs more trust than an honest 'let me check'." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down the last three objections you heard. For each, write the clarifying question you should have asked and the proof you could offer. Use the five steps on the next objection you hear and note what the real concern turned out to be." }
      ],
      takeaways: [
        "Objections are information, not rejection.",
        "Five steps: listen, acknowledge, clarify, answer with proof, confirm.",
        "The clarifying question often reveals that the real concern is different.",
        "Never answer at once or discount before you understand the concern."
      ]
    },
    {
      title: "The common four: price, trust, timing and \"I need to ask someone\"",
      minutes: 11,
      summary: "Prepare tested responses to the four objections every B2B seller hears most.",
      blocks: [
        { type: "p", text: "Most objections fall into four groups. Prepare for each, and your team will handle the majority of what buyers raise. Build these into an objection bank with a clarifying question, an answer and a proof point for each." },
        { type: "table", head: ["Objection", "Clarifying question", "Answer direction", "Proof"], rows: [
          ["Price: 'Too expensive'", "Compared with what: another vendor, the budget, or doing nothing?", "Return to the cost of doing nothing and ROI; trade terms rather than discount", "ROI table, payback period"],
          ["Trust: 'We don't know you'", "What would you need to see to feel comfortable?", "Reduce risk (next lesson)", "References, case examples, pilot"],
          ["Timing: 'Not now, maybe next quarter'", "What changes next quarter? What happens to the problem until then?", "Show the monthly cost of waiting", "Cost of doing nothing per month"],
          ["Authority: 'I need to ask someone'", "What will matter most to them?", "Offer to help, and meet them together", "A short summary they can share"]
        ] },
        { type: "h", text: "Handling \"I need to ask my partner\"" },
        { type: "p", text: "This is very common in Indian SMBs, where a partner, a family member or a CA often has a say. Do not push ('Can't you decide yourself?') or simply wait ('Sure, I'll wait'). Instead: **'Makes sense. What will matter most to them, and could we set up a short call together?'** This respects the process, reveals the partner's likely concerns and gets you in the room." },
        { type: "callout", tone: "example", title: "Worked example: the cost of waiting", text: "Example: a buyer says, 'Let's look at it in April.' The rep asks what changes in April; the buyer says budgets reset. The rep notes that the problem costs about ₹3 lakh a month and that waiting four months means roughly ₹12 lakh lost, against a ₹6 lakh price. He then offers to start with a small first phase this quarter and bill the rest in April, matching the budget cycle." },
        { type: "h", text: "Building the team's bank" },
        { type: "steps", items: [
          "Ask every rep to list the objections they heard in the last month.",
          "Group them into the four types plus any product-specific ones; pick the top 10.",
          "For each, write a clarifying question, an answer and one proof point.",
          "Test answers in role-play and on real calls; keep the ones that work.",
          "Store the bank where everyone can find it and update it monthly."
        ] },
        { type: "callout", tone: "india", title: "India note", text: "Budget timing matters. Many Indian companies follow an April to March financial year, so some buyers face pressure to commit or use budget near year-end and others freeze spending until April. Ask about their budget cycle early in the deal." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write the clarifying question, answer and proof point for each of the common four, specific to your product. Share them with your team and ask each rep to add one objection they hear that is not on the list." }
      ],
      takeaways: [
        "Most objections are about price, trust, timing or authority.",
        "Clarify what lies behind each before answering.",
        "For 'I need to ask someone', ask what matters to them and offer a joint call.",
        "Keep a living objection bank with a question, an answer and proof for each."
      ]
    },
    {
      title: "Reduce risk where trust is low",
      minutes: 10,
      summary: "Lower the buyer's risk with references, a trial, a small first order or staged payments when they do not yet trust you.",
      blocks: [
        { type: "p", text: "When a buyer does not trust a new vendor, more brochures, more follow-up emails and even a lower price rarely help. A lower price can even increase suspicion. What helps is **reducing the buyer's risk**, so saying yes feels safe even if you are new to them." },
        { type: "h", text: "Four ways to reduce risk" },
        { type: "table", head: ["Method", "How it works", "Best when"], rows: [
          ["References", "A call with a similar, satisfied customer", "The buyer wants reassurance from a peer"],
          ["Trial or pilot", "A paid or free trial on a small scope with agreed success criteria", "The buyer doubts the product will work for them"],
          ["Small first order", "Start with one site, one product line or one team", "The buyer worries about committing large amounts"],
          ["Staged payments", "Pay in milestones linked to delivery or results", "The buyer fears paying and not getting value"]
        ] },
        { type: "h", text: "Designing a good pilot" },
        { type: "steps", items: [
          "Agree the scope: one site, one team or one product line.",
          "Agree success criteria in numbers before starting, for example 'missed shifts down 50% in 30 days'.",
          "Prefer a small paid pilot; buyers who pay a little take it more seriously.",
          "Agree in advance what happens if it succeeds: rollout scope, price and date.",
          "Review results together on a fixed date and ask for the decision."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a new Bhubaneswar vendor of water-treatment monitoring approached a food-processing company that had never heard of them. Instead of discounting, the rep offered a reference call with a dairy customer and a 45-day paid pilot on one plant at ₹50,000, credited against the full order. Success was defined as alerts on 90% of quality breaches. The pilot met the target, and the buyer signed for four plants." },
        { type: "callout", tone: "india", title: "India note", text: "References from a known name in the same city, industry or community carry strong weight. A visit to a working customer site can be more persuasive than any document. Ask happy customers in advance if they are willing to take reference calls, and do not overuse the same ones." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Free pilots with no success criteria, which drift on for months.",
          "Cutting price to build trust, which signals desperation.",
          "No agreement on what happens after a successful pilot."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "For one live deal where trust is the blocker, choose the right risk-reducer. If it is a pilot, write the scope, success criteria, price and post-pilot plan on one page and propose it to the buyer." }
      ],
      takeaways: [
        "Where trust is low, reduce risk rather than cut price.",
        "Use references, a trial, a small first order or staged payments.",
        "A good pilot has a small scope, numeric success criteria and an agreed next step.",
        "A reference call plus a small paid pilot lowers risk most."
      ]
    }
  ]
});
