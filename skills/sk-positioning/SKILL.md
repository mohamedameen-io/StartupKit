---
name: sk-positioning
description: "Phase 4: Market positioning strategy using April Dunford's framework, enriched with JTBD discovery, Moore positioning statement, and Neumeier's Onliness Test. Produces a complete positioning document, positioning statements, competitive alternatives map, and market category analysis. Informed by your Gold niche and competitive research from prior phases."
---

# Startup Positioning

Market positioning strategy that produces a complete positioning document, Moore + Neumeier positioning statements, competitive alternatives map, and market category analysis. Built on April Dunford's framework, enriched with JTBD discovery and stress-tested with Neumeier's Onliness Test.

## How It Works

```
INTAKE -> RESEARCH (2 parallel waves) -> POSITIONING SYNTHESIS
```

The process: understand the product and its customers, research competitive alternatives and market context, then build positioning through Dunford's 5+1 components. Typical runtime: 10-15 minutes in Claude Code (parallel agents), 20-30 minutes in Claude.ai (sequential).

### Language

Default output language is **English**. If the user writes in another language or explicitly requests one, use that language for all outputs instead.

---

## Phase 1: Intake

Short and focused -- 1-2 rounds of questions. The goal is enough context to research alternatives and build positioning.

### Check for Prior StartupKit Session

Before asking questions, ask the user for their session name, then check for prior phase data:

**From Phase 2 (Niche):**
- `workspace/sessions/{name}/02-niches.md` -- Gold niche (Person, Problem, Promise)

**From Phase 3 (Competitors):**
- `workspace/sessions/{name}/03-competitors.md` -- Competitive research summary
- `workspace/sessions/{name}/03-competitors/competitors-report.md` -- Full strategic analysis
- `workspace/sessions/{name}/03-competitors/battle-cards/` -- Per-competitor battle cards
- `workspace/sessions/{name}/03-competitors/pricing-landscape.md` -- Pricing analysis

If `02-niches.md` exists, extract the Gold Niche (Person, Problem, Promise) and any scoring data.

If `03-competitors.md` exists, extract:
- Key competitors and their strengths/weaknesses
- Pricing landscape (market price range, value metrics, whitespace)
- Strategic opportunities and risks

If battle cards exist, read them to seed the competitive alternatives map.

Tell the user: "I found your Gold niche and competitive research from prior phases. I'll use this as the starting point for positioning: [Person] who [Problem], with [X] competitors mapped."

If `03-competitors.md` does not exist, tell the user: "For the strongest positioning, consider running `/sk-competitors` first. But we can proceed with what we have."

If no prior data exists at all, fall back to the intake questions below.

### What to Ask (if no prior data exists)

**Round 1 -- Core context:**
- What's your product? (one sentence is fine)
- What problem does it solve and for whom?
- What do your customers do today instead of using you? (alternatives, workarounds, doing nothing)
- Who are your best existing customers? (if any -- describe them, not demographics)

**Round 2 -- Sharpening (only if needed):**
- How is your product different from the alternatives you mentioned?
- Have you tried positioning before? What didn't work?
- Are there competitors you're often compared to?

Don't over-interview. If the user gives a clear description upfront, move to research. The positioning process itself will surface what matters.

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

Two parallel research waves exploring competitive alternatives and market context. Together they provide the raw material for Dunford's 5+1 positioning components.

### Environment Detection

Check if the `Agent` tool is available:

- **Agent tool available (Claude Code):** Spawn all agents within each wave in parallel. This is faster.
- **Agent tool NOT available (Claude.ai, web):** Execute research sequentially, following the same templates. Same depth, just slower.

### Web Search

This skill requires WebSearch for real data. If WebSearch is unavailable or denied, fall back to **Knowledge-Based Mode**: use training data, mark all findings with **[Knowledge-Based -- verify independently]**, and reduce confidence ratings by one level.

> **Reference:** Read `references/research-principles.md` before starting any wave. It defines source quality tiers, cross-referencing rules, and how to handle data gaps.

### Wave 1: Competitive Alternatives & Customer Context

> **Reference:** Read `references/research-wave-1-alternatives.md` for agent templates.

Two agents (or two sequential blocks):

**A1: Alternative Mapping (JTBD Lens)** -- Map ALL competitive alternatives, not just direct competitors. Include: direct competitors, adjacent tools competing for the same budget, manual processes, spreadsheets, hiring someone, doing nothing / status quo. For each: what job does the customer hire it for, where does it fall short, what triggers switching? The goal is the full set of things your product replaces.

**A2: Customer Intelligence** -- Mine voice-of-customer data: reviews, forums, communities. Extract: pain points with current alternatives, exact language customers use, what "better" means to them, best-fit customer profile (who gets the most value fastest), switching triggers (what makes someone finally change). Build a **language map** -- the words customers use to describe their problem and desired outcome.

### Wave 2: Market Frame & Trends

> **Reference:** Read `references/research-wave-2-market-frame.md` for agent templates.

Two agents (or two sequential blocks):

**B1: Market Category Analysis** -- Identify 3-5 candidate market categories. For each: what do buyers expect from this category, who are the leaders, what's the competitive dynamic, how mature is it? Apply Dunford's category types: head-to-head (existing category), big fish/small pond (subcategory), or category creation. Assess which frame makes your unique strengths matter most.

**B2: Trend & Timing Analysis** -- Identify relevant trends: technology shifts, behavioral changes, regulatory moves. For each: is it real or hype, how does it affect buyer expectations, does it make your positioning stronger or weaker? Assess timing -- are you early, on-time, or late to the trend? Only include trends that genuinely change how buyers evaluate solutions.

---

### Post-Research Checkpoint

After both waves complete, before synthesis, briefly present what the research found to the user: the competitive alternative landscape (how many direct, adjacent, status quo), the strongest customer pains, and the most promising category candidates. Ask: "Does this align with your expectations? Anything to adjust before I synthesize the positioning?"

Keep it to one message -- this is a quick alignment check, not a full report.

---

## Phase 3: Positioning Synthesis

> **Reference:** Read `references/research-synthesis.md` for synthesis protocol and Dunford process details.

After the checkpoint, build positioning through Dunford's 5+1 components **in order**. The sequence matters -- each step builds on the previous.

### The 5+1 Components

1. **Competitive Alternatives** -- From Wave 1. What would customers use if your product didn't exist? This is the anchor -- positioning is always relative.

2. **Unique Attributes** -- What do you have that the alternatives lack? Be specific and honest. Features, architecture, team expertise, business model, speed -- anything defensible.

   **PAUSE -- User Input Required.** Present the research-derived attributes to the user. Ask them to confirm, add, or remove before proceeding to Value Themes. The founder knows capabilities that research can't surface.

3. **Value Themes** -- Translate each unique attribute into a customer outcome. Attribute -> "so what?" -> value. Group related attributes into 2-3 value themes. Use customer language from Wave 1's language map.

4. **Best-Fit Customers** -- From Wave 1 customer intelligence. Who cares most about your value themes? Define by characteristics that make them care, not demographics. These customers should be reachable, recognizable, and willing to pay.

5. **Market Category** -- From Wave 2. Choose the category frame that makes your value obvious. Present 3-5 options with trade-offs. Recommend one. The right category triggers the right buyer expectations.

6. **Trend Overlay (optional)** -- From Wave 2. Only include if a genuine trend makes your positioning stronger. Forced trend alignment is worse than none.

### Validation

Two stress tests before finalizing:

**Neumeier Onliness Test:**

Basic form:
> "Our [product] is the only [category] that [differentiator]."

Extended form (6 elements -- WHAT/HOW/WHO/WHERE/WHY/WHEN):
> "Our [product] is the only [category] that [differentiator] for [target] who [need] in [context]."

If you can't fill the basic form convincingly -- if "only" feels like a stretch -- the positioning is too weak. Iterate.

**Ries/Trout Mental Ladder:**
- Is it simple enough to remember?
- Does it claim one clear rung?
- Is that rung available (not owned by a competitor)?
- Can you explain it in one sentence?

If either test fails, revisit the 5+1 components. Don't ship weak positioning.

### Output Files

Every deliverable file must start with a standardized header: `# {Title}: {product}` followed by `*Skill: sk-positioning | Generated: {date}*`. Every deliverable must end with Red Flags, Yellow Flags, and Sources sections (see templates in `references/research-synthesis.md`).

**`workspace/sessions/{name}/04-positioning/positioning-doc.md`** -- The main deliverable:
- Executive summary (positioning in 3 sentences)
- The 5+1 components with supporting evidence
- Strength assessment per component (Strong / Moderate / Needs Work)
- Strategic recommendations and next steps
- Data gaps & limitations

**`workspace/sessions/{name}/04-positioning/positioning-statement.md`** -- Statements and messaging:
- Moore template: "For [target] who [need], [product] is a [category] that [benefit]. Unlike [alternative], we [differentiator]."
- Neumeier Onliness Statement (basic + extended)
- Elevator pitch (30-second version)
- Tagline candidates with stress-tested "Possible Misread" column
- One-liner variants for different channels (GitHub, marketplace, social, elevator)
- Freemium positioning (if applicable)

**`workspace/sessions/{name}/04-positioning/competitive-alternatives.md`** -- Complete alternatives map:
- All alternatives (direct, adjacent, manual, status quo)
- Per alternative: job hired for, strengths, shortcomings, switching triggers
- Your unique attributes vs. each alternative

**`workspace/sessions/{name}/04-positioning/market-category-analysis.md`** -- Category strategy:
- 3-5 candidate categories with buyer expectations
- Category type assessment (head-to-head / subcategory / creation)
- Recommendation with reasoning
- Implementation (category label, tagline direction, buyer expectation alignment)
- Red flags and yellow flags

**`workspace/sessions/{name}/04-positioning/messaging-implications.md`** -- Bridge from positioning to copy:
- Messaging hierarchy (what to communicate first, second, third)
- Category label (exact phrase to use everywhere)
- Value anchor (what to compare value to, separate from category)
- Customer language vs. category language map (which words are customer verbs, which are category nouns)
- Words to use / avoid
- Social proof guidelines
- Freemium positioning (if applicable)

### Raw Data

Each agent saves its raw output to `workspace/sessions/{name}/04-positioning/raw/`. The synthesis phase reads these raw files and produces the polished deliverables above. Agents must NOT write directly to deliverable paths -- raw and synthesized output are separate.

Raw research files:
- `alternative-mapping.md`
- `customer-intelligence.md`
- `market-categories.md`
- `trends-timing.md`

### Summary File

After completing synthesis, generate a summary file at `workspace/sessions/{name}/04-positioning.md` containing:

- **Positioning (3-Sentence Summary)**: Concise positioning overview
- **Positioning Statement (Moore)**: For [target] who [need], [product] is a [category] that [benefit]. Unlike [alternative], we [differentiator].
- **Onliness Statement (Neumeier)**: Our [product] is the only [category] that [differentiator].
- **Market Category**: Category name + type (Head-to-head / Subcategory / Category creation)
- **Value Themes**: 2-3 numbered value themes
- **Best-Fit Customer**: Characteristics-based description
- **Elevator Pitch (30 seconds)**: Ready-to-use pitch
- **Full Deliverables**: Links to files in `04-positioning/` subdirectory

This summary file is what downstream phases (offer, leads, pitch) will read. Keep it concise.

---

## Phase 3.5: Research Verification

After all positioning deliverables are written, run a verification pass.

> **Reference:** Read `references/verification-agent.md` for the full verification protocol, universal checks, and skill-specific checks.

### Process

1. Spawn agent **V1: Verification** -- it reads all deliverable files and checks for: unlabeled claims, internal contradictions, confidence rating consistency, missing data gaps, missing flags, stale data, and duplicate-source false corroboration
2. V1 also runs startup-positioning-specific checks: positioning statement vs. research data, JTBD vs. customer intelligence, cross-deliverable coherence, validation test integrity
3. V1 produces `workspace/sessions/{name}/04-positioning/verification-report.md`
4. **If Critical issues found:** Pause and present issues to the user. Ask: fix first, or proceed as-is?
5. **If only Warnings/Info:** Show one-line summary

In Claude.ai or when Agent tool is unavailable, run the verification checks yourself in the main conversation following the same protocol.

---

## Honesty Protocol

> **Reference:** Read `references/honesty-protocol.md` for full protocol and anti-pattern details.

Positioning is only useful if it's honest. Core rules apply (label claims, quantify, declare gaps), plus positioning-specific additions:

1. **No aspirational positioning.** Position on what you ARE, not what you hope to become. Aspirational positioning crumbles at first customer contact.
2. **Challenge "we're unique."** The Onliness Test must be genuinely convincing. If it reads like marketing fluff, iterate.
3. **Research wins over narrative.** When customer data contradicts internal beliefs about positioning, the data wins.
4. **Flag category creation risk.** Most startups can't afford to educate a market. Default to existing categories unless the evidence is overwhelming.

| Anti-Pattern | What It Looks Like | What to Say |
|---|---|---|
| "We're for everyone" | No target segment defined | "If you're for everyone, you're for no one. Who cares MOST?" |
| Feature-based positioning | Leading with features not outcomes | "Customers don't buy features. What outcome do they get?" |
| Aspirational positioning | "We'll be the AI-powered..." | "Position on what you deliver today, not the roadmap." |
| Category-of-one | Inventing a category to avoid comparison | "New categories cost millions. Is there an existing frame?" |
| Copycat positioning | Same message as the market leader | "Find genuinely different ground -- you can't out-position the leader." |

See `references/honesty-protocol.md` for the full anti-pattern table (7 entries) and detailed protocol.

---

## Reference Files

Read only what you need for the current phase.

| File | When to Read | ~Lines | Purpose |
|------|-------------|--------|---------|
| `honesty-protocol.md` | Start of session | ~73 | Full honesty protocol with anti-patterns |
| `research-principles.md` | Before starting Phase 2 | ~65 | Source quality, cross-referencing, data gaps |
| `research-wave-1-alternatives.md` | When running Wave 1 | ~235 | Agent templates for alternatives + customer intel |
| `research-wave-2-market-frame.md` | When running Wave 2 | ~210 | Agent templates for categories + trends |
| `research-synthesis.md` | After both waves complete | ~380 | Synthesis protocol, Dunford process, validation tests, messaging implications |
| `frameworks.md` | During Phase 3 | ~133 | Dunford/Moore/Neumeier/JTBD/Ries reference |
| `research-scaling.md` | After intake, before Phase 2 | ~75 | Complexity scoring, tier definitions, wave configurations |
| `verification-agent.md` | After synthesis | ~80 | Verification protocol, universal + skill-specific checks |

---

## Save & Next

1. Save the main summary to `workspace/sessions/{name}/04-positioning.md`.
2. Save full deliverables to `workspace/sessions/{name}/04-positioning/` directory.
3. Update `workspace/sessions/{name}/00-session.md`:
   - Change Phase 4 Positioning status from `[ ] Not Started` to `[x] Complete`
   - Set Active Phase to "Phase 5: Offer"
   - Set Next Recommended to "Phase 5: Offer"
   - Fill in the "Positioning" section:
     - **Positioning Statement:** [Moore template one-liner]
     - **Market Category:** [category name]
4. Tell the user: "Positioning complete! Your position: [Moore statement]. When you're ready, run `/sk-offer` to build your Grand Slam Offer informed by this positioning."
