import React, { Component } from 'react';
import { default as Section } from './Section';
import { default as FeedbackOptions } from './FeedbackOptions';
import { default as Statistics } from './Statistics';
import { default as Notification } from './Notification'

class App extends Component {
  // static defaultProps = {
    
  // };
  // static propTypes = {

  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const {
      target: { name, value },
    } = event;

    this.setState({ [name]: Number.parseInt(value) + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <div
        style={{
          textAlign: 'start',
          padding: '50px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            // countGood={this.countClickGood}
            // countNeutral={this.countClickNeutral}
            // countBad={this.countClickBad}
            options ={{good, neutral, bad}}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {
            this.countTotalFeedback () > 0 ? <Statistics
            good = {good}
            bad = {bad}
            neutral = {neutral}
            total = {this.countTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage}
            /> : <Notification message = "There is no feedback"/>
          }
          
        </Section>
      </div>
    );
  }
}

export default App;
