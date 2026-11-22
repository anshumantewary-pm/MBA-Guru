Academy.add("C6", "lessons", {
  lessons: [
    {
      title: "Lead quality over volume: defining a qualified lead with sales",
      minutes: 10,
      summary: "Why many leads mean nothing if they cannot buy, and how to write a shared qualified-lead definition with sales.",
      blocks: [
        { type: "p", text: "A marketing report that says '2,000 leads this month' sounds impressive. If sales can only find 40 people in that list who have a need, a budget and the authority to buy, the other 1,960 cost money and wasted rep time. **Lead quality over volume** is the first principle of marketing-sales alignment: a lead counts only if sales agrees it is worth a conversation." },
        { type: "h", text: "Why volume misleads" },
        { type: "list", items: [
          "Cheap leads from broad ads or giveaways often have no buying intent.",
          "Reps learn to ignore marketing leads when most are poor, so the good ones get missed too.",
          "Cost per lead falls while cost per customer rises.",
          "Marketing and sales argue about numbers instead of improving the funnel."
        ]},
        { type: "h", text: "The stages, defined together" },
        { type: "table", head: ["Stage", "Plain definition", "Example criteria"], rows: [
          ["Lead", "Someone who gave contact details", "Form filled, event attendee, WhatsApp enquiry"],
          ["MQL (marketing qualified lead)", "Fits the ideal customer and has shown some interest", "Right industry and size, plus one intent action"],
          ["SQL (sales qualified lead)", "Sales has spoken to them and confirmed a real need", "Need, timeline and decision maker confirmed"],
          ["Opportunity", "A deal with a value and a next step in the CRM", "Demo done, proposal requested"]
        ]},
        { type: "h", text: "Write the definition with sales" },
        { type: "steps", items: [
          "Pull the last 20 won deals and list what they had in common at first contact: industry, size, city, role, trigger.",
          "Pull 20 leads sales rejected and note why.",
          "In a 45-minute meeting with the sales manager, agree three to five fit criteria and one or two intent signals.",
          "Write the MQL definition in one sentence and the SQL definition in one sentence.",
          "Agree who decides when a lead moves stage, and record the reason when sales rejects one.",
          "Review the definition after one month using rejection reasons."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Hyderabad fleet-tracking firm generated 1,500 leads a month from a free-trial ad. Sales converted 1%. After reviewing won deals, they agreed an MQL must be a logistics or distribution business with at least 10 vehicles, and must have either requested a demo or used the trial for three days. MQLs fell to 220 a month, but sales accepted 70% and converted 9% of MQLs to customers, about 20 customers against 15 before, with far less rep time wasted." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Marketing writing the definition alone and sending it to sales.",
          "Criteria so loose that every form fill qualifies.",
          "No record of why sales rejects leads, so nothing improves.",
          "Celebrating cost per lead instead of cost per customer."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Book 45 minutes with a sales manager. Bring 20 won deals and 20 rejected leads, and leave with a one-sentence MQL and SQL definition you both sign." }
      ],
      takeaways: [
        "A lead matters only if it can buy.",
        "Define MQL and SQL jointly using won and rejected deals.",
        "Record rejection reasons and review monthly.",
        "Judge marketing by cost per customer, not cost per lead."
      ]
    },
    {
      title: "The marketing-sales SLA",
      minutes: 10,
      summary: "How to write a service level agreement covering qualified-lead targets, follow-up time and what happens to cold or unworked leads.",
      blocks: [
        { type: "p", text: "A service level agreement, or SLA, is a short written promise between marketing and sales. **Marketing delivers a number of qualified leads; sales follows up within an agreed number of hours; both agree what happens to cold leads.** It turns the usual argument ('your leads are bad', 'you never call them') into a shared set of numbers both teams can check every week." },
        { type: "h", text: "What goes into the SLA" },
        { type: "table", head: ["Clause", "Marketing promises", "Sales promises"], rows: [
          ["Definitions", "Uses the agreed MQL definition", "Uses the agreed SQL definition"],
          ["Volume", "Delivers N MQLs per month by segment", "Has capacity to work them"],
          ["Speed", "Routes each MQL to a named rep within 1 hour", "First contact within X working hours"],
          ["Attempts", "Provides context: source, pages viewed, form answers", "Makes Y attempts across call, email and WhatsApp over Z days"],
          ["Cold leads", "Takes back unworked or not-ready leads into nurture", "Marks reason and returns lead after Z days"],
          ["Review", "Reports MQLs and conversion weekly", "Updates CRM stages before the review"]
        ]},
        { type: "h", text: "Build it in five steps" },
        { type: "steps", items: [
          "Calculate how many MQLs sales needs: revenue target ÷ deal size ÷ MQL-to-customer rate.",
          "Check rep capacity: how many new leads each rep can work properly per week.",
          "Agree the follow-up time. For inbound demo requests, aim for the same working day; for content downloads, perhaps 24 to 48 hours.",
          "Agree the attempts sequence and the cold-lead rule: what counts as unworked, when a lead returns to marketing, and how it is nurtured.",
          "Sign the page with the sales manager and review the numbers every week for the first month."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kochi B2B packaging firm needs ₹60 lakh new revenue next quarter. Average deal ₹2 lakh, so 30 customers. MQL-to-customer rate is 10%, so marketing must deliver 300 MQLs, about 100 a month. Four reps can each work 30 new leads a month, 120 in total, so capacity fits. The SLA: first call within 4 working hours, five attempts over 10 days by call and WhatsApp, then unanswered leads return to a monthly email nurture with the reason logged." },
        { type: "callout", tone: "warn", title: "Contact rules", text: "WhatsApp and calling follow-ups must respect consent, do-not-disturb preferences and platform policies. Telecom (TRAI) and WhatsApp Business rules change, so verify current requirements before you write them into the SLA." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "An SLA with targets for marketing but none for sales follow-up.",
          "No rule for cold leads, so they rot in the CRM.",
          "Setting a volume target sales cannot work.",
          "Signing it once and never reviewing it."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Run the MQL calculation for next quarter using your real revenue target and conversion rates. Draft the six clauses above and take them to a sales manager for edits." }
      ],
      takeaways: [
        "An SLA puts promises on both sides in writing.",
        "Size MQL targets from revenue and rep capacity.",
        "Agree follow-up time and the rule for cold leads.",
        "Review the SLA numbers weekly in the first month."
      ]
    },
    {
      title: "Lead scoring: fit plus intent",
      minutes: 10,
      summary: "How to score leads on fit (who they are) and intent (what they did) so sales works the best leads first.",
      blocks: [
        { type: "p", text: "Even with a good definition, sales needs to know which leads to call first. **Lead scoring combines fit, meaning who they are, with intent, meaning what they did.** A lead that matches your ideal customer and has just downloaded your pricing guide should be at the top of the list. A student who read one blog post should not." },
        { type: "h", text: "The fit-intent grid" },
        { type: "table", head: ["", "Low intent", "High intent"], rows: [
          ["High fit", "Nurture with useful content; sales may reach out gently", "Call today: top priority"],
          ["Low fit", "Ignore or keep in a light newsletter", "Check carefully; may be a referral or an edge case"]
        ]},
        { type: "h", text: "Build a simple scoring model" },
        { type: "steps", items: [
          "List fit signals from won deals: industry, company size, city, role, current tools.",
          "List intent signals: pricing page visits, demo requests, webinar attendance, WhatsApp questions, repeated visits.",
          "Give each signal points: strong signals 20 to 30, weak signals 5 to 10. Add negative points for clear misfits, such as competitors or students.",
          "Set a threshold for MQL, for example fit at least 40 and total at least 70.",
          "Test the model on last quarter's leads: did the high scorers actually convert more?",
          "Adjust points each month with sales feedback."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chennai ERP firm scores fit out of 60 (manufacturing industry 25, 50 to 500 staff 20, decision-maker role 15) and intent out of 40 (pricing guide download 20, demo request 30, capped at 40, webinar attended 10, blog visit 2). A plant head at a 120-person auto parts maker who downloads the pricing guide scores 60 fit + 20 intent = 80: high fit, high intent. A marketing intern at the same firm who reads a blog post scores 45 + 2 = 47: fit but no intent, so nurture." },
        { type: "callout", tone: "india", title: "Simple tools are fine", text: "Many Indian SMBs do not have marketing automation. A spreadsheet with fit and intent columns, filled in from form answers and a WhatsApp enquiry log, works as a start. Move to CRM-based scoring once the model has proved itself." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Scoring only activity, so busy researchers outrank real buyers.",
          "Too many signals, so nobody understands the score.",
          "Never checking whether the score predicts conversion.",
          "Scores that never decay, so a visit from last year still counts."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take 30 recent leads. Score each on three fit signals and three intent signals in a spreadsheet, then compare the top ten with what sales says about them." }
      ],
      takeaways: [
        "Score = fit (who they are) + intent (what they did).",
        "High fit, high intent leads get called first.",
        "Test the score against real conversions.",
        "Keep the model simple and adjust it monthly."
      ]
    },
    {
      title: "The enablement kit sales actually uses",
      minutes: 12,
      summary: "How to build battlecards, case studies, objection answers, a demo video, a pricing sheet and email and WhatsApp templates with sales, not for them.",
      blocks: [
        { type: "p", text: "Sales enablement is giving reps what they need to win at each stage of a deal. The test of an enablement kit is simple: **do reps use it on real calls?** Much marketing material is written for marketers and never opened by sales. If reps ignore your battlecard, the first fix is to ask them what they need on calls and rebuild it with them, not to send it again." },
        { type: "h", text: "What goes in the kit" },
        { type: "table", head: ["Item", "Used when", "Keep it to"], rows: [
          ["Battlecard", "A competitor comes up", "One page: where we win, where they win, landmines, proof"],
          ["Case studies", "Buyer asks 'who else uses this?'", "Problem, what changed, result, quote; by industry"],
          ["Objection answers", "Price, timing, trust, switching", "Objection, question to clarify, answer, proof"],
          ["Demo video", "Before or after a call", "Two to four minutes, one use case"],
          ["Pricing sheet", "Budget conversation", "Tiers, what is included, GST shown clearly"],
          ["Email and WhatsApp templates", "Follow-up, reminders, proposals", "Short, editable, in the languages reps use"]
        ]},
        { type: "h", text: "Build it with sales" },
        { type: "steps", items: [
          "Interview three reps: which questions do buyers ask that you struggle to answer, and what do you wish you had?",
          "Sit in on calls and note the exact words buyers use.",
          "Draft one item, such as a battlecard, and test it with two reps on live calls for a week.",
          "Rebuild it with their feedback, cutting anything they did not use.",
          "Present the kit at the sales team meeting with a one-minute demo of each item.",
          "Check usage after a month: what was opened, what was sent, what helped close."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Delhi logistics SaaS firm built a six-page competitor battlecard. Reps did not use it. The marketer asked them what they needed and learnt that buyers kept saying 'the other tool is cheaper'. The rebuilt card fitted on a phone screen: three questions to uncover the hidden cost of the cheaper tool, a worked total-cost comparison for 20 vehicles, and one customer quote. Reps started sharing it on WhatsApp after calls." },
        { type: "callout", tone: "warn", title: "Check claims", text: "Battlecards must be factual and fair. Do not make claims about a competitor you cannot support with public information, and update them when the competitor changes. Template messages on WhatsApp must follow current platform policies (verify)." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Writing long documents when reps need one-page answers.",
          "English-only material for reps who sell in Hindi, Tamil or Marathi.",
          "Pricing sheets that hide GST or confuse buyers.",
          "Making it longer when reps ignore it, instead of asking why."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Ask two reps for the single question buyers ask that they find hardest to answer. Write a one-page answer with a proof point and test it on their next three calls." }
      ],
      takeaways: [
        "The test of enablement is use on real calls.",
        "Build each item with reps and test it live.",
        "One-page, phone-friendly and in local languages beats long and polished.",
        "If sales ignores it, ask them what they need and rebuild."
      ]
    },
    {
      title: "The content library: one searchable place, kept current",
      minutes: 8,
      summary: "How to organise enablement content in one searchable place with owners and review dates so reps always find the current version.",
      blocks: [
        { type: "p", text: "A great case study is useless if a rep cannot find it in 30 seconds while a buyer waits on the phone. Most teams scatter content across email attachments, WhatsApp groups and personal drives, and reps end up sending last year's price list. A **content library** is one searchable place, kept current, where every rep knows to look." },
        { type: "p", text: "The library is also how marketing keeps control of the message. When a price, a feature or a claim changes, there is one place to update, and every rep who opens a link sees the new version. It also shows you what is used: most shared drives and CRMs report views or shares, so you can retire content nobody opens." },
        { type: "h", text: "How to set it up" },
        { type: "steps", items: [
          "Pick one location everyone can reach on mobile: a shared drive folder, a CRM content tab or a simple intranet page.",
          "Organise by the way reps think: by deal stage and by buyer type, not by marketing campaign.",
          "Name files clearly: type, topic, industry, language and date, for example 'Case study, Pharma distributor, Hindi, 2026-10'.",
          "Give every item an owner and a review date.",
          "Archive old versions so only current material appears in search.",
          "Announce updates in one channel, with a link to the library rather than an attachment."
        ]},
        { type: "table", head: ["Folder", "Contents"], rows: [
          ["1 Prospecting", "Intro emails, WhatsApp openers, one-page overview"],
          ["2 Discovery", "Question guides, industry fact sheets"],
          ["3 Demo and proof", "Demo videos, case studies by industry, testimonials"],
          ["4 Proposal and price", "Pricing sheet, proposal template, ROI calculator"],
          ["5 Objections and competitors", "Battlecards, objection sheet"],
          ["6 Onboarding", "Welcome pack, setup guides"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Indore agri-input company had 14 versions of its product brochure circulating on WhatsApp, three with an old price. Marketing moved everything into one shared drive organised by stage, set a quarterly review date on each file, and asked reps to share links, not files. When prices changed, one file was updated and every link showed the new version. Dealer complaints about wrong prices stopped within a quarter." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Organising by campaign name, which means nothing to a rep.",
          "No owner, so nothing is ever reviewed.",
          "Sending attachments that become outdated copies.",
          "A library that only works on a laptop."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Collect every piece of sales material you can find in one folder. Delete duplicates, mark outdated items, and set an owner and review date for the ten most used." }
      ],
      takeaways: [
        "One place, searchable on mobile, organised by deal stage.",
        "Every item has an owner and a review date.",
        "Share links, not attachments.",
        "Archive old versions so reps cannot send them."
      ]
    },
    {
      title: "The feedback loop: win-loss reasons every month",
      minutes: 9,
      summary: "How to collect win-loss reasons from sales and send them to marketing and product every month so messaging and product improve.",
      blocks: [
        { type: "p", text: "Sales hears every day why buyers say yes and no. That knowledge rarely reaches marketing or product in a usable form. A **feedback loop** is a monthly routine where win-loss reasons go back to marketing and product, so messaging, content and the product itself improve from real buyer decisions rather than opinion." },
        { type: "h", text: "Run the loop" },
        { type: "steps", items: [
          "Add a required 'reason' field when a deal is marked won or lost in the CRM, with a short pick list and a free-text note.",
          "Each month, pull all closed deals and count reasons.",
          "Call three to five buyers, both won and lost, for a 15-minute conversation. Ask what nearly stopped them, or what the winner did better.",
          "Summarise in one page: top three win reasons, top three loss reasons, quotes in the buyer's own words, and changes proposed.",
          "Send it to marketing and product, and review it in a 30-minute meeting.",
          "Track what changed as a result and report back the next month."
        ]},
        { type: "table", head: ["Reason pick list", "Likely owner of the fix"], rows: [
          ["Price too high", "Pricing, sales (value story)"],
          ["Missing feature", "Product"],
          ["Chose competitor", "Marketing (battlecard), product"],
          ["No decision or timing", "Sales (qualification), marketing (nurture)"],
          ["Trust or proof", "Marketing (case studies, testimonials)"]
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Nagpur school-management software firm closed 40 deals last month: 12 won, 28 lost. Loss reasons: 11 'no decision', 9 'price', 5 'missing Marathi interface', 3 'competitor'. Buyer calls showed that 'price' often meant trustees could not see the value. Marketing built a one-page fee-collection savings sheet for trustees; product moved Marathi support up the roadmap. The next month, the team tracked whether 'price' losses fell." },
        { type: "callout", tone: "india", title: "Listen in the buyer's language", text: "Record quotes in the language the buyer used, with a translation. The exact phrase a principal in Nashik uses to describe the problem is often better messaging than anything written in the office." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Accepting 'price' as the reason without asking what it really meant.",
          "Only looking at losses, not at why you won.",
          "Collecting reasons but never changing anything.",
          "A long report nobody reads."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull last month's closed deals, count the reasons, and call two lost buyers. Write a half-page summary and share it with one product manager." }
      ],
      takeaways: [
        "Win-loss reasons are the cheapest research you can get.",
        "Make the reason field mandatory and review monthly.",
        "Talk to buyers to find what a reason really means.",
        "Close the loop by reporting what changed."
      ]
    },
    {
      title: "Joint pipeline review: following your leads to the end",
      minutes: 8,
      summary: "Why marketing should attend the sales pipeline review and how to use it to learn which leads convert.",
      blocks: [
        { type: "p", text: "Marketing often stops tracking a lead once it is handed to sales. But the real test of a campaign is whether its leads become customers. By attending the **joint pipeline review**, marketing sees what happens to its leads and learns what converts. It is not there to approve discounts or forecast; it is there to learn." },
        { type: "h", text: "What marketing looks for" },
        { type: "list", items: [
          "Which sources and campaigns produce opportunities that move, not just leads.",
          "Where marketing leads stall: after first call, after demo, at proposal.",
          "Which industries, cities or roles close fastest.",
          "Which content reps used in deals that progressed.",
          "Leads that went cold and might be revived with nurture."
        ]},
        { type: "h", text: "How to take part" },
        { type: "steps", items: [
          "Ask the sales manager if you can attend the weekly or fortnightly review as a listener.",
          "Before each review, tag opportunities in the CRM by source and campaign.",
          "During the review, note stalled deals and ask one question per deal: what would help the buyer move?",
          "Afterwards, send a short note offering specific help: a case study, an invite to an event, a nurture sequence.",
          "Once a month, present a five-minute slide: conversion by source, and one change marketing is making."
        ]},
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Surat textile machinery firm's marketer joins the fortnightly pipeline review. She notices that leads from the trade fair convert to demos well but stall at proposal, while leads from a partner webinar convert slowly but close at a higher rate. Reps say fair leads often need finance approval. Marketing creates an EMI and payback sheet for the finance conversation and shifts some budget toward partner webinars." },
        { type: "callout", tone: "warn", title: "Stay a guest", text: "Do not use the review to defend your lead numbers or argue with reps. Listen, ask questions, and offer help. Trust grows when sales sees marketing acting on what it hears." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Stopping measurement at the MQL handover.",
          "Arriving with no source tagging, so nothing can be learnt.",
          "Turning the meeting into a blame session.",
          "Hearing about stalled deals but not following up with help."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Ask to join your next sales pipeline review. Before it, tag ten open opportunities by source. Afterwards, offer one specific piece of help for one stalled deal." }
      ],
      takeaways: [
        "The real test of a campaign is customers, not leads.",
        "Marketing attends to learn what converts.",
        "Tag deals by source so patterns become visible.",
        "Leave every review with one specific offer of help."
      ]
    }
  ]
});
