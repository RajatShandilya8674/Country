import React, { useEffect, useState } from 'react'

export default function useSize() {

    const [size, setSize]= useState({width: window.innerWidth, height: window.innerHeight})
    useEffect(()=>{
      window.addEventListener("resize", ()=>{
        setSize({width: window.innerWidth, height: window.innerHeight})
      })
    },[])

  return [size, setSize]
}
