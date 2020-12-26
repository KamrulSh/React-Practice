import React from "react";

class CounterOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => console.log(this.state.counter)
    );
    //console.log(this.state.counter);
  }

  handleDecrement() {
    this.setState(
      {
        counter: this.state.counter - 1
      },
      () => console.log(this.state.counter)
    );
    //console.log(this.state.counter);
  }

  render() {
    return (
      <div className="counterOne">
        <h1>CounterByOne {this.state.counter}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
      </div>
    );
  }
}
export default CounterOne;
