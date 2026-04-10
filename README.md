# StartupKit

An interactive 11-phase startup ideation toolkit powered by Claude Code skills. Walk through a structured brainstorming process to go from "I want to start a business" to a validated, scored business idea with competitive intelligence, market positioning, a complete offer, pricing model, go-to-market plan, and investor-ready pitch.

## What This Is

StartupKit is a set of conversational AI skills that guide you through the entire business ideation process. Instead of staring at a blank page wondering what business to start, you work through a proven sequence of frameworks -- answering questions, scoring ideas, and building your offer step by step.

Each phase produces a concrete markdown artifact (worksheets, scorecards, one-pagers) that you keep, revisit, and refine.

## Built On The Shoulders Of Giants

This toolkit synthesizes frameworks and methodologies from:

- **Alex Hormozi** -- *$100M Offers* (Grand Slam Offer framework, Value Equation, offer enhancement through Scarcity/Urgency/Bonuses/Guarantees/Naming), *$100M Money Models* (Attraction/Upsell/Downsell/Continuity offer types), *$100M Leads* (lead generation), and the *$100M Playbook* (Lead Nurture: the 4 Pillars of Availability, Speed, Personalization, and Volume)
- **Ali Abdaal** -- The Diverge/Converge/Emerge creativity process, the Holy Trinity of business ideas (Person + Problem + Product), Craft Skills auditing, the Six P's offer framework (Person/Problem/Promise/Plan/Product/Price), the 5-phase business growth roadmap, and validation through discovery calls
- **Taki Moore** -- The 3-question niche scoring framework (Do I like them? Can I help them? Will they pay?)
- **April Dunford** -- *Obviously Awesome* (5+1 positioning framework, market category strategy)
- **Marty Neumeier** -- *Zag* (Onliness Statement for differentiation validation)
- **Geoffrey Moore** -- *Crossing the Chasm* (positioning statement template)
- **Ferdinando Bons** -- [startup-skill](https://github.com/ferdinandobons/startup-skill) (competitive intelligence research architecture, positioning synthesis, pitch construction framework). Phases 3 (Competitors), 4 (Positioning), and 10 (Pitch) are adapted from this project.
- **Additional influences** -- Rob Fitzpatrick's *The Mom Test* (customer interview principles), MJ DeMarco's *The Millionaire Fastlane* (wealth-building lanes), James Altucher's ideation techniques, and Shapiro's 4 viable business model categories

All credit for the underlying business frameworks goes to these creators. StartupKit simply packages their wisdom into an interactive workflow you can use with Claude.

## The 11 Phases

| # | Phase | Command | What You Do |
|---|-------|---------|-------------|
| 0 | Start | `/startupkit` | Create or continue a brainstorming session |
| 1 | Diverge | `/sk-diverge` | Brainstorm skills, passions, and 50+ problems |
| 2 | Niche | `/sk-niche` | Score and rank niche ideas (person + problem) |
| 3 | Competitors | `/sk-competitors` | Deep competitive research with battle cards |
| 4 | Positioning | `/sk-positioning` | Market positioning with April Dunford framework |
| 5 | Offer | `/sk-offer` | Build a Grand Slam Offer with the Value Equation |
| 6 | Validate | `/sk-validate` | Plan discovery calls, outreach scripts, and MVP |
| 7 | Money | `/sk-money` | Design pricing and your full money model |
| 8 | Leads | `/sk-leads` | Plan lead channels and nurture sequences |
| 9 | Skills | `/sk-skills` | Match AI-powered skills to your business |
| 10 | Pitch | `/sk-pitch` | Build investor-ready pitch scripts and practice |
| 11 | Export | `/sk-export` | Generate a comprehensive one-pager summary |

You don't have to follow them in order. Jump to any phase, revisit previous ones, or skip what doesn't apply.

## Quick Start

### Install

```bash
npx skills add mohamedameen-io/StartupKit
```

That's it. The skills are installed globally (`~/.claude/skills/`) and available in any Claude Code session.

### Then brainstorm

1. Open Claude Code in any directory
2. Run `/startupkit` to create a new brainstorming session
3. Work through the phases at your own pace -- Claude guides you with questions and frameworks
4. Each phase saves its output as a structured markdown file in `workspace/sessions/your-session/`
5. When you're done, run `/sk-export` to get a clean one-pager

### Alternative install methods

**Via npm** (also copies workspace templates):
```bash
npx startup-ideation-kit init
```

**Clone the repo:**
```bash
git clone https://github.com/mohamedameen-io/StartupKit.git
cd StartupKit
```

### What You Get At The End

A `workspace/sessions/your-session/` folder containing:

```
00-session.md           # Progress tracker
01-diverge.md           # Your skills, passions, and problems list
02-niches.md            # Scored and ranked niche ideas
03-competitors.md       # Competitive research summary
03-competitors/         # Full deliverables (battle cards, pricing, matrix)
04-positioning.md       # Positioning strategy summary
04-positioning/         # Full deliverables (statements, alternatives, messaging)
05-offer.md             # Complete Grand Slam Offer
06-validation.md        # Validation plan with scripts and milestones
07-money-model.md       # Pricing, offer ladder, and revenue projections
08-lead-strategy.md     # Lead channels and nurture sequences
09-skills-match.md      # AI skill recommendations
10-pitch.md             # Investor pitch summary and scorecard
10-pitch/               # Full pitch deliverables (all formats, appendix)
11-one-pager.md         # Final exportable summary
```

## Project Structure

```
StartupKit/
  .claude/skills/       # Claude Code skills (the interactive prompts)
  workspace/
    templates/           # Blank worksheet templates for each phase
    sessions/            # Your brainstorming sessions (gitignored)
```

## Requirements

- [Claude Code](https://claude.ai/code) (CLI, desktop app, or IDE extension)
- Node.js (for `npx skills add` only -- not needed if you clone the repo)

## License

MIT License. See [LICENSE](LICENSE) for details.

The skill definitions and templates in this repository are open source. The business frameworks referenced belong to their respective creators (Alex Hormozi, Ali Abdaal, Taki Moore, etc.) and are used here for educational purposes.
