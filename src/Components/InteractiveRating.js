import React, { useState } from "react";
import "./InteractiveRating.css";
import RateUs from "./RateUs";
import Thanks from "./Thanks";

const InteractiveRating = () => {
  const [haveRating, setHaveRating] = useState(0);

  const givenRating = (rating) => {
    setHaveRating(rating);
  };

  let contentToShow = <RateUs givenRating={givenRating} />;

  console.log(haveRating);

  if (haveRating > 0) {
    contentToShow = <Thanks givenRating={haveRating} />;
  }

  return (
    <main>
      <div className="rating-component">{contentToShow}</div>
    </main>
  );
};

export default InteractiveRating;
