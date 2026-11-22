Academy.add("D6", "lessons", {
  lessons: [
    {
      title: "Paid ads scale what already works",
      minutes: 9,
      summary: "Why you fix the message and landing page before spending on ads, and how to check you are ready to pay for traffic.",
      blocks: [
        { type: "p", text: "Paid media is an amplifier. If your message is clear and your landing page converts, ads let you buy more of a result you already get. If the message is muddled or the page leaks visitors, ads buy more of a loss, faster. The most expensive mistake in digital marketing is switching on a ₹1 lakh budget to \"see what happens\" before the basics work." },
        { type: "h", text: "The readiness check" },
        { type: "list", items: [
          "**A clear message:** you can say in one line who it is for, the result and why you, and real buyers repeat it back.",
          "**Organic or referral proof:** some customers have already come from search, Instagram, WhatsApp or referrals at an acceptable conversion rate.",
          "**A landing page that converts:** a single page with one call to action that turns a known share of visitors into leads.",
          "**Tracking that works:** conversions fire in GA4 and the ad platforms, and leads reach the CRM with their source (set up in D1).",
          "**A sales follow-up process:** someone calls or messages every lead within the agreed time."
        ]},
        { type: "callout", tone: "example", title: "Worked example: the cost of skipping the basics", text: "Example: a Hyderabad coaching institute spent ₹60,000 on ads to a homepage with six menu items and no form. It got 2,400 clicks and 12 enquiries: ₹5,000 per lead. After building one landing page with a single message (\"Weekend GMAT batch, 40 hours, small groups\"), one form and a WhatsApp button, the same budget and audience produced 72 enquiries: about ₹833 per lead. The ads did not change; the destination did." },
        { type: "h", text: "How to get ready" },
        { type: "steps", items: [
          "Write the message: one line on who it is for, the result, and the proof.",
          "Test it free first: post it organically, send it to 20 past enquiries on WhatsApp, or use it in sales calls, and watch the response.",
          "Build or fix a single landing page for this offer (see the landing page lesson).",
          "Confirm tracking: submit a test lead and check it appears in GA4, the ad platform and the CRM with the right source.",
          "Agree the follow-up SLA with sales, for example every paid lead called within 1 working hour.",
          "Only then set a small test budget and a target cost per qualified lead."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using ads to discover what the product is for; use interviews and organic tests for that.",
          "Sending ad traffic to the homepage.",
          "Judging ads on clicks or leads when sales never followed up.",
          "Raising the budget to fix a low conversion rate."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Run the five-point readiness check on the product you plan to advertise. Fix the weakest point before you spend a rupee, and write down the one-line message you will test." }
      ],
      takeaways: [
        "Ads amplify; they scale a working message and page, or they scale a loss.",
        "Check message, proof, landing page, tracking and follow-up before spending.",
        "Send paid traffic to a dedicated landing page, never the homepage.",
        "Low conversion is fixed on the page, not with a bigger budget."
      ]
    },
    {
      title: "Google Search: buying intent, one keyword at a time",
      minutes: 13,
      summary: "Structure a Google Search campaign around keyword intent, match types, responsive search ads, negative keywords and ad assets, and know when Performance Max fits.",
      blocks: [
        { type: "p", text: "Search ads reach people at the moment they are looking. Someone typing \"GST billing software for retail shop\" has a problem and is comparing options right now. That intent is why search often produces the most qualified leads per rupee, provided you buy the right searches and block the wrong ones." },
        { type: "h", text: "Keywords by intent" },
        { type: "table", head: ["Intent", "Example searches", "How to treat it"], rows: [
          ["High (ready to buy)", "\"buy billing software\", \"billing software price\", \"tally alternative for shop\"", "Bid strongest; send to a pricing or demo page"],
          ["Medium (comparing)", "\"best billing software for retail\", \"billing app vs excel\"", "Bid moderately; send to a comparison or proof page"],
          ["Low (learning)", "\"what is e-invoicing\", \"how to make GST bill\"", "Usually leave to SEO and content; test cautiously"],
          ["Wrong fit", "\"billing software free download\", \"billing software jobs\"", "Add as negative keywords"]
        ]},
        { type: "h", text: "Match types and negatives" },
        { type: "list", items: [
          "**Exact match** shows for searches with the same meaning as your keyword: tight control.",
          "**Phrase match** shows for searches that include the meaning of your phrase: a balance of reach and control.",
          "**Broad match** shows for related searches; it works best with smart bidding and good conversion data. Verify current match type behaviour in Google's help pages, as it changes.",
          "**Negative keywords** stop your ad showing for searches you do not want, such as \"free\", \"jobs\", \"course\", \"download\" or \"crack\". Review the search terms report weekly and add new ones."
        ]},
        { type: "h", text: "Ads, assets and Performance Max" },
        { type: "p", text: "Responsive search ads let you supply several headlines and descriptions; Google tests combinations. Write headlines that include the keyword, the result, a proof point and a call to action. Add ad assets (formerly extensions): sitelinks, callouts such as \"Free demo\" or \"Hindi support\", call and location assets, and structured snippets. Performance Max runs across Search, YouTube, Display, Gmail and Maps from one campaign; it can widen reach once conversion tracking is solid, but gives less control, so start most tests with a plain Search campaign." },
        { type: "callout", tone: "example", title: "Worked example: a campaign plan", text: "Example: a Nagpur firm selling billing software. Ad group 1, \"billing software price\" (exact and phrase, 7 keywords). Ad group 2, \"billing software for retail shop\" (phrase, 8 keywords). Ad group 3, \"tally alternative\" (phrase, 5 keywords). Negatives: free, download, crack, jobs, course, tutorial, pdf, apk, salary, training. Two responsive search ads per ad group. Target cost per lead ₹600." },
        { type: "steps", items: [
          "List 40 candidate searches from sales calls, Google autocomplete and the Keyword Planner.",
          "Sort them by intent and keep the 20 best high and medium intent keywords.",
          "Group them into 3 to 5 tight ad groups by theme.",
          "Write 10 negative keywords before launch.",
          "Write 2 responsive search ads per ad group and add at least four asset types.",
          "Set location and language targeting to match where you can actually serve."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft your search plan: 20 keywords by intent in 3 to 5 ad groups, 10 negatives and 2 ads. Check the plan against your last 20 real enquiries: would those people have searched these words?" }
      ],
      takeaways: [
        "Search buys intent; prioritise ready-to-buy and comparing searches.",
        "Match types trade reach for control; negatives remove wasted spend.",
        "Responsive search ads plus assets improve relevance and space on the page.",
        "Start with a plain Search campaign; consider Performance Max once tracking is solid."
      ]
    },
    {
      title: "Meta ads: audiences, automation and creative as the lever",
      minutes: 12,
      summary: "Choose the right Meta campaign objective, use broad, lookalike and custom audiences sensibly, and treat creative as the main thing you test.",
      blocks: [
        { type: "p", text: "Meta (Facebook and Instagram) ads reach people who are not searching but match who you want. You interrupt their scroll, so the ad has to earn attention. Meta's delivery system has become heavily automated: it finds the people most likely to take the action you choose. That shifts your job from fine-grained targeting to choosing the right objective, feeding good conversion data and making strong creative. Campaign types and names change often, so verify current options in Meta's help pages." },
        { type: "h", text: "Objectives" },
        { type: "list", items: [
          "**Awareness:** reach and frequency, for launches or local presence.",
          "**Traffic:** clicks to a page; cheaper clicks, but not necessarily buyers.",
          "**Engagement:** includes messages, for example click-to-WhatsApp or Instagram DM ads.",
          "**Leads:** instant forms on Meta or conversions on your site.",
          "**Sales:** purchases or other conversion events, using the pixel and Conversions API."
        ]},
        { type: "p", text: "Choose the objective that matches the business outcome. If you want leads, a Leads or Engagement (messages) objective usually beats Traffic, because Meta optimises for what you ask." },
        { type: "h", text: "Audiences" },
        { type: "table", head: ["Audience", "What it is", "When to use it"], rows: [
          ["Broad", "Age, location, language, few or no interests", "Often the default with good creative and conversion data"],
          ["Custom", "People who visited your site, engaged on Instagram, or are in your consented customer list", "Retargeting and re-engagement"],
          ["Lookalike", "People similar to a custom audience, such as past buyers", "Finding new prospects like your best customers"]
        ]},
        { type: "p", text: "Automated campaign options (such as Advantage+ variants) let Meta choose audiences, placements and budget split. They can work well, but read results by cost per qualified lead, not just platform-reported leads." },
        { type: "callout", tone: "example", title: "Worked example: creative is the lever", text: "Example: a Kochi Ayurvedic skincare brand ran three creatives to the same broad audience, changing only the hook. Creative A, \"Dry skin in AC offices?\", cost ₹180 per lead; B, a product shot with \"100% natural\", cost ₹420; C, a customer's 4-week before and after (with consent), cost ₹150. Same budget, same audience, nearly three times the difference in cost per lead from creative alone." },
        { type: "steps", items: [
          "Pick one objective that matches the outcome you want.",
          "Start with one broad audience in the areas you serve, plus one retargeting custom audience.",
          "Make 3 creatives that change one variable only: the hook, the image or the offer.",
          "Run them in one ad set with equal chance, for a fixed period.",
          "Compare cost per lead and, from the CRM, cost per qualified lead; keep the winner and test the next variable."
        ]},
        { type: "callout", tone: "warn", title: "Data and consent", text: "Uploading customer lists for custom audiences involves personal data. Use only contacts who consented, follow Meta's terms, and check current DPDP Act obligations (verify)." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write three versions of one Meta ad that differ only in the hook. Use a real customer problem in each and keep image and offer identical." }
      ],
      takeaways: [
        "Pick the objective that matches the outcome; Meta optimises for what you ask.",
        "Broad, custom and lookalike audiences each have a role; automation does much of the targeting.",
        "Creative is the main lever; test one variable at a time.",
        "Judge by cost per qualified lead from the CRM, not platform-reported leads alone."
      ]
    },
    {
      title: "LinkedIn ads: precise B2B targeting at a premium",
      minutes: 9,
      summary: "When LinkedIn's job-title targeting justifies its higher cost per click, and how to run a lean B2B test.",
      blocks: [
        { type: "p", text: "LinkedIn lets you target by job title, function, seniority, company size and industry. For B2B products with a narrow buyer, say finance heads at manufacturing firms with 200 to 1,000 employees, that precision is hard to match elsewhere. The trade-off is price: clicks usually cost several times more than on Meta or many Google searches. The question is never \"is LinkedIn expensive?\" but \"is the cost per qualified lead acceptable for my deal size?\"" },
        { type: "h", text: "When LinkedIn makes sense" },
        { type: "list", items: [
          "Deal values are high enough to absorb a high cost per lead, for example annual contracts of several lakh rupees.",
          "The buyer is defined by role and company, not by interest or behaviour.",
          "You have a strong offer for that role: a benchmark report, a calculator, a webinar or a demo.",
          "Your sales team can follow up on enterprise leads within the SLA."
        ]},
        { type: "callout", tone: "example", title: "Worked example: is it worth it?", text: "Example: a Bengaluru HR-tech firm sells a ₹6 lakh per year platform. LinkedIn clicks cost about ₹150; a lead form converts 8% of clicks, so cost per lead is ₹150 ÷ 0.08 = ₹1,875. If 30% of leads are qualified, cost per qualified lead is ₹6,250. If 1 in 8 qualified leads closes, cost per customer from ads is ₹50,000, under 10% of first-year revenue. The same maths for a ₹5,000 product would be a clear no." },
        { type: "steps", items: [
          "Define the target: 2 to 4 job titles or functions, seniority, company size and geography.",
          "Check audience size in Campaign Manager; very small audiences limit delivery, very large ones dilute precision.",
          "Choose a lead-gen form with 3 to 5 fields, pre-filled from profiles, or send to a landing page.",
          "Write a role-specific offer and headline (\"For CFOs of mid-size manufacturers: close books 3 days faster\").",
          "Set a modest daily budget and run for at least two to three weeks.",
          "Sync leads to the CRM and track qualified rate and pipeline, not just form fills."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Targeting everyone with \"Manager\" in the title; precision is the point.",
          "Running a generic brand ad on the most expensive clicks you will buy.",
          "Calling the test after a week because cost per click looks high.",
          "Letting form leads sit uncalled for days."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Do the LinkedIn maths for your product: expected cost per click, form conversion, qualified rate and close rate. If cost per customer is under your acceptable acquisition cost, sketch a two-week test." }
      ],
      takeaways: [
        "LinkedIn offers precise job-title and company targeting for B2B.",
        "Clicks cost more, so judge by cost per qualified lead against deal size.",
        "Pair precise targeting with a role-specific, valuable offer.",
        "Run long enough to learn, and follow up leads fast."
      ]
    },
    {
      title: "Budgets and bidding: start small, learn, cut losers",
      minutes: 11,
      summary: "Set a target cost per lead from your unit economics, start with a small test budget, give campaigns time to learn and stop losers fast.",
      blocks: [
        { type: "p", text: "Budgeting for a paid test is not guessing a round number. Work backwards from what a customer is worth and what you can afford to pay for a lead, then fund a test big enough to produce a decision." },
        { type: "h", text: "Work out the target cost per lead" },
        { type: "callout", tone: "example", title: "Worked example: from margin to target CPL", text: "Example: a Pune SaaS firm earns ₹2,000 gross margin a month per customer and keeps customers about 18 months: lifetime margin ₹36,000. It decides to spend at most a third on acquisition, ₹12,000 per customer. Sales close 1 in 5 qualified leads, so the most it can pay per qualified lead is ₹12,000 ÷ 5 = ₹2,400. If half of all leads are qualified, the target cost per lead is ₹1,200." },
        { type: "h", text: "Size the test" },
        { type: "p", text: "A test needs enough conversions to tell you something. A useful rule of thumb is to budget for at least 20 to 30 leads per campaign you test. At a target of ₹1,200 per lead, 25 leads means about ₹30,000. Spread over three to four weeks, that is roughly ₹1,000 to ₹1,500 a day." },
        { type: "h", text: "Bidding" },
        { type: "list", items: [
          "**Manual or maximise clicks:** simple for very new accounts with no conversion data, but optimises for clicks, not leads.",
          "**Maximise conversions:** the platform aims for the most leads within budget once tracking works.",
          "**Target CPA (cost per acquisition):** set a target cost per lead once you have a steady flow of conversions.",
          "Check current bidding options and recommended thresholds in each platform's help pages (verify)."
        ]},
        { type: "h", text: "Give it time, then decide" },
        { type: "steps", items: [
          "Launch and leave it alone for the learning period, usually around a week; avoid daily edits that reset learning.",
          "Check daily only for broken things: disapproved ads, zero spend, tracking failures, junk search terms.",
          "After the learning period, compare each campaign or ad against the target cost per lead.",
          "Stop clear losers fast: anything spending twice the target CPL without a lead, or running well above target with poor lead quality.",
          "Shift budget to winners in steps of about 20 to 30%, not by doubling overnight.",
          "At the end of the test, decide: scale, fix and retest, or stop."
        ]},
        { type: "callout", tone: "warn", title: "Watch GST and invoices", text: "Ad platforms bill in different ways and GST treatment on ad spend can differ by billing entity and setup. Check current invoices and input tax credit rules with your accountant (verify)." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Calculate your target cost per lead from margin, retention, close rate and qualified rate. Then size a test budget for 25 leads and write your scale-or-stop rule before launch." }
      ],
      takeaways: [
        "Derive target cost per lead from customer value, close rate and qualified rate.",
        "Budget for at least 20 to 30 leads per test so the result means something.",
        "Let campaigns learn before editing; stop clear losers quickly.",
        "Scale winners in steps, and write the decision rule before you launch."
      ]
    },
    {
      title: "Landing pages that keep the ad's promise",
      minutes: 11,
      summary: "Build a landing page with one matching message, one call to action, proof, a short form, a WhatsApp option and fast mobile loading.",
      blocks: [
        { type: "p", text: "When click-through rate is high but few visitors convert, the problem is almost always the landing page. The visitor clicked because the ad promised something; if the page does not keep that promise within a second or two, they leave. In India, where most ad traffic comes from mobile phones on variable networks, speed and mobile layout matter as much as copy." },
        { type: "h", text: "The landing page checklist" },
        { type: "table", head: ["Element", "What good looks like"], rows: [
          ["Message match", "The headline repeats the ad's promise and keyword"],
          ["One call to action", "One action, repeated; no menu or distracting links"],
          ["Proof", "Reviews, client logos, numbers, ratings or a short video testimonial near the top"],
          ["Short form", "Only what sales needs to follow up: name, phone, city, one qualifying question"],
          ["WhatsApp option", "A click-to-chat button with a pre-filled message for those who prefer to chat"],
          ["Fast mobile loading", "Compressed images, minimal scripts; test on a mid-range phone on 4G"],
          ["Trust signals", "Address, GST-registered business name, refund policy, privacy note on the form"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: fixing a leaking page", text: "Example: an Ahmedabad solar installer's ad said \"Rooftop solar: check your subsidy in 2 minutes\". The page opened with \"Welcome to Sunrise Energy, leaders since 2012\", had a nine-field form and loaded in 7 seconds. Fixes: headline \"Check your rooftop solar subsidy in 2 minutes\" (subsidy rules to be verified), three customer photos with bill savings, a four-field form, a WhatsApp button and compressed images. In this illustration, conversion rose from 1.5% to 4% on the same traffic." },
        { type: "steps", items: [
          "Open your ad and landing page side by side on a phone. Does the headline say the same thing as the ad?",
          "Remove the navigation menu and every link that is not the call to action.",
          "Move your strongest proof above the fold or right under the headline.",
          "Cut the form to the fields sales truly uses; move the rest to the follow-up call.",
          "Add a WhatsApp click-to-chat button and track it as a conversion.",
          "Test page speed with a free tool and on a real mid-range phone, and fix the largest images first.",
          "Add a short consent and privacy note on the form, in line with current DPDP rules (verify)."
        ]},
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "One landing page for every ad, so the message never matches.",
          "Asking for company size, budget and designation on the first form.",
          "Design checked only on a laptop."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Audit your landing page against the seven-point checklist, score each item pass or fail, and fix the three biggest failures before your test goes live." }
      ],
      takeaways: [
        "High CTR with low conversion points to the landing page.",
        "Match the ad's message, use one call to action and show proof early.",
        "Short forms plus a WhatsApp option suit Indian buyers.",
        "Test speed and layout on a real mid-range phone."
      ]
    },
    {
      title: "Metrics: from impressions to cost per qualified lead",
      minutes: 12,
      summary: "Calculate and interpret impressions, CTR, CPC, conversion rate, cost per lead, cost per acquisition and ROAS, and add cost per qualified lead from the CRM.",
      blocks: [
        { type: "p", text: "Ad platforms show dozens of numbers. You need a short chain that links spend to revenue, and you need to know which link is broken when results disappoint. The final number, cost per qualified lead, comes from your CRM, not the ad platform." },
        { type: "table", head: ["Metric", "Formula", "What it diagnoses"], rows: [
          ["Impressions", "Times the ad was shown", "Reach and budget delivery"],
          ["CTR", "Clicks ÷ impressions", "Ad relevance and creative"],
          ["CPC", "Spend ÷ clicks", "Competition and quality"],
          ["Conversion rate", "Leads ÷ clicks", "Landing page and offer"],
          ["Cost per lead (CPL)", "Spend ÷ leads", "Overall efficiency to lead"],
          ["Cost per acquisition (CPA)", "Spend ÷ customers (or chosen conversion)", "Efficiency to sale"],
          ["ROAS", "Revenue from ads ÷ ad spend", "Return on spend"],
          ["Cost per qualified lead", "Spend ÷ leads that sales accepted as qualified", "True lead quality"]
        ]},
        { type: "callout", tone: "example", title: "Worked example: following the chain", text: "Example: you spend ₹50,000 at a CPC of ₹25, which buys 50,000 ÷ 25 = 2,000 clicks. At a 4% conversion rate that is 2,000 × 0.04 = 80 leads, so CPL is 50,000 ÷ 80 = ₹625. Sales qualify 30 of the 80: cost per qualified lead is 50,000 ÷ 30 ≈ ₹1,667. Six become customers with an average first order of ₹25,000, so revenue is ₹1,50,000 and ROAS is 1,50,000 ÷ 50,000 = 3, often written 3x or 300%. CPA is 50,000 ÷ 6 ≈ ₹8,333." },
        { type: "h", text: "Diagnosing problems" },
        { type: "list", items: [
          "**Low CTR:** the ad does not speak to the searcher or scroller; rework the hook, headline or targeting.",
          "**High CPC:** heavy competition or poor relevance; tighten keywords, improve ad quality, or try other intents.",
          "**High CTR but low conversion:** the landing page breaks the ad's promise; fix the page first, not the bid.",
          "**Cheap leads, few qualified:** the targeting or form is attracting the wrong people; add a qualifying question or negatives.",
          "**Good qualified rate, low ROAS:** look at sales follow-up, close rate or pricing."
        ]},
        { type: "steps", items: [
          "Make sure every lead in the CRM carries its source, campaign and ad (UTM tags and hidden form fields).",
          "Agree with sales what \"qualified\" means, using the definitions from your sales stages.",
          "Each week, pull spend from the platforms and qualified leads and revenue from the CRM into one sheet.",
          "Compute CPL, cost per qualified lead, CPA and ROAS by campaign.",
          "Find the weakest link in the chain and fix only that."
        ]},
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a one-row-per-campaign sheet with spend, impressions, clicks, leads, qualified leads, customers and revenue. Fill it with last month's numbers, even if rough, and name the weakest link." }
      ],
      takeaways: [
        "The chain: impressions, CTR, CPC, conversion rate, CPL, CPA, ROAS.",
        "ROAS is revenue from ads divided by ad spend.",
        "Cost per qualified lead comes from the CRM and is the number that matters.",
        "Diagnose the weakest link and fix only that."
      ]
    },
    {
      title: "Claims: platform policies, ASCI and honest advertising",
      minutes: 9,
      summary: "Keep ads within platform ad policies and the ASCI code for advertising in India, and never overclaim.",
      blocks: [
        { type: "p", text: "An ad that is disapproved costs you time; an ad that misleads buyers costs you trust, refunds and possibly regulatory trouble. Google, Meta and LinkedIn each have advertising policies that cover restricted categories (finance, health, real estate, education and more), personal attributes, before-and-after claims and landing page standards. In India, the Advertising Standards Council of India (ASCI) code sets self-regulatory standards: claims must be truthful and substantiated, not misleading, and influencer content must be disclosed. Consumer protection law also covers misleading advertising. All of these change, so verify current rules before each campaign." },
        { type: "h", text: "Rules of thumb" },
        { type: "list", items: [
          "**Substantiate every claim.** \"No. 1\", \"best\", \"guaranteed\", \"100% results\" or \"cheapest in India\" need evidence you can produce, or should be dropped.",
          "**Avoid personal-attribute targeting language** such as \"Are you diabetic?\" or \"Struggling with debt?\"; platforms restrict ads that imply knowledge of the viewer's health, finances or identity.",
          "**Be careful with health, finance, education and real estate.** These often need certifications, disclaimers or registration numbers (verify by category).",
          "**Show real prices and terms.** If the price excludes GST, delivery or installation, say so.",
          "**Disclose partnerships.** Influencer and creator ads must be clearly labelled as ads or paid partnerships.",
          "**Use testimonials with consent and keep them genuine.**"
        ]},
        { type: "callout", tone: "example", title: "Worked example: rewriting an overclaim", text: "Example: a Delhi coaching brand's ad: \"Guaranteed IIM admission! 100% success rate! India's No. 1 coaching!\" Each claim is hard to substantiate and risky. Rewrite: \"Small-batch CAT coaching in South Delhi. 40 hours of mock interviews. Read 120+ student reviews.\" It is specific, verifiable and still persuasive." },
        { type: "steps", items: [
          "List every claim in your ad and landing page.",
          "Next to each, write the evidence you hold: data, certificates, review counts, test reports.",
          "Remove or soften any claim without evidence.",
          "Check the relevant platform's policy page for your category and the current ASCI guidelines (verify).",
          "Add required disclaimers, prices inclusive or exclusive of GST, and partnership labels.",
          "Keep a claims file so you can answer a complaint or platform review quickly."
        ]},
        { type: "callout", tone: "warn", title: "Verify before each campaign", text: "Platform ad policies, ASCI guidelines and consumer protection rules are updated regularly, and some categories need specific approvals. Treat this lesson as a checklist, not legal advice, and check the current texts." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Run a claims audit on your planned ads and landing page. Every claim gets evidence or gets cut, and save the evidence in a shared claims file." }
      ],
      takeaways: [
        "Follow each platform's ad policies and the ASCI code; verify current rules.",
        "Every claim needs evidence; drop superlatives you cannot prove.",
        "Avoid copy that implies knowledge of a viewer's personal attributes.",
        "Specific, verifiable claims persuade better than overclaims."
      ]
    }
  ]
});
