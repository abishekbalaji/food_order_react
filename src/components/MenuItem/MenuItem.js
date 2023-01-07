import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./MenuItem.scss";

const MenuItem = ({ title, subtitle, price }) => {
  const handleInputChange = (e) => {};
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
          value={1}
          type="number"
          required
          onChange={handleInputChange}
        />
        <Button type="submit">+Add</Button>
      </div>
    </div>
  );
};

export default MenuItem;
