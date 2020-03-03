import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <img
        id="logo"
        src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=4"
        alt="logo"
      ></img>
      <nav id="navList">
        <li>
          <a>Home Page</a>
        </li>
        <li>
          <a>Log In</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
