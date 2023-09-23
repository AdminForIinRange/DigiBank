import React from "react";
import { NavLink } from "react-router-dom";
import DigiBankLogo from "../img/DigiBankLogo.png";
import "./NavBar.css"; // Import the CSS file

export default function NavBar() {
  return (
    <nav className="nav-bar" style={{zIndex:" 2"}}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src={DigiBankLogo}
            alt="DigiBank Logo"
            className="nav-logo"
          />
           <span className="nav-text">
            DigiBank
          </span>
         
        </NavLink>

        <div className="navbar--navLinks">
          <NavLink to="/Services" className="btn">
            Services
          </NavLink>
          <NavLink to="/Finance" className="btn">
            Finance
          </NavLink>
          <NavLink to="/AboutUs" className="btn">
            AboutUs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
