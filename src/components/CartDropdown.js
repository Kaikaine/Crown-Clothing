import React from "react";
import CustomButton from "./CustomButton";
import "../styles/CartDropdown.scss";
import { toggleCartHidden } from "../redux/cart/cartActions";

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;
