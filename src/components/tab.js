import React from "react";
import Tab from "react-bootstrap/Tab";
import "../css/tab.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "../components/card";

const tab = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link  className="tab__link" eventKey="first">Home</Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link  className="tab__link" eventKey="second">Change State</Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link  className="tab__link" eventKey="third">Change Month</Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link  className="tab__link" eventKey="fourth">Farmers Market</Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Card />
              </Tab.Pane>
              <Tab.Pane eventKey="second">component</Tab.Pane>
              <Tab.Pane eventKey="third">component</Tab.Pane>
              <Tab.Pane eventKey="fourth">component</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default tab;
