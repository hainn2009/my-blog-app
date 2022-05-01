import React, { Component, KeyboardEventHandler } from "react";

import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";

const components = {
  DropdownIndicator: null,
};

export default class CreatableInputOnly extends Component {
  state = {
    inputValue: "",
    value: [],
  };
  handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
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
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Type something and press enter..."
        value={value}
        // option={[
        //   { label: 1, value: 1 },
        //   { label: 2, value: 2 },
        // ]}
      />
    );
  }
}
