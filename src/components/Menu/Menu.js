import MenuItem from "../MenuItem/MenuItem";
import "./Menu.scss";

const MENU = [
  {
    id: 1,
    title: "Sushi",
    subtitle: "Finest fish and veggies",
    price: 22.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Schnitzel",
    subtitle: "A German speciality!",
    price: 16.5,
    quantity: 1,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    subtitle: "American, raw, meaty!",
    price: 12.99,
    quantity: 1,
  },
  {
    id: 4,
    title: "Green Bowl",
    subtitle: "Healthy... and Green...",
    price: 18.99,
    quantity: 1,
  },
  {
    id: 5,
    title: "Green Bowlsss",
    subtitle: "Healthyss... and Greessn...",
    price: 198.99,
    quantity: 1,
  },
];

const Menu = () => {
  return (
    <div className="menu_container">
      {MENU.map((item) => (
        <MenuItem key={item.id} menuItem={item} />
      ))}
    </div>
  );
};

export default Menu;
