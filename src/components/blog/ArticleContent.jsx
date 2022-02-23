import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../../services/blogServices";
import { getDateDetails } from "../utils";
import Loader from "../common/Loader";
import { avatar } from "../../config.json";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { ArticleComments, ArticleCommentsCount } from "../common/Disqus";
import { BASE_URL } from "../../config";

const ArticleContent = () => {
  const [postDetails, setPostDetails] = useState();
  const [pageTitle, setPageTitle] = useState();

  const { postSlug } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const { data: postData } = await getBlogPost(postSlug);
      setPostDetails(postData);
      setPageTitle(postData.title);
    };
    loadData();
  }, [postSlug]);

  useEffect(() => {
    if (postDetails !== undefined) setPageTitle(postDetails.title);
  }, [postDetails]);

  useDocumentTitle(`${pageTitle} || muteshi.com`);
  // console.log(postDetails);
  let tagsLoading = (
    <>
      <Loader />
    </>
  );

  if (postDetails) {
    tagsLoading = postDetails.tags.map((tag) => (
      <li href="#" key={tag.id}>
        {tag.name}
      </li>
    ));
  }

  return (
    <>
      {postDetails !== undefined ? (
        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
                <img
                  src={`${BASE_URL}${postDetails?.image}`}
                  alt={postDetails.title}
                ></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>{postDetails.title}</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src={avatar} alt={postDetails.title} />
                    </div>
                    <div className="media-body">
                      <label>Muteshi Paul</label>
                      <span>{getDateDetails(postDetails.date_posted)}</span>
                    </div>
                    <ArticleCommentsCount
                      slug={postSlug}
                      title={postDetails.title}
                    />
                  </div>
                </div>
                {/* End .article-title */}
                <ReactMarkdown className="article-content">
                  {postDetails.content}
                </ReactMarkdown>
                {/* <div className="article-content" /> */}

                <ul className="nav tag-cloud">{tagsLoading}</ul>
                {/* End tag */}
              </article>
              {/* End Article */}
              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <ArticleComments slug={postSlug} title={postDetails.title} />
              </div>

              {/* End .contact Form */}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default React.memo(ArticleContent);
