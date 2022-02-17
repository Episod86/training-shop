import PropTypes from "prop-types";

import star from "./images/star.svg";
import starRating from "./images/star-rating.svg";

import "./rating.scss";

export const Rating = ({ rating, size }) => {
  const arrayRating = [1, 2, 3, 4, 5];

  return (
    <div className="rating-block">
      {arrayRating.map((item) => (
        <img
          src={item <= rating ? starRating : star}
          width={size}
          alt={`рейтинг${rating}`}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.string,
};
Rating.defaultProps = {
  rating: 0,
  size: "14",
};
