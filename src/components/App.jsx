import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

function App() {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const LS_KEY = "feedback-value";
  const [feedback, setFeedback] = useState(() => {
    const dataLocalStorage = localStorage.getItem(LS_KEY);
    return dataLocalStorage === null ? {} : JSON.parse(dataLocalStorage);
  });
  useEffect(() => {
    const normalizeDateInLocalStorage = JSON.stringify(feedback);
    window.localStorage.setItem(LS_KEY, normalizeDateInLocalStorage);
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  let good = feedback.good;
  let neutral = feedback.neutral;
  let bad = feedback.bad;
  let totalFeedback = good + neutral + bad;
  let positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedbackValue={totalFeedback}
        feedback={feedback}
        setFeedback={setFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedbackValue={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        "No feedback yet"
      )}
    </>
  );
}

export default App;
