import React from "react";
import "./Headshot.css"

const Headshot = props => (
  <div className="friendConnect">
    <img src={props.img} alt={props.firstName} className="rounded-circle" />
    <p> {props.firstName} {props.lastName} </p>
    <button type="button" className="btn"><i className="icon-group icon-3x"></i></button>
  </div>
);

export default Headshot;
