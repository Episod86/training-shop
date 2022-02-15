import { CardsProducts } from "../../components/products-page/cards-products";
import { FilterProducts } from "../../components/products-page/filter-products";
import { HeaderProducts } from "../../components/products-page/header-products";

export const ProductsPage = ({ productType }) => {
  return (
    <div data-test-id={`products-page-${productType}`}>
      <HeaderProducts productType={productType} />
      <div className="wrapper">
        <FilterProducts />
        <CardsProducts productType={productType} />
      </div>
    </div>
  );
};
