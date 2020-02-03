// =========================================== Imports  ===========================================

import React from "react";
import "./Card.scss"

// ============================================ Export ============================================

export const Card = (props) => (

  // ========================================= Functions  =========================================

  <div 
    className={`card ${props.cardClass}`}
    style={props.styleCard}
  >
    <div className="card-body" style={props.styleBody}>
      {props.children}
    </div>
  </div>
);
