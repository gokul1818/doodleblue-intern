import React, { useState } from "react";
import "./ExerciseForm.css";

const ExerciseForm = (props) => {
  const [enteredtopic, setenteredtitle] = useState("");
  const [enteredprice, setenteredprice] = useState("");
  const [enteredate, setentereddate] = useState("");

  const titlechange = (event) => {
    setenteredtitle(event.target.value);
  };
  const pricechange = (event) => {
    setenteredprice(event.target.value);
  };
  const datechange = (event) => {
    setentereddate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      topic: enteredtopic,
      price: enteredprice,
      date: new Date(enteredate),
    };
    props.onsaveExerciseform(data);
    setenteredtitle("");
    setenteredprice("");
    setentereddate("");
  };
  return (
  
    <form onSubmit={submitHandler}>
        <h2 className="addcourse"> Add your new course!!</h2>
      <div className="formcontrol">
        <div className="formtitle">
          <label>Title</label>
          <input type="text" value={enteredtopic} onChange={titlechange} />
        </div>

        <div className="formprice">
          <label>price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredprice}
            onChange={pricechange}
          />
        </div>
        <div className="formdate">
          <label>date</label>
          <input type="date" value={enteredate} onChange={datechange} />
        </div>
      </div>
      <div className="formsubmit">
        <button type="submit">Add course</button>
      </div>
    </form>
  );
};
export default ExerciseForm;
