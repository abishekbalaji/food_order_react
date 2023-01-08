import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import { addItemToCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelectors";

import "./MenuItem.scss";
import { useSelector } from "react-redux";

const MenuItem = ({ menuItem }) => {
  const { title, subtitle, price, quantity } = menuItem;
  const [amount, setAmount] = useState(quantity);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const handleAddBtnClick = (e) => {
    dispatch(addItemToCart(cartItems, { ...menuItem, quantity: amount }));
    setAmount(0)
  };

  return (
    <div className="menu-item_container">
      <div className="menu-item_left">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
        <span className="price">${price}</span>
      </div>
      <div className="menu-item_right">
        <FormInput
          label="Amount"
          name="amount"
          value={amount}
          type="number"
          min={0}
          required
          onChange={handleInputChange}
        />
        <Button onClick={handleAddBtnClick} type="button">
          +Add
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
