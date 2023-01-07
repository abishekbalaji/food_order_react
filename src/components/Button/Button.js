import "./Button.scss";

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button className={`custom-button ${btnType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
