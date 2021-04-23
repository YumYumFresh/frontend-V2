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
            <img src={Logo1} alt="logo" className="header__img" />
          </div>
        </Col>
        <Col xs={6} lg={10}>
          <div className="header__header">
            <h1>Blurb/About Us</h1>
          </div>
          <div className="header__p">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              perferendis ducimus aperiam odio qui sequi similique rerum omnis
              ipsam eaque commodi autem ipsa in, dolore exercitationem
              reprehenderit sint aut excepturi.
              <hr />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              dolore, quibusdam officiis repudiandae molestiae rem voluptate
              quia architecto officia iste perspiciatis quae porro nulla
              pariatur consequuntur! Vero assumenda numquam fuga.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default header;
