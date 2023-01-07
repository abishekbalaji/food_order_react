import MenuItem from "../MenuItem/MenuItem";
import "./Menu.scss";

const MENU = [
  {
    title: "Sushi",
    subtitle: "Finest fish and veggies",
    price: 22.99,
  },
  {
    title: "Schnitzel",
    subtitle: "A German speciality!",
    price: 16.5,
  },
  {
    title: "Barbecue Burger",
    subtitle: "American, raw, meaty!",
    price: 12.99,
  },
  {
    title: "Green Bowl",
    subtitle: "Healthy... and Green...",
    price: 18.99,
  },
];

const Menu = () => {
  return (
    <div className="menu_container">
      {MENU.map((item) => (
        <MenuItem {...item} />
      ))}
    </div>
  );
};

export default Menu;
