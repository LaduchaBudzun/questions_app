import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Question from "./components/Questions/Question";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const openQuestion = (idQuestion) => {
    const openQuestion = questions.filter((q) => q.open === true)[0];

    if (openQuestion) {
      if (openQuestion.id === idQuestion) {
        dispatch({ type: "CLOSE" });
        return;
      }
    }

    dispatch({ type: "CLOSE" });
    dispatch({ type: "OPEN", idQuestion: idQuestion });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <h1>Frequently asked questions</h1>
          <p>
            Hello! Didn't find what are you are looking for? Please contact us
          </p>
        </header>
        <div className="questions">
          {questions.map((question, index) => {
            return (
              <Question
                openCLick={() => openQuestion(question.id)}
                title={question.title}
                answer={question.answer}
                number={index}
                key={question.id}
                open={question.open}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
