// Imports ========================================================================================

import React from "react";

// Functions ======================================================================================

export const ListGoals = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
