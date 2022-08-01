import '../FeedBackForm.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={'form__title'}>Statistics</h2>
      <div className={'form__item'}>
        <p className={'form__text'}>Good: {good}</p>
        <p className={'form__text'}>Neutral: {neutral}</p>
        <p className={'form__text'}>Bad: {bad}</p>
        <p className={'form__text'}>Total: {total}</p>
        <p className={'form__text'}>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
