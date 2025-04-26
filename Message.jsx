
import React from 'react'

const Message = () => {
    const Movie=["movie-1","movie-2","movie-3","movie-4","movie-5"];
  return (
    <div className=" h-[100vh] w-full text-3xl flex justify-center items-center flex-col">{
        (Movie.length===0) ? <h1>Movies Not Found....!!!</h1> : (Movie.map((a) => <h1>{a}</h1>))}
    </div>
  )
}

export default Message
