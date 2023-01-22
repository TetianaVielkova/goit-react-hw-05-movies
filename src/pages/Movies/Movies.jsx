import { useState, useEffect } from "react";
import {Link, useSearchParams} from 'react-router-dom';

import {getSearchMovieApi} from './../../components/servises/Api'

import SearchMovie from './../../components/SearchMovie/SearchMovie';

const Movies = () => {

    const [movies, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchName = searchParams.get("searchName") ?? "";

    useEffect(() => {
        if (searchName !== "") {
            getSearchMovieApi(searchName).then(setMovie);
        }
    }, [searchName])

    const onSubmit = searchName => {
        setSearchParams( {searchName});
    };

    return(
        <div>
            <SearchMovie onSubmit={onSubmit} searchName={searchName}/>
            <ul>
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='50'/>
                    {title}</Link>
                </li>))}
            </ul>
        </div>
    )
}

export default Movies;