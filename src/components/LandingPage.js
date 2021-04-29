import React, { useState } from "react";
import Logo1 from "../images/realLogo.png";
import Logo2 from "../images/fakeLogo2.png";
import App from "../App";
import { Link } from "react-router-dom";
import "../css/landingPage.css";
import Lettuce from "../images/lettuces.png"

const LandingPage = () => {
  return (
    <>
    <div>
      <div className="landingPage__container">
    <img className="landingPage__img1" src={Lettuce} alt="background"/>
        <img src={Logo1} alt="logo" className="landingPage__img" />
      </div>
      


      <div className="landingPage__div">
        <Link to="/yumyum" className="landingPage__link">
          Click to find produce in your location.
        </Link>
      </div>
    </div>
    </>
  );
};

export default LandingPage;

