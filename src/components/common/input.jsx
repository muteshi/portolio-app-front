import React from "react";

const Input = ({ error, name, label, colClass, isInput = true, ...rest }) => {
  return (
    <div className={colClass}>
      <div className="form-group mb-3">
        <label htmlFor={name} />
        {isInput ? (
          <input
            {...rest}
            id={name}
            name={name}
            className="form-control theme-light"
          />
        ) : (
          <textarea
            {...rest}
            id={name}
            name={name}
            className="form-control theme-light"
          />
        )}
        {error && <span className="invalid-feedback">{error}.</span>}
      </div>
    </div>
  );
};

export default Input;
