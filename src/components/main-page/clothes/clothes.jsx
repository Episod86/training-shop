import { useState } from "react";
import { Link } from "react-router-dom";

import { Rating } from "../../rating/rating";

import { clothesMenu } from "../../../constants/main";
import { PRODUCTS } from "../../../constants/products";

import "./clothes.scss";
import classNames from "classnames";

export const Clothes = ({ productType }) => {
  const [particular, setParticular] = useState(clothesMenu[0].particularName);

  return (
    <div className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes-header">
        <div className="title">{`${productType}'s`}</div>
        <div className="clothes-menu">
          {clothesMenu.map(({ name, particularName }) => (
            <div
              className={classNames("item", {
                selected: particularName === particular,
              })}
              area-hidden
              key={particularName}
              onClick={() => setParticular(particularName)}
              data-test-id={`clothes-${productType}-${particularName}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div
        className="clothes-cards"
        data-test-id={`clothes-cards-${productType}`}
      >
        {PRODUCTS[productType]
          .filter((product) => product?.particulars[particular])
          .filter((e, index) => index <= 7)
          .map(({ id, price, images, rating, discount, name }) => (
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
