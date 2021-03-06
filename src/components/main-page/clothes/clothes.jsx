import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import { ClothesItem } from "../clothes-item";

import { clothesMenu } from "../../../constants/main";
import { PRODUCTS } from "../../../constants/products";

import "./clothes.scss";

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
            <ClothesItem
              id={id}
              price={price}
              images={images}
              rating={rating}
              discount={discount}
              name={name}
              productType={productType}
            />
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

Clothes.propTypes = {
  productType: PropTypes.string.isRequired,
};
