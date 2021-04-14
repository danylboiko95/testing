import React, { useState } from "react";
import { connect } from "react-redux";
import { IMovie } from "../../store/actions/moviesActions/moviesActions";
import { AppState } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/actions/types/actions";
import { bindActionCreators } from "redux";
import { onAddMovies } from "../../store/actions/moviesActions/movies";
import classes from "./Input.module.scss";

interface IPropsInput {}

const Input: React.FC<IPropsInput & ILinkStateProps & ILinkDispatchProps> = (
  props
) => {
  const [inputValue, setInputValue] = useState("Guard");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchMovie = async () => {
    if (inputValue.length > 3) {
      fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=69d3c7cf`)
        .then((res: any) => {
          return res.json();
        })
        .then((data) => {
          const movies = data.Search;
          props.onAddMovies(movies);
        });
    }
  };

  return (
    <div className={classes.InputWrapper}>
      <input
        className={classes.Input}
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button onClick={searchMovie}> search</button>
    </div>
  );
};
interface ILinkStateProps {
  movies: IMovie;
}
interface ILinkDispatchProps {
  onAddMovies: (movies: any[]) => void;
}

const mapStateToProps = (state: AppState): ILinkStateProps => ({
  movies: state.movies,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): ILinkDispatchProps => ({
  onAddMovies: bindActionCreators(onAddMovies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
