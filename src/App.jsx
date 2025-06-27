import { useContext } from "react";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Main from "./Components/Main/Main";
import Question from "./Components/Question/Question";
import StartScreen from "./Components/StartScreen/StartScreen";
import { QuizContext } from "./context/QuizContext";
import Error from "./Components/Error/Error";

function App() {
  const { status, numQuestions, dispatch, questions, index } =
    useContext(QuizContext);
  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && <Question question={questions[index]} />}
        </Main>
      </div>
    </>
  );
}

export default App;
