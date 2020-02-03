// =========================================== Imports  ===========================================

import React from "react";

// Style
import "./Headshot.scss"

// ========================================== Functions  ==========================================

const Headshot = props => (
  <div className="friendConnect">
    <img src={props.img} alt={props.firstName + ' ' + props.img} className="rounded-circle" />
    <p> {props.firstName} {props.lastName} </p>
    <button type="button" className="btn"><i className="icon-group icon-3x"></i></button>
  </div>
);

// ============================================ Export ============================================

export default Headshot;
