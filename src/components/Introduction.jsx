function Introduction({ setQuizStarted }) {
  return (
    <div>
      <p>Are you ready to start the Quiz?</p>
      <button onClick={() => setQuizStarted(true)}>Start The Quiz</button>
    </div>
  );
}

export default Introduction;
