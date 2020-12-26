import React from "react";

function ComponentChild(props) {
  return (
    <div className="componentChild">
      <h1>{props.way}</h1>
      <button onClick={props.buttonProp}>Parent to Child</button>
      <button onClick={() => props.buttonProp("child")}>Child to Parent</button>
    </div>
  );
}

export default ComponentChild;
