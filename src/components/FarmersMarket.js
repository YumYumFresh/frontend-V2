import React, { useEffect } from 'react'
import axios from 'axios';

const FarmersMarket = () => {

    useEffect(()=>{
        axios.get("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=08827")
        .then(res => console.log(res))
    })
    return (
        <div>
           farmers market
        </div>
    )
}

export default FarmersMarket
