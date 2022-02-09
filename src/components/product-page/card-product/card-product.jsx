import {
  colorImg,
  sizeImg,
  productSlider,
  serviceItem,
  checoutItem,
  reviewItem,
} from "../../../constants/product";

import upImg from "../../../images/product-page//button-up.svg";
import downImg from "../../../images/product-page/button-down.svg";
import mainPhoto from "../../../images/product-page/card-product/product-image.jpg";
import clothesHanger from "../../../images/product-page/card-product/clothes-hanger.svg";
import heartImg from "../../../images/product-page/card-product/heart.svg";
import scaleImg from "../../../images/product-page/card-product/scale.svg";
import ratingHeaderSrc from "../../../images/product-page/header-product/rating-five.svg";

import "./card-product.scss";

export const CardProduct = () => {
  return (
    <div className="card-product">
      <div className="slider">
        <div className="slider-left">
          <div className="navigation">
            <img src={upImg} alt="prev" />
            <img src={downImg} alt="next" />
          </div>
          {productSlider.map(({ key, imageSrc }) => (
            <img key={key} src={imageSrc} alt="photoProduct" />
          ))}
        </div>

        <img src={mainPhoto} alt="mainPhoto" />
      </div>
      <div className="inform">
        <div className="informName">
          <div>
            <span className="text">Color:</span>
            <span>Blue</span>
          </div>
          <div className="inform-img color">
            {colorImg.map(({ key, name, imageSrc }) => (
              <img key={key} src={imageSrc} alt={name} />
            ))}
          </div>
        </div>
        <div className="informName">
          <div>
            <span className="text">Size:</span>
            <span>S</span>
          </div>
          <div className="inform-img">
            {sizeImg.map(({ key, name, imageSrc }) => (
              <img key={key} src={imageSrc} alt={name} />
            ))}
          </div>
          <div className="size-guide">
            <img src={clothesHanger} alt="clothes-hanger" />
            <span className="text-size-guide">Size guide</span>
          </div>
        </div>

        <div className="price">
          <span className="price-bold">$ 379.99</span>
          <button className="btn-price">
            <span className="text"> Add to card</span>
          </button>
          <img src={heartImg} alt="like" />
          <img src={scaleImg} alt="scale" />
        </div>
        <div className="service">
          {serviceItem.map(({ key, text, name, imageSrc }) => (
            <div className="service-item">
              <img key={key} src={imageSrc} alt={name} />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="checkout">
          <div className="title">guaranteed safe checkout</div>
          <div className="checkout-items">
            {checoutItem.map(({ key, name, imageSrc }) => (
              <img key={key} src={imageSrc} alt={name} />
            ))}
          </div>
        </div>
        <div className="description">DESCRIPTION</div>
        <div className="additional-information">
          <div className="title">ADDITIONAL INFORMATION</div>
          <div className="content">
            <div className="item">
              <span className="bold">Color:</span>
              <span className="value">Blue, White, Black, Grey</span>
            </div>
            <div className="item">
              <span className="bold">Size:</span>
              <span className="value">XS, S, M, L</span>
            </div>
            <div className="item">
              <span className="bold">Material: </span>
              <span className="value">100% Polyester</span>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="title">REVIEWS</div>
          <div className="write-review">
            <div className="rating">
              <img src={ratingHeaderSrc} alt="rating" height="22px" />
              <span className="review">2 Reviews</span>
            </div>
            <span>Write a review</span>
          </div>
          <div className="reviews-items">
            {reviewItem.map(({ key, text, name }) => (
              <div key={key} className="item">
                <div className="title-reviews">
                  <span>{name}</span>

                  <img src={ratingHeaderSrc} alt="rating" height="14px" />
                </div>
                <span className="text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
