import * as actionTypes from "../types/actionsTypes";
export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface IAddMovie {
  type: typeof actionTypes.ADD_MOVIES;
  movies: IMovie[];
}

export type MoviesActionTypes = IAddMovie;
