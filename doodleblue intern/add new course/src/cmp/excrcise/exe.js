import Exercise from "./exercise";
import React from "react";
import "./exercise.css";

function Exe(props) {
  return (
    <div className="exe">
      {props.items.map((exercise) => (
        <Exercise
          key={exercise.id}
          topic={exercise.topic}
          price={exercise.price}
          date={exercise.date}
        />
      ))}
    </div>
  );
}
export default Exe;
