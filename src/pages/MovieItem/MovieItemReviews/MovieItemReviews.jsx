import { getReviewMovieApi } from 'components/servises/Api';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Item, List } from './MovieItemReviews.styled';

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
        <List>
            {reviewsMovies && reviewsMovies.length > 0 ? (reviewsMovies.map(({id, author, content}) => (
                <Item key={id}>
                    <h4>Author: {author}</h4>
                    <p>{content}</p>
                </Item>
            ))) : (<b> We don't have any reviews for this movie.</b>) }
        </List>
    )
}

export default MovieItemReviews;