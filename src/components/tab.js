import React from "react";
import Tab from "react-bootstrap/Tab";
import "../css/tab.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "../components/card";
import FarmersMarket from './FarmersMarket'
import Modals from "./Modals";
import Button from "react-bootstrap/Button"



const tab = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} lg={2}>
          <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">☰ Menu</button>
          
              <Nav id="demo" className="flex-column" class="collapse show">
                <Nav.Item>
                  <Nav.Link className="tab__link" eventKey="first">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <hr className="tab__hr" />
                <Nav.Item>
                  <Nav.Link className="tab__link" eventKey="second">
                   Change State
                  </Nav.Link>
                </Nav.Item>
                <hr className="tab__hr" />
                <Nav.Item>
                  <Nav.Link className="tab__link" eventKey="third">
                    Change Month
                  </Nav.Link>
                </Nav.Item>
                <hr className="tab__hr" />
                <Nav.Item>
                  <Nav.Link className="tab__link" eventKey="fourth">
                    Farmers Market
                  </Nav.Link>
                </Nav.Item>
                <hr className="tab__hr" />
              </Nav>
            
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Card />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                change state, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Pariatur voluptates possimus autem cumque dolor atque
                commodi voluptatum assumenda adipisci culpa error omnis, ipsa
                deserunt beatae deleniti! Quas possimus porro asperiores!
                <br/>
                <Modals />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                change date, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nulla voluptatem maiores saepe amet! Ea consequatur
                laborum ipsum, molestiae ex voluptas fugit ab veniam quo?
                Distinctio corrupti modi dolorum quasi fugiat.
                <br/>
                <Modals />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <FarmersMarket/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default tab;
