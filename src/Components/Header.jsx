import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { ProfileAdd, Messages3 } from "iconsax-react";
import Logo from "./Logo";
import "./header.css";
import "./websiteTheme.css";
import { MainLogo, LeavesLogo, AccountLogo, ContactLogo, LanguageLogo } from '../Images';

const Header1 = () => {
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



const Header = () => {
  return (
    <div>
      <div className="aboveHeader">
        <div className="aboveHeaderLeft">
          <Link to="/">
            <img className="mainLogo" src={MainLogo} alt="BetterTech" />
          </Link>
        </div>
        <div className="aboveHeaderRight">
          <div className="aboveHeaderItems">
            <img className="otherHeaderLogos" src={LeavesLogo} alt="" />
            <div className="aboveHeaderSingleText">
              <Link to="/">My Rewards</Link></div>
          </div>
          <div className="aboveHeaderItems">
            <img className="otherHeaderLogos" src={AccountLogo} alt="" />
            <div className="aboveHeaderSingleText">
              <Link to="/signin">Account</Link></div>
          </div>
          <div className="aboveHeaderItems">
            <img className="otherHeaderLogos" src={ContactLogo} alt="" />
            <div className="aboveHeaderSingleText">
              <Link to="/">Contact</Link></div>
          </div>
          <div className="aboveHeaderItems">
            <img className="otherHeaderLogos" src={LanguageLogo} alt="" />
            <div className="aboveHeaderSingleText"><Link to="/">EN</Link></div>
          </div>
        </div>
        <br className="avoidCollapse" />
      </div>
      <div>
        <div className="header">
          <input className="inputToCompare" type="text" placeholder="Search Products"></input>
          <div className="headerText">Laptops</div>
          <div className="headerText">Desktop PCs</div>
          <div className="headerText">Smartphones</div>
          <div className="headerText">TV & Home Entertainment</div>
          <div className="headerText">Accessories</div>
        </div>
      </div>
    </div>
  );
}

export default Header;