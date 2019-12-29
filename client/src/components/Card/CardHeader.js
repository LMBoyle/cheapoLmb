import React from "react";

export const CardHeader = (props) => (
  <div className="card" style={{...props.styleCard}}>
    <div className="card-header" style={{color: '#fff', backgroundColor: "blue", ...props.styleHeader}}>
      <h5>{props.title}</h5>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
