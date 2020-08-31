import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fas fa-at" />
        rvent
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/customers">Customers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
