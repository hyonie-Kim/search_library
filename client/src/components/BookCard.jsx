import React from "react";

export default function BookCard({ result }) {
  console.log("result???", result);
  return (
    <div>
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
