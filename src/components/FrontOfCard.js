import React from "react";
import Card from "react-bootstrap/esm/Card";
import "../css/frontOfCard.css";

const FrontOfCard = ({ click, prod }) => {
  return (
    <Card
      className="frontOfCard__card"
    >
      <Card.Img
        variant="top"
        src={prod.image}
        className="frontOfCard__img"
        style={{ objectFit: "cover", height: 300 , padding: "10px"}}
      />
      <Card.Body style={{ overflow: "overlay", height: 365 }}>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
          <br />
          <button onClick={click} style={{ border: "none", boxShadow: "-2px 4px 10px 1px grey", borderRadius: "20px", backgroundColor: "#be1599ff", color: "#fff8faff"}}>Click to flip</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FrontOfCard;
