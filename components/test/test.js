import React, { Component, createContext } from "react";
export let TestCtx = createContext({
  fields: {},
  errors: {},
});

export default class Test extends Component {
  state = {
    fields: {},
    errors: {},
  };

  addField = ({ id, value }) => {
    const { fields } = this.state;

    this.setState({
      fields: {
        ...fields,
        [id]: value,
      },
    });
  };

  render() {
    const testCtx = {
      ...this.state,
      addField: this.addField,
    };
    return (
      <TestCtx.Provider value={testCtx}>
        <div>{this.props.children}</div>
      </TestCtx.Provider>
    );
  }
}
