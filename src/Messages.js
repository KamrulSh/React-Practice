import React from "react";

// implementing state and setState
// change of button functionality
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Please Subscribe me",
      val: true
    };

    // binding the function in constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: this.state.val ? "Thank you" : "So sad",
      val: !this.state.val
    });
    console.log("Subs clicked");
  }

  render() {
    return (
      <div className="messages">
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>
          {this.state.val ? "Subscribe" : "Unsubscribe"}
        </button>
      </div>
    );
  }
}

export default Messages;
