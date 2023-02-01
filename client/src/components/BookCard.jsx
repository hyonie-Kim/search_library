import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCard({ result }) {
  console.log("result???", result);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/book/${result.itemId}`);
  };
  return (
    <div onClick={showDetail}>
      {/* <img width={130} src={result.cover}></img> */}
      {/* <div>{item.cover}</div>
      <h6>{item.title}</h6>
      <div>{item.author}</div> */}
      <img className="card" src={result.cover}></img>
      <div>
        <h5>{result.title}</h5>
      </div>
    </div>
  );
}
