import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar({ search, setSearch, setPage }) {
  const location = useLocation();

  // highlight Anime page (including /anime/123)
  const isAnimePage = location.pathname.startsWith("/anime");

  return (
    <nav>
      <h2>
        Anime<span>Verse</span>
      </h2>

      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>

        <li>
        <Link
            to="/anime"
                  className={isAnimePage ? "active" : ""}
                       >
                      Anime
                      </Link>
        </li>

       

     

        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        Search
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

       
      </div>
    </nav>
  );
}

export default Navbar;