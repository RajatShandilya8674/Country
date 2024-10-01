import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { themeContext } from "../Contexts/ThemeContext";

export default function CountryDetails() {
  const [countryDetail, setCountryDetail] = useState(null);
  let [detailFound, setDetailFound] = useState(true);
  const param = useParams();
  const { state } = useLocation();
  const [isDArk] = useContext(themeContext);
  // console.log(state)

  function setDetails(data) {
    setCountryDetail({
      flag: data.flags.svg,
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      capital: data.capital,
      tld: data.tld.join(" ,"),
      language: Object.values(data.languages || {}).join(" ,"),
      currencies: Object.values(data.currencies || {})
        .map((curr) => {
          return curr.name;
        })
        .join(" ,"),
    });
  }

  useEffect(() => {
    if (state) {
      setDetails(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${param.country}?fullText=true`)
      .then((res) => {
        // console.log(res.json())
        return res.json();
      })
      .then(([data]) => {
        setDetails(data);
        // console.log(data);
      })
      .catch((err) => {
        setDetailFound(false);
      });
    // console.log(countryDetail);
  }, []);

  if (!detailFound) {
    return <div>Country not found</div>;
  }

  // return countryDetail === null ? (
  //   <CountryDetailShimmer />
  // ) : (
  return (
    <main className={isDArk ? "dark" : ""}>
      <div>
        <button className="backBtn" onClick={()=>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
      </div>
      {countryDetail === null ? (
        <CountryDetailShimmer />
      ) : (
        <div className="detailContainer">
          <div className="cdFlagImg">
            <h2>{countryDetail.name}</h2>
            <img src={countryDetail.flag} alt="" />
          </div>
          <div className="cdAllDetails">
            <p>
              Native name:{" "}
              <b>
                {countryDetail.nativeName
                  ? countryDetail.nativeName
                  : "Not Available" || countryDetail.name
                  ? countryDetail.name
                  : "Not Available"}
              </b>
            </p>
            <p>
              Population: <b>{countryDetail.population}</b>
            </p>
            <p>
              Region: <b>{countryDetail.region}</b>
            </p>
            <p>
              Capital:{" "}
              <b>
                {countryDetail.capital
                  ? countryDetail.capital.join(" ,")
                  : "Data Not Available"}
              </b>
            </p>
            <p>
              Top level Domain: <b>{countryDetail.tld}</b>
            </p>
            <p>
              Language:{" "}
              <b>
                {countryDetail.language
                  ? countryDetail.language
                  : "Data Not Available"}
              </b>
            </p>
            <p>
              Top Currencies:{" "}
              <b>
                {countryDetail.currencies
                  ? countryDetail.currencies
                  : "Data Not Available"}
              </b>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
