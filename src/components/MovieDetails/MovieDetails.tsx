import { AppDispatch } from "features/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { fetchAsyncDetail, getDetails, removeSelected } from "features/movies/movieSlice";
import "./MovieDetails.scss";

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getDetails);
  useEffect(() => {
    if (imdbID) {
      dispatch(fetchAsyncDetail(imdbID));
    }
    return () => {
      dispatch(removeSelected())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {
        data.Title?.length < 1 ?
          <div>...Loading</div>
          :
          <>
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : {data.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : {data.imdbRating}
                </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director </span><span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars </span><span>{data.Actors}</span>
                </div>
                <div>
                  <span>Genres </span><span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages </span><span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards </span><span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
      }
    </div>
  )
}

export default MovieDetails