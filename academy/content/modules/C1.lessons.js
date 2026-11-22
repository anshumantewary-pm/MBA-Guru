Academy.add("C1", "lessons", {
  lessons: [
    {
      title: "Research types: primary and secondary",
      minutes: 10,
      summary: "How to choose between collecting fresh evidence from buyers and using what has already been published.",
      blocks: [
        { type: "p", text: "Every marketing decision rests on a guess about buyers. Research is how you replace the guess with evidence. There are two families of research, and a good marketer uses both. **Primary research** is evidence you collect yourself, for your question, from the people who matter: interviews, surveys, field visits and observation. **Secondary research** is evidence someone else has already collected: industry reports, company filings, government data, Google Trends and search keyword data." },
        { type: "h", text: "What each type is good for" },
        { type: "table", head: ["", "Primary", "Secondary"], rows: [
          ["Examples", "Interviews with 15 target buyers, a Google Forms survey, a day at a dealer counter", "IBEF and Nasscom summaries, a competitor's annual report, Google Trends, search volumes"],
          ["Best for", "Why buyers behave as they do; your specific segment", "Market size, trends, context, competitor moves"],
          ["Cost and time", "Higher; you must recruit and run it", "Low; often free and fast"],
          ["Main weakness", "Small samples, your own bias in questions", "Not about your buyer, may be dated or too broad"]
        ] },
        { type: "p", text: "Start with secondary research because it is cheap and stops you asking buyers questions that a report already answers. Then use primary research for what only your buyers can tell you: their words, their trade-offs, who they trust and what made them switch the last time." },
        { type: "h", text: "How to run a one-week research sprint" },
        { type: "steps", items: [
          "Write the decision you need to make, such as \"Should we launch in tier 2 Gujarat before Maharashtra?\"",
          "List the 3 to 5 questions that decision depends on.",
          "Spend half a day on secondary sources: an industry summary, two competitor websites and filings, and Google Trends for your category terms by state.",
          "Mark each question as answered, partly answered or open.",
          "Plan primary research only for the open questions: who you will interview, where you will visit and what you will observe.",
          "Record every source with its date so a reader can check it."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Coimbatore maker of billing software for kirana stores wants to know whether to sell through distributors. Secondary research (a retail sector summary and Google Trends for \"billing software\" in Tamil Nadu) shows search interest rising in smaller towns. That does not explain how shop owners buy. So the team visits 12 shops in two towns and interviews 8 owners. Six of the eight say they bought their last software because their FMCG distributor's salesman recommended it. Secondary data showed the opportunity; primary data showed the route." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Treating a report's national number as true for your segment.",
          "Calling a chat with two friends \"primary research\".",
          "Skipping secondary research and wasting interview time on facts you could have looked up.",
          "Not dating sources, so old figures creep into a new plan."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write down one decision your team faces this quarter. List its 3 to 5 questions, answer what you can from free secondary sources in two hours, and mark which questions need primary research." }
      ],
      takeaways: [
        "Primary research is collected by you for your question; secondary already exists.",
        "Do secondary first: it is cheap and sharpens your primary questions.",
        "Use primary research for the why, the words and the trust routes of your buyer.",
        "Date and record every source."
      ]
    },
    {
      title: "Qualitative first, then quantitative",
      minutes: 10,
      summary: "Why interviews come before surveys, and how to run a buyer interview that finds the right questions.",
      blocks: [
        { type: "p", text: "Qualitative research (interviews, observation, open conversations) tells you what matters and how buyers describe it. Quantitative research (surveys, analytics, sales data) tells you how many people feel that way. The order matters. If you survey first, you only measure the options you thought of, written in your words rather than the buyer's. Interviews find the right questions; surveys then measure them." },
        { type: "h", text: "How to run a discovery interview" },
        { type: "steps", items: [
          "Recruit 8 to 15 people from your target segment, including some who chose a rival or chose nothing.",
          "Ask about past behaviour, not opinions: \"Tell me about the last time you bought...\" rather than \"Would you buy...?\"",
          "Follow the story: what triggered the search, who else was involved, what they compared, what nearly stopped them.",
          "Note their exact words, especially for problems and outcomes. These become survey options and later ad copy.",
          "Stop when new interviews mostly repeat what you have heard; that is usually between 8 and 15 for one segment.",
          "Group what you heard into themes and turn each theme into a measurable survey question."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Jaipur firm selling HR software to small manufacturers assumes buyers care most about payroll accuracy. In 10 interviews, owners keep raising something else: chasing attendance from contract workers across two shifts. The team's draft survey had no option for attendance at all. After the interviews, the survey asks \"Which of these takes the most of your time each month?\" with options taken from the owners' own words. Of 42 replies, 19 pick attendance. Without the interviews, the survey would have measured the wrong problem precisely." },
        { type: "h", text: "What each method answers" },
        { type: "table", head: ["Question", "Use"], rows: [
          ["What problems do buyers have and how do they describe them?", "Interviews"],
          ["How many buyers in the segment have problem X?", "Survey"],
          ["Why did a buyer choose a rival?", "Interviews"],
          ["Which of three features is most wanted, and by whom?", "Survey, after interviews named the features"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Pitching during an interview. You are there to learn, not to sell.",
          "Asking hypothetical questions and treating polite yeses as demand.",
          "Interviewing only happy customers.",
          "Writing survey options in internal jargon instead of buyer language."
        ] },
        { type: "callout", tone: "india", title: "In India", text: "Many SMB owners will speak more freely in Hindi or a regional language, at their shop or factory, than on a scheduled video call in English. A short WhatsApp voice note asking for 20 minutes \"to learn, not to sell\" often gets a better response than a formal email." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Book five 20-minute interviews with target buyers. Ask each to walk you through their last purchase in your category, write down their exact phrases, and list the three themes you will measure in your survey." }
      ],
      takeaways: [
        "Interviews find the right questions; surveys measure them.",
        "Ask about past behaviour, not future intentions.",
        "Capture buyers' exact words for later survey options and copy.",
        "Stop interviewing a segment when answers start repeating."
      ]
    },
    {
      title: "Survey design that gives honest answers",
      minutes: 11,
      summary: "How to write a short, neutral survey and get at least 30 replies from the right segment.",
      blocks: [
        { type: "p", text: "A survey is only as good as its questions and its respondents. Bad wording produces confident numbers that mean nothing. The rules are simple: keep it short, keep the wording neutral, ask one idea per question, and never lead the respondent towards the answer you want. Aim for **30 or more replies from the target segment** for a directional read. That is not a statistically precise study, but it is enough to see which way the answers lean." },
        { type: "h", text: "Leading versus neutral" },
        { type: "table", head: ["Problem", "Bad question", "Better question"], rows: [
          ["Leading", "Don't you agree our product saves time?", "How much time does month-end billing take you?"],
          ["Two ideas in one", "Is our app fast and easy to use?", "How easy is the app to use? (then a separate question on speed)"],
          ["Vague", "Do you buy often?", "How often did you reorder stock in the last 3 months?"],
          ["Jargon", "Do you use an ERP for SKU-level replenishment?", "How do you decide when to reorder each product?"]
        ] },
        { type: "h", text: "Steps to build a 10-question survey" },
        { type: "steps", items: [
          "Write the one decision the survey informs at the top of your draft.",
          "Start with 1 or 2 screening questions so you can filter out people outside the segment.",
          "Add 6 to 7 questions drawn from your interview themes, using buyers' own words as options.",
          "Prefer behaviour questions (last purchase, frequency, channel, budget) over opinion questions.",
          "End with one open question, such as \"What would make this easier for you?\"",
          "Test it with 3 people and fix anything they hesitate over.",
          "Distribute through channels your segment uses: dealer networks, WhatsApp groups, trade associations, your customer list."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Nagpur agri-inputs brand sends a 10-question Google Form to 120 dealers through its sales team's WhatsApp. It gets 38 replies; 4 are from non-dealers and are screened out, leaving 34. Of those, 21 say they place most orders by phone with the distributor's salesman, 9 by WhatsApp and 4 by app. That is a directional read: phone and WhatsApp ordering matters far more than the app the team had planned to promote. The team does not claim \"62% of Indian dealers\"; it says \"most of the 34 dealers we surveyed\"." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Twenty-plus questions: completion drops and late answers get careless.",
          "Surveying whoever is easy to reach instead of the target segment.",
          "Reporting small-sample percentages as if they were national facts.",
          "Offering a large reward that attracts people outside the segment."
        ] },
        { type: "callout", tone: "warn", title: "Consent and data", text: "If you collect names or phone numbers, say why and how you will use them, and collect only what you need. India's data protection rules (the DPDP Act and Rules) apply to personal data; verify the current requirements before you run a survey at scale." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draft your 10-question survey in Google Forms, test it with three people, and rewrite any question that is leading, vague or asks two things at once." }
      ],
      takeaways: [
        "Short, neutral, one idea per question, no leading wording.",
        "30 or more replies from the target segment gives a directional read, not a precise one.",
        "Screen out respondents who are not in your segment.",
        "Report small samples honestly."
      ]
    },
    {
      title: "Segmenting India: beyond metro versus the rest",
      minutes: 11,
      summary: "Five practical dimensions for segmenting Indian buyers, and how each changes your marketing.",
      blocks: [
        { type: "p", text: "India is not one market. A buyer in Bengaluru and a buyer in Bhilwara may need the same product and still differ in language, the people they trust, how they pay and where they buy. Segmenting on just \"metro or non-metro\" hides most of the differences that decide whether a campaign works. Use five dimensions together." },
        { type: "table", head: ["Dimension", "What to find out", "What it changes"], rows: [
          ["Geography: metro or tier 2 and 3", "Town size, state, distance to service", "Channel, field presence, delivery promise"],
          ["Language", "Language for reading, for speaking, for business", "Copy, video voice-over, sales scripts"],
          ["Budget", "Typical ticket size, monthly or annual payment", "Packaging, pricing, EMI or instalment options"],
          ["Buying channel", "Dealer, distributor, marketplace, direct, WhatsApp", "Where you advertise and whom you incentivise"],
          ["Digital comfort", "Self-serve online, phone-assisted, in person", "Onboarding, demo format, support model"]
        ] },
        { type: "h", text: "How to build a usable segment map" },
        { type: "steps", items: [
          "List your current customers and tag each on the five dimensions using CRM data and sales team knowledge.",
          "Look for clusters: groups that share three or more traits.",
          "Name each cluster in plain words, such as \"Hindi-speaking tier 3 retailers who buy through distributors and pay by UPI\".",
          "Estimate each cluster's size and value from your data and secondary sources.",
          "Pick one or two clusters to focus on this quarter, and write what you will do differently for each."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Ludhiana company selling industrial fasteners tags 200 customers. One cluster of 70 sits in tier 2 Punjab and Haryana towns, prefers Punjabi or Hindi on the phone, orders monthly through two distributors and pays by UPI or cheque. A second cluster of 30 is metro OEMs that buy by purchase order, want English documentation and pay on 60-day terms. The first cluster needs WhatsApp catalogues in Hindi and distributor schemes; the second needs a procurement-ready website and compliance documents. One message would have served neither well." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Assuming tier 2 and 3 buyers simply want cheaper versions of metro products.",
          "Treating language as translation only, rather than also who speaks to the buyer and how.",
          "Ignoring the channel: in many categories the dealer, not the brand, holds the buyer's trust.",
          "Building segments you cannot find or reach with any channel."
        ] },
        { type: "callout", tone: "india", title: "Trust and payment", text: "Outside the metros, trust often comes from visible local references (a known dealer, a nearby customer, a community group) more than from national advertising. Payment habits differ too: UPI is widespread, but credit terms from the distributor can matter more than the price itself." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Tag 30 of your customers on the five dimensions in a spreadsheet. Find your two biggest clusters and write one sentence on how each should be marketed differently." }
      ],
      takeaways: [
        "Segment on geography, language, budget, buying channel and digital comfort together.",
        "Tier 2 and 3 buyers often differ in language, trust sources and payment habits, not just budget.",
        "Name segments in plain words so sales and digital teams can use them.",
        "Pick segments you can actually reach."
      ]
    },
    {
      title: "Social listening: hearing buyers in their own words",
      minutes: 9,
      summary: "How to mine reviews, comments, forums and community groups for problems, language and unmet needs.",
      blocks: [
        { type: "p", text: "Buyers talk about your category every day without being asked: in marketplace and app store reviews, Google Maps reviews, YouTube and Instagram comments, forums, LinkedIn posts and WhatsApp or Facebook community groups. **Social listening** is the habit of reading these systematically. It is free, honest (nobody is trying to please you) and full of the exact phrases buyers use." },
        { type: "h", text: "Where to listen" },
        { type: "list", items: [
          "Reviews of your product and of two or three rivals on marketplaces, app stores and Google Maps.",
          "Comments on popular YouTube videos and reels about your category.",
          "Forums and Q&A sites where buyers ask for recommendations.",
          "Trade or community groups your buyers belong to, where you have joined openly and the rules allow it.",
          "Your own support tickets, sales call notes and WhatsApp chats."
        ] },
        { type: "h", text: "A simple listening routine" },
        { type: "steps", items: [
          "Pick 3 to 5 sources and collect 50 to 100 recent comments or reviews into a spreadsheet.",
          "Tag each one: problem mentioned, outcome wanted, competitor named, emotion (frustration, delight, doubt).",
          "Count the tags to see which themes recur.",
          "Copy the most vivid exact phrases into a \"buyer language\" column.",
          "Note anything surprising; surprises are where insights hide.",
          "Repeat monthly so you notice change."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kochi ayurvedic skincare brand reads 80 recent reviews of its own and two rival face washes. It tags 23 mentions of \"sticky\" or \"oily after use\" for rivals, mostly from users in humid coastal cities, and 11 mentions of fragrance being \"too strong\". Its own reviews rarely mention texture. The team now has a theme to test in interviews: in humid regions, a non-sticky finish may matter more than herbal ingredients, and buyers already have a word for the problem." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Reading only your own reviews and missing what rivals' buyers complain about.",
          "Overreacting to one loud post; look for patterns across many.",
          "Treating listening as proof. It generates themes to check, not final answers.",
          "Joining community groups under false pretences or scraping personal data. Listen openly and respect group rules and privacy law (verify current rules)."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Collect 50 reviews or comments about your category from three sources, tag them by problem, outcome and emotion, and list the five phrases buyers use most." }
      ],
      takeaways: [
        "Buyers already describe their problems in public; read them systematically.",
        "Listen to rivals' customers, not only your own.",
        "Tag and count to find patterns; save exact phrases for copy.",
        "Listening suggests themes; interviews and surveys check them."
      ]
    },
    {
      title: "From data to insight",
      minutes: 11,
      summary: "What a real insight is, how to find one in your research, and how to write it so it changes what the team does.",
      blocks: [
        { type: "p", text: "Most research decks are full of facts and short of insight. A fact is \"68% of respondents use UPI\". An **insight** is a non-obvious buyer truth that changes what you do, such as \"SMB owners trust their dealer's word over any ad\". The test is simple: if the statement would not change a decision about message, channel, product or price, it is not an insight yet." },
        { type: "h", text: "Fact, finding, insight" },
        { type: "table", head: ["Level", "Example", "Changes what we do?"], rows: [
          ["Fact", "Most of our buyers are in tier 2 towns.", "Not on its own"],
          ["Finding", "Six of eight owners bought their last software on a distributor's advice.", "Hints at a change"],
          ["Insight", "Shop owners trust their distributor's salesman more than any brand, so our ads matter less than his recommendation.", "Yes: shift budget to distributor enablement"]
        ] },
        { type: "h", text: "How to get from data to insight" },
        { type: "steps", items: [
          "Lay out your findings from all sources side by side: interviews, survey, listening, secondary data.",
          "Look for tension: where what buyers say differs from what they do, or where your team's belief differs from the evidence.",
          "Ask \"why?\" at least three times about each surprising finding.",
          "Write the insight as one sentence about the buyer, in plain words, starting from their point of view.",
          "Check it against three sources. One source is an anecdote; three that agree make a case.",
          "Write the action it implies: what we will start, stop or change."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Pune company sells a GST-ready accounting app to small traders. Survey: 27 of 35 traders say they want to do their own accounts. Usage data: most trial users stop after the first week. Interviews: traders say they send everything to their accountant at month-end anyway. Why? Because a mistake in a GST filing feels risky, and the accountant is trusted to catch it. **Insight:** \"Traders want control, but they will not risk a filing without their accountant's approval.\" **Action:** add an accountant-sharing feature and run a referral offer for local accountants, rather than more ads telling traders to go it alone." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Calling any statistic an insight.",
          "Writing obvious truths: \"Customers want good quality at a fair price.\"",
          "Insights with no action attached.",
          "Building an insight on one memorable interview."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your best three findings so far. For each, ask why three times, write the insight as one buyer-centred sentence, list three supporting sources, and add the action it implies. This is the core of your insight brief." }
      ],
      takeaways: [
        "An insight is a non-obvious buyer truth that changes what you do.",
        "Look for tension between what buyers say and what they do.",
        "Back each insight with at least three sources.",
        "Always attach the action the insight implies."
      ]
    },
    {
      title: "Competitive intelligence: messages, prices, channels, reviews",
      minutes: 10,
      summary: "How to build a simple, legal and repeatable picture of what rivals say, charge, where they sell and what their buyers think.",
      blocks: [
        { type: "p", text: "Buyers never judge you alone; they compare you with rivals and with doing nothing. Competitive intelligence is the disciplined, ethical collection of what rivals do in public, so your message, price and channel choices are made with the full picture. Focus on four things: their **messages**, their **prices**, their **channels** and their **reviews**." },
        { type: "h", text: "A one-page competitor grid" },
        { type: "table", head: ["What to capture", "Where to find it"], rows: [
          ["Messages: headline claim, proof used, target buyer", "Website home page, ads, brochures, LinkedIn and YouTube"],
          ["Prices: list price, discounts, packaging, payment terms", "Price pages, marketplace listings, dealer price lists shared with you, quotes your buyers show you"],
          ["Channels: direct, dealers, marketplaces, field sales, events", "Where they appear in search, trade fairs, dealer counters, job posts for sales roles"],
          ["Reviews: what their buyers praise and complain about", "Marketplaces, Google Maps, app stores, forums"]
        ] },
        { type: "h", text: "Steps" },
        { type: "steps", items: [
          "Choose three rivals: the leader, the one you lose to most often, and one cheaper alternative (including doing it manually).",
          "Fill the grid for each from public sources in one sitting.",
          "Ask your sales team what buyers say about each rival in deals you won and lost.",
          "Write each rival's one-line position as a buyer would describe it.",
          "Find the gap: a buyer need from your research that no rival claims or proves well.",
          "Refresh the grid every quarter and after any big rival launch."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Indore logistics software firm maps three rivals. The leader's message is \"enterprise-grade fleet visibility\", priced per vehicle with annual contracts, sold by field sales in metros. A cheaper rival sells monthly through a marketplace, and its reviews complain about Hindi support and slow onboarding. The firm's own research says tier 2 transporters want to start in a day and get help in Hindi. Gap: **\"Live in one day, with support in Hindi\"**, proved with onboarding times from current customers." },
        { type: "h", text: "Common mistakes and ethics" },
        { type: "list", items: [
          "Copying a rival's message instead of finding your own gap.",
          "Using only the sales team's opinion; check public evidence too.",
          "Pretending to be a buyer to extract confidential information, or using a rival's leaked documents. Stay with public and legitimately shared information.",
          "Ignoring the \"do nothing\" option, which is often the biggest competitor."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a one-page grid for three rivals covering message, price, channel and reviews. Ask two salespeople what buyers say about each, and write the one gap your brand could own." }
      ],
      takeaways: [
        "Track rivals' messages, prices, channels and reviews.",
        "Include the cheap alternative and doing nothing.",
        "Look for the gap between buyer needs and rivals' claims.",
        "Use public and legitimately shared information only."
      ]
    }
  ]
});
