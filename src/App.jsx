import { useContext } from "react";
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Main from "./Components/Main/Main";
import Nextbutton from "./Components/Nextbutton/Nextbutton";
import Progress from "./Components/Progress/Progress";
import Question from "./Components/Question/Question";
import StartScreen from "./Components/StartScreen/StartScreen";
import { QuizContext } from "./context/QuizContext";

function App() {
  const { status, questions, index } = useContext(QuizContext);
  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question question={questions[index]} />
              <Nextbutton />
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
