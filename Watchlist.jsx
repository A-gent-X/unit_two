import React from "react";
import MovieCard from './MovieCard';

const WatchList = (props) => {
  const movieDisplay = props.watchList.map((movie, index) => {
    return <MovieCard 
    movie={movie}
    key={movie.id+"WatchList"}
    removeMovie={props.removeMovie}
    />
  })

  return (
    <div className="watchlist">
        <h1>My Watchlist</h1>
        <div className="movie-container">
          {movieDisplay}
        </div>
    </div>
);
}

export default WatchList