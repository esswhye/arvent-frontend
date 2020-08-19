import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import CustomerContext from "../../context/customer/customerContext";
import ListOfCustomers from "./ListOfCustomers";

const Customers = () => {
  const customerContext = useContext(CustomerContext);

  const { users, loading, getAllUser } = customerContext;

  useEffect(() => {
    getAllUser();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <ListOfCustomers key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Customers;
