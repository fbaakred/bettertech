import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { Profile, Messages3 } from "iconsax-react";
import Logo from "./Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"

const Navbar = () => {
  return (
    <div className="navbar">
      <input className="inputToCompare" type="text" placeholder="Search Products" />
      <Link to="/compare" className="navbaritem"> Laptops </Link>
      <Link to="/smartphones" className="navbaritem"> Smartphones </Link>
      <Link to="/computers" className="navbaritem"> Desktop Computers </Link> 
    </div>
  );
}

const Header = () => {

  const [user] = useAuthState(auth);

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
        {user ? 
          <Link to="/profile" className="logoWithText">
            <Profile size={33}/>
            <div>Profile</div>
          </Link> 
          :
          <Link to="/signin" className="logoWithText">
            <Profile size={33}/>
            <div>Sign in</div>
          </Link>
        }
      </div>
      <Navbar />
    </div>
  );
}

export default Header;