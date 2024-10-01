import React, { useState } from "react";

export default function CountryListShimmer() {
    const listShimmerArr = Array.from({length:10}).map((el, i)=>{
        return(
        <div key={i} className="country-card listShimmer">
            <div className="listShimmerImg"></div>
            <p className="listShimmerPara"></p>
            <p className="listShimmerPara"></p>
            <p className="listShimmerPara"></p>

        </div>
        )
    })
    return (
    <div className="countries-container">
          {listShimmerArr}
    </div>
  );
}
