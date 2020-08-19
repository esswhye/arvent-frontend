import React, { useReducer } from "react";

import axios from "axios";
import CustomerContext from "./customerContext";
import CustomerReducer from "./customerReducer";

import { GET_ALL_USERS, GET_USER, SET_LOADING } from "../../types";

const CustomerState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CustomerReducer, initialState);

  const getUser = async (userName) => {
    setLoading();
    const res = await axios.get(
      `http://arvent.co/customer-service/customer/${userName}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  const getAllUser = async () => {
    setLoading();
    const res = await axios.get(
      "http://arvent.co/customer-service/customer/all"
    );
    dispatch({ type: GET_ALL_USERS, payload: res.data });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CustomerContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        getAllUser,
        getUser,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerState;
