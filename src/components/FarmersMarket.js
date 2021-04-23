import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketCard from "./MarketCard";

const FarmersMarket = () => {
  const [markets, setMarkets] = useState([]);
  const [zipcode, setZipcode] = useState("")

  // useEffect(() => {
    
  // }, []);

  const handleChange = (e) => {
    setZipcode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip="+ zipcode
      )
      .then((res) => {
        setMarkets(res.data.results);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={zipcode} placeholder="enter your zip" onChange={handleChange}/>
      <button type="submit"> find farm</button>
      </form>
      farmers market
      {markets
        ? markets.map((market) => (
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
