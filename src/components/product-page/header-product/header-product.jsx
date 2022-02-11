import ratingHeaderSrc from "../../../images/product-page/header-product/rating-five.svg";
import shareSrc from "../../../images/share.svg";

import "./header-product.scss";

export const HeaderProduct = () => {
  return (
    <div className="header-product">
      <div className="wrapper">
        <div className="header-product-nav">
          <div className="links">
            <span className="previous">Home</span>
            <span>►</span>
            <span className="previous">Women</span>
            <span>►</span>
            <span className="current">Women's tracksuit Q109</span>
          </div>
          <div className="share">
            <img src={shareSrc} alt="share" />
            <span className="share-text">Share</span>
          </div>
        </div>
        <div className="title">
          <span>Women's tracksuit Q109</span>
        </div>
        <div className="subtitle">
          <div className="rating">
            <img src={ratingHeaderSrc} alt="rating" height="18px" />
            <span className="review">2 Reviews</span>
          </div>
          <div className="inform">
            <span className="inform-normal">SKU:</span>{" "}
            <span className="inform-bold">777</span>
            <span className="inform-normal">Availability:</span>{" "}
            <span className="inform-bold">In Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};
