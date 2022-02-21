import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";

import { getBlogPosts } from "../../services/blogServices";
import Loader from "../common/Loader";
import { getDuration } from "../utils";

const News = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const history = useHistory();

  const handleClick = (slug) => {
    history.push(`/blog/${slug}`);
  };

  useEffect(() => {
    const loadPosts = async () => {
      const { data: posts } = await getBlogPosts();
      setBlogPosts(posts.results);
    };
    loadPosts();
  }, []);

  return (
    <>
      <div className="row">
        {blogPosts.length > 0 ? (
          <>
            <ArticlePreview
              aosDelay="400"
              feature={blogPosts[0].featured}
              onClick={() => handleClick(blogPosts[0].slug)}
              image={blogPosts[0].image}
              title={blogPosts[0].title}
              date={getDuration(blogPosts[0].date_posted)}
            />
          </>
        ) : (
          <Loader />
        )}

        {blogPosts.length > 0 ? (
          <>
            <ArticlePreview
              aosDelay="800"
              feature={blogPosts[1].featured}
              onClick={() => handleClick(blogPosts[1].slug)}
              image={blogPosts[1].image}
              title={blogPosts[1].title}
              date={getDuration(blogPosts[1].date_posted)}
            />
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6" align="center">
                <a
                  target="_blank"
                  className="px-btn px-btn-white"
                  href="https://blog.muteshi.com/"
                >
                  View all posts
                </a>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default React.memo(News);
