import ExerciseForm from "../newcourse/ExerciseForm";
import "./newExercise.css";
const newExercise = (props) => {
  const saveExercisedata = (data) => {
    const coursedata = {
      ...data,
      id: Math.random().toString(),
    };
    // console.log(coursedata);
    props.onaddcourse(coursedata);
  };

  return (
    <div className="newexercise">
      <ExerciseForm onsaveExerciseform={saveExercisedata} />
    
    </div>
  );
};
export default newExercise;
