Academy.add("D2", "lessons", {
  lessons: [
    {
      title: "Keyword research grouped by intent",
      minutes: 11,
      summary: "How to find the words buyers actually search using free tools and group them by learn, compare, buy and local intent.",
      blocks: [
        { type: "p", text: "SEO starts with the buyer's words, not yours. Your brochure may say “cloud-based inventory optimisation”; your buyer types “stock register software for shop”. Keyword research finds the real phrases and groups them by **intent**, the reason behind the search, so each group can be matched to the right page." },
        { type: "h", text: "Free sources that work" },
        { type: "list", items: [
          "**Google autosuggest**: type a seed phrase and note the suggestions. Add letters (“billing software a”, “b”) and question words (“how”, “which”, “best”) to see more.",
          "**People also ask and related searches** at the foot of the results page.",
          "**Google Trends**: compare two phrases, see seasonality (for example, school admissions or Diwali gifting) and which states search more.",
          "**Search Console queries**: the searches already showing your pages, often the richest list because they are real.",
          "**Sales and support**: the exact questions customers ask on calls and WhatsApp."
        ] },
        { type: "h", text: "The four intents" },
        { type: "table", head: ["Intent", "Buyer is thinking", "Example query"], rows: [
          ["Learn", "I want to understand the problem", "how to file GST return for small shop"],
          ["Compare", "I am choosing between options", "best billing software for retail, Tally vs Zoho Books"],
          ["Buy", "I am ready to act", "billing software price, free trial billing software"],
          ["Local", "I need someone nearby", "CA near me, CCTV installer in Indore"]
        ] },
        { type: "steps", items: [
          "Write 5 to 10 seed phrases describing your product, problem and category in plain buyer language, including Hindi or Hinglish where buyers use it.",
          "Collect 80 to 150 phrases from autosuggest, People also ask, Search Console and sales notes into a sheet.",
          "Tag each phrase with one intent: learn, compare, buy or local.",
          "Remove phrases that do not fit your buyer or that you cannot serve.",
          "Group near-duplicates (same meaning, different words) into one keyword cluster.",
          "Mark which clusters are closest to revenue: usually compare, buy and local."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Rajkot packaging supplier", text: "Example: seeds were “corrugated box manufacturer”, “packaging box for ecommerce” and “carton box price”. Autosuggest and Search Console gave 110 phrases. After tagging and grouping: 14 learn clusters (box strength, ply types), 6 compare (3 ply vs 5 ply), 5 buy (price per piece, bulk order) and 5 local (box manufacturer in Rajkot, near me). The 16 compare, buy and local clusters became the first priority." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Chasing high-volume generic words you cannot rank for, ignoring regional-language queries, and assigning two pages to the same keyword so they compete with each other." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Spend 45 minutes collecting 80 phrases for your product from autosuggest, Search Console and your sales team's notes. Tag each with an intent and highlight the ten closest to a buying decision." }
      ],
      takeaways: [
        "Start from buyer words, not product jargon.",
        "Use autosuggest, Trends, Search Console and sales questions.",
        "Group every phrase by learn, compare, buy or local intent.",
        "Prioritise the clusters closest to revenue."
      ]
    },
    {
      title: "Search intent: match the page type to the query",
      minutes: 10,
      summary: "How to choose the right page format for each intent so Google and buyers both find what they expected.",
      blocks: [
        { type: "p", text: "Google ranks pages that satisfy the searcher. If someone types “how to choose a water purifier” and lands on a product page with a Buy Now button, they leave. If someone types “RO purifier price” and lands on a 3,000-word guide, they also leave. **Match the page type to the intent** and you rank more easily and convert better." },
        { type: "table", head: ["Intent", "Best page type", "What it must include"], rows: [
          ["Learn (how to, what is)", "Guide or explainer", "Clear answer early, steps, examples, a soft next step"],
          ["Compare (A vs B, best)", "Comparison page or buyer's guide", "Honest criteria, a table, who each option suits"],
          ["Buy (price, demo, trial)", "Product, pricing or offer page", "Price or range, proof, a strong call to action"],
          ["Local (near me, in city)", "Location page and Google Business Profile", "Address, map, hours, reviews, phone and WhatsApp"]
        ] },
        { type: "h", text: "Read the results page first" },
        { type: "p", text: "The fastest way to know what Google thinks the intent is: search the phrase yourself in an incognito window and look at the top results. If most are guides, write a guide. If most are comparison lists, write a comparison. If a map pack appears, local intent dominates and your Google Business Profile matters more than any blog post." },
        { type: "steps", items: [
          "Take each priority keyword cluster from your keyword sheet.",
          "Search the main phrase and note the format of the top five results and any special features (map, video, People also ask, AI answer).",
          "Choose the page type that matches the dominant format.",
          "Check whether you already have a page that fits. If so, improve it; if not, plan a new one.",
          "Assign exactly one page per cluster in your keyword map."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Hyderabad dental clinic", text: "Example: the clinic's “dental implants” service page ranked on page three for “dental implants vs bridge”. The top results were all comparison articles. The clinic wrote a comparison page: cost ranges, how long each lasts, who each suits, with a table and the dentist's own case photos. In this example the page reached the first page in about two months and brought 18 consultation bookings a month, while the service page kept the “dental implants cost Hyderabad” query." },
        { type: "callout", tone: "india", title: "Language and intent", text: "In many Indian categories the same intent is searched in English, Hindi and Hinglish (“sasta laptop under 30000”, “best laptop for students”). Check whether your buyers search in a regional language; a page in that language may face far less competition." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your five most valuable keyword clusters, search each one, and note the dominant page type. For each, write down whether your current page matches and what you would change." }
      ],
      takeaways: [
        "The page type must fit the intent behind the query.",
        "Guides for learn, comparisons for compare, offers for buy, profiles for local.",
        "Read the results page to see what Google rewards.",
        "One page per keyword cluster."
      ]
    },
    {
      title: "On-page basics: title, headings, early answer, links and alt text",
      minutes: 10,
      summary: "How to build a page so search engines and readers understand it quickly, using titles, headings, an early answer, internal links and image alt text.",
      blocks: [
        { type: "p", text: "Once you know the keyword and the page type, on-page SEO makes the page easy to understand. None of these steps is advanced. Most small business sites in India miss several of them, which is why doing all of them consistently is an advantage." },
        { type: "h", text: "The on-page checklist" },
        { type: "list", items: [
          "**Title tag**: the main keyword near the start, a clear benefit, roughly 50 to 60 characters so it is not cut off. Each page gets a unique title.",
          "**Meta description**: one or two sentences that make someone want to click. It does not directly raise ranking, but it affects click-through rate.",
          "**One H1 heading** stating what the page is about, then H2 and H3 sub-headings that follow the buyer's questions.",
          "**A clear answer early**: answer the main question in the first two or three sentences, then expand. Readers and AI answers both reward this.",
          "**Internal links**: link to related pages with descriptive anchor text (“GST invoice format guide”, not “click here”), and link from strong pages to new ones.",
          "**Images with alt text**: describe the image in plain words for screen readers and search, and compress images so the page stays fast.",
          "**A clean URL**: short, readable, with the keyword, such as /gst-billing-software-retail."
        ] },
        { type: "callout", tone: "example", title: "Worked example: rewriting one page", text: "Example: a Ludhiana bicycle parts exporter's page had the title “Home | Products | Page 3” and no text answer. The rewrite: title “Bicycle Freewheel Manufacturer India, OEM and Export | [Brand]”; H1 “Bicycle freewheels for OEMs and exporters”; first paragraph answering what they make, minimum order and export markets; H2s for specifications, quality testing, MOQ and pricing, and FAQs; alt text such as “14-tooth freewheel, chrome finish”; and links from the homepage and two blog posts. In this example, Search Console showed impressions for freewheel queries rising from about 300 to 2,100 a month over eight weeks." },
        { type: "steps", items: [
          "Open the page and write the main keyword and intent at the top of your notes.",
          "Rewrite the title tag and meta description.",
          "Check there is one H1 and that H2s follow the buyer's questions.",
          "Rewrite the opening so it answers the main question directly.",
          "Add three to five internal links to and from related pages.",
          "Add alt text to every meaningful image and compress large files."
        ] },
        { type: "callout", tone: "warn", title: "Avoid keyword stuffing", text: "Repeating the keyword in every sentence makes the page harder to read and can hurt rankings. Use the main phrase naturally in the title, H1, opening and a sub-heading, and use related words elsewhere." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pick the one page closest to revenue on your site and run the six-step checklist on it. Note the date you change it, so you can compare Search Console clicks and position before and after." }
      ],
      takeaways: [
        "Unique title with the keyword near the start.",
        "One H1, sub-headings that follow buyer questions.",
        "Answer the main question in the first lines.",
        "Descriptive internal links and alt text on images."
      ]
    },
    {
      title: "Technical basics: mobile, fast, indexable, with a sitemap",
      minutes: 9,
      summary: "How to check the four technical basics that decide whether Google can find, load and show your pages.",
      blocks: [
        { type: "p", text: "Great content cannot rank if Google cannot reach it, or if buyers leave before it loads. Most Indian buyers search on mobile phones, often on patchy connections in tier 2 and tier 3 cities. Technical SEO for a small business is not about complex code; it is about four basics done right." },
        { type: "table", head: ["Basic", "What it means", "How to check"], rows: [
          ["Mobile-friendly", "Text readable without zoom, buttons easy to tap, no sideways scroll", "Open the page on a mid-range phone; check Search Console page experience"],
          ["Fast", "Main content appears quickly, even on a slow connection", "PageSpeed Insights; test on mobile data, not office Wi-Fi"],
          ["Indexable", "Google is allowed and able to add the page to its index", "Search Console URL Inspection; check for noindex tags and robots.txt blocks"],
          ["Sitemap", "A file listing your important URLs", "Submit sitemap.xml in Search Console and check for errors"]
        ] },
        { type: "h", text: "Quick fixes that usually help most" },
        { type: "list", items: [
          "Compress and resize images; a 4 MB phone photo used as a banner is the most common speed problem.",
          "Remove plugins, sliders and chat widgets you do not need.",
          "Make phone numbers and WhatsApp buttons tappable and large.",
          "Remove accidental noindex tags left over from the site's build stage.",
          "Fix broken internal links and redirect old URLs to their new versions.",
          "Use HTTPS on every page."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Bhopal coaching institute", text: "Example: the institute's course page took about 9 seconds to show content on mobile data. The homepage carried six full-size banner images totalling 11 MB. After compressing them to under 200 KB each and removing an unused slider plugin, the page loaded in about 3 seconds. In this example, enquiry form submits from mobile rose from 40 to 65 a month with no change in traffic." },
        { type: "steps", items: [
          "Run your top five pages through PageSpeed Insights on mobile and note the main issues.",
          "Open the Search Console Pages report and list any important URLs marked as not indexed, with the reason.",
          "Inspect one key page with URL Inspection and confirm it is indexed.",
          "Check that sitemap.xml exists, lists your important pages and is submitted.",
          "Fix the biggest issue first, usually images, and re-test."
        ] },
        { type: "callout", tone: "warn", title: "Get help for code changes", text: "If a fix needs theme or server changes, write a short ticket for your developer with the page, the issue and the tool's screenshot. Test changes on a copy of the site where possible, and back up first." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Run the five-step check on your top five pages. Fix one speed issue and one indexing issue, and record before and after load times." }
      ],
      takeaways: [
        "Mobile-friendly, fast, indexable, with a sitemap.",
        "Test on a mid-range phone and mobile data.",
        "Images are the most common speed problem.",
        "Check indexing in Search Console, not by guessing."
      ]
    },
    {
      title: "Content clusters: pillar pages and supporting pages",
      minutes: 10,
      summary: "How to organise content into clusters, with one broad pillar page linked to detailed supporting pages, to build topical authority.",
      blocks: [
        { type: "p", text: "Random blog posts rarely build authority. A **content cluster** organises pages around one broad topic. The **pillar page** covers the topic broadly and links out to detailed **supporting pages**, each covering one sub-question in depth. The supporting pages link back to the pillar and to each other where relevant. This structure helps buyers move through the topic and helps search engines see that your site covers it thoroughly." },
        { type: "h", text: "How a cluster looks" },
        { type: "list", items: [
          "**Pillar**: “GST billing for small retailers: the complete guide” covering what it is, rules overview, software options and how to start.",
          "**Supporting**: “GST invoice format with sample”, “How to file GSTR-1 for a small shop”, “Composition scheme vs regular GST for retailers”, “Best GST billing software for kirana stores”, “E-invoicing threshold explained (verify current limit)”.",
          "**Links**: the pillar links to each supporting page; each supporting page links back to the pillar and to a product or demo page."
        ] },
        { type: "steps", items: [
          "From your keyword map, pick one broad topic where you have real expertise and buyers search a lot.",
          "List 6 to 12 sub-questions from your learn and compare clusters.",
          "Write or improve the pillar page first: a broad overview with a short section per sub-question, each linking to its supporting page.",
          "Write supporting pages one at a time, each matching its own intent and keyword.",
          "Add links both ways, and a clear next step to a buy-intent page.",
          "Track the cluster as a group in Search Console by filtering for the URL folder or topic words."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Chennai solar installer", text: "Example: the pillar “Rooftop solar for homes in Tamil Nadu” linked to eight supporting pages: subsidy process (verify current scheme), cost per kW, on-grid vs off-grid, net metering steps, maintenance, roof suitability, inverter choice and payback calculation. The payback page had a worked example: a 3 kW system at ₹1.8 lakh after subsidy saving about ₹3,000 a month pays back in about 60 months. In this example, the cluster's combined clicks grew from 200 to 1,400 a month in five months, and the payback page became the top lead source." },
        { type: "callout", tone: "warn", title: "Common mistakes", text: "Writing ten thin posts that all target the same phrase, forgetting to link supporting pages back to the pillar, and building clusters on topics your buyers do not search." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Sketch one cluster for your product on paper: the pillar title in the middle and 6 to 12 supporting page titles around it, each tagged with its intent. Mark which pages already exist and which you will write first." }
      ],
      takeaways: [
        "A pillar page covers a broad topic and links to detailed supporting pages.",
        "Supporting pages each answer one sub-question in depth.",
        "Link both ways and lead to a buy-intent page.",
        "Build clusters on topics where you have real expertise."
      ]
    },
    {
      title: "Local SEO with Google Business Profile",
      minutes: 10,
      summary: "How to set up and run a Google Business Profile with the right categories, photos, reviews and regular posts to win near-me searches.",
      blocks: [
        { type: "p", text: "For any business that serves a city or area, from clinics and showrooms to distributors and service firms, the **Google Business Profile** (GBP) is often the most valuable free marketing asset. When someone searches “near me” or a service with a city name, the map pack of local profiles usually appears above the regular results. Reviews and completeness strongly affect who appears there." },
        { type: "h", text: "What a complete profile needs" },
        { type: "list", items: [
          "**Correct primary category** (the single most important choice) and relevant secondary categories.",
          "Accurate name, address, phone and hours, matching your website and directory listings exactly.",
          "Services or products with short descriptions and price ranges where sensible.",
          "**Photos**: storefront, interior, team, products, work in progress and finished work. Real photos, not stock.",
          "**Reviews**: a steady flow of genuine reviews, each answered politely within a day or two.",
          "**Regular posts**: offers, updates and events, weekly if you can.",
          "A WhatsApp or call button and a link to the most relevant page of your site with UTM tags."
        ] },
        { type: "steps", items: [
          "Claim and verify your profile, or audit the existing one against the list above.",
          "Search your main service plus city and note the categories of the top three competitors in the map pack.",
          "Choose the primary category that best matches what buyers search.",
          "Upload at least 10 real photos with clear, descriptive file names.",
          "Create a review request: a short WhatsApp message with your review link, sent after a job is completed.",
          "Reply to every review, positive or negative, within 48 hours.",
          "Schedule one post a week for the next month."
        ] },
        { type: "callout", tone: "example", title: "Worked example: an Indore AC service firm", text: "Example: the firm's profile had 7 reviews, the category “Electrician” and two photos. After switching the primary category to the more specific AC repair category, adding 15 job photos, posting weekly and sending a review request after every completed job, it reached 60 reviews in three months. In this example, calls from the profile rose from about 25 to 90 a month, tracked in the profile's performance report." },
        { type: "callout", tone: "warn", title: "Never buy or fake reviews", text: "Do not buy reviews, write them yourself, or offer gifts in exchange for positive ones. It breaks Google's policies and can get the profile suspended. Ask every genuine customer instead, and verify current review policies in Google Business Profile help." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Audit your profile against the checklist, fix the category, add 10 photos and send your review request to the last ten satisfied customers. Put one weekly post in your calendar." }
      ],
      takeaways: [
        "For near-me searches the Google Business Profile matters most.",
        "The primary category is the single most important setting.",
        "Real photos, weekly posts and a steady flow of genuine reviews.",
        "Reply to every review within 48 hours."
      ]
    },
    {
      title: "AI search: being the page answers draw on",
      minutes: 11,
      summary: "How to write pages that AI search answers, including Google's AI Mode in Indian languages, are likely to draw on.",
      blocks: [
        { type: "p", text: "Search is changing. Google's AI Mode reached India in 2025 and now works in Hindi and several other Indian languages (Google India blog). Instead of only ten blue links, buyers increasingly see an AI-written answer that draws on a few pages and links to them. Other AI assistants work in similar ways. You cannot control these answers directly, but pages that **answer questions directly, with proof, FAQs, structured data and original data**, are the ones they tend to draw on." },
        { type: "h", text: "What makes a page answer-ready" },
        { type: "list", items: [
          "**A direct answer early**: one or two sentences that fully answer the question before any background.",
          "**Specifics**: numbers, ranges, steps and conditions instead of vague claims.",
          "**Proof**: case examples, photos, test results, named authors with real experience.",
          "**FAQs**: short question-and-answer sections using the buyer's own wording.",
          "**Structured data**: schema markup (such as FAQ, Product, LocalBusiness, Article) that labels the content for machines. Check Google's current guidance on which types are supported (verify).",
          "**Original data**: your own survey, price index or usage data that no one else has."
        ] },
        { type: "callout", tone: "example", title: "Worked example: from vague to answer-ready", text: "Example: a Pune logistics firm's page said “We offer competitive rates for part-truck loads across India.” The rewrite opens: “A part-truck load from Pune to Delhi typically costs ₹8 to ₹12 per kg for 500 to 2,000 kg, takes 4 to 6 days, and needs a GST invoice and e-way bill (verify current thresholds).” It adds a rate table from the firm's own last 200 shipments, an FAQ in English and Hindi, and FAQ structured data. This is the kind of specific, sourced answer that AI summaries can quote and link." },
        { type: "steps", items: [
          "List the ten questions buyers most often ask before buying, from sales calls and WhatsApp chats.",
          "For each, find or create the page that should answer it.",
          "Rewrite the opening to give a complete, specific answer in two sentences.",
          "Add proof: a number, a case, a photo or a named expert.",
          "Add an FAQ section and appropriate structured data, and test it with Google's Rich Results Test.",
          "Where buyers search in Hindi or a regional language, add a version or FAQ in that language.",
          "Search the questions in AI Mode periodically and note which sources are cited."
        ] },
        { type: "callout", tone: "warn", title: "What not to do", text: "Hiding text in images, repeating keywords, or blocking crawlers all make your pages less likely to be used. Features and policies change quickly; verify current guidance from Google Search Central." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your top buyer question and rewrite the answer on your site to open with a specific two-sentence answer, one piece of proof and three FAQs. Search the question in AI Mode before and after and note what changes." }
      ],
      takeaways: [
        "AI Mode is live in India, including in Hindi and other Indian languages.",
        "Answer clearly and early, with specifics and proof.",
        "Add FAQs, structured data and original data.",
        "Never hide text in images or block crawlers."
      ]
    },
    {
      title: "Trust signals: experience, expertise, authority, trust",
      minutes: 10,
      summary: "How to show first-hand experience, expertise, authority and trust on your pages through named authors, real data and reviews.",
      blocks: [
        { type: "p", text: "Google's guidance for its quality raters describes experience, expertise, authoritativeness and trustworthiness, often shortened to E-E-A-T. It is not a single ranking switch, but it describes what helpful content looks like, and buyers judge pages in the same way. A page written by a named person who has clearly used the product, with real numbers and photos, beats an anonymous page of generic advice." },
        { type: "table", head: ["Signal", "What it looks like on a page"], rows: [
          ["Experience", "Real photos, your own test results, “we installed 40 of these last year and here is what failed”"],
          ["Expertise", "A named author with a short bio and relevant qualifications or years in the trade"],
          ["Authority", "Mentions from industry bodies, partners, press or customers; links from respected sites"],
          ["Trust", "Clear address, GST number where relevant, contact details, privacy notice, honest pricing, reviews"]
        ] },
        { type: "h", text: "Adding trust signals step by step" },
        { type: "steps", items: [
          "Add a named author or reviewer to every guide, with a photo and a two-line bio.",
          "Replace stock photos with real ones from your work, products and team.",
          "Add at least one real number per page: tests, timelines, costs or results from your own customers (with permission).",
          "Show reviews and short customer stories near the call to action.",
          "Make the About and Contact pages complete: registered address, phone, email, map and business details.",
          "Date your content and update it when facts change, especially regulations and prices."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Kolkata spice exporter", text: "Example: the exporter's “How to choose turmeric for export” page used stock images and no author. The rewrite added the quality head as author (“18 years in spice quality testing”), photos of their own lab tests, a table of curcumin ranges from their last 50 lots, and two importer testimonials with permission. In this example, average time on page doubled and the page began to rank for several buyer questions it had never appeared for." },
        { type: "callout", tone: "warn", title: "Proof must be real", text: "Never invent testimonials, certifications, awards or statistics. Get written permission before naming a customer. Fake proof is easy to spot, harms trust, and can create legal risk." },
        { type: "list", items: [
          "Stock photos signal nothing; real photos signal experience.",
          "A high word count is not a trust signal.",
          "Ads and pop-ups that cover the content reduce trust."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Pick your three most important pages. Add a named author, replace one stock photo with a real one, and add one real number or customer quote with permission." }
      ],
      takeaways: [
        "Show experience, expertise, authority and trust on every key page.",
        "Named authors, real photos and real data beat generic text.",
        "Complete About and Contact details build trust.",
        "Never fake proof."
      ]
    }
  ]
});
