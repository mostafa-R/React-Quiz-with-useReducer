import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useContext(QuizContext);
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} Question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
