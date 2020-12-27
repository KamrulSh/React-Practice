import React from "react";

const withCounter = (WrapedComponent) => {
  class WithCounter extends React.Component {
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
        <WrapedComponent
          count={this.state.counter}
          incrementFunc={this.handleIncrement}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
