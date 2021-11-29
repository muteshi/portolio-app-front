import React from "react";
import LazyLoad from "react-lazyload";

const LazyLoadImage = (props) => {
  return (
    <LazyLoad height={200} once>
      {props.children}
    </LazyLoad>
  );
};

export default React.memo(LazyLoadImage);
