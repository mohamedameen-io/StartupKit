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

### Block D.5 -- Convene the Board (Optional)

When the user needs inspiration prompts, convene the Opportunity & Vision Board from the Domain Expert Boards section below. Present the Board's collective counsel:

1. **Synthesize agreement**: Where do multiple board members point the same direction?
   (e.g., Land's "work on nearly impossible problems" + Thiel's "zero to one" both filter for boldness)
2. **Surface disagreements**: Where do board members diverge? Present this as a strategic choice.
   Example: "Jobs would tell you to follow your intuition and taste. Bezos would say the customer knows best. Given your situation, here's what I'd weigh..."
3. **Connect to THIS user**: Don't just name-drop — explain why a specific board member's experience is relevant to the user's specific skills and problems.

Use Board prompts like these to spark more ideas, not as answers:
- "Edwin Land's daughter asked 'Why can't I see the picture now?' and he created a billion-dollar industry. What everyday frustration have YOU heard that could become a business?"
- "Sam Walton visited every competitor store and took notes. What have you noticed in YOUR industry that everyone else ignores?"

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

2. Update frontmatter in `workspace/sessions/{name}/00-session.md` (see `skills/startupkit/references/session-state-protocol.md`):
   - Set `phases[id=1].status: complete`
   - Set `session.activePhase: 2`
   - Set `session.nextPhase: 2`
   - Set `session.updated: [YYYY-MM-DD]`

3. Tell the user: "Diverge phase complete! You generated X skills, Y problems, and W niche ideas. When you're ready, run `/sk-niche` to score and rank your best ideas."

---

## Domain Expert Boards

### Opportunity & Vision Board

**Members:** Jeff Bezos, Edwin Land, Peter Thiel, Elon Musk, Marc Andreessen, Steve Jobs, Aristotle Onassis
**Domain:** Spotting opportunities, first-principles thinking, when to bet, contrarian conviction

**Jeff Bezos's Position:**
> "Wandering in business is not efficient...but it's also not random. It's guided—by hunch, gut, intuition, curiosity, and powered by a deep conviction that the prize for customers is big enough that it's worth being a little messy and tangential to find."
Bezos argued that structured processes are efficient at harvesting known opportunities but blind to genuinely new ones. Wandering—unstructured exploration—was how Amazon discovered its biggest businesses, including AWS and Prime.
**Application:** Protect time for unstructured exploration. The next major opportunity will not show up as a line item in a quarterly plan. It will show up as an experiment that looked strange at first.

**Edwin Land's Position:**
> "Pick problems that are important and nearly impossible to solve."
Land chose research directions not by commercial viability but by whether the problem was consequential and unsolved. This filter kept him working on things no one else was attempting, which gave Polaroid its insurmountable technical moat.
**Application:** When scoping a startup's core problem, choose one that matters deeply and that the market has ignored because it seems too hard.

**Edwin Land's Position:**
> "Don't do anything that someone else can do."
Land's personal operating rule was to avoid any problem that someone else was already solving. He believed that if a problem was interesting enough to attract multiple researchers, it was either already solved or would be soon.
**Application:** Before starting a research project or product line, survey who else is attempting it. If the answer is "many teams at large companies," the opportunity is likely already exploited or soon will be.

**Elon Musk's Position:**
> "Companies in the United States and Russia still use the same decades-old technology to launch rockets into space, and the price kept going up. Things were going in the wrong direction, so Musk founded SpaceX."
Musk identified decades of rising rocket costs and no meaningful progress. He identified an important industry moving backwards and saw the gap as opportunity.
**Application:** Look for industries where incumbents charge more and deliver less over time. Stagnation creates the vacuum that a first-principles builder can fill.

**Peter Thiel's Position:**
> "What important truth do very few people agree with you on?"
Thiel believes most businesses fail because they compete in spaces where consensus already exists. The most valuable businesses are built on contrarian insights.
**Application:** Before starting a venture, write down your answer to this question. If your answer is widely accepted, you are not building something new.

**Marc Andreessen's Position:**
> "If Thomas Edison didn't know what he had when he invented the phonograph... what are the odds that you or any entrepreneur is going to have it all figured out up front."
Andreessen uses this to argue that transformative businesses often emerge from unexpected directions. Edison invented the phonograph accidentally while working on telegraph equipment.
**Application:** Launch something that reflects your best current understanding, then stay curious about unexpected uses. Your most valuable product line may emerge from an experiment you treat as throwaway.

**Steve Jobs's Position:**
> "It comes down to exposing yourself to the best things that humans have done. Then try to bring those things into what you are doing."
Jobs credited Edwin Land for the idea that great products live at the intersection of arts and technology.
**Application:** When designing a product, deliberately bring in aesthetic and humanistic perspectives — not just functional engineering.

**Aristotle Onassis's Position:**
> "He's constantly learning and this serves him later in life because he studies a lot of history, studies a lot of political history, military history, and then he keeps an eye on what's going on."
Onassis was obsessed with Churchill and studied political and military history voraciously. His deep historical knowledge gave him an unusual ability to read geopolitical risk in shipping markets before competitors.
**Application:** Study the history of your industry. Political and macro shifts recur in recognizable patterns. Founders with historical knowledge can position assets advantageously before the pattern becomes obvious.

**Board Tensions:**
- **Bezos (customer-obsessed invention)** vs **Thiel (monopoly-first positioning)** — Bezos says listen to customers; Thiel says build what nobody asked for
- **Land (nearly impossible problems)** vs **Andreessen (ride the technology wave)** — Land says work on what no one else is working on; Andreessen says the idea will find its voice through whoever acts first
- **Jobs (intuition and taste)** vs **Bezos (data-driven experimentation)** — Jobs says trust your gut; Bezos says A/B test everything

---

### Craft & Execution Board

**Members:** Edwin Land, Steve Jobs, Thomas Edison, Tiger Woods, Yvon Chouinard, Demis Hassabis, Sam Zemurray
**Domain:** Skill mastery, operational excellence, tool leverage, focus

**Edwin Land's Position:**
> "If you can state a problem, then you can solve it. From then on, it's just hard work."
Land treated problem articulation as an intellectual discipline. He believed most people never solved hard problems because they never truly defined them.
**Application:** Before building any product, write a one-paragraph problem statement that a non-expert could understand. If you cannot, the problem is not yet well-defined.

**Steve Jobs's Position:**
> "It comes down to exposing yourself to the best things that humans have done. Then try to bring those things into what you are doing."
Jobs credited Land for the idea that great products live at the intersection of arts and technology.
**Application:** When designing a product, deliberately bring in aesthetic and humanistic perspectives — not just functional engineering.

**Thomas Edison's Position:**
> "Edison's laboratory was explicitly oriented toward commercial products. He said the lab's purpose was 'the rapid and cheap development of inventions' and he focused on things that people would pay for."
Edison explicitly oriented his laboratory toward commercial products, not pure science. When he invented the phonograph, he immediately began thinking about the commercial market.
**Application:** Invention in service of a known commercial problem is more reliable than hoping scientific discoveries will find applications. Start with the customer need, then work backward.

**Demis Hassabis's Position:**
> "At DeepMine, the ultimate goal was even grander, but Demas had let people tinker while he was building out the scientific team...Demas had shown exquisite judgment."
At Elixir, Demis tried to build the most complex game ever and failed. At DeepMind, he had the same grand ambition but first identified incremental rungs—Atari games—that would prove general intelligence in affordable, testable steps.
**Application:** Before launching a moonshot, map out a concrete series of achievable milestones that each validate a component of the larger thesis.

**Yvon Chouinard's Position:**
> [From Patagonia philosophy] Building a tiny passionate niche → global brand through craft-first product development.
Chouinard built Patagonia by first making the best climbing equipment he could, then letting the product speak for itself.
**Application:** Before scaling, perfect your craft. The brand grows from the product, not the other way around.

**Board Tensions:**
- **Land (deep concentration, one thing at a time)** vs **Edison (prolific parallel experimentation)** — Land says focus intensely; Edison says run many experiments at once
- **Jobs (delegate and curate)** vs **Zemurray (do it yourself, be closest to the problem)** — Jobs says curating excellence; Zemurray says be closest to the action
- **Tiger Woods (rebuild from scratch)** vs **Chouinard (trust the organic process)** — Tiger says rebuild when needed; Chouinard says let it evolve

### Work on problems that are both important and nearly impossible
**Founder:** "Edwin Land" | **Episode:** "Edwin Land (Polaroid vs Kodak)"
> "Pick problems that are important and nearly impossible to solve."

**Context:** Land chose research directions not by commercial viability but by whether the problem was consequential and unsolved. This filter kept him working on things no one else was attempting, which gave Polaroid its insurmountable technical moat.
**Application:** When scoping a startup's core problem, choose one that matters deeply and that the market has ignored because it seems too hard.

---

### Stating a problem clearly is already half the solution
**Founder:** "Edwin Land" | **Episode:** "Edwin Land (Polaroid vs Kodak)"
> "If you can state a problem, then you can solve it. From then on, it's just hard work."

**Context:** Land treated problem articulation as an intellectual discipline. He believed most people never solved hard problems because they never truly defined them. Clear problem statements collapse the solution space.
**Application:** Before building any product, write a one-paragraph problem statement that a non-expert could understand. If you cannot, the problem is not yet well-defined.

---

### Seeing gray where others see black and white creates the decisive opportunity
**Founder:** "Colin Chapman, Bernie Ecclestone, Dietrich Mateschitz" | **Episode:** "How Geniuses and Speed Freaks Reengineered Formula 1 into the World's Most Valuable Sport"
> "All I could see was the same gray airplanes, the same gray suits, the same gray faces."

**Context:** Dietrich Mateschitz built Red Bull into a global phenomenon by entering a market—energy drinks—that major beverage companies had defined as niche and dismissed. He saw the whitespace they had pre-categorized as worthless.
**Application:** The most valuable opportunities are often those that dominant players have classified as too small, too weird, or too risky. Scan for categories that majors have publicly dismissed.

---

### Only work on problems no one else is working on
**Founder:** "Edwin Land" | **Episode:** "Insisting on the Impossible: The Life of Edwin Land"
> "Don't do anything that someone else can do."

**Context:** Land's personal operating rule was to avoid any problem that someone else was already solving. He believed that if a problem was interesting enough to attract multiple researchers, it was either already solved or would be soon. His competitive advantage came entirely from working on the unexplored.
**Application:** Before starting a research project or product line, survey who else is attempting it. If the answer is "many teams at large companies," the opportunity is likely already exploited or soon will be.

---

### Treat wandering as essential navigation, not inefficiency
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos (Shareholder Letters and Speeches)"
> "Wandering in business is not efficient...but it's also not random. It's guided—by hunch, gut, intuition, curiosity, and powered by a deep conviction that the prize for customers is big enough that it's worth being a little messy and tangential to find."

**Context:** Bezos argued that structured processes are efficient at harvesting known opportunities but blind to genuinely new ones. Wandering—unstructured exploration without a predetermined outcome—was how Amazon discovered its biggest businesses, including AWS and Prime.
**Application:** Protect time for unstructured exploration on your calendar and your team's calendar. The next major opportunity will not show up as a line item in a quarterly plan. It will show up as an experiment that looked strange at first.

---

### Let commercial needs shape invention, not just scientific curiosity
**Founder:** "Thomas Edison" | **Episode:** "The Wizard of Menlo Park: How Thomas Edison Invented the Modern World"
> "Edison's laboratory was explicitly oriented toward commercial products. He said the lab's purpose was 'the rapid and cheap development of inventions' and he focused on things that people would pay for."

**Context:** Edison explicitly oriented his laboratory toward commercial products, not pure science. When he invented the phonograph, he immediately began thinking about the commercial market. When he developed the light bulb, he invented the entire electricity distribution system needed to make it commercially viable—meters, switches, generators, wiring.
**Application:** Invention in service of a known commercial problem is more reliable than hoping scientific discoveries will find applications. Start with the customer need, then work backward to the required invention. Edison's system-level thinking—inventing the entire stack needed for electricity adoption—is the model.

---

### Build a ladder to your destination, not just the destination itself
**Founder:** "Demis Hassabis" | **Episode:** "The Relentless Missionary Creating AGI: Demis Hassabis"
> "At Deep Mine, the ultimate goal was even grander, but Demas had let people tinker while he was building out the scientific team...Demas had shown exquisite judgment."

**Context:** At Elixir, Demis tried to build the most complex game ever and failed. At DeepMind, he had the same grand ambition but first identified incremental rungs—Atari games—that would prove general intelligence in affordable, testable steps.
**Application:** Before launching a moonshot, map out a concrete series of achievable milestones that each validate a component of the larger thesis and build organizational capability along the way.

---

### Identify stagnating industries where costs are going in the wrong direction
**Founder:** "Elon Musk" | **Episode:** "Elon Musk and The Early Days of SpaceX"
> "Companies in the United States and Russia still use the same decades-old technology to launch rockets into space, and the price kept going up. Things were going in the wrong direction, so Musk founded SpaceX."

**Context:** SpaceX was Elon's response to decades of rising rocket costs and no meaningful progress toward Mars. He identified an important industry moving backwards and saw the gap as opportunity.
**Application:** Look for industries where incumbents charge more and deliver less over time. Stagnation creates the vacuum that a fast-moving, first-principles builder can fill.

---

### Buy distressed assets at deep discounts and convert them
**Founder:** "Daniel K. Ludwig" | **Episode:** "Daniel Ludwig: The Invisible Billionaire"
> "He would buy these tankers. And in a lot of cases he'd buy them from the U.S. government... he'd get it for about 10%... And then they'd have so much equipment like he'd sell the engines and everything else that he'd get, he's essentially getting it for free."

**Context:** Ludwig's playbook was to buy government surplus ships at 5–10% of replacement cost after wars, sell the engines and equipment (which often recovered his purchase price), and refit the hull for oil transport. He did this repeatedly after both WWI and WWII.
**Application:** Look for assets whose current owners have been forced to sell at below-intrinsic-value prices due to circumstance rather than fundamental problems. Distressed cycles recur in every industry.

---

### Eclectic life experience accelerates founder judgment
**Founder:** "David Ogilvy" | **Episode:** "David Ogilvy (The King of Madison Avenue)"
> "Many people who succeed in advertising lack college degrees. Instead of conventional credentials, they learn from one or more eclectic life experiences."

**Context:** Ogilvy worked as a chef, a door-to-door Aga cooker salesman, a tobacco farmer in Canada, a researcher at Gallup, and an intelligence officer — all before starting his agency at 38. Each role built a different model of human behavior that he later synthesized into breakthrough advertising.
**Application:** If you are early in your career, optimize for breadth of experience over prestige of employer. The founder who has sold door-to-door, run operations, and done customer research will out-insight the one who went straight from MBA to startup.

---

### You can't recognize an opportunity until you're in its headwaters
**Founder:** "Alfred Sloan" | **Episode:** "Alfred Sloan (General Motors)"
> "I could not know then that through Hyatt I had entered into the headwaters of General Motors."

**Context:** Sloan entered the automobile industry as a supplier of roller bearings — a small, unglamorous component. From that position, he was drawn into the headwaters of what became the largest industry in the world, ultimately becoming its most important executive.
**Application:** Take jobs and roles close to large, fast-moving industries even if your entry point seems marginal. Proximity to a growing system creates options that are invisible from the outside.

---

### Build at the intersection of arts and technology
**Founder:** "Steve Jobs" | **Episode:** "Steve Jobs In His Own Words (Make Something Wonderful)"
> "It comes down to exposing yourself to the best things that humans have done. Then try to bring those things into what you are doing."

**Context:** Steve Jobs credited Edwin Land of Polaroid for the idea that great products live at the intersection of arts and technology. He adopted this in his early 20s and never abandoned it across four decades.
**Application:** When designing a product, deliberately bring in aesthetic and humanistic perspectives — not just functional engineering. The products with the longest staying power are the ones that feel inevitable.

---

### Question every assumption in your industry
**Founder:** "Joe Coulombe" | **Episode:** "Joe Coulombe (Founder of Trader Joe's)"
> "How questioning all aspects of the way you do business leads to powerful results."

**Context:** Coulombe systematically questioned every convention in grocery retailing — store size, product selection, pricing, supplier relationships, employee wages, private label strategy — and rejected the ones that didn't survive scrutiny. This relentless questioning is identified as the single most important habit in the book.
**Application:** Take your industry's standard operating procedures and ask "why?" about each one. Most conventions exist because someone did it that way first, not because it is optimal. The ones that cannot be justified are your opportunity.

---

### Problems in work clothes are opportunities
**Founder:** "Joe Coulombe" | **Episode:** "Joe Coulombe (Founder of Trader Joe's)"
> "But it is only when you come to write a book such as this that you discover how far you still want to go. Let me go back to this meeting at this bar because this is going to be the birth of Trader Joe's. But this is a reminder that you know problems are just opportunities and work clothes."

**Context:** The moment Coulombe learned that 7-Eleven (his direct competitor) was being sold to Southland — a company a thousand times larger — he could have panicked. Instead, he used the crisis to rethink the entire business model and emerged with the Trader Joe's concept.
**Application:** When a major threat appears — a new competitor, a supplier relationship ending, a channel closing — treat it as a forcing function to question whether your current business model is actually optimal. Disruption from the outside is often the only thing that forces necessary reinvention.

---

### Know history deeply — it tells you where power and opportunity lie
**Founder:** "Aristotle Onassis" | **Episode:** "Aristotle Onassis"
> "He's constantly learning and this serves him later in life because he studies a lot of history, studies a lot of political history, military history, and then he keeps an eye on what's going on."

**Context:** Onassis was obsessed with Churchill and studied political and military history voraciously. His deep historical knowledge gave him an unusual ability to read geopolitical risk in shipping markets before competitors, and made him a compelling conversationalist who could build relationships with world leaders.
**Application:** Study the history of the industries and geographies where you operate. Political and macro shifts recur in recognizable patterns. Founders with historical knowledge can position assets advantageously before the pattern becomes obvious to everyone else.

---

### Do something no one else has done — that's how you earn the right to survive
**Founder:** "Frederick Smith" | **Episode:** "Frederick Smith (FedEx)"
> "He wanted to do something nobody else had done, which also he's picking an extremely hard target. He's identified a gap."

**Context:** Smith identified that there was no reliable way to overnight a package anywhere in America. Every existing freight company treated overnight delivery as nearly impossible. He saw this not as evidence that it couldn't be done but as evidence of a massive unmet need.
**Application:** The most defensible businesses solve problems that incumbents have declared impossible. If everyone in an industry says "that's just how it works," ask whether it actually has to work that way.

---

### Read voraciously across domains to spot opportunities others can't see
**Founder:** "Frederick Smith" | **Episode:** "Frederick Smith (FedEx)"
> "Later in the book after FedEx is on solid footing, Fred talks about the way he comes up with ideas and essentially he spends like four hours a day reading and assimilating information and then combining ideas from different areas with his own like unique twist on them. He says that's a good way to spot opportunities that others can't see."

**Context:** Fred Smith spent four hours a day reading and synthesizing information from multiple domains, then combining it with his own unique perspective. This reading habit — shared by both Fred and his father — was identified as the single most important habit that separated him from peers.
**Application:** Build a daily reading practice across disciplines — history, technology, business, science. The most valuable business insights often come from applying a model from one domain to an unsolved problem in another.

---

### Find lateral paths around conventional entry barriers
**Founder:** "Richard Branson" | **Episode:** "Losing My Virginity: How I Survived, Had Fun, and Made a Fortune Doing Business My Way"
> "If you don't have the right experience to reach your goal, look for another way in. If you want to fly, get down to the airfield at the age of 16 and make the tea. You don't have to go to art school to be a fashion designer. Join a fashion company and push a broom."

**Context:** When Branson couldn't afford a proper retail location, he talked a shoe shop owner into letting him use spare space. When a postal strike blocked his mail-order record business, he found a workaround. He consistently found non-standard routes to goals rather than waiting for the obvious path to open.
**Application:** When the direct route to a market or customer is blocked, map all indirect routes — partnerships, white-labels, adjacent services, barter arrangements. One of them is almost always accessible.

---

### There are no adults — realize this and stop deferring to institutions
**Founder:** "Larry Ellison" | **Episode:** "Larry Ellison and Oracle"
> "I'd always believe that at the top of these companies there must be exceptionally capable people who make the entire technology industry work. Now here I was working near the top of a tech company and those capable people were nowhere to be found."

**Context:** Ellison's first senior corporate job showed him that the "capable people" at the top of large technology companies were mostly improvising. This was not discouraging to him — it was liberating. If no one really knew what they were doing, his own judgment was as valid as anyone else's.
**Application:** Stop waiting for permission from authority figures who are likely less certain than they appear. The gap between the image of institutional competence and the reality of organizational improvisation is where founders find opportunity.

---

### The internet fills voids left by legacy systems — look for those voids
**Founder:** "Jack Ma" | **Episode:** "Alibaba: The House That Jack Ma Built"
> "In other countries e-commerce is a way to shop. In China it's a lifestyle. Supermarkets in China were terrible. That's why we've come out on top."

**Context:** Alibaba's explosive growth was partly structural: China's offline retail infrastructure was so underdeveloped (6 sq ft of retail space per person vs. 24 in the US) that the internet did not compete with physical retail — it replaced something that barely existed. Jack Ma explicitly identified this as the opportunity.
**Application:** Look for markets where legacy infrastructure is absent, broken, or inaccessible to large populations. The internet (and now AI) creates the most durable businesses where it provides access to things that previously required institutional intermediaries.

---

### Invest into technological headwinds, not away from them
**Founder:** "Marcus Wallenberg Jr." | **Episode:** "Expanding A Family Dynasty: Marcus Wallenberg Jr."
> "I imagine that economics quite simply means making use of technology. It is always possible to build up new industries on the basis of inventions."

**Context:** Marcus Wallenberg Jr. was addicted to technology investment and repeatedly moved the family's portfolio toward industries with technological tailwinds — pneumatic tools, electrical engineering, industrial machinery — as older industries declined.
**Application:** When an industry you operate in begins to stagnate, look for the technology that will replace it and invest early in the successor — rather than defending the incumbent position.

---

### Edison Didn't Know What He Had—Your Initial Idea Will Evolve
**Founder:** "Marc Andreessen" | **Episode:** "#50 Marc Andreessen's Blog Archive"
> "If Thomas Edison didn't know what he had when he invented the phonograph... what are the odds that you or any entrepreneur is going to have it all figured out up front."

**Context:** Edison invented the phonograph accidentally while working on telegraph equipment, and didn't understand its commercial potential for months. Andreessen uses this to argue that transformative businesses often emerge from unexpected directions.
**Application:** Launch something that reflects your best current understanding, then stay curious about unexpected uses and adjacent opportunities. Your most valuable product line may emerge from an experiment you treat as a throwaway.

---

### Start Simple, Build to Complexity—the Basement Computer Room Model
**Founder:** "Paul English" | **Episode:** "#27 A Truck Full of Money: Coding, Mania, Love, Genius: The Life of an American Entrepreneur"
> "He had never liked TV... you could tell these TVs what to do, and that made all the difference."

**Context:** English's entire career traces back to a windowless basement room with six terminals. The constraints—no graphics, no internet, just raw computation—forced him to understand fundamentals deeply before complexity was available. This foundation shaped how he built products for decades.
**Application:** When starting a new product, deliberately constrain the interface and functionality at first. Constraints force you to solve the hardest user problem rather than hiding mediocre thinking behind visual complexity.

---

### Technology shifts destroy old winners and create new ones—position on the right side
**Founder:** "Andrew Carnegie" | **Episode:** "Andrew Carnegie and Henry Clay Frick: The Bitter Partnership That Changed America"
> "If there was a cheaper and more adorable substance than iron, it would lead to a revolution in the business, not to mention a fortune for those who got in on the ground floor."

**Context:** Carnegie's father's weaving craft was destroyed by mechanization. Carnegie himself recognized that steel's superiority over iron would cause a revolution in construction and positioned himself on the enabling side, not as an end-product maker.
**Application:** When a new enabling technology emerges, look at who needs it most and build the infrastructure they will depend on. Selling pickaxes beats mining for gold.

---

### Ideas you cannot implement in someone else's company are capital you must deploy yourself
**Founder:** "Henry Leland" | **Episode:** "Henry Leland (Cadillac)"
> "For this I received a thank you and 50 cents a day more in my pay envelope. That was one of the times I thought I ought to quit making other men rich and go work for myself."

**Context:** Leland invented the first electric hair clippers at Brown & Sharp. They were a hit. He received fifty cents a day more in pay. He recognized the pattern: making other men rich from ideas he generated was unsustainable.
**Application:** Track every revenue-generating idea you create for an employer. When the ratio of value created to value captured becomes intolerable, that is your signal to found your own venture.

---

### Design the company to create other companies—platform thinking from day one
**Founder:** "Jeff Bezos" | **Episode:** "Jeff Bezos Shareholder Letters"
> "Our vision is to use this platform to build Earth's most customer-centric company...allows us to launch new e-commerce businesses faster with a higher quality of customer experience, a lower incremental cost, a higher chance of success."

**Context:** By 1999, Bezos was already describing Amazon as a platform from which new commerce businesses would be launched faster and cheaper than any competitor could match. Prime, Marketplace, AWS, and Alexa were all unplanned but enabled by this platform orientation.
**Application:** When designing your product, ask which adjacent problems your infrastructure could solve. Platform businesses compound because each new product benefits from existing infrastructure and distribution.

---

### The contrarian question is the foundation of all great ventures
**Founder:** "Peter Thiel" | **Episode:** "Conspiracy: Peter Thiel, Hulk Hogan, Gawker, and the Anatomy of Intrigue / Zero to One"
> "What important truth do very few people agree with you on?"

**Context:** Thiel's single most famous intellectual tool is the question: "What important truth do very few people agree with you on?" He believes most businesses fail because they compete in spaces where consensus already exists.
**Application:** Before starting a venture, write down your answer to this question. If your answer is widely accepted, you are not building something new—you are joining a crowded race.

---

### Follow Your Genuine Curiosity—It Is the Only Sustainable Guide
**Founder:** "Paul Graham" | **Episode:** "#314 Paul Graham (How To Do Great Work)"
> "At each stage, do whatever seems most interesting and gives you the best options for the future. I call this approach staying upwind."

**Context:** Paul Graham argues that the path to great work is not strategic planning but consistent pursuit of what genuinely interests you. The person who works on what they find genuinely exciting has an enduring advantage over those following external signals of prestige or opportunity.
**Application:** Before choosing your next product line, market, or pivot, audit your own genuine curiosity. Which problem would you work on if there were no financial reward and no audience? That answer often points toward the work that only you can do.

---

### Ideas Have a Time — Act Before Someone Else Does
**Founder:** "Rick Rubin" | **Episode:** "#409 The Creative Genius of Rick Rubin"
> "If you have an idea you're excited about and you don't bring it to life, it is not uncommon for the idea to find its voice through another maker. This isn't because the other artists stole your idea, but because that idea's time has come."

**Context:** Rubin observes that when an idea's time has come, multiple creators across the world often arrive at it simultaneously. The idea finds its voice through whoever acts first.
**Application:** When you feel the pull of a startup idea, treat urgency as a signal. The window is real. Ship a first version before the market converges on someone else's version of the same insight.

---

### Bet on the Medium That Will Grow the Fastest
**Founder:** "Ted Turner" | **Episode:** "#327 Ted Turner"
> "You should always bet on the medium that would grow the fastest and obviously TV is going to grow a lot faster than radio from this point in history."

**Context:** Turner deliberately prioritized TV over radio once he recognized television's growth trajectory. He applied the same logic again when he embraced cable and satellite while other broadcasters saw them as threats.
**Application:** When choosing a distribution channel for a new product, weight not just current reach but growth rate. Being early in a fast-growing channel compounds massively. Being excellent in a shrinking channel is a slow decline.

---

### Harness the phenomenon rather than fight it
**Founder:** "Theodore Roosevelt" | **Episode:** "Theodore Roosevelt's Darkest Journey"
> "He harnessed the phenomena, he didn't fight it."

**Context:** The book recounts the river's power as a force that couldn't be resisted. The expedition succeeded by learning to work with the current, portaging only when necessary, and adapting to conditions rather than imposing a fixed plan.
**Application:** When encountering a powerful trend or technology wave, the winners position with it, not against it. Bill Gates recognized the internet as a wave to catch, not a threat to resist.

---

### Follow natural drift—let genuine curiosity lead
**Founder:** "Alfred Lee Loomis" | **Episode:** "Alfred Lee Loomis (the most interesting man you've never heard of)"
> "Follow the drift of your natural interests."

**Context:** Loomis didn't plan to become a physicist. He drifted toward science because it genuinely fascinated him. He followed the curiosity wherever it led, which is how he ended up building the most advanced private physics lab in the world.
**Application:** The projects that will produce your best work are the ones you would do without anyone asking. Pay attention to what you return to when you have no obligations.

---

### Your critics' contempt is the opportunity signal
**Founder:** "Stan Lee" | **Episode:** "Stan Lee Founder of Marvel"
> "Comics are going to rot your brain."

**Context:** Comics were widely dismissed as "rotting children's brains" throughout Stan Lee's career. The condescension from the literary establishment and media was relentless. Lee recognized that this contempt was actually a signal of underexploited territory.
**Application:** When an entire establishment dismisses something as low-status, the gap between actual value and perceived value creates opportunity. Be suspicious of consensus contempt.

---

### Ask the Contrarian Question: What Do You Believe That No One Agrees With?
**Founder:** "Peter Thiel" | **Episode:** "#278 Peter Thiel"
> "The single most powerful pattern I have noticed is that successful people find value in unexpected places and they do this by thinking about business from first principles instead of formulas."

**Context:** Thiel's famous interview question doubles as a business strategy framework. The most valuable businesses are built on contrarian insights — beliefs that are correct but not yet widely accepted. Conventional thinking produces conventional businesses.
**Application:** Force yourself to generate three to five answers to the contrarian question in your industry. What does everyone believe is true about your market that you think is wrong? The company you should build is probably the one that proves the consensus wrong.

---

### One Idea, Relentlessly Pursued, Creates Entire Industries
**Founder:** "Henry Ford" | **Episode:** "#80 Henry Ford (Today and Tomorrow)"
> "Take just one idea, a little idea in of itself, an idea that anyone might have had but which fell to me to develop, that of making a small, strong, simple automobile, to make it cheaply and pay high wages in its making. And this one idea is only in its infancy."

**Context:** Ford's entire empire grew from a single idea: build a small, strong, simple automobile that ordinary people could afford, and pay the workers who build it enough to buy what they make. Everything else — the assembly line, the wage policies, the cost obsession — was in service of that one idea.
**Application:** Before optimizing execution, make sure you have the one idea that justifies the company's existence. Not three ideas, not a platform, not a suite — one insight about what the world needs that no one is delivering. Build everything else to serve it.

---

### You Only Need One Idea to Become Wildly Successful
**Founder:** "Henry Ford / Thomas Edison" | **Episode:** "#190 Henry Ford and Thomas Edison"
> "Henry Ford had basically one idea. You really need one idea in life to become wildly successful and build a life that you want. Henry Ford had no ideas on mass production. He wanted to build a lot of autos because that's the only way he could get to his one idea. He grew into it like the rest of us."

**Context:** Henry Ford did not invent multiple things — he pursued one idea relentlessly: build a car so affordable that every person could own one. The assembly line, the wage policies, the supply chain obsession were all instruments of that one idea, not independent innovations.
**Application:** Identify the one problem your startup exists to solve — not five, not a platform, not a suite of solutions. Then ask how every operational decision serves that one idea. The assembly line did not precede Ford's vision; it emerged from it.

---

### Search for the New New Thing — Ideas at the Cusp of Commercial Viability
**Founder:** "Jim Clark" | **Episode:** "#23 The New New Thing: A Silicon Valley Story"
> "The new new thing is a notion that is poised to be taken seriously in the marketplace. It's the idea that is a tiny push away from general acceptance and when it gets that push will change the world."

**Context:** Michael Lewis defines the new new thing not as a new invention or a new idea, but as an idea that is one push away from general acceptance. The searcher's job is to find these inflection points — where technology, timing, and market readiness converge.
**Application:** When evaluating startup ideas, ask not just "is this technically feasible?" but "is this at the cusp of acceptance?" Many ideas that were right in 2000 needed another decade. Timing the transition from early-adopter curiosity to mass-market readiness is the core skill of category creation.

---

### Wealth Comes from New Recipes, Not More of the Same Ingredients
**Founder:** "Jim Clark" | **Episode:** "#23 The New New Thing: A Silicon Valley Story"
> "Wealth wasn't chiefly having more of old things. It was having entirely new things. Growth is just another word for change. Every business is successful exactly to the extent that it does something others cannot."

**Context:** Economist Paul Romer's new growth theory, cited in the book: wealth is created when someone finds a new way to combine existing ingredients — not when someone accumulates more of the same things. The kitchen is always stocked; what is scarce is chefs who cook something new.
**Application:** In every market, there are underused combinations of existing technologies, distribution channels, and customer segments. The startup opportunity is usually not in a brand-new ingredient — it is in a new recipe that nobody has tried yet.

---

<!-- Truncated to stay under 350 lines -->
