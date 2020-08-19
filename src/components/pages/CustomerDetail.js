import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import CustomerContext from "../../context/customer/customerContext";

const CustomerDetail = ({ match }) => {
  const customerContext = useContext(CustomerContext);

  const { user, loading, getUser } = customerContext;

  useEffect(() => {
    getUser(match.params.userName);
  }, []);

  const {
    firstName,
    lastName,
    emailAddress,
    userName,
    address,
    postalCode,
    phoneNumber,
    role,
    created_date,
    last_modified_date,
  } = user;

  //const json = JSON.stringify(user);
  //console.log(json);

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to home
      </Link>{" "}
      <div className="card2 grid-5">
        <div className="all-center">
          <img
            src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
            atl="DP"
            className="round-img"
            //style={{ width: "200px" }}
          />
          <div className="card2 text-center">
            <div className="badge2 badge-primary">{role}</div>
          </div>
          <h1>
            {firstName} {lastName}
          </h1>

          {phoneNumber != null && String(phoneNumber).length > 0 && (
            <p> PhoneNumber: {phoneNumber}</p>
          )}
          <p>Address: {address}</p>
          <p>PostalCode: {postalCode}</p>
        </div>
        <div>Username: {userName}</div>
        <div>Email: {emailAddress}</div>
        <div className="card2 text-center">
          <div className="badge badge-success">
            {String(created_date).substring(0, 10)}
          </div>
          <div className="badge badge-light">
            {String(last_modified_date).substring(0, 10)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerDetail;
