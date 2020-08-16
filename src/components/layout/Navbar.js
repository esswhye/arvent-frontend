import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const iconName = "fab fa-github";

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i class="fas fa-at" />
        rvent
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
