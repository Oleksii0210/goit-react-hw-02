import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";

const App = () => {
  const feedbackType = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [values, setValues] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("feedback");
    return savedFeedbacks !== null ? JSON.parse(savedFeedbacks) : feedbackType;
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setValues(feedbackType);
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = Math.round((values.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default App;
