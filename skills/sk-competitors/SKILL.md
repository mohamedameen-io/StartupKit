---
name: sk-competitors
description: "Phase 3: Deep competitive research on your Gold niche. Analyzes competitors' products, pricing, customer sentiment, GTM strategy, and growth signals using real web data. Produces battle cards, pricing landscape, and competitive matrix. Use when the user wants to understand their competitive landscape, analyze competitors, compare products, or research who they're competing against."
---

# Startup Competitors

Deep competitive intelligence that goes beyond surface-level profiles. Produces actionable battle cards, pricing landscape analysis, and strategic vulnerability mapping using real web data.

## How It Works

```
INTAKE → RESEARCH (3 parallel waves) → SYNTHESIS → BATTLE CARDS
```

The process is focused: understand the product, research competitors deeply across 3 dimensions, synthesize findings, and produce actionable output. Typical runtime: 15-25 minutes in Claude Code (parallel agents), 30-45 minutes in Claude.ai (sequential).

### Language

Default output language is **English**. If the user writes in another language or explicitly requests one, use that language for all outputs instead.

---

## Phase 1: Intake

Short and focused — 1-2 rounds of questions, not an extended interview. The goal is just enough context to run targeted research.

### Check for Prior StartupKit Session

Before asking questions, check if a StartupKit session exists. Ask the user for their session name, then look for:

- `workspace/sessions/{name}/02-niches.md` -- Gold niche selection
- `workspace/sessions/{name}/00-session.md` -- Session metadata

If `02-niches.md` exists, read it and extract the **Gold Niche** data:
- **Person**: The target customer description from the Gold Niche section
- **Problem**: The core pain from the Gold Niche section
- **Promise**: The transformation statement from the Gold Niche section

Also extract any Hormozi 4-criteria scores (Painful, Purchasing Power, Targetable, Growing) for market context.

Tell the user: "I found your Gold niche from Phase 2. I'll use it as the starting point for competitive research: [Person] who struggle with [Problem]."

Skip the intake interview if the niche data provides enough context (person, problem, and market are clear). Go straight to research depth assessment.

If no session data exists, fall back to the intake questions below.

### What to Ask (if no prior data exists)

**Round 1 — The basics:**
- What's your product/idea? (one sentence is fine)
- What problem does it solve and for whom?
- What market/category are you in?
- Do you know any competitors already? (names, URLs)

**Round 2 — Sharpening (only if needed):**
- What geography/market are you targeting?
- What's your pricing model or range?
- What do you consider your key differentiator?

Don't over-interview. If the user gives a clear description upfront, skip straight to research. The competitive analysis itself will surface what matters.

### Output

Save the main summary to `workspace/sessions/{name}/03-competitors.md` — a brief summary of the product, market, and known competitors. If built on prior session data, note the source files used.

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

---

## Phase 2: Research

Three parallel research waves, each attacking the competitive landscape from a different angle. Together they produce a 360-degree view.

### Environment Detection

Check if the `Agent` tool is available:

- **Agent tool available (Claude Code):** Spawn all agents within each wave in parallel. This is faster.
- **Agent tool NOT available (Claude.ai, web):** Execute research sequentially, following the same templates. Same depth, just slower.

### Web Search

This skill requires WebSearch for real data. If WebSearch is unavailable or denied, fall back to **Knowledge-Based Mode**: use training data, mark all findings with **[Knowledge-Based — verify independently]**, and reduce confidence ratings by one level.

> **Reference:** Read `references/research-principles.md` before starting any wave. It defines source quality tiers, cross-referencing rules, and how to handle data gaps.

### Competitive Analysis Framework

> **Reference:** Read `references/competitive-analysis-framework.md` for tier-scaled analytical dimensions that enrich competitor profiles and synthesis outputs across all research tiers. This framework adds moat assessment, strategic vulnerability mapping, and (for Deep tier) standalone competitor dossiers.

### Wave 1: Competitor Profiles + Pricing Intelligence

> **Reference:** Read `references/research-wave-1-profiles-pricing.md` for agent templates.

Two agents (or two sequential blocks):

**A1: Competitor Deep-Dives** — Identify and profile 5-8 direct competitors plus 2-3 adjacent solutions (broader platforms, manual alternatives, tools from neighboring categories that compete for the same budget). For each: product, features, team size, funding, traction signals, strengths, weaknesses. Go beyond their marketing page — check reviews, job postings, and funding data.

**A2: Pricing Intelligence** — For each competitor: reverse-engineer the pricing model. Not just "it costs $49/mo" but: what's the value metric (per seat? per usage? flat?), how do tiers differentiate, what pricing psychology do they use (anchoring, decoy, charm pricing), what's the switching cost (technical, contractual, emotional). Build a tier-by-tier comparison.

### Wave 2: Customer Sentiment Mining

> **Reference:** Read `references/research-wave-2-sentiment-mining.md` for agent templates.

Two agents (or two sequential blocks):

**B1: Review Mining** — Mine G2, Capterra, TrustRadius, Product Hunt, and App Store reviews for each competitor. Extract patterns: what do people praise? What do they complain about? What features do they request? Organize by competitor and by pain theme. Include verbatim quotes.

**B2: Forum & Community Mining** — Mine Reddit, Indie Hackers, Hacker News, Quora, and niche communities. Find: complaints about existing tools, "what do you use for X?" threads, migration stories, workaround discussions. Build a **language map** — the exact words customers use to describe their problems and desires. Identify **churn signals** — why people leave each competitor.

### Wave 3: GTM & Strategic Signals

> **Reference:** Read `references/research-wave-3-gtm-signals.md` for agent templates.

Two agents (or two sequential blocks):

**C1: Go-to-Market Analysis** — For each competitor: primary acquisition channel, sales motion (self-serve vs. sales-led), content strategy (blog frequency, topics, quality), social presence, paid advertising signals, partnership plays. Build a **channel opportunity map** showing competitor saturation vs. opportunity per channel.

**C2: Strategic & Growth Signals** — Funding trajectory (rounds, investors, timing), hiring patterns (engineering-heavy = building, sales-heavy = scaling, support-heavy = struggling), content/SEO footprint (what keywords they rank for, where the gaps are), product roadmap signals from changelogs and public statements. Identify **content pillars** each competitor owns and which topics nobody covers well.

---

### Post-Research Checkpoint

After all three waves complete, before synthesis, briefly present what the research found to the user: how many competitors were profiled, the top customer pain themes, the most notable strategic signals (funding, hiring, GTM patterns). Ask: "Does this align with your expectations? Any competitors to add or remove before I synthesize?"

Keep it to one message — this is a quick alignment check, not a full report.

---

## Phase 3: Synthesis

> **Reference:** Read `references/research-synthesis.md` for synthesis protocol and battle card template.

After the checkpoint, synthesize raw findings into strategic deliverables. This step creates the real value — it's not reporting, it's pattern-matching across data sources.

### How to Synthesize

1. Read all raw files before writing anything
2. Connect findings across waves: pricing gaps + customer complaints + hiring signals = strategic opportunities
3. Identify contradictions between sources and explain which to trust
4. Rate confidence for each major claim (High / Medium / Low)
5. Surface strategic implications — not just facts, but what they mean
6. Aggregate all data gaps from raw files into a dedicated "Data Gaps & Research Limitations" section in the competitors-report — every analysis has blind spots, and being explicit about them prevents false confidence
7. Include adjacent solutions (broader platforms, manual alternatives, tools from neighboring categories) — customers don't just choose between direct competitors, they choose between "good enough" options from adjacent spaces

### Output Files

Every deliverable file must start with a standardized header: `# {Title}: {product}` followed by `*Skill: sk-competitors | Generated: {date}*`. Every deliverable must end with Red Flags, Yellow Flags, and Sources sections.

**`workspace/sessions/{name}/03-competitors/competitors-report.md`** — The main deliverable:
- Executive summary (5-sentence competitive landscape overview)
- Market concentration assessment (fragmented / consolidating / dominated)
- Key findings per research dimension
- Strategic opportunities (where to compete)
- Strategic risks (where to avoid)
- Competitive moat assessment (network effects, switching costs, data moat, brand, scale)
- Data gaps & research limitations (mandatory — aggregate from all raw files)
- Red flags and yellow flags

**`workspace/sessions/{name}/03-competitors/competitive-matrix.md`** — Feature comparison table:
- Features as rows, competitors as columns
- Rating: strong / adequate / weak / missing
- Highlight gaps where no competitor serves well
- Your product included (or placeholder if pre-launch)

**`workspace/sessions/{name}/03-competitors/pricing-landscape.md`** — Dedicated pricing analysis:
- Tier-by-tier comparison across all competitors
- Value metric analysis (what each charges for and why)
- Pricing psychology breakdown (anchoring, decoy, freemium strategies)
- Price positioning map (axes: price vs. feature depth)
- Pricing whitespace — where there's room to position
- Switching cost matrix (per competitor: technical, contractual, emotional)

**`workspace/sessions/{name}/03-competitors/battle-cards/{competitor-name}.md`** — One per competitor:
- One-page format: who they are, their strengths, their weaknesses
- How to win against them (specific talking points)
- When they win over you (be honest)
- Customer objections and responses
- Key vulnerability to exploit
- Churn signals (why their customers leave)

**Standard + Deep — Strategic analysis sections in `competitors-report.md`:**
Moat Durability Assessment table, GTM Whitespace analysis, and Strategic Vulnerability Map are added to the competitors-report. See `references/competitive-analysis-framework.md` for table formats.

**Deep tier only — `workspace/sessions/{name}/03-competitors/competitor-dossiers/{competitor-name}.md`:**
For the top 2-3 highest-threat competitors, produce a structured competitive dossier with deeper strategic intelligence. These go beyond battle cards to cover company foundation, product architecture, inferred ICP, GTM deconstruction, strategic vulnerabilities, and future trajectory. See `references/competitive-analysis-framework.md` for the 7-section dossier structure.

### Summary File

After completing synthesis, generate a summary file at `workspace/sessions/{name}/03-competitors.md` containing:

- **Executive Summary**: 5 sentences covering the competitive landscape
- **Key Competitors** table: Name | Stage | Moat | Strength | Weakness | Threat Level (H/M/L)
- **Strategic Opportunity**: Single strongest opportunity with evidence
- **Strategic Risk**: Single biggest risk with evidence  
- **Pricing Landscape Summary**: Market price range, dominant value metric, pricing whitespace
- **Full Deliverables**: Links to the files in `03-competitors/` subdirectory

When research depth is Standard or Deep, also include:
- **Moat Durability Assessment**: Table with moat type, durability, and eroding factor per competitor
- **GTM Whitespace**: Underexploited channels and content gaps across the landscape

When research depth is Deep, also include:
- **Competitor Dossiers**: Links to `03-competitors/competitor-dossiers/` for top 2-3 threat competitors

This summary file is what downstream phases (positioning, offer, pitch) will read. Keep it concise and data-dense.

### Raw Data

Keep raw research files in `workspace/sessions/{name}/03-competitors/raw/` for reference:
- `competitor-profiles.md`
- `pricing-intelligence.md`
- `review-mining.md`
- `forum-mining.md`
- `gtm-analysis.md`
- `strategic-signals.md`

---

## Phase 3.5: Research Verification

After synthesis completes and all deliverable files are written, run a verification pass.

> **Reference:** Read `references/verification-agent.md` for the full verification protocol, universal checks, and skill-specific checks.

### Process

1. Spawn agent **V1: Verification** — it reads all deliverable files and checks for: unlabeled claims, internal contradictions, confidence rating consistency, missing data gaps, missing flags, stale data, and duplicate-source false corroboration
2. V1 also runs startup-competitors-specific checks: battle card vs. report consistency, matrix vs. profiles alignment, pricing landscape vs. profiles consistency, cross-deliverable coherence
3. V1 produces `workspace/sessions/{name}/03-competitors/verification-report.md`
4. **If Critical issues found:** Pause and present issues to the user. Ask: fix first, or proceed as-is?
5. **If only Warnings/Info:** Show one-line summary

In Claude.ai or when Agent tool is unavailable, run the verification checks yourself in the main conversation following the same protocol.

---

## Honesty Protocol

> **Reference:** Read `references/honesty-protocol.md` for full protocol and anti-pattern details.

Competitive intelligence is only useful if it's honest. Core rules apply (label claims, quantify, declare gaps), plus competitive-intelligence-specific additions:

1. **No cheerleading.** If a competitor is objectively better at something, say so. Battle cards that ignore competitor strengths are useless in real sales conversations.
2. **Label claims.** Use **[Data]**, **[Estimate]**, **[Assumption]**, **[Opinion]** tags. Never present guesses as facts.
3. **Quantify.** "$12M ARR growing 40% YoY" not "they're growing fast."
4. **Date everything.** Flag data older than 12 months.
5. **Declare gaps.** "DATA GAP: Could not find reliable data on [X]" is always better than fabrication.
6. **Surface red flags.** If the competitive landscape looks brutal, say so directly.
7. **Challenge confirmation bias.** When research confirms what the founder already believes, probe deeper. Look for disconfirming evidence.

See `references/honesty-protocol.md` for the full anti-pattern table (6 entries) and detailed protocol.

---

## Reference Files

Read only what you need for the current phase.

| File | When to Read | ~Lines | Purpose |
|------|-------------|--------|---------|
| `honesty-protocol.md` | Start of session | ~72 | Full honesty protocol with anti-patterns |
| `research-principles.md` | Before starting Phase 2 | ~54 | Source quality, cross-referencing, data gaps |
| `research-wave-1-profiles-pricing.md` | When running Wave 1 | ~186 | Agent templates for profiles + pricing |
| `research-wave-2-sentiment-mining.md` | When running Wave 2 | ~189 | Agent templates for review + forum mining |
| `research-wave-3-gtm-signals.md` | When running Wave 3 | ~192 | Agent templates for GTM + strategic signals |
| `research-synthesis.md` | After all waves complete | ~231 | How to synthesize + battle card template |
| `research-scaling.md` | After intake, before Phase 2 | ~80 | Complexity scoring, tier definitions, wave configurations |
| `verification-agent.md` | After synthesis | ~85 | Verification protocol, universal + skill-specific checks |
| `competitive-analysis-framework.md` | Before starting any wave | ~120 | Tier-scaled analytical dimensions, dossier structure, section-to-wave mapping |

---

## Save & Next

1. Save the main summary to `workspace/sessions/{name}/03-competitors.md`.
2. Save full deliverables to `workspace/sessions/{name}/03-competitors/` directory.
3. Update `workspace/sessions/{name}/00-session.md`:
   - Change Phase 3 Competitors status from `[ ] Not Started` to `[x] Complete`
   - Set Active Phase to "Phase 4: Positioning"
   - Set Next Recommended to "Phase 4: Positioning"
   - Fill in the "Competitive Intelligence" section:
     - **Competitors Profiled:** [total number]
     - **Market Concentration:** [fragmented / consolidating / dominated]
     - **Key Opportunity:** [one-line summary]
4. Tell the user: "Competitive research complete! [X] competitors profiled with battle cards, pricing landscape, and strategic analysis. When you're ready, run `/sk-positioning` to define your market positioning strategy."
