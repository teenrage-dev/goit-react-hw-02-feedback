import '../FeedBackForm.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <div className={'wrapper__feedback'}>
        <button
          type="button"
          className={'mark__btn'}
          name="good"
          onClick={onClick}
        >
          Good
        </button>
        <button
          type="button"
          className={'mark__btn'}
          name="neutral"
          onClick={onClick}
        >
          Neutral
        </button>
        <button
          type="button"
          className={'mark__btn'}
          name="bad"
          onClick={onClick}
        >
          Bad
        </button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
