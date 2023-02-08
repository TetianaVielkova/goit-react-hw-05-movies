import {useState, useEffect} from 'react';
import {getDetailsMovieApi} from './../../components/servises/Api';
import {Link, NavLink, Outlet, useParams} from 'react-router-dom';
import defaultimg from './../Movies/default-image.jpg'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [detailsMovie, setDetailsMovie] = useState(null);

    useEffect(() => {
        getDetailsMovieApi(movieId).then(setDetailsMovie);
    }, [movieId])
    
    if (!detailsMovie){
        return;
    } 

    return(
        <><div>
            <Link to="/">
                Go back
            </Link>
            {detailsMovie && (
                <div>
                    <img src={(detailsMovie.poster_path !== null) ? `https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}` : `${defaultimg}`} alt={detailsMovie.title} width='300' />
                    <h2>{detailsMovie.original_title} ({detailsMovie.release_date.slice(0, 4)})</h2>
                    <p>User Score: {detailsMovie.vote_average.toFixed(1)} %</p>
                    <h3>Overview</h3>
                    <p>{detailsMovie.overview}</p>
                    <h3>Genres</h3>
                    <p>{detailsMovie.genres.map(genre => genre.name).join(' ')}</p>
                </div>)}
            </div>
            <h3>Additional information</h3>
            <div>
                <NavLink to='cast'>Cast</NavLink>
                <NavLink to='reviews'>Reviews</NavLink>
            </div>
            <Outlet/>
            </>
            
    )
}

export default MovieDetails;