import React from 'react'
const IMG = 'https://image.tmdb.org/t/p/w1280';
const set= (avg) =>{
    if(avg>7){
        return 'green';
    } else if(avg>5){
        return 'orange';
    } else {
        return 'red';
    }
}
const Movie = ({title, poster_path, overview, vote_average}) => {
  return (
    <div className='movie'>
        <img src={(poster_path?(IMG+poster_path):'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>   
            <span className={`tag ${set(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-hover">
            <h2>Overview: </h2>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default Movie