import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  //const alertContext = useContext(AlertContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <Fragment>
      <h1>{user && user.username}</h1>
    </Fragment>
  );
};

export default Home;
