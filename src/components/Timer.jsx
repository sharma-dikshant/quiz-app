import { useEffect } from "react";

function Timer({ dispatch, secondsLeft }) {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
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
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs} secs
    </div>
  );
}

export default Timer;
