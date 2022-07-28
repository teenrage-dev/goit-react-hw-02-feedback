import '../FeedBackForm.css';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <>
      <div className={'wrapper__feedback'}>
        <button type="button" className={'mark__btn'} onClick={onClickGood}>
          Good
        </button>
        <button type="button" className={'mark__btn'} onClick={onClickNeutral}>
          Neutral
        </button>
        <button type="button" className={'mark__btn'} onClick={onClickBad}>
          Bad
        </button>
      </div>
    </>
  );
};
