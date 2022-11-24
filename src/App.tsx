import { Footer } from "./components/Footer";
import episodes from "./episodes.json";
// import episodes from "./simpsons.json"
import shows from "./shows.json";
import { EpisodesMap, IEpisode } from "./components/EpisodeListView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import "./style.css";
import { EpisodeSelector } from "./components/EpisodeSelector";
import { ITvShow, ShowSelector } from "./components/TvShowListView";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [eps, setEps] = useState<IEpisode[]>([]);
  // change to epID
  const [selectedEp, setSelectedEp] = useState<number>(NaN);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showID, setShowID] = useState<number>(NaN);
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);

  // useEffect(() => {
  //   const fetchEp = async () => {
  //     const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
  //     const jsonBody = await response.json();
  //     setEps(jsonBody);
  //   };
  //   fetchEp();
  // }, []);

  // 1: function to fetch from ALL TV-shows APIs useEffect?
  //    this format: https://api.tvmaze.com/shows/ShowID/episodes
  // 2: dropdown TV show to fetch from specific link ^^ format
  // 3: make sure it works with ep-dropdown
  // 4: make the search bar work for tv-shows too

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteria(eps, input);

  const handleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleEpSelector = (epID: number) => {
    if (selectedEp === epID) {
      setSelectedEp(NaN);
    } else {
      setSelectedEp(epID);
    }
  };

  const handleShowDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };

  const handleShowSelector = (id: number) => {
    if (showID === id) {
      setSelectedEp(NaN);
    } else {
      setSelectedEp(id);
    }
  };

  const TvShowRender = isNaN(showID)
    ? shows.map((show) => {
        return <ShowSelector tvShowInfo={show} key={show.id} onClick = {()=> handleShowSelector(show.id)}/>;
      })
    : shows
        .filter((show) => showID === show.id)
        .map((show) => {
          return <ShowSelector tvShowInfo={show} key={show.id} onClick= {()=> handleShowSelector(show.id)}/>;
        });

  // make this into a ternary ===
  // if a TV-show is selected
  // ? map all eps, if not
  // : map all TV-shows
  const filteredEpisodesRender = isNaN(selectedEp)
    ? filteredEpisodes.map((episode) => {
        return <EpisodesMap episodeInfo={episode} key={episode.id} />;
      })
    : filteredEpisodes
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
            Select Episode ▾
          </button>
          {dropDownOpen ? (
            <ul className="menu">
              {filteredEpisodes.map((episode: IEpisode) => {
                return (
                  <EpisodeSelector
                    key={episode.id}
                    onClick={() => handleEpSelector(episode.id)}
                    episode={episode}
                  />
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleShowDropDownOpen}>
            Select TV show ▾
          </button>
          {showDropDownOpen ? (
            <ul className="menu">
              {shows.map((show: ITvShow) => {
                return (
                  <ShowSelector
                    key={show.id}
                    onClick={() => handleShowSelector(show.id)}
                    tvShowInfo={show}
                  />
                );
              })}
            </ul>
          ) : null}
        </div>
      </header>
      <div className="all-episodes">{filteredEpisodesRender}</div>
      <div className="all-episodes">{TvShowRender}</div>
      <Footer />
    </>
  );
}

export default App;
