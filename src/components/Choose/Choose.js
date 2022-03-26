import React from "react";
import "./Choose.css";

const Choose = ({ product }) => {
  const { image, title } = product;
  return (
    <div className="choose">
      <img src={image} alt="" />
      <h6 className="title">{title}</h6>
    </div>
  );
};

export default Choose;
