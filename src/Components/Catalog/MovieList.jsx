import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Input from '../../UX/Input'
import Button from '../../UX/Button'
import Alert from '../../UX/Alert'
import { IoReload } from 'react-icons/io5'

function MovieList() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState()

  function handleSearch(e) {
    e.preventDefault()
    setMessage('')
    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(search)}&apikey=${apiKey}`)
     .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          setSearch('')
          setMovies('')
          setMessage('Carregando...')
          setType('success')
          setTimeout(() => {
            setSearch('')
            setMovies(data.Search)
            setMessage('')
          }, 2000)
        } else {
          setLoading(true)
          setSearch('')
          setMovies([])
          setMessage('Filme não encontrados')
          setType('error')
          setTimeout(() => {
            setSearch('')
            setMessage('')
            setType('')
          }, 3000)
        }
      })
      .catch(error => {
        console.error('Erro ao buscar filme:', error)
        setMessage('Erro ao buscar filmes')
        setType('warning')
        setType('error')
        setSearch('')
          setTimeout(() => {
            setSearch('')
            setMessage('')
            setType('')
          }, 3000)
      })
  }
  return (
    <div>
      
      <div className='flex justify-center gap-4'>
        <div className='w-full'>
          <Input value={search} placeholder='Pesquisar filme' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <Button onClick={handleSearch} background='green' color='white' text="Pesquisar" />
        </div>
      </div>
      {message && <Alert text={message} type={type} icon={<IoReload />
} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.length !== 0 ? movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        )) : <p className='text-blue-600 font-bold'>Pesquise um filme</p>}
      </div>
    </div>
  )
}

export default MovieList
