import { useState } from "react";
import { CardsProducts } from "../../components/products-page/cards-products";
import { FilterProducts } from "../../components/products-page/filter-products";
import { HeaderProducts } from "../../components/products-page/header-products";

import { PRODUCTS } from "../../constants/products";

export const ProductsPage = ({ productType }) => {
  const [filteredProducts, setFilteredProducts] = useState(
    PRODUCTS[productType]
  );
  const [selectedColors, setSelectedColors] = useState([]);

  // const includeColors = (images) => {
  //   const filteredImages = images.filter((images) =>
  //     selectedColors.includes(images?.color)
  //   );
  // };
  // if (filteredImages.length > 0) return true;
  // return false;

  return (
    <div data-test-id={`products-page-${productType}`}>
      <HeaderProducts productType={productType} />
      <div className="wrapper">
        <FilterProducts productType={productType} />
        <CardsProducts productType={productType} />
      </div>
    </div>
  );
};
