
import React, { useState } from "react";

import "./style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="logo">
      <img src="/images/LOGO.png" alt="NEZA LOGO" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="../home">Home</a>
        <a href="../Product">About</a>
        <a href="../team"> Team</a>
        <a href="/contact">Contact</a>
        <button className="button">Register</button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;







