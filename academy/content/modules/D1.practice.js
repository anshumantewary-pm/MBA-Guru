Academy.add("D1", "practice", {
  quiz: [
    { q: "In GA4, a conversion you care about is marked as:", options: ["a dimension", "a key event", "a segment", "a filter"], answer: 1, explain: "GA4 records actions as events, and the ones that matter to the business are marked as key events, which is GA4's current name for conversions. A dimension is an attribute such as source or city, and segments and filters only slice data you already have." },
    { q: "Which UTM tag records \"linkedin\" as where the visit came from?", options: ["utm_source", "utm_campaign", "utm_content", "utm_term"], answer: 0, explain: "utm_source names the platform or site that sent the visit, such as linkedin or whatsapp. utm_campaign names the offer or campaign, utm_content tells link or ad variants apart, and utm_term is mainly for paid search keywords." },
    { q: "Google Tag Manager is used to:", options: ["write blog posts", "add and manage tracking tags without editing site code each time", "buy ads", "host the website"], answer: 1, explain: "Once the GTM container is installed, marketers add tags, triggers and variables from GTM instead of asking a developer to edit the site for every new pixel or event. It does not host sites or buy media." },
    { q: "A measurement plan links:", options: ["business goals to KPIs, events and where they are tracked", "posts to hashtags", "budget to salaries", "logos to colours"], answer: 0, explain: "A measurement plan runs from business goal, to the KPI that shows progress, to the event that creates the KPI, to the tool where it is recorded. The other options have nothing to do with measuring whether marketing works." },
    { q: "Under India's data protection regime, a lead form should:", options: ["collect as much data as possible", "hide its purpose", "give clear notice of purpose and collect only what you need", "skip notice for B2B forms"], answer: 2, explain: "Clear notice and data minimisation are the core practices under the DPDP Act and Rules. B2B forms still collect personal data such as names, work emails and phone numbers, so they need notice too. Verify which duties apply when, as the Rules phase in." }
  ],
  tasks: [
    {
      title: "Write a measurement plan for your funnel",
      time: "90 min",
      steps: [
        "Write a one-line definition for each funnel stage (reach, engagement, lead, qualified lead, customer) for your product, and agree the qualified-lead definition with one salesperson.",
        "Write the top two or three business goals for the next quarter in customers or rupees.",
        "Work backwards from each revenue goal to a weekly lead number using your ticket size and lead-to-sale rate.",
        "For each goal, choose one or two weekly KPIs and list the events that create them (form submit, WhatsApp click, call tap, demo booked).",
        "Fill the four-column table: goal, KPI, event, where tracked, plus an owner and a review day.",
        "Fill in last month's actual numbers where they exist and mark gaps where nothing is tracked yet."
      ],
      deliverable: "A one-page measurement plan table with funnel definitions, backward maths and owners, added to the playbook.",
      checks: [
        "Self-check against the rubric: every row uses your real goals and numbers, not sample ones.",
        "Each KPI can be checked weekly and has a named owner.",
        "Sales has agreed the qualified-lead definition."
      ]
    },
    {
      title: "UTM naming convention and shared builder sheet",
      time: "60 min",
      steps: [
        "List every channel where you share links today: ads, social posts, WhatsApp broadcasts, email, QR codes, partner sites.",
        "Fix the allowed values for utm_source and utm_medium, all lowercase with underscores.",
        "Set the campaign naming pattern (topic_month_year) and how utm_content marks variants.",
        "Build a shared sheet with columns for base URL, source, medium, campaign and content as dropdowns, and a formula that joins them into the final link.",
        "Add columns for created by, date and where the link was used.",
        "Tag your next three real links with the sheet and confirm they appear correctly in GA4 realtime reports."
      ],
      deliverable: "A written UTM convention and a link to the shared builder sheet with at least three real tagged links.",
      checks: [
        "Self-check against the rubric: source and medium use fixed dropdowns with no free typing.",
        "Tagged links show the expected source and medium in GA4."
      ]
    },
    {
      title: "GA4 key events for form submits and WhatsApp clicks",
      time: "2 hours",
      steps: [
        "Confirm GA4 and a GTM container are installed on every page of your site.",
        "Create a GA4 event tag for your enquiry form, triggered on form success or the thank-you page.",
        "Create a whatsapp_click event tag triggered on clicks to links containing wa.me or api.whatsapp.com.",
        "Test both in GTM Preview mode and GA4 DebugView, clicking each once and checking each fires once.",
        "Publish the container and mark both events as key events in GA4.",
        "Take screenshots of Preview, DebugView and the key events list as proof.",
        "Write a one-page note on what you found, such as duplicate firing or missing pages, and what you changed."
      ],
      deliverable: "Screenshots proving both key events fire correctly, plus a one-page change note.",
      checks: [
        "Self-check against the rubric: events tested on your live site, not a demo property.",
        "Each event fires exactly once per action.",
        "The one-page note explains what changed."
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: build and test a key event in Tag Manager",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates the measurement plan for a sample product, then builds a whatsapp_click tag and trigger in GTM and tests it live in Preview and DebugView.",
      "Facilitator shows a messy GA4 source report and cleans it with a UTM convention.",
      "Pairs swap measurement plans and challenge each other: is every KPI weekly, owned, and tied to an event?",
      "Pairs build one tag on their own site or a test container and test it while their partner checks for double firing.",
      "Pairs review each other's lead form for clear notice and unnecessary fields.",
      "Coach gives feedback on KPI choice, tag testing discipline and UTM consistency."
    ]
  },
  reportBack: "Friday report-back prompt: which key events are now live and tested, how many real leads they recorded this week by source, and one thing the data showed that you did not expect.",
  resources: [
    "Google Skillshop and Google Digital Garage courses on analytics (verify availability)",
    "GA4 help centre",
    "Google Tag Manager help centre",
    "DPDP Rules, 2025 as notified (PIB); verify which duties apply when"
  ]
});
