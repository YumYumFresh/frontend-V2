import React from "react";
import { Link } from "react-router-dom";
import "../css/landingPage.css";
import Logo from "../images/YYFLogoMain.png";
import Lettuce from "../images/lettuces.png";

const LandingPage = () => {
  return (
    <>
      <div className="mainDiv"
        style={{ 
          backgroundImage: `url("${Lettuce}")`,
        }}>

       <Link to="/yumyum" className="landingPage__link"> 
       <div className="logo__div">
         <img
          src={Logo}
          alt="logo"
          className="landingPage__img"
        />
       </div>
          <div className="landingPage__div">
            Find produce in your location
          </div>
        </Link>

      </div>

    </>
  );
};

export default LandingPage;