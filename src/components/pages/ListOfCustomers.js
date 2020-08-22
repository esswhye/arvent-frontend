import React from "react";
import { Link } from "react-router-dom";

const ListOfCustomers = ({ user: { userName, id, role, imageFilename } }) => {
  return (
    <div className="card text-center">
      {String(imageFilename).length > 0 && (
        <div>
          {
            //getImageFromId(id)
          }
          <img
            src={`http://arvent.co/customer-service/customer/image/download/${id}`}
            atl="DP"
            className="round-img"
            //style={{ width: "200px" }}
          />
        </div>
      )}
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
