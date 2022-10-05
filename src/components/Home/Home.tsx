import { fetchAsyncMovies, fetchAsyncShows } from 'features/movies/movieSlice';
import { AppDispatch } from 'features/store';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MovieListing from '../MovieListing/MovieListing';
import './Home.scss';


function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);


  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home;