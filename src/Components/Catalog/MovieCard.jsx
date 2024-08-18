import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg p-4 flex justify-center flex-col items-center gap-3">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
      <h2 className="text-xl font-bold">{movie.Title} ({movie.Year})</h2>
    </div>
  );
}

export default MovieCard;
