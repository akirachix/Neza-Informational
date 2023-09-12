import React, { useState } from "react";
// import "./styles.css";
import './style.css'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };

  const scrollToSection = (sectionId) => {
  
    setActive("nav__menu");
    setIcon("nav__toggler");

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        <img src="/images/LOGO.png" alt="img" />
      </a>
      <ul data-testid="nav-menu" className={active}>
        <li className="nav__item1">
          <a href="#home" id="1"className="nav__link" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li className="nav__item2">
          <a href="#product"id="2" className="nav__link" onClick={() => scrollToSection("product")}>
            About
          </a>
        </li>
        <li className="nav__item3">
          <a href="#team" className="nav__link" onClick={() => scrollToSection("team")}>
            Team
          </a>
        </li>
        <li className="nav__item4">
          <a href="#footer" id="4"className="nav__link" onClick={() => scrollToSection("footer")}>
            Contact
          </a>
        </li>
        <li className="button">
          <a href="" >
            <button>Register</button>
          </a>
        </li>
      </ul>
      <div data-testid="nav-toggler" onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;




