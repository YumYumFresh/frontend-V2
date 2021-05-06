import React from "react";
import { Link } from "react-router-dom";
import "../css/landingPage.css";
import Logo from "../images/YYFLogoMain.png";
import Lettuce from "../images/lettuces.png";

const LandingPage = () => {
  return (
    <>
      <div 
        style={{ backgroundImage: `url("${Lettuce}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flexWrap: "no-wrap",
        justifyContent: "center",
        alignItems: "center",
       }}>
        {/* <div className="landingPage__container__mobile"></div> */}
        {/* <div className="landingPage__container"> */}
          <img
            src={Logo}
            alt="logo"
            className="landingPage__img"
          />
        {/* </div> */}
        {/* <div className="landingPage__mobile"> */}
          <div className="landingPage__div">
              <Link to="/yumyum" className="landingPage__link">
              Find produce in your location.
          </Link>         
          {/* </div> */}
        </div>
      </div>

    </>
  );
};

export default LandingPage;