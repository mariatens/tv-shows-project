import { Footer } from "./components/Footer";
import episodes from "./episodes.json";
// import episodes from "./simpsons.json"
// import shows from "./shows.json";
import { EpisodesMap, IEpisode } from "./components/EpisodeListView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import "./style.css";
import { EpisodeSelector } from "./components/EpisodeSelector";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [eps, setEps] = useState<IEpisode[]>([]);
  const [selectedEp, setSelectedEp] = useState<number>(NaN);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    const fetchEp = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody = await response.json();
      setEps(jsonBody);
    };
    fetchEp();
  }, []);

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteria(eps, input);

  const handleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
  };

  // drop down episode selector
  // have something that stops the mapping of ALL
  // if something is selected COND RENDERING.
  // add deselector (maybe bool)
  const handleSelector = (id: number) => {
    setSelectedEp(id);
  };
  // const selectedDropDownEp = episodes
  //   .filter((ep: IEpisode) => selectedEp === ep.id)
  //   .map((ep) => {
  //     return <EpisodesMap episodeInfo={ep} key={ep.id} />;
  //   });

    const filteredEpisodesRender = isNaN(selectedEp) ? 
    filteredEpisodes.map((episode) => {
      return <EpisodesMap episodeInfo={episode} key={episode.id}/>})
      :
      filteredEpisodes
        .filter((ep: IEpisode) => selectedEp === ep.id)
        .map((episode) => {
          return <EpisodesMap episodeInfo={episode} key={episode.id} />;
    });


  return (
    <>
      <header className="header">
        <h1 className="title"> TV show DataBase </h1>
        <div className="search-bar-&-amount">
          <SearchBar value={input} onChange={handleSearchInput} />
          <p className="display-amount">
            displaying {filteredEpisodes.length} out of {episodes.length}
          </p>
        </div>
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleDropDownOpen}>
            Select TV show ▾
          </button>
          {dropDownOpen ? (
            <ul className="menu">
              {filteredEpisodes.map((episode: IEpisode) => {
                return (
                  <EpisodeSelector
                    key={episode.id}
                    onClick={() => handleSelector(episode.id)}
                    episode={episode}
                  />
                );
              })}
            </ul>
          ) : null}
        </div>
      </header>
      <div className="all-episodes">
      {filteredEpisodesRender}
      </div>
      <Footer />
    </>
  );
}

export default App;
