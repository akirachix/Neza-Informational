import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import './style.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
      <img src="/images/LOGO.png" alt="NEZA LOGO" />
      
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <HiX /> : <HiMenu />}
        </div>
       
        <div className={`navbar-links ${showMenu ? "show" : ""}`}>
          <p>Home</p>
          <p>About Us</p>
          <p>Team</p>
          <p>Contact Us</p>
          <div className="btns">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;







