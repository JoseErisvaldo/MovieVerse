import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Input from '../../UX/Input';



function MovieList() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=star wars&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search));
  }, []);
  console.log(movies)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Input />
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
