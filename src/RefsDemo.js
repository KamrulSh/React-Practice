import React from "react";

// implementing Refs
class RefsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  submitHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    console.log(`Regular component ${this.props.name}`);
    return (
      <div className="refsDemo">
        <h1>Refs demo</h1>
        <input type="text" ref={this.inputRef} />
        <button type="submit" onClick={this.submitHandler}>
          Submit
        </button>
      </div>
    );
  }
}
export default RefsDemo;
