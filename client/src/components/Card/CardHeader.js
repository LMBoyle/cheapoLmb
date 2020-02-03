// =========================================== Imports  ===========================================

import React from "react";

// ============================================ Export ============================================

export const CardHeader = (props) => (

  // ========================================= Functions  =========================================

  <div className="card" style={{...props.styleCard}}>
    <div className="card-header" style={{color: '#fff', backgroundColor: "blue", ...props.styleHeader}}>
      <h5>{props.title}</h5>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
