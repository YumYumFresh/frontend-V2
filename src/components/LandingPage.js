import React, { useState } from "react";
import Logo1 from "../images/fakeLogo1.png";
import Logo2 from "../images/fakeLogo2.png";
import App from "../App";
import {Link} from 'react-router-dom'
import '../css/landingPage.css'

const LandingPage = () => {

  return (
      <>
    <div className='landingPage__container'>
      <img src={Logo1} alt="logo" className='landingPage__img' />
    </div>
      <div className='landingPage__div'>
      <Link to="/yumyum" className="landingPage__linklink" >
        Click to find produce in your location and yes we use your location! {" "}
      </Link>
      </div>
      </>
  );
};

export default LandingPage;
