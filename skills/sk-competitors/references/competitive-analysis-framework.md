# Competitive Analysis Framework

Reference for applying the competitive analysis template (`templates/competitive-analysis-template.md`) across research tiers. Read this before starting research waves.

## Tier-Scaled Dimensions

### All Tiers (Light, Standard, Deep)

Every competitor profile must include these additional dimensions beyond the standard profile fields:

| Dimension | Description | Source |
|-----------|------------|--------|
| **Moat Type** | Primary competitive moat: network effects, switching costs, data moat, brand, scale, IP/patents, regulatory, or none | Wave 1 (A1) |
| **Key Vulnerability** | Single biggest weakness that could be exploited | Wave 1 (A1) + Wave 2 (B1/B2) |
| **Primary Moat Durability** | How long before the moat erodes: <1 year, 1-3 years, 3-5 years, 5+ years | Wave 3 (C2) |

These fields feed into the Moat Durability Assessment table in the competitors-report during synthesis.

### Standard + Deep Tiers

Enhanced profile dimensions for each competitor:

| Dimension | Description | Source |
|-----------|------------|--------|
| **Founding Narrative** | When founded, key pivots, near-death experiences, founding thesis | Wave 1 (A1) |
| **Leadership Signals** | Founder/C-suite backgrounds, public thought leadership, influence | Wave 1 (A1) |
| **Funding Trajectory** | All rounds, investors, rationale per round, valuation signals | Wave 1 (A1) |
| **IP Signals** | Patents, trademarks, proprietary technology claims | Wave 1 (A1) |
| **Inferred ICP** | Who they target based on messaging, case studies, reviews, job postings | Wave 2 (B1/B2) |
| **GTM Whitespace** | Channels they underexploit, content gaps, partnership opportunities | Wave 3 (C1/C2) |
| **M&A Signals** | Acquisition history, acquisition target indicators, strategic partnerships | Wave 3 (C2) |
| **Revenue Model Evolution** | Pricing changes over time, monetization experiments | Wave 1 (A2) + Wave 3 (C2) |
| **Customer Concentration Risk** | Reliance on specific segments or large accounts | Wave 2 (B1/B2) + Wave 3 (C2) |

### Deep Tier Only

Produce standalone **Competitor Dossiers** for the top 2-3 highest-threat competitors (those rated "High" in the threat assessment from Wave 1).

**Competitor Selection:** After Wave 1 completes and threat levels are assigned, identify the top 2-3 "High" threat competitors for dossier treatment. If fewer than 2 are rated "High," include the highest-rated "Medium" competitors to reach 2.

**Dossier Structure:**

```
# Competitive Dossier: {competitor-name}
*Skill: sk-competitors | Generated: {date} | Depth: Deep*

## 1. Company Foundation & Strategic Position
- Founding narrative, pivots, key milestones
- Leadership profiles and public influence
- Funding history with rationale per round
- IP portfolio and strategic moat assessment

## 2. Product & Value Proposition Architecture
- Product/service suite breakdown
- Key differentiators and limitations
- Technical architecture (what's externally observable)
- Integration ecosystem and API strategy
- Pricing model, psychology, and evolution

## 3. Target Customer Profile (Inferred)
- Primary and secondary customer segments
- Firmographic, technographic, and behavioral signals
- Pain points they address (from their messaging and case studies)
- Customer journey touchpoints (from their website and content)

## 4. Customer Voice & Market Sentiment
- Review analysis patterns (praise themes, complaint themes)
- Community sentiment and forum discussions
- NPS/satisfaction signals (if publicly available)
- Analyst report mentions and industry perception

## 5. GTM Strategy & Revenue Engine
- Sales motion (self-serve vs. sales-led vs. hybrid)
- Primary acquisition channels and content strategy
- Partnership and channel programs
- Marketing positioning and messaging analysis

## 6. Strategic Vulnerabilities & Risks
- Competitive threats they face
- Market and regulatory risks
- Operational weaknesses (inferred from reviews, hiring, public signals)
- Technology risks and technical debt signals

## 7. Future Trajectory & Growth Signals
- Product roadmap signals (changelogs, job postings, announcements)
- Market expansion indicators (new geographies, segments)
- M&A likelihood (as acquirer or target)
- Platform/ecosystem ambitions

## Red Flags
{Critical issues that directly impact competitive strategy}

## Yellow Flags
{Concerns worth monitoring}

## Data Gaps
{What could not be determined — be explicit}

## Sources
{All sources cited with dates}
```

**Output path:** `workspace/sessions/{name}/03-competitors/competitor-dossiers/{competitor-name}.md`

## Section-to-Wave Mapping

| Template Section | Wave | Agents | Tier |
|---|---|---|---|
| I: Company Foundation & Positioning | Wave 1 | A1, A3 | Standard+ |
| II: Value Prop & Product Deep Dive | Wave 1 + Wave 3 | A1, A2, C3 | Standard+ (Deep for full depth) |
| III: ICP & Persona (inferred) | Wave 2 | B1, B2 | Standard+ |
| IV: Customer Voice & Sentiment | Wave 2 | B1, B2, B3 | All (B3 Deep only) |
| V: GTM Strategy & Revenue Engine | Wave 3 | C1, C2 | Standard+ |
| VII: Strategic Vulnerabilities | Synthesis | — | All (basic), Standard+ (full) |
| VIII: Future Vision & Growth | Wave 3 | C2 | Standard+ |

## Synthesis Integration

During synthesis, the framework adds these outputs to the competitors-report (all tiers):

1. **Moat Durability Assessment** table — one row per competitor
2. **GTM Whitespace** section — channels and content gaps across the landscape (Standard+)
3. **Strategic Vulnerability Map** — per-competitor risk matrix (Standard+)

For Deep tier, assemble the dossier files AFTER synthesis of the main deliverables. The dossiers draw from all raw files — no additional research needed.
