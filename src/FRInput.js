import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div className="frInput">
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRInput;
