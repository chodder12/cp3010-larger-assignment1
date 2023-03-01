import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import LeaveReview from './Form';
import {Routes, Route, Link} from 'react-router-dom';



function MovieList(props){
  return (
    <>
    <Link to="/review">Review</Link>
    <ul>
      {
        props.fav_movies.map(movie => 
        <li key = {movie.id}>
          <h2>{movie.title} </h2>
          <p>featuring: {movie.actors} </p>
          <p>released: {movie.releaseDate} </p>
          <p>rating: {movie.rating}</p>
          <img src = {movie.poster}/>
          <button onClick={() => handleRemoveMovie(movie.id, props.setMovies, props.fav_movies)}>Remove</button>
          </li>)
        
      }
    </ul>
    </>
  )
}
const handleRemoveMovie = (id, setMovies, movies) => {
      const updatedMovies = movies.filter((movie) => movie.id !== id);
      setMovies(updatedMovies);
    };

function App() {

    let [movies, setMovies] = useState(null);

    
    
      useEffect( () => {
        console.log("loading data")

        fetch("/movies")
        .then(response => response.json() )
        .then( setMovies)
        .catch( e => console.log(e.message))
      }, [])
    
      
      if( movies == null){
        return <h1>loading...</h1>;
      }
      console.log(movies)

      return (
        <Routes>
          <Route path="/" element= {<MovieList fav_movies={(movies)} setMovies={setMovies} />} />
          <Route path="/review" element= {<LeaveReview movies={movies} setMovies={setMovies} />} />
        </Routes>
      )
      
}







export default App;
