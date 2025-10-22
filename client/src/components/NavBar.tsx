// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export const Navbar = () => (
  <nav className="navbar">
    <h2>Movies</h2>
    <div>
      <Link to="/movies">Movies</Link>
      {/* <Link to="/create">Create User</Link> */}
    </div>
  </nav>
);
