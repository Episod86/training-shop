import stripe from "../images/footer/stripe.svg";
import aes256 from "../images/footer/AES256.svg";
import paypal from "../images/footer/paypal.svg";
import visa from "../images/footer/visa.svg";
import mastercard from "../images/footer/mastercard.svg";
import discover from "../images/footer/discover.svg";
import american from "../images/footer/american-express.svg";

import locationIcon from "../images/footer/location.svg";
import phoneIcon from "../images/footer/phone.svg";
import clockIcon from "../images/footer/clock.svg";
import mailIcon from "../images/footer/mail.svg";

export const footerIcons = [
  {
    key: "1",
    alt: "stripe",
    imageSrc: stripe,
  },
  {
    key: "2",
    alt: "aes256",
    imageSrc: aes256,
  },
  {
    key: "3",
    alt: "paypal",
    imageSrc: paypal,
  },
  {
    key: "4",
    alt: "visa",
    imageSrc: visa,
  },
  {
    key: "5",
    alt: "mastercard",
    imageSrc: mastercard,
  },
  {
    key: "6",
    alt: "discover",
    imageSrc: discover,
  },
  {
    key: "7",
    alt: "american",
    imageSrc: american,
  },
];

export const footerMenu = [
  {
    key: "1",
    items: [
      {
        text: "Categories",
        href: "#!",
      },
      {
        text: "Men",
        href: "men",
      },
      {
        text: "Women",
        href: "women",
      },
      {
        text: "Accessories",
        href: "#!",
      },
      {
        text: "Beauty",
        href: "#!",
      },
    ],
  },
  {
    key: "2",
    items: [
      {
        text: "Infomation",
        href: "#!",
      },
      {
        text: "About Us",
        href: "#!",
      },
      {
        text: "Contact Us",
        href: "#!",
      },
      {
        text: "Blog",
        href: "#!",
      },
      {
        text: "FAQs",
        href: "#!",
      },
    ],
  },
  {
    key: "3",
    items: [
      {
        text: "Useful links",
        href: "#!",
      },
      {
        text: "Terms & Conditions",
        href: "#!",
      },
      {
        text: "Returns & Exchanges",
        href: "#!",
      },
      {
        text: "Shipping & Delivery",
        href: "#!",
      },
      {
        text: "Privacy Policy",
        href: "#!",
      },
    ],
  },
];

export const contactUs = [
  {
    key: "1",
    text: "Belarus, Gomel, Lange 17",
    imageSrc: locationIcon,
  },
  {
    key: "2",
    text: "+375 29 100 20 30",
    imageSrc: phoneIcon,
  },
  {
    key: "3",
    text: "All week 24/7",
    imageSrc: clockIcon,
  },
  {
    key: "4",
    text: "info@clevertec.ru",
    imageSrc: mailIcon,
  },
];
