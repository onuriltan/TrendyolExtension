import React from 'react';
import logo from "../assets/trendyol-logo.png"
import usericon from "../assets/usericon.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/shopping-cart.svg"

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="search-input-wrapper">
        <input className="search-input">
        </input>
      </div>
      <div className="menu">
        <div className="item">
          <img className="icon" src={usericon} alt="logo" />
          <span>Hesabım</span>
        </div>
        <div className="item">
          <img className="icon" src={heart} alt="logo" />
          <span>Favorilerim</span>
        </div>
        <div className="item">
          <img className="icon" src={cart} alt="logo" />
          <span>Siparişlerim</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
