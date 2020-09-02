import React, { useReducer } from "react";

import axios from "axios";
import CustomerContext from "./customerContext";
import CustomerReducer from "./customerReducer";

import { GET_ALL_USERS, GET_USER, SET_LOADING, GET_IMAGE } from "../types";

const CustomerState = (props) => {
  const initialState = {
    users: [],
    user: { img: null },
    loading: false,
    customerDP: document.createElement("IMG"),
  };

  const [state, dispatch] = useReducer(CustomerReducer, initialState);

  const getUser = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://arvent.co/customer-service/customer/${userName}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  const getAllUser = async () => {
    setLoading();
    const res = await axios.get(
      "https://arvent.co/customer-service/customer/all"
    );
    dispatch({ type: GET_ALL_USERS, payload: res.data });
  };

  const getImageFromId = async (id) => {
    //setLoading(); a

    const res = await axios.get(
      `https://arvent.co/customer-service/customer/image/download/${id}`
    );

    dispatch({ type: GET_IMAGE, payload: res.data });
  };

  const uploadCustomerImage = async (id, formData) => {
    axios
      .post(
        `https://arvent.co/customer-service/customer/image/upload/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        console.log("SUCCESSSSSSS");
      })

      .catch((err) => {
        console.log("HELLOOOOOOOO");
        console.log(err);
      });
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
        customerDP: state.customerDP,
        getAllUser,
        getUser,
        getImageFromId,
        //uploadCustomerImage,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerState;
