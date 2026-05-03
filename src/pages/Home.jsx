import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AnimeCard from "../components/AnimeCard.jsx";
import { useEffect,useState } from "react";
import { data } from "react-router";


function Home({search}) {
   

  const [animelist,setanimelist]=useState([]);
  useEffect(()=>{
      fetch("https://api.jikan.moe/v4/top/anime")
      .then(res=>res.json())
      .then(data=>{
        setanimelist(data.data);
      })
  },[]);
  const filteredAnime = animelist.filter((anime) =>
  anime.title.toLowerCase().includes(search.toLowerCase())
);
 
  return (
    <div>
    
      <Hero />

      <h2 style={{ padding: "20px" }}>Trending Now🔥</h2>

      <div className="card-container">
        {filteredAnime.map((anime) => (
          <AnimeCard
            key={anime.mal_id || anime.title}
         id={anime.mal_id}
            title={anime.title}
            genre={anime.genre?.[0].name}
            rating={anime.score}
            image={anime.images?.webp?.image_url || anime.images?.jpg?.image_url}
          />
        ))}
      </div>

      
    </div>
  );
}

export default Home;