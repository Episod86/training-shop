import { Rating } from "../../rating/rating";

import { Link } from "react-router-dom";

import loadig from "./images/Square-Loading.png";

import "./cards-products.scss";

export const CardsProducts = ({ productType, filteredProducts }) => {
  return (
    <div className="cards-products">
      <div className="cards">
        {filteredProducts.map(({ id, title, price, images, rating }) => (
          <Link to={`/${productType}/${id}`} className="item" key={id}>
            <img
              src={`https://training.cleverland.by/shop${images[0]?.url}`}
              alt="clothes"
              className="cards-item-img"
              data-test-id={`clothes-card-${productType}`}
            />
            <div className="item-text">
              <div className="item-text-title">{title}</div>
              <div className="item-text-inform">
                <div className="item-text-price">{price}</div>
                <Rating rating={rating} size="14" />
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
