import React from "react";

const withCounter = (WrapedComponent, incrementNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }

    handleIncrement = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + incrementNum };
      });
    };
    render() {
      return (
        <WrapedComponent
          count={this.state.counter}
          incrementFunc={this.handleIncrement}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
