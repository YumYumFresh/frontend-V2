import React from 'react'
import Navbar from 'react-bootstrap/esm/Navbar'
import "../css/footer.css"
import Fruit from "../images/fruit.PNG"
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="footer__container">
          <Navbar expand="lg" bg="dark" variant="dark">
      <img className="footer__img" src={Fruit} alt="logo" />
      <Navbar.Brand href="/">
        Yum-Yum Fresh
        <AiOutlineFacebook className="footer__icons" />
        <AiOutlineInstagram className="footer__icons" />
        <FiTwitter className="footer__icons" />
      </Navbar.Brand>
      <a href="https://github.com/YumYumFresh" className="footer__a">
      <h6 >
        Copyright © 2021-Yum-Yum Fresh. All Rights Reserved.
      </h6>
      </a>
    </Navbar>
        </div>
    )
}

export default Footer