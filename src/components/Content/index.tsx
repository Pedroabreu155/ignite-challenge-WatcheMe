import React from 'react'

import { useMovies } from '../../hooks/useMovies'

import { MovieCard } from '../MovieCard'

import './styles.scss'

export function Content() {

  const { movies, selectedGenre } = useMovies()

  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}