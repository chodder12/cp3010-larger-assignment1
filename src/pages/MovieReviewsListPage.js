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
            </Link>
        ))}    
        </>
        
        
    );
}

export default MovieReviewsListPage;