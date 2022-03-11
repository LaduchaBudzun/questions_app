import arrow from "../../assets/img/down-arrow.png";

export default function Question(props) {
  let openTitleClass = "";
  let openAnswerClass = "";
  let openArrow = "";
  if (props.open) {
    openTitleClass = "open_title";
    openAnswerClass = "open_answer";
    openArrow = "arrow_open";
  }
  return (
    <div className="question" onClick={props.openCLick}>
      <div className={"question-title " + openTitleClass}>
        <span className="question-text">
          {props.title} {props.number}
        </span>
        <img className={"arrow " + openArrow} src={arrow} alt="arrow" />
      </div>
      {props.open && (
        <div className={"answer " + openAnswerClass}>{props.answer}</div>
      )}
    </div>
  );
}
