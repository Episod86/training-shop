import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { sliderMain } from "../../../constants/main";
import "swiper/scss";
import "swiper/scss/navigation";
import "./main-header.scss";

export const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="banner">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          className="main-slider"
        >
          {sliderMain.map(({ id, title, text, imageSrc, alt }) => (
            <SwiperSlide key={id}>
              <img src={imageSrc} alt={alt} />
              <div className="item-text">
                <div className="title">{title}</div>
                <div className="text">{text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
