import React from "react";

const ArticlePreview = ({
  aosDuration = "1200",
  author = "Muteshi Paul",
  aosDelay,
  date,
  onClick,
  image,
  title,
  feature = false,
}) => {
  return (
    <div
      className="col-md-6 m-15px-tb"
      data-aos="fade-right"
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
    >
      <div className="blog-grid" onClick={onClick}>
        <div className="blog-img">
          <img src={image?.replace("http://", "https://")} alt={title}></img>

          {feature && (
            <span className="badge bg-info text-dark featured">Featured</span>
          )}
        </div>

        <div className="blog-info">
          <div className="meta">{` ${author}. ${date}`}</div>
          <h6>
            <p>{title}</p>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
