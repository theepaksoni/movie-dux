import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return (
      searchTerm === "" ||
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return parseFloat(movie.rating) >= 8;

      case "Ok":
        return parseFloat(movie.rating) >= 5 && parseFloat(movie.rating) < 8;

      case "Bad":
        return parseFloat(movie.rating) < 5;

      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesSearchTerm(movie, searchTerm) &&
      matchesRating(movie, rating)
  );

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Sci-fi</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.includes(movie.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-movies-message">
          <p>
            No movies match the selected filters. Please adjust your search or
            filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
