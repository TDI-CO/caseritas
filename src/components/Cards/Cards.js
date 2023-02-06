import React from "react";
import "./Card.css";

function Cards(props) {
  const typeFood = ` w-full h-full font-sans card ${props.ima}`;
  return (
    <div className={typeFood}>
      <div className="info">
        <h1 className="text-2xl font-bold"> {props.title} </h1>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Cards;
