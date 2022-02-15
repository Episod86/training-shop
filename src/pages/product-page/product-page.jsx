import { CardProduct } from "../../components/product-page/card-product";
import { HeaderProduct } from "../../components/product-page/header-product";
import { RelatedProducts } from "../../components/product-page/related-products";

export const ProductPage = ({ productType }) => {
  return (
    <div>
      <HeaderProduct />
      <div className="wrapper">
        <CardProduct data-test-id={`product-page-${productType}`} />
        <RelatedProducts />
      </div>
    </div>
  );
};
