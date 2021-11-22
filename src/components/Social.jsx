import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/muteshi" },
  {
    Social: <FaStackOverflow />,
    link: "https://stackoverflow.com/users/6708508/muteshi",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/muteshi-paul/",
  },
  { Social: <FaTwitter />, link: "https://www.twitter.com/" },

  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <Link
          key={i}
          to={{ pathname: `${val.link}` }}
          rel="noreferrer"
          target="_blank"
        >
          {val.Social}
        </Link>
      ))}
    </div>
  );
};

export default Social;
