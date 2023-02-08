import { getReviewMovieApi } from 'components/servises/Api';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export const MovieItemReviews = () => {
    const { movieId } = useParams();
    const [reviewsMovies, setReviewsMovie] = useState(null);

    useEffect(() => {
        getReviewMovieApi(movieId).then(setReviewsMovie);
    }, [movieId])


    if (!reviewsMovies){
        return;
    } 

    return(
        <ul>
            {reviewsMovies ? reviewsMovies.map(({id, author, content}) => (
                <li key={id}>
                    <h4>Author: {author}</h4>
                    <p>{content}</p>
                </li>
            )) : <p>There is no review for this movie yet</p> }
        </ul>
    )
}