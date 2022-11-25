import { Footer } from "./components/Footer";
// import episodes from "./episodes.json";
// import episodes from "./simpsons.json"
import shows from "./shows.json";
import { EpisodeView, IEpisode } from "./components/EpisodeView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteria } from "./utils/searchCriteria";
import "./style.css";
// import { EpisodeSelector } from "./components/EpisodeSelector";
import { ITvShow } from "./components/TvShowView";
import { TvShowSelector } from "./components/ShowSelector";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [eps, setEps] = useState<IEpisode[]>([]);
  const [showID, setShowID] = useState<number>(NaN);
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);
  // for the dropdown for choosing episodes
  // const [selectedEp, setSelectedEp] = useState<number>(NaN);
  // for the dropdown of the episodes
  // const [dropDownOpen, setDropDownOpen] = useState(false);
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

  // 1: function to fetch from ALL TV-shows APIs useEffect?
  //    this format: https://api.tvmaze.com/shows/ShowID/episodes
  // 2: dropdown TV show to fetch from specific link ^^ format
  // 3: make sure it works with ep-dropdown
  // 4: make the search bar work for tv-shows too

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteria(eps, input);

  // const handleDropDownOpen = () => {
  //   setDropDownOpen(!dropDownOpen);
  // };

  // const handleEpSelector = (epID: number) => {
  //   if (selectedEp === epID) {
  //     setSelectedEp(NaN);
  //   } else {
  //     setSelectedEp(epID);
  //   }
  // };

  const handleShowDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };
  const handleShowSelector = (id: number) => {
    if (showID === id) {
      setShowID(NaN);
    } else {
      setShowID(id);
    }
  };

  // const TvShowRender = isNaN(showID)
  //   ? shows.map((show) => {
  //       return <ShowSelector tvShowInfo={show} key={show.id} onClick = {()=> handleShowSelector(show.id)}/>;
  //     })
  //   : shows
  //       .filter((show) => showID === show.id)
  //       .map((show) => {
  //         return <ShowSelector tvShowInfo={show} key={show.id} onClick= {()=> handleShowSelector(show.id)}/>;
  //       });

  // make this into a ternary ===
  // if a TV-show is selected
  // ? map all eps, if not
  // : map all TV-shows

  // with dropdown
  // const filteredEpisodesRender = isNaN(showID)
  //   ? filteredEpisodes.map((episode) => {
  //       return <EpisodesMap episodeInfo={episode} key={episode.id} />;
  //     })
  //   : filteredEpisodes
  //       .filter((ep: IEpisode) => selectedEp === ep.id)
  //       .map((episode) => {
  //         return <EpisodesMap episodeInfo={episode} key={episode.id} />;
  //       });

  const filteredEpisodesRender = filteredEpisodes.map((episode) => {
    return <EpisodeView episodeInfo={episode} key={episode.id} />;
  });

  return (
    <>
      <header className="header">
        <h1 className="title"> TV show DataBase </h1>
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleShowDropDownOpen}>
            Select TV show     ▾
          </button>
          {showDropDownOpen ? (
            <ul className="menu">
              {shows.map((show: ITvShow) => {
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
        {/* <div className="dropdown">
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
        </div> */}
      </header>
      <div className="all-episodes">{filteredEpisodesRender}</div>
      {/* <div className="all-episodes">{TvShowRender}</div> */}
      <Footer />
    </>
  );
}

export default App;
