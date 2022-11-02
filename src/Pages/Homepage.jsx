import React from 'react'
import "../Components/websiteTheme.css";
import { BigTreeImage, GreenPowerImage, IPadHandsImage } from '../Images';

const Homepage = () => {
  return (
    <div className="topDiv">
      <div className="bgImg" />
      <div className="hpFullDiv">
        <div className="hpHalfDivWhiteLeft">
          <h3 className="hpTextH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices rhoncus aliquam, ornare risus. Nullam mi amet quam non tortor nisi.</h3>
          <img className="hpImg" src={BigTreeImage} alt="" />
        </div>
        <div className="hpHalfDivWhiteRight">
          <img className="hpImg" src={IPadHandsImage} alt="" />
        </div>
      </div>
      <div className="hpFullDiv">
        <div className="hpHalfDivGreenLeft">
          <img className="hpImg" src={GreenPowerImage} alt="" />
        </div>
        <div className="hpHalfDivGreenRight">
          <h3 className="hpTextH">Lorem Inspum</h3>
          <p className="hpTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices rhoncus aliquam, ornare risus. Nullam mi amet quam non tortor nisi. Nisl, non felis, purus amet consectetur mi. Ullamcorper at venenatis condimentum ultricies odio quam. Purus orci amet nisl, scelerisque pretium arcu dignissim egestas volutpat. Enim, a, imperdiet auctor neque, nullam. Duis mi arcu mi bibendum sed amet vehicula. Venenatis, viverra tellus dolor velit. Orci duis viverra nisl velit sed faucibus malesuada faucibus.</p>
        </div>
      </div>
      <div className="hpFullDiv">
        <div className="hpHalfDivWhiteLeft">
          <img className="hpImg" src={IPadHandsImage} alt="" />
        </div>
        <div className="hpHalfDivWhiteRight">
          <h3 className="hpTextH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices rhoncus aliquam, ornare risus. Nullam mi amet quam non tortor nisi.</h3>
          <img className="hpImg" src={BigTreeImage} alt="" />
        </div>
      </div>
    </div>

  );
}

export default Homepage;