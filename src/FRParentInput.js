import React from "react";
import FRInput from "./FRInput";

// implementing forward Refs
class FRParentInput extends React.Component {
  constructor(props) {
    super(props);
    this.frdRef = React.createRef();
  }
  handleClick = () => {
    this.frdRef.current.focus();
  };

  render() {
    return (
      <div className="frParentInput">
        <h1>Forwarding Refs</h1>
        <FRInput ref={this.frdRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
export default FRParentInput;
