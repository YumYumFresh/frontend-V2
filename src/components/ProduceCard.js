import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import BackOfCard from "./BackOfCard";
import FrontOfCard from "./FrontOfCard";

const ProduceCard = ({prod}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      };


  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontOfCard key="front" click={handleClick} prod={prod}>
          .
        </FrontOfCard>

        <BackOfCard key="back" click={handleClick} prodBack={prod.only_associated_harvest} prod={prod}>
          .
        </BackOfCard>
      </ReactCardFlip>
    </div>
  );
};

export default ProduceCard;