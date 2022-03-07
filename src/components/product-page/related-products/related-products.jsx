import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Rating } from "../../rating/rating";

import { PRODUCTS } from "../../../constants/products";

import prevImg from "../../../images/product-page/button-prev.svg";
import nextImg from "../../../images/product-page/button-next.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "./related-products.scss";
import { Link } from "react-router-dom";

export const RelatedProducts = ({ productType }) => {
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
          {PRODUCTS[productType].map(
            ({ id, price, images, rating, discount, name }) => (
              <SwiperSlide key={id}>
                <Link
                  to={`/${productType}/${id}`}
                  className="item"
                  key={id}
                  data-test-id={`clothes-card-${productType}`}
                >
                  {discount && <span className="discount">{discount}</span>}
                  <img
                    src={`https://training.cleverland.by/shop${images[0]?.url}`}
                    alt="photoProduct"
                  />
                  <div className="item-text">
                    <div className="item-text-title">{name}</div>
                    <div className="item-text-inform">
                      <div className="item-text-price">$ {price}</div>
                      <Rating rating={rating} size="14px" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};
