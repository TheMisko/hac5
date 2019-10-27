import React from "react";

const Article = ({ title, content, source }) => {
  return (
    <div>
      <div className="trapezoid-flex">
        <div className="trapezoid"></div>
      </div>

      <div className="article-container">
        <h2>{title}</h2>

        <p>{content}</p>
        <div className="source">
          <a href={source}>source</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
