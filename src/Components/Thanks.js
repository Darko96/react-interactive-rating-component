import "./Thanks.css";

const Thanks = (props) => {
  return (
    <div className="rating-component-inner">
      <img
        className="thank-you-img"
        src="images/illustration-thank-you.svg"
        alt=""
      />
      <div className="rating-result-box">
        <p className="rating-result-text">
          You selected{" "}
          <span className="rating-result">{props.givenRating}</span> out of 5
        </p>
      </div>
      <div className="box-description-inner">
        <h1 className="heading-inner">Thank you!</h1>
        <p className="text-inner">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Thanks;
