import React from "react";
import RefsDemo2 from "./RefsDemo2";

// implementing Refs with class component
class RefsInput extends React.Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef();
  }

  focusHandler = () => {
    this.compRef.current.focusInput();
  };

  render() {
    return (
      <div className="refsInput">
        <RefsDemo2 ref={this.compRef} />
        <button onClick={this.focusHandler}>Focus input</button>
      </div>
    );
  }
}
export default RefsInput;
