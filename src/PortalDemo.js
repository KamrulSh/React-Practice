import React from "react";
import ReactDOM from "react-dom";

// use of portals
function PortalDemo() {
  return ReactDOM.createPortal(
    <div className="portalDemo">
      <h1>Hello portal</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
