import React from "react";

class PureComp extends React.PureComponent {
  render() {
    console.log(`Pure component ${this.props.name}`);
    return <div className="pureComp">Pure component {this.props.name}</div>;
  }
}
export default PureComp;
