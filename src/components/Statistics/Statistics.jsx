import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({good, bad, neutral, total, positivePercentage}) => (
    <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    <p>Total: {total}</p>
    <p>Positive feedback: {good ? positivePercentage() : 0} %</p>
    </>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;
