import React from "react";

export const CardImg = (props) => (
  <div className="card">
    <img src={props.src} className="card-img-top" alt={props.alt} />
  </div>
);
