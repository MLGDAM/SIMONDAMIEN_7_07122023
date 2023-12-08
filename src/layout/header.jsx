import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sass/header.scss";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="navBar">
      <div className="navBar_logo">
        <img src={logo} className="navBar_logo_img" alt="Kasa" />
      </div>
      <NavLink to="/" className="navBar_link1">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navBar_link2">
        A propos
      </NavLink>
    </nav>
  );
}

export default Header;
