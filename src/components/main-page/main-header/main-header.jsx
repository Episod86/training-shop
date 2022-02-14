import prevImg from "../../../images/product-page//button-prev.svg";
import nextImg from "../../../images/product-page/button-next.svg";
import "./main-header.scss";

export const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="banner">
        <img src={prevImg} alt="prev" />
        <div className="item-text">
          <div className="title">Banner</div>
          <div className="text">your Title text </div>
        </div>
        <img src={nextImg} alt="next" />
      </div>
      <div className="nav">
        <div className="categories">
          <div className="women">
            <div className="title">Women</div>
          </div>
          <div className="men">
            <div className="title">Men</div>
          </div>
        </div>
        <div className="accessories">
          <div className="title">Accessories</div>
        </div>
      </div>
    </div>
  );
};
