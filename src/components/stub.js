import React, { useEffect } from "react";
import axios from "axios";

const Stub = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    // axios
    //   .get(`${url}/states/New%20York/produces?month=October&lookup_id=33`)
    //   .then((res) => {
    //     console.log(res);
    //   });
    fetch(
      "http://yumyumfresh.herokuapp.com/states/New%20York/produces?month=October&lookupid=31"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  // http://localhost:3000/states/New%20York/produces?month=October&lookupid=31

  return <div>Stubb (a dub)</div>;
};

export default Stub;
