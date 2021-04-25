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
    
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{height:'100%', width:"100%"}} >
        <FrontOfCard key="front" click={handleClick} prod={prod}>
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
