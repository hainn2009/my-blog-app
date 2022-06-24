import React, { Component } from "react";

import CreatableSelect from "react-select/creatable";
// import { ColourOption, colourOptions } from "../data";
import { ActionMeta, OnChangeValue } from "react-select";
import Select from "react-select";

const options1 = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const options = [
  { label: "Green", value: "green" },
  { label: "Red", value: "red" },
];

export default class CreatableSingle extends Component {
  //   handleChange = (newValue, actionMeta) => {
  //     console.group("Value Changed");
  //     console.log(newValue);
  //     console.log(`action: ${actionMeta.action}`);
  //     console.groupEnd();
  //   };
  state = {
    colors: [{ label: "test", value: "test" }],
  };
  handleChange = (colors) => {
    console.log(colors);
    this.setState({
      colors,
    });
  };
  handleInputChange = (inputValue, actionMeta) => {
    // console.group("Input Changed");
    // console.log(inputValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  render() {
    return (
      <div style={{ width: "400px" }}>
        <CreatableSelect
          isClearable={false}
          isMulti
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          value={this.state.colors}
          options={options}
          // isDisabled
        />
        <Select isMulti options={options1} />
      </div>
    );
  }
}
