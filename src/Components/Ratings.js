import React, { useState } from "react";
import "./Ratings.css";

const Ratings = (props) => {
  const [rating, setRating] = useState(0);

  const ratingOneHandler = (event) => {
    setRating(event.target.value);
  };

  const ratingTwoHandler = (event) => {
    setRating(event.target.value);
  };

  const ratingThreeHandler = (event) => {
    setRating(event.target.value);
  };

  const ratingFourHandler = (event) => {
    setRating(event.target.value);
  };

  const ratingFiveHandler = (event) => {
    setRating(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onTakeRating(rating);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="box-ratings">
        <button
          value={1}
          onClick={ratingOneHandler}
          className="item-rating rating-1"
        >
          1
        </button>
        <button
          value={2}
          onClick={ratingTwoHandler}
          className="item-rating rating-2"
        >
          2
        </button>
        <button
          value={3}
          onClick={ratingThreeHandler}
          className="item-rating rating-3"
        >
          3
        </button>
        <button
          value={4}
          onClick={ratingFourHandler}
          className="item-rating rating-4"
        >
          4
        </button>
        <button
          value={5}
          onClick={ratingFiveHandler}
          className="item-rating rating-5"
        >
          5
        </button>
      </div>
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
};

export default Ratings;
