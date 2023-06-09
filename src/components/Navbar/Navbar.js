import React from "react";
import logo from "../../assets/images/Free_Sample_By_Wix (1).jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>O nama</h2>
        </NavLink>
        <NavLink
          to={"/onama"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>Svi proizvodi</h2>
        </NavLink>
        <NavLink
          to={"/kontakt"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>Kontakt</h2>
        </NavLink>
        <NavLink
          to={"/korpa"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <ShoppingCartIcon className="cartIcon" />
        </NavLink>
      </div>
    </header>
  );
}
