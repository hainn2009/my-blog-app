---
title: A funny question about javascript
excerpt: A funny question about javascript
image: funny-question-about-javascript.jpg
isFeatured: true
date: "2022-10-06"
---

## A funny question about javascript

Is is possible to this statement return true ?

```js
a == 1 && a == 2 && a == 3;
```

## Answer

Yes, first time you see it, you may think that "Are you kidding me?". But actually, there is some cases we can return true. Of couse, a variable must not a number but it is an object. And each time we access it, the returned value will increase by 1.

```js
let a = {
    i: 1,
    valueOf() {
        return this.i++;
    },
};

if (a == 1 && a == 2 && a == 3) {
    console.log("hello");
}
```
