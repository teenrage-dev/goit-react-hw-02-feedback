import '../FeedBackForm.css';
import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return (
    <div className="NotificationMessage">
      <p>{message}</p>
    </div>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
