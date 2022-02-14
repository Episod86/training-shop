import phoneIcon from "../images/header/phone.svg";
import locationIcon from "../images/header/location.svg";
import clockIcon from "../images/header/clock.svg";

import search from "../images/header/search.svg";
import globe from "../images/header/globe.svg";
import user from "../images/header/user.svg";
import shoppingBag from "../images/header/shopping-bag.svg";

export const contacts = [
  {
    key: "1",
    text: "+375 29 100 20 30",
    imageSrc: phoneIcon,
  },
  {
    key: "2",
    text: "Belarus, Gomel, Lange 17",
    imageSrc: locationIcon,
  },
  {
    key: "3",
    text: "All week 24/7",
    imageSrc: clockIcon,
  },
];

export const menu = [
  {
    id: "1",
    name: "About Us",
    path: "about-us",
  },
  {
    id: "2",
    name: "Women",
    path: "women",
  },
  {
    id: "3",
    name: "Men",
    path: "men",
  },
  {
    id: "4",
    name: "Beauty",
    path: "beauty",
  },
  {
    id: "5",
    name: "Accessories",
    path: "accessories",
  },
  {
    id: "6",
    name: "Blog",
    path: "blog",
  },
  {
    id: "7",
    name: "Contact",
    path: "contact",
  },
];

export const usefulLinks = [
  {
    id: "1",
    imageSrc: search,
    name: "search",
  },
  {
    id: "2",
    imageSrc: globe,
    name: "globe",
  },
  {
    id: "3",
    imageSrc: user,
    name: "user",
  },
  {
    id: "4",
    imageSrc: shoppingBag,
    name: "shopping-bag",
  },
];
