// =========================================== Imports  ===========================================

import React from "react";

// ============================================ Export ============================================

export const CardImg = (props) => (

  // ========================================= Functions  =========================================

  <div className="card">
    <img src={props.src} className="card-img-top" alt={props.alt} />
  </div>
);
