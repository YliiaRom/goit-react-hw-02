import style from "./Feedback.module.css";
import { BsPercent } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartbreak } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsPuzzle } from "react-icons/bs";
export default function Feedback({
  feedback,
  totalFeedbackValue,
  positiveFeedback,
}) {
  return (
    <div className={style.feedback}>
      <ul>
        <li>
          <h2>Neutral:{feedback.neutral}</h2>
          <div>
            <span>
              <BsPuzzle className={style.icon} />
            </span>
            <span>
              <BsPuzzle className={style.icon} />
            </span>
            <span> {feedback.neutral}</span>
          </div>
        </li>
        <li>
          <h2>Bad: {feedback.bad}</h2>
          <div>
            <span>
              <BsHeartbreak className={style.icon} />
            </span>
            <span>
              <BsHeartbreak className={style.icon} />
            </span>
            <span> {feedback.bad}</span>
          </div>
        </li>
        <li>
          <h2>Good:{feedback.good}</h2>
          <div>
            <span>
              <BsHeart className={style.icon} />
            </span>
            <span>
              <BsHeart className={style.icon} />
            </span>
            <span>{feedback.good}</span>
          </div>
        </li>

        <li>
          <h2>Total: {totalFeedbackValue}</h2>
          <div>
            <span>
              <BsPeople className={style.icon} />
            </span>
            <span>
              <BsPeople className={style.icon} />
            </span>
            <span> {totalFeedbackValue}</span>
          </div>
        </li>

        <li>
          <h2>Positive: {positiveFeedback} %</h2>
          <div>
            <span>
              <BsPercent className={style.icon} />
            </span>
            <span>
              <BsPercent className={style.icon} />
            </span>
            <span>{positiveFeedback}%</span>
          </div>
        </li>
      </ul>
      {/* <p>Good:{feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedbackValue}</p>
      <p>Positive: {positiveFeedback} %</p> */}
    </div>
  );
}
