import React from "react";

function MemoComp(props) {
  console.log(`Memo component ${props.name}`);
  return <div className="memoComp">Memo Component {props.name}</div>;
}

export default React.memo(MemoComp);
