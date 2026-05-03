import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About AnimeVerse 🌟</h1>

      <p>
        AnimeVerse is a simple anime discovery web app built using React.
        It allows users to explore anime, view details, watch trailers,
        and see characters.
      </p>

      <h2>🔥 Features</h2>
      <ul>
        <li>Browse anime list from Jikan API</li>
        <li>View anime details (score, synopsis, trailer)</li>
        <li>See characters of each anime</li>
        <li>Search anime in real time</li>
        <li>Navigate using React Router</li>
      </ul>

      <h2>⚙️ Tech Stack</h2>
      <ul>
        <li>React.js</li>
        <li>React Router</li>
        <li>Jikan API (MyAnimeList data)</li>
        <li>CSS for styling</li>
      </ul>

      <p className="footer-note">
        Built by a student learning React 🚀
      </p>
    </div>
  );
}

export default About;