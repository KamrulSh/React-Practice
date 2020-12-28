import React from "react";
import axios from "axios";

// implementing REST api POST request
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;
    console.log("posts=>", this.state.posts);
    return (
      <form className="postForm" onSubmit={this.submitHandler}>
        <div>
          <label>UserID</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;
