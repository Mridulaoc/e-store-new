import { useEffect, useState } from "react";

const FormattedPrice = ({price}) => {
    // const [priceINR,setPriceINR] = useState()


    // const calculteINRPrice = async()=>{
    //     const res = await fetch ("https://v6.exchangerate-api.com/v6/7c17ef96c47a77c1174e1ea8/latest/USD")
    //     .then ((res)=>res.json());
    //     const fetchedRates=res.conversion_rates;
    //     const toCurrency = "INR";
    //     const currencyRate = fetchedRates[toCurrency]
    //     const calPrice = price * currencyRate;
    //     setPriceINR(calPrice);
    //     console.log(priceINR)
    //     }
        
    

    // useEffect(()=>{
    //     calculteINRPrice();
    // },[])
    
  return (
    Intl.NumberFormat("en-IN",{style:"currency", currency:"INR", maximumFractionDigits: 2}).format(price)
    
    
  )
}

export default FormattedPrice
