import { CardProduct } from "../../components/product-page/card-product";
import { HeaderProduct } from "../../components/product-page/header-product";
import { RelatedProducts } from "../../components/product-page/related-products";

export const ProductPage = () => {
  return (
    <div className="wrapper">
      <HeaderProduct />
      <CardProduct />

      <RelatedProducts />
    </div>
  );
};
