import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { image } = product;
  return (
    <div className="product">
      <img src={image} alt="" />
    </div>
  );
};

export default Product;
