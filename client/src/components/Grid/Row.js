import React from "react";

export const Row = ({ fluid, justify, children }) => (
  <div className={`row${fluid ? "-fluid" : ""} ${justify ? justify.split(" ").map(justify => "justify-" + justify).join(" ") : ""}`}>
    {children}
  </div>
);
