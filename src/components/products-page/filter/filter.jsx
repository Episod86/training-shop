import { PRODUCTS } from "../../../constants/products";
import { FilterPrice } from "../../../constants/filter-price";

import "./filter.scss";
import { FilterItem } from "../filter-item";

export const Filter = ({ productType, onCheckProducts, type, min, max }) => {
  const giveUniqueColor = () =>
    PRODUCTS[productType].reduce(
      (acc, product) =>
        Array.from(
          new Set([...acc, ...product.images.map((image) => image.color)])
        ),
      []
    );
  const giveUniqueSize = () =>
    PRODUCTS[productType].reduce(
      (acc, product) => Array.from(new Set([...acc, ...product.sizes])),
      []
    );
  const giveUniqueBrand = () =>
    Array.from(new Set(PRODUCTS[productType].map((product) => product.brand)));

  return (
    <div className="filter">
      <div className="color">
        <div className="title">COLOR</div>
        <div className="filters">
          {giveUniqueColor().map((color) => (
            <FilterItem
              key={color}
              text={color}
              type="color"
              onCheckProducts={onCheckProducts}
            />
          ))}
        </div>
      </div>
      <div className="size">
        <div className="title">SIZE</div>
        <div className="filters">
          {giveUniqueSize().map((sizes) => (
            <FilterItem
              key={sizes}
              text={sizes}
              type="sizes"
              onCheckProducts={onCheckProducts}
            />
          ))}
        </div>
      </div>
      <div className="brand">
        <div className="title">BRAND</div>
        <div className="filters">
          {giveUniqueBrand().map((brand) => (
            <FilterItem
              key={brand}
              text={brand}
              type="brand"
              onCheckProducts={onCheckProducts}
            />
          ))}
        </div>
      </div>
      <div className="price">
        <div className="title">PRICE</div>
        <div className="filters">
          {FilterPrice.map(({ price }) => (
            <FilterItem
              key={price}
              text={price}
              type="price"
              onCheckProducts={onCheckProducts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
