import React from "react";
import "../css/footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__div">
        <span className="footer__fontLogo">
          Yum Yum Fresh
          <a
            href="https://github.com/YumYumFresh"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="footer__icons" />
          </a>
          <AiOutlineFacebook className="footer__icons" />
          <AiOutlineInstagram className="footer__icons" />
          <FiTwitter className="footer__icons" />
        </span>
        <span className="footer__a">
          <h6>Copyright © 2021-Yum Yum Fresh. All Rights Reserved.</h6>
        </span>
      </div>
    </div>
  );
};

export default Footer;
