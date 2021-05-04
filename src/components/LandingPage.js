import React from "react";
import Logo1 from "../images/YYFLogoMain.png";
// import Logo1 from "../images/realLogo.png";
import { Link } from "react-router-dom";
import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div>
        <img src={Logo1} alt="logo" className="landingPage__img" />
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
