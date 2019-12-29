import React from "react";
import "./Card.css"

export const Card = (props) => (
  <div 
    className={`card ${props.cardClass}`}
    style={props.styleCard}
  >
    <div className="card-body" style={props.styleBody}>
      {props.children}
    </div>
  </div>
);
