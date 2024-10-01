import React, { useContext, useEffect, useState } from "react";
// import countriesData from "../CountriesData";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";
import "../ShimmerEffect.css"
import useFilter from "../MyHooks/useFilter";
// import { themeContext } from "./Contexts/ThemeContext";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
  
  
  useEffect (()=>{
    fetch('https://restcountries.com/v3.1/all').then((res)=>{
      return res.json();
    }).then((data)=>{
      setCountriesData(data);
      return countriesData;
    })
  },[]) 
  const filterX= useFilter(countriesData, query)


  return (
    
    countriesData.length===0 ?<CountryListShimmer />:
    <>
    
      <div className="countries-container">
        {/* {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          ) */}
         { filterX.map((country) => {
            // console.log(country)
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data= {country}
              />
            );
          })}

      </div>
    </>
  );
}


