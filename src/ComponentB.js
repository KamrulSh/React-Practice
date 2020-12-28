import React from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

// implementing context api using contextType
class ComponentB extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="">
        <h1>Hello {this.context} (contextType)</h1>
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB;
