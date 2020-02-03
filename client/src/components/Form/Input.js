// =========================================== Imports  ===========================================

import React from "react";

// ============================================ Export ============================================

export const Input = props => (

  // ========================================= Functions  =========================================
  
  <div className="input-group">
    { props.prepend ? (
      <>
        <div className="input-group-prepend">
          <div className="input-group-text"> $ </div>
        </div>
        <input className="form-control" {...props} />
      </>
    ) : (
      <div className="input-group">
        <input className="form-control" {...props} />
      </div>
    )}
  </div>
);
