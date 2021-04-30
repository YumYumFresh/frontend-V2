import React from "react";
import LandingPage from "./LandingPage";
import "../css/landingPage.css";
import Lettuce from "../images/lettuces.png"

const LandingBg = () => {
  return (
    <div
    className="tacos"
      style={{
        backgroundImage:
          `url(${Lettuce})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1080px",
        width: "1920px",
        objectFit: "contain",
        position: "fixed",
      }}
    >
      <LandingPage />
    </div>
  );
};

export default LandingBg;
