import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Rating } from "../../rating/rating";

import { productItem } from "../../../constants/product";

import prevImg from "../../../images/product-page/button-prev.svg";
import nextImg from "../../../images/product-page/button-next.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "./related-products.scss";

export const RelatedProducts = () => {
  return (
    <div className="related-products">
      <div className="related-slider" data-test-id="related-slider">
        <div className="slider-products-title">
          <div className="title">RELATED PRODUCTS</div>
          <div className="slider-navigation">
            <img className="btn-prev" src={prevImg} alt="prev" />
            <img className="btn-next" src={nextImg} alt="next" />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            570: {
              slidesPerView: 2,
            },
            830: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          modules={[Navigation]}
          // mousewheel={true}
          className="related-swiper"
        >
          {productItem.map(({ key, title, price, imageSrc }) => (
            <SwiperSlide key={key}>
              <img src={imageSrc} alt="photoProduct" />
              <div className="item-text">
                <div className="item-text-title">{title}</div>
                <div className="item-text-inform">
                  <div className="item-text-price">{price}</div>
                  <Rating rating={4} size="14px" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
