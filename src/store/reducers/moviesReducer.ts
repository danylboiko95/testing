import { MoviesActionTypes } from "../actions/moviesActions/moviesActions";
import * as actionTypes from "../actions/types/actionsTypes";

const moviesReducerDefaultState: any = {
  movies: [],
} as any;

export const moviesReducer = (
  state = moviesReducerDefaultState,
  action: MoviesActionTypes
): any => {
  switch (action.type) {
    case actionTypes.ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};
