import React from "react";
import { connect } from "react-redux";

import { IMovie } from "../../store/actions/moviesActions/moviesActions";
import { AppState } from "../../store/store";
import MovieItem from "./MovieItem/MovieItem";
import classes from "./MovieList.module.scss";

interface IPropsMoviesList {}

const MoviesList: React.FC<IPropsMoviesList & ILinkStateProps> = (props) => {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uniqid = randLetter + Date.now();
  const list = props.movies.map((item: IMovie) => {
    return <MovieItem movie={item} key={item.imdbID + item.Title + uniqid} />;
  });

  return <ul className={classes.MovieList}>{list}</ul>;
};

interface ILinkStateProps {
  movies: IMovie[];
}

const mapStateToProps = (state: AppState): ILinkStateProps => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesList);
