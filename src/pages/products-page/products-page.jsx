import { CardsProducts } from "../../components/products-page/cards-products";
import { FilterProducts } from "../../components/products-page/filter-products";
import { HeaderProducts } from "../../components/products-page/header-products";

export const ProductsPage = ({ typeCategories }) => {
  return (
    <div>
      <HeaderProducts typeCategories={typeCategories} />
      <div className="wrapper">
        <FilterProducts />
        <CardsProducts typeCategories={typeCategories} />
      </div>
    </div>
  );
};
