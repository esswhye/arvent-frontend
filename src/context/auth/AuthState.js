import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

//const uuid = require("uuid");

const AuthState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(
        //"http://localhost:8080/customer-service/customer/userid"
        "https://arvent.co/customer-service/customer/userid"
      );
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      console.log("AUTH_ERROR TRIGGERED");
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.message,
        //payload: err.response,
      });
    }
  };

  // Register User
  const register = async (formData) => {
    setAuthToken(localStorage.token); 
    const config = {
      headers: {
        "Content-Type": "application/json",
        /*
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, DELETE, PUT, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          */
      },
    };

    try {
      const res = await axios.post(
        "https://arvent.co/customer-service/customer/create",
        formData,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      //store into localStorage and fetch user data
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message,
        //payload: err.response,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        //Play around with headers a
        userName: formData.username,
        password: formData.password,
      },
    };
    try {
      const res = await axios.post(
        "https://arvent.co/customer-service/customer/login",
        [],
        config
      );
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log("login");
      //store into localStorage and fetch user data
      loadUser();
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
