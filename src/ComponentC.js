import React from "react";
import { UserConsumer } from "./userContext";

// implementing context api using consumer and provider
class ComponentC extends React.Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h1>Hello {username} (context)</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
