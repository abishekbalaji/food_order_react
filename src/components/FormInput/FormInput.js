import "./FormInput.scss";

const FormInput = ({ label, children, ...otherProps }) => {
  return (
    <div className="form-input_group">
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input_label`}
        >
          {label}
        </label>
      )}
      <input {...otherProps} className="form-input" />
    </div>
  );
};

export default FormInput;
