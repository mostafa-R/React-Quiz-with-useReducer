import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  //loading, error , ready , active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:3001/questions").then((res) => {
      dispatch({
        type: "dataReceived",
        payload: res.data,
      });
    });
  }, []);

  return (
    <QuizContext.Provider value={(state, dispatch)}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider };
