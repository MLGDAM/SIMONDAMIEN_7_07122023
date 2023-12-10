import React from "react";
import logoFooter from "../../src/images/LOGO.png";
import "../styles/sass/footer.scss";
import { useLocation } from "react-router-dom";

const Footer = ({ path, }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "*") return null;
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo-kasa" className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};


export default Footer;
