// =========================================== Imports  ===========================================

import React from "react";

// ============================================ Export ============================================

export const ListGoals = ({ children }) => {

  // ========================================= Functions  =========================================

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
