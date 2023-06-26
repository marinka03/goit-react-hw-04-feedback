import React from 'react';
import PropTypes from 'prop-types'
import style from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback,
}) => (
  <>
    <div className={style.feedback__button}>
      <button type="button" className={style.button} onClick={onLeaveFeedback} name="good" value={good}>
        Good
      </button>
      <button type="button" className={style.button} onClick={onLeaveFeedback} name="neutral" value={neutral}>
        Neutral
      </button>
      <button type="button" className={style.button} onClick={onLeaveFeedback} name="bad" value={bad}>
        Bad
      </button>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
