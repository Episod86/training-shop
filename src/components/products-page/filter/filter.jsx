import { FilterItem } from "../filter-item";

import { PRODUCTS } from "../../../constants/products";
import { FilterPrice } from "../../../constants/filter-price";

import "./filter.scss";

export const Filter = ({ productType, onCheckProducts }) => {
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
    <div className="filter" data-test-id={`filters-${productType}`}>
      <div className="color">
        <div className="title">COLOR</div>
        <div className="filters" data-test-id="filters-color">
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
        <div className="filters" data-test-id="filters-size">
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
        <div className="filters" data-test-id="filters-brand">
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
          {FilterPrice.map(({ price, min, max }) => (
            <FilterItem
              min={min}
              max={max}
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
