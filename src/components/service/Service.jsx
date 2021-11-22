import React, { useEffect, useState } from "react";
import { getServices } from "../../services/blogServices";
import Loader from "../common/Loader";

export default function Service() {
  const [services, setServices] = useState();
  useEffect(() => {
    const loadServices = async () => {
      let { data: apiData } = await getServices();
      apiData = apiData.results.map((item) => {
        if (item.slug === "digital-marketing") {
          item["icon"] = "icon-target";
          item["delayAnimation"] = "400";
        }
        if (item.slug === "mobile-app-development") {
          item["icon"] = "icon-mobile";
          item["delayAnimation"] = "200";
        }
        if (item.slug === "web-development") {
          item["icon"] = "icon-desktop";
          item["delayAnimation"] = "";
        }
        return item;
      });
      setServices(apiData.reverse());
    };
    loadServices();
  }, []);

  let servicesData = (
    <>
      <Loader color="#ee3c23" />
    </>
  );
  if (services) {
    servicesData = services.map((item) => (
      <div
        className="col-md-6 col-lg-4 my-3"
        key={item.id}
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay={item.delayAnimation}
      >
        <div className="feature-box-01">
          <div className="icon">
            <i className={`icon ${item.icon}`}></i>
          </div>
          <div className="feature-content">
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </div>
        </div>
        {/* End .feature-box-01 */}
      </div>
    ));
  }
  return (
    <>
      <div className="row">{servicesData}</div>
    </>
  );
}
