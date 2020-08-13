---
title: ".reduce(): reduce it or lose it"
date: "2017-10-17"
featuredImage: "./images/reduce-it-or-lose-it.jpg"
category: "programming"
tags: ["basics", "learning resources"]
---

`.reduce()` is the Swiss army knife of array manipulation. We use this function to transform an array into anything we want - a single value, another array, an object, anything.

It can be hard for folks learning JavaScript to understand `.reduce()` at first, because it's not immediately obvious how it works. I really struggled with it until I saw some examples, but once I understood what was going on, I approached every kata by saying “stick a `.reduce()` on it, aaand _bosh_”.  

To reduce an array, you need two parameters:

- a _reducer function_
- an _accumulator_; an initial value that will become your end result

Rather than try to explain these, let’s jump right into an example.

## Example 1: sum()

```js
let nums = [1,2,3,4,5];
let sum = nums.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
```

We’ve got an array, `nums`, and a function, `sum`, that runs `.reduce` on `nums` to add its values into a single value. `nums.reduce()` takes those two arguments I mentioned: the function that does the reducing, and a value to initialise the accumulator. Here the accumulator starts at `0`, which tells us that our end result is going to be a number.  

Do you spot the word `accumulator` in the reducer function itself? This is necessary for every `.reduce()` function – the first argument in the reducer function must be the accumulator. I recommend that when you come to write your first few `.reduce()` functions, you call it `acc` – it’s easier to type than `accumulator`, and you know exactly what it stands for.  

The second argument in the reducer function refers to each value in the array. If you've used the `.map()` or `.filter()` array methods before, you'll have seen this same parameter in those. `.reduce()` will iterate through the array, running each value through the reducer function in order until there are no more values left to run, then return the accumulator.  

Let's break this down. To begin with, `accumulator = 0`. Then `.reduce()` starts to iterate:

1. `nums[0] = 1`, so `accumulator = 1`  
2. `nums[1] = 2`, so `accumulator = 3`  
3. `nums[2] = 3`, so `accumulator = 6`  
4. `nums[3] = 4`, so `accumulator = 10`
5. `nums[4] = 5`, so `accumulator = 15`

With no more values to iterate, `.reduce()` returns the final value of `accumulator`. In other words, `sum() = 15`.

Let’s look at another `.reduce()` that operates on the same `nums` array.  

## Example 2: doubles()

```js
let doubles = nums.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
```

This time, `acc` is an array. Each iteration of the reducer function will push a new value into that array, so our resulting array will be the same length as `nums`. The reducer function pushes the double of each `num` into `acc`, so `doubles() = [2,4,6,8,10]`.  

Incidentally, there’s a very good reason why we can’t just use `return acc.push(num * 2)` in the reducer function. It’s because `.push()` returns the length of the array it pushes a value onto, which is absolutely not what we want. So we have to run `.push()` first, then `return acc`.  

One more example!  

## Example 3: evens()

```js
let evens = nums.reduce(function (acc, num) {
  if (num % 2 === 0) {
    acc.push(num * 2);
  }
  return acc;
}, []);
```

Our result will be an array again, but this time it will only contain even numbers – `evens() = [2,4]`. We're only pushing values from `nums` that match the condition set out in the `if` statement. Everything else is ignored.

`.reduce()` can and does get far more complicated than these examples, but this should give you an idea of what it can do to make your coding life easier. Now go stick a `.reduce()` on it. _Bosh._

## Further reading

- [MDN: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [FreeCodeCamp: A Guide To The Reduce Method In Javascript​](https://www.freecodecamp.org/news/reduce-f47a7da511a9/)
- [codeburst.io: Learn & Understand JavaScript’s Reduce Function](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc)
