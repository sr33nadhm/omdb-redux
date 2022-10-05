import MovieCard from 'components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from 'features/movies/movieSlice';
import "./MovieListing.scss";
import Slider from "react-slick";
import { sliderSettings } from 'common/apis/settings';

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies, renderShows;

  renderMovies = movies.Response === "True" ?
    (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) :
    <div className="movies-error">
      <h3>{movies.Error}</h3 >
    </div>;

  renderShows = shows.Response === "True" ?
    (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) :
    <div className="movies-error">
      <h3>{shows.Error}</h3 >
    </div>;

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...sliderSettings}>
            {renderMovies}
          </Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...sliderSettings}>
            {renderShows}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing;