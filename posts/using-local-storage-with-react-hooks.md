---
title: Reactstrap Validation
excerpt: Reactstrap has some good components and classes to support validate form. We should try to use these to make our website become better.
image: reactstrap-validation.png
isFeatured: true
date: "2022-04-02"
---

## Using localStorage with React Hooks

You can read the original link [Reference Link](https://blog.logrocket.com/using-localstorage-react-hooks/)
There are 2 mechanisms of web browser's storage: localStorage and sessionStorage.

- LocalStorage: data will persist even when close the browser
- SessionStorage: data will only persist if we do not close the tab

### Methods

We will use 3 methods that local storage provides us:

```js
localStorage.saveItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
```

### Create a customs hooks to work with local storage

Create useLocalStorage like this

```js
const useLocalStorage = ({ key, value }) => {
  const [data, setData] = useState({ key, value });
  localStorage.setItem(key, value);
  const item = localStorage.getItem(key);
  const setItem = (key, value) => localStorage.setItem();
  return [item, setItem];
};
```
