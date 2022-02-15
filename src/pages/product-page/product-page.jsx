import { CardProduct } from "../../components/product-page/card-product";
import { HeaderProduct } from "../../components/product-page/header-product";
import { RelatedProducts } from "../../components/product-page/related-products";

export const ProductPage = ({ productType }) => {
  return (
    <div  data-test-id={`product-page-${productType}`} >
      <HeaderProduct />
      <div className="wrapper">
        <CardProduct/>
        <RelatedProducts />
      </div>
    </div>
  );
};
