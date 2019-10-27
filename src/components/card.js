import React, { useState } from "react";

const Card = ({ data, setTitle, setContent, setSource }) => {
  // const [arr, setArr] = useState([]);
  const arr = ["arrr", "arrr"];
  const handleClick = () => {
    setTitle(data.title);
    setContent(data.content);
    setSource(data.url);
    const push = arr.push("yooo");
  };
  console.log(arr);
  return (
    <div className="card">
      <div onClick={handleClick} className="card-text">
        {" "}
        <p>{data.title}</p>
        {/* <p>{data.description}</p> */}
      </div>
    </div>
  );
};

export default Card;
