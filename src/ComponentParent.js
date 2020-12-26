import React from "react";
import ComponentChild from "./ComponentChild";

// passing props from parent to child
// passing props from child to parent
class ComponentParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: "Welcome from parent",
      from: "Parent <==> Child"
    };
    this.handleParentChild = this.handleParentChild.bind(this);
  }

  handleParentChild(child) {
    if (child === "child") {
      alert(`Hello, ${this.state.greet}, value passed from ${child}`);
      console.log("Data passed from child to parent");
    } else {
      alert(`Hello, ${this.state.greet} to child`);
      console.log("Data passed from parent to child");
    }
  }

  render() {
    return (
      <div className="componentParent">
        <ComponentChild
          way={this.state.from}
          buttonProp={this.handleParentChild}
        />
      </div>
    );
  }
}

export default ComponentParent;
