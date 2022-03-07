import { useState } from "react";
import { CardsProducts } from "../../components/products-page/cards-products";
import { FilterProducts } from "../../components/products-page/filter-products";
import { HeaderProducts } from "../../components/products-page/header-products";

export const ProductsPage = ({ productType }) => {
  const [selectedColors, setSelectedColors] = useState([]);

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
