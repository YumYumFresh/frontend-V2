import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Logo2 from "../images/fakeLogo1.png";

const card = (props) => {
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:55327/states/${props.statess}/produces?month=${props.monthLookup[props.month]}`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  return (
    <div>
      <Row>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img
                variant="top"
                src={Logo2}
                style={{ borderRadius: "50%" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  State is {sessionStorage.getItem("usersState")} and state id
                  is{" Gee do I needta know really?"}
                  <br />
                  and the month is{" "}
                  {props.monthLookup[sessionStorage.getItem("userMonth")]}{" "}
                  <br />
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        </Col>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img
                variant="top"
                src={Logo2}
                style={{ borderRadius: "50%" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        </Col>
        <Col xs={6} lg={4}>
          <p className="animate__animated animate__flipInY">
            <Card>
              <Card.Img
                variant="top"
                src={Logo2}
                style={{ borderRadius: "50%" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
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
