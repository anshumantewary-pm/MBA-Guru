Academy.add("F2", "lessons", {
  lessons: [
    {
      title: "Every P answers a buyer question",
      minutes: 9,
      summary: "How the 4Ps work as one system, with each P answering a question in the buyer's mind and sales as the place where all four meet.",
      blocks: [
        { type: "p", text: "The 4Ps, product, price, place and promotion, are often taught as four separate checklists. In practice they are one system. Each P answers a question the buyer is asking, and if any answer is weak, the sale stalls no matter how strong the other three are." },
        { type: "table", head: ["P", "Buyer's question", "Whose job it mostly is"], rows: [
          ["Product", "Does this solve my problem?", "Product Managers"],
          ["Price", "Is it worth it, and can I afford it?", "Product Managers with Sales Managers"],
          ["Place", "Can I get it easily?", "Sales Managers"],
          ["Promotion", "Why should I trust and choose you?", "Marketing and Digital Marketing"]
        ] },
        { type: "p", text: "**Sales is where all four meet.** In a live conversation the buyer tests every answer at once: does it work, is it worth it, can I get it, and do I trust you? A salesperson cannot fix a broken product, an unaffordable price or a missing distributor with charm. That is why every role in this program needs the same 4P language." },
        { type: "h", text: "Finding your weakest P" },
        { type: "steps", items: [
          "Write each buyer question at the top of a page.",
          "Under each, write how your product answers it today, in one or two lines.",
          "Collect evidence for each answer: lost-deal reasons, support tickets, channel feedback, campaign data.",
          "Rate each P from 1 (weak) to 5 (strong), based on the evidence, not opinion.",
          "Pick the lowest score as your weakest P and note how fixing it would affect the other three."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Nagpur firm selling water purifiers to small offices reviews its last 20 lost deals. Seven buyers said the price was high, but nine said no local service engineer could visit within 48 hours. The weakest P is place (service reach), not price. Adding two service partners in Nagpur and Amravati would also strengthen promotion, because \"48-hour service\" becomes a message, and support price, because buyers pay more for reliable service." },
        { type: "h", text: "How the Ps pull on each other" },
        { type: "list", items: [
          "Cutting price may require a cheaper channel, which changes place.",
          "Adding a premium feature raises cost, which pushes price, which changes who you target with promotion.",
          "Moving to distributors adds their margin, which squeezes price or your margin.",
          "A new message promising speed only works if product and place can deliver it."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write your product's answer to each of the four buyer questions on one page. Rate each P using real evidence and name your weakest one. Bring it to Tuesday's mixed group." }
      ],
      takeaways: [
        "Each P answers a buyer question: solve, worth it, get it, trust you.",
        "Sales is where all four answers are tested at once.",
        "Find the weakest P with evidence, not opinion.",
        "Changing one P always moves the other three."
      ]
    },
    {
      title: "Product: feature, benefit and value",
      minutes: 10,
      summary: "How to describe a product as the problem it solves plus quality, features, packaging, brand, service and warranty, and how to turn features into value in rupees, time or risk.",
      blocks: [
        { type: "p", text: "A product is more than its features. From the buyer's side it is **the problem it solves** plus quality, features, packaging, brand, service and warranty. Two products with identical features can sell very differently because one comes with a trusted brand, a clear warranty and a service engineer in the buyer's city." },
        { type: "h", text: "Feature, benefit, value" },
        { type: "table", head: ["Level", "What it is", "Example for a cloud storage plan"], rows: [
          ["Feature", "What the product has or does", "Has 5 GB storage"],
          ["Benefit", "What that does for the buyer", "Stores all your files in one place"],
          ["Value", "What it means in rupees, time or risk", "Saves your team 6 hours a week, about ₹18,000 a month"]
        ] },
        { type: "p", text: "Buyers, especially price-aware Indian SMB buyers, decide on value. A value statement puts a number on the outcome. It is the bridge between the product and the price: if the value is ₹18,000 a month, a ₹3,000 subscription looks cheap." },
        { type: "h", text: "Turning a feature into value" },
        { type: "steps", items: [
          "Pick one feature and ask, \"So what does that do for the buyer?\" That is the benefit.",
          "Ask again, \"So what is that worth?\" Estimate time saved, money saved, revenue gained or risk avoided.",
          "Convert time into rupees using a realistic hourly cost for the people involved.",
          "Check the numbers with a real customer before you use them in sales material.",
          "Write the value statement in one sentence the buyer would repeat to their boss or family."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Kochi firm sells automatic GST reconciliation. Feature: matches purchase invoices with GSTR-2B. Benefit: no more manual matching. Value: an accountant who spent 12 hours a month at about ₹400 an hour now spends 2, saving roughly ₹4,000 a month, and the owner avoids input credit mismatches that could block refunds. The second half, risk avoided, often matters more to the owner than the time saved." },
        { type: "h", text: "The rest of the product" },
        { type: "list", items: [
          "**Quality:** does it work reliably every time?",
          "**Packaging:** for physical goods, the box and pack sizes; for software, the plans and onboarding.",
          "**Brand:** what the name signals about trust and status.",
          "**Service and warranty:** who helps when it breaks, how fast, and in which language."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your top three features and write each as feature, benefit and value. Put a rupee, time or risk number on each value and check one with a real customer." }
      ],
      takeaways: [
        "A product is the problem solved plus quality, features, packaging, brand, service and warranty.",
        "Feature is what it has, benefit is what it does, value is what it is worth.",
        "Value is expressed in rupees, time or risk.",
        "Check value numbers with real customers before using them."
      ]
    },
    {
      title: "Price: costs, break-even, margin and markup",
      minutes: 12,
      summary: "How to calculate cost per unit, break-even and gross margin, and why margin and markup are different numbers.",
      blocks: [
        { type: "p", text: "Pricing starts with knowing your costs. **Fixed costs** stay the same whatever you sell in a period: rent, salaries, software subscriptions. **Variable costs** rise with each unit sold: raw material, packaging, delivery, payment gateway fees. Cost per unit is variable cost per unit plus a share of fixed cost." },
        { type: "h", text: "Break-even" },
        { type: "p", text: "Break-even is the number of units you must sell to cover fixed costs. Each unit contributes price minus variable cost, called the **contribution**. Break-even units = fixed costs ÷ (price − variable cost per unit)." },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: fixed costs are ₹2,00,000 a month, price is ₹1,000 and variable cost is ₹600 per unit. Contribution is ₹1,000 − ₹600 = ₹400. Break-even is ₹2,00,000 ÷ ₹400 = 500 units a month. Sell 600 units and the extra 100 contribute ₹40,000 of profit." },
        { type: "h", text: "Margin versus markup" },
        { type: "p", text: "**Margin** is profit as a share of price. **Markup** is profit as a share of cost. With cost ₹600 and price ₹1,000, profit is ₹400. Margin is ₹400 ÷ ₹1,000 = 40%. Markup is ₹400 ÷ ₹600 = 66.7%. Mixing these up is one of the most common and costly errors in sales teams, because a rep who thinks a \"40% markup\" leaves room for a 30% discount will sell below cost." },
        { type: "table", head: ["Measure", "Formula", "With cost ₹600, price ₹1,000"], rows: [
          ["Profit per unit", "Price − cost", "₹400"],
          ["Gross margin", "Profit ÷ price", "40%"],
          ["Markup", "Profit ÷ cost", "66.7%"],
          ["Break-even (fixed ₹2,00,000)", "Fixed ÷ (price − variable)", "500 units"]
        ] },
        { type: "h", text: "Building your unit economics" },
        { type: "steps", items: [
          "List every variable cost per unit, including delivery, packaging, commissions and gateway fees.",
          "List monthly fixed costs.",
          "Decide whether your list price includes GST and show prices before and after GST separately.",
          "Calculate contribution, gross margin and break-even units.",
          "Set a **floor price**: the lowest price you will accept, at which contribution still covers the cost of serving the customer.",
          "Add customer acquisition cost (CAC) so you can see whether one customer pays back the cost of winning them."
        ] },
        { type: "callout", tone: "india", title: "GST check", text: "Margin should be calculated on the price before GST, because GST is collected for the government, not earned. GST rates differ by category and change from time to time, so verify the current rate for your category before you publish prices." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Build a one-page unit economics table for your product: cost per unit, price before and after GST, gross margin, break-even units, floor price and CAC. Ask finance to check one number." }
      ],
      takeaways: [
        "Break-even units = fixed costs ÷ (price − variable cost).",
        "Margin is profit ÷ price; markup is profit ÷ cost.",
        "Calculate margin on the price before GST.",
        "Set a floor price and know your CAC before you discount."
      ]
    },
    {
      title: "Place: channels and working back from the final price",
      minutes: 11,
      summary: "How to choose channels, locations and logistics, and how to work backward from the final price through each partner's margin to see what is left for you.",
      blocks: [
        { type: "p", text: "Place answers the buyer's question \"Can I get it easily?\" It covers the **channel** (direct sales, distributors, retailers, marketplaces, resellers, your website), the **location** (where the product is available, physically or online) and **logistics** (stock, delivery, installation, service)." },
        { type: "p", text: "Each partner in the channel earns a margin for the work they do: holding stock, giving credit, reaching shops you cannot reach. Those margins come out of the final price the buyer pays. If you price from your own cost upward without checking the chain, you may find the product is too expensive on the shelf or leaves you almost nothing." },
        { type: "h", text: "Working back from the final price" },
        { type: "steps", items: [
          "Start with the price the end buyer will pay, including GST, based on what rivals and substitutes cost.",
          "Remove GST to get the net selling price.",
          "Remove the retailer's margin to find what the retailer pays.",
          "Remove the distributor's margin to find what the distributor pays you.",
          "Subtract your cost per unit and logistics to see your own margin.",
          "If what is left is below your floor, change the product, the channel or the price."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Rajkot snack brand wants an MRP of ₹100 including 12% GST (illustrative rate; verify your category). Net of GST the price is about ₹89. The retailer keeps 20% of ₹89, about ₹18, so pays about ₹71. The distributor keeps 10% of that, about ₹7, so pays the brand about ₹64. Product and freight cost ₹45, leaving the brand about ₹19 per pack, a 30% margin on its own selling price. If the brand had assumed it would receive ₹89, its plan would have been badly wrong." },
        { type: "table", head: ["Channel", "Strength", "Watch out for"], rows: [
          ["Direct sales", "Control, full margin, close customer learning", "High cost per sale, slow to scale"],
          ["Distributor and retailer", "Reach into tier 2 and 3 towns", "Margins, credit terms, less control of message"],
          ["Marketplace", "Fast reach, built-in trust", "Commission and fees (verify), price wars"],
          ["Reseller or partner", "Local relationships and service", "Training, partner conflict, uneven quality"]
        ] },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Calculating partner margins on the wrong base, such as including GST.",
          "Ignoring credit periods, which tie up cash even when margins look fine.",
          "Choosing a channel your target segment does not use."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Take your main channel and work backward from the final buyer price through GST and each partner's margin. Write down what is left for you and compare it with your floor price." }
      ],
      takeaways: [
        "Place is channel, location and logistics: can the buyer get it easily?",
        "Work backward from the final price through GST and each partner's margin.",
        "What is left must stay above your floor price.",
        "Credit terms and fees matter as much as headline margins."
      ]
    },
    {
      title: "Promotion: the funnel and the weakest step",
      minutes: 10,
      summary: "How to see promotion as a funnel from awareness to retention and referral, measure each step and fix the weakest one first.",
      blocks: [
        { type: "p", text: "Promotion answers \"Why should I trust and choose you?\" It is not only advertising. It is the full journey a buyer takes from first hearing of you to recommending you to others. Seeing it as a **funnel** lets you measure where buyers drop out." },
        { type: "table", head: ["Stage", "Buyer's state", "Typical tools"], rows: [
          ["Awareness", "Has heard of you", "Search, social, trade fairs, referrals, PR"],
          ["Interest", "Wants to know more", "Content, webinars, WhatsApp catalogue, demo videos"],
          ["Consideration", "Comparing options", "Case studies, demos, trials, references"],
          ["Decision", "Ready to buy", "Proposal, pricing clarity, easy payment such as UPI"],
          ["Retention and referral", "Using, renewing, recommending", "Onboarding, service, referral offers, reviews"]
        ] },
        { type: "h", text: "Fix the weakest step first" },
        { type: "p", text: "More spending at the top of a leaky funnel only produces more leaks. Find the stage where conversion is lowest compared with what you would expect, and fix that first." },
        { type: "steps", items: [
          "Count how many buyers reached each stage last month.",
          "Calculate the conversion rate from each stage to the next.",
          "Compare each rate with your past months or a sensible target.",
          "Pick the weakest conversion and list three possible causes.",
          "Run one change aimed at that step and measure it for two to four weeks."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Chandigarh coaching institute gets 2,000 website visits a month, 200 enquiries (10%), 120 demo-class bookings (60%), 30 enrolments (25%) and 6 referrals. The jump from enquiry to demo is healthy, but demo to enrolment is weak against its earlier months of 40%. Feedback shows parents are unsure about fee instalments. Offering a clear UPI instalment plan on the demo day lifts enrolment to 40, without spending a rupee more on ads." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Judging promotion only by awareness numbers such as reach or followers.",
          "Ignoring retention and referral, the cheapest source of new buyers.",
          "Changing several things at once, so you cannot tell what worked."
        ] },
        { type: "p", text: "Remember that the weakest step is not always a promotion problem. A low decision rate may come from an unclear price, and poor retention may come from the product or the service. Read the funnel as a map of where the whole 4P system is failing the buyer, then send the fix to the right owner." },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Write last month's numbers for each funnel stage for your product. Calculate the conversions, circle the weakest step and propose one change to test." }
      ],
      takeaways: [
        "Promotion is the full funnel from awareness to retention and referral.",
        "Measure conversion between every stage.",
        "Fix the weakest step before spending more at the top.",
        "Retention and referral are often the cheapest growth."
      ]
    },
    {
      title: "The product life cycle",
      minutes: 9,
      summary: "How introduction, growth, maturity and decline each change the way you price, distribute, promote and sell.",
      blocks: [
        { type: "p", text: "Products and categories move through four stages: **introduction, growth, maturity and decline**. The stage changes what buyers need from each P, so the right 4P mix at launch can be the wrong one three years later." },
        { type: "table", head: ["Stage", "Product and price", "Place", "Promotion and sales"], rows: [
          ["Introduction", "MVP testing, early-adopter pricing", "Few, selective channels", "Explain the category to first buyers"],
          ["Growth", "Add features, tiers", "Expand channels and cities", "Build brand preference, win share"],
          ["Maturity", "Differentiate, cut cost", "Optimise channel costs", "Retention, loyalty, cost efficiency"],
          ["Decline", "Simplify range, harvest margin", "Keep profitable channels only", "Serve loyal buyers, plan the next product"]
        ] },
        { type: "p", text: "In **maturity**, most buyers already understand the category and many competitors offer similar features. Focus usually shifts to differentiation, retention and cost efficiency. Explaining the category or charging high launch prices no longer works." },
        { type: "h", text: "Identifying your stage" },
        { type: "steps", items: [
          "Look at category sales growth over the last two to three years, from your data or industry summaries.",
          "Count how many credible competitors now offer something similar.",
          "Ask how much explaining buyers need before they understand what you do.",
          "Check whether your own growth comes mainly from new buyers or from repeat and referral.",
          "Agree a stage as a team and list what it means for each P."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: a Surat firm sold digital billing software to textile traders. Five years ago it had to explain why billing should be digital at all: introduction. Today most traders use some billing tool and a dozen rivals compete on price: maturity. The firm stops spending on category-education videos, adds a WhatsApp payment-reminder feature competitors lack, and moves basic support to a cheaper chat team. Its marketing shifts from \"why go digital\" to \"why switch to us\"." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Using launch tactics in a mature market.",
          "Assuming your product's stage equals the category's stage; a new entrant in a mature category still faces mature buyers.",
          "Missing the early signs of decline, such as falling repeat purchases."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "Decide which life-cycle stage your product's category is in, with two pieces of evidence. List one change it suggests for each of price, place, promotion and sales." }
      ],
      takeaways: [
        "The four stages are introduction, growth, maturity and decline.",
        "Each stage changes how you price, distribute, promote and sell.",
        "In maturity, focus shifts to differentiation, retention and cost efficiency.",
        "Judge the stage from evidence, not from how new your product feels."
      ]
    },
    {
      title: "Services: people, process and physical evidence",
      minutes: 9,
      summary: "Why services add three more Ps, people, process and physical evidence, and how to strengthen each.",
      blocks: [
        { type: "p", text: "A service cannot be held, tested or returned before purchase. Buyers of consulting, software implementation, training, logistics, healthcare or financial services must trust a promise. That is why services add three more Ps to the original four: **people, process and physical evidence**." },
        { type: "table", head: ["Extra P", "Buyer's question", "Examples"], rows: [
          ["People", "Will the people serving me be capable and courteous?", "Trained staff, named account managers, local-language support"],
          ["Process", "Will it run smoothly every time?", "Clear onboarding steps, response times, escalation paths"],
          ["Physical evidence", "What proof can I see before I buy?", "Case studies, offices, certificates, reviews, clean reports"]
        ] },
        { type: "p", text: "For many Indian buyers, physical evidence carries special weight. A visit to an office, a certificate on the wall, a known client's name or a short video of a real customer can do more than any brochure." },
        { type: "h", text: "Strengthening the three service Ps" },
        { type: "steps", items: [
          "List every moment a customer meets your people, from first call to renewal.",
          "For each moment, write what good looks like and who owns it.",
          "Map your delivery process on one page and mark where delays or errors happen most.",
          "Set and publish two or three service standards, such as replying on WhatsApp within four working hours.",
          "Collect proof: at least three case studies, client logos you have permission to use, and relevant certificates.",
          "Review complaints monthly and tie each to people, process or evidence."
        ] },
        { type: "callout", tone: "example", title: "Worked example", text: "Example: an Ahmedabad IT support firm loses pitches to a larger rival despite lower prices. Buyers say they are unsure who will turn up. The firm introduces named engineers with photos on each proposal (people), a four-hour response promise with a published escalation number (process), and three one-page case studies from local manufacturers (physical evidence). Its win rate on proposals rises over the next quarter, with no change in price." },
        { type: "h", text: "Common mistakes" },
        { type: "list", items: [
          "Treating service quality as an operations issue that sales and marketing cannot influence.",
          "Using case studies without numbers or without the client's permission.",
          "Promising response times the process cannot meet."
        ] },
        { type: "callout", tone: "tip", title: "Apply it this week", text: "If your product includes any service element, rate people, process and physical evidence from 1 to 5. Pick the weakest and add one proof item or one service standard this week." }
      ],
      takeaways: [
        "Services add people, process and physical evidence to the 4Ps.",
        "Buyers judge services by the people and the reliability of the process.",
        "Physical evidence such as case studies and certificates reduces perceived risk.",
        "Only promise service standards the process can keep."
      ]
    }
  ]
});
