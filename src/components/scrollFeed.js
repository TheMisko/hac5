import React from "react";
import Card from "./card";

const ScrollFeed = ({ data, setTitle, setContent, setSource }) => {

  
  return (
    <div className="feed-container">
      <div className="feed-card">
        {data.map(article => (
          <Card
            setSource={setSource}
            setContent={setContent}
            setTitle={setTitle}
            data={article}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollFeed;
