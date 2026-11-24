# Driver, Infrastructure and Operational Problems in Indian Trucking (affecting order fulfilment and truck provisioning)

Research date: 24 Nov 2026. Several fetches of primary pages (PIB, Business Standard, NewsBytes) returned HTTP 403, so some figures below are taken from search-result summaries of those pages and are flagged as such. Older data is marked with its year.

## 1. Truck driver shortage: size, causes, impact on truck availability

### Takeaway
Most 2025 estimates put availability at about **55-60 drivers per 100 trucks**, a shortfall of roughly 40-45%. Older official estimates are near 75 per 100, and the ratio was well above 1:1 in the 1980s-90s. The causes are low and irregular pay, no social security, harassment and bribes, long trips away from home, poor health and social stigma. One estimate says the shortage idles up to about 2 million trucks, which directly limits how many trucks can be provisioned.

### Cited Findings
- TeamLease VP Balasubramanian A: roughly **55 drivers per 100 trucks**, down from about 75 a few years earlier. DAT data, as cited by 91trucks, gives the same 55/100 ratio. — [91trucks](https://www.91trucks.com/news/how-truck-drivers-keep-indias-economy-moving-every-day); [DAT blog](https://dat.com/blog/trucking-is-the-backbone-of-indias-economy)
- Market research estimate: a shortage of **about 2.2 million skilled drivers**, with **55-60 drivers per 100 trucks**. — [Nexdigm](https://www.nexdigm.com/market-research/insights/blog/road-freight-market-opportunity-analysis/)
- Union Transport Minister Nitin Gadkari, at the launch of the IIT Delhi driver health report (Jan 2025), said there are **only about 75 drivers per 100 trucks**. He also said 70% of traffic moves by road. — [The Week/PTI, 28 Jan 2025](https://theweek.in/wire-updates/business/2025/01/28/dcm106-biz-ld-report-truck-drivers.html)
- Industry officials say **at least 20 lakh (2 million) trucks are not actively used** because of the driver shortage. The ratio was reportedly about **1.3 drivers per truck in the 1980s-90s**. — summarised from [Construction World](https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/truck-driver-shortage-disrupts-logistics-industry/56432) and [Mahindra Truck & Bus blog](https://mahindratruckandbus.com/english/blog/shortage-of-truck-drivers-upsetting.aspx) (search snippets; not independently verified)
- Startup India / Invest India white paper: economic losses from trucks lying idle because of the driver shortage are estimated at **USD 63 billion per year**. The same paper notes there are no systems to track queues at warehouse unloading lines. — [Startup India Logistics White Paper](https://www.startupindia.gov.in/content/dam/invest-india/Templates/public/White%20Paper_Logistics%20Sector.pdf) (date uncertain; likely pre-2023)
- Government response, April 2025: Gadkari announced a scheme worth about **Rs 4,500 crore** for driver training centres to address the shortage of skilled drivers. — [Business Standard, 3 Apr 2025](https://www.business-standard.com/india-news/skilled-truck-driver-shortage-4500-crore-training-centre-nitin-gadkari-125040300819_1.html) (headline/URL only; page returned 403, so details were not verified)
- Causes, from SaveLIFE Foundation's "Status of Truck Drivers in India" (2020; 1,217 drivers and 101 fleet owners across 10 cities):
  - **53%** earn Rs 10,000-20,000 per month, and nearly 9 in 10 earn up to Rs 20,000.
  - **93%** have no social security beyond wages.
  - **53%** are dissatisfied with the profession, citing low and irregular income, harassment by officials and unscheduled hours.
  - **84%** would not recommend trucking to family.
  - About **93%** are employees; only about 6% drive their own truck.
  - **9 in 10** had no formal training before getting a licence.
  — [Autocar Professional, 28 Feb 2020](https://www.autocarpro.in/news-national/most-truck-drivers-in-india-are-sleep-deprived-compromise-road-safety-savelifes%20hardhitting-report-55710)
- Harassment and bribes (SaveLIFE 2020):
  - Estimated annual bribes paid by truckers were **Rs 47,852 crore (about US$6.7 bn)**, up from Rs 22,048 crore in 2006-07.
  - About **67%** of drivers nationally admitted paying bribes to traffic or highway police; in Delhi-NCR the figure was about **84%**.
  — [Autocar Professional](https://www.autocarpro.in/news-national/most-truck-drivers-in-india-are-sleep-deprived-compromise-road-safety-savelifes%20hardhitting-report-55710)

### Inferences
- The figures move from about 75 to about 55 per 100. These may be different methods rather than a real deterioration, because the 75 is a ministerial figure and the 55 comes from staffing and industry sources. The report should present it as a range: "45-75 drivers short per 100 trucks; consensus around 55-60."
- A shortage of about 40% means fleets cannot run double-driver or relay operations on long haul. Trucks sit idle at origin waiting for drivers, which shows up as unfulfilled indents and last-minute truck cancellations for shippers.
- Pay of Rs 10-20k per month with no social security does not attract young entrants, so the shortage is structural rather than cyclical.

### Gaps
- No official, method-transparent national count of licensed, active heavy-vehicle drivers versus registered trucks was found.
- No 2024-26 pay survey was found; the SaveLIFE pay data is from 2020. Anecdotal 2025 news puts long-haul driver pay higher, but I found no rigorous source.
- I could not read the full text of the April 2025 Rs 4,500 crore training-centre scheme (403 error).

## 2. Driver working conditions: hours, rest, safety, accidents, health; government initiatives

### Takeaway
Drivers average about 12 hours of driving a day, and about half drive while fatigued. Health is poor: 55% have compromised vision and 57% have elevated blood pressure (IIT Delhi screening of 50,000 drivers, 2025). Government responses are:
- A mandatory AC cabin for new N2/N3 trucks made from 1 Oct 2025.
- "Apna Ghar" rest stops, with 368 units and 4,611 beds as of July 2025.
- Driver training centres.

Enforcement of working-hour rules is weak.

### Cited Findings
- Hours and fatigue (SaveLIFE 2020):
  - Drivers average about **12 hours of driving per day** and cover about **417 km per day**.
  - Almost **50%** keep driving even when fatigued or sleepy.
  - **22%** take some kind of drug during trips; the share is over half in Kolkata, Kanpur and Delhi-NCR.
  - **62%** feel unsafe on the road.
  - SaveLIFE recommends enforcing working-hour norms under the Motor Transport Workers Act, 1961.
  — [Autocar Professional](https://www.autocarpro.in/news-national/most-truck-drivers-in-india-are-sleep-deprived-compromise-road-safety-savelifes%20hardhitting-report-55710)
- Health of Delhi drivers (SaveLIFE 2020): **96%** reported backaches, **64%** headaches or dizziness, and **73%** said working conditions are bad. — same source
- IIT Delhi with Foresight Foundation (Jan 2025), screening of **50,000 drivers in six states** (UP, Rajasthan, MP, Maharashtra, Karnataka, TN):
  - **55.1%** have compromised vision (53.3% of these need distance correction).
  - **57.4%** have elevated BP.
  - **44.3%** have borderline or high BMI.
  - **18.4%** have borderline or high blood sugar.
  - **33.9%** show moderate stress and 2.9% high stress.
  — [The Week/PTI](https://theweek.in/wire-updates/business/2025/01/28/dcm106-biz-ld-report-truck-drivers.html)
- Road safety context: MoRTH's *Road Accidents in India 2023* recorded **4,80,583 accidents** and about **1.72 lakh deaths**. Over-speeding accounted for about **68%** of deaths. Two-wheeler riders were 44.8% of fatalities. — [Siasat/PTI](https://www.siasat.com/1-72-lakh-people-died-in-road-accidents-in-2023-road-ministry-report-3264450/); [MoRTH report PDF](https://morth.nic.in/sites/default/files/Road-Accident-in-India-2023-Publications.pdf)
- Truck and lorry share of deaths: the only figure found is for Haryana in 2023, where 410 deaths (**8.3%**) were truck or lorry users. — [Tribune](https://www.tribuneindia.com/news/haryana/10k-road-accidents-in-state-in-23-4968-died-8346-injured-report)
- Overloading contributed to about **12%** of road crash deaths, as cited in SaveLIFE 2020 context. — [Autocar Professional](https://www.autocarpro.in/news-national/most-truck-drivers-in-india-are-sleep-deprived-compromise-road-safety-savelifes%20hardhitting-report-55710)
- AC cabin mandate:
  - A MoRTH draft of 10 July 2023 proposed AC cabins from 1 Jan 2025.
  - The final gazette notification (Dec 2023) requires AC for the cabins of **N2 (3.5-12 t) and N3 (>12 t) trucks manufactured on or after 1 Oct 2025**, tested under IS 14618:2022.
  - Drive-away chassis makers must supply a type-approved AC kit.
  - Estimated added cost per truck: about **Rs 10,000-20,000** by one estimate, or **Rs 30,000-50,000** according to OEMs.
  — [Autocar Professional](https://www.autocarpro.in/News/govt-mandates-ac-cabins-for-trucks-manufactured-from-october-1-2025-118176); [Deccan Herald](https://www.deccanherald.com/india/govt-makes-air-conditioned-truck-cabin-mandatory-from-oct-2025-2804828); [PIB draft PDF, Jul 2023](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2023/jul/doc2023711221301.pdf)
- Apna Ghar rest stops:
  - As of **1 July 2025**, there were **368 Apna Ghar units with 4,611 beds**, set up by public-sector oil marketing companies at fuel retail outlets on highways.
  - Facilities include AC dormitories, self-cooking areas, toilets and parking.
  - Beds cost about **Rs 112 for 8 hours**, bookable on an app. From June 2025, stays are free for drivers who buy 50 litres or more of diesel.
  - A reported target of about **1,000 units by March 2027** is unverified against official documents.
  — [DD India, Aug 2025](https://ddindia.co.in/2025/08/govt-launches-apna-ghar-resting-facilities-for-truck-drivers-across-highways/); [Adda247](https://currentaffairs.adda247.com/govt-launches-apna-ghar-resting-facilities-for-truck-drivers)
- NHAI Wayside Amenity Stations on the Delhi-Mumbai Expressway (June 2025): **21 established, 4 operational**, with driver-focused facilities. — [Republic World, 27 Jun 2025](https://www.republicworld.com/india/affordable-meals-wifi-clean-rest-rooms-nhai-s-driver-centric-wayside-amenities-on-delhi-mumbai-expressway)
- Eye-care initiative "Project Abhay" targets truck driver vision as a road safety issue. — [Autocar Professional](https://www.autocarpro.in/news/project-abhay-vision-care-initiative-targets-road-safety-crisis--124656)

### Inferences
- About 4,600 Apna Ghar beds against several million truck drivers is a token level of coverage. Most rest still happens in cabins or at dhabas, which supports the AC-cabin mandate as the more scalable intervention.
- The AC-cabin mandate covers only new trucks, and the average fleet age is about 10 years. Most of the fleet will therefore lack AC cabins until the 2030s.
- Poor vision and fatigue raise accident risk. That raises insurance costs and creates driver legal exposure (see the hit-and-run law in section 5), which further discourages people from joining the profession.

### Gaps
- No 2023-26 national survey of driver hours or sleep was found; the SaveLIFE data is from 2020.
- The national share of truck-involved road deaths was not extracted because the MoRTH PDF was not parsed.
- I could not confirm whether the AC mandate was deferred or amended after Dec 2023.

## 3. Infrastructure and operational inefficiency: speed, km/day, tolls, borders, waiting time, parking, warehousing

### Takeaway
Indian trucks still cover only about 300-450 km per day. A recent government study found average speeds of about 37-38 km/h on highways and 47-48 km/h on expressways. Most lost time is now waiting at factories, warehouses and hubs, often up to a day each for loading and unloading, rather than at toll plazas or state borders. GST removed state checkposts (2017), and FASTag cut toll waits from about 8-12 minutes to about 47 seconds.

### Cited Findings
- A year-long government study found commercial vehicles average about **37-38 km/h on highways and 47-48 km/h on expressways**.
  - Much of the lost time is spent waiting at warehouses, factories and logistics hubs.
  - Truckers often spend **up to a day each on loading and unloading**.
  - MoRTH has asked DPIIT for measures to cut these delays.
  — [NewsBytes](https://www.newsbytesapp.com/news/business/trucking-delays-on-highways-prompt-government-intervention/story) (from a search summary; the page returned 403, and the study's date and title were not confirmed)
- CRISIL (Nov 2017): a typical truck averaged about **35 km/h and about 300 km/day**. After GST removed checkposts, the gain was only about **25 km/day, to about 325 km/day**. CRISIL blamed state flying squads and e-way bill checks. — [CRISIL press release](https://crisil.com/content/crisil/en/home/newsroom/press-releases/2017/11/trucks-plying-just-25-km-more-per-day-after-check-posts-go.html); [Autocar Professional](https://autocarpro.in/news-national/-gst-negligible-impact-inter-truck-movement-crisil-26980)
- Logistics firms claimed post-GST gains of 100-150 km/day, to **400-450 km/day** (2018, self-reported). This conflicts with CRISIL. — [Business Today via PressReader](https://www.pressreader.com/india/business-today/20180506/282054802626107)
- SaveLIFE 2020 drivers reported about **417 km/day**. — [Autocar Professional](https://www.autocarpro.in/news-national/most-truck-drivers-in-india-are-sleep-deprived-compromise-road-safety-savelifes%20hardhitting-report-55710)
- Toll plazas: Gadkari told the Lok Sabha that average waiting time fell from **about 8 minutes (2018-19; IBEF cites 714-734 seconds) to 47 seconds** after FASTag (2020-22). NHAI's service-time target is 10 seconds. An early HT analysis (Jan 2020) found waits briefly rose 29% during the FASTag transition. — [News On Air](https://www.newsonair.gov.in/average-waiting-time-at-fee-toll-plazas-reduced-from-734-seconds-to-47-seconds-union-minister-nitin-gadkari-inform-ls); [IBEF](https://www.ibef.org/news/fastag-impact-waiting-time-down-from-almost-12-minutes-to-47-seconds-at-toll-plazas); [Deccan Herald 2020](https://www.deccanherald.com/india/fastags-waiting-time-increases-by-29-report-795451.html)
- Detention practices (vendor source): the typical free window is **2-4 hours** at each of pickup and delivery. Detention is charged at **Rs 200-500 per hour** after that. A 10-tonne truck idling burns about 1-2 litres of diesel per hour. Causes include disorganised warehouses, short staffing and full warehouses during e-commerce peaks. — [TruckGuru blog](https://truckguru.co.in/blog/?p=1867); [India Seatrade News](https://indiaseatradenews.com/from-idle-fleets-to-streamlined-operations-solving-indias-truck-detention-crisis/)
- World Bank LPI 2023: India ranked **38 of 139**, up from 44 in 2018. Its infrastructure sub-score rank improved to 47 from 52. Average container dwell time was **2.6 days**, which the World Bank cited as an example for emerging economies. — [PIB](https://pib.gov.in/PressReleasePage.aspx?PRID=1919925); [Drishti IAS](https://drishtiias.com/daily-updates/daily-news-analysis/logistics-performance-index-2023)
- National Highway tolls rose **4-5% on 1 April 2025**. — [ITLN, 10 Jun 2025](https://itln.in/road-transportation/indias-ageing-truck-fleet-could-escalate-freight-spends-by-28-1355526)

### Inferences
- For order fulfilment, the binding constraint has shifted from in-motion delays (checkposts, tolls) to dwell time at shipper and consignee sites. Truck turnaround, not line-haul speed, determines effective capacity. A truck held a day at each end of a 2-3 day trip loses about 40% of its productive capacity.
- Low km/day (about 300-450, against roughly 800+ in mature markets) compounds the driver shortage, because each driver-truck pair moves fewer tonne-km.

### Gaps
- No authoritative 2023-26 national dataset on truck parking supply, urban no-entry windows or state-border dwell time was found.
- The title and date of the government speed study need verification.
- No quantified national warehousing-gap figure (e.g., Grade A sq ft shortfall) was researched in this scope.

## 4. Logistics cost as % of GDP, road share and modal mix

### Takeaway
The first official estimate, by NCAER for DPIIT (released Sept 2025), puts India's logistics cost at **7.97% of GDP in FY2023-24 (about Rs 24.01 lakh crore)**. This replaces the widely cited 13-14% figures, which the report says relied on partial or external data. Road carries roughly **65-70% of freight tonne-km** and rail about 22-27%.

### Cited Findings
- NCAER's "Assessment of Logistics Cost in India" for DPIIT:
  - Logistics cost was **7.97% of GDP in FY24** and **9.09% of non-services output**.
  - The previously quoted 13-14% figures were based on partial or external data.
  - Growth in logistics cost has slowed over the previous five years.
  — [ITLN](https://www.itln.in/logistics/indian-logistics-costs-at-797-of-gdp-new-study-reveals-1356654); [Outlook Business](https://www.outlookbusiness.com/economy-and-policy/indias-logistics-cost-pegged-at-797-pc-of-gdp-in-first-systematic-study); [The Policy Edge](https://www.policyedge.in/p/india-releases-first-official-estimate-of-logistics-costs-at-797-of-gdp)
- The NCAER logistics dashboard gives the total at **Rs 24.01 lakh crore** at current prices. — [NCAER dashboard](https://ncaer.org/logistics-dashboard/)
- Cost by mode:
  - Rail averages **Rs 1.96 per tonne-km**, excluding first and last mile.
  - Heavy-duty road trailers cost **Rs 1.51 per tonne-km**, the lowest in the study.
  - Air costs about Rs 72 per tonne-km.
  - Road versus multimodal break-even is about 600 km (with 50 km first and last mile) or about 1,000 km (with 100 km first and last mile).
  — [Business Today, 22 Sep 2025](https://www.businesstoday.in/india/story/road-cheaper-than-rail-for-moving-heavy-logistics-dpiit-495095-2025-09-22); [Outlook Business](https://www.outlookbusiness.com/economy-and-policy/indias-logistics-cost-pegged-at-797-pc-of-gdp-in-first-systematic-study)
- By firm size, small firms spend about **17% of output** on logistics, against **7.6%** for large firms. — [Outlook Business](https://www.outlookbusiness.com/economy-and-policy/indias-logistics-cost-pegged-at-797-pc-of-gdp-in-first-systematic-study); [Deccan Herald on the MSME penalty](https://www.deccanherald.com/connect/the-msme-logistics-cost-penalty-4105568)
- Gadkari (Jan 2025) referred to logistics costs of "14-16%". This reflects the older estimate that NCAER revised. — [The Week/PTI](https://theweek.in/wire-updates/business/2025/01/28/dcm106-biz-ld-report-truck-drivers.html)
- Modal mix estimates vary by source and measure:
  - CII-Knight Frank: road nearly **70%** of tonne-km, rail **27.4%**. — [Knight Frank MMLP report 2026](https://content.knightfrank.com/research/3107/documents/en/fast-tracking-mmlps-to-enable-modal-shift-2026-12876.pdf)
  - KPMG (Apr 2026, citing the World Bank): about 70% road, about 25% rail. — [KPMG](https://kpmg.com/in/en/blogs/2026/04/rail-versus-roads-rebalancing-indias-freight-mix.html); [World Bank blog](https://blogs.worldbank.org/en/endpovertyinsouthasia/road-to-rail--unlocking-india-s-freight-potential-)
  - The Secretariat: road 66%, rail 22% of tonne-km. Rail's share was about 89% in 1950-51. — [The Secretariat](https://thesecretariat.in/article/when-india-s-rail-freight-traffic-fell-off-tracks)
  - Business Today (Jun 2025), by volume: road about 65%, rail 26%. — [Business Today](https://www.businesstoday.in/amp/magazine/deep-dive/story/why-railways-target-of-doubling-freight-traffic-over-the-next-five-years-looks-ambitious-478865-2025-06-03)
- The National Logistics Policy (2022) aims to bring costs to global benchmarks by 2030. — [ITLN](https://www.itln.in/logistics/indian-logistics-costs-at-797-of-gdp-new-study-reveals-1356654)

### Inferences
- The 7.97% figure weakens the "India logistics is double global cost" narrative. However, the MSME penalty (17% of output) shows the pain falls on small shippers. These are the customers most dependent on fragmented spot-market trucking.
- On a per-tonne-km basis, large trailers are cost-competitive with rail. Road's 65-70% share is therefore partly rational, and the inefficiency lies in utilisation (empty running, detention) rather than the modal choice itself.

### Gaps
- I could not access the PIB release (403) to extract the road-transport share of total logistics cost, or the split between inventory and transport.
- No single authoritative source for "71% road share" was found. The range of 65-70% is better supported.

## 5. Fleet composition, ageing, overloading, EV/LNG transitions and new regulation

### Takeaway
The M&HCV fleet is about 5.4 million vehicles. The average long-haul truck age has risen to about **10 years**, a 20-year high, and about **1.1 million trucks (about one-fifth) are over 15 years old**. Scrappage uptake is under 3% of eligible vehicles. Clean-fuel transitions are tiny: e-truck subsidies under PM E-DRIVE cover about 5,600 vehicles, and the LNG fleet is around 1,300. The January 2024 strike against the hit-and-run provision (BNS 106(2)) showed how quickly driver discontent can halt supply chains.

### Cited Findings
- Fleet age and size:
  - The M&HCV fleet grew from about 2 million (FY2005) to **about 5.4 million**.
  - Average long-haul truck age was **10 years in FY2024**, up from 8.0 a decade earlier, the highest in two decades (Ashok Leyland data).
  - About **1.1 million trucks are over 15 years old** (ICRA), roughly one-fifth of the active fleet.
  - Pre-BS-IV trucks use **5-7% more diesel** and about twice the maintenance spend per km of a 3-year-old truck.
  - Freight cost escalation of 2-8% is forecast.
  — [ITLN, 10 Jun 2025](https://itln.in/road-transportation/indias-ageing-truck-fleet-could-escalate-freight-spends-by-28-1355526)
- ICRA: the average M&HCV age was about 10 years in FY2023-25, and the scrappage policy could affect more than 1.1 million M&HCVs over 15 years old. — [Autocar Professional](https://www.autocarpro.in/news/icra-estimates-significant-potential-for-scrappage-of-11-million-older-medium-and-heavy-commercial-vehicles-122960)
- Scrappage policy:
  - Only about **350,500 vehicles were scrapped at registered facilities between Aug 2022 and Jul 2025**, just under 3% of eligible vehicles.
  - Incentives include state road-tax waivers of up to 25% and OEM discounts of 4-6%.
  - Phase 2 (June 2024) moves toward fitness-based rather than age-based scrapping.
  — [S&P Global Mobility, Sep 2025](https://www.spglobal.com/automotive-insights/en/blogs/2025/09/india-vehicle-scrappage-policy-insights)
- The Centre approved a retrofit route for the ageing truck and bus fleet, and Gadkari renewed his call for industry support on scrappage. — [Autocar Professional](https://www.autocarpro.in/news/new-delhi-approves-retrofit-fix-for-indias-ageing-truck-and-bus-fleet-134495); [Autocar Professional](https://www.autocarpro.in/news/gadkari-renews-push-for-industry-support-on-vehicle-scrappage-134493)
- Emissions: heavy vehicles are about 2% of vehicles but are responsible for about 70% of vehicular pollution (CSTEP study). — [ThePrint](https://theprint.in/environment/heavy-vehicles-make-up-2-of-countrys-vehicles-but-are-responsible-for-70-of-pollution-cstep-study/2727155)
- E-trucks under PM E-DRIVE (Ministry of Heavy Industries guidelines, 10/11 July 2025):
  - Total outlay is **Rs 500 crore**, at **Rs 5,000/kWh** or slab-based, **up to Rs 9.6 lakh per truck**.
  - Trucks above Rs 1.25 crore ex-factory are excluded.
  - **Scrapping an old truck is mandatory** to claim the incentive.
  - The scheme targets **about 5,600 e-trucks** and runs to March 2026.
  — [PIB release PDF](https://pmedrive.heavyindustries.gov.in/docs/press_release/PIB%20Release%20on%20Roll%20out%20of%20Guidelines%20for%20e-trucks%2011%2007%202025.pdf); [Autocar Professional/ICRA](https://www.autocarpro.in/news/pm-e-drive-scheme-for-e-trucks-launched-with-rs-500-crore-outlay-icra-127697); [ICCT](https://theicct.org/why-indias-e-truck-incentive-scheme-can-be-a-gamechanger-for-the-economy-and-the-environment-jul25)
- ICCT sees cement, steel and port logistics as early e-truck adopters. — [ICCT](https://theicct.org/why-indias-e-truck-incentive-scheme-can-be-a-gamechanger-for-the-economy-and-the-environment-jul25)
- LNG trucks:
  - Blue Energy Motors says it has **over 800 LNG trucks on Indian roads**, which have covered 50 million km, and claims more than 50% of the LNG truck segment.
  - CONCOR ordered 50 LNG trucks.
  - The government's long-stated goal is about 1,000 LNG stations; in 2022 only about 20 were coming up.
  — [Autocar Professional](https://www.autocarpro.in/news/blue-energy-motors-lng-trucks-cross-50-million-kilometers-save-14000-tonnes-co2-emissions-126548); [Autocar Professional, CONCOR](https://www.autocarpro.in/news/concor-orders-50-lng-trucks-from-blue-energy-motors-expanding-green-fleet-124799); [Business Standard 2022](https://bsppd.business-standard.com/article/companies/blue-energy-motors-unveils-india-s-first-lng-fuelled-green-truck-in-chakan-122090201268_1.html); [Natural Gas World](https://naturalgasworld.com/blue-energy-motors-bets-on-indian-lng-fuelled-trucking-116100)
- Hit-and-run law:
  - Under the Bharatiya Nyaya Sanhita, **Section 106(2)** sets up to **10 years' jail** (plus a fine; some reports cite Rs 7 lakh, not confirmed) for drivers who flee without reporting a fatal accident. The previous maximum under the IPC was 2 years.
  - Drivers who report immediately face the lesser charge under 106(1), with up to 5 years.
  - A transporters' and drivers' strike from **1 January 2024** left about **2,000 petrol pumps dry by day two**, mainly in Rajasthan, MP, Maharashtra and Punjab, and choked supply in Thane.
  - On 2 January 2024 the Home Ministry assured truckers that 106(2) would not be invoked without consulting them, and the strike was called off.
  — [Scroll](https://scroll.in/latest/1061501/truckers-protest-new-law-on-hit-and-run-cases-fuel-supply-disrupted); [The Logical Indian](https://thelogicalindian.com/trending/fuel-crisis-grips-india-2000-petrol-pumps-run-dry-amid-truckers-protest-against-new-hit-and-run-law-41683); [The Statesman](https://www.thestatesman.com/india/long-queues-at-petrol-pumps-as-truckers-bus-drivers-protest-against-new-hit-and-run-law-1503255465.html); [BOOM](https://www.boomlive.in/law/hit-and-run-bharatiya-nyay-sanhita-indian-penal-code-truck-drivers-protest-24025)
- AC cabin mandate for N2/N3 trucks from 1 Oct 2025 (see section 2). It adds an estimated Rs 10-50k to the capex of each new truck. — [Autocar Professional](https://www.autocarpro.in/News/govt-mandates-ac-cabins-for-trucks-manufactured-from-october-1-2025-118176)

### Inferences
- The fleet is ageing because operators cannot afford renewal; scrappage uptake under 3% confirms this. Combined with the driver shortage, this lowers reliable capacity. Older trucks break down more and need more maintenance, which causes delays and cancellations for shippers.
- E-truck and LNG volumes (thousands) are negligible against a fleet of about 5.4 million M&HCVs. The transition will not change truck availability before about 2030, though it matters for ESG-driven shippers in cement, steel and ports.
- The hit-and-run episode shows driver-side legal risk is a live supply-chain risk: a two-day strike emptied fuel stations. A platform that provisions trucks needs contingency planning for such shocks.

### Gaps
- No reliable 2023-26 national data on overloading prevalence or enforcement was found, beyond the SaveLIFE figure of 12% of crash deaths.
- No verified count of e-truck registrations in 2025 was found; the 5,600 figure is a scheme target. An LNG fleet figure of about 1,300 (2025, +75% year on year) appeared in a search summary, but its source URL could not be verified, so it is excluded from Cited Findings.
- The fleet split between small fleet owners (fewer than 5-10 trucks) and large fleets was not researched here. It is often cited as about 75-85% small operators, but that is unverified in this pass.
- The current status of BNS 106(2) enforcement (whether notified or still on hold in 2025-26) was not confirmed.
