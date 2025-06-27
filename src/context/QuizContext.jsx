import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  //loading, error , ready , active, finished
  status: "loading",
  index:0
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
    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

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
      value={{ index,numQuestions, questions, status, dispatch }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
