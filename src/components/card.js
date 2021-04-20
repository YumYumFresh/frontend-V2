import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Fruits from "../images/fruit.PNG";
import Modals from "./Modals";

const card = () => {
  return (
    <div>
      <Row>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img variant="top" src={Fruits} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br/>
                  <Modals />
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        </Col>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img variant="top" src={Fruits} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br/>
                  <Modals />
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        </Col>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img variant="top" src={Fruits} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br/>
                  <Modals />
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default card;
