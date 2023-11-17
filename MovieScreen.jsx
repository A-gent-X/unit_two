import React from "react";
import MovieCard from './MovieCard';
import WatchList from "./Watchlist";


const MovieScreen = (props) => {


const decrement = () => {
  if (props.page !== 1){
      props.setPage(props.page -1) 
  }
}

const increment = () => {
      props.setPage(props.page +1)
}

  const movieDisplay = props.movieList.map((movie, index) => {
    return <MovieCard 
    movie={movie}
    key={movie.id}
    addMovie={props.addMovie}
    />;
  });

  return (
    <div className="page">
      <h1> The X-hibit of Motion pictures</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">
        {movieDisplay}
      </div>
    </div>
  );
};

export default MovieScreen;
 