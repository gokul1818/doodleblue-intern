import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styles from "styled-components";
 
// const FormControl= styles.div`


//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;

//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>(props.InValid ?'red':'black')};
//   background-color: ${props=>(props.InValid)?'rgb(223, 129, 129)':'transparent'} ;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d ;
// }
// &.invalid input{

//   border-color: red;
//   background-color: rgb(223, 129, 129);
// }
// &.invalid label{
//   color: red;

// text-align: center;
  
// }

// `;





const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [IsValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
    // console.log(enteredValue,"enter")
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl InValid={!IsValid}> */}
     <div className={`${styles['form-control']} ${!IsValid && styles.invalid}`} >
        <label >Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          
        />
        {/* </FormControl> */}
    </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
