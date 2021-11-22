import { useState } from "react";
import Joi from "joi-browser";
import Input from "../components/common/input";

const useForm = (schema) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(data, schema, options);

    if (!error) return null;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const inputSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, inputSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    const errorMsg = validateProperty(input);
    const newErrors = { ...errors };
    if (errorMsg) newErrors[input.name] = errorMsg;
    else delete newErrors[input.name];
    setErrors(newErrors);
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = (e, submitFunc) => {
    e.preventDefault();

    const newErrors = validate();

    setErrors(newErrors || {});
    if (errors) {
      return;
    }

    submitFunc();
  };

  const renderButton = (label) => {
    return (
      <div className="col-12">
        <div className="btn-bar">
          <button className="px-btn px-btn-white" disabled={validate()}>
            {label}
          </button>
        </div>
      </div>
    );
  };
  const renderInput = (name, label, type = "text", colClass, isInput) => {
    return (
      <Input
        error={errors[name]}
        name={name}
        type={type}
        onChange={handleChange}
        value={data[name] || ""}
        label={label}
        placeholder={label}
        colClass={colClass}
        isInput={isInput}
      />
    );
  };

  return {
    data,
    setData,
    setErrors,
    renderButton,
    renderInput,
    handleSubmit,
  };
};

export default useForm;
