---
title: "From abstraction to algorithm"
date: "2017-10-07"
featuredImage: "./images/from-abstraction-to-algorithm.jpg"
category: "programming"
tags: ["basics"]
---

Before you read this post, make a sandwich. It’s okay, I’ll wait.

Now that you have something yummy to eat while you’re reading this, how did you know what I meant when I asked you to make a sandwich? Did you already know what a sandwich was? Could you picture what your sandwich would look and taste like after you’d made it? Did you need to think about all the steps you’d need to take to construct the sandwich?

The request I made, the phrase “make a sandwich”, is an abstraction. To understand it, you already need to know what a sandwich is, what the desired end result is. You don’t need to think about each step of making the sandwich in detail just yet. Imagine if every time you thought of a sandwich, you thought “First I have to get two slices of bread out, then find the butter in the fridge, open the tub, grab a knife…” and so on. Thinking would take forever that way! When you think “sandwich”, you think of the finished sandwich, ready to eat.

The steps you took to make your no doubt delicious sandwich, the process made up smaller processes, each of which went towards constructing it, is an algorithm. This is the part where you find your bread, spread your butter, decide on your fillings and so on.

The abstraction is knowing what you want; the algorithm gets you what you want. But what comes in between the two? The computing power of your marvellous mind, that’s what.

Making a sandwich and writing code are not all that different. Each involves a set of instructions and an end result. When you made that sandwich, you followed a set of procedures that you had stored in your head. When you’re writing code, you’re writing that set of procedures for the computer to follow.

Getting from an abstraction (“what is sandwich?”) to an algorithm (“I can make a perfect sandwich every time”) is, in many ways, an algorithm itself.

1) Understand what you want to achieve. “I want a sandwich” is a good start. This is the point at which you also want to decide what you want to put in your sandwich. You might be thinking you want cheese in there, so you need to make sure your algorithm doesn’t give you something gross like spiderwebs or lawn clippings. Me, I’m big on tuna mayo sandwiches lately.

2) Break the result down. Figure out what you’ll need. Focus on the easy, obvious things first: what data are you going to need? Bread, butter, fillings. Next, what tools will you need? A knife to spread the butter. For my tuna mayo sandwich, I know that I’m going to need a sub-process in which I get tuna out of the can with a can opener and a spoon, and mix it with mayonnaise in a bowl. Those are extra data sets and tools that I’ll need for my particular sandwich.

3) Use natural language! You wouldn’t say “extract a small portion of milk-derived fats using one side of a sharp implement”. You’d say “scrape some butter onto the knife”. It’s really important not to over-complicate at this stage, but to bridge the gap between your intent and the technicalities of sandwich construction in as clear and simple a way as you can understand. Not only that, but any other programmer who sees your code (or steps into into your kitchen, as it were) should be able to understand your intent from your simple explanation.

4) Write pseudocode. Take that natural language and turn it into concise comments, like this:

  ```js
  // butter bread
  // add filling to one slice of bread
  // put other slice of bread on top
  ```

5) Translate those lines of pseudocode, one by one, into code that the computer can understand. Here’s an example of what the first part of the sandwich-making algorithm might look like:

  ```js
  let sandwich
  if (bread) {
    sandwich = bread + butter
  }
  ```

6) Now for the testing part. How do you know that you got the sandwich right? You need to take a bite. If it tastes like spiderwebs, the taste test has failed, and you need to go back and look at your process to figure out where you went wrong, correct your mistake, and test again. Writing code is very much trial and error, and nobody ever writes a perfect program from start to finish on the first try. Sure, it might seem impossible to mess up a sandwich, and the steps might seem obvious, but to a computer, nothing is obvious.

7) Only once the process is perfect can you tell your computer that this is the definitive and correct way to make a sandwich. Every time you call your sandwich() function now, your computer will produce a perfect sandwich. Yum.

Problem solving in this way is fundamental for programmers. It takes a lot of practice, which is why I can heartily recommend [Code Wars](https://www.codewars.com/) as the perfect resource for honing your problem thinking skills and getting you to think in terms of abstractions and algorithms. I can also recommend this playlist, [The Five Elements of Effective Thinking](https://www.youtube.com/watch?v=ii0xJDVF8c8&list=PLEo7ej2RhHszJy_77UXC8GJpb8LtW-dJT), to get you thinking about the way you think (really meta, huh?). Eventually you’ll be able to predict how your code will run before you reach the testing stage, pre-empt your mistakes, and change from a fixed mindset (“I can’t do this, I give up”) to a growth mindset (“I don’t know how to do this yet, so I’m going to learn”).
