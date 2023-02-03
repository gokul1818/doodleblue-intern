import "./Exercisedate.css";
import React from "react";

function Exercisedate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { month: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="exercisedate">
      <div className="exday">{day}</div>
      <div className="exmonth">{month}</div>
      <div className="exyear">{year}</div>
    </div>
  );
}
export default Exercisedate;
