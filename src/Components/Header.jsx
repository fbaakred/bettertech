import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { ProfileAdd, Messages3 } from "iconsax-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="pageName">
        <Logo width="200" height="116" />
      </Link>
      <Link to="/" className="logoWithText">
        <Messages3 />
        <div>Contact</div>
      </Link>
      <Link to="/" className="logoWithText">
        <ProfileAdd />
        <div>Create profile</div>
      </Link>
    </div>
  );
}

export default Header;