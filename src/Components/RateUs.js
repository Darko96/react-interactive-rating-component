import Description from "./Description";
import Ratings from "./Ratings";

const RateUs = (props) => {
  const takeRating = (finalRating) => {
    props.givenRating(Number(finalRating));
  };

  return (
    <div>
      <Description />
      <Ratings onTakeRating={takeRating} />
    </div>
  );
};

export default RateUs;
