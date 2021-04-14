import React from "react";
import { IMovie } from "../../../store/actions/moviesActions/moviesActions";
import classes from "./MovieItem.module.scss";

interface IPropsMovieItem {
  movie: IMovie;
}

const MovieItem: React.FC<IPropsMovieItem> = ({ movie }) => {
  return (
    <li  className={classes.MovieItem}>
      <span>{movie.Title}</span>
      <img src={movie.Poster} alt={movie.Title} />
      <span>{movie.Year}</span>
    </li>
  );
};

export default MovieItem;
