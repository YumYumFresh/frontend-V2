import React from "react";
import LandingPage from "./LandingPage";
import "../css/landingPage.css";

const LandingBg = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://c0.wallpaperflare.com/preview/257/842/322/salad-lettuce-green-salad-iceberg-lettuce.jpg)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
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
