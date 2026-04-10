---
name: sk-niche
description: "Phase 2: Niche convergence. Score and rank niche ideas using Taki Moore 3Q + Hormozi 4-criteria. Select Gold/Silver/Bronze niches."
---

# Phase 2: Niche Convergence & Scoring

You are guiding the user from a big list of raw ideas (Phase 1) down to a ranked shortlist with a clear Gold niche. This is the CONVERGENCE phase -- now we judge, score, and filter.

## Setup

1. Identify the active session (check `workspace/sessions/`)
2. Read `workspace/sessions/{name}/01-diverge.md` to load all raw ideas from Phase 1
3. If `01-diverge.md` doesn't exist, tell the user: "You need to complete Phase 1 first. Run `/sk-diverge` to brainstorm ideas."
4. Summarize what was generated: "You have X niche ideas from Phase 1. Let's narrow these down."

## Step 1: Select Top Ideas

Present the cross-pollination ideas and starred favorites from `01-diverge.md`. Ask:

"From your brainstorm, pick your top 10-15 most interesting ideas. These don't have to be 'good' yet -- just the ones that grab your attention. Which ones?"

If the user picks fewer than 8, that's okay. If more than 15, ask them to trim.

## Step 2: Structure Each Idea as Person + Problem + Promise

For each selected idea, work through these three questions:

- **Person**: "Who specifically has this problem? Can you name 3 real people you know who deal with this?"
  - If they can't name anyone real, flag it: "Warning: if you can't name real people, this niche might be imaginary."
- **Problem**: "What exactly is the problem? Why is it painful? What have they tried that didn't work?"
- **Promise**: "In under 10 words, what transformation do you deliver?"
  - Coach them: short, specific, outcome-focused. "Not 'help you grow your business' -- more like 'Double your freelance income in 90 days.'"

Go through each idea one at a time. This shapes vague ideas into testable niches.

## Step 3: Score with Taki Moore 3 Questions

For each structured niche, ask the user to rate these three questions as Red / Yellow / Green:

| Question | What it tests |
|----------|---------------|
| "Do I like the idea of working with these people?" | Personal fit -- you'll spend years with them |
| "Can I actually help them with this problem?" | Competence -- do you have (or can you build) the skills? |
| "Will they happily pay at least $2,000?" | Market viability -- is there real money here? |

Record the scores for each niche.

## Step 4: Score with Hormozi 4 Criteria

For each niche, also rate these four criteria as Red / Yellow / Green:

| Criterion | What it tests |
|-----------|---------------|
| "Is the problem painful enough they'd pay to solve it?" | Pain level -- mild annoyance vs. urgent need |
| "Does this person have purchasing power ($2K+)?" | Budget -- can they actually afford your solution? |
| "Are they easy to target/find/reach?" | Accessibility -- can you find them online, in communities, via ads? |
| "Is this market growing?" | Trend -- growing market lifts all boats |

## Step 5: Apply Additional Filters

### Low-Status Business Test
For each niche, apply this gut check:

> "Imagine telling your grandma about this business. If she says 'That's a good idea!' -- bad sign. It's probably sexy and competitive. If she says 'Oh... good for you, dear' -- good sign. It's boring, unsexy, and probably viable."

Ask the user: "Which of your niches would get the 'good for you, dear' response?"

### Premium Market Check
For each niche, ask:

> "Who are you targeting? The 90% mass market (hard mode, race to the bottom), the 9% premium market (sweet spot, willing to pay for expertise), or the 1% luxury market (exclusive, high-touch)?"

If they're targeting mass market, challenge them: "Could you find a richer subset of this audience? For example, instead of 'small business owners,' could you target 'dentists' or 'e-commerce brands doing $1M+'?"

## Step 6: Display Scoring Table

Show all niches in a markdown table, sorted by total green scores (most greens first):

```markdown
| # | Niche | Person | Taki 1 | Taki 2 | Taki 3 | Hormozi 1 | Hormozi 2 | Hormozi 3 | Hormozi 4 | Greens | Low-Status | Premium |
|---|-------|--------|--------|--------|--------|-----------|-----------|-----------|-----------|--------|------------|---------|
| 1 | ...   | ...    | G      | G      | Y      | G         | G         | G         | Y         | 5/7    | Yes        | 9%      |
```

## Step 7: Journaling Prompts to Break Ties

If the top 2-3 niches are close in score, use these tie-breaker prompts. Ask one at a time:

1. **2-Year Test**: "Which of these could you see yourself doing for 2-3 years, even if growth is slow at first?"
2. **No-Fail Scenario**: "If success was guaranteed, which one would you choose?"
3. **Identity Check**: "Which one aligns with the person you want to become?"
4. **Fear Check**: "Which one scares you a little -- in a good way?"

## Step 8: Select Gold / Silver / Bronze

Ask the user to make their final picks:

- **Gold Niche**: The one you're going all-in on first. This is your primary focus.
- **Silver Niche**: Strong backup. If Gold doesn't validate, pivot here.
- **Bronze Niche**: Worth remembering. Park it for later.

Confirm the selection: restate each as Person + Problem + Promise.

## Save Output

1. Write the complete scoring to `workspace/sessions/{name}/02-niches.md` with:
   - All structured niches (Person + Problem + Promise)
   - Full scoring table with both frameworks
   - Filter results (Low-Status, Premium Market)
   - Journaling prompt responses
   - Gold / Silver / Bronze selections clearly marked
   - Rationale for the Gold pick

2. Update `workspace/sessions/{name}/00-session.md`:
   - Change Phase 2 Niche status from `[ ] Not Started` to `[x] Complete`
   - Set Active Phase to "Phase 3: Offer"
   - Set Next Recommended to "Phase 3: Offer"
   - Fill in the "Gold Niche" section with Person / Problem / Promise

3. Tell the user: "Niche phase complete! Your Gold niche is: [Person] who struggle with [Problem] -- you'll deliver [Promise]. When you're ready, run `/sk-offer` to build your Grand Slam Offer around this niche."
