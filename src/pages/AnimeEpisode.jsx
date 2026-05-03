import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./episode.css";
function AnimeEpisodes() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
      .then(res => res.json())
      .then(data => setEpisodes(data.data || []));
  }, [id]);

  return (
  <div className="episodes-page">
    <h2 className="episodes-title">Episodes</h2>

    <div className="episodes-list">
      {episodes.map((ep) => (
        <div key={ep.mal_id} className="episode-card">
          <p className="episode-number">Episode {ep.mal_id}</p>
          <p className="episode-title">{ep.title}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default AnimeEpisodes;