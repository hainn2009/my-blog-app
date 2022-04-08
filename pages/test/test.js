import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form";
import Input from "./Input";
import TextInput from "./gist-1";

import "./styles.css";

function App() {
  const customRules = {
    weirdRule: {
      rule() {
        return {
          test(fieldValue) {
            return fieldValue === "weird";
          },
        };
      },
      formatter(id) {
        return `${id} can have only one value: weird`;
      },
    },
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form>
        <Input id="email" customRules={customRules} validate="weirdRule" />
        <Input id="userName" validate="numeric" />
        <TextInput
          id="test"
          validate="numeric"
          placeholder="testing"
          validatge="numeric"
          events={{
            onChange: (data) => console.log(data),
            onFocus: (val) => console.log("focused!"),
            onBlur: (value) => console.log("blurred!"),
          }}
        />
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
