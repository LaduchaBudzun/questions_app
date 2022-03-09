import arrow from "../../assets/img/down-arrow.png";

export default function Question() {
  return (
    <div className="question">
      <span className="question-title">Question number 0</span>
      <img className="arrow" src={arrow} alt="arrow" />
    </div>
  );
}
