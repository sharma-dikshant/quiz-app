import { useEffect } from "react";

function Timer({ dispatch, secondsLeft }) {
  useEffect(
    function () {
      const timer = setInterval(() => {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timer);
    },
    [dispatch]
  );
  return <div className="timer">{secondsLeft}</div>;
}

export default Timer;
