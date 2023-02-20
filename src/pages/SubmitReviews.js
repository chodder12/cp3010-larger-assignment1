import React, {useEffect, useState, useRef} from "react";


const SubmitReviews = () => {
    return (
        <h1>submit movie reviews</h1>
    );
}

export function LeaveReview(props) {
   
    const title = useRef();

    const submit = (event) => {
        event.preventDefault();
        const movies = []
        props.movies.forEach(movie => {
            movies.push(movie);
            
        })
        const title = title.current.value;
        movies.push({"title": title})
        props.setMovies(movies);

        alert(title);
        title.current.value = "";
    }

    return(
        <form onSubmit={submit}>
            <input
            ref = {title}
            type = "text"/>
            <button>ADD</button>
        </form>
    )
}

export default SubmitReviews;