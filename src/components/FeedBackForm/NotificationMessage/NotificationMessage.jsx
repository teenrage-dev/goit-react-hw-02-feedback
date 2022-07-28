import '../FeedBackForm.css';

export const NotificationMessage = ({ message }) => {
  return (
    <div className="NotificationMessage">
      <p>{message}</p>
    </div>
  );
};
