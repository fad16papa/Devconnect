import axios from "axios";
import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USESR_LOAD,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      typr: USESR_LOAD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register User
export const register = ({
  userName,
  email,
  firstName,
  lastName,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    userName,
    email,
    firstName,
    lastName,
    password,
  });

  try {
    const res = await axios.post("api/users", body, config);

    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", "info_outline"))
      );
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

//Login user
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(email, password);
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", "info_outline"))
      );
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

//Logout and clear user profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};