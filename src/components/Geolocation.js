import axios from "axios";
import React, { useEffect, useState } from "react";

const Geolocation = () => {
  const [location, setLocation] = useState();
  const [statess, setStatess] = useState();
  const [zipCode, setZipCode] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    const date = new Date();
    setMonth(date.getMonth());
  }, []);

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
    axios
      .get(
        `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${long}`
      )
      .then((res) => {
        setStatess(res.data.data[0].region);
        setZipCode(res.data.data[0].postal_code);
      })

      .catch((error) => console.log(error));
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

  return (
    <div>
      <h1>{location}</h1>
      <ul>
        <li>state: {statess}</li>
        <li>month: {month}</li>
        <li>zip code: {zipCode}</li>
      </ul>
      <button onClick={showPosition}> to the moon</button>
    </div>
  );
};

export default Geolocation;
