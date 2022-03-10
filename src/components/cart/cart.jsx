import cartImg from "./images/cart.svg";
import "./cart.scss";

export const Cart = () => {
  return (
    <button type="button" className="cart">
      <img src={cartImg} alt="корзина" />
    </button>
  );
};
