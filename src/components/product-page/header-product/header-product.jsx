import { Rating } from "../../rating/rating";

import shareSrc from "../../../images/share.svg";

import "./header-product.scss";
import { Link } from "react-router-dom";

export const HeaderProduct = ({ productType, name, rating, reviews }) => {
  console.log({ reviews });
  return (
    <div className="header-product">
      <div className="wrapper">
        <div className="header-product-nav">
          <div className="links">
            <Link to={`/`} className="previous">
              Home
            </Link>
            <span>►</span>
            <Link to={`/${productType}/`} className="previous">
              {productType}
            </Link>
            <span>►</span>
            <span className="current">{name}</span>
          </div>

          <div className="share">
            <img src={shareSrc} alt="share" />
            <span className="share-text">Share</span>
          </div>
        </div>
        <div className="title">{name}</div>
        <div className="subtitle">
          <div className="rating">
            <Rating rating={rating} size="18px" />
            <span className="review">{`${reviews.length}  Reviews`}</span>
          </div>
          <div className="header-inform">
            <span className="inform-normal">SKU:</span>
            <span className="inform-bold">777</span>
            <span className="inform-normal">Availability:</span>
            <span className="inform-bold">In Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};
