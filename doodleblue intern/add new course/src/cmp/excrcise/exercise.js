import React, { useState } from "react";

import "./exercise.css";

import Exercisedate from "./Exercisedate";

function Exercise(props) {
 
  return (
    <div className="exercise">
      <Exercisedate date={props.date} />
      <div className="topic">{props.topic}</div>

      <div className="price">₹{props.price}</div>

      {/* <button onClick={clickHandler}>change title</button> */}
    </div>
  );
}
export default Exercise;
