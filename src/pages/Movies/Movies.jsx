import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import {getSearchMovieApi} from './../../components/servises/Api'


const Movies = () => {
    const [movieName, setMovieName] = useState('')
    const [searcMovieName, setSearchMovieName] = useState('')
    const [movies, setMovies] = useState(null)


    useEffect(() => {
        if (!searcMovieName)return;
        const renderMovie = async () => {
            const {results} = await getSearchMovieApi(searcMovieName);
        setMovies(results)
        }
       renderMovie() 
    },[searcMovieName])

    const handleChange = event => {
        setMovieName(event.target.value.toLowerCase());
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchMovieName(movieName);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="searchName"
                autoFocus
                value={movieName}
                onChange={handleChange}
                placeholder="Search movie..."
            />
            <button type="submit">Search</button>
        </form>
        {movies && (<ul>
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='100'/>
                    {title}</Link>
                </li>))}
            </ul>)}
        </div>
    )
}

export default Movies;