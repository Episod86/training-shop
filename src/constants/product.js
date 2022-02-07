import prevImg from "../images/product-page/related-products/button-prev.svg";
import nextImg from "../images/product-page/related-products/button-next.svg";

import itemImgFirst from "../images/product-page/related-products/related-first.jpg";
import itemImgSecond from "../images/product-page/related-products/related-second.jpg";
import itemImgTrird from "../images/product-page/related-products/related-trird.jpg";
import itemImgFourth from "../images/product-page/related-products/related-fourth.jpg";

import ratingSrc from "../images/product-page/related-products/rating-img.svg";

export const productNav = [
  {
    key: "1",
    imageSrc: prevImg,
    alt: "prev",
  },
  {
    key: "2",
    imageSrc: nextImg,
    alt: "next",
  },
];

export const productItem = [
  {
    key: "1",
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imageSrc: itemImgFirst,
    ratingSrc: ratingSrc,
  },
  {
    key: "2",
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imageSrc: itemImgSecond,
    ratingSrc: ratingSrc,
  },
  {
    key: "3",
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imageSrc: itemImgTrird,
    ratingSrc: ratingSrc,
  },
  {
    key: "4",
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imageSrc: itemImgFourth,
    ratingSrc: ratingSrc,
  },
];
