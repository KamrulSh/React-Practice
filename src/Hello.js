import React from "react";

// use of props
function Hello(props) {
  console.log(props);
  const { name, surname } = props;

  const handleClick = () => console.log("clicked");

  return (
    <div className="hello">
      <h1>
        Hello {name}, {surname}
      </h1>
      <button onClick={handleClick}>Just click</button>
    </div>
  );
}

export default Hello;
