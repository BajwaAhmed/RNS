import {
  USER_LOADING,
  USER_RETURN_MSG,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "./actions/userActionTypes";
const initialState = {
  isLoading: false,
  message: "",
  id_token: "",
  sign_up: false,
  user_data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_RETURN_MSG:
      return {
        ...state,
        message: action.payload,
      };

    // Login
    case LOGIN:
      if (action.payload.length === 0) {
        //store login data in local storage so that in case of reloading we dont have to call login api again
        localStorage.setItem("user_data", "");
      } else {
        localStorage.setItem("user_data", JSON.stringify(action.payload));
      }

      return {
        ...state,
        id_token: action.payload.id_token,
        user_data: action.payload.userData,
      };

    // SignUp
    case SIGNUP:
      return {
        ...state,
      };

    // Logout
    case LOGOUT:
      localStorage.setItem("user_data", "");
      return {
        ...state,
        user_data: [],
        id_token: "",
      };
    default:
      return state;
  }
}
