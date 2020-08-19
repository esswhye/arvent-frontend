import React from "react";
import { Link } from "react-router-dom";

const ListOfCustomers = ({ user: { userName, id, role } }) => {
  return (
    <div className="card text-center">
      <h3>{userName}</h3>
      <p>{role}</p>
      <div>
        <Link to={`/customer/${userName}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default ListOfCustomers;

/*
return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
*/
