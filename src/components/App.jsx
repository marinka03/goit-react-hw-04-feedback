import { default as Section } from './Section';
import { default as FeedbackOptions } from './FeedbackOptions';
import { default as Statistics } from './Statistics';
import { default as Notification } from './Notification';
import { useState } from 'react';

const App = () => {
  const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackData, setFeedbackData] = useState(INITIAL_STATE);

  const handleLeaveFeedback = event => {
    const {
      target: { name },
    } = event;

    setFeedbackData(prevState => ({
      ...prevState,
      [name]: Number.parseInt(prevState[name]) + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbackData.good + feedbackData.neutral + feedbackData.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbackData.good * 100) / countTotalFeedback());
  };

  return (
    <div
      style={{
        textAlign: 'start',
        padding: '50px',
      }}
    >
      <Section title="Please leave feedback 😇">
        <FeedbackOptions
          options={feedbackData}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics ✨">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedbackData.good}
            bad={feedbackData.bad}
            neutral={feedbackData.neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
