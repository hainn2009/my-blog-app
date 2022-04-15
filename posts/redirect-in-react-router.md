---
title: Redirect in React Router
excerpt: Let 's dive in how to redirect in React Router
image: redirect-in-react-router.png
isFeatured: true
date: "2022-04-15"
---

## Redirect in React Router

In react app, to redirect we can do the following:

- Call push method of history object, in this object we can also specific the state. Example: pass the username to other page.

```js
props.history.push(props.history.location.state.from, { username: feedback.data });
```

- Call goBack method of history object

```js
props.history.goBack();
```
