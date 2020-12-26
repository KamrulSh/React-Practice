import React from "react";

// implementing form
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      item: "react"
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  };

  handleChangeItem = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = () => {
    alert(`${this.state.name} ${this.state.comment} ${this.state.item}`);
  };

  render() {
    const { name, comment, item } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <h1>Form</h1>
          <div>
            <label>Name</label>
            <input value={name} onChange={this.handleChangeName} />
          </div>

          <div>
            <label>Comment</label>
            <textarea value={comment} onChange={this.handleChangeComment} />
          </div>

          <div>
            <label>Item</label>
            <select value={item} onChange={this.handleChangeItem}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <button onClick={this.handleClick}>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
