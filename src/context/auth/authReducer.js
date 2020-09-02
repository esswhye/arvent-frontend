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

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        // user: action.payload,
        user: {
          id: action.payload.id,
          role: action.payload.role,
          username: action.payload.userName,
        },
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      var token = action.payload;
      token = token.substring(1, token.length - 1);

      localStorage.setItem("token", token);
      return {
        ...state,
        //...action.payload,
        isAuthenticated: true,
        loading: false,
        error: action.payload,
      };

    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        /*
        error: {
          status: action.payload.status,
          message: action.payload.data.message,
        },*/
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: "logout successfully",
        /*
        error: {
          status: action.payload.status,
          message: action.payload.data.message,
        },*/
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
