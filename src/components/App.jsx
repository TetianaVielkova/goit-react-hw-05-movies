import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {Layout} from './Layout/Layout';
import {NotFound} from './NotFound/NotFound';

import Home from './../pages/Home/Home';
import Movies from './../pages/Movies/Movies';



export const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
