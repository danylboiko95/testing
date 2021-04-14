import React from "react";
import Input from "./components/Input/Input";
import "./index.scss";
import classes from "./App.module.scss";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  return (
    <div className={classes.App}>
      <Input />
      <MoviesList />
    </div>
  );
}

export default App;
