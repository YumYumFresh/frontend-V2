import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import BackOfCard from "./BackOfCard";
import FrontOfCard from "./FrontOfCard";


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
        style={{width:"100px"}}
      >
        .
      </FrontOfCard>
      <BackOfCard
        key="back"
        click={handleClick}
        prodBack={prod.only_associated_harvest}
        prod={prod}
        style={{width:"100px"}}
        >
        .
      </BackOfCard>
    </ReactCardFlip>
  );
};

export default ProduceCard;
