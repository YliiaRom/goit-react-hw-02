import { useState, useEffect } from "react";
import "./App.css";
import DataFeedback from "./DataFeedback/DataFeedback";
import Notification from "./Notification/Notification";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

function App() {
  const LS_KEY = "feedback-value";
  const [feedback, setFeedback] = useState(() => {
    try {
      const dataLocalStorage = window.localStorage.getItem(LS_KEY);
      return dataLocalStorage === null
        ? DataFeedback()
        : JSON.parse(dataLocalStorage);
    } catch (error) {
      console.log(error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });
  useEffect(() => {
    try {
      const normalizeDateInLocalStorage = JSON.stringify(feedback);
      window.localStorage.setItem(LS_KEY, normalizeDateInLocalStorage);
    } catch (error) {
      return console.log(error);
    }
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: (prevState[feedbackType] || 0) + 1,
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
        <Notification />
      )}
    </>
  );
}

export default App;
