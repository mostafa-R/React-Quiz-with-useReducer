import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

function Nextbutton() {
  const { dispatch, answer } = useContext(QuizContext);
  if (answer === null) return null;
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
}

export default Nextbutton;
