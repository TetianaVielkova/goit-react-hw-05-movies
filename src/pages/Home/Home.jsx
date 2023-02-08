import {useState, useEffect} from 'react';
import {getTrendMovieApi} from './../../components/servises/Api';
import {Link} from 'react-router-dom';
import defaultimg from './../Movies/default-image.jpg'
import { Card, CardList, Image, ImgTitle, Title } from './Home.styled';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendMovieApi().then(setTrendingMovies);
    }, [])

    return (
        <div>
            <Title>Tranding movies today</Title>
            <CardList>
                {trendingMovies.map(({id, title, poster_path}) => (
                    <Card key={id}>
                        <Link to={`/movies/${id}`}>
                            <Image src={(poster_path !== null) ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${defaultimg}`} alt={title} width={350} />
                            <ImgTitle>{title}</ImgTitle>
                        </Link>
                    </Card>
                ))}
            </CardList>
        </div>
    )
}

export default Home;