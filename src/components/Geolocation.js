import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/geolocation.css";

const Geolocation = (props) => {
  const [location, setLocation] = useState();
  const [statess, setStatess] = useState();
  const [zipCode, setZipCode] = useState();
  const [month, setMonth] = useState();

  const stateIdsIndexes = Object.values(props.stateIds);
  const stateIdsNames = Object.keys(props.stateIds);
  let reverseStateIds = {};
  for (let i = 0; i < stateIdsIndexes.length; i++) {
    reverseStateIds[stateIdsIndexes[i]] = stateIdsNames[i];
  }

  const monthLU = props.monthLookup;

  useEffect(() => {
    const date = new Date();
    setMonth(date.getMonth());
    // Window.sessionStorage("userMonth", month);
    // Window.sessionStorage("month", props.monthLookup(month));
    showPosition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.reloadGeolocation]);

  console.log(location, statess, zipCode, month)

  function showPosition() {
    // Store the element where the page displays the result
    // If geolocation is available, try to get the visitor's position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      setLocation("Getting the position information...");
    } else {
      setLocation("Sorry, your browser does not support HTML5 geolocation.");
    }
  }

  function successCallback(position) {
    console.log(position);
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const key = process.env.REACT_APP_API_KEY;
    const date = new Date();
    const realDate = date.getMonth();

    axios
      .get(
        `https://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${long}`
      )
      .then((res) => {
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
        setLocation("");
        sessionStorage.setItem("userZipCode", res.data.data[0].postal_code);
        //console.log("session storage zipcode" ,sessionStorage.getItem("userZipCode"));
        sessionStorage.setItem("userMonth", realDate);
        sessionStorage.setItem("month", monthLU[realDate]);
        //console.log("session storage month" ,sessionStorage.getItem("userMonth"));
        sessionStorage.setItem("usersState", res.data.data[0].region);
        // debugger;
        sessionStorage.setItem(
          "userStateId",
          props.stateIds[res.data.data[0].region]
        );
        props.fire();
      })

      .catch((error) => alert("geolocation is currently down, please choose state and month from menu."));
  }

  function errorCallback(error) {
    if (error.code === 1) {
      setLocation(
        "You've decided not to share your position, but it's OK. We won't ask you again."
      );
    } else if (error.code === 2) {
      setLocation(
        "The network is down or the positioning service can't be reached."
      );
    } else if (error.code === 3) {
      setLocation(
        "The attempt timed out before it could get the location data."
      );
    } else {
      setLocation("Geolocation failed due to unknown error.");
    }
  }

  return <div></div>;
};

export default Geolocation;
