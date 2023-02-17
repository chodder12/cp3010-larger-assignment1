 import { useParams } from 'react-router-dom';
 import movies from './movies';

const MovieReviews = () => {
     const {MovieReviewID} = useParams();
     const movie = movies.find(movie => movie.id == MovieReviewID);

    return (
         <>
          <h1> {movie.title} </h1> 
          {movie.actors.map(paragraph => (
             <p>{paragraph}</p>
         ))} 
         </> 
    );
}

export default MovieReviews;