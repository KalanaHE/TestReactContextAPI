import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => {
        return <Movie key={movie.id} name={movie.name} price={movie.price} />;
      })}
    </div>
  );
}

export default MovieList;
