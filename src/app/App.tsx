import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/omdb-redux'>
              <Route index element={<Home />} />
              <Route path='movie/:imdbID' element={<MovieDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
