import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext.jsx";

function Progress() {
  const { maxpoints, numQuestions, points, index } = useContext(QuizContext);
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxpoints}
      </p>
    </header>
  );
}

export default Progress;
