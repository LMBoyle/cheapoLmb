import React from "react";
import "./Bubble.css"

const SpeechBubble = (props) => (
  <div className="bubbleWrap">
    <div className={`bubble ${props.bubbleSide}`}>
      { props.children }
    </div>
    <span className={`connect ${props.btnSide}`}>
      <button type="button" className="btn"> <i className="material-icons">insert_comment</i> </button>
      <button type="button" className="btn"> <i className="material-icons">emoji_emotions</i> </button>
    </span>
  </div>
);

export default SpeechBubble;
