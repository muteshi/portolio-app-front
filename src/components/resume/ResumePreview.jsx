import { React, useEffect, useState } from "react";
import { getResume } from "../../services/blogServices";

const ResumePreview = (props) => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const getResumeData = async () => {
      const { data: resume } = await getResume();
      setResume(resume);
    };
    getResumeData();
  }, []);
  return (
    <object
      data={resume[0]?.resume}
      type="application/pdf"
      width="100%"
      height="600"
      title="Muteshi Paul CV"
    ></object>
  );
};

export default ResumePreview;
