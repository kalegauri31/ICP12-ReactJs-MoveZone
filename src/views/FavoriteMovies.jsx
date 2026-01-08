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
        {
            favMovies.map((movie, index)=>{
                const {name, image, id, type, language, year, duration}= movie;
                return(
                    <div>
                        <h1>{name}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FavoriteMovies
