import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/compare" className="navbaritem"> Laptops </Link>
        <Link to="/" className="navbaritem"> Smartphones </Link>
        <Link to="/" className="navbaritem"> Desktop computers </Link>
        <input />
    </div>
  );
}

export default Navbar;