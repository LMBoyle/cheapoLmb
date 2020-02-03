// =========================================== Imports  ===========================================

import React from "react";
import "./List.scss";

// ============================================ Export ============================================

export const List = ({ children }) => {

  // ========================================= Functions  =========================================

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
