import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/login");
      //setAlert("Account saved", "success");
      //clearErrors();
    }

    if (error === "Customer saved") {
      setAlert(error, "success");
      clearErrors();
    } else if (error !== null) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    userName,
    email,
    firstName,
    lastName,
    address,
    postalCode,
    phoneNumber,
    password,
    password2,
  } = user;

  const onChange = (e) =>
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      phoneNumber === "" ||
      address === "" ||
      postalCode === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register(user);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="tel"
            name="postalCode"
            value={postalCode}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
