import style from "./Options.module.css";
import Reset from "../Reset/Reset";

export default function Options({
  updateFeedback,
  totalFeedbackValue,
  feedback,
  setFeedback,
}) {
  function handleResetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <>
      <button className={style.click} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.click} onClick={() => updateFeedback("neutral")}>
        neutral
      </button>
      <button className={style.click} onClick={() => updateFeedback("bad")}>
        bad
      </button>
      {totalFeedbackValue > 0 && (
        <button className={style.click} onClick={handleResetFeedback}>
          reset
        </button>
      )}
    </>
  );
}
