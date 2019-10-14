---
layout: content
title: Grow An Agile Data Infrastructure
image: cooking-toys.jpg
---

If you're in an IT department, perhaps you've had an experience like this.

You roll out a new tool that empowers power users in a particular department. You run into a couple small problems, but overall users love it.

But five weeks later, a manager of one of the power users tells you that your data is garbage. You discover that when the power user shared one of their analyses in a meeting with another department,  someone in the meeting said, "your numbers are way off," and proceeded to show the "accurate" numbers from one of their reports. After a bunch of frantic digging by one of your database developers, you realize that the analyses weren't using the same fields -- e.g., both analyses break down data by month, but your power users analysis uses transaction date and the other department's report uses invoice batch date.

Welcome to the joys of Data Governance.

In a large or midsized organization, data governance is absolutely essential. For some issues, such as who gets access to what data, it's easy to build the political support to have staff spend the time to get it right. But for other aspects of data governance, such as creating common definitions of terminology like "date," most of the time no one wants to spend the often labor-intensive, mindnumbing work that's required (quite understandably). As a result, what might've been a painful but manageable problem when all reports are produced by developers can turn into a data swamp when analysis work is decentralized.

Data Chefs argues that you should use an Agile approach to data governance. For example, rather than trying to get everything right, use a similar strategy to scrum's product backlog: keep a prioritized, ever-changing list so data governance work focuses on the most pressing current needs that have the greatest impact on organizational outcomes.

More generally, Data Chefs argues that you should try to bring the spirit of Agile to all of the infrastructure issues that an ecosystem of power users raises. 

For example, many an organization discovered that building a data warehouse wasn't the silver bullet claimed by business intelligence gurus.  Data warehouses can eat up an enormous amount of time and money, and yet they may end up solving only part of users' needs.  

At the same time, many power user tool vendors pretend that you can just give your users access to your data and they'll be good to go; as many organizations have learned the hard way, that's just not true. Even if the vendor's tools can comfortably handle a ton of data, if your databases are highly normalized or if there's a lot of business logic hidden behind the scenes, giving your power users direct access to the data is cruel and unusual punishment.

Unless you're lucky, odds are you'll end up needing a hybrid approach. So rather than making a massive commitment to any one strategy, start small, use MVP's get feedback and make progress, and look for ways to gradually expand the data that different types of power users have access to. For example, instead of starting with a data warehouse, perhaps you can start by creating scripts that regularly generate a cleaned up version of your data or by creating a simple web API that some of your power user tools can easily work with. As you iteratively grow your solutions, look for opportunities where it makes sense to re-factor them -- e.g., turning some of the scripts into ETL feeds for a small data warehouse.