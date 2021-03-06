import React, { useContext, useEffect, useState } from "react";
import TextLoop from "react-text-loop";
import { FaMoon, FaSun } from "react-icons/fa";
import DarkModeContext from "../../context/darkModeContext";
import Toggle from "../common/Toggle";
import { getPost } from "../../services/blogServices";
import Loader from "../common/Loader";
import { BASE_URL } from "../../config";

const conctInfo = {
  phone: "+254 711 820 424",
  email: " hello{at}muteshi.com",
};

const skills = [
  { id: 2, name: "Frontend  Engineer" },
  { id: 1, name: "Backend Engineer" },
  { id: 3, name: "Mobile Developer" },
  { id: 4, name: "Technology Expert" },
];

const Slider = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  const [personalData, setPersonalData] = useState({});

  const postSlug = "muteshi-paul";

  useEffect(() => {
    const getPostData = async () => {
      const { data: post } = await getPost(postSlug);
      setPersonalData(post);
    };
    getPostData();
  }, []);

  const lightMode = <Toggle Icon={FaMoon} onClick={toggle} page={"/"} />;
  const darkMode = <Toggle Icon={FaSun} onClick={toggle} page={"/dark"} />;

  let imageLoading = <Loader />;
  if (Object.keys(personalData).length !== 0) {
    imageLoading = (
      <div
        className="hb-me"
        style={{
          backgroundImage: `url(${BASE_URL}${personalData.image})`,
        }}
      ></div>
    );
  }

  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="/#">{conctInfo.phone}</a>
            <a href="/#">{conctInfo.email}</a>
          </div>
          {!isDarkMode ? lightMode : darkMode}
          <div className="hb-lang"></div>
        </div>

        {/* End hp-top-fixed */}

        <div className="container">
          <div className="mobile-show">
            {!isDarkMode ? lightMode : darkMode}
          </div>
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello &#128512; I'm
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {personalData.title}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    {skills.map((tag) => {
                      return (
                        <p className="loop-text lead" key={tag.id}>
                          {tag.name}
                        </p>
                      );
                    })}
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  dangerouslySetInnerHTML={{ __html: personalData.content }}
                ></p>

                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    target="_blank"
                    className="px-btn px-btn-white"
                    href="/resume-preview"
                  >
                    View my CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        {imageLoading}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default React.memo(Slider);
