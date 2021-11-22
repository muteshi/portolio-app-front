import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          If you got to this section, you are must probably be impressed. 😎
          Leave me a message and i will promptly get in touch with you
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">Mombasa Road, Nairobi , Kenya.</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">hello(at)muteshi.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+254 711 820-424</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
