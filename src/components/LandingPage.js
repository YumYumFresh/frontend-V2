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
        <img
          src={Logo}
          alt="logo"
          className="landingPage__img"
          style={{
            borderRadius: "70%", 
            margin: "50px", 
            boxShadow: "-10px 22px 30px 2px grey",
            width: "500px",
            height: "500px",
            }}
        />
          <div className="landingPage__div">
            Find Local Produce
          </div>
        </Link>

      </div>

    </>
  );
};

export default LandingPage;