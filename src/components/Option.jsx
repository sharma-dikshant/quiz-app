function Option({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={i}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            i === question.correctOption ? "correct" : "wrong"
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
