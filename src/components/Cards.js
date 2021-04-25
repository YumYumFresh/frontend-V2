import React, { useEffect, useState } from "react";

import axios from "axios"
import ProduceCard from "./ProduceCard";

const Cards = (props) => {
  const [produceData, setProduceData] = useState([]);
  
  
  
  useEffect(() => {
    axios
      .get(`http://yumyumfresh-api.herokuapp.com/states/New%20York/produces?month=October&lookup_id=32}`)
      .then((res) => {
        setProduceData(res.data)
        console.log("this is the produce data",produceData);
      });
  }, []);



  return (
    <div className="cards__div">
      {produceData.map( prod => {
          return( 
            <ProduceCard prod={prod}/>
          )})}
    </div>
  );
};

export default Cards;
