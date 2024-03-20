import React from "react";
import Navigation from "./NavBar";
import FooterComponent from "./Footer";
import "../styles/global.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <div className="text-light">{children}</div>
      <FooterComponent />
    </div>
  );
};
export default Layout;
