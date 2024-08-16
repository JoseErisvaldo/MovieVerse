import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
      <p>{movie.Type}</p>
    </div>
  );
}

export default MovieCard;
