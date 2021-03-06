import React from "react";

import ArticleContent from "./ArticleContent";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import useGaTracker from "../../hooks/useGaTracker";

const Article = ({ props }) => {
  useGaTracker();
  document.body.classList.add("theme-light");
  return (
    <>
      <div className="main-left">
        <Header />
        <div className="article-center">
          <ArticleContent />
        </div>
        <footer className="footer white">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
      <div />
    </>
  );
};

export default React.memo(Article);
