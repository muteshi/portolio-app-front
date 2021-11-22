import React, { useState, useEffect, useContext } from "react";
import { getExperience } from "../../services/blogServices";
import Loader from "../common/Loader";
import Skills from "../skills/Skills";
import DarkModeContext from "../../context/darkModeContext";

const educatonContent = [
  {
    passingYear: "2008-2014",
    degreeTitle: "Bachelor of Science with IT (Computer Science Major)",
    instituteName: "Maseno University",
  },
  {
    passingYear: "2002-2006",
    degreeTitle: "High School Diploma",
    instituteName: "Kakamega High School",
  },
  {
    passingYear: "1993-2001",
    degreeTitle: "Primary School Diploma",
    instituteName: "Likhovero Primary School",
  },
];

const Resume = () => {
  const [experience, setExperience] = useState();
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const loadData = async () => {
      let { data: apiData } = await getExperience();
      apiData = apiData.results.map((item) => {
        if (item.slug === "freelance-software-developer") {
          item["jobDuration"] = "Jan 2019 - Present";
          item["delayAnimation"] = "";
          item["companyName"] = "Freelancing";
          item["timeDuraton"] = "Part time";
        }
        if (item.slug === "head-of-it-at-jofar-systems-ltd") {
          item["jobDuration"] = "Jan 2016 - Present";
          item["delayAnimation"] = "100";
          item["companyName"] = "Jofar Systems Ltd";
          item["timeDuraton"] = "Fulltime";
        }
        return item;
      });
      setExperience(apiData.reverse());
    };
    loadData();
  }, []);

  let experienceData = (
    <>
      <Loader color="#ee3c23" />
    </>
  );

  if (experience) {
    experienceData = experience.map((item) => {
      let paragraph = item.content.split("-").map((p, i) => {
        if (p) {
          return <li key={i}>{p}</li>;
        }
        return null;
      });

      return (
        <div
          className="resume-row"
          key={item.id}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.delayAnimation}
        >
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <div className="rb-left">
                <h6>{item.title}</h6>
                <p>{item.jobDuration}</p>
                <div className="rb-time">{item.timeDuraton}</div>
              </div>
            </div>
            <div className="col-md-8 col-xl-9">
              <div className="rb-right">
                <h6>{item.companyName}</h6>
                <ul style={{ color: isDarkMode ? "#eee" : "" }}>{paragraph}</ul>
                {/* <p>{item.content}</p> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">{experienceData}</div>

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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
