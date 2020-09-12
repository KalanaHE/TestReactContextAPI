import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatePrice = (event) => {
    setPrice(event.target.value);
  };

  const updateId = (event) => {
    setId(event.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();
    setMovies((prevState) => [
      ...prevState,
      { name: name, price: price, id: id },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <input type="text" name="price" value={id} onChange={updateId} />
      <button>Add</button>
    </form>
  );
};

export default AddMovie;
