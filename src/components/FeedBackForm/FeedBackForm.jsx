import './FeedBackForm.css';
import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class FeedBackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      const prevStateName = e.target.name;
      if (prevStateName === 'good') {
        return {
          good: prevState.good + 1,
        };
      } else if (prevStateName === 'neutral') {
        return {
          neutral: prevState.neutral + 1,
        };
      } else if (prevStateName === 'bad') {
        return {
          bad: prevState.bad + 1,
        };
      }
    }, this.countTotalFeedback);
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(good, total) {
    const posFeedback = Math.round((good / total) * 100);
    return posFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.handleClick} />

        {this.countTotalFeedback() === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              this.countTotalFeedback()
            )}
          />
        )}
      </Section>
    );
  }
}
