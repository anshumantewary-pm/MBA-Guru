Academy.add("D8", "lessons", {
  lessons: [
    {
      title: "GA4 funnel explorations: find where visitors drop off",
      minutes: 12,
      summary: "Build a GA4 funnel exploration that shows how many visitors move between each step, so you fix the biggest leak first.",
      blocks: [
        { type: "p", text: "Most websites lose the majority of visitors somewhere between landing and becoming a lead. Without a funnel view you guess where: the headline, the price, the form? A GA4 funnel exploration shows, step by step, how many users reach each stage and where they drop. It does not show ad spend, search rank or email opens; it shows behaviour on your site or app." },
        { type: "h", text: "Choose your funnel steps" },
        { type: "p", text: "Each step is an event or page view you already track (set up in D1). Keep it to four to six steps that match the buyer's path." },
        { type: "table", head: ["Step", "Example event", "Question it answers"], rows: [
          ["1. Landed", "session_start or page_view on the landing page", "How many arrived?"],
          ["2. Engaged", "scroll to 50% or view pricing section", "Did the message hold them?"],
          ["3. Started form", "form_start", "Did they decide to act?"],
          ["4. Submitted", "generate_lead", "Did the form work for them?"],
          ["5. Qualified", "imported from CRM or a thank-you page variant", "Were they the right people?"]
        ]},
        { type: "steps", items: [
          "In GA4, open Explore and choose the Funnel exploration template.",
          "Add your steps in order using the events above; decide whether the funnel is open (users can enter at any step) or closed (must start at step 1).",
          "Set a date range of at least four weeks so the numbers are stable.",
          "Add a breakdown dimension such as device category, session source or city.",
          "Read the completion rate and abandonment at each step and find the largest drop.",
          "Use the \"show elapsed time\" option to see how long users take between steps."
        ]},
        { type: "callout", tone: "example", title: "Worked example: finding the leak", text: "Example: a Jaipur travel agency's funnel over four weeks: 10,000 landed, 6,200 engaged, 900 started the form, 270 submitted. The biggest relative drop is form start to submit: only 30% finish. Broken down by device, mobile completion is 22% and desktop 55%. The form had eight fields and a date picker that misbehaved on Android. Fixing the form is worth far more than buying more traffic: lifting submit rate to 50% would mean 450 leads instead of 270 from the same visitors." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Steps that are not tracked reliably, so the funnel shows false drops. Test each event first.",
          "Judging on a few days of data.",
          "Looking only at the total; device and source breakdowns usually reveal the real cause.",
          "Fixing the top of the funnel when the biggest leak is lower down."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a four- or five-step funnel exploration for your main landing page, break it down by device, and write one sentence naming the biggest drop and your best guess at why." }
      ],
      takeaways: [
        "A GA4 funnel exploration shows where users drop between steps.",
        "Use four to six tracked steps that match the buyer's path.",
        "Break down by device and source to find the real cause.",
        "Fix the biggest leak before buying more traffic."
      ]
    },
    {
      title: "Dashboards: one page, the 8 to 10 numbers that matter",
      minutes: 12,
      summary: "Build a free Looker Studio dashboard that pulls GA4, ad platforms and CRM sheets onto one page with the 8 to 10 numbers that drive decisions.",
      blocks: [
        { type: "p", text: "A dashboard is a decision tool, not a data museum. If the team cannot read it in two minutes and know what to do next, it has too much on it. Looker Studio is free, connects to GA4 and Google Ads natively, and can read Google Sheets, which is how most teams bring in Meta, LinkedIn and CRM data. This lesson prepares the week 11 joint session, where marketers and digital marketers build one shared funnel dashboard." },
        { type: "h", text: "Pick 8 to 10 numbers" },
        { type: "list", items: [
          "Spend by channel",
          "Sessions or visitors from each channel",
          "Leads by channel",
          "Landing page conversion rate",
          "Qualified leads by channel (from the CRM)",
          "Cost per qualified lead by channel",
          "Customers won and revenue (from the CRM)",
          "ROAS or revenue per rupee of spend",
          "Lead-to-contact time against the sales SLA",
          "One trend line: qualified leads per week"
        ]},
        { type: "h", text: "Connecting the data" },
        { type: "table", head: ["Source", "How it gets in"], rows: [
          ["GA4", "Native Looker Studio connector"],
          ["Google Ads", "Native connector"],
          ["Meta and LinkedIn ads", "Weekly export to a Google Sheet, or a third-party connector (verify costs)"],
          ["CRM", "Export or sync to a Google Sheet with lead ID, source, campaign, stage, qualified flag, revenue"]
        ]},
        { type: "steps", items: [
          "Agree definitions with marketing and sales: what is a lead, a qualified lead, a customer, and which date each is counted on.",
          "Make sure every lead in the CRM carries a source and campaign from UTM tags.",
          "Create a Google Sheet tab per non-native source with the same columns: date, channel, campaign, spend or counts.",
          "In Looker Studio, add GA4, Google Ads and the sheets as data sources, and blend them on date and channel where needed.",
          "Lay out one page: scorecards across the top, a channel table in the middle, the trend line at the bottom, and a date control.",
          "Share it with the team and review it in the same weekly meeting every week."
        ]},
        { type: "callout", tone: "example", title: "Worked example: the channel table", text: "Example: a Pune SaaS firm's monthly channel table. Google Search: ₹80,000 spend, 120 leads, 48 qualified, ₹1,667 per qualified lead. Meta: ₹60,000, 200 leads, 30 qualified, ₹2,000. LinkedIn: ₹50,000, 25 leads, 15 qualified, ₹3,333. Organic and referral: no spend, 60 leads, 36 qualified. Meta looked best on cost per lead (₹300) but Google wins on cost per qualified lead. The decision only became visible once CRM data sat next to spend." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your 8 to 10 numbers on one sheet, with the source and definition of each, and get your sales manager to agree the definition of a qualified lead before the joint session." }
      ],
      takeaways: [
        "A dashboard should drive decisions in two minutes; limit it to 8 to 10 numbers.",
        "Looker Studio is free and pulls GA4, Google Ads and Google Sheets.",
        "Bring ad platform and CRM data in through consistent sheets.",
        "Agree definitions with sales first, or the numbers will be argued, not used."
      ]
    },
    {
      title: "Attribution in practice: first touch, last touch and the CRM",
      minutes: 11,
      summary: "Compare first-touch and last-touch views of the same leads, and use the CRM to tie leads to revenue rather than trusting any one platform's credit.",
      blocks: [
        { type: "p", text: "A buyer might first find you through an Instagram Reel, read a blog post from a Google search a week later, get your nurture emails, and finally click a Google ad and fill the form. Who gets credit? Every ad platform tends to claim the sale for itself, so adding up platform-reported conversions usually gives more sales than you actually made. Attribution is about getting a fair, useful view, not a perfect one." },
        { type: "table", head: ["View", "Credit goes to", "Good for", "Blind spot"], rows: [
          ["First touch", "The channel that first brought the person", "Seeing which channels create new demand", "Ignores what closed the deal"],
          ["Last touch", "The channel just before conversion", "Seeing which channels capture and close demand", "Undervalues discovery channels like Reels or YouTube"],
          ["Data-driven (GA4 default)", "Shared across touches by a model", "A balanced view inside GA4", "Only sees tracked web touches, not calls or WhatsApp"]
        ]},
        { type: "h", text: "A practical approach for small teams" },
        { type: "steps", items: [
          "Capture first-touch source when a lead is created: store the UTM source and campaign of the first visit in hidden form fields or the CRM.",
          "Capture last-touch source at conversion as well; most forms and CRMs can store both.",
          "Ask on the form or first call: \"How did you first hear about us?\" This catches word of mouth, WhatsApp forwards and offline events.",
          "Each month, build a simple table: leads, qualified leads and revenue by first-touch channel and by last-touch channel.",
          "Look for channels that score high on first touch but low on last touch: these create demand others close. Do not cut them just because last-touch looks weak.",
          "Use CRM revenue, not platform conversions, as the final judge."
        ]},
        { type: "callout", tone: "example", title: "Worked example: two views of the same month", text: "Example: a Kochi furniture brand had 100 customers in a month. By last touch: Google Search 50, direct 25, Meta 15, Instagram organic 10. By first touch: Instagram organic 40, Meta 25, Google Search 20, referral 15. Last touch alone suggested cutting Instagram content; first touch showed it started 40% of eventual customers. The team kept Instagram content as the discovery engine and Google Search as the closer." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Adding up platform-reported conversions and believing the total.",
          "Changing attribution settings mid-quarter, which breaks comparisons.",
          "Ignoring offline and WhatsApp touches that never appear in GA4."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Add a \"How did you first hear about us?\" field to your main form, and pull last month's customers from the CRM to build a first-touch versus last-touch table." }
      ],
      takeaways: [
        "First touch shows who creates demand; last touch shows who captures it.",
        "Platform-reported conversions overlap; do not add them up.",
        "Store first and last touch in the CRM and ask buyers how they heard of you.",
        "CRM revenue is the final judge of channel value."
      ]
    },
    {
      title: "A/B testing without fooling yourself",
      minutes: 13,
      summary: "Run A/B tests with one hypothesis, one change, enough traffic and a fixed duration, and avoid stopping early on a lucky result.",
      blocks: [
        { type: "p", text: "An A/B test shows two versions to comparable audiences at the same time and measures which performs better. Done well, it replaces opinion with evidence. Done badly, it produces confident decisions based on noise. The most common error is stopping the test as soon as one version looks ahead." },
        { type: "h", text: "The four rules" },
        { type: "list", items: [
          "**One hypothesis:** \"Because mobile visitors abandon long forms, cutting the form from 8 fields to 4 will raise submit rate.\" It names the change, the reason and the metric.",
          "**One change:** change only the form length. Change three things and you cannot say which one worked.",
          "**Enough traffic:** small differences need large samples. If you get 50 visits a week, test bold changes, not button colours.",
          "**A fixed duration:** decide the length before you start, usually at least one to two full weeks to cover weekday and weekend behaviour, and do not stop early."
        ]},
        { type: "callout", tone: "warn", title: "Why stopping early misleads", text: "Early in a test, results swing widely by chance. If you check daily and stop the moment B is ahead, you will often crown a false winner from too little data. Fix the duration or sample size in advance and only decide at the end. Many testing tools show a significance or probability figure; read it at the planned end, not every morning." },
        { type: "callout", tone: "example", title: "Worked example: sizing the gain", text: "Example: a landing page converts 2% of 5,000 visits, which is 100 leads. A test lifts conversion to 3%, which is 150 leads per 5,000 visits: 50 extra leads. At a cost per visit of ₹10, cost per lead falls from ₹50,000 ÷ 100 = ₹500 to ₹50,000 ÷ 150 ≈ ₹333, with no extra spend." },
        { type: "h", text: "Running a test" },
        { type: "steps", items: [
          "Pick the biggest leak from your funnel exploration.",
          "Write the hypothesis: because X, changing Y will improve metric Z.",
          "Build version B with one change only.",
          "Split traffic 50/50 using your landing page tool, email tool's A/B feature or ad platform experiments (Google Optimize has been discontinued, so check current tool options).",
          "Set the duration or target sample in advance and write it down.",
          "At the end, record both conversion rates, the difference, and the decision: adopt B, keep A, or retest.",
          "Log every test, including losers, so the team does not repeat them."
        ]},
        { type: "h", text: "Good first tests" },
        { type: "list", items: [
          "Headline matching the ad versus a generic headline.",
          "Short form versus long form.",
          "WhatsApp button versus form only.",
          "Email subject line A versus B, on a list of a few thousand."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write one hypothesis for your biggest leak, set a fixed two-week duration, and launch the test. Put a reminder in your calendar for the end date and do not look at the winner before then." }
      ],
      takeaways: [
        "One hypothesis, one change, enough traffic, a fixed duration.",
        "Stopping early because B is ahead risks a false winner.",
        "Size the value: a lift from 2% to 3% on 5,000 visits is 50 extra leads.",
        "Log every test, including the losers."
      ]
    },
    {
      title: "The conversion checklist",
      minutes: 10,
      summary: "Audit any page against seven conversion factors: speed, a clear message above the fold, proof, form length, mobile layout, trust signals and a WhatsApp option.",
      blocks: [
        { type: "p", text: "Before running tests, fix the obvious problems. The conversion checklist is a quick audit that catches most of them in thirty minutes. Use it on landing pages, product pages and lead forms, and repeat it every quarter, because pages drift as people add banners and scripts." },
        { type: "table", head: ["Factor", "Check", "Quick fix"], rows: [
          ["Speed", "Loads in a few seconds on a mid-range phone on 4G", "Compress images, remove unused scripts and chat widgets"],
          ["Clear message above the fold", "A visitor knows what it is, who it is for and the next step without scrolling", "Rewrite the headline and sub-headline; put the call to action in view"],
          ["Proof", "Reviews, ratings, client logos, numbers or case results visible early", "Move the strongest proof under the headline"],
          ["Form length", "Only the fields sales needs now", "Cut to 3 to 5 fields; ask the rest on the call"],
          ["Mobile layout", "Readable text, thumb-sized buttons, no sideways scrolling", "Test on two real phones, Android and iPhone"],
          ["Trust signals", "Business name, address, contact, policies, secure checkout, privacy note", "Add a footer with these and a short consent note (verify DPDP)"],
          ["WhatsApp option", "A click-to-chat button for those who prefer to talk", "Add it and track clicks as a conversion"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: a quick audit", text: "Example: a Lucknow coaching centre's admissions page scored 3 of 7: it loaded in 8 seconds, the headline was the institute's name, and the form asked for 11 fields. Fixes in one afternoon: compressed banner images, a headline \"NEET foundation batch for Class 9 and 10, starts 5 June\", three parent reviews under the headline, a four-field form and a WhatsApp button. The page now scored 7 of 7, and the team set up an A/B test on the headline next." },
        { type: "steps", items: [
          "Open the page on a mid-range Android phone on mobile data and time the load.",
          "Look at the first screen for five seconds: write down what you think it offers and what to do.",
          "Score each of the seven factors pass or fail.",
          "Fix all quick fails today; list bigger ones as test ideas.",
          "Re-check GA4 conversion rate after two weeks."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Auditing on a fast office laptop.",
          "Treating checklist fixes as A/B tests; obvious fixes do not need a test.",
          "Adding pop-ups and chat widgets that slow the page and cover the form."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Audit your highest-traffic landing page against the seven factors on a real phone, fix every quick fail, and note the score before and after." }
      ],
      takeaways: [
        "Seven factors: speed, message above the fold, proof, form length, mobile layout, trust signals, WhatsApp option.",
        "Audit on a real mid-range phone on mobile data.",
        "Fix obvious failures directly; save A/B tests for real questions.",
        "Repeat the audit every quarter."
      ]
    },
    {
      title: "The monthly digital report",
      minutes: 10,
      summary: "Write a monthly report that shows results by channel, cost per qualified lead, lessons learned and next tests, instead of every metric available.",
      blocks: [
        { type: "p", text: "A monthly report exists so leaders can make decisions: where to move budget, what to stop, what to try next. Reports that list every metric available, or only likes and followers, or nothing on cost, waste the reader's time and hide the real story. Keep it to two pages that a busy founder or head of sales can read in five minutes." },
        { type: "h", text: "The four sections" },
        { type: "table", head: ["Section", "What goes in"], rows: [
          ["1. Results by channel", "Spend, leads, qualified leads, customers and revenue for each channel, against last month and target"],
          ["2. Cost per qualified lead", "By channel, with the trend and the target; flag any channel above target"],
          ["3. Lessons", "Three things learned, each backed by a number: a test result, a funnel change, a creative winner"],
          ["4. Next tests and decisions", "What you will scale, stop and test next month, with owner and date"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: a lesson written well", text: "Weak: \"Meta did well this month.\" Strong: \"Meta's before-and-after creative cut cost per qualified lead from ₹2,400 to ₹1,600 across 45 qualified leads; we will shift ₹20,000 from LinkedIn to Meta next month and test two new before-and-after variants.\" The strong version names the result, the evidence, the decision and the next test. (Illustrative numbers.)" },
        { type: "steps", items: [
          "On the first working day of the month, refresh the dashboard for the previous month.",
          "Copy the channel table and cost per qualified lead into the report template.",
          "Write a one-paragraph headline: the single most important result and decision.",
          "Write three lessons, each with a number and a cause.",
          "List next month's scale, stop and test decisions with owners and dates.",
          "Add a short appendix only if needed: test logs or campaign detail.",
          "Share it before the monthly review and walk through it in ten minutes."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Leading with reach and impressions instead of qualified leads and revenue.",
          "Reporting platform leads without CRM qualification.",
          "No decisions, so the same report repeats every month.",
          "Hiding failed tests; they are among the most useful lessons."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft last month's report using the four sections, even with rough numbers. Write one headline sentence a founder could act on." }
      ],
      takeaways: [
        "Four sections: results by channel, cost per qualified lead, lessons, next tests.",
        "Two pages, readable in five minutes, decisions included.",
        "Every lesson needs a number and a cause.",
        "Report CRM-qualified results, not just platform metrics."
      ]
    },
    {
      title: "AI tools with a human in the loop",
      minutes: 10,
      summary: "Use AI tools for faster drafts, ideas, translation and analysis, while a human checks facts, brand voice, permissions and copyright before anything is published.",
      blocks: [
        { type: "p", text: "AI assistants can draft captions, emails and ad variations in minutes, suggest test ideas, translate content into Hindi, Tamil or Marathi, and summarise a month of campaign data. Used well, they free time for strategy and customer conversations. Used carelessly, they publish wrong facts, off-brand tone, borrowed content and claims you cannot back." },
        { type: "h", text: "Where AI helps most" },
        { type: "list", items: [
          "**Drafts:** first versions of captions, emails, ad copy and landing page sections.",
          "**Ideas:** hooks, pillar ideas, headline variants and test hypotheses.",
          "**Translation and localisation:** regional-language versions, reviewed by a native speaker.",
          "**Analysis:** summarising exports, spotting outliers, drafting the monthly report's first pass."
        ]},
        { type: "h", text: "The human checks" },
        { type: "table", head: ["Check", "What to look for"], rows: [
          ["Facts", "Prices, specifications, dates, statistics and claims are correct and can be substantiated (ASCI and platform policies)"],
          ["Brand voice", "Sounds like you: your words, tone, language mix and level of formality"],
          ["Permissions", "Customer names, photos and reviews used only with consent; no personal data pasted into tools without checking policy and DPDP obligations (verify)"],
          ["Copyright", "No copying competitors' posts or others' images; check the licence for AI-generated images and music"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: a review step that saved a campaign", text: "Example: a Coimbatore textile brand asked an AI tool for ten Reel captions about its new organic cotton range. Two captions claimed \"certified organic\" and one said \"India's softest\". The brand's actual certification was still pending, and \"softest\" could not be substantiated. The reviewer changed these to \"made with organic cotton yarn, certification in process\" and \"soft enough for newborns, ask any of our 2,000 parents\" (illustrative). The drafts saved two hours; the review avoided a misleading claim." },
        { type: "steps", items: [
          "Write a short brand voice note (tone, words you use, words you avoid, language mix) and give it to the AI tool with every request.",
          "Give the tool your real facts and proof points; tell it not to invent statistics.",
          "Generate several drafts and pick or combine the best.",
          "Run the four human checks: facts, brand voice, permissions, copyright.",
          "Record which content was AI-assisted, and follow any platform labelling rules for AI-generated media (verify)."
        ]},
        { type: "list", items: [
          "Do not paste customer lists or personal data into tools without checking the tool's data policy.",
          "Do not feed competitors' posts in to produce lookalike copy.",
          "Do not publish without review, and do not refuse AI outright; use it with checks."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your one-paragraph brand voice note, use an AI tool to draft five captions or emails with it, and run the four checks before publishing. Note the time saved and every correction you had to make." }
      ],
      takeaways: [
        "AI speeds up drafts, ideas, translation and analysis.",
        "A human checks facts, brand voice, permissions and copyright before publishing.",
        "Give the tool your real facts and a brand voice note; forbid invented statistics.",
        "Never paste personal data or competitors' content without thought."
      ]
    }
  ]
});
