import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-white">{movie.Title}</h2>
            <p className="text-sm text-gray-400">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
