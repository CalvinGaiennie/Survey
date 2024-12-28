import { useState } from "react";
import Question from "./Question.jsx";

function Quiz({ setQuizFinished }) {
  const [currIndex, setCurrIndex] = useState(0);

  const questionArr = [
    {
      question: "heres a question",
      options: ["heres one", "heres another", "theres one", "nice"],
      solution: 0,
    },
    {
      question: "heres another question",
      options: ["heres one", "heres another", "theres one", "nice"],
      solution: 0,
    },
    {
      question: "Am I asking you a question.",
      options: ["duh", "yes", "you are", "no im an idot."],
      solution: 3,
    },
  ];
  function previousQuestion() {
    if (currIndex == 0) {
      return;
    }
    const i = currIndex - 1;
    setCurrIndex(i);
  }

  function nextQuestion() {
    if (currIndex == questionArr.length - 1) {
      return;
    }
    const i = currIndex + 1;
    setCurrIndex(i);
  }
  return (
    <div>
      <Question
        key={currIndex}
        question={questionArr[currIndex]["question"]}
        answerArr={questionArr[currIndex]["options"]}
        solution={questionArr[currIndex]["solution"]}
        setCurrIndex={setCurrIndex}
        isFinalQuestion={currIndex == questionArr.length - 1}
      />
      {currIndex != questionArr.length - 1 ? (
        <div>
          <button onClick={previousQuestion}>Previous Question</button>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={previousQuestion}>Previous Question</button>
            <button>You are on the Final Question</button>
          </div>
          <br></br>
          <button onClick={() => setQuizFinished(true)}>Submit Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
