Academy.add("B5", "practice", {
  quiz: [
    { q: "BATNA is:", options: ["your best alternative if no agreement is reached", "the lowest price", "the buyer's budget", "a closing technique"], answer: 0, explain: "BATNA stands for best alternative to a negotiated agreement: what you will do if there is no deal. It is not the lowest price; that is your floor price, which is a separate number on the prep sheet. A strong BATNA lets you hold firm." },
    { q: "A buyer asks for 8% off. The best move is:", options: ["give 8%", "give 4%", "ask what they can offer in return, such as a 2-year term or advance payment", "refuse to discuss it"], answer: 2, explain: "Every concession should be traded for something, so the first move is to ask what the buyer can offer. Giving 4% feels like a fair compromise but it is still a free concession that teaches the buyer that pushing works. Refusing to discuss it ignores the bargaining norm and can end the deal." },
    { q: "Which is a calibrated question?", options: ["“Will you sign today?”", "“How am I supposed to do that?”", "“Is that your final offer?”", "“Do you agree?”"], answer: 1, explain: "Calibrated questions are open questions starting with how or what that make the buyer think about your constraint and propose a solution. The other three are closed yes-or-no questions, which under pressure usually get a no." },
    { q: "After a closing question, you should:", options: ["keep talking to fill the silence", "offer a discount", "stay silent and let the buyer answer", "leave the room"], answer: 2, explain: "The last step of the close is silence: the buyer needs time to think and decide. Filling the silence often leads reps to add features or offer an unrequested discount, which gives away margin for nothing." },
    { q: "A mutual action plan is:", options: ["a dated list of steps both sides agree to take to reach go-live", "a discount schedule", "an internal forecast", "a marketing calendar"], answer: 0, explain: "A mutual action plan lists the dated steps, with owners on both sides, that lead to go-live. An internal forecast is the tempting wrong answer, but the forecast is your number; the MAP is a shared plan with the buyer that makes the forecast more reliable." }
  ],
  tasks: [
    {
      title: "Prep sheet for one live deal",
      time: "60 min",
      steps: [
        "Choose your largest open deal that will reach negotiation in the next month.",
        "Confirm the floor price and margin at floor with finance; record it in rupees.",
        "Set your target, opening position and walk-away combination of price, credit days and advance.",
        "Write your BATNA and your best estimate of the buyer's BATNA in one line each.",
        "List the three asks you expect and the trade you will request for each, with an approximate rupee value.",
        "Note the decision maker, their interests and whether your quote is GST-inclusive or exclusive.",
        "Review the sheet with your manager before the next call."
      ],
      deliverable: "A completed one-page prep sheet for a real deal, filed in the playbook as the team template.",
      checks: [
        "Self-check against the rubric: does the sheet use real deal numbers, not sample data (score 3 or 4)?",
        "Is every likely ask paired with a specific trade, and is the floor confirmed by finance?"
      ]
    },
    {
      title: "Recorded mock negotiation with a hard buyer",
      time: "45 min",
      steps: [
        "Brief a colleague or the facilitator to play a tough buyer using your real prep sheet.",
        "Agree consent for recording; recordings stay within the cohort.",
        "Run a 15-minute negotiation, using at least one mirror, one label and one calibrated question.",
        "Close with the four steps: summarise, propose, ask, stay silent.",
        "Review the recording with the facilitator using the negotiation and close rows of the role-play scorecard.",
        "Write down every concession you made and whether you traded it."
      ],
      deliverable: "Recording plus a short review note: concessions made, trades obtained, scorecard scores and one thing to change.",
      checks: [
        "Self-check against the scorecard: was every concession traded, and did you stay above the floor price?",
        "Did the close include a clear ask and a dated next step?"
      ]
    },
    {
      title: "Team discount policy with an approval matrix",
      time: "90 min",
      steps: [
        "Pull the last quarter's closed deals and list the discount given on each.",
        "Calculate margin at 0%, 5%, 10% and 15% discount for your main products.",
        "Set approval levels: rep up to X%, manager up to Y%, leadership above Y%.",
        "Define the trades required at each level, such as advance payment or a longer term.",
        "Add rules for credit days and GST treatment of quotes, and note that GST rules must be verified with finance.",
        "Present the draft to PMs in the week 8 joint session, stress-test it against their price tiers, and sign it off together."
      ],
      deliverable: "A one-page discount policy and approval matrix signed off by sales and product, filed in the playbook.",
      checks: [
        "Self-check against the rubric: are the thresholds based on real margin data and specific enough for a rep to use tomorrow?",
        "Has the policy been signed off by both sales and product managers?"
      ]
    }
  ],
  workshop: {
    title: "Tuesday live workshop: trade, don't discount",
    format: "Demonstrate, practise, coach (Dale Carnegie loop)",
    steps: [
      "Facilitator demonstrates a negotiation where the buyer demands 8% off, using mirroring, a label, a calibrated question and a conditional trade.",
      "Pairs practise with each learner's own prep sheet, swapping buyer and seller roles after 10 minutes.",
      "Coach gives feedback in the moment on whether every concession was traded and whether the seller stayed silent after the closing question.",
      "Each pair repeats the hardest moment once with the coach's suggestion applied."
    ]
  },
  reportBack: "Friday report-back: which deal did you prepare a prep sheet for, what did the buyer ask for, what did you trade, and what happened?",
  resources: [
    "Never Split the Difference (Chris Voss)",
    "Secrets of Closing the Sale (Zig Ziglar), optional"
  ]
});
