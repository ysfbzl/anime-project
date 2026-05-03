import "./Hero.css";

function Hero() {
 
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            ENTER THE <br />
            <span>WORLD OF ANIME</span>
          </h1>

          <p>
            Discover amazing anime, meet legendary characters,
            and stay updated with the latest news.
          </p>

          <div className="buttons">
            <button className="explore">Explore Anime</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;