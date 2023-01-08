import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelectors";

import Button from "../Button/Button";
import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { title, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleAddClick = (e) => {
    dispatch(addItemToCart(cartItems, {...cartItem, quantity: 1}));
  };

  const handleRemoveClick = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }
  return (
    <div className="cart-item_container">
      <div className="cart-item_container-left">
        <span className="cart-item_title">{title}</span>
        <div className="cart-item_price-container">
          <span className="cart-item_price">{price}</span>
          <span className="cart-item_quantity">x{quantity}</span>
        </div>
      </div>
      <div className="cart-item_container-right">
        <Button onClick={handleRemoveClick} btnType="inverted">-</Button>
        <Button onClick={handleAddClick} btnType="inverted">
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
