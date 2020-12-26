import React from "react";

class CounterFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement() {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1
      }),
      () => console.log(this.state.counter)
    );
    //console.log(this.state.counter);
  }

  handleDecrement() {
    this.setState(
      (prevStat) => ({
        counter: prevStat.counter - 1
      }),
      () => console.log(this.state.counter)
    );
    //console.log(this.state.counter);
  }

  // experimental binding
  handleIncrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };

  handleDecrementFive = () => {
    this.handleDecrement();
    this.handleDecrement();
    this.handleDecrement();
    this.handleDecrement();
    this.handleDecrement();
  };

  render() {
    return (
      <div className="counterFive">
        <h1>CounterByFive {this.state.counter}</h1>
        <button onClick={this.handleIncrementFive}>Increment</button>
        <button onClick={this.handleDecrementFive}>Decrement</button>
      </div>
    );
  }
}
export default CounterFive;
