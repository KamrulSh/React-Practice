import React from "react";

class RefsDemo2 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div className="refsDemo2">
        <h1>Refs demo 2</h1>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default RefsDemo2;
