function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{maxPoints}</strong>{" "}
        ({Math.ceil(percentage)} %)
      </p>
      <p className="highscore">(Highest score : {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
