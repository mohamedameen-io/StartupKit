---
name: sk-skills
description: "Phase 9: Match your business idea with AI-powered skills from the skills catalog. Identify which skills could be your core offer, bonus, or upsell."
---

# Phase 9: AI Skills Matcher

You are the skills integration advisor. Your job is to evaluate each of the 7 AI-powered skills from the skills catalog against the user's selected niche and offer, then recommend how to integrate the best matches as core offer, bonus, or upsell.

## Setup

1. Ask the user for their session name.
2. Read context from previous phases:
   - `workspace/sessions/{name}/02-niches.md` for the Gold niche (who they serve, what problem)
   - `workspace/sessions/{name}/05-offer.md` for the Grand Slam Offer (what they sell, at what price)
3. Read the skills catalog: `references/skills-catalog.md` for the full 7 skills reference.
   - Read `workspace/sessions/{name}/07-money-model.md` if it exists for pricing and offer ladder context.
4. Summarize: "You're serving [Person] with [Offer] at $[Price]. Let's see which AI skills could amplify your business."

## Step 1: Skills Catalog Evaluation

Present each of the 7 skills in a reference table:

| Skill | What It Does | Pricing | Relevant When |
|-------|-------------|---------|---------------|
| Brand Clone | Extracts client's voice DNA, makes Claude write in their exact style | $1-2K setup + $200/mo | Clients need consistent voice across content/platforms |
| Weekly Autopilot Report | Auto-pulls metrics, generates formatted weekly reports | $1.5-3K setup + $300-500/mo | Clients spend hours on weekly reporting |
| Content Atomizer | Turns 1 long-form piece into 15+ platform-specific pieces | $2-3.5K setup + $500/mo | Clients create content but don't repurpose |
| Proposal Machine | Generates full proposals from 10-min intake form | $1.5-2.5K setup + $300/mo | Clients write 4+ proposals per month |
| Client Radar | Monitors CRM, flags renewals, churn risk, upsell signals | $2-3.5K setup + $400/mo | Clients manage 20+ ongoing client relationships |
| Support Shield | AI-powered first-response agent trained on company knowledge | $3-5K setup + $500/mo | Clients handle 50+ support tickets per day |
| Outreach Engine | Researches prospects, generates personalized outreach | $2.5-4K setup + $400/mo | Clients do outbound sales/prospecting |

## Step 2: Evaluate Each Skill Against the Niche

Go through each skill one at a time. For each:

1. **Explain the skill** in plain language: what it does, who it helps, what pain it removes.
2. **Assess relevance** to the user's Gold niche:
   - "Does your target client [Person] deal with [the problem this skill solves]?"
   - "How often does this come up in their workflow?"
   - "Would solving this save them meaningful time or money?"
3. **Rate the fit**: Strong / Moderate / Weak / Not Relevant
4. **Move on quickly** for skills rated Weak or Not Relevant -- don't belabor poor fits.

### Founder Technology Leverage

Convene the Craft & Execution Board for examples of how founders leveraged the "AI of their era":

- "Rockefeller used the telegraph for information advantages. Thomas Peterffy built automated trading machines. Henry Ford created the assembly line. Each used their era's technology to create an unfair advantage."
- When evaluating which AI skill fits best: "Which of these skills gives you the kind of advantage Rockefeller had with the telegraph -- information, speed, or execution that competitors can't match?"
- When discussing craft mastery: "Jiro Ono spent 60 years perfecting sushi. Rick Rubin's genius is in reduction -- removing everything unnecessary. What's the ONE skill you should obsess over?"

## Step 3: Integration Recommendations

For each skill rated Strong or Moderate, ask the user three positioning questions:

### Could this BE your core offer?
- "Could you sell [Skill] as a standalone service to [Person]?"
- "Is the pain [Skill] solves big enough to anchor your entire business around?"
- This works best when the skill directly addresses the Gold niche's primary problem.

### Could this be a BONUS to enhance your main offer?
- "Could you include [Skill] as a bonus inside [Offer Name] to increase perceived value?"
- "Would adding this make your offer feel like a 'no-brainer' compared to alternatives?"
- Bonuses work when the skill complements the main offer but isn't the core thing.

### Could this be an UPSELL or add-on?
- "After a client buys your core offer, would they pay extra for [Skill]?"
- "Could this be a $X/month add-on that increases your customer lifetime value?"
- Upsells work when the skill extends value beyond what the core offer delivers.

Record the user's answers for each relevant skill.

## Step 4: Generate Integration Plan

Based on the evaluation, synthesize recommendations:

### Primary Recommendation
- "Based on your niche of [X], the strongest fit is [Skill Y] because [specific reason tied to their niche and offer]."

### Bundle Opportunity
- If 2+ skills are relevant: "You could bundle [Skill A] + [Skill B] into a $X/month retainer that covers [combined value proposition]."
- Show the math: setup fees + monthly recurring = projected revenue.

### Attraction Offer Angle
- If any skill could work as a lead magnet: "Consider offering [Skill C] as a free goodwill attraction offer to get in the door. Do a free audit or demo, then upsell to the full implementation."

### Revenue Projection
For each recommended skill integration, calculate:
- Setup revenue: $X per client
- Monthly recurring: $X/month per client
- "If you land Y clients, that's $Z/month recurring on top of your core offer."

## Step 5: Final Skills Matrix

Display the complete evaluation in a summary table:

| Skill | Fit | Role | Revenue Potential | Priority |
|-------|-----|------|-------------------|----------|
| Brand Clone | Strong/Moderate/Weak | Core/Bonus/Upsell/N/A | $X setup + $Y/mo | High/Medium/Low |
| Weekly Autopilot Report | ... | ... | ... | ... |
| Content Atomizer | ... | ... | ... | ... |
| Proposal Machine | ... | ... | ... | ... |
| Client Radar | ... | ... | ... | ... |
| Support Shield | ... | ... | ... | ... |
| Outreach Engine | ... | ... | ... | ... |

## Save & Next

1. Save the complete skills match to `workspace/sessions/{name}/09-skills-match.md` with:
   - The skills catalog reference table
   - Individual evaluation for each skill (fit rating + reasoning)
   - Integration recommendations (core/bonus/upsell decisions)
   - Bundle opportunities and revenue projections
   - Final skills matrix summary
2. Update frontmatter in `workspace/sessions/{name}/00-session.md` (see `skills/startupkit/references/session-state-protocol.md`):
   - Set `phases[id=9].status: complete`
   - Set `session.activePhase: 10`
   - Set `session.nextPhase: 10`
   - Set `session.updated: [YYYY-MM-DD]`
3. Tell the user: "Skills matching complete! Your strongest fit is [Skill] as a [core/bonus/upsell]. When you're ready, run `/sk-pitch` to build investor-ready pitch materials, or `/sk-export` to generate a one-pager summary."

---

## Domain Expert Boards

### Craft & Execution Board

**Members:** Edwin Land, Steve Jobs, Thomas Edison, Tiger Woods, Yvon Chouinard, Demis Hassabis, Sam Zemurray
**Domain:** Skill mastery, operational excellence, tool leverage, focus

**Edwin Land's Position:**
> "My whole life has been spent trying to teach people that intense concentration for hour after hour can bring about in people resources they didn't know they had."
Land believed sustained focus—not raw intelligence—was the true differentiator.
**Application:** Structure deep work blocks of three or more hours; avoid context-switching.

**Edwin Land's Position:**
> "If anything is worth doing, it's worth doing to excess."
Land pursued excellence for its own sake.
**Application:** Hire people who go beyond stated requirements.

**Sam Zemurray's Position:**
> "There is no problem you can't solve if you understand your business from A to Z."
Zemurray refused to delegate understanding. He knew every part of the business.
**Application:** Touch every part of the business personally before delegating.

**Thomas Edison's Position:**
> [From Edison] Systematic invention, prolific experimentation.
Edison ran massive parallel experiments to find solutions.
**Application:** Run many experiments in parallel, not one at a time.

**Tiger Woods's Position:**
> [From Tiger] Deliberate practice, rebuilding a winning swing.
Tiger completely rebuilt his swing when it failed.
**Application:** Be willing to rebuild fundamentals when needed.

**Yvon Chouinard's Position:**
> [From Patagonia] Craft-first, let the product speak.
Chouinard built Patagonia by making the best climbing equipment first.
**Application:** Perfect your craft first. The brand grows from the product.

**Demis Hassabis's Position:**
> [From DeepMind] Technology leverage, AI as force multiplier.
Hassabis uses AI to accelerate research.
**Application:** Use tools that amplify your core capability.

**Board Tensions:**
- **Land (deep concentration, one thing at a time)** vs **Edison (prolific parallel experimentation)** — focus vs. breadth
- **Jobs (delegate and curate)** vs **Zemurray (do it yourself)** — vision vs. hands-on
- **Tiger (rebuild from scratch)** vs **Chouinard (trust organic process)** — radical vs. gradual

---

### Opportunity & Vision Board

**Members:** Jeff Bezos, Edwin Land, Peter Thiel, Elon Musk, Marc Andreessen, Steve Jobs, Aristotle Onassis
**Domain:** Spotting opportunities, first-principles thinking, when to bet, contrarian conviction

### Intense concentration unlocks hidden capacity
**Founder:** "Edwin Land" | **Episode:** "Edwin Land (Polaroid vs Kodak)"
> "My whole life has been spent trying to teach people that intense concentration for hour after hour can bring about in people resources they didn't know they had."

**Context:** Land believed that sustained, unbroken focus—not raw intelligence—was the true differentiator. He pushed his teams to work in extended concentrated sessions, treating endurance of thought as a trainable skill.
**Application:** Structure deep work blocks of three or more hours; avoid context-switching during core invention or problem-solving cycles.

---

### Total mastery of your business from A to Z solves every problem
**Founder:** "Sam Zemurray" | **Episode:** "Sam Zemurray (The Banana King)"
> "There is no problem you can't solve if you understand your business from A to Z."

**Context:** Zemurray refused to delegate understanding. He knew banana cultivation, shipping, ripening, distribution, and retail pricing with equal depth. This encyclopedic operational knowledge let him identify solutions that were invisible to generalist competitors and executives.
**Application:** Founders should spend the first 12-18 months touching every part of the business personally—sales calls, customer support, logistics—before delegating. Understanding precedes effective oversight.

---

### Radical simplification beats incremental improvement
**Founder:** "Colin Chapman, Bernie Ecclestone, Dietrich Mateschitz" | **Episode:** "How Geniuses and Speed Freaks Reengineered Formula 1 into the World's Most Valuable Sport"
> "Simplify, then add lightness."

**Context:** Colin Chapman, founder of Lotus Racing, became legendary for stripping every non-essential component from his race cars. While competitors added reinforcement and safety redundancy, Chapman removed everything that did not directly contribute to speed. This philosophy produced cars that were simultaneously faster and more fragile than anything else on the circuit.
**Application:** In product development, ask not "what should we add?" but "what can we remove?" Features and complexity compound maintenance cost and obscure the core value proposition.

---

### Excellence should be pursued as an end in itself
**Founder:** "Edwin Land" | **Episode:** "Insisting on the Impossible: The Life of Edwin Land"
> "If anything is worth doing, it's worth doing to excess."

**Context:** Land had a philosophy he called "excellence for the sake of excellence"—the belief that the quality of the work itself was the purpose, not the commercial outcome. This attracted researchers who cared about doing the best possible science, not the fastest acceptable science.
**Application:** When hiring for technical roles, look for people who have a history of going beyond the stated requirements—who improved something because it bothered them, not because they were asked. That internal standard is what creates exceptional products.

---

### Obsessive volume of work creates its own luck
**Founder:** "Edwin Land" | **Episode:** "Insisting on the Impossible: The Life of Edwin Land"
> "If anything is worth doing, it's worth doing to excess."

**Context:** Throughout his career, Land consistently outworked everyone around him. He read exhaustively, experimented relentlessly, and treated intellectual preparation as a form of practice that compounded over decades. His breakthroughs were not random—they were the result of having prepared more deeply than anyone else.
**Application:** In creative and technical fields, volume of deliberate practice matters more than raw talent. Build systems that support sustained deep work: protected time, reduced context switching, and access to the best raw materials (research, data, tools).

---

### Start obsessively early and compress a lifetime of practice into childhood
**Founder:** "Tiger Woods" | **Episode:** "Tiger Woods"
> "He was born to play golf. He was in my wife's womb when I was hitting golf balls...I started him as early as I did because I knew from personal experience that the earlier you start a child in any endeavor, the better chance they have of excelling."

**Context:** Earl Woods began training Tiger in the garage before he could walk, using a sawed-off club. By age two Tiger was practicing for hours. The total hours of deliberate practice Tiger accumulated before turning professional were extraordinary because the clock started at infancy.
**Application:** When building expertise in any domain, the compounding advantage of starting earlier is non-linear. If you are building a team, look for people who started obsessively early—their accumulated hours will far exceed what adult converts can replicate.

---

### Visualize in complete detail before executing
**Founder:** "Tiger Woods" | **Episode:** "Tiger Woods"
> "Tiger explained that he had been visualizing every shot in its entirety, picturing the ball's flight, its landing point, its roll, before he ever addressed the ball."

**Context:** Tiger developed the habit of visualizing every shot in full detail—trajectory, landing spot, roll—before stepping up to hit. This mental rehearsal was treated as seriously as physical practice and was part of his pre-shot routine on every single shot.
**Application:** Before executing any high-stakes action—a pitch, a negotiation, a product launch—run a complete mental simulation. The brain rehearses the neural pathway before the body executes it. This reduces error and increases confidence under pressure.

---

### Use psychological stress inoculation to build competitive toughness
**Founder:** "Tiger Woods" | **Episode:** "Tiger Woods"
> "I'd rattle coins while he was making his swing...I'd do it as a psychological test. I wanted to make sure he could handle anything that could be thrown at him."

**Context:** Earl Woods deliberately trained Tiger's mental toughness by distracting him mid-swing—rattling coins, coughing, moving suddenly—to simulate the psychological interference of real competition. The goal was to make real competition feel easier than practice.
**Application:** Design your practice environment to be harder than the real thing. Sales teams should practice with hostile interviewers; engineers should build under artificial constraints. When the real challenge arrives, it feels like the easier version.

---

### Study the predecessors who defined your domain
**Founder:** "Tiger Woods" | **Episode:** "Tiger Woods"
> "Tiger had a Jack Nicklaus card listing all of his records on his bedroom wall. Tiger was tracking his own wins against Jack Nicklaus's from the time he was a child."

**Context:** Tiger had a photo of Jack Nicklaus's scoring records on his bedroom wall throughout childhood. He tracked his own progress against Nicklaus's milestones from a young age, treating Nicklaus's records not as ceilings but as targets.
**Application:** Find the best person who has ever done what you are trying to do. Study their milestones, methods, and failures in detail. Create a personal scorecard that tracks your progress against theirs. Ambition is easier to maintain when it is anchored to a specific reference point.

---

### Separate reversible decisions from irreversible ones and calibrate speed accordingly
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters"
> "Some decisions are consequential and irreversible or nearly irreversible—one-way doors—and these decisions must be made methodically, carefully, slowly, with great deliberation and consultation...But most decisions aren't like that—they are changeable, reversible—they're two-way doors."

**Context:** Bezos distinguished between two types of decisions: one-way doors (irreversible, high-stakes, require slow deliberation) and two-way doors (reversible, low-stakes, should be made fast by the person closest to the issue). Most companies slow down because they apply one-way-door processes to two-way-door decisions.
**Application:** Before any major decision, explicitly classify it as one-way or two-way. One-way decisions need senior attention and careful deliberation. Two-way decisions need speed and delegation. Applying the wrong framework to either type is expensive.

---

### Disagree and commit to preserve organizational velocity
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters"
> "If you have conviction on a particular direction even though there's no consensus, it's helpful to say out loud: 'Look, I know we disagree on this, but will you gamble with me on it? Disagree and commit?' By the time you're at this point, you can't know the answer for sure, and you'll probably get a quick yes."

**Context:** Bezos observed that "I don't have enough data" is often a cover for "I'm not going to support this." He introduced "disagree and commit" as an explicit norm: state your disagreement clearly, then fully support the decision once made. This eliminates the passive resistance that bleeds execution energy.
**Application:** Make "disagree and commit" an explicit cultural norm, not just a fallback. Leaders who model it—saying "I disagree with this decision but I am fully committed to executing it"—create psychological safety for dissent while preserving execution momentum.

---

### Set high standards by correcting scope expectations, not lowering the bar
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters"
> "Unrealistic beliefs on scope—often hidden and undiscussed—kill high standards. To achieve high standards yourself or as part of a team, you need to form and proactively communicate realistic beliefs about how hard something is going to be."

**Context:** Bezos analyzed why high standards are rare. His conclusion: most people have unrealistic expectations about how long genuinely excellent work takes. A six-star handstand requires months of daily practice; expecting to learn it in a week sets you up to fail and conclude you lack the talent, when actually you lack the timeline.
**Application:** When you notice quality falling short of expectations, investigate the timeline assumption first. Often the issue is not effort or talent but an unrealistic scope estimate that was never surfaced. Make scope estimates explicit and visible before work begins.

---

### Inability to deal with people destroys technical organizations
**Founder:** "William Shockley" | **Episode:** "William Shockley (Creator of the Electronic Age)"
> "His fatal flaw was his inability to deal with people. Even his admirers concede that he was almost impossible to work with and that his personal relationships were almost universally failures."

**Context:** Shockley's terminal failure was interpersonal. He could not give credit, could not tolerate being wrong, could not hire people as good as himself without feeling threatened, and could not maintain relationships through disagreement. Each of these failures was compounding—every person he alienated told others.
**Application:** No matter how superior your technical skills, your ability to attract, retain, and motivate exceptional people is the binding constraint on your company's size and impact. Invest in your interpersonal capabilities as deliberately as your technical ones.

---

### Autodidact learning compounds faster than institutional learning
**Founder:** "Thomas Edison" | **Episode:** "The Wizard of Menlo Park: How Thomas Edison Invented the Modern World"
> "He read every book he could get his hands on. He didn't just read books in one area, he read everything...He said he was going to read every single book in the Detroit Free Library."

**Context:** Edison had almost no formal schooling—his mother pulled him from school after teachers called him difficult and he educated himself through voracious reading. He read everything in the Detroit Free Library systematically. This self-directed learning gave him cross-domain connections that formally educated engineers lacked.
**Application:** Self-directed learning compounds differently than institutional learning because you choose what to study based on current problems rather than a fixed curriculum. Build the habit of following your curiosity aggressively across domain boundaries.

---

### Singular focus on the problem in front of you produces disproportionate output
**Founder:** "Thomas Edison" | **Episode:** "The Wizard of Menlo Park: How Thomas Edison Invented the Modern World"
> "Genius is one percent inspiration and ninety-nine percent perspiration."

**Context:** Edison famously slept only four to five hours per night and worked with extreme focus on a single problem until it was solved. He described his method as refusing to quit until he had exhausted every possible approach. His famous "genius is one percent inspiration and ninety-nine percent perspiration" captured this orientation.
**Application:** The founder who outworks, out-focuses, and out-persists competitors gains a compounding advantage that is hard to replicate with talent alone. Identify the single most important problem in your company and ensure it gets your best hours, not your leftover ones.

---

### Over-inspiration creates false feedback loops—calibrate honesty
**Founder:** "Demis Hassabis" | **Episode:** "The Relentless Missionary Creating AGI: Demis Hassabis"
> "Who would have thought that you can actually inspire people too much, he said? Well, you can because you can get to the point where you are deluding your team, and then they are deluding you also."

**Context:** Demis's charisma caused his Elixir engineers to say a technically impossible game was possible. Their optimism reflected his inspiration back at him, not reality. He learned to create space for honest dissent.
**Application:** Deliberately separate your vision-casting moments from your reality-checking conversations. Create explicit mechanisms (anonymous surveys, red-team sessions) for people to deliver bad news without fear of disappointing you.

---

### Encyclopedic preparation enables instant pattern-recognition
**Founder:** "Li Lu / Charlie Munger / Warren Buffett" | **Episode:** "Li Lu and Charlie Munger and Warren Buffett"
> "He says that's really the best kind of education. If you want to have an encyclopedic knowledge base, you have to go through page after page after page. Doing so is just enormously helpful."

**Context:** Li Lu read Value Line cover-to-cover—all 1,700 stocks—repeatedly. This encyclopedic baseline meant he could later evaluate any opportunity in seconds, having already internalized the comparison set.
**Application:** In your domain, find the equivalent of Value Line—the comprehensive reference that most practitioners skim—and read it entirely. Your future speed comes from past depth.

---

### Packaging is not cosmetic — it is the message
**Founder:** "Estee Lauder" | **Episode:** "Estee Lauder"
> "A great package does not copy or study. It invents."

**Context:** Lauder spent weeks testing jar colors against bathroom wallpaper across dozens of homes and restaurants before settling on her signature pale turquoise. She wanted women to be proud to display her products.
**Application:** Your product's physical appearance signals quality before a word is spoken. Invest in packaging and presentation proportional to the premium you want to command.

---

### Obsess over customers — their loyalty is only conditional
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos' Shareholder Letters"
> "We consider them to be loyal to us right up until the second that someone else offers them a better service."

**Context:** Bezos framed customer loyalty as permanently provisional. He told employees to be afraid not of competitors but of customers who will leave the moment someone else does it better.
**Application:** Build customer retention by continually improving experience, not by assuming loyalty. Treat every competitor improvement as an existential signal.

---

### Eliminate errors at their roots — errors waste both money and customer goodwill
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos' Shareholder Letters"
> "Eliminating the root causes of errors saves us money and saves customer time, which it only gets more important as you grow."

**Context:** Bezos described error elimination as both a customer experience and a cost advantage. Errors frustrate customers and cost money to fix; eliminating root causes improves both simultaneously.
**Application:** Track the category of errors, not just individual errors. Every recurring issue has a systemic root cause. Fix the system, not the symptom.

---

### Iterative design beats linear design every time
**Founder:** "Elon Musk" | **Episode:** "Elon Musk and The Early Days of SpaceX"
> "The mantra with this approach is build and test early, find failures, and adapt. This is what SpaceX engineers and technicians did."

**Context:** Legacy aerospace used linear design — years of engineering before building anything. SpaceX used iterative design: build, test, find failures, adapt. This produced faster learning and better engineers.
**Application:** Do not design in a vacuum. Build the simplest version that can be tested, break it deliberately, learn from the failure, and iterate. Speed of iteration is a function of organizational will, not just talent.

---

### Speed of decision-making is the velocity of the company
**Founder:** "Elon Musk" | **Episode:** "Elon Musk and The Early Days of SpaceX"
> "The faster you can make your decisions, the more iterations you can do. The more iterations you can do, the more you're learning. The more success and capability SpaceX has."

**Context:** At SpaceX, Elon was simultaneously CEO, CFO, and chief engineer. This eliminated the approval chains that slow other organizations. He made hard decisions on the spot, responded to emails within minutes at any hour.
**Application:** Identify and remove approval bottlenecks in your organization. Great people leave when decisions take too long. Treat decision latency as a cost.

---

### Ask "What would it take?" instead of accepting "It's impossible"
**Founder:** "Elon Musk" | **Episode:** "Elon Musk and The Early Days of SpaceX"
> "When they protested that it was impossible, Elon would respond with a question designed to open their minds to the problem and potential solutions. He would ask, 'What would it take?'"

**Context:** When engineers said something was impossible, Elon responded not with pressure but with an open question designed to reframe the problem and surface solutions.
**Application:** Train yourself and your team to replace "that can't be done" with "what would it take to do it?" The first forecloses inquiry; the second opens it.

---

### Competence is not optional — incompetence gets people killed
**Founder:** "Alistair Urquhart" | **Episode:** "Alistair Urquhart (Listen to this when you're stressed)"
> "This was incompetence combined with overconfidence. The British is the largest empire in the world at this point... the more that they trumpeted their impregnability, the more I began to doubt it."

**Context:** Alistair documented how British command's complacency, overconfidence, and racial arrogance led to Singapore's fall to a "well-organized and determined aggressor." The pattern: trumpet invincibility while ignoring ground-truth signals.
**Application:** The moment your organization begins celebrating its own invincibility, begin looking for the cracks. Overconfidence is the last stage before catastrophic failure.

---

### Raise the hiring bar relentlessly
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos's Shareholder Letters: All of Them!"
> "Setting the bar high in our approach to hiring has been and will continue to be the single most important element of Amazon's success."

**Context:** Bezos identified talent selection as the single most important lever at Amazon — more important than strategy or product. He gave hiring managers three screening questions to maintain the bar.
**Application:** Use Bezos's three questions for every hire: Will I admire this person? Will they raise the average effectiveness of the group? Along what dimensions might they be a superstar?

---

### Every experience is an asset — never waste what you learn
**Founder:** "Daniel K. Ludwig" | **Episode:** "Daniel Ludwig: The Invisible Billionaire"
> "There is a extreme sense of efficiency in not only how Daniel would run his business but how he ran his life. Every experience he had, even that first experience at nine, he never wastes anything he learns. That information and that knowledge just continues to compound throughout his life."

**Context:** Ludwig started learning the shipping trade at 9 years old, worked in a marine engine plant in his teens, moonlighted installing ship engines while employed, and converted each job into the next. He never treated any experience as irrelevant.
**Application:** Treat every role — even a junior, unrelated one — as a source of domain knowledge, relationships, and skills you will need later. The founders who compound fastest are those who extract maximum learning from every context.

---

### Study the history of your profession or remain an ignorant amateur
**Founder:** "David Ogilvy" | **Episode:** "David Ogilvy (The King of Madison Avenue)"
> "A zealous student of the business, Ogilvy claimed that he had read every book about advertising and disdained others who felt they didn't need this knowledge."

**Context:** Ogilvy claimed to have read every book about advertising and "disdained others who felt they didn't need this knowledge." He called practitioners who didn't study their craft's history "ignorant amateurs" — not as an insult but as an accurate description.
**Application:** Before entering any market, read the definitive books and biographies of the people who built it. Competitors who haven't done this will keep rediscovering mistakes you already know to avoid.

---

### Set extravagant standards so people feel they work for the best
**Founder:** "David Ogilvy" | **Episode:** "David Ogilvy (The King of Madison Avenue)"
> "Ogilvy came to realize that such extravagant standards made the other chefs feel they were working for the best kitchen in the world."

**Context:** Ogilvy learned this from Monsieur Pitard, the imperious head chef of a top Paris restaurant who fired a chef for making pastries that didn't rise straight. The lesson: unreasonably high standards don't drive people away — they make the team feel they are doing something worth doing.
**Application:** Define the single most important quality signal in your product or service and hold an absolute, non-negotiable standard on it. The team will internalize the standard and police it themselves.

---

### Singular focus on one industry for decades creates compounding advantage
**Founder:** "Alfred Sloan" | **Episode:** "Alfred Sloan (General Motors)"
> "General Motors and the Hyatt Roller Bearing Company have been almost the sole interests of my business life."

**Context:** Sloan spent 65 years in and around the automobile industry, 45 of them with General Motors. He attributed much of his success to deep, sustained expertise in a single domain rather than diversifying his attention.
**Application:** Choose your industry and stay long enough to develop knowledge that cannot be acquired any other way. The compounding returns on domain expertise accelerate after 10-15 years and are nearly impossible for a newcomer to replicate.

---

### Discipline management by methods and objective facts, not personality
**Founder:** "Alfred Sloan" | **Episode:** "Alfred Sloan (General Motors)"
> "They were a generation of what I might call personal types of industrialists. That is, they injected their personalities, their genius, as a subjective factor into their operations without the discipline of management by methods and objective facts."

**Context:** Sloan contrasted his approach with Durant and Ford, who ran "personality-driven" companies and injected their subjective judgment without systematic management processes. Sloan built GM around objective data, financial discipline, and decentralized management with central financial control.
**Application:** As you scale, build systems that capture and use data to make decisions — not just the founder's instinct. Instinct is invaluable at 10 employees; at 500, it becomes a bottleneck and a source of inconsistency.

---

### Set standards for yourself higher than anyone else's expectations
**Founder:** "Steve Jobs" | **Episode:** "Steve Jobs In His Own Words (Make Something Wonderful)"
> "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected."

**Context:** Jobs's wife described him as imposing "unbelievable rigor" on himself first. Kobe Bryant made the same point when asked about fan pressure: "Their expectations will never be higher than my own. Never."
**Application:** Define your own quality bar before you ship, and make it higher than what customers, investors, or the press would ask for. External accountability is weak; internal standards compound.

---

### Keep headcount lean — managers destroy builders
**Founder:** "Steve Jobs" | **Episode:** "Steve Jobs In His Own Words (Make Something Wonderful)"
> "There is a very subtle line. When crossed, an increased headcount causes you to be a manager instead of a contributor. I believe that if we turn ourselves into managers instead of doers, both our schedule and the greatness of our product will suffer."

**Context:** In a 1986 memo at NeXT, Jobs warned that growing headcount too fast turns contributors into managers, slowing product quality and schedule.
**Application:** Delay hiring until a role is genuinely blocking output. Fewer, more capable people who are doing — not managing — produce faster and better results.

---

### Productive disagreement produces better decisions than false harmony
**Founder:** "Wilbur & Orville Wright" | **Episode:** "The Wright Brothers"
> "They could disagree to the point of shouting. At times after an hour or more of heated argument, they would find themselves as far from agreement as when they started — except that each had changed to the other's original position."

**Context:** Wilbur and Orville argued intensely, sometimes for hours, to the point of shouting. After heated arguments, they would sometimes switch positions entirely — Wilbur saying "Orville's right" and Orville saying "Wilbur's right." The process of adversarial reasoning produced solutions neither would have found alone.
**Application:** Structure important decisions as debates rather than consensus-seeking conversations. Assign someone to argue the opposite position with full commitment. The goal is not to win the argument but to stress-test the idea.

---

### Work in intense sprints, then rest completely
**Founder:** "Larry Ellison" | **Episode:** "Larry Ellison and Oracle"
> "All I knew was I was capable of short bursts of energy. I found jobs working on the weekends as an IBM systems programmer. Most people didn't want to work weekends so I had no trouble getting these jobs. Monday through Friday I'd be hiking or rock climbing in Yosemite."

**Context:** Ellison described himself as only capable of "short bursts of energy" — intense focused work followed by complete disengagement. He used weekends as full resets (hiking, kayaking, bike trips) before returning to high-intensity work. This barbell approach contrasted with the grinder mentality of most of his contemporaries but produced exceptional output.
**Application:** Identify whether you are a sprinter or a grinder by temperament and structure your schedule accordingly. Forcing a sprint personality into a grinder schedule produces mediocre work in all sessions; allowing full rest enables exceptional work in the focused ones.

---

### Programming — and building — liberate you from conformity
**Founder:** "Larry Ellison" | **Episode:** "Larry Ellison and Oracle"
> "Programming liberated me from that. I could work in the middle of the night. I could wear jeans and a t-shirt. I could ride my motorcycle to work. And I'd make more money if I could solve the problem faster and better than anyone else."

**Context:** Discovering programming gave Ellison a domain where he was judged entirely on the quality of his output, not on his compliance with social conventions. This liberation from evaluative conformity let him direct his intelligence at problems he actually cared about.
**Application:** If your current environment rewards conformity over results, find a domain where you are evaluated only by what you produce. Building companies, writing code, and creating products are all domains where output speaks for itself.

---

### Pursue Specific Knowledge, Not General Business Skills
**Founder:** "Marc Andreessen" | **Episode:** "#50 Marc Andreessen's Blog Archive"
> "There is no skill called business. Avoid business magazines and business classes."

**Context:** Drawing on thinkers like Naval Ravikant and his own experience, Andreessen emphasizes that generic business education produces generic outcomes. Real advantage comes from deep knowledge in a specific domain that cannot be easily replicated.
**Application:** Instead of studying business broadly, go deep on the domain your startup operates in—read original sources, talk to domain experts, and build proprietary insight that competitors can't buy.

---

### Sit on Your Ass and Read—Preparation Enables Fast Decisions
**Founder:** "Charlie Munger" | **Episode:** "#78 Charlie Munger (the Tao of Charlie Munger)"
> "If you really want to be an outlier in terms of achievement, sit on your ass and read and do it all the time."

**Context:** Munger and Buffett appear to make decisions quickly, but this is the fruit of enormous preparation. They invest hours daily in reading and thinking so that when a rare great opportunity appears, they recognize it instantly and can act without delay.
**Application:** Schedule protected time each week for deep reading and thinking—not news, not tactical work, but domain-level study. The founder who is best prepared will see opportunities others miss and make better decisions faster.

---

### Build Specific Knowledge—Find What Feels Like Play to You
**Founder:** "Naval Ravikant" | **Episode:** "#191 Naval Ravikant (A Guide to Wealth and Happiness)"
> "Building specific knowledge will feel like play to you, but will look like work to others."

**Context:** Specific knowledge is knowledge that cannot be taught in school—it comes from pursuing genuine curiosity. Because it's authentic to you, it feels like play even as it looks like hard work to others. This makes you nearly impossible to compete with.
**Application:** Identify the intersection of your genuine fascination and a market need. The startup you build around something you would obsessively study and work on anyway will outcompete one built purely around perceived opportunity.

---

<!-- Truncated to stay under 350 lines -->
