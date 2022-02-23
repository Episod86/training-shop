import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import {
  productSlider,
  productSliderSmall,
} from "../../../../constants/product";

import upImg from "../../../../images/product-page//button-up.svg";
import downImg from "../../../../images/product-page/button-down.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "./slider.scss";

export const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="slider" data-test-id="product-slider">
      <div className="slider-left">
        <div className="navigation">
          <img
            className="btn-prev-product"
            src={upImg}
            alt="prev"
            onClick={() => {
              swiper.slidePrev();
            }}
          />
          <img
            className="btn-next-product"
            src={downImg}
            alt="next"
            onClick={() => {
              swiper.slideNext();
            }}
          />
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={1}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          direction={"vertical"}
          navigation={{
            nextEl: ".btn-next-product",
            prevEl: ".btn-prev-product",
          }}
        >
          {productSliderSmall.map(({ key, imageSrc }) => (
            <SwiperSlide key={key}>
              <img src={imageSrc} alt="photoProduct" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {productSlider.map(({ key, imageSrc }) => (
          <SwiperSlide key={key}>
            <img src={imageSrc} alt="photoProduct" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
