import React, { useEffect } from "react";
import axios from "axios";

const Stub = (props) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const reFretch = props.monthsModalShow;
  useEffect(() => {
    console.log("STUBBBB");
    // axios
    //   .get(`${url}/states/New%20York/produces?month=October&lookup_id=33`)
    //   .then((res) => {
    //     console.log(res);
    //   });
    fetch(
      "http://yumyumfresh-api.herokuapp.com/states/New%20York/produces?month=October&lookup_id=32"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [reFretch]);
  // http://localhost:3000/states/New%20York/produces?month=October&lookupid=31

  return <div>Stubb (a dub)</div>;
};

export default Stub;
