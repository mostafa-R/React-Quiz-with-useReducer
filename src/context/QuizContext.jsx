import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  //loading, error , ready , active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "errorReceived":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }

    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [{ answer, questions, status, index, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxpoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await axios.get("http://localhost:3001/questions");
        dispatch({ type: "dataReceived", payload: res.data });
      } catch (error) {
        console.log("error from catch ", error);
        dispatch({ type: "errorReceived" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        points,
        answer,
        index,
        numQuestions,
        questions,
        status,
        dispatch,
        maxpoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
