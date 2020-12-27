import React from "react";
import withCounter from "./withCounter";

// implementing higher order component
class ClickCounter extends React.Component {
  render() {
    const { count, incrementFunc } = this.props;
    return (
      <div className="clickCounter">
        <h1>Counter (hoc) {this.props.name}</h1>
        <button onClick={incrementFunc}>Counter clicked {count} times</button>
      </div>
    );
  }
}
export default withCounter(ClickCounter, 5);
