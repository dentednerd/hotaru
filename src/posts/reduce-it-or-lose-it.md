---
title: "Reduce It or Lose It"
date: "2017-10-17"
featuredImage: "./SwissArmyKnife.jpg"
---

`.reduce()` is the Swiss army knife of array manipulation. We use this function to  transform an array into anything we want, be it a single value, another array, or an object. Yet it can be really hard for folks new to JavaScript to get their heads around. I know that I really struggled with it until I saw some really simple examples, and from then onwards every kata I did ended up with me saying “stick a reduce on it, bosh”.  

To reduce an array, you need two things: a reducer function, and an initial value for your end result. Rather than try to explain these, let’s just jump into an example.  

```js
let nums = [1,2,3,4,5];
let sum = nums.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0)
```

We’ve got an array, nums, and a function, `sum`, that runs `.reduce` on nums to add its contents into one value. You’ll see that `.reduce()` takes those two arguments I mentioned: the  function that does the reducing, and the initial value for the end result – what we call the accumulator. The accumulator begins as 0, which tells us that our end result is going to be a number.  

But wait! Did you spot the word `accumulator` in the function? It’s the first argument in the reducer function! This is necessary for every reduce function – the first argument in the reducer function must be the accumulator, even if you don’t name it that. I recommend that for your first few reduce functions, you call it `acc` – it’s easier to type, and you know exactly what it stands for.  

How about that second argument in the reducer function? The second argument in the reducer function refers to each value in the array. What `.reduce()` will do is iterate through the array, and run each value through the reducer function. Our function here returns the sum of the accumulator, whatever state it’s in at this point in the `.reduce()` process, and the item currently being processed. Let’s break it down.  

The accumulator starts at 0. Our first value `1` comes into the function and gets added to the accumulator. Now the accumulator is 1. Our next value `2` gets added to the accumulator, so now the accumulator is at 3. Once the reduce function is finished with `5`, there are no more values in the array, so the accumulator’s final value, 15, is returned.  

Let’s look at another reduce function that works on our `nums` array.  

```js
let doubles = nums.reduce(function (acc, num) {
acc.push(num * 2);
  return acc;
}, [])
```

This time, our accumulator is an array. Each iteration of the reducer function will push a new value into that array, so our resulting array will be the same length as nums. The reducer function pushes the double of each `num` into the accumulator, so we expect this function to return `[2,4,6,8,10]`.  

Incidentally, there’s a very good reason why we can’t just use `return acc.push(num * 2)` in the reducer function. It’s because `.push()` would return the length of the `nums` array, which is absolutely not what we want.  

One more example!  

```js
let evens = nums.reduce(function (acc, num) {
  if (num % 2 === 0) {
    acc.push(num * 2);
  }
  return acc;
}, []);
```

Our result will be an array again, but this time it will only contain even numbers – `[2,4]`. Reduces can and do get far more complicated than these examples, but this should give you an idea of what `.reduce()` can do to make your coding life easier. Now go stick a reduce on it. Bosh.
