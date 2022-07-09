import { useState } from "react";
import { useEffect } from "react";
import Movie from "./components/Movie";

const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}&page=1}`;
let QueryAPI = `https://api.themoviedb.org/3/search/movie?&api_key={API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect(() => {
    fetch(API).then(res => res.json()).then(data => {
      setMovies(data.results);
    });
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      let query=QueryAPI + searchTerm;
      fetch(query).then(res => res.json()).then(data => {
        setMovies(data.results);
      });
      setSearchTerm('')
    }
  };
  const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }
    return (
      <>
        <header>
          <form onSubmit={handleOnSubmit} >
            <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="Search for a Movie" />
          </form>
        </header>
        <div className="movie-container">
          {movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </>
    );
  }

  export default App;
