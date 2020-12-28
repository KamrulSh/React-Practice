import React from "react";
import ComponentB from "./ComponentB";

// implementing context api
class ComponentA extends React.Component {
  render() {
    return (
      <div className="component">
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
