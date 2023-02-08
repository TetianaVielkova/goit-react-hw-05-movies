
import { getCreditsMovieApi } from "components/servises/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultfoto from './default-foto.jpg';


export const MovieItemCast = () => {
    const { movieId } = useParams();
    const [castMovies, setCastMovie] = useState(null);
    
    useEffect(() => {
        getCreditsMovieApi(movieId).then(setCastMovie);
    }, [movieId])

    if (!castMovies){
        return;
    } 
    return(
        <ul>
        {castMovies.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
                <img src={(profile_path !== null) ? `https://image.tmdb.org/t/p/w500${profile_path}` : `${defaultfoto}`} alt={name} width='150' />
                <h2>{name}</h2>
                <p>{character}</p>
            </li>))}
        </ul>
    )
}