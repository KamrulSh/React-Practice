import React from "react";
import withCounter from "./withCounter";

// implementing higher order component
class HoverCounter extends React.Component {
  render() {
    const { count, incrementFunc } = this.props;
    return (
      <div className="hoverCounter">
        <h1 onMouseOver={incrementFunc}>Hover clicked {count} times (hoc)</h1>
      </div>
    );
  }
}
export default withCounter(HoverCounter, 10);
