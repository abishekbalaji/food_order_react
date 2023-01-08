import "./FormInput.scss";

const FormInput = ({ label, children, ...otherProps }) => {
  return (
    <div className="form-input_group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          className={`${
            otherProps.value || +otherProps.value === 0 ? "shrink" : ""
          } form-input_label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
