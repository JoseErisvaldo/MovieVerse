import React from 'react';
import MovieList from './Components/MovieList';
function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Catalogo</h1>
      <MovieList />
    </div>
  );
}

export default App;
