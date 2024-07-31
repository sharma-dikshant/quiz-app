import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import "./index.css";
function App() {

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("errer", err));
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
