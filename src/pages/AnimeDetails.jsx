import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Animedetails.css";
import { useNavigate } from "react-router-dom";

function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
 const [characters, setCharacters] = useState([]);
 const [episodes,setepisodes]=useState([]);
 const navigate = useNavigate();
  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
       .then((res) => res.json())
      .then((data) => {
        setepisodes(data.data);
      });
  }, [id]);


useEffect(() => {
   fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
      });
  }, [id]);

  if (!anime) return <p style={{ color: "white" }}>Loading...</p>;

 
 
 
  return (
    <div className="anime-details">
      <h1 className="anime-title">{anime.title}</h1>

      <div className="anime-container">
        <img
          className="anime-image"
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
        />

        <div className="anime-info">
          <p className="anime-score">
            ⭐ Score: {anime.score}
          </p>

          <p className="anime-synopsis">
            {anime.synopsis}
          </p>

          <button onClick={() => navigate(`/anime/${id}/episodes`)}>
         View Episodes
       </button>


          {anime.trailer?.embed_url && (
  <div className="anime-trailer">
    <h3>Trailer</h3>

    <iframe
      width="100%"
      height="315"
      src={anime.trailer.embed_url}
      title="Anime Trailer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
   
</div>

 
)}
<div className="title_of_char"><h1>Characters</h1></div>
  <div className="characters-grid">
    
    {characters.map((item) => (
      <div key={item.character.mal_id} className="character-card">
        <img src={item.character.images.jpg.image_url} />
        <p>{item.character.name}</p>
      </div>
    ))}
  </div>
        </div>
      </div>
     
    </div>
   
  );
}

export default AnimeDetails;