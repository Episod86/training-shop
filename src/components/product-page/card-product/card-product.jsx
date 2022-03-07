import { useEffect, useState } from "react";

import { Rating } from "../../rating/rating";
import { Slider } from "./slider";

import { serviceItem, checoutItem } from "../../../constants/product";

import clothesHanger from "../../../images/product-page/card-product/clothes-hanger.svg";
import heartImg from "../../../images/product-page/card-product/heart.svg";
import scaleImg from "../../../images/product-page/card-product/scale.svg";

import "./card-product.scss";
import classNames from "classnames";

export const CardProduct = ({
  product: { images, name, sizes, price, reviews, rating, material },
}) => {
  const [selectedColor, setSelectedColor] = useState(images[0]?.color);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const uniqueColor = images.reduce((acc, image) => {
    if (!acc.find((item) => item.color === image.color)) acc.push(image);
    return acc;
  }, []);
  // useEffect(() => {
  //   setSelectedColor(images[0]?.color);
  //   setSelectedSize(sizes[0]);
  // }, [images, sizes]);

  return (
    <div className="card-product">
      <Slider images={images} />
      <div className="inform">
        <div className="informName">
          <div>
            <span className="text">Color:</span>
            <span>{selectedColor}</span>
          </div>
          <div className="inform-img color">
            {uniqueColor.map(({ color, url }) => (
              <img
                key={color}
                src={`https://training.cleverland.by/shop${url}`}
                onClick={() => {
                  setSelectedColor(color);
                }}
                alt={name}
                className={classNames({ selected: color === selectedColor })}
              />
            ))}
          </div>
        </div>
        <div className="informName">
          <div>
            <span className="text">Size:</span>
            <span>{selectedSize}</span>
          </div>
          <div className="inform-img">
            {sizes.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setSelectedSize(item);
                }}
                className={classNames({ selected: item === selectedSize })}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="size-guide">
            <img src={clothesHanger} alt="clothes-hanger" />
            <span className="text-size-guide">Size guide</span>
          </div>
        </div>

        <div className="price">
          <span className="price-bold">{`$ ${price}`}</span>
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
              <span className="value">
                {uniqueColor.map(({ color }) => (
                  <span>{`${color} `}</span>
                ))}
              </span>
            </div>
            <div className="item">
              <span className="bold">Size:</span>

              <span className="value">
                {sizes.map((item) => (
                  <span>{`${item}`}</span>
                ))}
              </span>
            </div>
            <div className="item">
              <span className="bold">Material: </span>
              <span className="value">{material}</span>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="title">REVIEWS</div>
          <div className="write-review">
            <div className="rating">
              <Rating rating={rating} size="22px" />
              <span className="review">{`${reviews.length}  Reviews`} </span>
            </div>
            <span>Write a review</span>
          </div>
          <div className="reviews-items">
            {reviews.map(({ id, text, name, rating }) => (
              <div key={id} className="item">
                <div className="title-reviews">
                  <span>{name}</span>
                  <Rating rating={rating} size="14px" />
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
