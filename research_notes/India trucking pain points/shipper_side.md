# Shipper-side pain points in finding, booking, pricing, contracting and tracking trucks in India

Source-quality key, used throughout:
- **[GOVT]** government or quasi-government study. The anchor source is the DPIIT–NCAER *Assessment of Logistics Cost in India* (published September 2025, FY2023-24 data). Its surveys covered about 500 manufacturing users and more than 3,000 service providers, including more than 2,000 road transporters.
- **[DRHP]** the Redseer industry report in BlackBuck's IPO documents (FY2024 data). It is commissioned by an interested party.
- **[VENDOR]** a blog or marketing page from a platform that competes with brokers. Its figures are directional and unverified.
- **[UGC]** user complaints on consumer sites. These are anecdotal and unverified.

---

## 1. How do shippers find trucks today, and what share goes through brokers?

### Takeaway
Finding trucks is still mostly offline and done through intermediaries. Brokers and agents at transport hubs (transport nagars) match loads by phone, in person and on WhatsApp, and take commissions of roughly 3–15% per layer. Digital freight platforms handled less than 2% of road freight in FY2024. I found **no rigorous figure for the share of loads that go through brokers**. Sources only say "majority" or "largely".

### Cited Findings
- Road freight in India is worth about US$170–175 bn and moves 3.3 trillion tonne-km a year (FY2024). It is "largely serviced offline through multiple intermediaries between shippers and truck operators who charge a hefty commission." [DRHP] — [BlackBuck/Redseer Industry Report](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- Digital freight platforms account for **less than 2%** of overall road transportation. About **2.5 million digital loads** are posted each year. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- How matching works: "Matching of shippers and truckers traditionally takes place offline in remote transportation hubs… Load details are written on paper and matched with truck operators over the phone or in person." [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- The same report lists why matching is hard [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf):
  - no aggregate information on the loads and trucks at a hub;
  - many variables to match: timing, open versus container body, tonnage, volume, floor type, dimensions and commodity;
  - mismatched pricing and payment terms;
  - lane and language preferences of drivers;
  - "lack of trust in working with an unknown shipper/truck operator."
- Supply is fragmented: **75% of truck operators have fewer than 5 trucks**. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- Broker commission figures conflict, even within one source:
  - "3–8%" in one section and "8–10%" in another of the same report [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf);
  - "8–15%", rising to 20–25% when two brokers are in the chain [VENDOR] — [TruckGuru blog](https://truckguru.co.in/blog/?p=2848);
  - "8–15%" [VENDOR/blog] — [Gujarat Logistics blog](https://www.gujaratlogistics.in/post/the-ai-revolution-in-indian-trucking-from-chaos-to-coordination).
- There are an estimated **~2 million brokers**, with no digital platform to match nearby shippers and trucks in real time (2022 article; older data). — [Logistics Insider, Nov 2022](https://www.logisticsinsider.in/part-truck-load-market-in-india-waiting-for-a-rejig/)
- There are about 2,000 transport nagars across India, managed by state transport authorities. [VENDOR/blog] — [Fr8 blog](https://www.fr8.in/blog/transport-nagar-a-vital-hub-for-truckers-and-transporters/)
- A booking platform claims that 60–70% of truck-booking intermediaries are informal or unregistered. It cites no source. [VENDOR] — [Trukky blog](https://www.trukky.com/blog/why-broker-based-truck-booking-is-risky-for-indian-businesses/)
- The government study notes that "informal transporters operating outside the GST network" make costs hard to track and lead to non-standardised pricing. [GOVT] — [DPIIT–NCAER Logistics Cost report, 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- Platforms market themselves as alternatives to brokers. For example, Vahak advertises "zero commission". BlackBuck says shippers can find truck operators "outside of their private network." [VENDOR] — [Vahak](https://www.vahak.in/mob/online-load-booking); [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- A cross-country market report says mobile apps accounted for 62% of load bookings in 2023 across India and Southeast Asia. This is a low-quality aggregator that conflicts with the <2% digital-penetration figure above, so it is likely a different definition or unreliable. — [GM Insights](https://www.gminsights.com/industry-analysis/digital-freight-brokerage-market)

### Inferences
- With less than 2% digital penetration and fewer than 5 trucks for 75% of operators, most spot FTL bookings by MSMEs, traders and individuals almost certainly go through one or more intermediaries. Large FMCG and auto shippers use contracted transporters or 3PLs, who often re-broker market vehicles in turn.
- Each layer adds a markup. Two broker layers at about 8–15% each match the government's finding that brokered shipments cost about 30% more (see Section 2).

### Gaps
- No primary survey measures the share of shipper volume booked through brokers, through the shipper's own transporter network, or through apps. The DRHP gives only a qualitative description.
- I found no Reddit threads, and could not scrape Google Play reviews, on how shippers find trucks. Search returned none.

---

## 2. Availability (seasonality, peaks, backhaul) and pricing (opacity, volatility, no-shows)

### Takeaway
Shippers face the same route and commodity at very different prices depending on whether there is a broker, whether a return load exists, and their own size. On Delhi–Guwahati the gap is ₹85k versus ₹1.1 lakh versus ₹1.4–1.5 lakh. Rates jump 30–40% in festive and harvest peaks and up to 200% around Christmas and New Year. Rates were otherwise soft through 2025 and early 2026 because there were plenty of trucks. Empty running of about 40% means shippers in "headhaul" directions pay for the empty return leg.

### Cited Findings
**Price opacity and dispersion [GOVT]** — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- "Multiple rates exist for the same route and the same commodity." For an 18-tonne truck on Delhi–Guwahati:
  - a transporter with backhaul and a direct booking may quote **₹85,000**;
  - a brokered shipment without a return load may cost **up to ₹1,10,000** (+29%);
  - an MSME sending goods by LTL consolidation may pay **₹1.4–1.5 lakh per truck-equivalent** (+65–76%).
- "MSMEs or smaller players typically pay higher rates due to LTL shipments and limited negotiating leverage." Smaller firms "without bulk agreements face higher base rates, which are passed on to the end user."
- Pricing is "less about distance and more about network leverage, market timing, and relationship management." Some forwarders change prices dynamically with cargo availability, fuel, and the expected return load.
- Intermediaries (brokers, consolidators and clearing agents) mean "the end-user would be paying a much higher cost than the one mentioned in the tariff cards."
- The national average road cost is **₹3.78 per tonne-km**. This average hides wide variation; the northeast, for example, runs about ₹3.75 per tonne-km because return loads are scarce.

**Seasonality and peaks [GOVT]** — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- March–June is the busiest period because of perishables such as mangoes, watermelon and vegetables. Spot freight rates "rise sharply" in these months.
- During Diwali, rates from Ludhiana to Ahmedabad rise **30–40%** because of textile and e-commerce demand. Over Christmas and New Year, freight costs rise **up to 200%**.
- The monsoon adds **25–40%** to average trip durations.
- A ₹5/litre diesel rise adds ₹500–700 per 500 km run. Diesel is 35–45% of trip cost.

**Backhaul imbalance**
- Empty running is "as high as 40%." This figure comes from NITI Aayog/RMI 2021, which is older data, and the 2025 government study repeats it. [GOVT] — [NITI Aayog Fast Tracking Freight 2021](https://www.niti.gov.in/sites/default/files/2021-06/FreightReportNationalLevel.pdf); [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- Return cargo is often priced **30–40% below** the outward trip. Shipping from an industrial hub to a Tier 2/3 city costs more because the trucker builds the empty return into the price, which is "passed on to the consumer." [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- Trucks spend **24–48 hours** finding the next load, run only **18–20 days a month**, and idle **10–12 days a month**. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- Other constraints: Delhi NCR allows big trucks in only at night, which forces offloading to LCVs. Some northeast areas allow only drivers from certain communities, such as Khasi drivers for Meghalaya. There is a chronic shortage of long-haul drivers. [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)

**Recent rate trend (2025–26)**
- IFTRT data:
  - truck rentals fell **5–7%** in late May 2025 on medium and long-haul routes because supply exceeded demand — [Autocar Pro](https://www.autocarpro.in/news/truck-rentals-drop-5-7-in-may-on-key-routes-as-supply-exceeds-demand-126736?amp=1);
  - they fell **3–4%** in August 2025, with Delhi–Mumbai going from ₹1,96,000 to ₹1,91,000 — [Autocar Pro](https://www.autocarpro.in/news/indias-truck-rental-rates-drop-3-4-amid-us-tariff-concerns-128319);
  - they were stable in September 2025 with pre-festive stocking — [Autocar Pro](https://www.autocarpro.in/news/indias-logistics-sector-sees-pre-festive-surge-amid-gst-rate-cuts-shriram-mobility-bulletin-129162).
- Ahead of GST 2.0 on 22 September 2025, one expert predicted a post-rollout truck shortage and rates **30–40% higher**. This was a forecast, and I did not find it confirmed. — [India CSR](https://indiacsr.in/truckers-idle-as-freight-rates-drop-before-gst-2-0-rollout/)
- Crisil's freight index (CRISFrex, April 2025 = 100) peaked at about 101.4 around GST 2.0 and festive demand, then fell to about 100.5 by April 2026. Crisil cites "relatively high fleet availability" and weak cargo movement. The West Asia conflict disrupted fuel and freight from February 2026, and FASTag volumes fell 6.2% month-on-month in March 2026. The index tracks 32 route combinations, about 60–70% of organised road freight. — [Crisil, May 2026](https://www.crisil.com/content/dam/crisil-intelligence/what-we-think/reports/2026/05/crisil-freight-index-dips-in-april.pdf)
- The January 2024 nationwide truckers' strike against the hit-and-run law delayed goods. About 2,000 fuel pumps ran dry within two days. — [Tribune India](https://www.tribuneindia.com/news/india/2k-fuel-stations-run-dry-as-truckers-protest-hit-run-law-govt-firefights-577754); [SupplyChainBrain](https://www.supplychainbrain.com/logistics/freight-forwarding-customs-brokerage/article/15877030/india-truckers-strike-threatens-food-fuel-goods-supplies)

**Fare changes, cancellations and no-shows (intra-city apps) [UGC]**
- One Porter user says the fare rose from ₹108 to ₹224 after the driver arrived. — [Voxya](https://voxya.com/consumer-complaints/extra-fair-charged/236256)
- Another user reports ₹400 in extra fees, followed by more demands over size and weight. — [PissedConsumer](https://porter.pissedconsumer.com/review.html)
- App Store reviews describe a driver cancelling after picking up the parcel, and surprise disassembly charges after hours of delay. — [Chartoo (App Store reviews)](https://www.chartoo.in/itunes/app/1109398410-porter-logistics-service-app)
- In a 2025 survey by Borzo, an intra-city delivery firm, MSMEs named their top delivery problems: high delivery expenses (**59.2%**), inconsistent schedules (**21.2%**), delayed pickups (**13.5%**) and complicated returns (4.6%). The survey covered 20+ cities; sample size was not disclosed. — [SMEStreet, Apr 2025](https://smestreet.in/sectors/borzo-study-reveals-key-challenges-faced-by-msmes-in-india-9000313)

### Inferences
- In 2025–26 the main problem is mostly not too few trucks overall. Rates were flat to soft and fleet availability high. The problem is local, short-term shortages: festive and harvest peaks, NCR entry windows, the northeast, and directions where trucks rarely find return loads. It is also that a small shipper cannot get at the low "direct + backhaul" rate.
- The MSME LTL premium of about 65–75% over the best direct FTL rate is probably the single strongest number for the MSME pain point.

### Gaps
- I found no quantitative data on intercity FTL no-show or last-minute cancellation rates, either for brokers or for platforms such as BlackBuck and Vahak.
- I found no verified data on actual peak rates for the 2025 festive season.

---

## 3. Reliability: delays, damage, pilferage, visibility, accountability and claims

### Takeaway
The evidence on delays, turnaround and part-load (PTL) damage is reasonable. Hard India-specific data on tracking or visibility gaps is missing. The legal liability cap on carriers is low: 10 times the freight charge under the Carriage by Road Rules 2011. Insurance often excludes pilferage. So shippers bear most of the loss risk, and claims are hard to recover, especially with informal carriers and individual users of intra-city apps.

### Cited Findings
- **Turnaround delays:** a Mumbai manufacturer reports average truck turnaround of **2.5 days versus the expected 1.5 days** on one origin–destination pair, because of yard congestion. Drivers face multi-hour or overnight waits at loading and unloading points, and "owing to the lack of real-time updates, drivers have to rely on verbal communication." Unloading yards in Bihar and the northeast are highly congested. [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **Perishables:** frozen seafood from Visakhapatnam to Kolkata costs **25% more** than dry cargo. Survey respondents said perishables "suffer the most" from the lack of cold chain. [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **Poor fleet visibility:** owners "often remain unaware of their trucks' status once they are on the road." Idle time at loading points, fuel stations and checkpoints cannot be tracked in real time. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- **Cash handling** in trucking "increases the risk of pilferage," and drivers inflate expenses. This is a carrier-side leakage rather than cargo theft. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- **PTL damage:** a 2023 study reportedly found **86% of PTL shippers** had at least one damage claim in the year, and part-load damage runs at about 1–2% of consignments. I could not trace the original study, and the page returned 403 when fetched (seen in the search snippet only). — [Cargo Insights](https://cargoinsights.co/fragile-freight-challenges-in-indian-supply-chains/)
- **PTL compared with FTL:** PTL has longer transit, more damage risk, limited tracking in some areas, and is inconsistent in remote areas. [VENDOR] — [Tata Nexarc](https://blog.tatanexarc.com/logistics/ptl-logistics-simplified-msmes/)
- **Liability cap:** under the Carriage by Road Rules 2011, a common carrier's liability for total loss is capped at **10× the freight paid**, and cannot exceed the declared value. For example, ₹6 lakh of goods on a ₹3,000 freight gives only ₹30,000 of carrier exposure. Inland transit cover often excludes theft and pilferage unless added. [VENDOR/blog] — [Zane Marketing](https://zane.marketing/ecommerce-inventory-transit-insurance-india/); [FleetCodes](https://www.fleetcodes.com/blog/cargo-insurance-indian-transporters-guide-2026/)
- **Claim paperwork:** claims need the original bilty (consignment note), invoice, e-way bill, surveyor report and an FIR for theft. [VENDOR] — [FleetCodes](https://www.fleetcodes.com/blog/cargo-insurance-indian-transporters-guide-2026/)
- **Road cargo theft:** road transit is the riskiest mode for cargo theft, according to TT Club. India is listed among the affected countries, with insider collusion a key risk. [VENDOR/blog] — [Fleetx blog](https://blog.fleetx.ai/blog-cargo-theft-india/); [Binary Semantics](https://www.binarysemantics.com/blogs/list-of-cargo-theft-tactics-practices/)
- **Damage claims on intra-city apps [UGC]:**
  - Porter denied compensation for a bookshelf that fell during loading, blaming the wind. — [Voxya](https://voxya.com/consumer-complaints/goods-damaged-during-shifting-/235282)
  - Porter support said it "could not help" with a TV broken during a move. — [ConsumerComplaints.in](https://www.consumercomplaints.in/bycompany/porter-a602206.html)
- **Fake loads and refunds on BlackBuck [UGC]:** reviewers allege "fake load availability" shown to get payments, unresponsive support, and rejected chargebacks. The rating is 1.5★ from 57 reviews on PissedConsumer. — [PissedConsumer BlackBuck](https://blackbuck.pissedconsumer.com/review.html)
- **Global benchmark (not India):** only about 20% of 234 shippers have real-time visibility across all modes, and 57.1% for trucking. 57.4% say real-time visibility is a prerequisite for choosing a carrier. — [Ubico summary of Ti/project44 survey](https://www.ubico.io/post/supply-chain-visibility-shipper-survey)
- **AIS-140** requires tracking devices in certain vehicle categories, and FASTag reached about 98% of toll payments by March 2024. These create partial digital trails. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)

### Inferences
- In-transit visibility for FTL market vehicles from small fleets depends on phoning the driver or broker. That follows from fleets of fewer than 5 trucks, low digital literacy (DRHP), and the "verbal communication" finding (DPIIT), even without direct survey data. Recent tools such as FASTag-based and SIM-based tracking and ULIP exist, but adoption among small shippers is unquantified.
- The low liability cap means a shipper's real protection is its own insurance plus leverage over the transporter, usually by holding back payment. Small and one-off shippers have neither.

### Gaps
- I found no India-specific survey of the share of shippers with real-time tracking, or of on-time-in-full (OTIF) rates for road FTL.
- I found no authoritative Indian data on road cargo theft or pilferage incidence or value, such as from NCRB or insurers.
- I found no data on how long claims take to settle or what share of claims are recovered.

---

## 4. Contracting: informal deals, SLAs, disputes, PTL versus FTL, and small shippers

### Takeaway
Contracts are relationship-based and informal. Spot deals are made by phone with a bilty or lorry receipt as the only paperwork, and price depends on volume and leverage. Large shippers get contractual rates and SLAs. MSMEs pay a scale penalty: logistics costs are **16.9% of output for firms under ₹5 crore turnover, against 7.6% for firms over ₹250 crore**. PTL is about 10% of road freight; FTL is about 80–84%.

### Cited Findings
- **Scale penalty:** logistics cost as a share of output is **16.9%** for firms under ₹5 crore turnover and **7.6%** for firms over ₹250 crore. The ratio falls as turnover rises. Transport equipment is highest at **21.4%** of output; textiles, agriculture and pharma follow. India's total logistics cost was **₹24.01 lakh crore = 7.97% of GDP** in FY2023-24. This is based on a 500-firm manufacturing survey. [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **Rates depend on relationships:** "Prices often vary… because of commercial relationships, volume-based negotiations, and contractual arrangements." [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **No common cost accounting:** shippers, 3PLs, transporters and intermediaries "use different accounting methods and cost structures," producing "a highly fragmented cost landscape where national averages or standard rates fail to capture the actual cost realities faced by businesses." [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **Price and payment-term mismatch, plus lack of trust** with unknown counterparties, are named obstacles to matching. Digital platforms are pitched as giving "end to end accountability… discovery, matchmaking, pricing, payment, and fulfilment," which suggests the offline market lacks this. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- **Trucker resistance to digital:** low awareness of and trust in digital platforms, and "concerns regarding payment reliability," hold back digital adoption among truckers. That limits the formal, platform-backed options available to shippers. [DRHP] — [BlackBuck/Redseer](https://bb-website-public-assets.s3.ap-south-1.amazonaws.com/legal-assets/pdf/Industry+Report.pdf)
- **Mode mix:** within road freight, FTL is 84%, PTL 10% and express 6% (2022, older data). — [Logistics Insider 2022](https://www.logisticsinsider.in/part-truck-load-market-in-india-waiting-for-a-rejig/). Another estimate puts FTL at about 79.8% of road freight value in 2026. — [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/india-road-freight-transport-market)
- **Rail alternative is weak for MSMEs:** rail parcel and rake options do not suit MSMEs that "lack the cargo volume to fill a full rake." Private vendors and road provide more predictability, "critical for MSMEs and perishable goods." [GOVT] — [DPIIT–NCAER 2025](https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf)
- **How MSMEs arrange delivery (Borzo 2025):** 45.8% use next-day courier, 37.7% use 3PLs and 13.8% use their own fleet. 20% plan to build their own delivery networks in FY2026–27. — [SMEStreet](https://smestreet.in/sectors/borzo-study-reveals-key-challenges-faced-by-msmes-in-india-9000313)
- **Fraud risk with unknown carriers:** a common pattern is a fake carrier taking a "fuel advance" and never delivering. This comes from generic, non-India-specific guidance. — [Altline](https://altline.sobanco.com/what-is-freight-fraud/)
- **Recommended safeguards** for broker bookings: check GST and registration, get a signed booking receipt, and avoid paying in full in advance. These are vendor recommendations, which imply the problems are common. [VENDOR] — [Trukky blog](https://www.trukky.com/blog/why-broker-based-truck-booking-is-risky-for-indian-businesses/)
- **Seventh LEADS edition:** a stakeholder questionnaire run by Deloitte asks users to rate road transport services. No results have been published. The LEADS 2024 report drew on more than 7,300 responses but published state rankings, not pain-point statistics. — [LEADS questionnaire PDF](https://leatherindia.org/wp-content/uploads/2025/11/Perception-Based-Survey-Questionnaire-Users-.pdf); [Drishti IAS summary of LEADS 2024](https://www.drishtiias.com/daily-updates/daily-news-analysis/leads-2024-report/print_manually)

### Inferences
- Two tiers appear to exist:
  - Large shippers, such as FMCG, auto and cement companies, run tenders and annual rate contracts with SLAs through transporters and 3PLs. Those transporters still subcontract spot capacity.
  - MSMEs, traders and individuals book spot capacity by phone, through brokers or apps, with no SLA, little legal recourse (the 10× freight cap) and no volume leverage. The DPIIT 16.9% versus 7.6% gap and the Delhi–Guwahati rate example quantify this.
- Disputes are probably settled informally by holding payment, through broker mediation, or through transport association pressure. I found no source for this, so treat it as a hypothesis to verify.

### Gaps
- I found no survey on the share of shipments moving under written contracts or SLAs, or on the mechanisms used to resolve disputes.
- I found no data on detention or demurrage charges paid by shippers, or on how often they are disputed.
- I found no reliable reviews, app-store data or Reddit data on Vahak specifically. Searches returned unrelated results.
- I did not find and use KPMG, EY, BCG or McKinsey India trucking reports that publish shipper-side survey data. They may exist behind registration walls.
