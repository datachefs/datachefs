---
layout: content
title: The 7 Principles for Growing a Thriving Data Chefs Ecosystem
image: bread-sweet-zucchini.jpg
---

## Don't Create a Solution, Grow an Ecosystem

It's easy to get sucked in by vendors or evangelists who tell you that their tool, language, or platform will solve all your problems. But for most organizations, one size doesn't fit all.

At the same time, you don't want to let users and then managers create a snarled rat's nest of solutions that's impossible to maintain or support. You need find a balance between chaos and order.

Given how fast analytics/data science tools and users' expectations are changing, trying to plan it all out is a recipe for disaster. Instead of trying to create a single solution, incrementally, iteratively grow an ecosystem that will evolve and adapt to new circumstances.

### Example: Tableau

Here's an example of how a large organization might grow out one facet of their ecosystem.

You have a "on the trail, off the trail" policy: 
- Most users are "on the trail": there's a limited set of tools they can use, which are supported by your IT help desk
- A handful of more sophisticated users are "off the trail": they can experiment with new tools, but if they get into trouble with these tools and are stuck, they're on their own -- at that point, all IT will do is wipe their box and reinstall it using a master image (a practice the user _and_their manager have agreed to in writing)

Two of your "off the trail" users have been getting great results from Tableau, and they think your organization should adopt it. Working with your cross-department Tools Advisory Team, you run a short, time boxed pilot project and decide to invest in Tableau. From the pilot and ensuing conversations and analysis, you've figured out that you'll need to support 2 types of Tableau users:
- A small number of users are going to intensively use Tableau; many of them will also evangelize using Tableau and will provide a little mentoring/support in their department
- Most of your users will use the same reports over and over. Some of them will rarely need to make changes, others will tweak their reports or create new reports every few weeks or months

So, you're going to use a different strategy for each group.

- Working with the Tools Advisory Team, you hold a one-week, on-site training for select group of users from several departments who are likely to intensively use Tableau; one month later you follow it up with a half-day remote workshop where the trainer helps users ungunk their biggest problems/obstacles. After that, you provide lightweight support, focusing most of your efforts on putting together good list of resources and nurturing a small community of these heavy-duty users, encouraging them to share examples, tips, etc. on your intranet and to help guide the future use, training, and support of Tableau across your organization as well as discussing what other data visualization tools/strategies the organization might adopt for addressing needs that Tableau doesn't handle well.
- A short while after you've trained your heavy-duty users, you begin rolling out Tableau to the rest of you users. These users only get a short, 2 hour training; you invest most of their training and support in creating templates, cheat sheets, and other ways of providing on-demand support as their needs grow over time. As part of your monthly power user brown bags, every 3-6 months you either offer tips or brief demos by other users of how you can get more out of Tableau.






 
## Adapt Agile Development Practices to Fit Power Users' Needs

If you need to whip up a simple bar graph, you don't need to know about version control, sprints, development lifecycles, etc. If you know how to use the tool, you can bang it out in a couple of minutes. If you're building it for someone else and they want a bunch of changes? That's another few minutes.

But as the tools and the kind of work that power users do get more sophisticated, just throwing together "products" can get you into trouble. Over time, it's easy to end up accidentally creating a snarled rats nest that is prone to mistakes, brittle, and increasingly unsustainable.

When programming first took off, "cowboy coders" learned that lesson the hard way. Organizations overcompensated, adopting the waterfall approach in an attempt to rein in all that chaos. But too much control turned out to be as unsustainable as too much chaos. So over the years, more and more organizations have moved to Agile methods that strike a better balance.

As power users gain more power, they are also going to need to figure out how to find that balance. But they can't just adopt the same Agile methods used by software developers. For example:
-  Scrum assumes you have 3 or more developers creating a product. Although many power users are part of the team, most of their "products" are produced by a single power user. It's hard to have a meaningful Daily Scrum if you're an army of one.
- Many power users work on projects where sprints would be useful, but often they are also working on so many quick and dirty projects that measuring Sprint velocity isn't useful.
- With most power user tools and frameworks, using test-driven development would create an inordinate amount of overhead without producing enough bang for the buck. There aren't a lot of people who use pandas for analysis, for example, who practice test-driven development (although developers who create libraries on top of pandas often use TDD).

But that doesn't mean power users can't benefit from Agile. Sprints, MVPs, prioritized backlog lists, regularly reflecting on how to be more effective, replacing status meetings with something more effective, power users' managers having a role more like scrum masters, groups of power users operating as self organizing teams -- all of this could be extremely useful. The key is to adapt Agile methods to the circumstances facing power users. After all, that's how many Agile methods are created: people were frustrated with how their work was organized, so they started experimenting until they found an approach that fit the reality they faced.

In doing so, power users might help spark a transformation in how organization's developers and/or their vendor's developers work. Too many organizations practice "Checklist Agile": they check all the boxes, but they throw away the spirit of Agile. As organizations wrestle with what it means to be Agile if you are a power user, perhaps they will find themselves ready to also ask that question about the developers.







## Grow An Agile Data Infrastructure

If you're in an IT department, perhaps you've had an experience like this.

You roll out a new tool that empowers power users in a particular department. You run into a couple small problems, but overall users love it.

But 5 weeks later, a manager of one of the power users tells you that your data is garbage. You discover that the power user shared one of their analyses in a meeting with another department, and someone else in the meeting said, "your numbers are way off," and proceeded to show the "accurate" numbers from one of their reports. After a bunch of frantic digging by one of your database developers, you realize that they aren't using the same fields -- e.g., both analyses break down data by month, but your power users analysis uses transaction date, whereas the other department's report uses invoice dispatch date.

Welcome to the joys of Data Governance.

In a large or midsized organization, data governance is absolutely essential. For some of it, such as who gets access to what data, it's easier to build the political support to have staff spend the time to get it right. But for other aspects of data governance, such as creating common definitions of terminology like "date," often no one wants to spend the often labor-intensive, mindnumbing work it requires (quite understandably). As a result, what might've been a painful but manageable problem when all reports are produced by developers can turn into a data swamp when the work has been decentralized.

Data Chefs argues you should use an Agile approach to data governance. For example, rather than trying to get everything right, use a similar strategy to scrum's product backlog: keep a prioritized, ever-changing list so data governance work focuses on the most pressing current needs that have the greatest impact on organizational outcomes.

More generally, Data Chefs argues that you should try to bring the spirit of Agile to all of the infrastructure issues that an ecosystem of power users raises. 

For example, many an organization discovered that building a data warehouse wasn't the silver bullet claimed by business intelligence gurus.  Data warehouses can eat up an enormous amount of time and money, and yet they may end up solving only part of users' needs.  

At the same time, many power user tool vendors pretend that you can just give your users access to your data and they'll be good to go -- and as many organizations have learned the hard way, that's just not true. Even if their tools can handle huge volumes of data, if your databases are highly normalized or if there's a lot of business logic hidden behind the scenes, giving your power users direct access to the data is cruel and unusual punishment.

Unless you're lucky, odds are you will end up needing a hybrid approach. So rather than making a massive commitment to any one strategy, start small, use MVP's get feedback and make progress, and look for ways to gradually expand the data that different types of power users have access to. For example, instead of starting with a data warehouse, perhaps you can start by creating scripts that regularly generate a cleaned up version of your data or by creating a simple web API that some of your power user tools can easily handle. As you iteratively grow your solutions, look for opportunities where it makes sense to re-factor them -- e.g., turning a subset of the scripts into ETL feeds for a small data warehouse.




## Design in Diversity from the Ground Up

Data science, data engineering, analytics, etc. isn't very diverse. If your organization is committed to inclusion and diversity, how do you ensure you don't replicate this problem?

The key: don't make diversity an afterthought. As you are trying to grow your ecosystem of power users, design in diversity from the ground up.

Sometimes even simple steps can make a big difference. For example, in most organizations the administrative staff are more diverse than the IT department, business analysts, etc., and plenty of administrative staff already work with data and would like to do a lot more with it. So as you are training & mentoring power users, focus some of your efforts on recruiting a diverse group of candidates from your administrative staff. If you do this, you also now have a more diverse group of power users from whom you can identify and recruit people to eventually become data scientists and engineers.



## Continuously Smooth the Learning Curve

Too often, the path tools put power users on is pretty raggedy:
- Some tools are great at letting you perform a handful of actions, but once you bump into needs that go beyond the simple things the tool can do, you fall off a cliff: you can't make any progress until a developer steps in.
- Other tools, such as pandas or R, give you a lot of room to grow as your needs become more complex, but getting started can be incredibly intimidating.
- And some tools, such as some of the new "Auto ML" tools that reduce the work needed for machine learning, are like microwaving a Hot Pocket. Most users have no idea about the assumptions and implicit decisions built into the tools are using -- and as these tools become critical to an organization's success, this is a recipe for disaster.

Data Chefs is based on the principle that we want it make it is easy for users to get started as possible, but we also want to make it easy to continue to learn and grow as a user's needs expand.

Makers All, the parent organization for Data Chefs, advocates for a strategy of [smoothing the learning curve](https://toolkit.makersall.org/pages/30-smooth/00-index.html) for all languages, frameworks, and tools for developing emerging tech. Makers All advocates for tech companies and techies who create languages, frameworks, tools, etc. to collaborate with community groups to improve coding UX. Data Chefs' argues that:
- Individual organizations should use a chopped down, lightweight version of Maker All's strategy that's designed to fit the needs of their organization and their staff -- e.g., for a particular set of needs, creating a simple, lightweight library that hides some of panda's complexity, plus template Jupyter notebooks and cheat sheets.
- As organizations begin to collaborate across ecosystems, start taking baby steps towards the more robust approach envisioned by Makers All


## Harness the Power of Community

When organizations training and support their power users, they typically focus primarily on individuals -- even if they are training staff by department. But organizations aren't just composed of individuals. Humans are social creatures who are often part of rich, complex networks. 

Makers All, the parent organization for Data Chefs, argues that our society would be far more effective in training community members to become emerging tech developers if we learn from the example of agricultural's Extension Services, which leveraged the social nature of people to radically transform agricultural practices. For example, Extension Services employed at least one Extension agents in every rural county, who would:

- __Identify and develop Natural Leaders__. Extension agents often focused on identifying and developing natural leaders: farmers who were already widely respected in their community.  These natural leaders had preexisting social networks and relationships they could use to recruit other famers.  And they were also likely to understand the concerns and fears that agents needed to address if farmers were to be convinced to adopt new techniques.  
- __Nurture Neighborhood Clubs__. Extension agents helped farming communities form neighborhood clubs and worked with clubs to ensure farmers got a steady stream of ideas about how they could improve their farming.  As a result, farmers weren't just hearing about an idea brought in by an outsider, they were learning while surrounded by their peers who spoke the same language and understood the realities they faced.  
- __Foster Community Events__. Extension agents helped foster state fairs and other places where farmers could see demonstrations, compete to see who could use new techniques to grow the best crops, etc.

Data Chefs' argues that:
- Individual organizations should use a chopped down, lightweight version of Maker All's strategy that's designed to fit the needs of their organization and their staff 
- As organizations begin to collaborate across ecosystems, start taking baby steps towards the more robust approach envisioned by Makers All


## Encourage Play

For most people, using data feels intimidating and boring -- and working with data is often taught in a way that reinforces those feelings. 

What if we were to make working with data more like play? That would draw in more newcomers, make it less scary for them, and encourage them to want to learn more.

Obviously, you wouldn't want to use this approach all the time -- or even most of the time. The goal isn't that everything should feel like play, it's to find strategic points where we can use a sense of play or playfulness to help users get more comfortable using data to shape how the organization makes decisions.
