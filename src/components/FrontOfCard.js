import React from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Logo2 from "../images/fakeLogo1.png";

const FrontOfCard = ({ click, prod }) => {
  return (
      <Row>
        <Col xs={6} lg={4}>
            <Card>
              <Card.Img
                variant="top"
                src={prod.image}
                style={{ borderRadius: "50%" }}
              />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                  {prod.description}
                  <br />
                  <button onClick={click}>Click to flip</button>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
  );
};

export default FrontOfCard;
