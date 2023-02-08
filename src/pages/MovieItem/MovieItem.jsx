import {useState, useEffect} from 'react';
import {getDetailsMovieApi} from './../../components/servises/Api';
import {  Outlet, useLocation, useParams} from 'react-router-dom';
import defaultimg from './../Movies/default-image.jpg';
import { Suspense } from 'react';
import { Container, ContainerInfoItem, ContainerItem, ImageItem, LinkBack, NavLinkNewPage, SubTitle } from './MovieItem.styled';





const MovieDetails = () => {
    const { movieId } = useParams();
    const [detailsMovie, setDetailsMovie] = useState(null);
    const location = useLocation();
    

    useEffect(() => {
        getDetailsMovieApi(movieId).then(setDetailsMovie);
    }, [movieId])
    
    if (!detailsMovie){
        return;
    } 

    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;

    return(
        <>
            <Container>
                <LinkBack to={location.state?.from ?? '/'}>
                    Go back
                </LinkBack>
                {detailsMovie && (
                    <ContainerItem>
                        <ImageItem src={(detailsMovie.poster_path !== null) ? `https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}` : `${defaultimg}`} alt={detailsMovie.title} width='300' />
                        <ContainerInfoItem>
                            <h2>{detailsMovie.original_title} ({detailsMovie.release_date.slice(0, 4)})</h2>
                            <p>User Score: {detailsMovie.vote_average.toFixed(1)} %</p>
                            <h3>Overview</h3>
                            <p>{detailsMovie.overview}</p>
                            <h3>Genres</h3>
                            <p>{detailsMovie.genres.map(genre => genre.name).join(' ')}</p>
                            <SubTitle>Additional information</SubTitle>
                        <div>
                            <NavLinkNewPage to='cast' onClick={scroll.scrollToBottom(50)} >Cast</NavLinkNewPage>
                            <NavLinkNewPage to='reviews' onClick={scroll.scrollToBottom(50)}>Reviews</NavLinkNewPage>
                        </div>
                        </ContainerInfoItem>
                        
                    </ContainerItem>)}
                        <Suspense fallback={null}>
                            <Outlet/>
                        </Suspense>
                </Container>
                

            
        </>
            
    )
}

export default MovieDetails;