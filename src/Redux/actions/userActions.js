import axios from "axios";

import {
  USER_LOADING,
  USER_RETURN_MSG,
  LOGIN,
  SIGNUP,
  LOGOUT,
} from "./userActionTypes";

export const url = "https://staging-spot.dafriexchange.com/api";

// Tell any component to displaying circular progress until the time we get response
export const isLoading = (status) => (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: status,
  });
};

// Message to display in login box in case of error in login
export const returnMsg = (msg) => (dispatch) => {
  dispatch({
    type: USER_RETURN_MSG,
    payload: msg,
  });
};

// LoginUser
export const loginUser = (formData) => (dispatch) => {
  dispatch(isLoading(true));
  var data = {
    Email: formData.email,
    Password: formData.password,
    IP: formData.ip,
    device: formData.device,
    Location: formData.location,
  };
  let request = {
    method: "POST",
    url: `${url}/accessToken`,
    data: data,
  };

  return axios(request)
    .catch((err) => {
      dispatch(returnMsg("Email or Password is incorrect."));
    })
    .then((response) => {
      if (response && response.status === 200) {
        let request2 = {
          method: "GET",
          url: `${url}/users/self`,
          headers: {
            Authorization: "fm " + response.data.access,
          },
        };
        var user_data = {};
        return axios(request2)
          .then((res) => {
            user_data = Object.assign(user_data, res.data);
            dispatch({
              type: LOGIN,
              payload: {
                userData: user_data,
                id_token: response.data.access,
              },
            });
            dispatch(isLoading(false));
            return true;
          })
          .catch((err) => {
            dispatch(returnMsg("Email or Password is incorrect."));
            dispatch(isLoading(false));
          });
      } else {
        dispatch(returnMsg("Email or Password is incorrect."));
        dispatch(isLoading(false));
      }
    });
};

// SignUp User
export const signUp = (dispatch) => (formData) => {
  dispatch(isLoading(true));
  dispatch(returnMsg(""));
  var data = {
    Email: formData.email,
    Password: formData.password,
    ConfirmPassword: formData.password2,
    IP: formData.ip,
    Device: formData.device,
    Location: formData.location,
  };

  let request = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
    },
    method: "POST",
    url: `${url}/user`,
    data: data,
  };
  return axios(request)
    .then((response) => {
      dispatch(isLoading(false));
      dispatch({
        type: SIGNUP,
        payload: {
          userData: response.data,
        },
      });
      //Login User when successfully signed Up"
      dispatch(loginUser(formData));
      return true;
    })
    .catch((err) => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
      return false;
    });
};

// LogOut
export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

//Preventing login when reloading
export const firstTimeLoad = () => (dispatch) => {
  if (localStorage.getItem("user_data")) {
    //acccess already stored data of login from local storage to prevent login box appearing instead of home
    let user_data = localStorage.getItem("user_data");
    dispatch({
      type: LOGIN,
      payload: JSON.parse(user_data),
    });
  }
};
