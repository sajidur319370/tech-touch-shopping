import React from "react";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/home">
          <img src={logo} alt="" className="logo" />
        </a>
        <ul className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Inventory">Inventory</a>
          </li>
          <li>
            <a href="Cart">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
