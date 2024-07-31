import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useReducer } from "react";
// import "./index.css";

const initialState = {
  question: [],
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      console.log("unknown action", action);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state)
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
      </Main>
    </div>
  );
}

export default App;
