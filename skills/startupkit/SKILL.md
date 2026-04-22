---
name: startupkit
description: Master orchestrator for the Startup Ideation Kit. Creates new brainstorming sessions, shows progress, and navigates between 11 phases.
---

# StartupKit -- Master Orchestrator

You are the entry point for the Startup Ideation Kit. Your job is to manage brainstorming sessions and guide the user through the ideation phases.

## Session Management

### On invocation, determine the mode:

**If the user provided a session name as args:**
- Look for `workspace/sessions/{name}/00-session.md`
- If found, load it and show the progress dashboard
- If not found, offer to create it

**If no args provided:**
1. Check `workspace/sessions/` for existing session folders
2. If sessions exist, list them with their status (read each `00-session.md` frontmatter `session.status`)
3. Offer two options:
   - Continue an existing session (ask which one)
   - Create a new session

### Creating a new session:
1. Ask for a session name (kebab-case, e.g., `ai-coaching-biz`)
2. Create the folder `workspace/sessions/{name}/`
3. Copy the `templates/session-template.md` file (located in this skill's directory) to `workspace/sessions/{name}/00-session.md`
4. Fill in frontmatter values (`session.name`, `session.created`, `session.updated`) and the markdown header date
5. Show the progress dashboard

## Progress Dashboard

Read `00-session.md` and display a clear summary from YAML frontmatter:

```
Session: {name}
Created: {date} | Status: {status}

Phase Progress:
  1. [x] Diverge       -- Divergent Thinking         /sk-diverge
  2. [ ] Niche         -- Convergence & Scoring       /sk-niche
  3. [ ] Competitors   -- Competitive Research        /sk-competitors
  4. [ ] Positioning   -- Market Positioning          /sk-positioning
  5. [ ] Offer         -- Grand Slam Offer            /sk-offer
  6. [ ] Validate      -- Validation Plan             /sk-validate
  7. [ ] Money         -- Money Model                 /sk-money
  8. [ ] Leads         -- Lead & Nurture Strategy     /sk-leads
  9. [ ] Skills        -- AI Skills Match             /sk-skills
 10. [ ] Pitch         -- Investor Pitch              /sk-pitch
 11. [ ] Export        -- One-Pager Export             /sk-export

Next recommended: /sk-niche
```

Use frontmatter state mapping:
- `not_started` -> `[ ]`
- `in_progress` -> `[~]`
- `complete` -> `[x]`

If the session file has no frontmatter, migrate once using `references/session-state-protocol.md` and then continue using frontmatter as the source of truth.

### Founder Wisdom

Convene the relevant Domain Expert Board based on the user's current phase. When displaying the session dashboard, include one relevant board perspective that rotates based on phase. Present the Board's collective view — not just a single quote.

## Phase Navigation

List all 11 phases with their slash commands:

| # | Phase | Command | What it does |
|---|-------|---------|-------------|
| 1 | Diverge | `/sk-diverge` | Brainstorm skills, passions, problems -- generate 20-50+ raw ideas |
| 2 | Niche | `/sk-niche` | Score and rank niches using Taki Moore 3Q + Hormozi 4-criteria |
| 3 | Competitors | `/sk-competitors` | Deep competitive research with battle cards, pricing landscape |
| 4 | Positioning | `/sk-positioning` | Market positioning with April Dunford 5+1 framework |
| 5 | Offer | `/sk-offer` | Build a Grand Slam Offer with Six P's and Value Equation |
| 6 | Validate | `/sk-validate` | Plan discovery calls, outreach scripts, MVP, and milestones |
| 7 | Money | `/sk-money` | Design pricing, offer ladder, and revenue projections |
| 8 | Leads | `/sk-leads` | Choose lead channels, build nurture sequence, optimize show rate |
| 9 | Skills | `/sk-skills` | Match 7 AI skills to your business as core, bonus, or upsell |
| 10 | Pitch | `/sk-pitch` | Build investor-ready pitch scripts in multiple formats |
| 11 | Export | `/sk-export` | Generate a clean one-pager summarizing the entire session |

**Recommend the next phase** based on progress -- the first incomplete phase in order. But make clear the user can jump to any phase at any time. Phases are not forced sequential.

## Important

- Always work within `workspace/sessions/{name}/` for the active session
- Each phase skill reads prior phase output files, so earlier phases provide context for later ones. Phases 3, 4, and 10 also create subdirectories with detailed deliverables (battle cards, positioning statements, pitch formats).
- If the user wants to redo a phase, that is fine -- the skill will overwrite the existing file

## Legacy Session Detection

Before 8-phase detection, check for missing frontmatter in `00-session.md`. If missing, run one-shot migration from the markdown progress table into frontmatter state as defined in `references/session-state-protocol.md`.

When loading a session, check if it uses the old 8-phase format by looking for `03-offer.md` (in the new format, Phase 3 is Competitors, not Offer).

If `03-offer.md` exists AND does NOT contain "Competitive Research" in the title:
1. Tell the user: "This session uses the old 8-phase format. I can migrate it to the new 11-phase format (renaming files to the new numbering). The new format adds competitive research, market positioning, and investor pitch phases."
2. If the user agrees, rename:
   - `03-offer.md` -> `05-offer.md`
   - `04-validation.md` -> `06-validation.md`
   - `05-money-model.md` -> `07-money-model.md`
   - `06-lead-strategy.md` -> `08-lead-strategy.md`
   - `07-skills-match.md` -> `09-skills-match.md`
   - `08-one-pager.md` -> `11-one-pager.md`
3. Regenerate `00-session.md` from the 11-phase template, preserving Gold Niche, Core Offer, and Session Notes data.
4. Mark new phases (3 Competitors, 4 Positioning, 10 Pitch) as "Not Started".

---

## Domain Expert Boards

StartupKit uses 7 Domain Expert Boards to provide collective founder counsel. Each Board groups founders by their area of proven expertise.

### Board 1: Opportunity & Vision
**Domain:** Spotting opportunities, first-principles thinking, when to bet, contrarian conviction
**Members:** Jeff Bezos, Edwin Land, Peter Thiel, Elon Musk, Marc Andreessen, Steve Jobs, Aristotle Onassis

### Board 2: Market Focus
**Domain:** Niche selection, specialization, circle of competence, market sizing
**Members:** Sam Walton, Charlie Munger, Joe Coulombe, Todd Graves, Warren Buffett, Yvon Chouinard, David Packard

### Board 3: Competitive Strategy
**Domain:** Moats, differentiation, competitive response, category creation
**Members:** Jeff Bezos, Sam Walton, Naval Ravikant, Richard Branson, David Ogilvy, Bernard Arnault, MrBeast

### Board 4: Value & Pricing
**Domain:** Offer construction, pricing strategy, value creation, financial discipline
**Members:** Jeff Bezos, Charlie Munger, James Dyson, Joe Coulombe, Henry Ford, Ted Turner, Red Bull (Mateschitz)

### Board 5: Customer & Validation
**Domain:** Customer discovery, validation, MVP testing, market feedback
**Members:** Jeff Bezos, Sam Walton, Claude Hopkins, Todd Graves, Estée Lauder, Phil Knight, David Packard

### Board 6: Storytelling & Persuasion
**Domain:** Pitching, narrative, brand communication, fundraising
**Members:** Steve Jobs, David Ogilvy, Oprah Winfrey, Richard Branson, Arnold Schwarzenegger, Aristotle Onassis, Anna Wintour

### Board 7: Craft & Execution
**Domain:** Skill mastery, operational excellence, tool leverage, focus
**Members:** Edwin Land, Steve Jobs, Thomas Edison, Tiger Woods, Yvon Chouinard, Demis Hassabis, Sam Zemurray

### Phase-to-Board Mapping

| Phase | Primary Board | Secondary Board |
|-------|--------------|-----------------|
| 1 Diverge | Opportunity & Vision | Craft & Execution |
| 2 Niche | Market Focus | Opportunity & Vision |
| 3 Competitors | Competitive Strategy | Market Focus |
| 4 Positioning | Competitive Strategy | Storytelling & Persuasion |
| 5 Offer | Value & Pricing | Customer & Validation |
| 6 Validate | Customer & Validation | Craft & Execution |
| 7 Money | Value & Pricing | Market Focus |
| 8 Leads | Customer & Validation | Storytelling & Persuasion |
| 9 Skills | Craft & Execution | Opportunity & Vision |
| 10 Pitch | Storytelling & Persuasion | Opportunity & Vision |
| 11 Export | Storytelling & Persuasion | (Best-of-all) |

### Fear of failure is the true enemy of creativity
**Founder:** "Edwin Land" | **Episode:** "Edwin Land (Polaroid vs Kodak)"
> "An essential aspect of creativity is not being afraid to fail."

**Context:** Land ran Polaroid's research labs with an unusual tolerance for dead ends. He believed that the willingness to be wrong was itself a creative act. Protecting researchers from career consequences of failure was structural to his innovation engine.
**Application:** In early-stage teams, decouple experimentation from performance review. Reward attempted learning even when the experiment fails.

---

### The people in the room are not the people on the ground
**Founder:** "Sam Zemurray" | **Episode:** "Sam Zemurray (The Banana King)"
> "Those schmucks, what do they know, they're there, we're here."

**Context:** When United Fruit's distant board dismissed Zemurray's warnings about opportunities and threats they couldn't see from Boston, he used the gap between their knowledge and his as a competitive weapon. His proximity to the market was his edge.
**Application:** Startups should exploit incumbents' informational distance from the customer. Be the person who is physically, temporally, and intellectually closest to the problem.

---

### Great businesspeople act on instinct before certainty arrives
**Founder:** "Sam Zemurray" | **Episode:** "Sam Zemurray (The Banana King)"
> "A good businessman feels those moments like a fall in the barometric pressure. A great businessman is dumb enough to act on them even when he cannot afford to."

**Context:** Zemurray described a quality of elite operators as sensing shifts in market conditions—what he called a fall in barometric pressure—before those shifts became visible in data. The willingness to act on incomplete information was itself the edge.
**Application:** In fast-moving markets, waiting for certainty means arriving second. Develop decision heuristics that let you act on 70% information when speed matters.

---

### Commit fully or exit cleanly—half-measures destroy both options
**Founder:** "Sam Zemurray" | **Episode:** "Sam Zemurray (The Banana King)"
> "Go all in or get out."

**Context:** Zemurray observed that the most common failure pattern was partial commitment: companies that invested enough to preclude retreat but not enough to win. He operated with extreme decisiveness once he had chosen a direction.
**Application:** When allocating resources to a new product line, market, or acquisition: either staff it to win or do not start. Half-staffed initiatives consume morale and capital with no path to success.

---

### Speed of decision requires clarity of strategy
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos"
> "No. Things are changing fast. I need to move quickly."

**Context:** Bezos made a defining career decision—leaving DE Shaw to start Amazon—by resolving the ambiguity quickly through what he called a "regret minimization framework." When conditions are changing rapidly, the cost of delay in deciding can exceed the cost of being slightly wrong.
**Application:** Build explicit decision frameworks for your most common high-stakes choices (hiring, pricing, feature prioritization) so that speed of execution does not require reconstructing the logic each time.

---

### A strong perspective multiplies intellectual effectiveness
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos"
> "A point of view is worth 80 IQ points."

**Context:** Bezos repeatedly demonstrated that a well-formed point of view—even a tentative one—dramatically improves the quality and speed of thinking. He attributed this insight to observations about how the best thinkers operated.
**Application:** In team discussions and product decisions, encourage people to come with a stated position rather than an open question. Positions can be changed; empty deliberation cannot be.

---

### Conviction without vision—just relentless customer focus
**Founder:** "Sam Walton" | **Episode:** "Sam Walton: The Inside Story of America's Richest Man"
> "I had no vision of the scope of what I would start, but I always had confidence that as long as we did our work well and we were good to our customers, there would be no limit to us."

**Context:** Walton was candid that he did not have a grand strategic vision at the start. He focused exclusively on customer value and operational excellence, and described his growth as an emergent consequence of those commitments rather than a planned strategy.
**Application:** A founder does not need a 10-year vision to build a category-defining company. A fanatical commitment to customer value and operational execution will generate strategic optionality faster than strategic planning.

---

### Outsiders who become insiders often end up controlling the center
**Founder:** "Colin Chapman, Bernie Ecclestone, Dietrich Mateschitz" | **Episode:** "How Geniuses and Speed Freaks Reengineered Formula 1 into the World's Most Valuable Sport"
> "Those on the margin often come to control the center."

**Context:** Both Ecclestone and Mateschitz began as outsiders to their respective industries (motorsport governance and mainstream beverages) and used that outsider perspective to identify leverage points that insiders were blind to. Their marginality became their advantage.
**Application:** Founders entering established industries should resist the urge to immediately adopt industry conventions. The outsider's view—which sees the industry's assumptions as choices rather than facts—is a depletable asset. Use it early.

---

### Total commitment to execution removes obstacles that feel permanent
**Founder:** "Edwin Land" | **Episode:** "Insisting on the Impossible: The Life of Edwin Land"
> "From then on I was totally stubborn about being blocked. Nothing or nobody could stop me from carrying through the execution of the experiments."

**Context:** Land described a formative experience early in his career when he decided to pursue polarized light research despite having no institutional support, no lab, and no credentials. The moment of total commitment—what he called refusing to be blocked—unlocked a series of resources and opportunities that had been invisible before the commitment.
**Application:** Many startup obstacles exist only as long as the founder is uncertain about whether to proceed. Full commitment changes what people offer you, what risks you take, and what creative solutions you find.

---

### Compete for your own internal standards, not external validation
**Founder:** "Tiger Woods" | **Episode:** "Tiger Woods"
> "I know I'm better than this...I'm not satisfied. This doesn't mean anything if I don't get better."

**Context:** Tiger's internal drive was oriented entirely around his own standards. When he won, he analyzed what he did wrong. When he lost, he studied what to fix. He was relatively indifferent to external opinions because the internal scorecard was the only one he took seriously.
**Application:** Build your internal scorecard before you need it. Know specifically what "excellent" looks like by your own definition. External praise is a lagging indicator; your internal standard is a leading one.

---

### Use the regret minimization framework to make irreversible decisions
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos (Shareholder Letters and Speeches)"
> "I wanted to project myself forward to age 80 and say, 'Okay, now I'm looking back on my life. I want to have minimized the number of regrets I have.' I knew that when I was 80 I was not going to regret having tried this. I was not going to regret trying to participate in this thing called the Internet that I thought was going to be a really big deal."

**Context:** When Bezos decided to leave a lucrative hedge fund job to start Amazon, he invented the regret minimization framework: project yourself to age 80 and ask which choice you would regret more. The framework separated short-term fear from long-term values.
**Application:** When facing a major irreversible decision, use the 80-year-old perspective test. Short-term fear optimizes for safety; long-term regret minimization optimizes for the decisions you will actually be proud of. Fear is a bad long-term advisor.

---

### Prioritize long-term thinking over short-term financial optimization
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos (Shareholder Letters and Speeches)"
> "We will continue to make investment decisions in light of long-term market leadership considerations rather than short-term profitability considerations or short-term Wall Street reactions."

**Context:** From the first shareholder letter, Bezos told investors that Amazon would make decisions that sacrificed short-term earnings for long-term market position. He believed the market rewarded genuine long-term thinking and that most companies could not sustain it under quarterly earnings pressure.
**Application:** Explicitly tell your team—and your investors—what time horizon you are optimizing for. Ambiguity on this point causes internal conflict. Long-term companies must be willing to accept short-term misunderstanding.

---

### Make high-quality decisions with heart and intuition, not just analysis
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos (Shareholder Letters and Speeches)"
> "All of my best decisions in business and in life have been made with heart, intuition, and guts—not analysis. When you can make a decision with analysis, you should do so. But it turns out in life that your most important decisions are always made with instinct and intuition, taste and heart."

**Context:** Bezos observed that his best decisions were made with heart, intuition, and gut—not analysis. Analysis is necessary but insufficient. The best decisions happen when instinct and analysis agree; when they conflict, instinct often carries more information than the model.
**Application:** Develop your intuition deliberately by accumulating domain experience and exposing yourself to great examples in your field. Intuition is compressed experience, not the absence of thinking. Train it intentionally.

---

### Maintain Day 1 thinking by treating every day as the first day of the company
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters"
> "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1. To be sure, this kind of decline would happen in extreme slow motion. An established company might harvest Day 2 for decades, but the final outcome would still come."

**Context:** Bezos devoted enormous energy to explaining the difference between Day 1 (startup urgency, customer obsession, willingness to invent) and Day 2 (stasis, irrelevance, painful decline, death). He named his headquarters building "Day 1" to make the commitment visible.
**Application:** Diagnose whether your organization is in Day 1 or Day 2 mode by checking your actual decision-making speed, your proximity to customers, and your tolerance for experiments that fail. Day 2 is a culture problem before it is a performance problem.

---

### Resist process becoming a substitute for judgment
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters"
> "Good process serves you so you can serve customers. But if you're not watchful, the process can become the thing. This can happen very easily in large organizations. The process becomes the proxy for the result you want. You stop looking at outcomes and just make sure you're doing the process right."

**Context:** Bezos identified a specific failure mode in maturing companies: they confuse the process with the outcome. Teams follow the process and call it success, even when the outcome is poor. The process was designed to produce outcomes; when it stops doing so, the process must change, not be defended.
**Application:** Audit your key processes quarterly: what outcome was this process designed to produce, and is it still producing it? When the answer is no, kill the process before it hardens into organizational mythology.

---

### Study this story as a manual for what never to do as a leader
**Founder:** "William Shockley" | **Episode:** "William Shockley (Creator of the Electronic Age)"
> "The story of William Shockley is really a cautionary tale. He was perhaps the most brilliant man to ever be involved in the semiconductor industry. And yet, despite all of his brilliance, he failed completely...his story is really an education in what never to do."

**Context:** David Senra presents Shockley as an anti-case study. Shockley was the most technically brilliant person in his field but built a company that failed completely—not because of bad technology but because of how he treated people. The traitorous eight who left founded Fairchild Semiconductor, Intel, and the entire Silicon Valley ecosystem.
**Application:** Technical brilliance is not a sufficient condition for building a great company. Study Shockley's failures as carefully as you study great founder success stories. The failure modes are more instructive precisely because Shockley had no excuse—he had the talent, the resources, and the timing.

---

### Unmanaged ego poisons team dynamics and destroys the feedback loop you need to survive
**Founder:** "William Shockley" | **Episode:** "William Shockley (Creator of the Electronic Age)"
> "He had an incredible ego and inability to accept that he might be wrong...He would not accept the word of people who worked for him and actually came to believe his own employees were out to sabotage him."

**Context:** Shockley's ego required him to be the smartest person in every room. When he hired talented engineers, he immediately perceived them as threats rather than multipliers. He withheld credit, changed the subject when outperformed, and eventually began competing against his own team—the people he hired to help him.
**Application:** Your ego should help you project confidence to the market, not compete for credit internally. Great leaders direct their competitive instincts outward toward competitors and problems, not inward toward their team. If you find yourself threatened by a subordinate's competence, that is diagnostic of a leadership problem.

---

### Never blame external forces for failures that originate internally
**Founder:** "William Shockley" | **Episode:** "William Shockley (Creator of the Electronic Age)"
> "He never truly learned from his mistakes...Instead of looking inward, he always looked outward for the source of his problems."

**Context:** When Shockley Semiconductor failed, Shockley blamed his employees—claiming they were saboteurs, incompetents, and conspirators. He never acknowledged that the management environment he created was the actual cause of the talent exodus.
**Application:** After any significant failure, do a root cause analysis that starts with your own decisions. External factors matter but are rarely the primary cause when talented people leave or when execution fails despite good resources. Leaders who externalize blame repeat the same failure.

---

### Choose your mission over money, then use resources to accelerate the mission
**Founder:** "Demis Hassabis" | **Episode:** "The Relentless Missionary Creating AGI: Demis Hassabis"
> "Would I be happier looking back on building a multi-billion dollar company or helping solve intelligence? It was an easy choice."

**Context:** Demis sold DeepMind to Google not for personal wealth but to escape the "fundraising hamster wheel" and access unlimited compute. He explicitly chose scientific achievement over building a standalone billion-dollar company.
**Application:** When evaluating acquisition or partnership offers, ask whether the deal accelerates your mission or merely your net worth. Sometimes selling early to a resource-rich partner is the strategically correct move.

---

### Missionary entrepreneurs outcompete mercenaries in long-duration games
**Founder:** "Demis Hassabis" | **Episode:** "The Relentless Missionary Creating AGI: Demis Hassabis"
> "The good thing about missionaries is that they never quit. Even if they have to work around the clock and pay themselves nothing, they will keep obsessing about the problem."

**Context:** Peter Thiel's analysis of Demis captured a pattern: missionaries who feel compelled to work on a specific challenge will outwork, out-persist, and outlast founders motivated primarily by financial returns.
**Application:** Interrogate your own motivation honestly. If you're building a company primarily for wealth, you will likely quit when the going gets brutal. Identify a problem you genuinely cannot stop thinking about.

---

### Combine grand ambition with brutal pragmatism simultaneously
**Founder:** "Demis Hassabis" | **Episode:** "The Relentless Missionary Creating AGI: Demis Hassabis"
> "When he stayed awake into the small hours of the morning, reading and thinking and dreaming, he reveled in his maximalist ambition...when he arrived at the office the next day, he focused on getting to the next rung of the latter."

**Context:** Demis kept two modes: late-night reading and dreaming (maximalist vision) and daytime execution (focus on the next rung of the ladder). He never let one crowd out the other.
**Application:** Schedule time for unbounded strategic thinking separately from tactical execution time. Guard both blocks. Most founders collapse one into the other and end up with neither vision nor progress.

---

### Invert every problem before trying to solve it
**Founder:** "Li Lu / Charlie Munger / Warren Buffett" | **Episode:** "Li Lu and Charlie Munger and Warren Buffett"
> "When Charlie thinks about things, he starts by inverting. To understand how to be happy in life, Charlie will study how to make life miserable. To examine how a business becomes big and strong, Charlie first studies how businesses decline and die."

**Context:** Charlie Munger's signature thinking method. To understand how to succeed, he first studies failure. To understand happiness, he studies misery. He has spent a lifetime cataloguing notable failures into a decision-making checklist.
**Application:** Before planning a strategy, map the ways it most commonly fails. Build a personal anti-checklist of catastrophic mistakes to avoid.

---

### Know which 5% you are — and invest accordingly
**Founder:** "Li Lu / Charlie Munger / Warren Buffett" | **Episode:** "Li Lu and Charlie Munger and Warren Buffett"
> "Your biggest challenge is really to understand whether you're that 5% of people or you're like the 95% of the majority. And I think this is overlooked and really excellent advice because this is key to enjoying the game."

**Context:** Li Lu told Columbia MBA students that 95% of the market is designed for traders. Only ~5% think like Buffett, Munger, or Li Lu. You must first honestly assess your own temperament before adopting any investment or business philosophy.
**Application:** Before copying a successful founder or investor's playbook, ask whether their temperament matches yours. A strategy authentic to who you are compounds; a mismatched strategy erodes.

---

### Effort is the least common commodity
**Founder:** "Li Lu / Charlie Munger / Warren Buffett" | **Episode:** "Li Lu and Charlie Munger and Warren Buffett"
> "Common sense is the least common commodity. Most people don't think that way... You know what else is a least common commodity? Effort and hard work over a sustained period of time. Most of humanity is incapable of doing so."

**Context:** Li Lu repeatedly returned to the theme that hard, sustained effort over time eliminates most competition. He read every legal document in every court case before investing in Timberland when no analyst was covering it.
**Application:** Use extraordinary effort as your competitive moat. If you are willing to read every document, visit every factory, and ask every question, you will operate in a nearly uncontested space.

---

### Do not be right because others agree; be right because your reasoning is sound
**Founder:** "Li Lu / Charlie Munger / Warren Buffett" | **Episode:** "Li Lu and Charlie Munger and Warren Buffett"
> "You would naturally adopt the attitude that you're right, not because other people agree with you, but because your reasoning and your evidence showed you that you're right."

**Context:** Buffett and Li Lu both stress independence of thought. Value investors are naturally a minority and must resist social consensus to act on their own analysis.
**Application:** Build systems for checking reasoning, not for polling opinion. Seek disconfirming evidence from primary sources, not from other people's conclusions.

---

### Your craft must match you — love your harvest
**Founder:** "Estée Lauder" | **Episode:** "Estée Lauder"
> "I believed in my product. I loved my product. A person has to love her harvest if she's to expect others to love it."

**Context:** Estée Lauder reflected that had she tried to sell cars or furniture, she doubts she would have risen to the top. Her obsession with beauty predated her business by decades and became its fuel.
**Application:** Audit whether your business is authentically yours. Passion is not a nice-to-have — it is the engine that sustains the decades of effort required to win.

---

### Risk-taking is the cornerstone of empires
**Founder:** "Estée Lauder" | **Episode:** "Estée Lauder"
> "Risk-taking is the cornerstone of empires. No one ever became a success without taking chances."

**Context:** When the Saks Fifth Avenue buyer gave her a small $800 order, Lauder invested all her savings to rent production space and build enough inventory to never let Saks run out. She risked everything on a single moment of opportunity.
**Application:** When the pivotal opportunity arrives, resist under-betting it. Estée's response to her first Saks order was total commitment, not cautious testing.

---

### It is all about the long term — say it until people believe it
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos' Shareholder Letters"
> "We don't claim it's the right philosophy we just claim it's ours."

**Context:** Bezos attached his 1997 letter to every subsequent letter for over a decade. He understood that few new shareholders would have read the founding document, and that repetition of principles over years is how culture is actually installed.
**Application:** Write down your operating principles once, with full conviction. Then repeat them relentlessly — in every all-hands, every letter, every onboarding. The goal is internalization, not novelty.

---

### Step by step, ferociously
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos' Shareholder Letters"
> "Step by step ferociously."

**Context:** Bezos used this phrase to capture the paradox of Amazon's approach — patient about the destination, ferocious about the daily pace of execution. Patient and urgent simultaneously.
**Application:** Long-term thinking does not mean slow execution. Maintain urgency within your time horizon. Relentlessness and patience are not opposites.

---

### He didn't want to fail, but he wasn't afraid of it
**Founder:** "Elon Musk" | **Episode:** "Elon Musk and The Early Days of SpaceX"
> "He didn't want to fail, but he wasn't afraid of it. That is another contrast between SpaceX and the legacy aerospace companies. They become calcified. They're so terrified of taking any risk that could lead to potential failure."

**Context:** Elon's risk tolerance was a core differentiator from legacy aerospace companies that had become calcified by fear of failure. He built failure tolerance directly into SpaceX's culture.
**Application:** Distinguish between wanting to avoid failure and being paralyzed by fear of it. Design your organization so that controlled failure is the fastest path to success.

---

### Stay near the front — the back shows you reasons to quit
**Founder:** "Alistair Urquhart" | **Episode:** "Alistair Urquhart (Listen to this when you're stressed)"
> "The benefit of being near the front was that you saw fewer men surrendering to fatigue, illness and death."

**Context:** On the death march through the Malayan jungle, Alistair noticed that soldiers at the rear watched others collapse and die, triggering their own surrender. Staying near the front meant seeing only the path forward.
**Application:** Curate your informational environment. Constant exposure to peers who are quitting, failing, or suffering lowers your own threshold to give up. Position yourself near the front — near people who are moving forward.

---

### There is no such word as can't
**Founder:** "Alistair Urquhart" | **Episode:** "Alistair Urquhart (Listen to this when you're stressed)"
> "There is no such word as can't. I have not allowed my life to be blighted by bitterness. I have lived a long life and continue to live it to the fullest."

**Context:** Alistair survived malaria, dysentery, tropical ulcers, the death railway, a torpedoed hellship, five days adrift at sea, and an atomic bomb blast at Nagasaki. He distilled all of it into one life motto.
**Application:** When confronting obstacles, audit your language. Replace "I can't" with "I haven't yet" or "what would it take?" Linguistic frames precede behavior.

---

### Something to live for beyond yourself extends survival
**Founder:** "Alistair Urquhart" | **Episode:** "Alistair Urquhart (Listen to this when you're stressed)"
> "A lot of the men were married and would talk about their families back home. These slightly older men in the 30s and 40s survived in much greater numbers. Surprisingly, it was the young men who died first on the railway. The older men had families that they had to live for."

**Context:** On the death railway, older men with families survived at higher rates than young, single men. Having a reason that transcends personal survival — children, a spouse, a mission — is a physiological force multiplier.
**Application:** When building a company, anchor your mission to something larger than personal success. This is not purely motivational rhetoric — it is a resilience mechanism that sustains execution through prolonged adversity.

---

### Get action — man was never intended to become an oyster
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt"
> "Get action, he said. Seize the moment. Man was never intended to become an oyster."

**Context:** Theodore Roosevelt Sr. gave this life motto to his son, who internalized it completely. TR spent his entire life in relentless action — reading 50 books in five weeks on a train tour, writing dozens of books, pursuing political office, hunting, ranching, and governing simultaneously.
**Application:** Inertia is a choice. When facing a decision, bias toward action over analysis. The cost of inaction compounds invisibly; the cost of imperfect action is visible and correctable.

---

### Deal with emotional pain through physical exertion
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt"
> "He loved to row in the hottest sun over the roughest water in the smallest boat... Look out for Theodore, the doctor said — he's not strong but he's all grit. He'll kill himself before he'll even say he's tired."

**Context:** When his father died, TR threw himself into physical activity. When his mother and wife died on the same day, he left for the Dakota Badlands and spent years ranching. He systematically used physical intensity to metabolize grief and setback.
**Application:** Build a physical practice that serves as a reset valve. When stress or grief accumulate, do not suppress them — discharge them physically. This is a documented pattern in high performers across history.

---

### You must make your body
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt"
> "Theodore, you have the mind, but you do not have the body. And without the help of the body, the mind cannot go as far as it should. He must build himself up, he must build himself up by his own effort. You must make your body."

**Context:** TR was a sickly asthmatic child who could not hold a book without trembling. His father delivered a famous challenge: "Theodore, you have the mind, but you do not have the body. And without the help of the body, the mind cannot go as far as it should. You must make your body."
**Application:** Physical capacity is not a given; it is built. Treat fitness as a professional investment, not a personal indulgence. The body is the platform on which all other performance runs.

---

### The stories we are exposed to shape the future experiences we pursue
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt"
> "It was from the heroes of my favorite stories, from hearing of the feats performed by my southern forefathers, and from knowing my father that I felt great admiration for men who were fearless, and I had a great desire to be like them."

**Context:** TR's mother filled his childhood asthma attacks with stories of heroic ancestors. These stories created the heroes he wanted to emulate — and shaped who he became.
**Application:** Be intentional about the stories you consume and the stories you tell your team. The narratives around you become the templates for your future action.

---

### Always be early — and never waste waiting time
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt"
> "As long as I have a book in my hand I don't feel like I'm wasting time."

**Context:** Charlie Munger (echoed in this episode's framing) was always early to every meeting and simply read until his companion arrived. Time is the most finite resource; treat gaps between commitments as reading time, not idle time.
**Application:** Structure your environment so that waiting time defaults to reading or reflection. Carry a book. Treat a delayed flight as gifted reading time. Over a lifetime this compounds into thousands of hours.

---

<!-- Truncated to stay under 350 lines -->
