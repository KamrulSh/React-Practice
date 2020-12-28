import React from "react";

// implementing render props
class HoverCounterTwo extends React.Component {
  render() {
    const { count, incrementFunc } = this.props;
    return (
      <div className="">
        <h1 onMouseOver={incrementFunc}>
          Hover clicked {count} times (render)
        </h1>
      </div>
    );
  }
}
export default HoverCounterTwo;
