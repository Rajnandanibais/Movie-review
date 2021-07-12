import React from 'react'


const image= "https://image.tmdb.org/t/p/w1280";

function Movie({title,poster_path,overview,vote_average}) {
  return (
    <div className="movie">
      <img src={image + poster_path} alt={title} />
    <div className="movie-info">
    <h3>{title}</h3>
    <span className="tag">{vote_average}</span>
    </div>
    <div className="overview">
    <h2>overview:</h2>
    <p>{overview}</p>
    </div>
    </div>
  )
}

export default Movie
