import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ReactCardFlip from "react-card-flip";
import BackOfCard from "./BackOfCard";
import FrontOfCard from "./FrontOfCard";
import CardDeck from "react-bootstrap/CardDeck";

const ProduceCard = ({ prod }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ margin:"5%", borderRadius: "10px" }} >

      <FrontOfCard
        key="front"
        click={handleClick}
        prod={prod}
        style={{ width: 20 }}
      >
        .
      </FrontOfCard>
      <BackOfCard
        key="back"
        click={handleClick}
        prodBack={prod.only_associated_harvest}
        prod={prod}
        >
        .
      </BackOfCard>
    </ReactCardFlip>
  );
};

export default ProduceCard;
