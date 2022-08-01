import '../FeedBackForm.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className="FeedBackForm__section">
      <h2 className={'form__title'}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
