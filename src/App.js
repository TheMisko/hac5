import React, { useState, useEffect } from "react";

import "./App.css";
import ScrollFeed from "./components/scrollFeed";
import Article from "./components/article";
import Nav from "./components/nav";

function App() {
  const [test, setTest] = useState("test");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("...");
  const [source, setSource] = useState("");
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=6f27342bb93b48689e826a8ccef25038";
  const [data, setData] = useState([{}]);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.articles);
  }, []);

  console.log(data);

  return (
    <div className="container">
      <Nav />
      <div className="home-flex">
        {" "}
        <div className="feed">
          <ScrollFeed
            setSource={setSource}
            setContent={setContent}
            setTitle={setTitle}
            data={data}
          />
        </div>
        <div>
          <Article
            content={content}
            title={title}
            test={test}
            setTest={setTest}
            source={source}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
