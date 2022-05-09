---
title: Createable react select
excerpt: Can we create a new item in react select
image: createable-react-select.png
isFeatured: true
date: "2022-05-02"
---

## Createble react select

We usually choose existing items in a react select component. But can we create new item in the react select ?

### A dropdown list box with item createable

```js
import CreatableSelect from "react-select/creatable";

const options = [
  { label: "Green", value: "green" },
  { label: "Red", value: "red" },
];

handleChange = (newValue) => {
    console.log(newValue);
    // put new value in the state
  };

render() {
    return (
      <div style={{ width: "400px" }}>
        <CreatableSelect isClearable isMulti onChange={this.handleChange} onInputChange={this.handleInputChange} options={options} />;
      </div>
    );
  }

```

### A text box with multiitems can be input

Only text box, not select box

```js
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

export default class CreatableInputOnly extends Component {
  state = {
    inputValue: "",
    value: [],
  };
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (event) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: "",
          value: [...value, { label: inputValue, value: inputValue }],
        });
        event.preventDefault();
    }
  };
  render() {
    const { inputValue, value } = this.state;
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={true}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Type something and press enter..."
        value={value}
      />
    );
  }
}
```
