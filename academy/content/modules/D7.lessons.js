Academy.add("D7", "lessons", {
  lessons: [
    {
      title: "WhatsApp Business app or the Business Platform?",
      minutes: 10,
      summary: "Know what the free WhatsApp Business app does, what the WhatsApp Business Platform (API through a provider) adds, and when to move up.",
      blocks: [
        { type: "p", text: "For most Indian buyers, WhatsApp is where business conversations already happen: price lists, order confirmations, payment links and delivery updates. There are two ways for a business to use it, and choosing the right one saves money and headaches." },
        { type: "table", head: ["", "WhatsApp Business app", "WhatsApp Business Platform (API)"], rows: [
          ["Who runs it", "You, on a phone (plus linked devices)", "Through a Business Solution Provider or Meta's cloud API, connected to your systems"],
          ["Key features", "Business profile, catalogue, labels, quick replies, greeting and away messages, broadcast lists", "Approved message templates, automation and chatbots, many agents, CRM and website integrations, interactive buttons and lists"],
          ["Scale", "Small teams and moderate volumes", "Thousands of contacts and many agents"],
          ["Cost", "App is free", "Per delivered template message by category, plus provider fees (verify current rates)"],
          ["Best for", "Shops, freelancers, early-stage firms", "Growing D2C brands, SaaS, education, finance and service firms with volume"]
        ]},
        { type: "h", text: "What the app does well" },
        { type: "list", items: [
          "A **catalogue** so buyers browse products and prices inside the chat.",
          "**Labels** such as New enquiry, Quote sent, Paid and Delivered to run a simple pipeline.",
          "**Quick replies** for price, delivery, returns and payment questions.",
          "**Broadcast lists**, which reach only contacts who have saved your number; check current limits in the app (verify)."
        ]},
        { type: "h", text: "What the Platform adds" },
        { type: "p", text: "The Platform lets you send pre-approved templates at scale, automate flows (welcome, qualification, order updates), route chats to agents, and push every conversation into your CRM with its source. Click-to-WhatsApp ads, website widgets and QR codes can all start tracked conversations." },
        { type: "callout", tone: "example", title: "Worked example: when to move up", text: "Example: a Rajkot spice brand handled 40 chats a day on the app with two staff. When a festive campaign pushed enquiries to 300 a day, replies slowed to a full day and broadcast reach was limited to contacts who had saved the number. Moving to the Platform through a provider let three agents share one number, sent automated order confirmations, and tagged every chat by campaign. The trade-off was a monthly provider fee plus per-message charges, which the brand checked against the extra orders before committing." },
        { type: "steps", items: [
          "Count your daily chats, team size and how many contacts you want to message each month.",
          "If one or two people can handle chats and broadcasts reach enough contacts, stay on the app and use labels and catalogue fully.",
          "If you need many agents, automation, CRM links or messaging at scale, shortlist two or three providers.",
          "Compare provider fees, Meta's current per-message rates by category, onboarding steps and CRM integrations (verify).",
          "Start with one use case, such as order updates or lead qualification, before migrating everything."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Audit your current WhatsApp use: daily chats, response time, labels used, broadcast reach. Decide app or Platform, and if the app, set up the catalogue, five labels and five quick replies today." }
      ],
      takeaways: [
        "The free app offers catalogue, labels, quick replies and broadcast lists for small teams.",
        "The Platform, through a provider, adds templates at scale, automation, many agents and CRM links.",
        "Move up when volume, team size or integration needs outgrow the app.",
        "Compare provider fees and current Meta rates before switching (verify)."
      ]
    },
    {
      title: "Opt-in first, opt-out easy",
      minutes: 9,
      summary: "Message only people who agreed to hear from you, collect opt-in clearly, and make opting out effortless.",
      blocks: [
        { type: "p", text: "WhatsApp feels personal, so unwanted messages feel like an intrusion. People who did not agree will block or report you, which hurts your number's quality rating and can limit what you are allowed to send. Opt-in is also the right way to treat personal data under India's DPDP Act and Rules, which require clear consent for processing (verify current obligations). Permission is not a formality; it is what keeps the channel working." },
        { type: "h", text: "What good opt-in looks like" },
        { type: "list", items: [
          "**Clear:** the person knows they will get WhatsApp messages from you and roughly what about, such as offers, order updates or reminders.",
          "**Active:** they tick a box, send a first message, scan a QR code and say hi, or tap a button; not a pre-ticked box.",
          "**Recorded:** you store when, where and how they opted in.",
          "**Specific:** marketing opt-in is separate from transactional updates where possible."
        ]},
        { type: "h", text: "Opt-in sources" },
        { type: "table", head: ["Source", "How it works"], rows: [
          ["Website", "A form checkbox \"Send me offers on WhatsApp\" or a click-to-chat widget with a pre-filled message"],
          ["QR code", "On packaging, the shop counter, invoices or event standees; scanning opens a chat with a pre-filled opt-in message"],
          ["Click-to-WhatsApp ad", "A Meta ad that opens a chat; the welcome message confirms what they will receive"],
          ["In-store or call", "Staff ask, and the customer sends a keyword such as JOIN to confirm"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: a counter QR code", text: "Example: a Mysuru saree shop put a QR code at the billing counter: \"Scan for new arrivals and festive offers on WhatsApp.\" Scanning opened a chat with \"Hi, please add me for new arrivals.\" The welcome reply thanked them, said they would receive at most two messages a week, and added \"Reply STOP anytime to opt out.\" In this illustration the shop built a list of several hundred opted-in buyers in two months, each tagged with the date and source." },
        { type: "steps", items: [
          "Choose two opt-in sources that fit how buyers already reach you.",
          "Write the opt-in wording: what they will receive, how often, and how to stop.",
          "Write the welcome message that confirms opt-in and repeats the opt-out instruction.",
          "Set up a sheet or CRM field to record opt-in date, source and type.",
          "Honour STOP or the unsubscribe button immediately and keep a do-not-message list.",
          "Never buy lists or add numbers scraped from groups."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Set up one opt-in source (a website checkbox, a counter QR code or a click-to-WhatsApp ad) with clear wording, a welcome message and an opt-out instruction, and start recording consent." }
      ],
      takeaways: [
        "Message only people who agreed, and record when and how they agreed.",
        "Opt-in must be clear and active, not pre-ticked or assumed.",
        "Make opting out easy and honour it at once.",
        "Unwanted messages lead to blocks and reports that damage your number."
      ]
    },
    {
      title: "WhatsApp pricing: per delivered template, by category",
      minutes: 9,
      summary: "Understand how the WhatsApp Business Platform is charged since July 2025 and how to estimate the cost of a campaign.",
      blocks: [
        { type: "p", text: "Since 1 July 2025, Meta charges for the WhatsApp Business Platform per delivered template message, priced by category: **marketing**, **utility** and **authentication** (Meta pricing docs). Before that, charging was based on conversations. India rates have changed since the switch, so always check Meta's current rate card and your provider's fees before you budget (verify)." },
        { type: "h", text: "The three categories" },
        { type: "table", head: ["Category", "Purpose", "Examples"], rows: [
          ["Marketing", "Promotions, offers, announcements, re-engagement", "\"Festive sale: 20% off till Sunday\", \"New arrivals are in\""],
          ["Utility", "Updates on a transaction or account the user started", "\"Your order has shipped\", \"Payment received\", \"Appointment confirmed for 4 pm\""],
          ["Authentication", "One-time passcodes for login or verification", "\"Your OTP is 482913\""]
        ]},
        { type: "p", text: "Marketing messages are generally the most expensive category. Free-form replies within the customer service window, after a customer messages you, and some utility messages in that window may not be charged; check Meta's current rules for exactly what is free (verify)." },
        { type: "callout", tone: "example", title: "Worked example: estimating a broadcast", text: "Example, with made-up rates for illustration only: a brand plans a marketing template to 5,000 opted-in contacts. If 4,600 are delivered and the marketing rate were ₹0.90 per delivered message, Meta's charge would be about 4,600 × 0.90 = ₹4,140, plus the provider's fee. If the broadcast brings 46 orders at ₹1,200 average, revenue is ₹55,200, and message cost per order is about ₹90. Replace the rates with the current rate card before using this." },
        { type: "steps", items: [
          "Download Meta's current rate card for India and note your provider's markup or platform fee (verify).",
          "Classify every template you plan to send into the right category.",
          "Estimate deliveries: list size multiplied by your typical delivery rate.",
          "Calculate cost per message, cost per reply and cost per order for each campaign.",
          "Compare against the margin per order; drop campaigns that cost more than they earn.",
          "Re-check rates before each quarter's plan, as they change."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Budgeting with an old rate card or a blog's number.",
          "Labelling promotions as utility to save money; Meta reviews templates and can recategorise or reject them.",
          "Ignoring provider fees, which can be a large share of total cost at low volume."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pull the current India rate card and your provider's fees. Cost out one marketing broadcast and one utility flow for your list, and calculate the break-even number of orders." }
      ],
      takeaways: [
        "Since 1 July 2025, Platform charges are per delivered template message, by category.",
        "Categories: marketing, utility and authentication; marketing usually costs most.",
        "India rates have changed since; always check the current rate card and provider fees.",
        "Cost every campaign to cost per order and compare with margin."
      ]
    },
    {
      title: "Templates that people actually read",
      minutes: 10,
      summary: "Write WhatsApp templates that are personal, short, carry one call to action with buttons, and are filed under the right category.",
      blocks: [
        { type: "p", text: "On the Platform, any message you start (outside the customer service window) must use a template that Meta has approved. Templates can include variables such as the customer's name or order number, media, and buttons. A good template feels like a message from a person, not a bulk blast." },
        { type: "h", text: "Five rules" },
        { type: "list", items: [
          "**Personal:** use the name and something specific, such as the product they enquired about or their order number.",
          "**Short:** three to five lines; the key point in the first line, because notifications show only the start.",
          "**One call to action:** one thing to do, such as view the offer, book a slot or reorder.",
          "**Buttons:** quick-reply buttons (\"Yes, interested\", \"Not now\") or a call-to-action button (visit site, call). Buttons raise response and make tracking easy.",
          "**Right category:** file it as marketing, utility or authentication honestly, or it may be rejected or recategorised."
        ]},
        { type: "callout", tone: "example", title: "Worked example: before and after", text: "Before: \"Dear Customer, Greetings from ABC Enterprises!!! We are pleased to announce our MEGA SALE on all products. Visit our website or call us or visit our store. T&C apply.\" After: \"Hi {{1}}, the cotton kurtas you asked about are back in stock in sizes M to XXL. This week only, free delivery on orders above ₹999. Tap below to see the collection.\" Button: \"See kurtas\". Second button: \"Stop offers\". It is personal, short, has one action and an easy opt-out." },
        { type: "h", text: "Three templates every business needs" },
        { type: "table", head: ["Template", "Category", "Job"], rows: [
          ["Welcome", "Usually marketing; check Meta's category rules (verify)", "Thank, confirm what they will receive, offer the first helpful step"],
          ["Follow-up", "Marketing, or utility only if it is about their transaction", "Check whether they got what they needed; offer a call or answer"],
          ["Offer", "Marketing", "One offer, one deadline, one button"]
        ]},
        { type: "steps", items: [
          "Write each template in plain language in the buyer's preferred language; Hindi and regional-language templates are allowed.",
          "Mark variables clearly and prepare sample values for approval.",
          "Add one primary button and, for marketing, an opt-out option.",
          "Choose the category honestly and submit through your provider.",
          "Once approved, test send to your own team and check how it looks on a phone notification."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your welcome, follow-up and offer templates. Read each one as a notification preview: would you open it? Cut every line that does not earn its place." }
      ],
      takeaways: [
        "Templates must be approved and are needed for any message you start.",
        "Personal, short, one call to action, with buttons.",
        "File templates under the honest category to avoid rejection.",
        "Every business needs at least welcome, follow-up and offer templates."
      ]
    },
    {
      title: "The email nurture sequence",
      minutes: 12,
      summary: "Build a five-email nurture sequence (welcome, problem, proof, offer and check-in) segmented by persona and stage.",
      blocks: [
        { type: "p", text: "Most leads are not ready to buy the day they sign up. A nurture sequence keeps you useful and visible until they are. Email remains the main channel for longer B2B decisions, newsletters and detailed content, and it works well alongside WhatsApp, which suits short, urgent messages." },
        { type: "h", text: "The five-email arc" },
        { type: "table", head: ["Email", "When", "Job", "Example subject"], rows: [
          ["1. Welcome", "Immediately", "Thank, deliver what they asked for, set expectations", "Your GST checklist is here"],
          ["2. Problem", "Day 2 to 3", "Speak to the buyer's problem and add value; no hard sell", "3 billing mistakes that cost shops money"],
          ["3. Proof", "Day 5 to 7", "Show a customer like them getting the result", "How a Nashik hardware store saved 6 hours a week"],
          ["4. Offer", "Day 9 to 11", "One clear offer with a reason to act now", "Your free setup call, this week only"],
          ["5. Check-in", "Day 14 to 16", "Personal note asking if they need help; easy reply", "Quick question, Ramesh"]
        ]},
        { type: "p", text: "The second email is the one most often wasted. It should speak to the buyer's problem and give something useful, not ask for payment, push a discount or request referrals. Trust earned in email two is what makes email four work." },
        { type: "h", text: "Segment by persona and stage" },
        { type: "list", items: [
          "**Persona:** a shop owner and an accountant care about different problems; write separate sequences or swap the problem and proof emails.",
          "**Stage:** a new subscriber gets the full arc; someone who already booked a demo skips to proof and check-in; a lapsed customer gets a win-back version."
        ]},
        { type: "callout", tone: "example", title: "Worked example: the numbers", text: "Example: a Chennai accounting software firm adds 400 leads a month. The sequence's open and click numbers vary, but suppose 8% of leads book a call from the offer email and 25% of calls convert at ₹18,000 a year. That is 32 calls and 8 customers a month, about ₹1.44 lakh in annual contract value, from emails written once." },
        { type: "steps", items: [
          "Pick one persona and one stage, usually new leads.",
          "List their top problem, top objection and best proof story from interviews.",
          "Write the five emails, each under 200 words, with one link or call to action.",
          "Write subject lines that are specific and plain, not clickbait.",
          "Set the sequence up in your email tool with the timings and an exit rule when someone books or buys.",
          "Review opens, clicks, replies and bookings per email after a month and rewrite the weakest."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft the five-email sequence for your main persona. Make email two pure value on their problem, and make email five short enough to answer in one line." }
      ],
      takeaways: [
        "Five emails: welcome, problem, proof, offer, check-in.",
        "The email after the welcome speaks to the buyer's problem and adds value.",
        "Segment by persona and stage, and exit people who book or buy.",
        "One call to action per email; rewrite the weakest after a month."
      ]
    },
    {
      title: "Deliverability: getting into the inbox",
      minutes: 10,
      summary: "Authenticate your domain with SPF, DKIM and DMARC, keep lists clean and avoid spammy subject lines so email lands in the inbox.",
      blocks: [
        { type: "p", text: "A brilliant email in the spam folder earns nothing. Major mailbox providers such as Gmail and Yahoo have tightened requirements for bulk senders: authenticated domains, low complaint rates and easy unsubscribes (verify the current requirements). Deliverability is now a basic hygiene task for every marketer." },
        { type: "h", text: "Authenticate your domain" },
        { type: "table", head: ["Record", "What it does", "Plain-language analogy"], rows: [
          ["SPF", "Lists the servers allowed to send email for your domain", "The guest list at the door"],
          ["DKIM", "Adds a cryptographic signature proving the email was not altered and came from your domain", "A tamper-proof seal on the envelope"],
          ["DMARC", "Tells receivers what to do if SPF or DKIM fail, and sends you reports", "The instruction to security: what to do with gatecrashers"]
        ]},
        { type: "steps", items: [
          "Send marketing email from your own domain (offers@yourbrand.in), never a free Gmail address.",
          "In your email tool, find the SPF and DKIM records it provides and add them in your domain's DNS settings.",
          "Add a DMARC record, starting with a monitoring policy (p=none) and a reporting address.",
          "Check authentication with your email tool's checker or a free online tool.",
          "After a few weeks of clean reports, consider moving DMARC to quarantine or reject, with your IT partner.",
          "Warm up a new domain by sending to your most engaged contacts first and increasing volume gradually."
        ]},
        { type: "h", text: "Keep lists clean" },
        { type: "list", items: [
          "Send only to people who opted in; never buy lists.",
          "Remove hard bounces at once and suppress people who have not opened in six months or so, after a re-engagement attempt.",
          "Make unsubscribing one click and honour it quickly.",
          "Watch complaint rates in tools such as Google Postmaster Tools."
        ]},
        { type: "h", text: "Avoid spammy content" },
        { type: "list", items: [
          "Subject lines without ALL CAPS, rows of exclamation marks or words like \"FREE!!!\" and \"Guaranteed\".",
          "A sensible text-to-image balance; not a single large image.",
          "A recognisable sender name and a real reply-to address."
        ]},
        { type: "callout", tone: "example", title: "Worked example: fixing the spam folder", text: "Example: a Kolkata events firm sent from a free webmail address to a bought list of 20,000. Most mail went to spam and complaints spiked. After moving to its own domain with SPF, DKIM and DMARC, deleting the bought list and mailing only 3,000 opted-in contacts, inbox placement and replies improved markedly in this illustration, and actual enquiries rose despite a much smaller list." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Check whether your sending domain has SPF, DKIM and DMARC set up. If not, send your email tool's records to whoever manages your DNS today, and remove all hard bounces from your list." }
      ],
      takeaways: [
        "SPF, DKIM and DMARC authenticate your domain and protect deliverability.",
        "Send from your own domain and warm up new domains gradually.",
        "Clean lists and easy unsubscribes keep complaint rates low.",
        "Avoid spammy subject lines and image-only emails."
      ]
    },
    {
      title: "SMS in India: DLT registration and TRAI rules",
      minutes: 8,
      summary: "Understand why commercial SMS in India needs DLT registration of sender headers and templates under TRAI rules, and how to get set up.",
      blocks: [
        { type: "p", text: "SMS still matters in India for OTPs, transaction alerts, appointment reminders and reaching people without smartphones or data. But commercial SMS is regulated. Under TRAI's rules, businesses sending commercial SMS must register on a telecom operator's DLT (Distributed Ledger Technology) platform: the business entity, sender IDs (headers) and message templates. Messages that do not match a registered template can be blocked. Rules and enforcement have been tightened over time, so verify current requirements before you send." },
        { type: "h", text: "What gets registered" },
        { type: "table", head: ["Item", "What it is", "Example"], rows: [
          ["Principal entity", "Your business, registered with documents", "Your company or proprietorship"],
          ["Header (sender ID)", "The name shown as the sender", "A six-character ID like a brand short name"],
          ["Content templates", "Approved message formats with variable fields", "\"Dear {#var#}, your order {#var#} has shipped.\""],
          ["Consent", "Records for promotional messages, as required", "Customer opt-in records"]
        ]},
        { type: "h", text: "Message types" },
        { type: "list", items: [
          "**Transactional or service:** OTPs, order and delivery updates, and account alerts.",
          "**Promotional:** offers and marketing; subject to timing restrictions and do-not-disturb preferences (verify current rules)."
        ]},
        { type: "callout", tone: "example", title: "Worked example: a clinic reminder", text: "Example: a Bhopal dental clinic wants SMS appointment reminders for patients without WhatsApp. It registers the clinic on an operator's DLT portal, registers a sender header, and registers a template: \"Dear {#var#}, your appointment at the clinic is on {#var#} at {#var#}. Reply or call to reschedule.\" Its SMS provider links to these IDs. Reminders now deliver; an unregistered promotional message it tried earlier had been blocked." },
        { type: "steps", items: [
          "Decide whether you need SMS at all, or whether WhatsApp and email cover your buyers.",
          "Choose an SMS provider and ask which DLT platform and documents they need.",
          "Register your business entity on the DLT platform.",
          "Register sender headers and every template, with variables marked as required.",
          "Map template IDs in your SMS provider and test sends.",
          "Keep consent records and respect do-not-disturb preferences for promotional SMS (verify)."
        ]},
        { type: "callout", tone: "warn", title: "Verify before you send", text: "TRAI rules, DLT processes and operator requirements change. Check the current regulations and your provider's guidance before each campaign." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "List every SMS your business sends or wants to send. Check with your provider that each has a registered header and template on DLT, and drop any that are not needed." }
      ],
      takeaways: [
        "Commercial SMS in India needs DLT registration of the entity, headers and templates under TRAI rules.",
        "Unregistered or mismatched messages can be blocked.",
        "Promotional SMS has extra restrictions around consent and do-not-disturb preferences.",
        "Always verify current rules, as they change."
      ]
    },
    {
      title: "Automation and the handoff to sales",
      minutes: 11,
      summary: "Use lead scoring, alerts to sales within the agreed SLA, and AI chat or voice agents for first-level qualification, with a human for complex questions.",
      blocks: [
        { type: "p", text: "Automation should make it faster for a good lead to reach a human, not replace the human. The design question is simple: what happens in the first five minutes after someone shows interest, and who is told?" },
        { type: "h", text: "Lead scoring" },
        { type: "p", text: "Give points for fit (who they are) and for intent (what they do). When a lead crosses a threshold, it moves to sales." },
        { type: "table", head: ["Signal", "Example points"], rows: [
          ["Fits target persona (role, business size, city served)", "+20"],
          ["Requested a demo or price", "+30"],
          ["Clicked the offer email or replied on WhatsApp", "+10"],
          ["Visited the pricing page twice in a week", "+15"],
          ["Student or job seeker", "-30"],
          ["Sales-ready threshold", "50"]
        ]},
        { type: "h", text: "Alerts within the SLA" },
        { type: "list", items: [
          "Agree the service level with sales, for example every sales-ready lead contacted within 1 working hour.",
          "Send an instant alert (CRM task, WhatsApp to the rep, email) with the lead's source, score and last action.",
          "Escalate to the sales manager if the lead is untouched past the SLA.",
          "Report SLA compliance weekly, alongside cost per qualified lead."
        ]},
        { type: "h", text: "AI chat and voice agents" },
        { type: "p", text: "AI chat on WhatsApp or the website, and AI voice agents for missed calls or callbacks, can answer common questions at any hour, collect qualifying details (need, budget range, timeline, city) and book a slot, often in Hindi or regional languages. Keep them to first-level qualification. Complex, emotional or high-value questions, complaints and negotiations go to a human, and the buyer should always be able to ask for one. Tell buyers when they are talking to an automated agent, and review conversations weekly for wrong answers." },
        { type: "callout", tone: "example", title: "Worked example: the five-minute flow", text: "Example: a Gurugram home-interiors firm. A buyer taps a click-to-WhatsApp ad at 9:40 pm. The AI agent greets, asks city, property type, budget range and timeline, and offers a call slot. The lead scores 65, so the CRM creates a task for the Gurugram rep and sends a WhatsApp alert at 9 am. The rep calls at 9:20 with the buyer's answers in front of her. A buyer who asks about a warranty dispute is passed straight to a human." },
        { type: "steps", items: [
          "Map the first five minutes after each lead source: what message they get and who is alerted.",
          "Write a simple scoring model with 5 to 8 signals and a sales-ready threshold.",
          "Agree the SLA with sales and set up alerts and escalation.",
          "If using an AI agent, write its scope, qualifying questions and handoff triggers.",
          "Review 20 automated conversations a week and fix wrong answers."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your lead scoring model and SLA on one page and agree it with your sales manager. Then test the flow end to end by submitting a lead yourself and timing how long until a human contacts you." }
      ],
      takeaways: [
        "Lead scoring combines fit and intent, with a sales-ready threshold.",
        "Alert sales instantly and track contact within the agreed SLA.",
        "AI chat and voice agents handle first-level qualification; humans take complex questions.",
        "Test the whole flow yourself and review automated conversations weekly."
      ]
    }
  ]
});
