import React from "react";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <div className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/inventory">Inventory</a>
          </li>
          <li>
            <a href="/cart">cart</a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
