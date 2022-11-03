import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { Profile, Messages3 } from "iconsax-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      <input className="inputToCompare" type="text" placeholder="Search Products" />
      <Link to="/compare" className="navbaritem"> Laptops </Link>
      <Link to="/" className="navbaritem"> Smartphones </Link>
      <Link to="/" className="navbaritem"> Desktop computers </Link> 
    </div>
  );
}

const Header = () => {

  return (
    <div className="header">
      <div className="headerContent">
        <Link to="/" className="pageName">
          <Logo width="200" height="116" />
        </Link>
        <Link to="/" className="logoWithText">
          <Messages3 size={33}/>
          <div>Contact</div>
        </Link>
        <Link to="/signin" className="logoWithText">
          <Profile size={33}/>
          <div>Sign in</div>
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;