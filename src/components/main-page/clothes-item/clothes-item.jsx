import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Rating } from "../../rating/rating";

import "./clothes-item.scss";

export const ClothesItem = ({
  id,
  price,
  images,
  rating,
  discount,
  name,
  productType,
}) => {
  return (
    <Link
      to={`/${productType}/${id}`}
      className="item"
      key={id}
      data-test-id={`clothes-card-${productType}`}
    >
      {discount && <span className="discount">{discount}</span>}
      <img
        src={`https://training.cleverland.by/shop${images[0]?.url}`}
        alt="photoProduct"
      />
      <div className="item-text">
        <div className="item-text-title">{name}</div>
        <div className="item-text-inform">
          <div className="item-text-price">$ {price}</div>
          <Rating rating={rating} size="14px" />
        </div>
      </div>
    </Link>
  );
};

ClothesItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  discount: PropTypes.string,
  name: PropTypes.string,
  productType: PropTypes.string.isRequired,
};
