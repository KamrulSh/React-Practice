import React from "react";

// use of props
function ErrorDemo({ name }) {
  if (name === "joker") {
    throw Error("This is an error");
  }

  return <div>Hello {name}</div>;
}

export default ErrorDemo;
