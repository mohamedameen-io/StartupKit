# Synthesis & Battle Cards

After ALL waves complete (6 agents), synthesize the raw findings into polished deliverables. This step creates the real analytical value — it connects dots across data sources to surface opportunities that individual research pieces can't reveal on their own.

## Synthesis Protocol

### Before Writing

1. Read ALL raw files in `{project-name}/raw/` before writing anything
2. Look for patterns across sources — what themes repeat?
3. Identify contradictions between sources and explain which you trust more
4. Connect the dots: pricing gaps + customer complaints + hiring signals = opportunities

### Cross-Wave Connections to Look For

These are the high-value insights that come from combining data:

- **Complaint + Pricing = Opportunity:** Customers complain about a feature AND the competitor charges a premium for it → undercut with better value
- **Hiring + Product Direction = Threat:** Competitor hiring AI engineers + recent AI mentions in changelog → they're coming for that space
- **Churn Signal + Switching Cost = Wedge:** People want to leave but data portability is hard → build easy migration as a differentiator
- **Content Gap + Search Volume = Quick Win:** Nobody ranks for a high-volume term → own it early
- **Review Pattern + Missing Feature = MVP Feature:** Multiple competitors lack something customers want → build it first
- **Funding + Team Size = Reality Check:** Well-funded competitor with 100+ engineers → don't compete on features, compete on focus

### Confidence Rating

Rate every major claim:
- **High:** Multiple Tier 1/2 sources agree, recent data
- **Medium:** Some evidence but gaps, or sources partially disagree
- **Low:** Limited data, mostly inferred, or data older than 12 months

---

## Output File: competitors-report.md

Structure:

```markdown
# Competitive Intelligence Report: {market/product}
*Skill: startup-competitors | Generated: {date}*

## Executive Summary
{5 sentences max: market concentration, key finding, biggest opportunity, biggest risk, overall assessment}

## Market Concentration
- **Structure:** fragmented / consolidating / dominated
- **Number of active players:** {count}
- **Funding concentration:** {is money flowing in or drying up?}
- **Entry barriers:** low / medium / high — {why}

## Key Players at a Glance
| Competitor | Stage | Funding | Strength | Weakness | Threat |
|-----------|-------|---------|----------|----------|--------|
| ... | ... | ... | ... | ... | H/M/L |

## Adjacent Solutions & Substitutes
{Broader platforms, manual alternatives, and tools from neighboring categories that compete for the same budget or job. Include: what job they solve, why buyers consider them, and how they compare to direct competitors.}

## Strategic Opportunities
For each opportunity:
### Opportunity: {name}
- **What:** {description}
- **Evidence:** {data points from research}
- **Confidence:** High / Medium / Low
- **How to exploit:** {specific recommendation}

## Strategic Risks
For each risk:
### Risk: {name}
- **What:** {description}
- **Evidence:** {data points}
- **Severity:** High / Medium / Low
- **Mitigation:** {how to protect against it}

## Competitive Moat Assessment
Evaluate the market on 5 moat dimensions:
| Moat Type | Present in Market? | Who Has It | Strength |
|----------|-------------------|-----------|----------|
| Network effects | yes / no | {who} | strong / weak |
| Switching costs | yes / no | {who} | strong / weak |
| Data moat | yes / no | {who} | strong / weak |
| Brand/trust | yes / no | {who} | strong / weak |
| Economies of scale | yes / no | {who} | strong / weak |

{Paragraph explaining what this means for a new entrant}

## Data Gaps & Research Limitations
Aggregate all data gaps from raw research files into a single section. For each gap:
- What data is missing
- Why it matters for decision-making
- How to fill it (specific actions the founder can take)

This section is mandatory — every competitive analysis has blind spots. Being explicit about them builds trust and prevents false confidence.

## Red Flags
- {flag 1 — things that should worry the founder}
- {flag 2}

## Yellow Flags
- {flag 1 — things to watch}
- {flag 2}
```

---

## Output File: competitive-matrix.md

```markdown
# Competitive Feature Matrix: {market}

## Feature Comparison
| Feature | {Your Product} | {Comp 1} | {Comp 2} | {Comp 3} | {Comp 4} |
|---------|---------------|----------|----------|----------|----------|
| {feature 1} | {rating} | {rating} | ... | ... | ... |
| {feature 2} | ... | ... | ... | ... | ... |

Rating scale: Strong / Adequate / Weak / Missing / Unknown

## Gap Analysis
Features where no competitor excels (all Weak or Missing):
- {gap 1} — {opportunity implication}
- {gap 2} — {opportunity implication}

## Differentiation Opportunities
Based on the matrix, the clearest paths to differentiation:
1. {opportunity — what to build and why}
2. {opportunity}
3. {opportunity}
```

---

## Output File: pricing-landscape.md

```markdown
# Pricing Landscape: {market}

## Market Pricing Overview
- **Dominant value metric:** {what most charge for}
- **Price range:** {lowest — highest for comparable tiers}
- **Median price point:** {for standard tier}
- **Free tier prevalence:** {X of Y competitors offer free}

## Tier-by-Tier Comparison
| | {Comp 1} | {Comp 2} | {Comp 3} | {Comp 4} |
|---|----------|----------|----------|----------|
| Free tier | {what's included} | ... | ... | ... |
| Entry tier | ${price} — {limits} | ... | ... | ... |
| Mid tier | ${price} — {limits} | ... | ... | ... |
| Top tier | ${price} — {limits} | ... | ... | ... |
| Enterprise | {custom?} | ... | ... | ... |

## Value Metric Analysis
| Competitor | Value Metric | Why It Works/Doesn't | Impact on Scaling |
|-----------|-------------|---------------------|-------------------|
| ... | per seat | {analysis} | {how costs grow} |

## Pricing Psychology in Use
| Tactic | Used By | How |
|--------|---------|-----|
| Anchoring | {who} | {details} |
| Decoy tier | {who} | {details} |
| Charm pricing | {who} | {details} |
| Annual lock-in | {who} | {discount %} |

## Switching Cost Matrix
| Competitor | Technical Cost | Contractual Cost | Emotional Cost | Overall |
|-----------|---------------|-----------------|----------------|---------|
| ... | H/M/L | H/M/L | H/M/L | H/M/L |

## Pricing Whitespace
{Where there's room to position on price — underserved segments, untried models, price points nobody occupies}

## Recommendations
- **If competing on price:** {strategy}
- **If competing on value:** {strategy}
- **If competing on model:** {alternative pricing approach that no competitor uses}
```

---

---

## Strategic Analysis Framework (All Tiers)

After completing the main deliverables, add these strategic analysis sections to `competitors-report.md`:

### Moat Durability Assessment (All Tiers)

Add this table to the competitors-report, drawing from moat data collected in Wave 1 profiles and Wave 3 strategic signals:

```
## Moat Durability Assessment

| Competitor | Primary Moat | Durability | Eroding Factor | Confidence |
|-----------|-------------|------------|----------------|------------|
| {name} | {moat type} | {<1yr / 1-3yr / 3-5yr / 5+yr} | {what could erode it} | {H/M/L} |
```

Moat types: network effects, switching costs, data moat, brand, scale, IP/patents, regulatory, none.

### GTM Whitespace (Standard + Deep)

Add this section to the competitors-report, drawing from Wave 3 GTM analysis:

```
## GTM Whitespace

**Underexploited channels:**
- {channel} — {why it's open, which competitors ignore it}

**Content gaps:**
- {topic area} — {no competitor covers this well, estimated search demand}

**Partnership opportunities:**
- {partner type} — {untapped partnership that could provide distribution}
```

### Strategic Vulnerability Map (Standard + Deep)

Add this section to the competitors-report:

```
## Strategic Vulnerability Map

| Competitor | Vulnerability Type | Description | Exploitability | Confidence |
|-----------|-------------------|-------------|---------------|------------|
| {name} | {product/GTM/financial/operational/talent} | {specific vulnerability} | {H/M/L} | {H/M/L} |
```

---

## Deep Tier: Competitor Dossiers

When research depth is Deep, produce structured dossiers for the top 2-3 highest-threat competitors AFTER completing all other synthesis deliverables.

### Assembly Protocol

1. Identify top 2-3 "High" threat competitors from Wave 1 profiles
2. Read ALL raw files in `raw/` for data on these competitors
3. Also draw from the synthesized competitors-report, pricing-landscape, and battle cards
4. Assemble each dossier following the 7-section structure in `competitive-analysis-framework.md`
5. Save to `competitor-dossiers/{competitor-name}.md`

### What Goes in a Dossier vs. a Battle Card

| Aspect | Battle Card | Dossier |
|--------|------------|---------|
| **Length** | 1 page | 5-15 pages |
| **Purpose** | Quick reference for sales/positioning | Strategic intelligence for founders making product/pricing/positioning decisions |
| **Audience** | Anyone on the team | Founders, CRO, product leads |
| **Update frequency** | Each research run | Quarterly deep refresh |
| **Key question** | "How do I win against them?" | "What is their full strategic position and trajectory?" |

Dossiers DO NOT replace battle cards. Both are produced for Deep-tier competitors.

---

## Post-Synthesis Verification

After writing all deliverables and battle cards, run the Verification Agent protocol. See `references/verification-agent.md` for the full process. The verification step checks all deliverables for unlabeled claims, internal contradictions, confidence rating consistency, and startup-competitors-specific coherence (battle card vs. report consistency, matrix vs. profiles alignment, pricing landscape vs. profiles consistency, cross-deliverable opportunity/risk traceability).

---

## Output File: battle-cards/{competitor-name}.md

One battle card per competitor. Keep each to ONE page — these are reference tools for quick use, not deep research docs.

```markdown
# Battle Card: {Competitor Name}
*Last updated: {date}*

## At a Glance
- **What they do:** {one sentence}
- **Founded:** {year} | **Funding:** {total} | **Team:** ~{size}
- **Price:** {range} | **Model:** {value metric}
- **Best for:** {their ideal customer}

## Their Strengths (be honest)
- {strength 1 — with evidence}
- {strength 2}
- {strength 3}

## Their Weaknesses (your openings)
- {weakness 1 — with evidence from reviews/forums}
- {weakness 2}
- {weakness 3}

## How to Win Against Them
Specific talking points when a prospect is evaluating both:
- **When they say "{objection},"** respond: {counter with evidence}
- **When they say "{objection},"** respond: {counter}
- **Lead with:** {your strongest differentiator vs. this specific competitor}

## When They Win Over You
Be honest about when the competitor is the better choice:
- {scenario 1 — e.g., "Enterprise teams needing SSO and audit logs"}
- {scenario 2}

## Their Customers' Top Complaint
"{verbatim quote from review}" — {source}
This matters because: {strategic implication}

## Key Vulnerability
{The single biggest weakness you can exploit — with evidence}

## Churn Signals
Why their customers leave:
- {reason 1} — frequency: common / occasional
- {reason 2}

## Watch For
{What this competitor is likely to do next based on strategic signals}
```
