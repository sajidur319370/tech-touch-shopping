import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ product }) => {
  const { image, title } = product;
  return (
    <div className="cart">
      <div className="cart-image">
        <img src={image} alt="" />
      </div>
      <div className="cart-title">
        <h4>{title}</h4>
      </div>
      <button className="delete-button">
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;
