import React from "react";
import Card from "react-bootstrap/esm/Card";
import Logo2 from "../images/fakeLogo1.png";
import "../css/frontOfCard.css";



const FrontOfCard = ({ click, prod }) => {
  return ( 
  <Card className="frontOfCard__card">
      <Card.Img variant="top" src={prod.image} className="frontOfCard__img" />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
          <br />
          <button onClick={click}>Click to flip</button>
        </Card.Text>
      </Card.Body>
    </Card>
  
  );
};

export default FrontOfCard;
