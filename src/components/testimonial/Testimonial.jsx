import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTestimonials } from "../../services/blogServices";
import Loader from "../common/Loader";
import LazyLoadImage from "../common/LazyLoadImage";

export default function SimpleSlider() {
  const [testmonials, setTestimonials] = useState();
  useEffect(() => {
    const loadTestimonials = async () => {
      let { data: apiData } = await getTestimonials();
      apiData = apiData.results.map((item) => {
        if (item.slug === "james-ndoto") {
          item["designation"] = "CEO at MijiniTech";
          item["delayAnimation"] = "";
        }
        if (item.slug === "grace-gikonyo") {
          item["designation"] = "PR Manager at Ejiji";
          item["delayAnimation"] = "200";
        }
        if (item.slug === "nick-opar") {
          item["designation"] = "CEO at Marvellous Ventures";
          item["delayAnimation"] = "400";
        }

        return item;
      });
      setTestimonials(apiData.reverse());
    };
    loadTestimonials();
  }, []);

  let testimonialData = (
    <>
      <Loader color="#ee3c23" />
    </>
  );

  if (testmonials) {
    testimonialData = testmonials.map((item) => (
      <div
        key={item.id}
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay={item.delayAnimation}
      >
        <div className="testimonial-01 media">
          <div className="avatar">
            <LazyLoadImage>
              <img
                src={item?.image.replace("http://", "https://")}
                alt={item.title}
              ></img>
            </LazyLoadImage>
          </div>
          <div className="media-body">
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            <h6>{item.title}</h6>
            <span>{item.designation}</span>
          </div>
        </div>
      </div>
    ));
  }

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>{testimonialData}</Slider>
    </div>
  );
}
