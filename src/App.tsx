import { Footer } from "./components/Footer";
import episodes from "./episodes.json";
import { EpisodesMap } from "./components/EpisodeListView";

function App(): JSX.Element {
  return (
    <>
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
