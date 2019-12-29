// Imports ===================================================================

import React from "react";
import "./Wrapper.css";

// Functions =================================================================

function Wrapper(props) {
  return <div className="wrapper container">{props.children}</div>;
}

// Export ====================================================================

export default Wrapper;
