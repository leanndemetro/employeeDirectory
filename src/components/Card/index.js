import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.picture ? `url(${props.picture})` : "none"
      }}
    >

    </div>
  );
}

export default Card;
