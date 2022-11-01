import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "./websiteTheme.css";
import { } from '../Images';


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerText"><Link to="/">Copyright - 2022 BetterTech Inc. All rights reserved.</Link></div>
        <div className="footerText"><Link to="/">Privacy Policy</Link></div>
        <div className="footerText"><Link to="/">Terms of Use</Link></div>
        <div className="footerText"><Link to="/">Legal</Link></div>
        <div className="footerText"><Link to="/">Back To Top</Link></div>
      </div>
    </div>
  );
}

export default Footer;