import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  questions: [
    {
      id: 1,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: true,
    },
    {
      id: 2,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
    {
      id: 3,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
    {
      id: 4,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
    {
      id: 5,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
    {
      id: 6,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
    {
      id: 7,
      title: "Question number",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint?",
      open: false,
    },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CLOSE":
      return {
        ...state,
        questions: state.questions.map((q) => {
          q.open = false;
          return q;
        }),
      };
    case "OPEN":
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === action.idQuestion) {
            q.open = true;
          }
          return q;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
