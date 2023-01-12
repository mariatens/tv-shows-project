import { Footer } from "./components/Footer";
import { EpisodeView, IEpisode } from "./components/EpisodeView";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { searchCriteriaEpisodes } from "./utils/searchCriteriaEpisodes";
import { searchCriteriaTvShows } from "./utils/searchCriteriaTvShows";
import "./style.css";
import { ITvShow, TvShowView } from "./components/TvShowView";
import { TvShowSelector } from "./components/ShowSelector";
import headerImg from "./imgs/ultimate-header.png";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [eps, setEps] = useState<IEpisode[]>([]);
  const [showID, setShowID] = useState<number>(NaN);
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);
  const [shows, setShows] = useState<ITvShow[]>([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (!isNaN(showID)) {
      const link = `https://api.tvmaze.com/shows/${showID}/episodes`;
      const fetchEp = async () => {
        const response = await fetch(link);
        const jsonBody = await response.json();
        setEps(jsonBody);
        setView(true);
      };
      fetchEp();
    } else {
      const link = `https://api.tvmaze.com/shows`;
      const fetchShows = async () => {
        const response = await fetch(link);
        const jsonBody = await response.json();
        setShows(
          jsonBody.sort((a: ITvShow, b: ITvShow) => {
            const fa = a.name;
            const fb = b.name;

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }

            return 0;
          })
        );

        setView(false);
      };
      fetchShows();
    }
  }, [showID]);

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  const filteredEpisodes = searchCriteriaEpisodes(eps, input);
  const filteredShows: ITvShow[] = searchCriteriaTvShows(shows, input);

  const handleShowDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };
  const handleShowSelector = (id: number) => {
    if (showID === id) {
      setShowID(NaN);
      setView(false);
    } else {
      setShowID(id);
      setView(true);
      console.log(view);
    }
    setShowDropDownOpen(!showDropDownOpen);
  };
  const handleShowSelectorOnClick = (id: number) => {
    if (showID === id) {
      setShowID(NaN);
      setView(false);
    } else {
      setShowID(id);
      setView(true);
      console.log(view);
    }
  };

  const filteredEpisodesRender = filteredEpisodes.map((episode) => {
    return <EpisodeView episodeInfo={episode} key={episode.id} />;
  });
  const filteredShowsRender = filteredShows.map((show: ITvShow) => {
    return (
      <TvShowView
        onClick={() => handleShowSelectorOnClick(show.id)}
        tvShowInfo={show}
        key={show.id}
      />
    );
  });

  // const orderShows = (TVshows: ITvShow[]) => {TVshows.sort((a, b) => {
  //   const fa = a.name;
  //   const fb = b.name;

  //   if (fa < fb) {
  //     return -1;
  //   }
  //   if (fa > fb) {
  //     return 1;
  //   }

  //   return 0;
  // })}

  return (
    <>
      <header className="header">
        <div className="header-div">
          <h1 className="title" onClick={() => setView(false)}>
            TV show DataBase
          </h1>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={handleShowDropDownOpen}
            >
              Select TV show ▾
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
          <div className="search-bar-n-amount">
            <SearchBar value={input} onChange={handleSearchInput} />
            {view ? (
              <p className="display-amount">
                displaying {filteredEpisodes.length} out of{" "}
                {filteredEpisodes.length}
              </p>
            ) : (
              <p className="display-amount">
                displaying {filteredShows.length} out of {filteredShows.length}
              </p>
            )}
          </div>
        </div>
        <img src={headerImg} alt="header" className="header-img" />
      </header>
      {!view ? (
        <div className="all-episodes">{filteredShowsRender}</div>
      ) : (
        <div className="all-episodes">{filteredEpisodesRender}</div>
      )}
      <Footer />
    </>
  );
}

export default App;
