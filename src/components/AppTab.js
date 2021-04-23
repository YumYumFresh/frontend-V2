import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import "../css/tab.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
// import Card from "../components/card";
import FarmersMarket from "./FarmersMarket";
import Modals from "./Modals";
import MonthsModals from "./MonthsModals";
import StateModals from "./StateModals";
import Geolocation from "./Geolocation";
import Stub from "./stub";

const AppTab = () => {
  const [statessModalShow, setStatessModalShow] = useState(false);
  const [monthsModalShow, setMonthsModalShow] = useState(false);
  const monthLookup = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const stateIds = {
    Alabama: 1,
    Alaska: 2,
    Arizona: 3,
    California: 4,
    Colorado: 5,
    Connecticut: 6,
    Delaware: 7,
    Florida: 8,
    Georgia: 9,
    Hawaii: 10,
    Idaho: 11,
    Illinois: 12,
    Indiana: 13,
    Iowa: 14,
    Kansas: 15,
    Kentucky: 16,
    Louisana: 17,
    Maine: 18,
    Maryland: 19,
    Massachusetts: 20,
    Michigan: 21,
    Minnesota: 22,
    Mississippi: 23,
    Missouri: 24,
    Montana: 25,
    Nebraska: 26,
    Nevada: 27,
    "New Hampshire": 28,
    "New Jersey": 29,
    "New Mexico": 30,
    "New York": 31,
    "North Carolina": 32,
    "North Dakota": 33,
    Ohio: 34,
    Oklahoma: 35,
    Oregon: 36,
    Pennsylvania: 37,
    "Rhode Island": 38,
    "South Carolina": 39,
    "South Dakota": 40,
    Tennessee: 41,
    Texas: 42,
    Utah: 43,
    Vermont: 44,
    Virginia: 45,
    Washington: 46,
    "West Virginia": 47,
    Wisconsin: 48,
    Wyoming: 49,
  };

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="tab__link" eventKey="first">
                  Home
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link
                  className="tab__link"
                  eventKey="second"
                  onClick={() => setStatessModalShow(true)}
                >
                  Change State
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link
                  className="tab__link"
                  eventKey="third"
                  onClick={() => setMonthsModalShow(true)}
                >
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
                <Geolocation monthLookup={monthLookup} stateIds={stateIds} />
                {/* <Card /> */}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Stub />
                change state, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Pariatur voluptates possimus autem cumque dolor atque
                commodi voluptatum assumenda adipisci culpa error omnis, ipsa
                deserunt beatae deleniti! Quas possimus porro asperiores!
                <br />
                <StateModals
                  statessModalShow={statessModalShow}
                  setStatessModalShow={setStatessModalShow}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                change date, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nulla voluptatem maiores saepe amet! Ea consequatur
                laborum ipsum, molestiae ex voluptas fugit ab veniam quo?
                Distinctio corrupti modi dolorum quasi fugiat.
                <br />
                <MonthsModals
                  monthsModalShow={monthsModalShow}
                  setMonthsModalShow={setMonthsModalShow}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <FarmersMarket />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AppTab;
