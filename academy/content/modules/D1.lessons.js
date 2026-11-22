Academy.add("D1", "lessons", {
  lessons: [
    {
      title: "The digital funnel across owned, earned and paid media",
      minutes: 10,
      summary: "How to map reach, engagement, lead, qualified lead and customer across owned, earned and paid media so every later channel can be measured.",
      blocks: [
        { type: "p", text: "Every digital channel you will run in this track, from SEO to WhatsApp, feeds one funnel. If you cannot see that funnel end to end, you will optimise the wrong number: more impressions, more likes, more followers, while revenue stays flat. This module comes first in Track D because **tracking comes before tactics**." },
        { type: "h", text: "Five stages, one definition each" },
        { type: "table", head: ["Stage", "What it means", "Typical metric"], rows: [
          ["Reach", "People who saw something from you", "Impressions, unique reach, search impressions"],
          ["Engagement", "People who did something small", "Clicks, video views, comments, site sessions"],
          ["Lead", "People who gave you a way to contact them", "Form submits, WhatsApp chats started, calls"],
          ["Qualified lead", "Leads that fit your buyer and have a real need", "MQL or SQL count, as defined with sales"],
          ["Customer", "Leads who paid", "Deals won, first invoice raised"]
        ] },
        { type: "p", text: "The definitions matter more than the labels. Agree in writing with sales what makes a lead **qualified**: for example, a business with more than 10 employees, in a city you serve, with a stated need in the next 90 days. Without that line, marketing reports leads and sales reports junk, and both are right." },
        { type: "h", text: "Owned, earned and paid media" },
        { type: "list", items: [
          "**Owned**: assets you control, such as your website, blog, YouTube channel, email list and WhatsApp broadcast list. Slow to build, cheap to run.",
          "**Earned**: attention others give you, such as reviews, shares, press mentions, word of mouth and organic search rankings. High trust, hard to control.",
          "**Paid**: attention you buy, such as Google Ads, Meta ads and LinkedIn ads. Fast, scalable, and it stops when the budget stops."
        ] },
        { type: "p", text: "A healthy plan uses paid media to test messages quickly, owned media to capture and nurture, and earned media to build trust that lowers future costs. Each stage of the funnel can be fed by all three." },
        { type: "callout", tone: "example", title: "Worked example: a Coimbatore pump dealer", text: "Example: in one month the dealer's Google Business Profile, YouTube demos and Meta ads together reach 40,000 people. 2,000 engage (site visits and video views of 30 seconds or more). 120 become leads through a form or a WhatsApp click. Sales qualifies 36 of them, and 9 buy. Engagement to lead is 6%, lead to qualified is 30%, qualified to customer is 25%. The weakest link is lead to qualified: too many enquiries are from households, not farms. The fix is targeting and message, not more reach." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Reporting only the top of the funnel because it has the biggest numbers.",
          "Counting a lead twice when the same person fills a form and then sends a WhatsApp message.",
          "Leaving the qualified-lead definition to each salesperson's judgement."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Draw your funnel on one page with the five stages. Write a one-line definition for each stage, list which owned, earned and paid channels feed it, and fill in last month's numbers, even rough ones. Circle the weakest conversion step." }
      ],
      takeaways: [
        "Five stages: reach, engagement, lead, qualified lead, customer.",
        "Agree the qualified-lead definition with sales in writing.",
        "Owned, earned and paid media each feed every stage in different ways.",
        "Fix the weakest conversion step before buying more reach."
      ]
    },
    {
      title: "The measurement plan: goal, KPI, event, tool",
      minutes: 10,
      summary: "How to build a measurement plan that links each business goal to a KPI, the event that shows it, and where it is tracked.",
      blocks: [
        { type: "p", text: "A measurement plan is a short table that answers one question: **how will we know this is working?** It runs left to right, from business goal, to the KPI that shows progress, to the specific user action (event) that produces the KPI, to the tool where that event is recorded. If a row is missing any column, you are not really measuring it." },
        { type: "h", text: "The four columns" },
        { type: "list", items: [
          "**Business goal**: what the owner or CEO cares about, in money or customers. Example: 40 new dealer accounts this quarter.",
          "**KPI**: a number you can track weekly that predicts the goal. Example: qualified dealer leads per week.",
          "**Event**: the action on a site or app that creates the KPI. Example: dealer enquiry form submitted, WhatsApp button clicked.",
          "**Where tracked**: the tool and owner. Example: GA4 key event, CRM lead source field, owned by the digital marketer."
        ] },
        { type: "h", text: "How to build it" },
        { type: "steps", items: [
          "Write the top two or three business goals for the next quarter. Ask the founder or sales head if unsure.",
          "For each goal, choose one or two KPIs you can see weekly, not only at quarter end.",
          "For each KPI, list the exact events that produce it: form submit, WhatsApp click, call button tap, demo booking, purchase.",
          "Name the tool for each event (GA4, CRM, ad platform, Search Console) and the person who checks it.",
          "Add a target and a review rhythm, for example weekly on Monday.",
          "Share the plan with sales and the product team and get agreement before you build tags."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Jaipur ed-tech start-up", text: "Example: goal is ₹30 lakh in course sales this quarter at an average ticket of ₹15,000, so 200 enrolments. If 10% of counselled leads enrol, they need 2,000 counselled leads, or about 155 a week over 13 weeks. KPI: counselled leads per week. Events: “Book a free counselling call” form submit and WhatsApp click on the course page. Tracked in GA4 as key events, with the lead and its UTM source copied into the CRM. Reviewed every Monday by the growth lead." },
        { type: "table", head: ["Goal", "KPI", "Event", "Where tracked"], rows: [
          ["200 enrolments", "Counselled leads per week", "form_submit_counselling", "GA4 key event and CRM"],
          ["200 enrolments", "WhatsApp enquiries", "whatsapp_click", "GA4 key event"],
          ["Lower cost per lead", "Cost per counselled lead", "Ad spend ÷ leads by source", "Ad platforms and UTM report"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Starting with the tool (“let us install GA4”) instead of the goal.",
          "Choosing vanity KPIs like followers that do not predict revenue.",
          "Tracking 40 events and reviewing none. Five well-chosen events beat forty."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build your four-column table for your own product with no more than eight rows. Do the backward maths from revenue to leads, as in the example, and get one person from sales to sign off on the KPI definitions." }
      ],
      takeaways: [
        "Goal, then KPI, then event, then where it is tracked.",
        "Work backwards from revenue to a weekly lead number.",
        "Keep the plan short and agreed with sales before building tags.",
        "Every row needs an owner and a review rhythm."
      ]
    },
    {
      title: "GA4 basics and Google Tag Manager",
      minutes: 12,
      summary: "How GA4 events, key events and traffic sources work, and how Google Tag Manager lets you add tracking without editing site code each time.",
      blocks: [
        { type: "p", text: "Google Analytics 4 (GA4) records what people do on your website or app as **events**. A page view is an event, a scroll is an event, a form submit is an event. Some events matter to the business; you mark those as **key events**, which is what GA4 now calls conversions. Every event also carries information on where the visitor came from, called the **traffic source**." },
        { type: "h", text: "Three ideas to hold on to" },
        { type: "list", items: [
          "**Events**: GA4 collects some automatically (page_view, session_start, first_visit) and some through enhanced measurement (scrolls, outbound clicks, file downloads). You add custom events for actions specific to you, such as whatsapp_click.",
          "**Key events**: the events you mark as important. These appear in reports and can be shared with Google Ads for bidding.",
          "**Traffic sources**: source and medium (for example google / organic, linkedin / paid_social), plus campaign. These come from referrers and from UTM tags."
        ] },
        { type: "h", text: "Why Google Tag Manager" },
        { type: "p", text: "Without Google Tag Manager (GTM), every new tracking code needs a developer to edit the website. With GTM, the developer installs one container snippet once. After that, the marketer adds and changes **tags** (what to send, such as a GA4 event or an ad pixel) fired by **triggers** (when to send, such as a click on a link containing wa.me) using **variables** (details such as the page URL or button text)." },
        { type: "steps", items: [
          "Create a GA4 property and a web data stream; note the measurement ID.",
          "Create a GTM container and ask your developer to install its snippet on every page.",
          "In GTM, add a Google tag with your GA4 measurement ID, firing on all pages.",
          "Add a GA4 event tag named whatsapp_click, triggered on clicks where the link URL contains wa.me or api.whatsapp.com.",
          "Add a form_submit_enquiry tag triggered on your thank-you page or form success.",
          "Use GTM Preview mode and GA4 DebugView to confirm each event fires once, then publish the container.",
          "In GA4 admin, mark the two events as key events."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Surat textile wholesaler", text: "Example: the site gets about 6,000 sessions a month. Before tracking, the owner only knew “WhatsApp is busy”. After adding a whatsapp_click key event, GA4 shows 240 WhatsApp clicks a month, 150 from Google organic search and 60 from Instagram. The organic share tells the owner that SEO, not Instagram, is driving most enquiries, which changes where the next ₹50,000 of effort goes." },
        { type: "callout", tone: "warn", title: "Test before you trust", text: "A tag that fires twice doubles your conversions and makes every channel look better than it is. Always test in Preview mode, click each button once, and check the count in DebugView before publishing. Interfaces change, so check the GA4 help centre for current menu names." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Open your GA4 property and list which events already exist. Pick the two actions that best show a lead on your site, usually a form submit and a WhatsApp click, and write down the trigger you would use for each in GTM." }
      ],
      takeaways: [
        "GA4 records events; key events are the ones that matter to the business.",
        "Traffic source and medium tell you where each event came from.",
        "GTM uses tags, triggers and variables so you do not edit site code each time.",
        "Test every tag in Preview and DebugView before you publish."
      ]
    },
    {
      title: "UTM parameters and one naming convention",
      minutes: 10,
      summary: "How to tag every link with UTM parameters and keep one naming convention so channel reports stay clean.",
      blocks: [
        { type: "p", text: "When someone clicks a link in a WhatsApp broadcast, an email or a LinkedIn post, analytics often cannot tell where the visit came from. It may show up as “direct” and the channel gets no credit. **UTM parameters** fix this. They are tags added to the end of a URL that tell GA4 the source, medium and campaign of the click." },
        { type: "table", head: ["Parameter", "Answers", "Example"], rows: [
          ["utm_source", "Which site or platform sent the visit?", "linkedin, whatsapp, newsletter, google"],
          ["utm_medium", "What type of channel?", "organic_social, paid_social, email, cpc, broadcast"],
          ["utm_campaign", "Which campaign or offer?", "diwali_2026_offer, dealer_webinar_nov"],
          ["utm_content", "Which ad, post or link variant?", "carousel_v2, banner_top, video_hook_a"],
          ["utm_term", "Which keyword (mainly paid search)?", "billing_software_gst"]
        ] },
        { type: "p", text: "A full link looks like this: yoursite.in/demo?utm_source=linkedin&utm_medium=organic_social&utm_campaign=dealer_webinar_nov&utm_content=post_carousel. GA4 reads the values and reports them as session source, medium and campaign." },
        { type: "h", text: "Why one convention matters" },
        { type: "p", text: "GA4 treats LinkedIn, linkedin and linked_in as three different sources. If three team members tag links their own way, your report splits one channel into many rows and nobody trusts it. One written convention, used by everyone, keeps the data clean." },
        { type: "steps", items: [
          "Use lowercase only, and underscores instead of spaces.",
          "Fix a short list of allowed values for source and medium and write them in the sheet. No free typing.",
          "Name campaigns as topic_month_year or offer_month_year, for example gst_webinar_nov_2026.",
          "Use utm_content to tell variants apart, such as hook_a and hook_b.",
          "Build every link in a shared UTM builder sheet that joins the parts with a formula and logs who created it and when.",
          "Shorten long links for WhatsApp and SMS, but keep the UTM tags inside the shortened link.",
          "Never put UTM tags on internal links within your own site; they overwrite the real source."
        ] },
        { type: "callout", tone: "example", title: "Worked example: cleaning up a messy report", text: "Example: a Kochi travel agency found 11 rows for Facebook in GA4: facebook, Facebook, fb, FB_ads, meta and others. After adopting one convention (source facebook or instagram, medium paid_social or organic_social), the next month shows just four clean rows. Paid Instagram brought 85 enquiries at ₹40,000 spend, about ₹470 per enquiry, against Facebook's 30 enquiries at ₹25,000, about ₹830 each. That split was invisible before." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your team's UTM convention on one page: allowed sources, allowed mediums and the campaign naming pattern. Build a shared sheet where columns for URL, source, medium, campaign and content join into the final link, and tag the next three links you share." }
      ],
      takeaways: [
        "UTMs tell analytics the source, medium, campaign and content of a click.",
        "utm_source records where the visit came from, such as linkedin.",
        "One lowercase convention in a shared builder sheet keeps reports clean.",
        "Never tag internal links."
      ]
    },
    {
      title: "Search Console, ad pixels and conversion APIs",
      minutes: 10,
      summary: "How Google Search Console shows search performance, and how ad pixels and server-side conversion APIs feed results back to ad platforms.",
      blocks: [
        { type: "p", text: "GA4 tells you what visitors did on your site. Two other kinds of tracking fill gaps it cannot see: **Google Search Console** shows what happened on Google's results page before anyone clicked, and **ad pixels with conversion APIs** tell ad platforms which clicks turned into leads, so their algorithms can find more people like them." },
        { type: "h", text: "Google Search Console" },
        { type: "list", items: [
          "**Performance report**: the search queries that showed your pages, with impressions, clicks, click-through rate and average position.",
          "**Pages and indexing**: which pages Google has indexed and why some are excluded.",
          "**Sitemaps**: where you submit your sitemap so Google finds new pages.",
          "**Core web vitals and mobile usability** signals on page experience."
        ] },
        { type: "p", text: "Verify your domain, submit your sitemap, and check the Performance report weekly. Queries with high impressions but low click-through rate are quick wins: improve the page title and description to match what searchers want." },
        { type: "h", text: "Ad pixels and conversion APIs" },
        { type: "p", text: "Meta, LinkedIn and Google Ads each give you a tag (the Meta Pixel, the LinkedIn Insight Tag, the Google Ads conversion tag) that fires in the browser when a visitor converts. Browsers increasingly block or limit these tags, and ad blockers remove them. **Server-side conversion APIs**, such as Meta's Conversions API or LinkedIn's Conversions API, send the same conversion from your server or CRM directly to the platform. Using both, with a shared event ID so the platform can remove duplicates, gives more complete data." },
        { type: "steps", items: [
          "Install each ad platform's tag through GTM, not by hand on the site.",
          "Fire it on the same lead events as GA4: form submit and WhatsApp click.",
          "Where you have developer help or a CRM integration, add the server-side conversion API for the main lead event.",
          "Send a shared event ID from both browser and server so duplicates are removed.",
          "Later, send qualified-lead or deal-won events back from the CRM so the platform optimises for quality, not just volume."
        ] },
        { type: "callout", tone: "example", title: "Worked example: a Lucknow interior design studio", text: "Example: Meta Ads Manager reported 60 leads a month from browser pixel alone, while the CRM showed 85 leads tagged utm_source=instagram. After adding the Conversions API with deduplication, Meta reported 81. The platform now learns from almost all conversions, and the studio's cost per lead in Ads Manager is closer to the truth: ₹60,000 ÷ 81, about ₹740, not ₹1,000." },
        { type: "callout", tone: "warn", title: "Platform rules change", text: "Pixel and conversion API set-up steps, consent requirements and data-sharing rules change often. Check each platform's current help pages and your privacy notice before sending any personal data such as phone numbers or emails, even in hashed form (verify)." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Verify your site in Search Console if not done, submit the sitemap, and export the top 20 queries by impressions. Then list every ad platform you spend on and note whether its pixel fires on your lead events." }
      ],
      takeaways: [
        "Search Console shows queries, impressions, clicks and position before the click.",
        "Ad pixels tell platforms which clicks converted.",
        "Server-side conversion APIs recover conversions browsers block.",
        "Deduplicate with a shared event ID."
      ]
    },
    {
      title: "Consent and privacy under India's DPDP regime",
      minutes: 11,
      summary: "How to give clear notice, collect only what you need, and plan for India's DPDP Rules as they phase in.",
      blocks: [
        { type: "p", text: "Every lead form, WhatsApp opt-in and tracking tag collects personal data. India's Digital Personal Data Protection Act, 2023 and the DPDP Rules, notified in November 2025, set duties for businesses that collect it. The Rules phase in over about 18 months (PIB; **verify which duties apply when**). As a marketer you do not need to be a lawyer, but you must build forms and tracking that respect two principles: **clear notice** and **collect only what you need**." },
        { type: "h", text: "What good practice looks like" },
        { type: "list", items: [
          "**Clear notice**: tell people, in plain language, what data you collect, why, and how they can withdraw consent or ask for deletion.",
          "**Purpose limitation**: use the data for the purpose you stated. A demo request is not consent to add someone to every promotional list.",
          "**Data minimisation**: ask only for fields you will use. If sales never calls landlines, do not ask for one.",
          "**Easy withdrawal**: unsubscribing or opting out should be as easy as opting in.",
          "**Security and retention**: limit who can export lead lists, and delete data you no longer need."
        ] },
        { type: "h", text: "Fixing a lead form" },
        { type: "steps", items: [
          "List every field on the form and write next to it what you use it for. Delete fields with no use.",
          "Add a short notice near the submit button: what you will do with the data and a link to the privacy notice.",
          "Use a separate, unticked checkbox for marketing messages, apart from the demo request itself.",
          "Record consent in the CRM: date, form, and what was agreed.",
          "Check that your tracking tags and conversion APIs are described in your privacy notice.",
          "Review the form with whoever handles legal or compliance, and diarise a re-check as the Rules phase in."
        ] },
        { type: "callout", tone: "example", title: "Worked example: trimming a form", text: "Example: a Bengaluru HR-tech firm's demo form had 11 fields, including date of birth and annual turnover. Sales used five. The team cut the form to name, work email, phone, company and team size, added a one-line notice and a separate opt-in for the newsletter. In this example the completion rate rose from 2.1% to 3.4% of form views, and the firm holds less data it would otherwise need to protect." },
        { type: "callout", tone: "india", title: "B2B is not exempt", text: "A common myth is that business forms need no notice because the person is acting for a company. Work emails and phone numbers still identify a person. Treat B2B forms with the same care, and verify the current Rules and any sector rules (such as TRAI rules on commercial calls and messages) before each campaign." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Audit your main lead form against the five practices above. Remove one unnecessary field, add or rewrite the purpose notice, and separate the marketing opt-in. Note which DPDP duties you need to verify with your legal adviser." }
      ],
      takeaways: [
        "Give clear notice of purpose and collect only what you need.",
        "Keep marketing consent separate and easy to withdraw.",
        "B2B forms still collect personal data.",
        "The DPDP Rules phase in over about 18 months; verify which duties apply when."
      ]
    },
    {
      title: "One source of truth: the CRM from first touch to revenue",
      minutes: 11,
      summary: "How to make the CRM follow each lead from first touch to revenue so you can prove which channel brings qualified leads at what cost.",
      blocks: [
        { type: "p", text: "GA4 knows about visits. Ad platforms know about clicks. Only the **CRM** knows which leads became customers and how much they paid. If channel data stops at the form, you can say which channel brings the most leads but not which brings the most revenue. The final step of a tracking setup is to carry the source of every lead into the CRM and keep it there to the end." },
        { type: "h", text: "What to capture on every lead" },
        { type: "list", items: [
          "First-touch source, medium and campaign (from UTM tags or referrer).",
          "Lead-creation channel: web form, WhatsApp, phone call, walk-in, event.",
          "Date created, owner, and qualification status with the agreed definition.",
          "Deal value, stage dates and won or lost reason."
        ] },
        { type: "h", text: "How to connect it" },
        { type: "steps", items: [
          "Add hidden fields to your forms that capture utm_source, utm_medium and utm_campaign from the URL, and map them to CRM fields.",
          "For WhatsApp leads, use a pre-filled message per campaign (for example, “Hi, I saw the GST webinar”) or separate click-to-chat links so the source can be logged.",
          "For phone and walk-in leads, make “How did you hear about us?” a required field with a fixed dropdown list matching your UTM sources.",
          "Never overwrite first-touch source when the lead comes back through another channel; add a last-touch field instead.",
          "Build one monthly report: leads, qualified leads, customers and revenue by source, with spend beside each paid source."
        ] },
        { type: "callout", tone: "example", title: "Worked example: which channel really pays", text: "Example: a Nagpur accounting software reseller spends ₹1,00,000 a month: ₹60,000 on Google Ads and ₹40,000 on Meta. Google brings 100 leads (₹600 each) and Meta 160 (₹250 each), so Meta looks better. The CRM shows Google leads produced 12 customers and Meta leads 4. Cost per customer: Google ₹60,000 ÷ 12 = ₹5,000; Meta ₹40,000 ÷ 4 = ₹10,000. Without CRM tracking, budget would have moved the wrong way." },
        { type: "table", head: ["Source", "Spend", "Leads", "Customers", "Cost per customer"], rows: [
          ["Google Ads", "₹60,000", "100", "12", "₹5,000"],
          ["Meta Ads", "₹40,000", "160", "4", "₹10,000"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Letting salespeople type lead sources freely, which creates dozens of spellings.",
          "Judging channels on cost per lead alone.",
          "Keeping leads in WhatsApp chats and spreadsheets outside the CRM."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Check the last 20 leads in your CRM. How many have a source recorded, and how many of those match your UTM convention? Add hidden UTM fields to your main form and a required source dropdown for manual entries." }
      ],
      takeaways: [
        "Only the CRM connects a lead's first touch to revenue.",
        "Capture UTM values in hidden form fields and keep first touch.",
        "Judge channels by cost per customer, not only cost per lead.",
        "Use fixed dropdowns for manual lead sources."
      ]
    }
  ]
});
