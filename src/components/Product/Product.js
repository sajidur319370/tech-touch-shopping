import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { image, title, price, category } = product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-details">
        <h5 className="product-title">{title}</h5>
        <h6 className="product-category">
          Category: <small>{category}</small>
        </h6>
        <h4 className="product-price">
          Price: <small>{price}</small>
        </h4>
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="cart-button"
        >
          Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
