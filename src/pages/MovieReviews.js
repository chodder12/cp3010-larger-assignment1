 import { useParams } from 'react-router-dom';
 import movies from './movies';
 

const MovieReviews = () => {
     const {MovieReviewID} = useParams();
     const movie = movies.find(movie => movie.id == MovieReviewID);

    return (
         <>
          <h1> {movie.title} </h1> 
          <h2> release date: {movie.release} </h2> 
          featuring: {movie.actors.map(paragraph => (
             <p>{paragraph}</p>
         ))} 
          <h3> rating: {movie.rating} </h3> 
          <img src={movie.poster} /> 
         </> 
    );
}

export default MovieReviews;