import React, { useState, useCallback } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { sendMessage } from "../../services/blogServices";
import useForm from "../../hooks/useForm";
import Recaptcha from "../common/recaptcha";
import { RECAPTCHA_SITE_KEY } from "../../config.json";

const schema = {
  email: Joi.string().email().required().label("Email address"),
  name: Joi.string().min(3).required().label("Full name"),
  subject: Joi.string().min(5).required().label("Subject"),
  comment: Joi.string().min(10).required().label("Message"),
};

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState();

  const handleLoaded = useCallback((_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha
        .execute(`${RECAPTCHA_SITE_KEY}`, { action: "submit" })
        .then((token) => {
          // ...
          setRecaptchaToken(token);
        });
    });
  }, []);

  const { data, setData, handleSubmit, renderButton, renderInput } =
    useForm(schema);

  const doSubmit = async () => {
    try {
      const { status } = await sendMessage({ ...data, recaptchaToken });
      console.log(status);
      if (status === 201) {
        toast.success("You have successfully send your message");
        setData({
          name: "",
          email: "",
          subject: "",
          comment: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Something went wrong, refresh the page and try again");
      }
    }
  };

  const formSubmitHandler = (e) => handleSubmit(e, doSubmit());

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <Recaptcha handleLoaded={handleLoaded} />
        <div className="row">
          {renderInput("name", "Full name", "", "col-md-6")}
          {renderInput("email", "Email", "", "col-md-6")}
          {renderInput("subject", "Subject", "", "col-12")}
          {renderInput("comment", "Message", "", "col-12", false)}
          {renderButton("Send Message")}
        </div>
      </form>
    </>
  );
};

export default React.memo(Contact);
