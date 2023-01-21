import {useState, useEffect} from 'react';
import {getTrendMovieApi} from './../../components/servises/Api';
import {Link} from 'react-router-dom';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendMovieApi().then(setTrendingMovies);
    }, [])

    return (
        <div>
            <h1>Tranding this week</h1>
            <ul>
                {trendingMovies.map(({id, title, poster_path}) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='50'/>
                        {title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;