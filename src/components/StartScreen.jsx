function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>Total Question: {numQuestions}</h3>
      <button className="btn btn-ui">Let&apos;s start!</button>
    </div>
  );
}

export default StartScreen;
