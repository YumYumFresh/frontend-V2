import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import RealLogo from "../images/realLogo.png";
import "../css/navBar.css";

const navBar = () => {
  return (
    <div>
      <Navbar className="navBar__container" expand="lg">
        <Navbar.Brand className="navBar__header" href="#home">
          <img
            src={RealLogo}
            id="navBar__img"
            width="100"
            height="100"
            className=""
            alt="React Bootstrap logo"
          />{" "}
          <h1 className="navBar__h1">Yum Yum Fresh</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navBar;
