---
title: "DeSoto: a StyleStage contribution"
date: "2021-10-19"
featuredImage: "./images/desoto.png"
category: "projects"
tags: ["CSS", "Sass"]
---

Sometimes you have to do the scary thing. I finally submitted a contribution to a project that I've been working on for almost two years - my perception of time, like so many others, has been skewed by the pandemic, so two years is a guess - after countless ideas, iterations, and do-overs. I had to do battle with my innate perfectionism and my anxiety around contributing to community projects, but today I have conquered both.

The project in question is [StyleStage](https://stylestage.dev/), created and maintained by [Steph Eckles](https://twitter.com/5t3ph). It's a CSS showcase that anyone can contribute to; the idea is that you create your own stylesheet for the front page of the project. Your design, your method and the technology you use are all up to you, as long as you end up with a single unminified CSS file.

So that's what I did, and now here's how I did it. Welcome to the story of my StyleStage contribution: [DeSoto](https://stylestage.dev/styles/desoto/).

## Be inspired by what you love

Just looking at the contributions to StyleStage can lead you down a rabbit hole that's simultaneously awesome, inspiring and absolutely terrifying. Some of the contributions people have made are _amazing_. I'm not going to link to my favourites, because I feel that would be against the spirit of the project, but one of my earliest iterations of this project was essentially trying to emulate another contribution I'd seen, just with different colours. There was _so much_ that was cool about it that I wanted to learn as much as I could from building something similar myself.

But comparison is the thief of joy. There's no fun in trying to emulate someone else, no matter how much they have to teach us; this theme had to be mine and mine alone, and it was going to be of the same high standard as all the other contributions I'd seen. It took me a while to land on something fresh that I knew I'd enjoy building, but in the end inspiration came from a couple of old friends.

Have you ever played the [Sam & Max](https://skunkapegames.com/samandmax/) games? I'm a huge fan of the Freelance Police and their unlikely adventures. Visually the game feel unique to me - they reflect the retro comic book styling of the characters' origin.

Whilst looking through my video game library for inspiration - what, you don't? - the promo image for [Sam & Max Save the World](https://store.steampowered.com/app/1440440/Sam__Max_Save_the_World/) jumped out at me. I was really taken by the background - those green spirals shouted "`repeated-radial-gradient`!" at me - and the big, bold, comic-book-iness of the text. It grabbed my imagination, and I got to work, using this image as my reference.

## Don't be afraid to get Sassy

I wanted to make this project a challenge for myself. The idea of StyleStage is to challenge yourself, after all. I've been writing CSS since I was 15, and building designs professionally since 2017, so the creation of a contribution was well within my comfort zone.

So, where to stretch myself? I could have written the entire thing in a single CSS file, jumping back and forth between elements and going half-blind just from the constant scrolling. Ick. I've spent a lot of time in the past few years getting comfortable with CSS-in-JS libraries, but this isn't a JS project, so those were out. Still, I wanted a way of compartmentalising the different elements of the page, whilst also being able to create reusable bits of code. (Clearly I've been in React-land too long.)

In the end I decided to give [Sass](https://sass-lang.com/) a spin. I was already used to nested selectors and variables from working with CSS-in-JS libraries like Emotion and styled-components, but the absence of curly braces and semicolons took a minute to get used to. What with modules and partials taking care of the "componentisation" I craved after CSS-in-JS, and mixins giving me the reusable code I wanted, the whole codebase ended up being really DRY, which made me very happy. I used Gulp to watch for changes in all the Sass files and run the compilation into a single CSS file, and I used the [Live Server VSCode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to reflect those changes instantly in the browser. (I could have used Browsersync with Gulp, but I chose not to this time.)

## Harness the wisdom of the community

I directly referenced the colours from my reference image to create the background, using a `radial-gradient` layered over that green `repeated-radial-gradient` to lend it some subtle depth. If it feels vaguely hypnotic, that's the point - and that's the only spoilerific thing about Sam & Max Saves the World that I'm going to offer. After the background, I wanted to create a colour palette that had enough contrast for accessibility, but that also subtly referred to the characters. I settled on police-badge gold and uniform blue, the kind of colours you see on Sam's 1960 DeSoto Adventurer. That's how this theme got its name, too.

The game and its promotional materials use some fonts that I _think_ are proprietary to the creators of the game (RIP Telltale, viva Skunkape), so they were either very difficult to find or I could potentially have got in trouble for using them. So I had to improvise a little. [Google Fonts](https://fonts.google.com/) yielded some positive results: [Bangers](https://fonts.google.com/specimen/Bangers) is a nice punchy font for titles; [Comic Neue](https://fonts.google.com/specimen/Comic+Neue) is the neater, cleaner cousin of Comic Sans, ideal for those comic-book-ish accents; and [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) is a friendly serif font that's ideal for body text.

I had a look on Codepen, one of my favourite sources of inspiration, for some comic-book CSS styles to use. Two in particular ended up being used really heavily in this project: a [hand drawn border effect by Tiffany Rayside](https://codepen.io/tmrDevelops/pen/NPXodB), and then [this really neat two-tone dotted effect by Gabriele Corti](https://codepen.io/borntofrappe/pen/GeXMgm), to which I applied a little hover animation to change the colours. Thank you both! These effects really make the project sing.

Finally, there was one more CSS effect I'd been keeping in my back pocket to use on the right project, and it finally found a good home here - this [3D text effect by Mark Otto](https://markdotto.com/playground/3d-text/), which I think you'll agree makes for an _amazing_ page heading when used in conjunction with the Bangers font.

## Accessibility for all

The Style Stage guidelines specify that designs...

- should be responsive
- pass contrast tests in [aXe](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- should have animations removed when `prefers-reduced-motion` is active.

I'm used to building mobile-first responsive designs, so this part was no issue. Neither was the removal of animations - although I've never used the `prefers-reduced-motion` rule before, it makes a lot of sense and I'll be using it more in future. With this setting active on your machine, the buttons don't increase in size when you hover over them.

The contrast tests were interesting though. I've used the contrast ratio checks in Chrome's dev tools in both this and previous projects, so I was fairly certain that I'd pass the tests in aXe - a tool that was new to me. However, aXe runs into problems when text appears on a gradient. It provides a "potential error" message under the "Needs Review" section of the report, stating "Element's background color could not be determined due to a background gradient". And that happened a _lot_ on this page. Fifty-four times, in fact.

This was fine - the page otherwise passes all aXe's tests with no errors at all (yay!) - but I was curious about how other tools handled gradients. So I tried the [WAVE evaluation tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), and _boom_, errors everywhere. This was for two reasons: firstly, WAVE contrasts text with the `background-color`, not the `background-image` where the gradient lives. Secondly, WAVE ignores `test-shadow` entirely. Even if the text shadow provides enough contrast with the background, WAVE doesn't see it and throws an error. So WAVE gave me 20 contrast errors. I could go back and provide some better `background-color` as a fallback on my gradient elements, but to me it seems like a very edgy edge case. That said, I'm happy to take advice from accessibility experts on this subject!

## In the end, just do the scary thing

And that's how I built my Style Stage contribution. Hope it's useful if you're thinking of making your own, or even if you're thinking of contributing to another community project out there. The first time can be intimidating, but go ahead and do it anyway. It's a good feeling!
