import "./App.css";
import { useEffect, useState } from "react";
import Description from "/src/components/Description/Description";
import Options from "/src/components/Options/Options";
import Feedback from "/src/components/Feedback/Feedback";
import Notification from "/src/components/Notification/Notification";

function App() {
  const feedbackOptions = { good: 0, neutral: 0, bad: 0 };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : feedbackOptions;
  });

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedback(
      Object.keys(feedback).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
    );
  }

  return (
    <div className="container">
      <Description
        heading="Sip Happens Café"
        message="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options
        options={Object.keys(feedback)}
        setFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={resetFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback options={feedback} positive={positiveFeedback} />
      )}
    </div>
  );
}

export default App;
