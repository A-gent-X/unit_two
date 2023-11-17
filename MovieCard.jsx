import React from "react";
import "./MovieCard.css"


const MovieCard = (props) => {
  const {removeMovie} = props
  const {movie} = props
  return (
    <div className="movie-card">
      <div>
        <img className="movieImg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => props.addMovie(movie)}>Add to List</button>
      <button onClick={() => props.removeMovie(movie)}>Remove from List</button>
    </div>
  )
}

export default MovieCard 