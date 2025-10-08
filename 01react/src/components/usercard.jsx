import React from "react";
import kspic from "../assets/react.svg";
import "./usercard.css";

const Usercard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="title">{props.name}</p>
      <img id="user-img" src={kspic} alt={props.name} />
      <p id="user-desc">{props.description}</p>
    </div>
  );
};

export default Usercard;
