import { useState, useEffect } from "react";
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import  defaultimg from './../Movies/default-image.jpg'

import {getSearchMovieApi} from './../../components/servises/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardList, Image, ImgTitle } from "pages/Home/Home.styled";
import { Form, FormConteiner, Input, SubmitButton } from "./Movies.styled";

const Movies = () => {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (!query)return;
        getSearchMovieApi(query).then(setMovies)
    },[query])

    const handleChange = event => {
        setMovieName(event.target.value.toLowerCase());
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (movieName.trim() === '') {
            toast.error(' Entry movie name!');
            return;
        }
        
        setSearchParams({query: movieName});
        setMovieName('');
}

    return(
        <FormConteiner>
            <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="searchName"
                autoFocus
                value={movieName}
                onChange={handleChange}
                placeholder="Search movie..."
            />
            <SubmitButton type='submit'>Search</SubmitButton>
        </Form>
        {movies && (<CardList>
            {movies.map(({id, title, poster_path}) => (
                <Card key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                    <Image src={(poster_path !== null) ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${defaultimg}`} alt={title} width='100'/>
                    <ImgTitle>{title}</ImgTitle></Link>
                </Card>))}
            </CardList>)}
        </FormConteiner>
    )
}

export default Movies;