import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Resume from "../../components/resume/ResumeAnimation";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import DarkModeContext from "../../context/darkModeContext";
import { SITE_TITLE } from "../../config.json";

const HomeOne = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  useDocumentTitle(SITE_TITLE);

  useEffect(() => {
    let isMounted = true;
    if (isDarkMode & isMounted) {
      document.body.classList.remove("theme-light");
    }
    return () => {
      isMounted = false;
    };
  }, [isDarkMode]);
  return (
    <div className="main-left theme-dark">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            ></div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeOne;
