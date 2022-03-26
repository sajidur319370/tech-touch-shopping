import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Choose from "../Choose/Choose";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosen, setChoosen] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const chooseOne = () => {
    if (cart.length !== 0) {
      const x = cart[Math.floor(Math.random() * cart.length)];
      const item = [x];
      setChoosen(item);
    }
  };
  const chooseAgain = () => {
    const empty = [];
    setCart(empty);
    setChoosen(empty);
  };
  return (
    <div className="shop-container">
      <div className="cart-container">
        <h2>Added Product</h2>
        {cart.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
        {choosen.map((product) => (
          <Choose key={product.id} product={product}></Choose>
        ))}
        <button
          onClick={() => {
            chooseOne();
          }}
          className="chose-one"
        >
          Choose One For Me
        </button>
        <button
          onClick={() => {
            chooseAgain();
          }}
          className="chose-one"
        >
          Choose Again
        </button>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
