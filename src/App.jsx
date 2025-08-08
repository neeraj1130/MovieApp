import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

const API_KEY = "fb66d882"; // Your OMDB API key

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch a list of movies
  const getMovieList = async (search) => {
    if (!search) {
      setMovies([]);
      return;
    }
    const url = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  // Fetch details for a single movie
  const getMovieDetails = async (imdbID) => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setSelectedMovie(data);
  };

  useEffect(() => {
    getMovieList(searchValue);
  }, [searchValue]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <MovieListHeading heading="Movie App" />
      {!selectedMovie && (
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      )}

      {/* If movie is selected, show details */}
      {selectedMovie ? (
        <div className="bg-gray-800 p-6 rounded-lg">
          <button
            onClick={() => setSelectedMovie(null)}
            className="mb-4 bg-red-500 px-4 py-2 rounded"
          >
            Back to Search
          </button>
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
            className="w-full max-w-sm mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-bold">{selectedMovie.Title}</h2>
          <p className="text-gray-400">{selectedMovie.Year}</p>
          <p className="mt-4">{selectedMovie.Plot}</p>
          <p className="mt-2">⭐ {selectedMovie.imdbRating} / 10</p>
        </div>
      ) : (
        // Movie list
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => getMovieDetails(movie.imdbID)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.Title}</h2>
                <p className="text-sm text-gray-400">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
