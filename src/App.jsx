import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Question from "./components/Question";

function App() {
  const questionArr = [
    {
      question: "heres a question",
      options: ["heres one", "heres another", "theres one", "nice"],
    },
    {
      question: "heres another question",
      options: ["heres one", "heres another", "theres one", "nice"],
    },
  ];
  return (
    <Router>
      <Header />
      <nav>
        {questionArr.map((option, index) => (
          <a key={index} href=>{option.question}</a>
        ))}
      </nav>
      <main>
        <Routes>
          {questionArr.map((option, index) => (
            <Route
              key={index}
              path={`/${option.title}`}
              element={
                <Question
                  question={option.question}
                  answerArr={option.options}
                />
              }
            />
          ))}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
