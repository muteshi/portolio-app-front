import { DiscussionEmbed, CommentCount } from "disqus-react";

const shortname = "muteshi";
const siteUrl = window.location.href;
const lang = "en";

export const ArticleComments = ({
  url = siteUrl,
  slug,
  title,
  language = lang,
}) => {
  console.log(url);
  return (
    <DiscussionEmbed
      shortname={shortname}
      config={{
        url,
        identifier: slug,
        title,
        language,
      }}
    />
  );
};

export const ArticleCommentsCount = ({
  url = siteUrl,
  slug,
  title,
  language = lang,
}) => {
  return (
    <CommentCount
      shortname={shortname}
      config={{
        url,
        identifier: slug,
        title,
        language,
      }}
    >
      Comments
    </CommentCount>
  );
};
