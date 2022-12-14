import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "../websiteTheme.css";

const Footer = () => {
  return (
      <div className="footer">
        <div className="footerText">Copyright - 2022 BetterTech Inc. All rights reserved.</div>
        <div className="footerText"><Link to="/">Privacy Policy</Link></div>
        <div className="footerText"><Link to="/">Terms of Use</Link></div>
        <div className="footerText"><Link to="/">Legal</Link></div>
        <div className="footerText"><Link to="/">Back To Top</Link></div>
      </div>
  );
}

export default Footer;