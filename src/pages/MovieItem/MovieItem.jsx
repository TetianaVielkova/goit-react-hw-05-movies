import {useState, useEffect} from 'react';
import {getDetailsMovieApi} from './../../components/servises/Api';
import {Link, useParams} from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    // console.log(movieId);
    
    const [detailsMovie, setDetailsMovie] = useState([]);


    useEffect(() => {
        getDetailsMovieApi(movieId).then(setDetailsMovie);
    }, [movieId])

    if (!detailsMovie){
        return;
    } 

    const {id, poster_path, overview, title, original_title, release_date, vote_average, genres} = detailsMovie;

    return(
        <div>
            <Link to="/">
                Go back
            </Link>
            {detailsMovie && <div key={id}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='50' />
                <h2>{original_title}({release_date})</h2>
                <p>User Score: {vote_average} %</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
            </div>}
        </div>
    )
}

export default MovieDetails;