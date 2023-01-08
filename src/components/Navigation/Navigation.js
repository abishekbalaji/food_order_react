import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../Button/Button";
import CartDropdown from "../CartDropdown/CartDropdown";

import { setIsCartOpen } from "../../store/cart/cartActions";
import { selectIsCartOpen } from "../../store/cart/cartSelectors";

import "./Navigation.scss";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const handleCartClick = (e) => {
    dispatch(setIsCartOpen());
  };
  return (
    <>
      <div className="navigation_container">
        <Link className="navigation_navlinks brand" to="/">
          ReactMeals
        </Link>
        <div className="navigation_links-container">
          <Link className="navigation_navlinks" to="/auth">
            Sign In
          </Link>
          <Button onClick={handleCartClick}>Cart</Button>
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </>
  );
};

export default Navigation;
