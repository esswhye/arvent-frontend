import React, { useReducer } from "react";

import axios from "axios";
import CustomerContext from "./customerContext";
import CustomerReducer from "./customerReducer";

import { GET_ALL_USERS, GET_USER } from "../../types";

const CustomerState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CustomerReducer, initialState);

  return (
    <CustomerContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerState;
