import { Footer } from "./components/Footer";
// import episodes from "./episodes.json";
// import episodes from "./simpsons.json"
import { EpisodesMap, IEpisode } from "./components/EpisodeListView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import "./style.css";
import { EpisodeSelector } from "./components/EpisodeSelector";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [ep, setEp] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchEp = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody = await response.json();
      setEp(jsonBody);
    };
    fetchEp();
    console.log("HERE")
  }, []);

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteria(ep, input);
  const handleOpen = () => {
    setOpen(!open);
  }
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <h1 className="title"> TV show DataBase </h1>
        <SearchBar value={input} onChange={handleSearchInput} />
        <div className="dropdown">
              <button onClick={handleOpen}>Dropdown</button>
        {open ? (
        <ul className="menu">{filteredEpisodes.map((episode)=>{
          return <EpisodeSelector key = {episode.id} epId= {episode.id} epName = {episode.name}/>
        })}
        </ul>
        ) : null}
        </div>
      </header>
      <div className="all-episodes">
        <div className="episode">
          {filteredEpisodes.map((episode) => {
            return <EpisodesMap episodeInfo={episode} key={episode.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
