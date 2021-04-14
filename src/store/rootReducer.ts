
import { combineReducers } from "redux";
import { moviesReducer } from "./reducers/moviesReducer";

const appReducer = combineReducers({
  movies: moviesReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === null) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
