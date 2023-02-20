import { Link } from "react-router-dom";
import movies from "./movies";

const MovieReviewsListPage = () => {
    return (
        <>
        <h1>this is the movies review list page </h1>
        {movies.map(movie => (
            <Link key={movie.id} to={`/MovieReviews/${movie.id}`}>
                <h3>{movie.title}</h3>
                <p>{movie.actors}</p>

                <button onClick={() => handleMovieDelete(movie)}>delete</button>
                
                
            </Link>
        ))}    
        </>

    );
}

const handleMovieDelete = (movie) => {
    const newMovieList = movieList.filter((m) => m.id !== movie.id);
    setMovieList(newMovieList);
  };

export default MovieReviewsListPage;