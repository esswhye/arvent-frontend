import React from "react";
import Spinner from "../layout/Spinner";

const Customers = (loading) => {
  if (loading) {
    return <Spinner />;
  } else {
    return console.log();
  }

  return <div></div>;
};

export default Customers;
