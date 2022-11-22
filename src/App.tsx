import { Footer } from "./components/Footer";
import episodes from "./episodes.json";
import { EpisodesMap } from "./components/EpisodeListView";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import './style.css'

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");

  const handleSearchInput = (searchInput:string) => {
    setInput(searchInput);
  }

  const filteredEpisodes = searchCriteria(episodes, input);

  return (
    <>
      <header className= "header">
        <h1 className = "title"> TV show DataBase </h1>
        <SearchBar value={input} onChange={handleSearchInput} />
      </header>
      <div className = "all-episodes">
        <p className = "episode">
        {filteredEpisodes.map((episode) => {
          return <EpisodesMap episodeInfo={episode} key={episode.id} />;
        })}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
