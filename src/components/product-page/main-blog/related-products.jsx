import { productItem, productNav } from "../../../constants/product";
import "./related-products.scss";

export const RelatedProducts = () => {
  return (
    <div className="related-products">
      <div className="related-products-title">
        <div className="title">RELATED PRODUCTS</div>
        <div className="navigation">
          {productNav.map(({ key, imageSrc, alt }) => (
            <img src={imageSrc} alt={alt} key={key} />
          ))}
        </div>
      </div>

      <div className="related-produts-items">
        {productItem.map(({ key, title, price, imageSrc, ratingSrc }) => (
          <div>
            <img src={imageSrc} alt="photoProduct" key={key} />
            <div className="item-text">
              <div className="item-text-title">{title}</div>
              <div className="item-text-inform">
                <div className="item-text-price">{price}</div>
                <img src={ratingSrc} alt="rating" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="blog-title">
        <div className="title">LATEST FROM BLOG</div>
        <div className="subtitle">SEE ALL</div>
      </div>

      <div className="content">
        {mainBlog.map(({ key, title, text, imageSrc, alt }) => (
          <div className="blog-item" key={key}>
            <img src={imageSrc} alt={alt} />
            <div className="blog-item-text">
              <div className="content-title">{title}</div>
              <div className="content-text">{text}</div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
