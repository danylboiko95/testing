import { AppActions } from "../types/actions";

// import axios from "../../../apis/axios";
import { Dispatch } from "redux";
import * as actionTypes from "../types/actionsTypes";

import { AppState } from "../../store";
import { IMovie } from "./moviesActions";

export const onAddMovies = (movies: IMovie[]) => {
  return {
    type: actionTypes.ADD_MOVIES,
    movies,
  };
};
// export const authConfirmEmailForm = (key: string) => async (
//   dispatch: Dispatch<AppActions>
// ) => {
//   dispatch(appStateLoadingStart());

//   try {
//     const res = await axios.put("/auth/confirm-email", {
//       key,
//     });

//     sessionStorage.setItem("sessionToken", res.data.token);

//     const user: IUserInterface = { ...res.data, isLogged: true };
//     dispatch(setUser(user));

//     dispatch(
//       modalOpen({
//         title: `Welcome, ${user.user.firstName} ${user.user.lastName}! Your registration is complete!`,
//         text: "Now let's make the world cleaner with Hoper!",
//         modalType: "emailConfirmed",
//         name: `${user.user.firstName} ${user.user.lastName}`,
//       })
//     );
//   } catch (e) {
//     dispatch(
//       modalOpen({
//         title: "Something went wrong",
//         text: e.response?.data?.message,
//       })
//     );
//   }

//   dispatch(appStateLoadingFinish());
// };
