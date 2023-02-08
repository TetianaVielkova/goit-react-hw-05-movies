import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Navigation from './Navigation/Navigation';
import {NotFound} from './NotFound/NotFound';

// import Home from './../pages/Home/Home';
// import MovieDetails from './../pages/MovieItem/MovieItem'
// import Movies from './../pages/Movies/Movies';
// import MovieItemCast from 'pages/MovieItem/MovieItemCast/MovieItemCast';
// import MovieItemReviews from 'pages/MovieItem/MovieItemReviews/MovieItemReviews';

const Home = lazy(() => import('./../pages/Home/Home'));
const MovieDetails = lazy(() => import('./../pages/MovieItem/MovieItem'));
const Movies = lazy(() => import('./../pages/Movies/Movies'));
const MovieItemCast = lazy(() => import('pages/MovieItem/MovieItemCast/MovieItemCast'));
const MovieItemReviews = lazy(() => import('pages/MovieItem/MovieItemReviews/MovieItemReviews'));


export const App = () => {

  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Navigation>
        <Suspense fallback={null}>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieItemCast />}/>
              <Route path="reviews" element={<MovieItemReviews />}/>
            </Route>
          
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Suspense>
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
      </Navigation>
    </BrowserRouter>
  );
};
