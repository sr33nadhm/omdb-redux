import { Movie } from "models/Movie";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard(props: { data: Movie }) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/omdb-redux/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard