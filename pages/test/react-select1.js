import React, { Component } from "react";

import CreatableSelect from "react-select/creatable";
// import { ColourOption, colourOptions } from "../data";
import { ActionMeta, OnChangeValue } from "react-select";

const options = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
];

export default class CreatableSingle extends Component {
  //   handleChange = (newValue, actionMeta) => {
  //     console.group("Value Changed");
  //     console.log(newValue);
  //     console.log(`action: ${actionMeta.action}`);
  //     console.groupEnd();
  //   };
  handleChange = (newValue) => {
    console.log(newValue);
  };
  handleInputChange = (inputValue, actionMeta) => {
    // console.group("Input Changed");
    // console.log(inputValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  render() {
    return <CreatableSelect isClearable isMulti onChange={this.handleChange} onInputChange={this.handleInputChange} options={options} />;
  }
}
