import React from "react";

// implementing render props
function Person(props) {
  return (
    <div className="person">
      <h1>Render props: {props.render(false)}</h1>
    </div>
  );
}

export default Person;
