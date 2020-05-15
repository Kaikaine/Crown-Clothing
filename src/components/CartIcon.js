import React from "react";
import "../styles/CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions";

const mapDispatchToProps = (dispatch) => ({
  togglecartHidden: () => dispatch(toggleCartHidden()),
});

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartIcon);
