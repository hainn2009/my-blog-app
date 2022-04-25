---
title: "How to style the invalid value of react select"
date: "2022-04-22"
image: style-invalid-value-of-react-select.png
excerpt: React select is a powerful component to be used in React app. But it does not come with a built-in way to style invalid value.
isFeatured: true
---

## How to style the invalid value of react select

There are 2 ways to do that.

### 1. Write inline style

```js
<Select
  className="select-css"
  name="selectedGroups"
  placeholder="Enter Request Id"
  onChange={this.setSelectedRequestId}
  options={this.state.requestIdOptions}
  value={this.state.selectedRequestId}
  styles={{
    control: (base, state) => ({
      ...base,
      borderColor: this.state.selectedRequestId.value ? "#ddd" : "red",
      "&:hover": { borderColor: this.state.selectedRequestId.value ? "#ddd" : "red" },
    }),
  }}
/>
```

### 2. Create custom component

Same as above, i will add it in somedays.
