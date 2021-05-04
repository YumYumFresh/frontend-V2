import React from "react";
import Logo1 from "../images/realLogo.png";
import { Link } from "react-router-dom";
import "../css/landingPage.css";
import Lettuce from "../images/YYFLogoMain.png";

const LandingPage = () => {
  return (
    <>
    <div className="landingPage__container__mobile">
      
    </div>
      <div className="landingPage__container">
        <img src={Lettuce} alt="logo" className="landingPage__img" />
      </div>
      <div className="landingPage__mobile">
      <div className="landingPage__div">
        <Link to="/yumyum" className="landingPage__link">
          Find produce in your location.
        </Link>
      </div>

      </div>
    </>
  );
};

export default LandingPage;
