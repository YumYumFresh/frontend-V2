import React from "react";
import LandingPage from "./LandingPage";
import "../css/landingPage.css";

const LandingBg = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.thesimpledollar.com/wp-content/uploads/2020/04/TheSimpleDollar-Fun-With-Friends.png)",
        height: "1000px",
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
