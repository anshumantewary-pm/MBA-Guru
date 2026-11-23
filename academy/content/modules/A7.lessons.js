Academy.add("A7", "lessons", {
  lessons: [
    {
      title: "Roles on a joint call: who owns what",
      minutes: 9,
      summary: "Split the work on a joint sales call so the rep owns the relationship and next step and the PM goes deep on problem and product.",
      blocks: [
        { type: "p", text: "When a PM joins a sales call, the buyer gets two experts, which is powerful, or two people talking over each other, which is not. Joint calls work when roles are agreed before the call. The simple rule: **the rep owns the relationship and the next step; the PM goes deep on the problem and the product.**" },
        { type: "table", head: ["Moment", "Rep", "PM"], rows: [
          ["Opening", "Introduces everyone, sets purpose, agenda and time check", "Says one line on why they are there"],
          ["Discovery", "Opens with situation questions, manages time", "Goes deep on problems, implications and workflows"],
          ["Demo", "Frames what matters to this buyer", "Shows the product on the buyer's use case"],
          ["Feature requests", "Notes them for the account plan", "Finds the problem behind each one; never promises dates"],
          ["Close", "Summarises and secures a dated next step", "Confirms any follow-up they owe"]
        ] },
        { type: "steps", items: [
          "Hold a 10-minute prep call with the rep: account background, stage of the deal, what the rep wants from you.",
          "Agree who opens, who asks which questions, and a hand signal or chat message for 'let me take this'.",
          "Agree topics you will not discuss: roadmap dates, pricing exceptions, competitor gossip.",
          "On the call, let the rep lead transitions; you speak when invited or when a technical question comes up.",
          "After the call, debrief for 10 minutes: what you learned, what you owe, what the rep owes."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune PM joins a rep on a call with a 60-outlet pharmacy chain. In prep, they agree the rep will open and close, and the PM will explore stock expiry problems. On the call, the buyer asks the PM about a price discount. The PM says, 'Ravi handles commercials, so I will let him take that,' and returns to the expiry workflow. The rep closes with a dated pilot review. The buyer later tells the rep the call felt organised and expert." },
        { type: "list", items: [
          "Mistake: the PM takes over the call because they know the product best.",
          "Mistake: nobody asks for the next step because each assumed the other would.",
          "Mistake: the PM answers commercial questions and undercuts the rep's negotiation."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Ask a sales manager to put you on three calls this week. Before each, hold a 10-minute prep with the rep using the role table above, and after each, a 10-minute debrief." }
      ],
      takeaways: [
        "The rep owns the relationship and the next step.",
        "The PM goes deep on the problem and the product.",
        "Agree roles and no-go topics in a short prep call.",
        "Debrief after every joint call."
      ],
      selfCheck: [
        "Who should own the opening and the next step on a joint call?",
        "What will you agree in the 10-minute prep before your next call?",
        "What did you learn from your last debrief?"
      ]
    },
    {
      title: "SPIN questions for product discovery",
      minutes: 11,
      summary: "Use situation, problem, implication and need-payoff questions to uncover the real cost of a buyer's problem.",
      blocks: [
        { type: "p", text: "SPIN is a questioning sequence from Neil Rackham's research on large sales. It is equally useful for product discovery, because it moves the conversation from facts to pain to the value of solving it. PMs who use it gather better requirements and help reps build a stronger business case." },
        { type: "table", head: ["Type", "Purpose", "Example question"], rows: [
          ["Situation", "Understand the facts and context", "How many agents handle customer complaints today?"],
          ["Problem", "Find difficulties and dissatisfaction", "Where do complaints get stuck or delayed?"],
          ["Implication", "Explore the consequences of the problem", "What happens to renewals when complaints take 3 days to resolve?"],
          ["Need-payoff", "Get the buyer to state the value of a solution", "If complaints closed in a day, what would that mean for your renewal rate?"]
        ] },
        { type: "h", text: "Why implication questions matter most" },
        { type: "p", text: "Situation questions are easy but boring for buyers; ask only the ones you cannot find out beforehand. Problem questions reveal pain, but buyers often accept small pains. **Implication** questions connect the pain to money, customers or reputation, which is what makes a buyer act. **Need-payoff** questions let the buyer describe the value in their own words, which is far more convincing than you saying it." },
        { type: "steps", items: [
          "Research the account first so you need only 2 or 3 situation questions.",
          "Ask open problem questions: 'Where does this break?' 'What frustrates your team most?'",
          "For each problem, ask at least one implication question: cost, time, lost customers, compliance risk.",
          "Ask a need-payoff question to have the buyer state the value.",
          "Summarise back in the buyer's words before any demo or pitch."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Mumbai PM speaks with an NBFC's collections head. Situation: 'How many overdue accounts do you call each week?' (about 4,000). Problem: 'Where do calls fail?' (wrong numbers, no record of promises to pay). Implication: 'What happens when a promise to pay is not followed up?' (the account slips into a worse bucket, provisioning goes up). Need-payoff: 'If every promise triggered an automatic WhatsApp reminder, what would that be worth?' The buyer estimates recovering ₹20 to 30 lakh a month more, a number the rep now uses in the proposal." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Twenty situation questions that feel like an interrogation, jumping to the demo after the first problem, and asking leading questions such as 'Wouldn't it be great if…?' that buyers simply agree with." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Before your next customer call, write two problem, two implication and one need-payoff question. After the call, note which one produced the most useful answer." }
      ],
      takeaways: [
        "SPIN: situation, problem, implication, need-payoff.",
        "Keep situation questions few; research beforehand.",
        "Implication questions connect pain to money and make buyers act.",
        "Let the buyer state the value with need-payoff questions."
      ],
      selfCheck: [
        "Why do implication questions matter most?",
        "Write one need-payoff question for your top buyer problem.",
        "How many situation questions could you skip by researching first?"
      ]
    },
    {
      title: "Demo craft: tell, show, tell, with three aha moments",
      minutes: 11,
      summary: "Run a tailored demo that previews, shows the buyer's use case and explains what it means, with three planned aha moments.",
      blocks: [
        { type: "p", text: "Most product demos are feature tours: the PM clicks through every screen in menu order while the buyer wonders which part matters to them. A great demo is a short story about the buyer's own problem. The structure is simple: **tell them what they will see, show it on their use case, then tell them what it means.**" },
        { type: "steps", items: [
          "Before the demo, write the buyer's top 3 problems from discovery, in their words.",
          "Choose one 'aha' moment for each problem: the single screen or action that shows it solved.",
          "Set up demo data that looks like theirs: their industry, city names, product names, realistic volumes.",
          "Open with the tell: 'You said X, Y and Z. In the next 10 minutes I will show you how each one works.'",
          "Show each aha moment, then pause and ask: 'How would that work for your team?'",
          "Close with what it means: 'So your collections team would …' using their numbers.",
          "Stop early. End before the agreed time and hand back to the rep for the next step.",
          "If something breaks, say 'Let me show you that another way,' switch to a backup screen or recording, and move on without a long apology."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kolkata PM demos inventory software to a distributor of electrical goods. Discovery found three problems: stock-outs of fast movers, dead stock nobody notices and slow GST reconciliation. Aha one: a low-stock WhatsApp alert for a fast-moving MCB switch. Aha two: a dead-stock report showing ₹6 lakh of items unsold for 180 days. Aha three: one-click reconciliation. The PM finishes in 9 minutes, and the buyer spends the remaining time asking about rollout, a strong buying signal." },
        { type: "table", head: ["Feature tour", "Tailored demo"], rows: [
          ["Menu order", "Order of the buyer's problems"],
          ["Generic demo data", "Data that looks like theirs"],
          ["Every feature", "Three aha moments"],
          ["Runs over time", "Stops early"],
          ["PM talks most", "Pauses for buyer reactions"]
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Demoing before discovery, showing features the buyer never mentioned, apologising for bugs at length, and filling silence after an aha moment instead of letting the buyer react." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Rebuild your standard demo as a 10-minute flow with three aha moments tied to your most common customer problems, and prepare demo data for one real segment." }
      ],
      takeaways: [
        "Tell them what they will see, show it on their use case, tell them what it means.",
        "Plan three aha moments, one per discovered problem.",
        "Use demo data that looks like the buyer's.",
        "Stop early and hand back to the rep."
      ],
      selfCheck: [
        "What makes a demo tailored rather than a feature tour?",
        "What are your three aha moments, and which buyer problem does each solve?",
        "When should you stop the demo?"
      ]
    },
    {
      title: "Feature requests: find the problem behind the request",
      minutes: 10,
      summary: "Respond to feature requests by uncovering the underlying problem, and never promise roadmap dates on a call.",
      blocks: [
        { type: "p", text: "Buyers describe solutions, not problems. 'Can you add bulk upload?' might mean they have 5,000 products to load once, or that they receive a supplier file every week, or that a junior staffer makes typing errors. Each problem has a different best answer, and some can be solved today with what you already have." },
        { type: "h", text: "The key question" },
        { type: "p", text: "Ask: **'What would that let you do?'** Then follow with: 'How do you handle it today?' and 'How often does this come up?' These three questions turn a feature request into a problem statement you can prioritise." },
        { type: "steps", items: [
          "Thank the buyer for the request; it shows they are imagining using the product.",
          "Ask 'What would that let you do?' and listen for the outcome.",
          "Ask how they handle it today and what it costs them in time or money.",
          "Check whether an existing feature or workaround solves the real problem.",
          "If not, say you will take it back to the team; give no date.",
          "Log it: buyer, segment, request, problem behind it, frequency, deal value."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a buyer asks a Gurugram PM, 'Can you add bulk upload?' The PM asks, 'What would bulk upload let you do, and how do you handle it today?' The buyer explains that every Monday a supplier emails a price list, and a staffer spends 4 hours updating prices one by one. The real problem is weekly price updates, not a one-time load. The PM shows an existing price-list import that solves it today. No roadmap promise was needed." },
        { type: "callout", tone: "warn", title: "Never promise roadmap dates on a call", text: "'Yes, next month' feels helpful and wins the moment, but roadmaps change. A missed promise damages trust in the rep, the PM and the company, and can become a contractual dispute. Say: 'I understand why it matters. I will take it back to the team and the rep will update you on where it stands.'" },
        { type: "table", head: ["Response", "Why it fails or works"], rows: [
          ["'Yes, next month'", "Unreliable promise; damages trust if it slips"],
          ["'No'", "Closes the conversation; you learn nothing"],
          ["'Ask sales'", "Passes the buck; buyer feels ignored"],
          ["'What would that let you do, and how do you handle it today?'", "Finds the real problem; may solve it now"]
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your last five feature requests and, for each, call or message the buyer to ask what it would let them do. Rewrite each as a problem statement in your log." }
      ],
      takeaways: [
        "Ask 'What would that let you do?' to find the problem behind the request.",
        "Check if an existing feature already solves the real problem.",
        "Never promise roadmap dates on a call.",
        "Log requests with the problem, frequency and deal value."
      ],
      selfCheck: [
        "What is the key question to ask behind any feature request?",
        "Why should you never promise a roadmap date on a call?",
        "Which of your recent requests turned out to be a different problem?"
      ]
    },
    {
      title: "Consultative stance for technical people: lead with outcomes",
      minutes: 9,
      summary: "Speak to buyers in terms of their outcomes and value, and keep architecture for the people who ask for it.",
      blocks: [
        { type: "p", text: "PMs and engineers are proud of how the product works, and rightly so. But most buyers care about what it does for them. A consultative stance means leading with the client's outcome and value, then giving technical depth only as far as the buyer needs to trust the outcome." },
        { type: "table", head: ["Architecture-first", "Outcome-first"], rows: [
          ["'We use a microservices architecture on auto-scaling cloud infrastructure.'", "'Your system stays fast even on Diwali sale day when orders triple.'"],
          ["'We have a REST API with webhooks.'", "'Your Tally entries update automatically, so nobody retypes orders.'"],
          ["'We use end-to-end encryption.'", "'Customer data is protected, which helps you meet your privacy obligations.'"]
        ] },
        { type: "steps", items: [
          "Start every answer with the outcome for this buyer: time, money, risk, growth.",
          "Add the one technical fact that makes the outcome believable.",
          "Check: 'Would it help to go deeper on how that works?'",
          "Go deeper only if they say yes, and match your depth to their role.",
          "For IT or security reviewers, offer a separate technical session or document."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an owner of a Ludhiana hosiery business asks a PM if the order app works offline. The PM's instinct is to explain local caching and sync conflicts. Instead she says, 'Yes. Your salesmen can take orders in markets with poor network, and orders send automatically when the signal returns. Would it help to see how conflicts are handled?' The owner says no and asks about training. The owner's IT consultant gets the technical detail in a separate 20-minute call." },
        { type: "list", items: [
          "Owners and business heads want outcomes, risk and cost.",
          "Operations managers want workflow, training and daily effort.",
          "IT and security reviewers want architecture, integration and compliance detail.",
          "Finance wants price, payment terms and payback."
        ] },
        { type: "p", text: "A useful test: if the buyer could repeat your answer to their own boss in one sentence, you answered at the right level. If they would need your slides to explain it, you went too deep. Technical credibility still matters, so keep a one-page technical note ready to share by email after the call." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Using internal jargon, answering a yes-or-no question with a 5-minute explanation, and correcting a buyer's technical vocabulary in front of their boss." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your top five technical features as outcome-first sentences using the format: outcome for the buyer, then one supporting fact. Use them on your next call." }
      ],
      takeaways: [
        "Lead with the client's outcome and value, not the architecture.",
        "Add one technical fact that makes the outcome believable.",
        "Ask before going deeper, and match depth to the buyer's role.",
        "Offer separate technical sessions for IT reviewers."
      ],
      selfCheck: [
        "Rewrite one technical feature as an outcome-first sentence.",
        "What do owners want to hear compared with operations managers?",
        "Could your buyer repeat your last answer to their boss in one sentence?"
      ]
    },
    {
      title: "Internal stakeholders: power-interest grid and RACI",
      minutes: 15,
      summary: "Map internal stakeholders on a power-interest grid and agree a RACI for each release so nothing falls between teams.",
      blocks: [
        { type: "p", text: "PMs succeed through people they do not manage: sales, marketing, support, engineering, finance and leadership. Two simple tools make this manageable. A **power-interest grid** tells you how much attention each stakeholder needs. A **RACI** makes clear who does what for each release." },
        { type: "table", head: ["Quadrant", "Who", "How to manage"], rows: [
          ["High power, high interest", "e.g. sales head for a big launch", "Manage closely: involve in decisions, meet regularly"],
          ["High power, low interest", "e.g. CFO, CEO for a medium launch", "Keep satisfied: short, regular updates; no surprises"],
          ["Low power, high interest", "e.g. support agents, key reps", "Keep informed: share plans, ask for input"],
          ["Low power, low interest", "e.g. teams barely affected", "Monitor: occasional updates"]
        ] },
        { type: "h", text: "RACI" },
        { type: "list", items: [
          "**R, Responsible**: does the work. Can be several people.",
          "**A, Accountable**: owns the outcome and signs off. Exactly one person per task.",
          "**C, Consulted**: gives input before the decision; two-way.",
          "**I, Informed**: told after the decision; one-way."
        ] },
        { type: "steps", items: [
          "List every stakeholder group affected by the release.",
          "Place each on the power-interest grid and write how often and how you will update them.",
          "List the key release tasks (pricing, demo, training, docs, campaign, go or no-go).",
          "For each task, mark R, A, C or I for each stakeholder, with exactly one A.",
          "Share the RACI with all stakeholders and fix disagreements before work starts."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Noida PM plans a new pricing tier. The CFO has high power but low interest in the details, so she gets a fortnightly 5-line WhatsApp update and approves the floor price. The sales head is high power, high interest: weekly meeting. Support is low power, high interest: kept informed through a shared plan. In the RACI, the PM is accountable for tier design, finance is accountable for GST treatment, and the sales head is accountable for the discount ladder. A disagreement about who signs off on discounts surfaces in week one, not on launch day." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Two people marked accountable for the same task, ignoring high-power, low-interest stakeholders until they block the launch, and a RACI written once and never shared." },
        { type: "h", text: "Going deeper: design decisions, don't just assign tasks" },
        { type: "p", text: "A RACI says who does what. It does not say how the big cross-team decisions get made. The Agile course's advice to leaders is \"don't delegate and don't direct: design the decision space\". Most decisions should happen inside the team, story by story. A small number of **global assumptions**, the choices that affect several teams or stories, need a named owner, a basis for deciding, and a date by which they must be locked." },
        { type: "table", head: ["Decision", "Standing assumption", "Why it matters", "Who decides, how", "Lock by"], rows: [
          [
            "Payment provider",
            "Use the existing UPI partner",
            "Cost, settlement time, risk",
            "PM, engineering lead and finance, by consensus",
            "Sprint 2"
          ],
          [
            "Languages at launch",
            "English and Hindi",
            "Reach and support cost",
            "PM, after sales input",
            "Sprint 3"
          ],
          [
            "Pricing of the new tier",
            "₹1,499 per month",
            "Revenue and positioning",
            "CFO decides, PM recommends",
            "Before beta"
          ],
          [
            "Data hosting",
            "Cloud region in India",
            "DPDP and customer trust",
            "Engineering lead, with legal review",
            "Sprint 1"
          ]
        ] },
        { type: "p", text: "Keep the list short. Ten to fifteen global assumptions is typical. If you have more than twenty, you are probably designing too much up front. Assumptions stay open until they must be locked, so the team keeps its options as long as it safely can." },
        { type: "h", text: "Nudge before you negotiate" },
        { type: "p", text: "Telling stakeholders what to do rarely works on its own. The course recommends **nudges**, small changes that make the right behaviour easy without removing choice. A simple checklist is **EAST: make it Easy, Attractive, Social and Timely**. For example, pre-fill the launch checklist so sales only has to tick boxes (easy), show which regions have already completed training (social), and send the reminder the day before the deadline (timely). If you meet resistance, you are probably pushing rather than nudging." },
        { type: "callout", tone: "warn", title: "Watch your own bias", text: "Everyone is biased; the course's line is \"if you think you are not biased, you are\". Its four root causes are not enough memory, too much information, not enough time, and not enough meaning. Before a stakeholder decision, ask which of the four you are short of right now, and get one view from someone who disagrees with you." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draw a power-interest grid for your next release and a RACI for its five main tasks. Send both to the stakeholders and ask them to correct anything wrong." }
      ],
      takeaways: [
        "High-power, low-interest stakeholders: keep satisfied with short, regular updates.",
        "RACI: responsible, accountable, consulted, informed.",
        "Exactly one accountable person per task.",
        "Share both tools early so disagreements surface before launch."
      ],
      selfCheck: [
        "What is a global assumption, and who should own each one?",
        "Why is more than twenty global assumptions a warning sign?",
        "Design one EAST nudge for a stakeholder behaviour you need."
      ]
    },
    {
      title: "Saying no well: acknowledge, explain, offer",
      minutes: 13,
      summary: "Decline requests from customers and colleagues in a way that protects the relationship and the roadmap.",
      blocks: [
        { type: "p", text: "A PM says no far more often than yes: to feature requests, custom work for one big customer, a sales head who wants a launch moved up. Saying no badly costs trust; saying yes to everything destroys focus. Saying no well uses three steps: **acknowledge, explain the trade-off, offer what you can do.**" },
        { type: "steps", items: [
          "**Acknowledge**: show you understand the request and why it matters to them, in their words.",
          "**Explain the trade-off**: say what you would have to stop or delay to do it, and why the current priority serves more customers or more revenue.",
          "**Offer what you can do**: a workaround, a smaller version, a date to revisit, or a partner who can help.",
          "Confirm the next step and follow up in writing."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a sales head in Bengaluru asks the PM to build a custom report for a ₹40 lakh prospect within two weeks. The PM responds: 'I understand this deal matters for the quarter and the report is their main concern (acknowledge). To build it in two weeks, we would delay the e-invoicing release that 300 existing customers are waiting for, which protects about ₹1.2 crore of renewals (trade-off). What I can do is export the data to a Google Sheet template that gives them the same view, and I will join the call to show it (offer).' The sales head agrees, and the prospect accepts the template for the pilot." },
        { type: "table", head: ["Weak no", "Strong no"], rows: [
          ["'That's not on the roadmap.'", "'I see why that matters. Here is what it would delay, and here is what we can do now.'"],
          ["'Engineering is too busy.'", "'Doing this means pushing back X, which affects Y customers.'"],
          ["Silence, then nothing happens", "A clear answer within two days, in writing"]
        ] },
        { type: "list", items: [
          "Use data: customers affected, revenue at stake, effort in weeks.",
          "Separate 'not now' from 'never' and say which it is.",
          "Say no to the request, never to the person.",
          "When you cannot decide alone, name who will decide and by when."
        ] },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Hiding behind engineering, giving a vague 'maybe later' that the other person hears as yes, and saying yes on a call to avoid an awkward moment." },
        { type: "h", text: "Going deeper: pick the right negotiation style" },
        { type: "p", text: "Saying no is often the start of a negotiation. The **Thomas-Kilmann** model, used in the Agile course, describes five styles along two axes: how much you push for your own needs and how much you care about the other side's needs and the relationship. No style is always right. The skill is knowing your default and switching when the situation calls for it." },
        { type: "table", head: ["Style", "Use when", "Danger"], rows: [
          [
            "Compete (win-lose)",
            "No time; facing a hard bargainer; an ethical line is at stake",
            "Burned bridges; winning a bad deal"
          ],
          [
            "Avoid (lose-lose)",
            "The issue is minor, or tempers need to cool",
            "Problems grow while you wait"
          ],
          [
            "Compromise (split it)",
            "Urgent, with someone you trust",
            "Giving up a must-have to look fair"
          ],
          [
            "Accommodate (lose-win)",
            "You were wrong, or the relationship matters more than this point",
            "Being taken advantage of by a hard bargainer"
          ],
          [
            "Collaborate (win-win)",
            "Both the goal and the relationship matter, and there is time",
            "Wasted time when the other side is not genuinely collaborating"
          ]
        ] },
        { type: "p", text: "PMs tend to over-use accommodate with sales and over-use collaborate with engineering. A few rules help: prepare before any important conversation, do not accommodate someone who is competing, and be ready to compete a little on behalf of your team's focus. Most answers to scope requests should end up as \"no\" or \"not now\", and a written Won't list makes that easier to say." },
        { type: "dialogue", title: "From accommodate to collaborate", lines: [
          { who: "Sales head", say: "I need the custom dashboard for this client by month end. Just squeeze it in." },
          { who: "PM", say: "I understand. This deal matters a lot to the quarter. Can you tell me what the client wants the dashboard to show their board?" },
          { who: "Sales head", say: "Collections by region, every week." },
          { who: "PM", say: "Our existing report has collections by region. If we schedule it as a weekly email with their logo, that is two days of work, not three weeks, and it doesn't push back the reminders release that eight other customers are waiting for. Would that work for them?" }
        ], note: "The PM acknowledges the need, asks for the why, and offers an option that serves both goals. That is collaboration, not giving in." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pick one pending request you have been avoiding. Write and send a response using acknowledge, trade-off and offer, and note how the person reacted." }
      ],
      takeaways: [
        "Acknowledge, explain the trade-off, offer what you can do.",
        "Use data on customers and revenue to explain trade-offs.",
        "Say clearly whether it is 'not now' or 'never'.",
        "Respond quickly and in writing."
      ],
      selfCheck: [
        "What is your default negotiation style, and when does it hurt you?",
        "Why should you not accommodate someone who is competing?",
        "How does a written Won't list make saying no easier?"
      ]
    }
  ]
});
