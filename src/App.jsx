import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Anime from "./pages/Anime.jsx";


import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import AnimeDetails from "./pages/AnimeDetails.jsx";

import AnimeEpisodes from "./pages/AnimeEpisode.jsx";

function App() {
 const [search, setSearch] = useState("");
 const [page, setPage] = useState(1);
  return (
    <>
    <Navbar
  search={search}
  setSearch={setSearch}
  setPage={setPage}
/>
<Routes>
  <Route path="/" element={<Home search={search}/>} />
  <Route path="/anime" element={ <Anime
      search={search}
      page={page}
      setPage={setPage} />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
  <Route path="/anime/:id/episodes" element={<AnimeEpisodes />} />

  <Route path="/about" element={<About />} />
</Routes>
</>
  );
}

export default App;