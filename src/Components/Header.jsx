import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { ProfileAdd, Messages3 } from "iconsax-react";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="pageName">BetterTech</Link>
      <Link to="/" className="logoWithText">
        <Messages3 />
        <h3>Contact</h3>
      </Link>
      <Link to="/signup" className="logoWithText">
        <ProfileAdd />
        <h3>Create profile</h3>
      </Link>
    </div>
  );
}

export default Header;