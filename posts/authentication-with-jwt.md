---
title: Authentication with JSON Web Token
excerpt: We can authenticate users with JSON Web Token
image: authentication-with-jwt.png
isFeatured: true
date: "2022-04-04"
---

## Authentication with JSON Web Token

![Authentication with JWT](authentication-with-jwt.png)

## Using Axios interceptor

We can use Axios interceptor to catch the response from the backend and if it said our token expired, we can renew the token with the refresh token. Don't need user do it manually.

```js
router.post("/token", (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(404).json({ message: "Invalid request" });
  if (refreshToken in refreshTokens) {
    const user = {
      username: "hai",
      role: "admin",
    };
    const token = jwt.sign(user, _CONF.SECRET, { expiresIn: _CONF.tokenLife });
    refreshTokens[refreshToken].token = token;
    res.status(200).json({ token });
  } else res.status(404).json({ message: "Invalid token" });
});
```
