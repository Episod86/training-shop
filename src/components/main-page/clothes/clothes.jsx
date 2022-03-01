import { Rating } from "../../rating/rating";

import { Link } from "react-router-dom";

import { clothesMenu } from "../../../constants/main";
import { PRODUCTS } from "../../../constants/products";

import "./clothes.scss";

export const Clothes = ({ productType }) => {
  return (
    <div className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes-header">
        <div className="title">{`${productType}'s`}</div>
        <div className="menu">
          {clothesMenu.map(({ id, name }) => (
            <a href="!#" className="item" key={id}>
              {name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="clothes-cards"
        data-test-id={`clothes-cards-${productType}`}
      >
        {PRODUCTS[productType]
          // .filter((particulars, index) => (particulars.isNewArrivals = true))
          .filter((e, index) => index <= 7)
          .map(({ id, title, price, images, rating, particulars }) => (
            <Link
              to={`/${productType}/${id}`}
              className="item"
              key={id}
              data-test-id={`clothes-card-${productType}`}
            >
              <img
                src={`https://training.cleverland.by/shop${images[0]?.url}`}
                alt="photoProduct"
              />
              <div className="item-text">
                <div className="item-text-title">{title}</div>
                <div className="item-text-inform">
                  <div className="item-text-price">{price}</div>
                  <Rating rating={rating} size="14px" />
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Link to={`/${productType}`} className="cards-link">
        <button className="button" type="button">
          See All
        </button>
      </Link>
    </div>
  );
};
