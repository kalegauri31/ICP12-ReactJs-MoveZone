import React from 'react'
import { useState, useEffect } from 'react'
function FavoriteMovies() {
    const [favMovies, setFavMovies]=useState([]);

    useEffect(()=>{
       const storedMovies=JSON.parse(localStorage.getItem("favoriateMovies") || "[]");
        setFavMovies(storedMovies);     
    },[])
  return (
    <div className='bg-[#1B3C53] min-h-screen'>
        <h1>{favMovies.length}</h1>
    </div>
  )
}

export default FavoriteMovies
