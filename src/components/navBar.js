import React from "react";
import RealLogo from "../images/YYFRoundLogo.png";
// import RealLogo from "../images/realLogo.png";
import Header from "../components/header";
import "../css/navBar.css";

const navBar = () => {
  return (
    <div>
      <div className="navBar__container" expand="lg">
        {/* <span className="navBar__header"> */}
          <img
            src={RealLogo}
            id="navBar__img"
            width="100"
            height="100"
            alt="React Bootstrap logo"
          />
        {/* </span> */}
        <Header />
      </div>
    </div>
  );
};

export default navBar;
