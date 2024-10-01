import React from 'react'

export default function useFilter(arr, query) {
    return arr. filter((e)=>{
        // console.log(e)
        return e.name.common.toLowerCase().includes(query) || e.region.toLowerCase().includes(query);
  })
}
