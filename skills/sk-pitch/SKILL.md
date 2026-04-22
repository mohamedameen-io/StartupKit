---
name: sk-pitch
description: "Phase 10: Build investor-ready pitch scripts in multiple formats (10-min, 5-min, 2-min, 1-min elevator, investor email). Uses all prior session data -- niche, competitors, positioning, offer, validation, money model -- to produce comprehensive pitch narratives with Q&A prep and scoring. Triggers for investor pitch, pitch practice, fundraising deck, demo day prep."
---

# Startup Pitch

Build investor-ready pitch content in multiple formats. Uses a structured 7-element framework combined with a problem-solution-insight foundation to produce pitch narratives that are clear, compelling, and fundable.

## How It Works

```
INTAKE → RESEARCH (2 parallel waves) → PITCH CONSTRUCTION → REVIEW & PRACTICE
```

The process: understand the company deeply, research the investor audience and competitive framing, then construct the pitch. Typical runtime: 15-20 minutes in Claude Code (parallel agents), 30-40 minutes in Claude.ai (sequential).

### Core Philosophy

Three principles govern every output this skill produces:

1. **Clarity over sophistication.** "80% accurate and 100% clear beats the reverse." If a grandmother can't understand what you do, investors won't either. Eliminate jargon, acronyms, and marketing language.
2. **Lead with what's impressive.** You earn each additional minute of investor attention. Don't bury traction after 5 sections of problem setup — put the strongest signal right after "what you do."
3. **Make investors talk.** A pitch isn't a monologue. The more investors talk, the more they convince themselves. Structure the narrative to invite conversation, not shut it down.

### Language

Default output language is **English**. If the user writes in another language or explicitly requests one, use that language for all outputs instead.

---

## Setup

Use the intake phase to assemble prior-phase inputs before selecting research depth.

## Mode Selection

This skill supports `mode=quick`, `mode=standard`, or `mode=deep` in slash-command args.

- `quick` (10-15 min): produce concise investor narrative outputs (elevator + 2-minute pitch).
- `standard` (30-60 min): default path producing core investor formats.
- `deep` (1-2+ hours): full multi-format package with deep Q&A prep and scorecard.

If no mode is passed, default to `standard`. Use `references/mode-contracts.md` for exact deliverable contracts per mode.

## Phase 1: Intake

Short and focused — 1-2 rounds of questions. The goal is enough context to build a compelling pitch.

### Recommended Prior Work

A pitch built on validated data is significantly stronger than one built on self-reported answers. For the best results, complete StartupKit phases 1-9 before running this skill -- they provide niche validation, competitive intelligence, positioning, a Grand Slam Offer, validation results, revenue model, lead strategy, and AI skills integration that become the foundation of a much more credible pitch.

Not required. sk-pitch works standalone. But the quality difference is noticeable.

### Check for Prior StartupKit Session

Before asking questions, ask the user for their session name, then read ALL available session files for comprehensive pitch context:

**From Phase 2 (Niche):**
- `workspace/sessions/{name}/02-niches.md` -- Gold niche (Person, Problem, Promise)

**From Phase 3 (Competitors):**
- `workspace/sessions/{name}/03-competitors.md` -- Competitive landscape summary
- `workspace/sessions/{name}/03-competitors/battle-cards/` -- Per-competitor battle cards (for Q&A prep)
- If `workspace/sessions/{name}/03-competitors/competitor-dossiers/` directory exists, read the dossiers for deeper competitive framing in Q&A preparation — dossiers contain strategic vulnerabilities and future trajectory that strengthen "why us" answers

**From Phase 4 (Positioning):**
- `workspace/sessions/{name}/04-positioning.md` -- Positioning summary with elevator pitch
- `workspace/sessions/{name}/04-positioning/positioning-statement.md` -- Full statement formats
- `workspace/sessions/{name}/04-positioning/messaging-implications.md` -- Messaging hierarchy

**From Phase 5 (Offer):**
- `workspace/sessions/{name}/05-offer.md` -- Grand Slam Offer details (product, price, value equation)

**From Phase 6 (Validation):**
- `workspace/sessions/{name}/06-validation.md` -- Validation results (traction proxy, unfair advantages)

**From Phase 7 (Money):**
- `workspace/sessions/{name}/07-money-model.md` -- Revenue model, projections, customer journey

**From Phase 8 (Leads):**
- `workspace/sessions/{name}/08-lead-strategy.md` -- GTM strategy, channels, 4 Pillars scores

**From Phase 9 (Skills):**
- `workspace/sessions/{name}/09-skills-match.md` -- AI skills integration plan

For any files that don't exist, note the gap and proceed with what's available. Not every session completes all phases before pitching.

### Data Mapping from StartupKit

| Pitch Element | Primary Source | Fallback |
|---|---|---|
| What You Do | `04-positioning.md` Elevator Pitch | `02-niches.md` Promise |
| Problem | `02-niches.md` Gold Niche Problem | Ask founder |
| Solution | `05-offer.md` Product/Plan sections | Ask founder |
| Unique Insight | `04-positioning.md` Value Themes | Ask founder |
| Traction | `06-validation.md` Milestones achieved | Ask founder |
| Business Model | `07-money-model.md` Core Pricing Math | `05-offer.md` Price |
| Market Size | `03-competitors.md` Market data | Research in Wave 2 |
| Team | Always ask (not in prior phases) | Required |
| The Ask | Always ask (not in prior phases) | Required |
| Competitive Frame | `03-competitors/battle-cards/*.md` | Research in Wave 2 |
| Positioning | `04-positioning.md` Moore Statement | Research in Wave 1 |
| Revenue Projections | `07-money-model.md` Growth Scenario | Ask founder |

Tell the user what data was found: "I found data from [X] prior phases. Here's what I'll use for the pitch: [summary]. I still need to ask about your team and fundraising ask."

Always ask these pitch-specific questions regardless of prior data:
- Who is the target audience for this pitch? (VCs, angels, accelerator, demo day, specific fund?)
- What formats do you need? (10-min, 5-min, 2-min, 1-min, email, all?)
- Who's on the team? (names, roles, key accomplishments -- be specific)
- How much are you raising and what will you do with it? (amount, milestones, timeframe)

### What to Ask (if no prior data exists)

**Round 1 — The essentials (all required for a pitch):**
- What does your company do? (2 sentences max — this becomes the opening)
- What problem are you solving and for whom?
- What's your unique insight? (What do you know that others don't?)
- What traction do you have? (users, revenue, growth rate — with timeframes). If none: say so honestly, we'll build the pitch around insight and team instead.
- What's your business model? (one sentence — how do you make money?)
- Who's on the team? (names, roles, key accomplishments — not titles)
- How much are you raising and what will you do with it?

**Round 2 — Sharpening (only if needed):**
- What's your market size? (or enough data to calculate it)
- Who are your main competitors? What's your advantage?
- What milestones will you hit in 18-24 months with this funding?

**Pitch-specific questions:**
- Who is the audience? (VCs, angels, accelerator, demo day, specific fund?)
- What formats do you need? (10-min narrative, 2-min verbal, email pitch, all of them?)

Don't over-interview. A founder with clear answers to Round 1 has enough to build a strong pitch.

### The 2-Sentence Test

Before moving to research, crystallize the company description into exactly 2 sentences + one specific example. This is the foundation of the entire pitch.

Test: send it to a smart friend — could they paraphrase it back correctly? If not, simplify further.

> **Anti-pattern:** "We leverage AI-powered machine learning to optimize cross-functional synergies in the B2B SaaS vertical."
> **Better:** "We help sales teams find which leads will actually buy. Our tool analyzes email replies and tells reps exactly who to call next — last month one customer closed 40% more deals."

### Output

Save consolidated context to `workspace/sessions/{name}/10-pitch.md` for pitch construction.

---

## Phase 1.5: Research Depth Assessment

After intake, assess market complexity and present the Research Depth recommendation to the user.

> **Reference:** Read `references/research-scaling.md` for the complexity scoring matrix, tier definitions, wave configurations, and the user communication template.

### Process

1. Score three factors from the intake: market breadth (1-3), known competitors (1-3), geographic scope (1-3)
2. Sum the scores (range 3-9) and map to a tier: Light (3-4), Standard (5-7), Deep (8-9)
3. Present the Research Depth table to the user (see `research-scaling.md` for the exact template)
4. Wait for user response: **light**, **deep**, or **ok** to accept the recommendation
5. Record the selected tier

The selected tier determines the number of agents per wave and search rounds per agent in Phase 2. See `research-scaling.md` for exact wave configurations per tier.

---

## Phase 2: Research

Two parallel research waves exploring investor audience and competitive/market framing. Together they provide the raw material for a pitch that resonates with the target audience.

### Environment Detection

Check if the `Agent` tool is available:

- **Agent tool available (Claude Code):** Spawn all agents within each wave in parallel. This is faster.
- **Agent tool NOT available (Claude.ai, web):** Execute research sequentially, following the same templates. Same depth, just slower.

### Web Search

If WebSearch is unavailable, fall back to **Knowledge-Based Mode**: use training data, mark findings with **[Knowledge-Based — verify independently]**, and reduce confidence ratings by one level.

> **Reference:** Read `references/research-principles.md` before starting any wave. It defines source quality tiers, cross-referencing rules, and how to handle data gaps.

### Wave 1: Audience & Narrative Intelligence

> **Reference:** Read `references/research-wave-1-audience-narrative.md` for agent templates.

Two agents (or two sequential blocks):

**A1: Investor & Audience Intelligence** — Research the target audience (VC firms, angels, accelerators). What are they investing in? What thesis do they follow? What metrics matter at this stage? What are red flags for them? What's the current fundraising climate in this space? Build an audience profile that shapes how the pitch is framed.

**A2: Comparable & Narrative Research** — Find comparable companies that pitched successfully in this space. What story did they tell? What analogies worked? What "X for Y" framing resonated? What market trends can the pitch ride? Find the narrative hooks — the facts, trends, or insights that make investors lean forward.

Complete Wave 1 before starting Wave 2. Pass key findings (audience expectations, comparable narratives) as context.

### Wave 2: Competitive Framing & Why Now

> **Reference:** Read `references/research-wave-2-competitive-framing.md` for agent templates.

Two agents (or two sequential blocks):

**B1: Competitive Framing for Pitch** — How competitors position themselves to investors. What narratives have worked for funded competitors? Where are the gaps in their stories that this pitch can exploit? What objections will investors raise based on the competitive landscape? Build a "pitch-aware" competitive frame.

**B2: Why Now & Market Timing** — Research the timing thesis. What technology shift, behavioral change, or regulatory move makes this the right moment? Find data to support the "why now" — trend charts, adoption curves, policy changes. Assess whether the timing narrative is genuinely strong or forced.

---

### Post-Research Checkpoint

After both waves complete, before synthesis, briefly present what the research found to the user: the investor audience profile, the strongest narrative hooks, the competitive framing angle, and the "why now" thesis. Ask: "Does this align with your pitch vision? Anything to adjust before I build the pitch?"

Keep it to one message — this is a quick alignment check, not a full report.

---

## Phase 3: Pitch Construction

> **Reference:** Read `references/pitch-frameworks.md` for the complete framework, including the integration matrix.
> **Reference:** Read `references/research-synthesis.md` for synthesis protocol and output templates.

Build the pitch using the integrated framework. The construction combines a problem-solution-insight foundation with a structured 7-element approach — see the integration matrix in `pitch-frameworks.md` for how they connect.

### The Foundation: Problem → Solution → Insight

Every pitch must communicate three things clearly:
1. **Problem** — The initial conditions. What's broken? Who suffers?
2. **Solution** — The experiment. What are you building to fix it?
3. **Insight** — Why this will work. What non-obvious truth powers this?

The insight is what separates a pitch from a product description. Without it, you're just another company doing X.

### The 8 Elements (Pitch Order)

The pitch is constructed using these elements, but the ORDER depends on what's most impressive about the company:

1. **What You Do** — 2 sentences + specific example. Impossible to misunderstand.
2. **[Lead with strength]** — Whatever is most impressive goes here: traction, team, insight, or market.
3. **Traction** — Metrics WITH timeframes. "0 to 1,000 users in 8 weeks" not "1,000 users."
4. **Unique Insight** — What do you know that others don't?
5. **Business Model** — One clear model. Not a menu of options.
6. **Market Size** — Bottom-up math. "50,000 customers × $50K ACV = $2.5B" not "$50B TAM."
7. **Team** — Specific accomplishments, not titles.
8. **The Ask** — Amount + milestones + timeframe.

### Pitch Ordering Logic

Determine the lead element based on founder strengths:
- **Strong traction?** → Lead with traction right after "What You Do"
- **Impressive team?** → Lead with team credentials
- **Breakthrough insight?** → Lead with the insight that creates an "aha" moment
- **Huge market?** → Lead with market opportunity

The default order for pre-traction companies: What You Do → Insight → Problem → Solution → Market → Business Model → Team → Ask.

### Construction Rules

- **No jargon.** If the user's pitch contains industry jargon, flag it and provide plain-language alternatives.
- **Specific > generic.** Replace every vague claim with a specific fact, number, or example.
- **Show, don't tell.** For the Solution section: describe what a user SEES and DOES — the concrete experience, not abstract features. "The rep opens the dashboard, sees 3 leads highlighted in green with a confidence score. They click one, see the email thread summary, and call. 30 seconds from login to action." This is far more powerful than "Our AI-powered platform surfaces high-intent leads."
- **Test the 2-sentence description.** If someone hearing it for the first time couldn't explain it back, simplify.

### Founder Pitching & Persuasion

Convene the Storytelling & Persuasion Board for real-world pitching and persuasion examples:

- When building the Insight section: "Bezos's insight was 'the internet grows 2,300% per year.' Jobs's insight was 'technology + liberal arts = magic.' Elon's insight was 'physics makes Mars colonization possible.' What's YOUR non-obvious truth?"
- When coaching narrative structure: "Steve Jobs used 'one more thing' reveals. Jensen Huang communicates through first-principles stories. Claude Hopkins sold with specific numbers, not vague claims."
- When the user struggles with The Ask: "Most founders who raised successfully were specific: Bezos wanted $1M, Demis Hassabis scraped together funding purely on vision."

### PAUSE — User Review

Present the pitch narrative structure to the user before generating final deliverables. Show: the opening (2 sentences + example), the ordering rationale, and the key narrative arc. Ask: "Does this story feel right? Is the ordering correct? Anything that's missing or should change?"

### Output Files

Every deliverable file must start with a standardized header: `# {Title}: {product}` followed by `*Skill: sk-pitch | Generated: {date}*`. Every deliverable must end with Red Flags, Yellow Flags, and Sources sections.

Generate all requested formats. If the user didn't specify, generate all of them.

**`workspace/sessions/{name}/10-pitch/pitch-full.md`** — Full pitch narrative (~10 minutes):
- Opening (2 sentences + example)
- Complete narrative following the ordered elements
- Speaker notes for each section (what to emphasize, where to pause, where to invite conversation)
- Transition sentences between sections
- Closing and ask

**`workspace/sessions/{name}/10-pitch/pitch-5min.md`** — Compressed narrative (~5 minutes):
- All 8 elements, trimmed to core claim + one supporting proof point
- Speaker notes focused on pacing

**`workspace/sessions/{name}/10-pitch/pitch-2min.md`** — Verbal pitch (~2 minutes, ~300 words):
- Word-for-word script
- The 2-sentence opener + strongest proof point + insight + ask
- Delivery notes (pace, emphasis, pauses)

**`workspace/sessions/{name}/10-pitch/pitch-1min.md`** — Elevator pitch (~1 minute, ~150 words):
- Two versions: formal (investor event) and casual (networking)
- What You Do + Insight + Ask only

**`workspace/sessions/{name}/10-pitch/pitch-email.md`** — Investor cold email (~500 words):
- Subject line candidates (3 options)
- Email body: hook → what you do → traction/insight → why now → ask → close
- Follow-up email template
- Personalization notes per investor type

**`workspace/sessions/{name}/10-pitch/pitch-appendix.md`** — Q&A preparation:
- Top 10 likely investor questions with prepared answers
- Objection handling (competitive threats, market risks, team gaps)
- Known weaknesses with honest answers and mitigation plans
- Financial and competitive backup (if available from prior sessions)

### Summary File

After completing pitch construction, generate a summary file at `workspace/sessions/{name}/10-pitch.md` containing:

- **The 2-Sentence Description**: The crystallized company description from the 2-Sentence Test
- **Strongest Element**: Which of the 8 elements is strongest (Traction / Team / Insight / Market) and why
- **Pitch Ordering**: The element order chosen and rationale
- **Scorecard Summary** table: All 8 dimensions with /10 scores + Overall /80
- **Pitch Formats**: Links to all files in `10-pitch/` subdirectory
- **Investor Roleplay**: Status (offered / completed / skipped)

This summary file is what the export phase will read. Keep it concise and scannable.

### Raw Data

Each agent saves its raw output to `workspace/sessions/{name}/10-pitch/raw/`. Agents must NOT write directly to deliverable paths — raw and synthesized output are separate.

Raw research files:
- `investor-audience.md`
- `comparable-narratives.md`
- `competitive-framing.md`
- `why-now-timing.md`

---

## Phase 3.5: Pitch Verification

After all pitch deliverables are written, before scoring and review, run a verification pass.

> **Reference:** Read `references/verification-agent.md` for the full verification protocol, universal checks, and skill-specific checks.

### Process

1. Spawn agent **V1: Verification** — it reads all deliverable files and checks for: unlabeled claims, internal contradictions, confidence rating consistency, missing data gaps, missing flags, stale data, and duplicate-source false corroboration
2. V1 also runs startup-pitch-specific checks: pitch claims vs. source data, cross-format consistency, pitch vs. appendix alignment, honesty checks (traction without timeframes, top-down TAM, titles without accomplishments)
3. V1 produces `workspace/sessions/{name}/10-pitch/verification-report.md`
4. **If Critical issues found:** Pause and present issues to the user. Ask: fix first, or proceed as-is?
5. **If only Warnings/Info:** Show one-line summary and continue to review phase

In Claude.ai or when Agent tool is unavailable, run the verification checks yourself in the main conversation following the same protocol.

---

## Phase 4: Review & Practice

After generating the pitch deliverables, review quality and optionally practice with investor roleplay.

### Step 1: Pitch Scoring Rubric

Review the completed pitch against each dimension. Score honestly — a high score on a weak pitch is useless in front of real investors.

Save to `workspace/sessions/{name}/10-pitch/pitch-scorecard.md`:

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **Clarity** — Can someone explain what you do after hearing 2 sentences? | | |
| **Strength Sequencing** — Is the most impressive element in the first 60 seconds? | | |
| **Traction Honesty** — Are numbers accurate, timeframed, and real? | | |
| **Insight Quality** — Is the insight genuinely non-obvious and specific? | | |
| **Market Sizing** — Is the math bottom-up with clear assumptions? | | |
| **Business Model** — One model, clearly stated? | | |
| **Team Credentials** — Specific, verifiable accomplishments? | | |
| **Ask Clarity** — Amount + milestones + timeframe, stated with confidence? | | |
| **Overall** | | |

**Verdict:**
- **65-80:** Investor-ready. Go pitch.
- **50-64:** Investor-ready with caveats. Address the weak dimensions first.
- **35-49:** Needs work. Iterate on the weakest areas before pitching.
- **Below 35:** Major gaps. Consider running startup-design first to strengthen the foundation.

For each dimension scoring below 7: explain what's weak and suggest a specific fix.

### Step 2: Iteration Loop

Present the scorecard to the user. For each dimension that scored below 7:
1. Explain the weakness
2. Ask: "How do we fix this? Do you have more data, or should we reframe?"
3. Iterate on the relevant pitch sections
4. Re-score after changes

### Step 3: Investor Roleplay (Optional)

After the scorecard review, offer practice: "Would you like to practice the pitch? I can play an investor and give you feedback."

If the user accepts:

**Choose an investor persona:**
- **Angel Investor** — Technical, focused on founders + idea. Asks "why you?" and probes domain expertise. Friendly but direct.
- **Seed VC** — Traction-obsessed, looking for product-market fit signals. Asks about metrics, retention, growth rate. Wants to see momentum.
- **Series A VC** — Scalability + market size obsessed. Asks about unit economics, competitive moats, expansion path. Thinking about the next round already.
- **Accelerator Partner** — Looking for coachability + speed of execution. Asks about what you've learned, how fast you ship, what you'd do with mentorship.

**Roleplay flow:**
1. The user delivers their pitch (any format)
2. Stay in character as the chosen investor persona
3. Ask 3-5 questions that this type of investor would ask — drawn from the appendix but adapted to the persona
4. Ask the user: "Which founder do you most identify with and why? What lesson from their journey applies to yours?"
5. Push back on weak points — investors do this, and the founder needs practice handling it
6. After the Q&A, break character and provide feedback:
   - What landed well
   - Where the investor would have tuned out
   - Which answers were strong vs. unconvincing
   - Specific suggestions for improvement

**Multiple rounds:** The user can practice multiple times with different personas. Each round surfaces different weaknesses.

### Step 4: Delivery Tips

Include practical delivery advice in the scorecard file:
- **The 60-second rule:** You earn each additional minute. If the first 60 seconds aren't compelling, the rest doesn't matter.
- **Invite conversation.** Pause after the insight. If an investor starts talking, let them — they're selling themselves.
- **Own the numbers.** If asked about a metric, know the exact figure and how you calculated it.
- **Handle "I don't know" well.** "I don't know, but here's how I'd find out" beats a fabricated answer.
- **Practice the 2-sentence opener** until it's effortless. This is the single most important part of the pitch.

---

## Save & Next

1. Save the main summary to `workspace/sessions/{name}/10-pitch.md`.
2. Save all pitch formats to `workspace/sessions/{name}/10-pitch/` directory.
3. Update frontmatter in `workspace/sessions/{name}/00-session.md` (see `skills/startupkit/references/session-state-protocol.md`):
   - Set `phases[id=10].status: complete`
   - Set `session.activePhase: 11`
   - Set `session.nextPhase: 11`
   - Set `session.updated: [YYYY-MM-DD]`
   - Keep the markdown "Pitch Score" section in sync:
     - **Overall Score:** [X]/80
     - **Strongest Element:** [element name]
4. Tell the user: "Pitch materials complete! Overall pitch score: [X]/80. You have [list formats created]. When you're ready, run `/sk-export` to generate a comprehensive one-pager summarizing your entire session."

---

## Honesty Protocol

> **Reference:** Read `references/honesty-protocol.md` for full protocol and anti-pattern details.

A pitch that overpromises destroys founder credibility. Core rules apply (label claims, quantify, declare gaps), plus pitch-specific additions:

1. **No inflated metrics.** If traction is weak, the pitch should acknowledge it and pivot to insight, team, or speed of execution. Fabricated traction will surface in due diligence and kill the deal.
2. **Honest market sizing.** Bottom-up math only. Top-down TAM without justification is a red flag to investors — they've seen it thousands of times.
3. **Real team credentials.** Specific, verifiable accomplishments. "Built X that did Y" — not vague titles or puffed-up bios.
4. **Flag pitch weaknesses.** Every pitch has gaps. Identifying them proactively (and having a plan to address them) is stronger than pretending they don't exist.
5. **Label claims.** Use **[Data]**, **[Estimate]**, **[Assumption]**, **[Opinion]** tags in supporting materials.

| Anti-Pattern | What It Looks Like | What to Say |
|---|---|---|
| Inflated TAM | "$50B market" with no math | "Show the bottom-up calculation. Investors do the math." |
| Vanity traction | "10K signups" with no activation | "Signups aren't traction. What % actually use the product?" |
| Jargon overload | "AI-powered blockchain synergy" | "What does it actually DO? Say it in words a 10-year-old understands." |
| No insight | Describing a product, not a thesis | "Why will THIS approach work? What do you know that others don't?" |
| Weak team | Titles without achievements | "What have you DONE? Accomplishments, not positions." |
| Vague ask | "We're raising a round" | "How much? For what milestones? In what timeframe?" |
| "No competition" | "We're the first to do this" | "What do customers do TODAY instead? That's your competition." |

---

## Reference Files

Read only what you need for the current phase.

| File | When to Read | ~Lines | Purpose |
|------|-------------|--------|---------|
| `honesty-protocol.md` | Start of session | ~62 | Full honesty protocol with pitch anti-patterns |
| `research-principles.md` | Before starting Phase 2 | ~64 | Source quality, cross-referencing, data gaps |
| `research-wave-1-audience-narrative.md` | When running Wave 1 | ~164 | Agent templates for investor + narrative research |
| `research-wave-2-competitive-framing.md` | When running Wave 2 | ~159 | Agent templates for competitive framing + why now |
| `pitch-frameworks.md` | During Phase 3 | ~261 | Complete pitch framework with integration matrix |
| `research-synthesis.md` | After waves complete | ~417 | Synthesis protocol and output templates |
| `research-scaling.md` | After intake, before Phase 2 | ~75 | Complexity scoring, tier definitions, wave configurations |
| `verification-agent.md` | After pitch construction | ~80 | Verification protocol, universal + skill-specific checks |

---

## Domain Expert Boards

### Storytelling & Persuasion Board

**Members:** Steve Jobs, David Ogilvy, Oprah Winfrey, Richard Branson, Arnold Schwarzenegger, Aristotle Onassis, Anna Wintour
**Domain:** Pitching, narrative, brand communication, fundraising

**Steve Jobs's Position:**
> [From Jobs] Reality distortion field — presenting vision so compelling it becomes self-fulfilling.
Jobs presented Apple's future with such conviction that it became reality.
**Application:** Present your vision with absolute conviction.

**David Ogilvy's Position:**
> "The more hard facts you include in your copy, the more believable it becomes."
Ogilvy argues specificity creates believable differentiation.
**Application:** Differentiate through concrete, testable claims.

**Richard Branson's Position:**
> [From Virgin philosophy] Founder-as-brand, PR stunts, challenger narrative.
Branson enters markets with brand energy and challenger positioning.
**Application:** Your personal story is your brand. Tell it with conviction.

**Oprah Winfrey's Position:**
> [From Oprah] Authenticity, emotional connection, audience empathy.
Oprah built connection through genuine vulnerability and emotional honesty.
**Application:** Let your authentic story connect with your audience.

**Arnold Schwarzenegger's Position:**
> [From Arnold] Clear vision articulation, relentless self-promotion.
Arnold made "Mr. Universe" into a global brand through relentless self-promotion.
**Application:** Articulate your vision clearly and promote it relentlessly.

**Board Tensions:**
- **Jobs (controlled perfection in every detail)** vs **Branson (rough energy, authenticity)** — polished vs. authentic
- **Ogilvy (copy-heavy, facts and specificity)** vs **Jobs (minimal, emotional)** — logical vs. emotional
- **Winfrey (vulnerability)** vs **Wintour (authority)** — connection vs. mystique

---

### Opportunity & Vision Board

**Members:** Jeff Bezos, Edwin Land, Peter Thiel, Elon Musk, Marc Andreessen, Steve Jobs, Aristotle Onassis
**Domain:** Spotting opportunities, first-principles thinking, when to bet, contrarian conviction

### Indifference is more dangerous than opposition
**Founder:** "Edwin Land" | **Episode:** "Insisting on the Impossible: The Life of Edwin Land"
> "That indifference, not opposition, is your enemy."

**Context:** Land observed that the greatest threat to any new idea was not active resistance but the simple lack of interest from people who could help. Opponents at least acknowledge the idea matters. Indifference means you have not yet made the case that the problem is worth caring about.
**Application:** When pitching a new idea—to investors, customers, or internal stakeholders—the goal is not to overcome objections. It is first to create genuine curiosity. An objection is a sign you have their attention; indifference means you do not.

---

### Use competitive framing to get initial commitments
**Founder:** "Richard Branson" | **Episode:** "Losing My Virginity: How I Survived, Had Fun, and Made a Fortune Doing Business My Way"
> "I called up Coca-Cola and told them that Pepsi had just booked a big advertisement. But that the back page was still free. I then called up the Daily Telegraph and asked them whether they would prefer to advertise before or after the Daily Express."

**Context:** When cold-calling advertisers for an unpublished magazine, Branson reframed every call: instead of "Would you like to advertise with us?" he told Coca-Cola that Pepsi had just booked the back page, and asked the Telegraph whether they'd prefer to appear before or after the Daily Express.
**Application:** When approaching prospects cold, frame your offer relative to their competitors' decisions rather than as an isolated request. The fear of competitive disadvantage is a more powerful motivator than the promise of gain.

---

### Advertising Is Salesmanship at Scale—Treat Every Ad as a Salesman
**Founder:** "Claude Hopkins" | **Episode:** "#207 Claude Hopkins (Scientific Advertising)"
> "The only purpose of advertising is to make sales. It is profitable or unprofitable according to its actual sales. Treat it as a salesman. Force it to justify itself."

**Context:** Hopkins' foundational insight is that advertising is not art, entertainment, or brand-building—it is salesmanship multiplied. Every principle that makes a door-to-door salesperson effective applies to print (and today, digital) advertising. Ads that try to win awards or entertain are failing at their only job.
**Application:** Evaluate every marketing asset (ad, landing page, email) by asking: would this script help a salesperson close the deal standing in front of the customer? If not, rewrite it. Measure against conversion, not views or likes.

---

### Know Everybody, Be Known by Everybody
**Founder:** "Jackie Cochran" | **Episode:** "#167 Jackie Cochran (Aviation)"
> "She knew everybody and bounced all over the world."

**Context:** By the time she introduced herself to Chuck Yeager after his sound barrier flight, Cochran was already a legend—known by generals, senators, and heads of state. Her network was not accidental; it was consciously built over decades through showing up at the right events and proving her worth in every room she entered.
**Application:** Systematically build your network before you need it. Attend industry events, publish your thinking publicly, and look for ways to be genuinely useful to people more senior in your field. The network you build before you need it is the one that will save your company when you do.

---

### The Demo Is the Best Advertisement
**Founder:** "Steve Jobs" | **Episode:** "#235 Steve Jobs (The Pixar Story)"
> "In the next few minutes in this ramshackle theater in this unremarkable building across from an oil refinery in this company that was hanging on by a shoestring, I witnessed a level of creative and technical wizardry that I could never have imagined."

**Context:** Lawrence Levy arrived skeptical of Pixar despite meeting Steve Jobs—the financials were disastrous. But a tour of Pixar's production facility and a screening of partial Toy Story footage reversed his judgment completely. The work spoke in a way no pitch deck could.
**Application:** When recruiting key hires or investors, get them in the room with your best work as early as possible. A polished slide deck that describes what you're building will never outperform showing the actual thing.

---

### Own the Narrative—Control Your Company's Communications
**Founder:** "Billy Durant / Alfred Sloan" | **Episode:** "#121 Billy Durant and Alfred Sloan (General Motors)"
> "General Motors was the first company to have full-time in-house public relationship staff... every communication would help the company instead of management."

**Context:** Sloan was the first major corporate leader to establish full-time in-house public relations staff, ensuring that every message from General Motors was crafted to serve the company's strategic interests rather than individual managers' egos or the whims of outside journalists.
**Application:** Build internal communications and PR capabilities early. Know what story you want the market to tell about your company and proactively shape it through consistent, disciplined messaging. Do not leave your narrative to be defined by others.

---

### Advertising matters because it works—on everyone
**Founder:** "Peter Thiel" | **Episode:** "Conspiracy: Peter Thiel, Hulk Hogan, Gawker, and the Anatomy of Intrigue / Zero to One"
> "Advertising matters because it works. It works on nerds and it works on you. You may think that you're an exception, that your preferences are authentic, and advertising only works on other people."

**Context:** Thiel's observation in Zero to One that advertising works even on people who believe themselves immune—including "nerds"—reframed for Senra why he removed ads from his podcast and why founders must understand persuasion.
**Application:** Do not discount the power of distribution and marketing. Even the most technically superior product requires deliberate narrative management. Build your persuasion muscle alongside your product muscle.

---

### Narratives Force Better Thinking Than Slides
**Founder:** "Jeff Bezos" | **Episode:** "#321 Working with Jeff Bezos"
> "The reason writing a four-page memo is harder than writing a 20-page PowerPoint is because the narrative structure of a good memo forces better thought and better understanding of what's more important than what and how things are related."

**Context:** Bezos banned PowerPoint and replaced it with six-page written narratives read in silence at the start of every meeting. The discipline of prose forces the author to understand what is more important than what, and how ideas are interconnected.
**Application:** Replace your investor and board slide decks with written memos whenever you want to communicate complex strategy. The process of writing the memo will reveal gaps in your own thinking before the audience does.

---

### Recruit the shareholders you deserve by being transparent
**Founder:** "Mark Leonard" | **Episode:** "Mark Leonard's Shareholder Letters"
> "As a rule I use these letters to write about our business, not our stock."

**Context:** Leonard believed that the quality of your investor base is determined by the quality and honesty of your communications. He used his shareholder letters to attract long-term, patient investors by writing candidly about both strategy and uncertainty — including publicly admitting when he was considering a major strategic pivot.
**Application:** Write your investor updates and fundraising materials for the investors you want in five years, not the ones who will pressure you for short-term results. Candor about risk and strategy filters for patient, aligned capital.

---

### We sell or else — advertising exists to sell, not to entertain
**Founder:** "David Ogilvy" | **Episode:** "David Ogilvy (The book I've given as a gift the most)"
> "You cannot bore people into buying your product. You can only interest them in buying it. Unless your advertising contains a big idea, it will pass like a ship in the night."

**Context:** Ogilvy's defining principle, repeated throughout his career, was that advertising is salesmanship at scale. He resisted every temptation to make clever, award-winning ads that didn't move product. His performance metric was always sales lift, not creative awards.
**Application:** Every piece of marketing — email, landing page, pitch deck — should have a single job: sell. Ask of every word: does this move the prospect toward yes, or is it there to make us feel clever? Cut everything that doesn't sell.

---

### Make it memorable — the antidote to forgettable communication
**Founder:** "David Ogilvy" | **Episode:** "David Ogilvy (The book I've given as a gift the most)"
> "Dear Ray, 19 years ago you wrote me the best job application letter I have ever received. I can still recite the first paragraph. The first paragraph read: My father was in charge of the men's lavatory at the Ritz Hotel. My mother was a chambermaid at the same hotel. I was educated at the London School of Economics."

**Context:** Ogilvy learned the value of brevity and memorability from his boss at British intelligence, who responded to all communications with only "yes," "no," or "?" (meaning come see me). Ogilvy applied this by writing communications that were short and impossible to ignore.
**Application:** In every piece of communication — pitch emails, product descriptions, investor updates — lead with the most unexpected, specific, and memorable detail you have. Specificity creates credibility and memorability. Generic claims are invisible.

---

### In-person interaction accelerates trust non-linearly
**Founder:** "David Senra" | **Episode:** "New Founders Events!"
> "In person is the way you see relationships. You can get more done in an hour in person than hours on Zoom."

**Context:** Senra quotes a founder who attended one of his events: "You can get more done in an hour in person than hours on Zoom. There is no way we could have got to this level this quickly without being in-person first."
**Application:** For high-stakes relationships—co-founders, lead investors, key enterprise customers—invest in in-person time. Video calls maintain relationships; in-person creates them.

---

### Control your message; be your own minister of propaganda
**Founder:** "Napoleon Bonaparte" | **Episode:** "Napoleon (The Mind of Napoleon)"
> "The masses must be guided without their noticing it. It is necessary to enlighten public opinion. With ink and paper you can draw any picture you like, only by telling the facts simply and with details can we convince them."

**Context:** Napoleon believed shaping public opinion was a strategic imperative, not an optional activity. He stated that only by "telling the facts simply and with details" could you convince people—and he did this himself rather than delegating.
**Application:** Founders should treat marketing as a moral obligation if they believe their product makes lives better. Act as your own chief marketing officer: write, speak, and appear in public about what you're building.

---

### Make public commitment to make quitting psychologically costly
**Founder:** "Paul Graham" | **Episode:** "#275 Paul Graham"
> "One of the most interesting things we've discovered from working on Y Combinator is that founders are more motivated by the fear of looking bad than by the hope of getting millions of dollars. So if you want to get millions of dollars, put yourself in a position where failure will be public and humiliating."

**Context:** Graham noticed that founders are more motivated by fear of public humiliation than by the prospect of wealth. Putting yourself in a position where failure is visible makes you fight harder to avoid it.
**Application:** Announce your commitments publicly, take on investors and co-founders who will hold you accountable, and accept press coverage of your plans before they're proven. The social cost of quitting is a powerful motivator that you can use deliberately.

---

### Surround yourself with people who are further ahead—they expand your mental model
**Founder:** "Mark Zuckerberg" | **Episode:** "#14 The Accidental Billionaires: The Founding of Facebook: A Tale of Sex, Money, Genius, and Betrayal"
> "In Eduardo's eyes, to Mark, Sean Parker was a god. Napster was the ultimate geek banner, a battle that had been fought by hackers on the biggest stage of all."

**Context:** When Zuckerberg met Sean Parker—co-founder of Napster—he treated him with near-idolatrous admiration. Parker had done what Zuckerberg wanted to do: build a product that changed culture at massive scale. Parker's mentorship helped accelerate Facebook's move to Silicon Valley.
**Application:** Deliberately seek out people who are 5–10 years ahead of you in your field. Spending time with people who have already navigated your next challenge compresses the time it takes you to prepare for it.

---

### Give people a role in a story larger than the product
**Founder:** "Steve Jobs" | **Episode:** "#204 Steve Jobs (Inside Steve's Brain)"
> "Think Different wasn't about the product. It was about who you are if you use the product. Jobs understood that people don't buy products, they buy identity."

**Context:** Jobs never sold features. He sold identity and meaning. The "Think Different" campaign did not describe a single Apple product—it told customers who they were by associating with the brand. Apple buyers weren't buying a computer; they were joining the tribe of rebels and innovators.
**Application:** In every pitch, ask what story the customer gets to tell about themselves by using your product. If your marketing describes features and specs, you are competing on commodity dimensions. If it describes identity and belonging, you are competing in a category you define.

---

### Promoting a Stock Is Like Making a Movie
**Founder:** "Robert Friedland" | **Episode:** "Robert Friedland (Billionaire Miner)"
> "Promoting a stock is like making a movie. You've got to have stars, props, and a good script."

**Context:** Friedland's core insight was that selling an investment opportunity required the same elements as entertainment: stars, props, and a good script. He applied showmanship to an industry — junior mining — that was notoriously dry and technical.
**Application:** Every pitch is a story. Investors, customers, and partners are all buying a narrative before they buy a product. Master the craft of compelling storytelling.

---

### Master Brevity—It Projects Authority
**Founder:** "Anna Wintour" | **Episode:** "#326 Anna Wintour"
> "I believe in the dogmatism of brevity." (David Ogilvy, cited in context with Wintour's approach)"

**Context:** Wintour's father Charles gave single-word feedback on copy ("excellent") and staff bent over like wheat in the wind when he walked by. Anna inherited the same approach: one-word editorial notes, emails with no subject line, two-minute meetings. Brevity is not rudeness—it is clarity.
**Application:** Develop the skill of communicating decisions in as few words as possible. Long explanations often signal uncertainty. Short, clear directives build confidence in your team and respect from collaborators.

---

### Understand Human Nature and Use It
**Founder:** "Aristotle Onassis" | **Episode:** "#211 Aristotle Onassis: An Extravagant Life"
> "He has a fundamental understanding of human nature. He's constantly bribing them, buying them gifts, convincing them to be on their side. He's doing this from a very young age."

**Context:** From the time he was 16, hiding from Turkish soldiers in occupied Smyrna, Onassis survived by understanding what the people in power wanted—alcohol, convenience, information—and providing it. He spent his entire career bribing, gifting, charming, and leveraging human nature.
**Application:** Study the motivations, fears, and vanities of every key stakeholder in your business ecosystem—customers, partners, regulators, investors. Design your approach to address what they actually want, not what they say they want.

---

### Control the Narrative—Both Internally and Externally
**Founder:** "Napoleon Bonaparte" | **Episode:** "#294 Napoleon"
> "He was a product of the first great modern age of celebrity and he understood viscerally how to manage celebrity in the service of power. From the start, he knew the importance of actively crafting his image in all available media."

**Context:** From his first campaigns, Napoleon understood that political and military success in a democratic age required forging direct bonds with ordinary people. He managed image across every available medium—print, painting, sculpture, architecture—with the deliberateness of a modern brand.
**Application:** Founders who ignore narrative cede it to competitors, critics, or chance. Invest in deliberate storytelling about your company's mission, progress, and identity—for customers, employees, and investors.

---

### Verbal Mastery Is a Founder Superpower
**Founder:** "Steve Jobs" | **Episode:** "Becoming Steve Jobs"
> "He finds so many ways to demystify for the average person the insanely geeky device that he and Woz had created. He sympathizes with their ignorance. He offers several analogies to comfort. He makes using a computer seem no more complicated than taking a photograph."

**Context:** At 22, Jobs could demystify computers for a general audience, link Apple to Rolls Royce in the same breath, and make a garage startup sound like a world leader—all extemporaneously. This skill was developed and deployed deliberately.
**Application:** Practice explaining your product to non-technical people using analogies to things they already love. The ability to make the complex feel familiar is a core fundraising and sales skill.

---

### Halo Effect and Charisma as Organizational Capital
**Founder:** "Bob Noyce" | **Episode:** "How The Sun Rose On Silicon Valley: Bob Noyce (Founder of Intel)"
> "Bob Noyce projected what psychologists call the halo effect. People with the halo effect seem to know exactly what they're doing and moreover they make you want to admire them for it."

**Context:** Noyce had such a powerful halo effect—the quality of making everyone he was with feel like the most important person in the room—that when the Traitorous Eight left Shockley, they immediately sought him as their leader despite him not being among the first seven.
**Application:** The ability to make people feel seen and important is a force multiplier for leadership. Cultivate genuine interest in the people around you—it compounds into loyalty, recruiting power, and organizational effectiveness.

---

### Use a unifying mission to attract exceptional talent
**Founder:** "Elon Musk" | **Episode:** "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
> "It's the sweeping goal that forms a unifying principle over everything he does. Employees at all three companies are well aware that they are trying to achieve the impossible day in and day out."

**Context:** Musk's "turn humans into a multi-planetary species" mission gave SpaceX employees a rallying cry that no competitor could offer. People joined because it was the only place to pursue that goal.
**Application:** A bold, specific mission is a recruiting moat. General pitches compete on salary; a mission competes on meaning.

---

### Persuade by making the other party's interests align with yours
**Founder:** "John D. Rockefeller" | **Episode:** "John D. Rockefeller (Autobiography)"
> "I'll take it and supply this capital myself. If the expenditure turns out to be profitable, the company can repay me. And if it goes wrong, I'll stand the loss... If that's the way you feel about it, we'll do it together."

**Context:** When a conservative partner refused a $3M expansion investment, Rockefeller offered to personally fund it and absorb all losses himself. This reframed the decision: instead of debating merit, the partner felt it was wrong to let Rockefeller bear the risk alone.
**Application:** When someone is defending a position rather than evaluating evidence, change the frame. Put your own skin visibly in the game.

---

### Turn your company into a crusade, not a job
**Founder:** "Herb Kelleher" | **Episode:** "Herb Kelleher (Southwest Airlines)"
> "He was not building a company, he was leading people on a crusade, he was not hiring employees, he was converting missionaries."

**Context:** Kelleher framed Southwest's entire existence as a fight for the free market against entrenched incumbents who were illegally trying to destroy him. This created a missionary culture that competitors could not buy.
**Application:** The most powerful recruiting and retention tool is a genuine story of us-vs-them. Make the mission feel like a fight worth having, because the best people want to fight.

---

### The right leader for a mission is not always the obvious one
**Founder:** "J. Robert Oppenheimer / Leslie Groves" | **Episode:** "J. Robert Oppenheimer and Leslie Groves (The General and the Genius)"
> "He looks right through you. I feel like he can read my mind... Oppenheimer can talk to you about anything that you bring up."

**Context:** When Groves chose Oppenheimer as scientific director, the physics community was shocked — Oppenheimer had no administrative experience and a middling publication record. Groves saw something others missed: the rare ability to make complex ideas clear and lead peers.
**Application:** The qualities that make someone a great organizational leader are often invisible on a resume. Communication clarity, peer respect, and intellectual empathy matter more than credentials at scale.

---

### Ambiguity is a negotiating tool — clarity favors the weaker party
**Founder:** "Colin Chapman / Bernie Ecclestone" | **Episode:** "How Geniuses and Speed Freaks Reengineered F1 into the World's Fastest-Growing Sport"
> "Your problem is you always want things absolutely clear. And sometimes it's better if things are not clear."

**Context:** Ecclestone's approach to deal-making was to exploit loopholes, uncertainty, and anything not spelled out in binding legalese. He viewed excessive clarity as something his opponents wanted, not him.
**Application:** When negotiating, understand which party benefits from clarity and which benefits from ambiguity. The founder with options benefits from keeping the deal open; the founder who needs the deal should seek clear terms.

---

### Bluffing with conviction can replace capital you don't have
**Founder:** "Elon Musk" | **Episode:** "Elon Musk & How Tesla Will Change The World"
> "He's like, I'll just put it in the 20 or 40 million... When they realized, oh shit, like he believes it, that we're going to miss out on this investment, they went up splitting."

**Context:** During the 2008 crisis, Tesla needed to raise a new round. No existing investors would commit. Musk announced he would personally fund the entire round, even though he may not have had all the money. When investors realized they might miss out, they committed.
**Application:** In fundraising, perceived conviction from the founder is a more powerful signal than financial terms. Investors follow the founder who they believe will find a way regardless.

---

### The Founding Team's Reputation Is the First Product
**Founder:** Robert Noyce | **Episode:** #8
> "Intel would start with just the reputations of two men and within a generation sit at the center of the world's economy."

**Context:** When Noyce and Moore left Fairchild to found Intel, they had no product, no revenue, and no detailed business plan. They raised $2.5M in a single meeting based entirely on their reputations. The investor's thesis was: these two people will figure it out.
**Application:** Reputation is compounding capital. Every company you build, every product you ship, every commitment you keep adds to the reputation that funds your next venture. Protect it accordingly.

---

### Produce proof of work before asking for permission
**Founder:** "James Cameron" | **Episode:** "#311 James Cameron"
> "If I never have been on a job interview my entire life but if I did right I wouldn't just send in a resume I would send in some kind of demo or some kind of proof of work."

**Context:** Rather than sending a résumé to Roger Corman's studio, Cameron built a 12-minute short film called Exogenesis that demonstrated his actual capability.
**Application:** Cold outreach with a demo, prototype, or sample output converts at far higher rates than pitches. Show; don't describe.

---

### Teach through stories that create unforgettable images
**Founder:** "Jesus of Nazareth" | **Episode:** "The Life of Jesus"
> "He thought and reasoned and spoke as a poet does, in images, flashes of insight and metaphors from the world of nature. All the time he taught, he was creating little pictures in the minds of the men and women who listen to him. His lessons are rich in metaphor and simile in vivid comparisons with the world of nature."

**Context:** Jesus almost never argued abstract theology. He created small vivid pictures—parables—that illustrated principles in ways listeners could remember and repeat.
**Application:** Investors, customers, and employees remember stories, not slides. Structure every important pitch around a single vivid case study that the listener can retell. The parable format—situation, action, consequence, lesson—is 2,000 years old and still the most effective communication technology.

---

### Charisma and salesmanship are learnable and compoundable skills
**Founder:** "Carroll Shelby" | **Episode:** "#99 Carroll Shelby (My name is Carroll Shelby and performance is my business)"
> "He's a master salesman. He had the ability to talk Lee Iacocca and all kinds of people into selling him on the dream he had and what he needed from that particular person to achieve that dream he was very good at."

**Context:** Shelby is described repeatedly as a "master salesman" who could talk anyone into almost anything. He convinced Enzo Ferrari's team, Lee Iacocca at Ford, and Goodyear to give him what he needed despite having almost no leverage.
**Application:** Founders who invest in developing genuine charisma and sales skill can access resources, partnerships, and deals that are structurally unavailable to people with comparable ideas but less interpersonal skill. Salesmanship is a multiplier on every other asset.

---

### Sell everything — you are always in sales
**Founder:** "Arnold Schwarzenegger" | **Episode:** "#141 Arnold Schwarzenegger (My Unbelievably True Life Story)"
> "He's like I sell everything... I'm in sales."

**Context:** Arnold explicitly described himself as a salesman first: "I sell bodybuilding, I sell my movies, I sell my products, I sell my real estate, I'm in sales." He preached this to readers as a universal principle.
**Application:** Founders who resist the identity of "salesperson" underperform those who embrace it. Every interaction — with investors, customers, employees, press — is a sales moment.

---

### Passion for expertise attracts mentors and patrons
**Founder:** "Meyer Rothschild" | **Episode:** "#197 Founder of the Rothschild Family Dynasty"
> "Passion respects passion."

**Context:** Rothschild's deep, visible passion for coins attracted first von Ostroff and then Wilhelm of Hesse — his most important patron — because passion is infectious and experts are drawn to people who take their domain as seriously as they do.
**Application:** The fastest way to get in front of powerful people is to demonstrate genuine, deep obsession with something they care about. Enthusiasm and expertise together create the signal that attracts the right patrons.

---

### You need a calling card, not just enthusiasm
**Founder:** "Steven Spielberg" | **Episode:** "Steven Spielberg"
> "You can't just say, hey, I'm excited about making films. Okay, well have you made a film? You need a piece of work that you can point to as a calling card."

**Context:** Spielberg's mentor Chuck Silver's advice was clear: enthusiasm is not enough. You need a piece of work to point to. Spielberg went out and made a short film specifically to use as a calling card to the industry.
**Application:** Founders who can only pitch an idea are less credible than founders who can show a prototype, an early customer, or a piece of work. Ship something that demonstrates your taste and capability.

---

### Make people feel important — everyone carries an invisible sign
**Founder:** "Socrates" | **Episode:** "#252 Socrates"
> "He made the people he questioned feel important and he seemed to find their answers valuable."

**Context:** Socrates engaged people of all classes and trades with genuine curiosity, making his subjects feel valued and important. This is what made him extraordinarily effective as an examiner of men — and as a teacher.
**Application:** The most effective sales, customer discovery, and leadership interactions share this trait — they make the other person feel genuinely seen and heard. Danny Meyer formalized this as a management principle: everyone wears a sign that says "make me feel important."

---

### Offer sober facts plus unconditional optimism — never hide the gravity of the situation
**Founder:** "Winston Churchill" | **Episode:** "#196 Winston Churchill (Leadership during WW2)"
> "It would be foolish to disguise the gravity of the hour. It would still be more foolish to lose heart and courage."

**Context:** Churchill's formula for speeches during the Blitz was always the same: give an accurate, honest assessment of the terrible current situation, then add genuine reasons for optimism. He never sugarcoated the danger, but he also never let realism collapse into despair.
**Application:** Founders who present investors or employees with only good news lose credibility when things go wrong. The leader who acknowledges hard truths clearly while maintaining conviction in the path forward generates the deepest trust.

---

### Emotion is strength, not weakness — let people see you care
**Founder:** "Winston Churchill" | **Episode:** "#196 Winston Churchill (Leadership during WW2)"
> "Churchill never afraid to express emotion, began to weep. He cares deeply about his mission, about what he's doing, about the immense responsibility that he has."

**Context:** Churchill wept openly when greeted by crowds in the street. He was deeply moved by the responsibility placed on him and made no effort to hide it. This emotional authenticity made people trust him more, not less.
**Application:** Founders who show genuine care for their mission and their team create more loyal followings than those who project detached professionalism. Passion and vulnerability are leadership assets.

---

<!-- Truncated to stay under 350 lines -->
