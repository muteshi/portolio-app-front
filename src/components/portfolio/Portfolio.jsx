import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import {
  getMobilePortfolios,
  getPortfolios,
  getWebPortfolios,
} from "../../services/blogServices";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Web Development", "Mobile Development"];

let delayAnimation = ["", "100", "200", "0", "100", "200", "0", "100"];
let delayAnimationWeb = ["", "100", "200", "0", "100", "200"];
let delayAnimationMob = ["", "100"];

const PortfolioAnimation = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [portfolioWebData, setPortfolioWebData] = useState([]);
  const [portfolioMobileData, setPortfolioMobileData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let { data: apiData } = await getPortfolios();

      const newData = apiData.results.reverse().map((item, i) => ({
        ...item,
        delayAnimation: delayAnimation[i],
      }));

      setPortfolioData(newData);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      let { data: apiData } = await getWebPortfolios();

      const newData = apiData.results.reverse().map((item, i) => ({
        ...item,
        delayAnimation: delayAnimationWeb[i],
      }));

      setPortfolioWebData(newData);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      let { data: apiData } = await getMobilePortfolios();

      const newData = apiData.results.reverse().map((item, i) => ({
        ...item,
        delayAnimation: delayAnimationMob[i],
      }));

      setPortfolioMobileData(newData);
    };
    loadData();
  }, []);

  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolioData.map((val) => (
                    <div
                      className="portfolio-box-01"
                      key={val.id}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.url} target="_blank" rel="noreferrer">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.title}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={val?.image.replace("http://", "https://")}
                          className="gallery-link"
                        >
                          <img
                            src={val?.image.replace("http://", "https://")}
                            alt={val.title}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolioWebData.map((val) => (
                    <div
                      className="portfolio-box-01"
                      key={val.id}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.url} target="_blank" rel="noreferrer">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.title}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href={val.iamge} className="gallery-link">
                          <img
                            src={val?.image.replace("http://", "https://")}
                            alt={val.title}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolioMobileData.map((val) => (
                    <div
                      className="portfolio-box-01"
                      key={val.id}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.url} target="_blank" rel="noreferrer">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.title}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href={val.image} className="gallery-link">
                          <img
                            src={val?.image.replace("http://", "https://")}
                            alt={val.title}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
