// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import '../../server/src/validator/movie.validator';

import './App.css';
import { Movies } from './pages/MovieList';
import { Navbar } from './components/NavBar';
import { GenreMovies } from './pages/GenreMovies';

function App() {

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/genre/:genreName" element={<GenreMovies />}></Route>
      </Routes>
    </Router>
  
  )
}

export default App;
