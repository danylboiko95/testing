import React from "react";
import { IMovie } from "../../types/Interfaces/IMovie";
import MovieItem from "./MovieItem/MovieItem";
import classes from "./MovieList.module.scss";

interface IPropsMoviesList {
  movies: IMovie[];
}

const MoviesList: React.FC<IPropsMoviesList> = (props) => {
  const list = props.movies.map((item: IMovie) => {
    return <MovieItem movie={item} key={item.imdbID} />; // Also I used more complexed id, because I had response from imbd with the same IDs. For instanse if you search for Guardians you would have duplicated Rise of the Guardians movie
    //2: {Title: "Rise of the Guardians", Year: "2012", imdbID: "tt1446192", Type: "movie",
    //3: {Title: "Rise of the Guardians", Year: "2012", imdbID: "tt1446192", Type: "movie",
    //I added image 
  });

  return <ul className={classes.MovieList}>{list}</ul>;
};

export default MoviesList;
