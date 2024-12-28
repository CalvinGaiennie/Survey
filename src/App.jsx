import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Introduction from "./components/Introduction";
import QuizSummary from "./components/QuizSummary";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  return (
    <div>
      <Header />
      {quizStarted == false && quizFinished == false ? (
        <Introduction setQuizStarted={setQuizStarted} />
      ) : quizStarted == true && quizFinished == false ? (
        <Quiz setQuizFinished={setQuizFinished} />
      ) : (
        <QuizSummary />
      )}
    </div>
  );
}

export default App;
