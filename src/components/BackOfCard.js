import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../css/backOfCard.css";

const BackOfCard = ({ click, prodBack, prod }) => {
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

  const monthsInSeason = prodBack[0].months;

  return (
    <div className="backOfCard__div">
      <h1>produce: {prod.name}</h1>
      <Row>
        {monthLookup.map((month) => {
          return (
            <Col xs={6} lg={6}>
              {monthsInSeason.includes(month) ? (
                <div className="backOfCard__monthDiv">
                  <h3 className="backOfCard__enabled">{month}</h3>
                </div>
              ) : (
                <div className="backOfCard__monthDiv">
                  <h3 className="backOfCard__disabled">{month}</h3>
                </div>
              )}
            </Col>
          );
        })}
      </Row>
      <button onClick={click}>Click to flip</button>
    </div>
  );
};

export default BackOfCard;
