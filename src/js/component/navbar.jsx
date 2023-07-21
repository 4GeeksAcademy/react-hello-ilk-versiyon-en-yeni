import React, { useState } from "react";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-expand-lg">
      <div className="container justify-content-between"> {/* Flexbox ile sağa ve sola yaslamak için 'justify-content-between' ekleniyor */}
        <a className="navbar-brand" href="#home">Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : "justify-content-end"}`}
        >
          <ul className="navbar-nav ml-auto"> {/* ml-auto sınıfı menü bağlantılarını sağa yaslar */}
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;




