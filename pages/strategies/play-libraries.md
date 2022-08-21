---
layout: content
title: Creative Data Visualizations
permalink: /dataviz/
image: cookies-dataviz.jpg
---



It's pretty straightforward to give users a nice user interface for creating standard data visualizations. But what if you want to go beyond that? Creative Data Visualizations is a series of [Data Chefs]( https://datachefs.org/)' experiments to see if we can incrementally teach coding to folks who aren't developers.

## p5.js

[p5.js](https://p5js.org/) is a web-based JavaScript version of [Processing](https://processing.org/), "a language for learning how to code within the context of the visual arts."

My first DataViz experiments:

<!-- - The [simplest first program]](../pages/p5js/first-project/index.html); here's the [JavaScript](https://github.com/makersall/playful-coding/blob/main/pages/p5js/first-project/sketch.js) -->
 - Using [flowers](../pages/p5js/flowers1/index.html) for a progress report
-  My  [playground](../pages/p5js/experiments.html), for taking baby steps to start teaching myself p5
  
_{NOTE: put copies of my DataViz experiments on the p5.js online editor/website}_
  
What p5.js can do:  
- [Klint](../pages/p5js/klint/index.html), a clone of  [niccab](https://editor.p5js.org/niccab/sketches)'s replication of a Klint painting, to give you a feel for what a relatively small number of Processing commands can do ([JavaScript code](https://github.com/makersall/playful-coding/blob/main/pages/p5js/klint/sketch.js))
- Processing comes with a terrific set of [examples](https://p5js.org/examples/) that should give you an idea of what you can do; also check out the [reference](https://p5js.org/reference/) page for examples of how to use specific commands
- [Examples I've grabbed](../pages/p5js/examples.html) from around the web


To learn Processing, there are 2 ways to go:
- Use p5.js's [intro tutorials](https://p5js.org/learn/)
- Use the YouTube videos [for beginners with no coding experience](https://thecodingtrain.com/beginners/p5js/), courtesy of Daniel Shiffman's [Coding Train](https://thecodingtrain.com/)
  
Processing has a truly amazing set of libraries, including:

-  a Nice [GUI library](https://github.com/bitcraftlab/p5.gui) — some really fun examples
- a better [animation framework](https://www.npmjs.com/package/p5.createloop)
- a [plotting library](https://github.com/jagracar/grafica.js), which also allows you to do lots of cool animations
- a library that lets you create shapes with a [Sketchy](https://github.com/generative-light/p5.scribble.js) look
- a crazy fun [sprite library](http://molleindustria.github.io/p5.play/)
- a nice [particle library](https://github.com/bobcgausa/cook-js)


You might also want to check out these [examples](http://jsfiddle.net/user/jagracar/fiddles/) as well as a series of experiments of doing [letters as particles](http://jsfiddle.net/bobcook/mph714p8/),
plus some fabulous examples from a [36 day challenge](https://36xp5.site). 




## BabylonJS

BabylonJS is a powerful JavaScript library for creating WebVR. It can be a bit intimidating to get started if you don't have any programming background. So, we've been experimenting with creating a library that hides some of the trickier stuff.

<p> The following are a few simple data visualization experiments. Most of them don't follow dataviz best practices, and they need work to make them prettier. The purpose of these examples is to rough out what's involved in doing a data visualization using BabylonJS. </p>

<ul>
<li> Simple visualization using data: <a href="../pages/bjs-viz/goals/index.html">Goals</a></li>
<li> Animation:  <a href="../pages/bjs-viz/moores-law/index.html">Moore's Law</a></li>
<li> Animation:  <a href="../pages/bjs-viz/red-airplane.html"> Airplane</a>: Proof of concept where a value is visualized based on how fast it animation is going</li>
<li> Animation:  <a href="../pages/bjs-viz/engagement/index.html">Member engagement over time</a>: although it doesn't fully work, gives you a sense of what you could do using animation of lots of objects</li>
<li> Work in progress: <a href="../pages/bjs-viz/sandwich/index.html">Calories in a burger</a>: Demonstrating how you could create a data visualization where the data was represented by different layers in a burger</li>
<!-- <li> Work in progress: <a href="../pages/bjs-viz/email-optouts/index.html"> Email opt outs</a> -->
</ul>





## Other Potential Frameworks/Tools


### D3.js

We've done a bunch of work with D3.js, including teaching [A Taste of D3](http://aschneiderman.github.io/a-taste-of-d3/) at [ASHA](https://www.asha.org/) and creating
[D3 Sandwiches](http://aschneiderman.github.io/d3_sandwich/), a pilot project toexplore teaching d3 by interactively looking at the layers of a d3 "sandwich." Ultimately we decided to stop; D3.js is powerful but it's just too painful to teach to beginners.


### GSAP

GSAP is a JavaScript library for creating animations.

{Why it's worth exploring}



## Long-Term Vision

These experiments with creative data visualizations are part of a project called [Data Chefs]( https://datachefs.org/). Data Chefs is a framework to help organizations unleash the power of analytics and data science by growing organizational ecosystems of power users -- and to do so in a way that in the long term will also help the community. It advocates for:

- Growing an organization's internal ecosystem to help power users flourish, using an iterative approach that racks up small, strategic wins while building towards larger victories
- Building an ecosystem across organizations so they can share knowledge, pool resources, and collectively work to [smooth the learning curve](https://toolkit.makersall.org/pages/30-smooth/00-index.html) from beginner to power user to data scientist/engineer
- Using this ecosystem across organizations to connect large organizations to the community, so communities can also benefit -- and in doing so, laying the groundwork to help communities from Harlem to Harlan County [benefit from the explosion of wealth](https://toolkit.makersall.org) that will be created by emerging tech over the next 20 years.

NOTE:  replace ../pages w http://makersall.org/playful-coding/dataviz/