import React, { Component } from "react";

import CreatableSelect from "react-select/creatable";
// import { ColourOption, colourOptions } from "../data";
import { ActionMeta, OnChangeValue } from "react-select";

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
    colors: [],
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
    // if we don't use options but value property, what happen ? => still ok, but should use other version
    return (
      <div style={{ width: "400px" }}>
        <CreatableSelect
          isClearable
          isMulti
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          value={this.state.colors}
          // options={options}
        />
        ;
      </div>
    );
  }
}
