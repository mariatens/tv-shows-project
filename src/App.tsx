import { Footer } from "./components/Footer";
import episodes from "./episodes.json";
import { EpisodesMap } from "./components/EpisodeListView";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");

  const handleSearchInput = (searchInput: string) => {
    setInput(searchInput);
  };

  return (
    <>
      <SearchBar value={input} onChange={handleSearchInput} />
      <p>
        {" "}
        {episodes.map((episode) => {
          return <EpisodesMap episodeInfo={episode} key={episode.id} />;
        })}
      </p>
      <Footer />
    </>
  );
}

export default App;
