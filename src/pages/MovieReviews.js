 import { useParams } from 'react-router-dom';
 import movies from './movies';

const MovieReviews = () => {
     const {MovieReviewID} = useParams();
     const movie = movies.find(movie => movie.id == MovieReviewID);

    return (
         <>
          <h1> {movie.title} </h1> 
          <h2> {movie.release} </h2> 
          {movie.actors.map(paragraph => (
             <p>{paragraph}</p>
         ))} 
          <h3> {movie.rating} </h3> 
          <h4> {movie.poster} </h4> 
         </> 
    );
}

export default MovieReviews;