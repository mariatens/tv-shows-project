import { Footer } from "./components/Footer";
import shows from "./shows.json";
import { EpisodeView, IEpisode } from "./components/EpisodeView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import "./style.css";
import { ITvShow } from "./components/TvShowView";
import { TvShowSelector } from "./components/ShowSelector";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [eps, setEps] = useState<IEpisode[]>([]);
  const [showID, setShowID] = useState<number>(NaN);
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);
  useEffect(() => {
    if (!isNaN(showID)) {
      const link = `https://api.tvmaze.com/shows/${showID}/episodes`;
      const fetchEp = async () => {
        const response = await fetch(link);
        const jsonBody = await response.json();
        setEps(jsonBody);
      };
      fetchEp();
    } else {
      const link = `https://api.tvmaze.com/shows/82/episodes`;
      const fetchEp = async () => {
        const response = await fetch(link);
        const jsonBody = await response.json();
        setEps(jsonBody);
      };
      fetchEp();
    }
  }, [showID]);

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteria(eps, input);

  const handleShowDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };
  const handleShowSelector = (id: number) => {
    if (showID === id) {
      setShowID(NaN);
    } else {
      setShowID(id);
    }
    setShowDropDownOpen(!showDropDownOpen);
  };

  const filteredEpisodesRender = filteredEpisodes.map((episode) => {
    return <EpisodeView episodeInfo={episode} key={episode.id} />;
  });

  const orderedShows = shows.sort((a, b) => {
    const fa = a.name;
    const fb = b.name;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <header className="header">
        <h1 className="title"> TV show DataBase </h1>
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleShowDropDownOpen}>
            Select TV show ▾
          </button>
          {showDropDownOpen ? (
            <ul className="menu">
              {orderedShows.map((show: ITvShow) => {
                return (
                  <TvShowSelector
                    key={show.id}
                    onClick={() => handleShowSelector(show.id)}
                    show={show}
                  />
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="search-bar-&-amount">
          <SearchBar value={input} onChange={handleSearchInput} />
          <p className="display-amount">
            displaying {filteredEpisodes.length} out of{" "}
            {filteredEpisodes.length}
          </p>
        </div>
      </header>
      <div className="all-episodes">{filteredEpisodesRender}</div>
      <Footer />
    </>
  );
}

export default App;
