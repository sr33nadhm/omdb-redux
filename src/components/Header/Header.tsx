import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "features/store";
import { fetchAsyncMovies, fetchAsyncShows } from "features/movies/movieSlice";

function Header() {
  const location = useLocation();
  const [term, setTerm] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (term.length > 0) {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
    }
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/omdb-redux">Movie App</Link>
      </div>

      {
        location.pathname.includes("/movie/") ?
          <></> :
          <div className="search-bar">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Search movies or shows"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
      }

      <a href="https://sr33nadhm.github.io/">
        <div className="projects-button">
          My Projects
        </div>
      </a>
    </div>
  )
}

export default Header