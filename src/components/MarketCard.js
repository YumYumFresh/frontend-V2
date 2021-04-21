import React from "react";
import axios from "axios";

const MarketCard = (props) => {
  const getMarketDetails = () => {
    axios
      .get(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          props.id
      )
      .then((response) => console.log(response));
  };
  return <div onClick={getMarketDetails}>{props.marketName}</div>;
};

export default MarketCard;
