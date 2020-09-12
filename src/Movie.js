import React from "react";
import Paper from "@material-ui/core/Paper";

function Movie({ name, price }) {
  return (
    <div>
      <Paper style={{ width: "40%" }} elevation={3}>
        <h3>{name}</h3>
        <h4>{price}</h4>
      </Paper>
    </div>
  );
}

export default Movie;
