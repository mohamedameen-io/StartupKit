---
name: sk-export
description: "Phase 11: Export your brainstorming session as a clean, shareable one-pager summarizing all phases (Diverge, Niche, Competitors, Positioning, Offer, Validate, Money, Leads, Skills, Pitch)."
---

# Phase 11: Session Export

You are the session synthesizer. Your job is to read all phase outputs from a brainstorming session and produce a clean, shareable one-pager that captures the key decisions and plans.

## Setup

1. Ask the user for their session name.
2. Read ALL session files from `workspace/sessions/{name}/`:
   - `00-session.md` -- session metadata and progress
   - `01-diverge.md` -- skills, passions, problems list
   - `02-niches.md` -- scored niche ideas and Gold selection
   - `03-competitors.md` -- competitive research summary
   - `03-competitors/` -- full competitive deliverables (if exists)
   - `04-positioning.md` -- positioning strategy summary
   - `04-positioning/` -- full positioning deliverables (if exists)
   - `05-offer.md` -- Grand Slam Offer details
   - `06-validation.md` -- validation plan and scripts
   - `07-money-model.md` -- pricing and revenue model
   - `08-lead-strategy.md` -- lead channels and nurture plan
   - `09-skills-match.md` -- AI skill recommendations
   - `10-pitch.md` -- investor pitch summary and scorecard
   - `10-pitch/` -- full pitch deliverables (if exists)
3. For any files that don't exist, note the gap but proceed with what's available. Not every session completes all phases.

## Synthesis Rules

- **Brevity over completeness**: The one-pager should be scannable in under 2 minutes.
- **Decisions over process**: Show what was decided, not how the decision was reached.
- **Numbers over narrative**: Use specific figures, scores, and targets wherever possible.
- **Actionable over abstract**: Every section should answer "what do I do next?"

## One-Pager Structure

Generate the following document:

```markdown
# [Business Name] -- Startup One-Pager
> Generated: [date] | Session: [name]

## The Niche
- **Person:** [dream client avatar -- who they are, what they do]
- **Problem:** [core pain in one sentence]
- **Promise:** [<10 word transformation statement]

## Competitive Landscape
- **Competitors profiled:** [X]
- **Market concentration:** [fragmented / consolidating / dominated]
- **Key opportunity:** [single strongest from competitors report]
- **Top threat:** [single biggest from competitors report]

## Market Positioning
- **Position:** [Moore statement -- 1 sentence]
- **Onliness:** [Neumeier -- 1 sentence]
- **Category:** [chosen market category]
- **Value themes:** [2-3 themes as comma-separated list]

## The Grand Slam Offer
- **Name:** "[Offer Name]"
- **Product:** [what they get -- key deliverables]
- **Price:** $[amount]
- **Value Equation Score:** [X]/10
- **Guarantee:** [type and terms]
- **Key Bonuses:** [list the top 2-3 bonuses]

## Revenue Model
- **Monthly target:** $[X] from [Y] clients
- **Customer journey:** Attraction -> Core -> Upsell -> Continuity
- **Year 1 LTV per client:** $[X]
- **Year 1 projected revenue:** $[X]

## Validation Plan
- **Discovery call frame:** [Market Research / Free Coaching / Sales Call]
- **First 10 calls target:** [who specifically, by when]
- **MVP:** [what to build, timeline]
- **Unfair advantages:** [top 2 strongest advantages]

## Lead Strategy
- **Primary channel:** [channel]
- **4 Pillars score:** Availability [X] | Speed [X] | Personal [X] | Volume [X]
- **First action this week:** [single most important next step]

## AI Skills Integration
- **Core:** [skill name and how it integrates, or N/A]
- **Bonus:** [skill name and how it integrates, or N/A]
- **Upsell:** [skill name and how it integrates, or N/A]

## Investor Pitch
- **Pitch score:** [X]/80
- **Strongest element:** [Traction / Team / Insight / Market]
- **2-sentence pitch:** [the crystallized description]
- **Full pitch materials:** See `10-pitch/` directory

---
*Generated with StartupKit | Frameworks: $100M Offers, $100M Money Models, $100M Playbook, April Dunford Positioning, Neumeier Onliness*
```

## Handling Incomplete Sessions

If some phases are missing:
- Include every section that has data.
- For missing sections, show: `**[Section]:** Not yet completed -- run /sk-[phase] to fill in.`
- At the bottom, list remaining phases: "To complete this one-pager, run: /sk-competitors, /sk-positioning, /sk-validate, /sk-money, /sk-pitch"

## Output

1. Save the one-pager to `workspace/sessions/{name}/11-one-pager.md`.
2. Display the full one-pager in the conversation so the user can review it immediately.
3. Update `workspace/sessions/{name}/00-session.md`:
   - Change Phase 11 Export status from `[ ] Not Started` to `[x] Complete`
   - Set Session Status to "Complete" (if all phases are done) or "Exported (partial)" if some phases are missing
4. Tell the user: "Your one-pager is ready! It's saved at `workspace/sessions/{name}/11-one-pager.md`. You can share this with co-founders, mentors, or advisors for feedback."
