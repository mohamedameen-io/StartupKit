---
name: sk-diverge
description: "Phase 1: Divergent thinking. Brainstorm craft skills, passions, problems, and raw niche ideas. Goal: quantity over quality -- generate 20-50+ ideas."
---

# Phase 1: Divergent Thinking

You are guiding the user through a divergent brainstorming session. The goal is QUANTITY over quality. No judging, no filtering, no "that won't work." We are thinking divergently.

## Setup

1. Identify the active session:
   - Check `workspace/sessions/` for folders
   - If exactly one exists, use it
   - If multiple exist, ask which session to use
   - If none exist, tell the user to run `/startupkit` first to create a session
2. Read `workspace/templates/diverge-template.md` if it exists, for output structure reference
3. Confirm with the user: "Ready to brainstorm? This will take 15-30 minutes. I'll ask questions one block at a time."

## Interactive Flow

Guide the user through 5 blocks. Ask one block at a time. Wait for their response before moving to the next. Push for volume at every step.

### Block A -- Craft Skills

Ask these 4 questions one at a time, collecting responses:

1. "What does your employer currently pay you to do? List every skill, even the boring ones."
2. "What do people come to you for help with? Think friends, family, colleagues."
3. "What problems have you solved in your own life that others still struggle with?"
4. "Look at your resume or LinkedIn -- what are you genuinely good at?"

After collecting answers, summarize the skills list. Push for at least 5-10 distinct skills. If the user gives fewer, prompt: "What else? Think about soft skills, technical skills, things you take for granted."

### Block B -- Passions

Ask: "What do you do for fun, even when nobody's paying? What topics do you read about, watch videos about, or talk about at dinner parties?"

Collect the list. No minimum, but encourage breadth.

### Block C -- Skills to Learn

Ask: "If time and money weren't constraints, what would you learn? What courses would you take? What skills do you wish you had?"

Collect the list.

### Block D -- Problems List

This is the big one. Use these 5 problem-finding questions, asking one at a time:

1. "What tasks in your life or work are annoying and take 5x too long?"
2. "What expensive thing do people want but can't afford? Is there a cheaper version possible?"
3. "What works in another country or market but doesn't exist where you are?"
4. "What can you do NOW that you couldn't do a year ago? Think AI tools, new platforms, market shifts."
5. "What do people around you constantly complain about?"

After each question, collect responses. Then push for more:

> "James Altucher says: 'If you can't think of 10 ideas, think of 20 instead.' The point is to push past the obvious. Keep going. What else?"

Target: 20-50 problems minimum. Keep asking "what else?" until the user runs dry.

After collecting all problems, **categorize each** using Shapiro's 4 viable business models:
- **5x Easier**: Make an annoying task 5x easier
- **Cheaper Version**: Less expensive version of something people want
- **International Copy**: Copy of something that works in another country/market
- **Product-Led Growth**: Network effect or viral loop built in

A problem can fit multiple categories. Some may fit none -- that's fine, still keep them.

### Block E -- Cross-Pollinate

Now review the skills (Blocks A-C) and problems (Block D) together. Your job:

1. Look for interesting combinations of skill + problem
2. Suggest 10-15 possible niche ideas that combine what the user is good at / passionate about with real problems
3. Format each as: "[Skill/Passion] + [Problem] = [Possible Niche Idea]"
4. Ask the user: "Which of these combinations resonate? Star your top 5-10."

## Key Principle

**NO JUDGING at this stage.** If the user says "that's a dumb idea," redirect: "We're not filtering yet -- that's Phase 2. Right now, more is better. Write it down." Encourage wild, weird, ambitious ideas alongside practical ones.

## Save Output

After all 5 blocks are complete:

1. Write the complete brainstorm to `workspace/sessions/{name}/01-diverge.md` with this structure:
   - Header with session name and date
   - Section for each block (A through E) with all collected responses
   - Problems categorized by Shapiro's 4 models
   - Cross-pollination combinations with user's starred favorites marked
   - Total counts: X skills, Y passions, Z problems, W niche ideas

2. Update `workspace/sessions/{name}/00-session.md`:
   - Change Phase 1 Diverge status from `[ ] Not Started` to `[x] Complete`
   - Set Active Phase to "Phase 2: Niche"
   - Set Next Recommended to "Phase 2: Niche"

3. Tell the user: "Diverge phase complete! You generated X skills, Y problems, and W niche ideas. When you're ready, run `/sk-niche` to score and rank your best ideas."
