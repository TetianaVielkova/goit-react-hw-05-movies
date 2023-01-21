import {useState, useEffect} from 'react';
import {getDetailsMovieApi} from './../../components/servises/Api';
import {Link, useParams} from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams()

    const [detailsMovie, setDetailsMovie] = useState([]);

    useEffect(() => {
        getDetailsMovieApi(movieId).then(setDetailsMovie);
    }, [movieId])

    if (!detailsMovie) {
        return;
    }
    const {poster_path, overview, original_title, release_date, vote_average, genres} = detailsMovie;
    const year = release_date.slice(0, 4);
    const userScore = Math.round(vote_average * 10);
    const genresList = genres.map((genre) => genre.name).join(", ");

    return(
        
        <div>
            <Link to="">
                Go back
            </Link>
            {detailsMovie.map((detailsMovie) => (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} width='50' />
                <h2>{original_title}${year}</h2>
                <p>User Score: ${userScore}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>${genresList}</p>
            </div>))}
        </div>
    )
}

export default MovieDetails;