import { Rating } from "../../rating/rating";

import { Link } from "react-router-dom";

import { PRODUCTS } from "../../../constants/products";

import loadig from "../../../images/products-page/cards-products/Square-Loading.png";

import "./cards-products.scss";

export const CardsProducts = ({ productType }) => {
  // {
  // console.log(PRODUCTS);
  // }
  return (
    <div className="cards-products">
      <div className="cards">
        {PRODUCTS[productType]
          // .filter((_, index) => index <= 7)
          .map(({ id, title, price, images, imageSrc }) => (
            <Link to={`/${productType}/${id}`} className="item" key={id}>
              <img
                src={`https://training.cleverland.by/shop${images[0]?.url}`}
                alt="clothes"
                className="cards-item-img"
              />
              <div className="item-text">
                <div className="item-text-title">{title}</div>
                <div className="item-text-inform">
                  <div className="item-text-price">{price}</div>
                  <Rating rating={4} size="14" />
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="loading">
        <img src={loadig} alt="loadig" />
      </div>
    </div>
  );
};
