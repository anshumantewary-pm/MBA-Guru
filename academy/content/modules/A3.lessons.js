Academy.add("A3", "lessons", {
  lessons: [
    {
      title: "Running pilots with 5 to 10 friendly customers",
      minutes: 10,
      summary: "How to design a pilot with entry criteria, success criteria, duration, an owner and a path to paid, and how to collect feedback in writing.",
      blocks: [
        { type: "p", text: "A pilot is a time-bound trial of your product with a small number of real customers, run to prove that it delivers the promised outcome in their setting. Done well, it produces evidence, case studies and your first paying accounts. Done badly, it becomes an open-ended free service that never converts." },
        { type: "p", text: "Start with 5 to 10 *friendly* customers: people who feel the problem strongly, trust you enough to give honest feedback, and will tolerate early rough edges. Your A1 validation test and F1 interviews are the best source." },
        { type: "h", text: "The five parts of a pilot plan" },
        { type: "table", head: ["Part", "Question", "Example"], rows: [
          ["Entry criteria", "Who qualifies for the pilot?", "Single-site pharmacy, uses Tally, 200+ bills a month, owner available for a weekly call"],
          ["Success criteria", "What result proves it works?", "Reorder time under 10 minutes, at least 3 orders a week for 6 weeks"],
          ["Duration", "How long, with start and end dates?", "8 weeks, 1 March to 26 April"],
          ["Owner", "Who is accountable on each side?", "Our PM, and the pharmacy owner"],
          ["Path to paid", "What happens if it succeeds?", "Converts to ₹1,499 a month annual plan from week 9"]
        ] },
        { type: "steps", items: [
          "Write entry criteria so the pilot customers match your target segment, not just whoever said yes.",
          "Draft success criteria with numbers and agree them with each customer before the start.",
          "Fix the duration with dates. Six to twelve weeks suits most B2B pilots.",
          "Name one owner on your side and one on the customer's side.",
          "Write the path to paid: price, plan and start date if criteria are met.",
          "Set a weekly check-in and a written feedback form.",
          "Hold an end-of-pilot review against the criteria and ask for the decision."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Mysuru team piloting a hostel attendance app picks 6 hostels meeting its entry criteria (50+ residents, warden uses a smartphone). Success: 90% of residents marked daily for 6 weeks, and the warden's monthly report time down from 5 hours to under 1. Each warden fills a 5-question form every Friday. At week 6, 4 of 6 hostels meet the criteria and 3 sign the agreed ₹2,000 a month plan." },
        { type: "callout", tone: "warn", title: "Collect feedback in writing", text: "Verbal feedback fades and shifts. A weekly written form, even a short WhatsApp reply to three fixed questions, gives you a record to compare over time and quotes you can use later, with permission." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft a pilot plan for 5 customers with all five parts filled in. Identify the 5 customers by name and check each against your entry criteria. This is practical task 1." }
      ],
      takeaways: [
        "A pilot has entry criteria, success criteria, duration, an owner and a path to paid.",
        "Choose 5 to 10 friendly customers who match your target segment.",
        "Agree success criteria before the start, in writing.",
        "Collect feedback weekly in writing so you can compare and quote it."
      ]
    },
    {
      title: "Feedback channels",
      minutes: 9,
      summary: "How to gather and combine feedback from interviews, in-product prompts, support tickets and sales call notes.",
      blocks: [
        { type: "p", text: "Customers tell you what is working and what is not through many channels, often without meaning to. A PM who listens only to scheduled interviews misses most of the signal. Set up four channels, then bring them together in one place every week." },
        { type: "table", head: ["Channel", "What it is good for", "Watch out for"], rows: [
          ["Interviews", "Depth: why people behave as they do", "Small sample; polite answers"],
          ["In-product prompts", "Feedback at the moment of use, from many users", "Low response rates; prompt fatigue"],
          ["Support tickets", "Where the product breaks or confuses", "Skews towards problems, not value"],
          ["Sales call notes", "Why prospects buy, hesitate or choose a rival", "Filtered through the salesperson's view"]
        ] },
        { type: "h", text: "Setting up each channel" },
        { type: "list", items: [
          "**Interviews**: book 3 to 5 a fortnight with pilot users. Ask about the last time they used the product, not about features they want.",
          "**In-product prompts**: one short question after a key action, such as \"Did this invoice go out the way you expected? Yes / No / Comment\".",
          "**Support tickets**: tag every ticket by feature and type (bug, confusion, request). WhatsApp support chats count as tickets.",
          "**Sales call notes**: ask sales to log three fields after each call: main problem, main objection, and the buyer's exact words."
        ] },
        { type: "steps", items: [
          "Create one feedback sheet with columns: date, channel, customer, quote, theme, severity.",
          "Every Friday, copy in new items from all four channels.",
          "Group items into themes and count them.",
          "Pick the top three themes and check whether they match your success metrics.",
          "Share a one-paragraph summary with engineering and sales.",
          "Close the loop: tell customers what you changed because of their feedback."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Vadodara invoicing startup reviews one week of feedback. Interviews: 3 users say reminders feel \"too pushy\". In-product prompt: 18% of users answer No after sending an invoice. Support: 11 tickets about GST number validation errors. Sales notes: 4 prospects asked about Gujarati invoices. Combined, the top theme is GST validation, which blocks the core job, so it is fixed first; the reminder tone is softened next." },
        { type: "callout", tone: "india", title: "Indian context", text: "Many Indian SMB users give feedback through a WhatsApp voice note to their account manager rather than a form. Make sure those notes are summarised into the feedback sheet, or the most honest feedback you receive will never reach the product team." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Create the feedback sheet and fill it with at least 10 items from at least three channels. Identify your top theme and share a short summary with one engineer and one salesperson." }
      ],
      takeaways: [
        "Use four channels: interviews, in-product prompts, support tickets and sales notes.",
        "Each channel has a bias; combining them gives a truer picture.",
        "Review all feedback in one sheet every week, grouped by theme.",
        "Close the loop by telling customers what changed."
      ]
    },
    {
      title: "Quality and compliance",
      minutes: 9,
      summary: "How to identify which product standards and labelling rules apply to goods, and how to write scope and service levels for services.",
      blocks: [
        { type: "p", text: "Quality and compliance are basic needs in the Kano sense: buyers do not praise you for meeting them, but failure can stop sales, trigger penalties or damage trust permanently. A PM does not need to be a lawyer, but must know which rules apply to the category and build them into the plan before launch, not after a distributor rejects the product." },
        { type: "h", text: "For goods" },
        { type: "p", text: "Depending on your category, several Indian regimes may apply. The examples below are starting points only. Rules, notified product lists and deadlines change, so **verify** what applies to your exact product with the official source or a qualified adviser." },
        { type: "table", head: ["Area", "What it typically covers", "Who it may apply to"], rows: [
          ["BIS standards and certification", "Mandatory standards and marks for notified products", "Electronics, appliances, some toys, building materials and others (verify the current list)"],
          ["FSSAI licensing and labelling", "Food business registration or licence, ingredient and nutrition labels, claims", "Food and beverage makers, packers, sellers"],
          ["Legal Metrology (packaged commodities)", "Declarations on pre-packed goods such as MRP, net quantity, maker details, consumer care", "Most pre-packaged consumer goods"],
          ["Other labelling or category rules", "Category-specific marks, warnings or registrations", "For example cosmetics, drugs, chemicals (verify)"]
        ] },
        { type: "h", text: "For services" },
        { type: "p", text: "For a service or software product, quality means a clear promise. Write the **scope** (what is and is not included) and the **service levels**, often captured in a service level agreement (SLA): a written commitment on measures such as uptime, response time and resolution time." },
        { type: "steps", items: [
          "List what the customer receives and what they must provide.",
          "Choose 3 to 5 service levels you can actually measure, such as first response within 4 business hours.",
          "Set targets you can meet on your worst normal week, not your best.",
          "State what happens if you miss them: a credit, an escalation path, a review call.",
          "Track actual performance weekly and share it with pilot customers."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Gurugram IT support firm for small offices writes its SLA: priority 1 (office cannot work) response within 1 hour and resolution or workaround within 4 hours, 8 am to 8 pm, Monday to Saturday; priority 2 response within 4 hours; monthly uptime report. Out of scope: hardware repairs and personal devices. Missing the priority 1 target twice in a month gives the client a 10% credit." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Assuming a rule does not apply because competitors ignore it; relying on old information; promising SLAs the team cannot meet; and leaving the out-of-scope list blank, which invites disputes." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Start your compliance checklist: list every regime that might apply to your product, with the official source you checked and the date. For services, draft a one-page scope and SLA. This is part of practical task 3." }
      ],
      takeaways: [
        "Compliance is a basic need: invisible when met, damaging when missed.",
        "For goods, check BIS, FSSAI, Legal Metrology and labelling rules that apply (verify).",
        "For services, write the scope and SLAs you can measure and meet.",
        "Record the source and date for every compliance item."
      ]
    },
    {
      title: "Personal data and the DPDP Rules",
      minutes: 9,
      summary: "What India's Digital Personal Data Protection framework means for product teams, and how to plan notice, consent and security now.",
      blocks: [
        { type: "p", text: "Almost every product collects personal data: names, phone numbers, addresses, payment details, location, health or financial information. India's Digital Personal Data Protection (DPDP) Act sets the framework, and the DPDP Rules were notified in November 2025 with an 18-month phased rollout, according to the government's Press Information Bureau (PIB). Some obligations apply sooner than others. **Verify what applies when** to your business, using the official notification and qualified advice." },
        { type: "p", text: "For a PM, the practical point is simple: privacy decisions are product decisions. They shape sign-up screens, data fields, retention, vendor choice and support processes. Designing them in now is far cheaper than retrofitting them later." },
        { type: "h", text: "Plan three things now" },
        { type: "list", items: [
          "**Notice**: tell users clearly what personal data you collect, why, and how they can exercise their rights or complain.",
          "**Consent**: where consent is the basis, ask for it in clear, specific terms, make it as easy to withdraw as to give, and keep a record.",
          "**Security**: protect data with reasonable safeguards such as access control, encryption, logging and a plan for breaches."
        ] },
        { type: "steps", items: [
          "Map your data: list every personal data field you collect, where it is stored and who can see it.",
          "For each field, write why you need it. Remove fields with no clear purpose.",
          "Draft a plain-language notice in the languages your users read.",
          "Design the consent screen and a simple way to withdraw consent.",
          "List vendors who process data for you (cloud, messaging, analytics) and check their terms.",
          "Write a short breach response plan: who to inform and how fast (verify the current requirements).",
          "Set a retention rule: how long you keep each type of data, and how you delete it."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Thane diagnostics booking app maps 14 data fields. It finds it collects date of birth and full address for every booking, but needs only age band and pin code until a home sample collection is booked. It drops two fields from the main flow, adds a short notice in English, Hindi and Marathi, and restricts test reports to the patient and the lab, with access logged." },
        { type: "callout", tone: "warn", title: "Verify before relying on this", text: "This lesson is a planning guide, not legal advice. Phased timelines, special rules for children's data and obligations for larger data handlers may differ. Check the notified rules and get advice before launch." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a data map for your product: field, purpose, storage, access and retention. Add a row to your compliance checklist for DPDP with the source you checked and the date." }
      ],
      takeaways: [
        "The DPDP Rules were notified in November 2025 with an 18-month phased rollout (PIB); verify what applies when.",
        "Plan notice, consent and security as product features.",
        "Collect only the data you can justify, and set retention rules.",
        "Record sources and get qualified advice before launch."
      ]
    },
    {
      title: "Product metrics: North Star, activation, retention and adoption",
      minutes: 11,
      summary: "How to choose a North Star metric, define activation, read retention cohorts and track feature adoption every week.",
      blocks: [
        { type: "p", text: "Revenue tells you what happened last month. Product metrics tell you whether customers are getting value now, which predicts next quarter's revenue. Four metrics form the core set." },
        { type: "table", head: ["Metric", "Definition", "Example for an invoicing app"], rows: [
          ["North Star", "The one number that shows customers get value", "Invoices paid through the app per week"],
          ["Activation", "The first moment a user gets real value", "First invoice sent to a real customer within 7 days of sign-up"],
          ["Retention cohort", "Share of users who started in a period and are still active later", "Of January sign-ups, % still sending invoices in month 3"],
          ["Feature adoption", "Share of active users using a given feature", "% of active users who use payment reminders"]
        ] },
        { type: "h", text: "Choosing a North Star" },
        { type: "list", items: [
          "It measures value received by the customer, not activity such as page views.",
          "It tends to predict revenue.",
          "It is stable, so the team can work towards it for months.",
          "It breaks into 3 or so **input metrics** the team can influence, for example new activated users, invoices per active user and share of invoices with a payment link."
        ] },
        { type: "h", text: "Reading a retention cohort table" },
        { type: "p", text: "Each row is a group of users who started in the same month. Each column shows what share of that group is still active after 1, 2, 3 months. Read across a row to see how one cohort decays; read down a column to see whether newer cohorts retain better." },
        { type: "table", head: ["Cohort", "Users", "Month 1", "Month 2", "Month 3"], rows: [
          ["January", "200", "60%", "45%", "40%"],
          ["February", "250", "64%", "50%", "46%"],
          ["March", "300", "70%", "58%", "—"]
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example (sample data): in the table above, January's 200 users keep 40% (80 users) by month 3. February keeps 46% (115 of 250). March starts stronger at 70% in month 1. Retention is improving with each cohort, and the curve flattens around month 3, which suggests a stable core of users. The team links the improvement to a new onboarding checklist released in February." },
        { type: "steps", items: [
          "Write your North Star in one line and three input metrics under it.",
          "Define activation as a specific first-value event with a time limit.",
          "Export users with start month and monthly activity, and build the cohort table in a spreadsheet.",
          "Track adoption for your top 3 features.",
          "Review all four every week at the same time."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Define your North Star and 3 input metrics, write your activation event, and build a monthly retention cohort table from real or sample data. This is practical task 2." }
      ],
      takeaways: [
        "A good North Star tracks the value customers receive and predicts revenue.",
        "Activation is the first moment of real value, not a download or sign-up.",
        "Retention cohorts show what share of each starting group stays active.",
        "Track feature adoption to see which features earn their place."
      ]
    },
    {
      title: "Pilot to paid",
      minutes: 8,
      summary: "How to agree at the start of a pilot which result turns it into a contract, and how to run the conversion conversation.",
      blocks: [
        { type: "p", text: "The most common pilot failure is not a bad result; it is a good result followed by nothing. The customer liked it, the team is pleased, and then the pilot drifts into a free extension because nobody agreed what success would lead to. The fix is to agree the conversion terms **at the start**, in writing, alongside the success criteria." },
        { type: "h", text: "What to agree before the pilot starts" },
        { type: "list", items: [
          "The success criteria, with numbers and a measurement method.",
          "The decision date and who on the customer side makes the decision.",
          "The commercial terms on success: plan, price, billing start date and contract length.",
          "What happens on a partial result: an extension of fixed length with changed criteria, or a stop.",
          "Whether a pilot fee is charged and whether it is adjusted against the first invoice."
        ] },
        { type: "steps", items: [
          "Draft a one-page pilot agreement with the items above.",
          "Review it with the customer's decision-maker, not only the daily user.",
          "Get it signed or confirmed by email before the pilot starts.",
          "Share progress against criteria every week, so the end result is no surprise.",
          "Book the end-of-pilot review meeting at the start.",
          "At the review, show the results against criteria and ask for the agreed decision directly."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Noida HR tech firm pilots attendance software with a 120-employee factory. Agreed up front: success means 95% of shifts recorded digitally for 4 weeks and payroll prepared 2 days faster. Pilot fee ₹10,000, adjusted against the first year. On success, an annual plan at ₹60 per employee per month, about ₹86,400 a year, starts the following month. The plant head, who signs off, attends the review. Results: 97% of shifts and payroll 3 days faster. The contract is signed in the review meeting." },
        { type: "callout", tone: "india", title: "Indian context", text: "In many Indian SMBs the owner decides alone, but in larger firms purchase, finance and IT may all need to approve. Ask at the start: \"If this works, who else needs to say yes, and what will they need to see?\" Add their needs, such as a GST invoice format or a security questionnaire, to the pilot plan." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Running a free pilot with no end date; agreeing criteria only with the user, not the buyer; and leaving pricing \"to discuss later\", which reopens negotiation just when you have the most leverage." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add a path-to-paid section to your pilot plan: decision-maker, decision date, price and start date on success. Confirm it with one pilot customer by email." }
      ],
      takeaways: [
        "Agree at the start which result turns the pilot into a contract.",
        "Involve the decision-maker, not only the daily user.",
        "Fix the price, plan and start date before the pilot begins.",
        "Share weekly progress so the final decision is no surprise."
      ]
    }
  ]
});
