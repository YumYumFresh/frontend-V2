import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketCard from "./MarketCard";

const FarmersMarket = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=08827"
      )
      .then((res) => {
        setMarkets(res.data.results);
      });
  }, []);

  return (
    <div>
      farmers market
      {markets
        ? markets.map((market, key) => (
            <MarketCard
              key={market.id}
              id={market.id}
              marketName={market.marketname}
            />
          ))
        : "No Markets, Womp-Womp"}
    </div>
  );
};

export default FarmersMarket;
