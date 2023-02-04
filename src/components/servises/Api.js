import axios from 'axios';
const API_KEY = '7eb26739a0134b8d6dba3e701217b4ff';
const URL = 'https://api.themoviedb.org/3';


export const getTrendMovieApi = async () => {
    const {data} = await axios.get(`${URL}/trending/movie/week?api_key=${API_KEY}`);
    console.log(data);
    return data.results;
};


export const getSearchMovieApi = async (searchName) => {
    const {data} = await axios.get(`${URL}/search/movie?api_key=${API_KEY}&query=${searchName}&language=en-US&page=1&include_adult=false`);
    console.log(data);
    return data;
}

export const getDetailsMovieApi = async (movieId) => {
    const {data} = await axios.get(`${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    console.log(data);
    return data;
}


export const getCreditsMovieApi = async (id) => {
    const {data} = await axios.get(`${URL}/movie/${id}/credit?api_key=${API_KEY}&language=en-US`);
    console.log(data);
    return data.results;
}

export const getReviewMovieApi = async (id) => {
    const {data} = await axios.get(`${URL}/movie/${id}/review?api_key=${API_KEY}&language=en-US`);
    console.log(data);
    return data.results;
}