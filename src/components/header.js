import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../css/header.css";
import Logo1 from "../images/fakeLogo1.png";

const header = () => {
  return (
    <div className="header__container">
      <Row>
        <Col xs={6} lg={2}>
          <div>
            {/* <img src={Logo1} alt="logo" className="header__img" /> */}
          </div>
        </Col>
        <Col xs={6} lg={10}>
          <div className="header__header">
            <h1>About</h1>
          </div>
          <div className="header__p">
            <p>
              {" "}
              Eating local food while it’s in season is more than just a cool fad for hip youths and hippies alike. It’s a way of life and a
              necessity to help lead us into creating a sustainable future, for
              us and for generations to come. Yum Yum Fresh is your go-to site
              to know not only know what produce is currently in season, but
              also your resource to find local farmers markets in your area.
              <hr />
              Eating seasonally and supporting local farmers not only tastes
              better, but it puts resources back into your community, creating
              an eco-system of growth, sustainability, and opportunity.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default header;
