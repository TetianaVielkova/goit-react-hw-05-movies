import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Navigation from './Navigation/Navigation';
import {NotFound} from './NotFound/NotFound';

import Home from './../pages/Home/Home';
import MovieDetails from './../pages/MovieItem/MovieItem'
import Movies from './../pages/Movies/Movies';



export const App = () => {

  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Navigation/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails />}/>
          
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
    </BrowserRouter>
  );
};
