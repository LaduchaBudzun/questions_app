import "./App.css";
import Question from "./components/Questions/Question";

function App() {
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
          <Question />
        </div>
      </div>
    </div>
  );
}

export default App;
