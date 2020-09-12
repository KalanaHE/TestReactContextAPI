import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harry potter",
      price: "100LKR",
      id: 1,
    },
    {
      name: "sherlock holmes",
      price: "150LKR",
      id: 2,
    },
    {
      name: "book thief",
      price: "200LKR",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
