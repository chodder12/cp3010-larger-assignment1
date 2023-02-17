import movies from "./movies";

const MovieReviewsListPage = () => {
    return (
        <>
        <h1>this is the movies review list page {MovieReviewsListPage}</h1>
        {movies.map(movie => (
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.actors}</p>
            </div>
        ))}    
        </>
        
        
    );
}

export default MovieReviewsListPage;