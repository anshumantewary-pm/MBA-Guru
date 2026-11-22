Academy.add("B7", "lessons", {
  lessons: [
    {
      title: "Tracker fields that make a pipeline usable",
      minutes: 9,
      summary: "The minimum set of fields every deal record needs, and how to set them up in a CRM or a Google Sheet.",
      blocks: [
        { type: "p", text: "A pipeline is only as good as the data in it. Many Indian SMB teams track deals in a mix of WhatsApp chats, diaries and a half-filled spreadsheet, so nobody can answer simple questions such as “How much is in proposal stage?” or “Why did we lose last month?” You do not need an expensive CRM to fix this. You need a short, fixed list of fields that every rep fills for every deal." },
        { type: "table", head: ["Field", "Why it matters", "Example entry"], rows: [
          ["Name and company", "Who you are selling to", "Ramesh Iyer, Iyer Agro Exports"],
          ["Source", "Shows which channels produce deals", "Referral, LinkedIn, trade fair, inbound"],
          ["Stage", "Where the deal is, with clear exit criteria", "Meeting held, proposal sent, negotiation"],
          ["Deal value (₹)", "Lets you size the pipeline", "₹4,80,000"],
          ["Next action", "What happens next", "Demo to plant head"],
          ["Next action date", "When it happens", "14 Feb"],
          ["Notes and objections", "Context for coaching and handover", "Worried about GST invoicing format"],
          ["Lost reason", "Patterns for product and pricing", "Price; went with local vendor"]
        ] },
        { type: "h", text: "Setting it up" },
        { type: "steps", items: [
          "Create one row (or record) per deal, not per company or per contact.",
          "Use drop-down lists for source, stage and lost reason so entries are consistent.",
          "Write exit criteria for each stage, such as “proposal sent” means a priced proposal emailed and acknowledged.",
          "Make deal value, next action and next action date mandatory.",
          "Agree a deadline: every rep updates the tracker by 6 pm each Friday."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Rajkot packaging firm with 5 reps moved from WhatsApp notes to a shared Google Sheet with these eight fields. Within a month the owner could see that 40% of open pipeline value came from trade-fair leads, and that the most common lost reason was “delivery time”, not price as everyone had assumed. That changed both the marketing budget and the production plan." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Too many fields, so reps fill none of them properly.",
          "Free-text stages, so “Prop sent”, “proposal” and “quoted” all mean the same thing.",
          "Leaving lost reason blank, which wastes your best learning data."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Check your tracker against the eight fields. Add any that are missing, convert source, stage and lost reason to drop-downs, and write one line of exit criteria for each stage." }
      ],
      takeaways: [
        "Eight fields are enough: name, source, stage, value, next action, date, notes, lost reason.",
        "Use drop-downs for consistency.",
        "Every stage needs written exit criteria.",
        "Lost reasons are learning data; never leave them blank."
      ]
    },
    {
      title: "The rule: every open deal has a next action and a date",
      minutes: 8,
      summary: "Why a deal without a dated next action is not being worked, and how to enforce the rule.",
      blocks: [
        { type: "p", text: "The single most useful rule in pipeline management is this: every open deal has a next action and a date. If it does not, it is not being worked. It is a hope sitting in the forecast. Enforcing this one rule cleans most pipelines faster than any software." },
        { type: "h", text: "What counts as a next action" },
        { type: "list", items: [
          "Specific: “Demo to accounts team”, not “follow up”.",
          "Owned by your side or agreed with the buyer.",
          "Dated: a calendar date, not “next week”.",
          "Moves the deal toward a decision, not just keeps in touch."
        ] },
        { type: "h", text: "Cleaning a pipeline with the rule" },
        { type: "steps", items: [
          "Filter the tracker for open deals with no next action date, or a date in the past.",
          "For each one, the rep chooses: give it a dated next action today, or close it as lost with a reason.",
          "Deals where the buyer has not responded to three attempts over a month move to lost (reason: no response), and go to a nurture list.",
          "Set a weekly check: the manager filters for missing or overdue dates every Monday.",
          "Celebrate honest closing of dead deals; a smaller, real pipeline is better than a large, fake one."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Noida IT services team shows ₹2.4 crore of open pipeline. Filtering reveals 31 deals, worth ₹1.1 crore, with no next action date. After a one-hour clean-up, 12 of them, worth ₹30 lakh, get dated next actions, and 19, worth ₹80 lakh, are closed as lost. The pipeline falls from ₹2.4 crore to ₹1.6 crore. Coverage looks worse, but the forecast is now believable, and reps focus on the 12 revived deals instead of spreading effort thin." },
        { type: "callout", tone: "warn", title: "Watch out", text: "Do not let reps pass the rule with fake dates such as “call on Friday” repeated every week. If the same next action is rolled over three times, ask what is really blocking the deal." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Leaving stale deals open because closing them hurts the coverage number.",
          "Accepting “follow up” as a next action.",
          "Checking the rule only at quarter-end."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Filter your pipeline for open deals without a next action date or with an overdue one. With each rep, give every one a dated action or close it as lost with a reason, before Friday." }
      ],
      takeaways: [
        "No next action and date means the deal is not being worked.",
        "Give it a dated action or close it as lost.",
        "A smaller real pipeline beats a large fake one.",
        "Check for missing dates every week."
      ]
    },
    {
      title: "Metrics that matter",
      minutes: 10,
      summary: "Which sales metrics to watch, what each tells you, and how to calculate them from your tracker.",
      blocks: [
        { type: "p", text: "Revenue tells you what happened. Metrics tell you why, and what to change. A sales manager should watch a small set of numbers that cover effort, flow and quality: activity, pipeline by stage, conversion rates, cycle length, average deal size and margin, and repeat and referral rates." },
        { type: "table", head: ["Metric", "How to calculate", "What it tells you"], rows: [
          ["Activity", "Calls, meetings, demos per rep per week", "Effort; leading indicator"],
          ["Pipeline by stage", "Sum of deal value in each stage", "Where deals are piling up"],
          ["Conversion rates", "Deals reaching next stage ÷ deals entering the stage", "Which stage is weakest"],
          ["Cycle length", "Average days from first contact to close", "How long cash takes to arrive"],
          ["Average deal size and margin", "Won value ÷ number won; gross margin %", "Quality of deals, discount leakage"],
          ["Repeat and referral rates", "Share of revenue from existing customers and referrals", "Customer health and cheapest growth"]
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Indore agri-inputs firm's tracker shows last quarter: 120 leads, 30 meetings, 15 proposals, 6 won worth ₹18 lakh. Lead to meeting is 30 ÷ 120 = 25%; meeting to proposal 15 ÷ 30 = 50%; proposal to won 6 ÷ 15 = 40%. Average deal size is ₹18 lakh ÷ 6 = ₹3 lakh. Average cycle length for won deals was 52 days. The manager now knows that to grow revenue by a third, the cheapest route is to improve lead to meeting, since that is the lowest rate." },
        { type: "h", text: "Reading the numbers" },
        { type: "steps", items: [
          "Start with conversion rates; find the stage with the biggest gap against your benchmark or last quarter.",
          "Check activity for reps below average; low activity is often a will issue.",
          "Compare average deal size and margin across reps; low margin can signal discounting.",
          "Track cycle length; if it is growing, look for missing decision makers.",
          "Check repeat and referral rates monthly; growth from existing accounts is the cheapest."
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Watching only revenue, which arrives too late to act on.",
          "Tracking twenty metrics so none get attention.",
          "Comparing reps on activity alone, which rewards busy work."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "From last quarter's tracker, calculate your team's conversion rate at each stage, average deal size and average cycle length. Circle the weakest stage and bring it to your next team review." }
      ],
      takeaways: [
        "Watch activity, pipeline by stage, conversions, cycle length, deal size and margin, repeat and referral.",
        "Conversion rates show where to work first.",
        "Cycle length is average days from first contact to close.",
        "Repeat and referral revenue is the cheapest growth."
      ]
    },
    {
      title: "Weighted pipeline",
      minutes: 8,
      summary: "How to value a pipeline realistically by multiplying each deal by its stage probability.",
      blocks: [
        { type: "p", text: "Adding up every open deal gives a pipeline total that will never be achieved, because not every deal closes. A weighted pipeline multiplies each deal's value by the probability that deals at that stage close. It gives a more realistic picture of what the pipeline is likely to produce." },
        { type: "h", text: "The formula" },
        { type: "p", text: "**Weighted pipeline = sum of (deal value × stage probability)** for every open deal." },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: three deals. ₹10 lakh at 20% = ₹2 lakh. ₹20 lakh at 50% = ₹10 lakh. ₹5 lakh at 90% = ₹4.5 lakh. Weighted pipeline = 2 + 10 + 4.5 = ₹16.5 lakh. The unweighted total is ₹35 lakh, more than double. Planning hiring or production on ₹35 lakh would be a costly mistake." },
        { type: "h", text: "Setting stage probabilities" },
        { type: "steps", items: [
          "Use your own history: of all deals that reached each stage in the last 6 to 12 months, what share were eventually won?",
          "If you have little history, start with simple estimates (for example 10% at meeting, 30% at proposal, 60% at negotiation, 90% at verbal yes) and replace them with real data each quarter.",
          "Apply the same probability to every deal at that stage; do not let reps set their own percentages.",
          "Recalculate weighted pipeline weekly and compare with target."
        ] },
        { type: "table", head: ["Stage", "Example probability", "Exit criterion"], rows: [
          ["Meeting held", "10%", "Problem confirmed, decision maker known"],
          ["Proposal sent", "30%", "Priced proposal acknowledged by buyer"],
          ["Negotiation", "60%", "Buyer discussing terms, not whether to buy"],
          ["Verbal yes", "90%", "Agreement given, PO pending"]
        ] },
        { type: "callout", tone: "warn", title: "Limits", text: "Weighted pipeline is good for planning across many deals, but it is not a forecast for one deal: no single deal closes at 30%. For a large deal that will make or break the month, judge it on its own evidence in the forecast call." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using the unweighted total for planning.",
          "Letting each rep pick their own probability.",
          "Never updating probabilities with real win data."
        ] },
        { type: "p", text: "A quick check on your probabilities: multiply each stage's count of deals by its probability and compare the result with what actually closed last quarter. If the weighted figure was far higher than actual wins, your probabilities are too generous. Adjust them before the next planning cycle rather than letting optimism creep into the plan." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add a stage probability column to your tracker, fill it from your stage, and calculate weighted pipeline for the team. Compare it with this month's target and note the gap." }
      ],
      takeaways: [
        "Weighted pipeline = deal value × stage probability, summed.",
        "Set probabilities from your own win history, the same for every rep.",
        "Use it for planning, not to forecast a single deal.",
        "Recalculate weekly."
      ]
    },
    {
      title: "Forecast categories: commit, best case and pipeline",
      minutes: 9,
      summary: "How to sort deals into commit, best case and pipeline so the forecast reflects real confidence.",
      blocks: [
        { type: "p", text: "Stage tells you where a deal is. Forecast category tells you how confident the rep is that it will close in this period. The two are related but different: a deal in negotiation might still be best case if the decision maker is travelling. Three categories are enough." },
        { type: "table", head: ["Category", "Meaning", "Evidence required"], rows: [
          ["Commit", "Deals the rep is highly confident will close this period", "Decision maker agreed, terms settled, MAP dates on track, PO process known"],
          ["Best case", "Could close this period if things go well", "Strong interest, proposal in review, one or two open questions"],
          ["Pipeline", "Open deals unlikely to close this period", "Early stage, or a later close date"]
        ] },
        { type: "h", text: "Building the forecast" },
        { type: "steps", items: [
          "Each rep tags every deal closing this month or quarter as commit, best case or pipeline.",
          "For each commit deal, the rep states the evidence in one line.",
          "The manager adds up commit and best case for the team.",
          "The manager adjusts based on each rep's track record, and submits a commit and a best-case number.",
          "After the period, compare commit with actual for each rep and discuss accuracy."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chandigarh team has a monthly target of ₹40 lakh. Commit deals total ₹28 lakh, best case adds ₹15 lakh, and pipeline closing later is ₹60 lakh. The manager forecasts commit ₹28 lakh and best case ₹43 lakh. Rep A has hit 95% of commit for the last three months; Rep B only 60%, so the manager probes Rep B's ₹8 lakh commit before submitting. The gap to target, ₹12 lakh, must come from best case, so those deals get the manager's time this week." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Treating every pipeline deal as commit.",
          "Sandbagging: reps keep sure deals in best case to look good later.",
          "Never checking forecast accuracy, so nobody learns."
        ] },
        { type: "p", text: "Accuracy improves when the category rules are written down and shared. Agree as a team what evidence a deal needs to enter commit, and apply it the same way to every rep, including the strongest. A forecast that is consistently a little low is easier to manage than one that swings with each rep's mood." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add a forecast category column to your tracker. Ask each rep to tag deals closing this month and write one line of evidence for every commit deal. Record the team's commit and best-case numbers to compare with actuals." }
      ],
      takeaways: [
        "Commit means high confidence of closing this period.",
        "Best case could close if things go well; pipeline is later.",
        "Every commit deal needs stated evidence.",
        "Track forecast accuracy per rep."
      ]
    },
    {
      title: "Pipeline review versus forecast call",
      minutes: 8,
      summary: "Why deal health and the number need separate meetings, and how to run each one.",
      blocks: [
        { type: "p", text: "Many teams hold one weekly meeting that tries to do everything: check deals, coach reps, and agree the number. It usually becomes a nervous recital of numbers, with no time to help any deal. Keep them separate. A pipeline review checks deal health and next steps. A forecast call settles the number." },
        { type: "table", head: ["", "Pipeline review", "Forecast call"], rows: [
          ["Purpose", "Improve deals: health and next steps", "Agree commit and best-case numbers"],
          ["Length", "45 to 60 minutes", "30 minutes"],
          ["Questions", "Who decides? What's the next step? What could stop it?", "Is it commit or best case? What changed since last week?"],
          ["Output", "Dated next actions, coaching points", "Team commit and best-case figures"],
          ["Frequency", "Weekly, per rep or team", "Weekly or fortnightly"]
        ] },
        { type: "h", text: "Running a 30-minute forecast call" },
        { type: "steps", items: [
          "Share the commit and best-case list in advance.",
          "Go rep by rep: commit total, changes since last week, and evidence for any new commit deal.",
          "Challenge with facts, not pressure: “What's the next dated step on the MAP?”",
          "Move deals between categories where evidence does not support them.",
          "Close by stating the team's commit and best-case number and the top three deals to help."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune sales manager split her two-hour Monday meeting into a 30-minute forecast call on Monday and 45-minute pipeline reviews per pair of reps on Wednesday. Forecast calls stayed short and factual. In pipeline reviews, reps brought stuck deals instead of hiding them, and the manager found three deals with no decision maker identified, which became joint calls that week." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Coaching deals in the forecast call, so it runs to two hours.",
          "Arguing the number in the pipeline review, so reps become defensive.",
          "Holding no pipeline review at all once the forecast is set."
        ] },
        { type: "p", text: "If your team is small, the two meetings can run on the same day, but keep a clear break between them and change the questions. Reps should arrive at the pipeline review expecting help, and at the forecast call expecting to defend the number with evidence. Both are easier when the tracker is updated before either meeting." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Split your weekly sales meeting into a 30-minute forecast call and a separate pipeline review. Write a five-question agenda for each and share it with the team." }
      ],
      takeaways: [
        "Pipeline review checks deal health and next steps.",
        "Forecast call settles the commit and best-case number.",
        "Keep them separate to keep both useful.",
        "Challenge forecasts with evidence, not pressure."
      ]
    },
    {
      title: "Weekly team review and monthly 4P review",
      minutes: 9,
      summary: "How to find the weakest stage each week and the weakest of the 4Ps each month, and act on them.",
      blocks: [
        { type: "p", text: "Metrics only help if you look at them on a regular rhythm and decide something. Two reviews do this. A weekly team review looks at the funnel and finds the weakest stage. A monthly 4P review steps back to product, price, place and promotion, and finds the weakest P, often with product and marketing colleagues in the room." },
        { type: "h", text: "Weekly: find the weakest stage" },
        { type: "steps", items: [
          "Compare this week's conversion rates at each stage against benchmark or your last quarter.",
          "Find the stage with the biggest gap, measured as a share of its benchmark.",
          "Ask why: listen to two calls or read two lost deals from that stage.",
          "Choose one action for the week, such as a role-play on that stage's skill.",
          "Check next week whether the rate moved."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: team rates against benchmark are lead to meeting 20% (benchmark 20%), meeting to proposal 60% (benchmark 50%) and proposal to won 15% (benchmark 30%). Proposal to won is only half its benchmark, the biggest gap, so that is where to work first. Lost reasons show buyers saying “we'll think about it” after proposals emailed without a review call. Action: every proposal is presented on a call with a closing question and a mutual action plan." },
        { type: "h", text: "Monthly: find the weakest P" },
        { type: "table", head: ["P", "Question to ask", "Signal in the data"], rows: [
          ["Product", "Does it solve the problem buyers describe?", "Lost reason: missing feature, poor fit"],
          ["Price", "Is the price and packaging right for the segment?", "Lost reason: price; heavy discounting; low margin"],
          ["Place", "Are we reaching buyers where they buy?", "Few leads from key regions or channels"],
          ["Promotion", "Do buyers know and trust us?", "Low lead volume, weak source mix"]
        ] },
        { type: "p", text: "Bring the month's lost reasons, source mix and margin to the 4P review, and invite a PM and a marketer. One shared finding per month, with an owner, is worth more than a long list." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Trying to fix every stage at once.",
          "Blaming sales for what is really a product or price problem, or the reverse.",
          "Reviewing without deciding an action and an owner."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Calculate this week's stage conversion rates against benchmark and name the weakest stage. Schedule a monthly 4P review with a PM and a marketer, and bring last month's lost reasons grouped by P." }
      ],
      takeaways: [
        "Weekly: find the weakest stage against benchmark.",
        "Measure the gap as a share of the benchmark.",
        "Monthly: find the weakest P with product and marketing.",
        "Every review ends with one action and an owner."
      ]
    }
  ]
});
