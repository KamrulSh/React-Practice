import React from "react";

class ReguComp extends React.Component {
  render() {
    console.log(`Regular component ${this.props.name}`);
    return <div className="reguComp">Regular component {this.props.time}</div>;
  }
}
export default ReguComp;
