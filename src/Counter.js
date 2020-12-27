import React from "react";

// implementing render props
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div className="hoverCounter">
        {this.props.render(this.state.counter, this.handleIncrement)}
      </div>
    );
  }
}
export default Counter;
