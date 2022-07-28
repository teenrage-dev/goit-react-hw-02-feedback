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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(e.target.elements);
  // };

  handleClickGood = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    }, this.countTotalFeedback);
  };

  handleClickNeutral = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    }, this.countTotalFeedback);
  };

  handleClickBad = e => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    }, this.countTotalFeedback);
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    console.log(total);
    return total;
  }

  countPositiveFeedbackPercentage(good, total) {
    // console.log('Do It Precent fn');
    const posFeedback = Math.round((good / total) * 100);
    return posFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClickGood={this.handleClickGood}
          onClickNeutral={this.handleClickNeutral}
          onClickBad={this.handleClickBad}
        />

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
