import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./stories/search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("movie"); 

  useEffect(() => {
    searchMovies(searchTerm, category);
  }, [searchTerm, category]);

  const searchMovies = async (title, type) => {
    const response = await fetch(`${API_URL}&s=${title}&type=${type}`);
    const data = await response.json();
    
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="main">
      <div className="category-container">
        <button onClick={() => setCategory("movie")}>Movies</button>
        <button onClick={() => setCategory("series")}>Series</button>
        <button onClick={() => setCategory("game")}>Games</button>
      </div>

      <div className="app">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm, category)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No results found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
