import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { getSkills } from "../../services/blogServices";
import Loader from "../common/Loader";

const Skills = () => {
  const [focus, setFocus] = useState(false);
  const [skillsData, setSkillsData] = useState();

  useEffect(() => {
    const loadData = async () => {
      let { data: apiData } = await getSkills();
      apiData = apiData.map((item) => {
        item["startCount"] = "0";
        return item;
      });
      setSkillsData(apiData.reverse());
    };
    loadData();
  }, []);

  let loadingData = (
    <>
      <Loader color="#ee3c23" />
    </>
  );

  if (skillsData) {
    loadingData = skillsData.map((skill, i) => (
      <div className="skill-lt" key={i}>
        <h6>{skill.title}</h6>
        <span className="count-inner">
          <CountUp
            start={focus ? skill.startCount : null}
            end={skill.percentage}
            duration={1}
            redraw={true}
          >
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
              >
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          %
        </span>
        <div className="skill-bar">
          <div
            className="skill-bar-in"
            style={{ width: skill.percentage + "%" }}
          ></div>
        </div>
      </div>
      // End skill-lt
    ));
  }

  return (
    <>
      <div className="skill-wrapper">{loadingData}</div>
    </>
  );
};

export default Skills;
