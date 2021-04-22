import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../css/MarketCard.css";

const MarketCard = (props) => {
  const [marketAddress, setMarketAddress] = useState("");
  const [marketLink, setMarketLink] = useState("");
  const [marketProducts, setMarketProducts] = useState("");
  const [marketSchedule, setMarketSchedule] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          props.id
      )
      .then((response) => {
        console.log(response.data.marketdetails.Address);
        setMarketAddress(response.data.marketdetails.Address);
        console.log(marketAddress);
        setMarketLink(response.data.marketdetails.GoogleLink);
        setMarketProducts(response.data.marketdetails.Products);
        setMarketSchedule(response.data.marketdetails.Schedule);
      });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.marketName}</Card.Title>
        <Card.Text>
          <div>{marketAddress}</div>
          <div>
            <a href={marketLink} target="_blank" className="map__link">
              Map It!
            </a>
          </div>
          <div>{marketProducts}</div>
          <div>{marketSchedule}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MarketCard;
