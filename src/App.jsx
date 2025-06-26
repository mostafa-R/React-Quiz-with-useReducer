// import { useReducer } from "react";
import DateCounter from "./Components/DateCounter/DateCounter";

// function reducer(state, action) {
//   if (action.type === "sum") {
//     return action.payload.a + action.payload.b;
//   } else {
//     return null;
//   }
// }

// function rudcerNumber(state, action) {
//   if (action.type === "firstNumber") {
//     return {...state, firstNumber:action.payload};
//   }
//   if (action.type === "secondNumber") {
//     return {...state, secondNumber:action.payload};
//   }
//   return state;
// }

function App() {
  // const initialState = {
  //   firstNumber: null,
  //   secondNumber: null,
  // };
  // const [stateNumber, dispatchNumber] = useReducer(rudcerNumber, initialState);
  // const [sum, dispatch] = useReducer(reducer, null);

  // function sumNumbers() {

  //   if (stateNumber.firstNumber != null && stateNumber.secondNumber != null) {
  //     dispatch({
  //       type: "sum",
  //       payload: {
  //         a: stateNumber.firstNumber,
  //         b: stateNumber.secondNumber,
  //       },
  //     });
  //   } else {
  //     dispatch({ type: "invalid" });
  //   }
  // }

  return (
    <>
      <DateCounter />

      {/* <div>
        <input
          type="number"
          value={stateNumber.firstNumber ?? ""}
          onChange={(e) => {
            const value = Number(e.target.value);
            dispatchNumber({
              type: "firstNumber",
              payload: value == "" ? null : Number(value),
            });
          }}
        />

        <input
          type="number"
          onChange={(e) => {
            const value = Number(e.target.value);
            dispatchNumber({
              type: "secondNumber",
              payload: value == "" ? null : Number(value),
            });
          }}
          value={stateNumber.secondNumber ?? ""}
        />
        <h6>{sum}</h6>
        <button
          onClick={() => {
            sumNumbers();
          }}
        >
          sum
        </button>
      </div> */}
    </>
  );
}

export default App;
