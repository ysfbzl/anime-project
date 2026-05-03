import AnimeCard from "../components/AnimeCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Anime({ search, page, setPage }) {
  const [animelist, setanimelist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let url;

    if (typeof search === "string" && search.trim() !== "") {
      url = `https://api.jikan.moe/v4/anime?q=${search}&page=1`;
    } else {
      url = `https://api.jikan.moe/v4/anime?page=${page}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setanimelist(data.data || []);
      });
  }, [search, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
    
      <h2 style={{ padding: "20px" }}>All Anime 🎬</h2>

      <div className="card-container">
        {animelist.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => navigate(`/anime/${anime.mal_id}`)}
            style={{ cursor: "pointer" }}
          >
            <AnimeCard
              title={anime.title}
              genre={anime.genres?.[0]?.name}
              rating={anime.score}
              image={
                anime.images?.webp?.image_url ||
                anime.images?.jpg?.image_url
              }
            />
          </div>
        ))}
      </div>

    
      <div >
        <button
          className="button"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        <button
          className="button"
          onClick={() => setPage((p) => p + 1)}
         
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Anime;