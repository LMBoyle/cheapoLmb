import React from "react";

function Jumbotron( props ) {
  return (
    <div
      style={{width: "100%", clear: "both", paddingTop: 120, textAlign: "center", ...props.style}}
      className="jumbotron jumbotron-fluid"
    >
      {[props.children]}
    </div>
  );
}

export default Jumbotron;
