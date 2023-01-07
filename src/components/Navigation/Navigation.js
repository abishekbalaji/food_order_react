import { Link, Outlet } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
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
          <Link className="navigation_navlinks" to="/checkout">
            Cart
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
