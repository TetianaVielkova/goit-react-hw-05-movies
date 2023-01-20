import {useState, useEffect} from 'react';
import {getTrendMovieApi} from './../../components/servises/Api';
import {Link} from 'react-router-dom';

const Home = () => {
    const [trendingMovies, settrendingMovies] = useState([]);

    useEffect(() => {
        getTrendMovieApi().then(settrendingMovies);
    }, [])
    
    if(!trendingMovies) {
        return;
    }

    return (
        <div><h1>Tranding this week</h1>
        <ul>
            {trendingMovies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='50'/>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </li>
            ))}
        </ul></div>
    )
}

export default Home;