import React, { useEffect } from "react";
import { RECAPTCHA_SITE_KEY, RECAPTCHA_URL } from "../../config.json";

const URL = `${RECAPTCHA_URL}${RECAPTCHA_SITE_KEY}`;

const Recaptcha = ({ handleLoaded }) => {
  const scriptExists = (url) => {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  };
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script");
    script.src = URL;
    script.addEventListener("load", handleLoaded);
    if (!scriptExists(URL)) document.body.appendChild(script);
  }, [handleLoaded]);
  return (
    <div
      className="g-recaptcha"
      data-sitekey={RECAPTCHA_SITE_KEY}
      data-size="invisible"
    ></div>
  );
};

export default Recaptcha;
