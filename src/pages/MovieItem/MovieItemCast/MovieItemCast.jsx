
import { getCreditsMovieApi } from "components/servises/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultfoto from './default-foto.jpg';
import { CastImg, CastItem, CastList, DivText } from "./MovieItemCast.styled";


const MovieItemCast = () => {
    const { movieId } = useParams();
    const [castMovies, setCastMovie] = useState(null);
    
    useEffect(() => {
        getCreditsMovieApi(movieId).then(setCastMovie);
    }, [movieId])

    if (!castMovies){
        return;
    } 
    return(
        <CastList>
        {castMovies.map(({ cast_id, name, character, profile_path }) => (
            <CastItem key={cast_id}>
                <CastImg src={(profile_path !== null) ? `https://image.tmdb.org/t/p/w500${profile_path}` : `${defaultfoto}`} alt={name} />
                <DivText>
                    <h2>{name}</h2>
                    <p>{character}</p>
                </DivText>
            </CastItem>))}
        </CastList>
    )
}

export default MovieItemCast;