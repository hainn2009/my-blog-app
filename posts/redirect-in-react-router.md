---
title: Redirect in React Router
excerpt: Let 's dive in how to redirect in React Router
image: redirect-in-react-router.png
isFeatured: true
date: "2022-04-15"
---

## Redirect in React Router

In react app, to redirect we can do the following:

- Call push method of history object, in this object we can also specific the state. Example: from login page, user do not remember the username, he can use forgot username page to recover username and after that redirect to login page.

```js
// from login page
this.props.history.push("/forgotusername" + this.props.location.search, { from: this.props.location.pathname });
// from forgot username page
props.history.push(props.history.location.state.from, { username: feedback.data });
```

- Call goBack method of history object

```js
props.history.goBack();
```
