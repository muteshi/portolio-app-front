import React, { useEffect, useState } from "react";
import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";
import { getPost } from "../../services/blogServices";
import Loader from "../common/Loader";
import LazyLoadImage from "../common/LazyLoadImage";
import { BASE_URL } from "../../config";

const dob = new Date(1987, 5, 1);
const today = new Date();
const getYear = () => {
  let age = Math.floor(today.getTime() - dob.getTime());
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(age / day);
  const months = Math.floor(days / 31);
  return Math.ceil(months / 12);
};

const at = "{at}";

const About = () => {
  const [aboutData, setAboutData] = useState({});

  const aboutSlug = "who-is-muteshi";

  useEffect(() => {
    const getAboutData = async () => {
      const { data: post } = await getPost(aboutSlug);
      setAboutData(post);
    };
    getAboutData();
  }, []);

  let imageLoading = <Loader />;
  if (Object.keys(aboutData).length !== 0) {
    imageLoading = (
      <div className="img-in">
        <img src={`${BASE_URL}${aboutData.image}`} alt={aboutData.title} />
      </div>
    );
  }

  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  {imageLoading}

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Full-Stack Developer</p>
                  <h3>Muteshi Paul</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>{aboutData.title}</h3>
                </div>
                <div className="about-text">
                  <p dangerouslySetInnerHTML={{ __html: aboutData.content }}>
                    {/* {aboutData.content} */}
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Birthday: </label>
                          <span>1st June 1987</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span> {getYear()} years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Nairobi</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Email: </label>
                          <span>hello{at}muteshi.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>john.mute</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>My Services</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <LazyLoadImage>
            <div
              className="separated"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/border-dark.png"
                })`,
              }}
            ></div>
          </LazyLoadImage>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
