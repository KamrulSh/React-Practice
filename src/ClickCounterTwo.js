import React from "react";

// implementing render props
class ClickCounterTwo extends React.Component {
  render() {
    const { count, incrementFunc } = this.props;
    return (
      <div className="hoverCounter">
        <h1>Counter (render props)</h1>
        <button onClick={incrementFunc}>Counter clicked {count} times</button>
      </div>
    );
  }
}
export default ClickCounterTwo;
