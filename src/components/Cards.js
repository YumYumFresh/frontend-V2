import React, { useEffect, useState } from "react";
import "../css/cards.css";
import axios from "axios";
import ProduceCard from "./ProduceCard";
import Container from "react-bootstrap/esm/Container";


const Cards = (props) => {
  const [produceData, setProduceData] = useState([]);
  const state = sessionStorage.getItem("usersState");
  const month = sessionStorage.getItem("month");
  const stateId = sessionStorage.getItem("userStateId");

  useEffect(() => {
    console.log("axios data", state, month, stateId);
    axios
      .get(
        `http://yumyumfresh-api.herokuapp.com/states/${state}/produces?month=${month}&lookup_id=${stateId}`
      )
      .then((res) => {
        console.log(res);
        setProduceData(res.data);
      });
  }, [props.display]);

  return (
    <div className="cards__div">
   
       { produceData.map((prod) => {
          return <ProduceCard prod={prod} />;
        })
      }

    </div>
  );
};

export default Cards;
