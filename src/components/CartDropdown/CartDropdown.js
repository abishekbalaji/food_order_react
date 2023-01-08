import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelectors";
import { useDispatch } from "react-redux";

import { clearCart } from "../../store/cart/cartActions";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleCheckout = () => {
    dispatch(clearCart());
    alert("Items ordered!");
  };
  return (
    <div className="cart-dropdown_container">
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      {cartItems.length !== 0 && (
        <Button onClick={handleCheckout} type="button">
          Checkout
        </Button>
      )}
    </div>
  );
};

export default CartDropdown;
