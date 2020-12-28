import React from "react";
import axios from "axios";

// implementing REST api GET request
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { posts } = this.state;
    console.log("posts=>", this.state.posts);
    return (
      <div className="postList">
        <h1>post list JSON</h1>
        {posts.length
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : "Please wait..."}
      </div>
    );
  }
}

export default PostList;
