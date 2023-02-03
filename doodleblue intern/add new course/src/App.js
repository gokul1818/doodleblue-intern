import React, { useState } from "react";

import Exe from "./cmp/excrcise/exe";
import NewExercise from "../src/cmp/newcourse/newExercise";


// const date = new Date(2023, 3, 1);
const addingCourse = [
  {id:1 ,date: new Date(2023, 3, 4), topic: "HTML", price: " 199" },
  {id:2 ,date: new Date(2023, 6, 1), topic: "css", price: " 399" },
  {id:3, date: new Date(2023, 8, 14), topic: "JS", price: " 899" },
  {
    id:4,
    date: new Date(2023, 1, 29),
    topic: "React",
    price: "999",
  },
];

const App = () => {
  const [exercise, setCourse] = useState(addingCourse);
  const addexercise = (exercise) => {
    setCourse((prevExercise) => {
      return [exercise, ...prevExercise];
    });
  };

  // const addexercise = (storeddata) => {
  //   // console.log("In App.js");
  //   console.log(storeddata);
  // };
  return (
    <div>
      <NewExercise onaddcourse={addexercise} />
      <Exe items={exercise} />
    </div>
  );
};

export default App;
