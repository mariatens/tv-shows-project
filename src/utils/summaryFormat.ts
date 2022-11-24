import { IEpisode } from "../components/EpisodeListView";
import { ITvShow } from "../components/TvShowListView";

export function formatSummary(episode: IEpisode | ITvShow): string {
  return episode.summary.slice(3, episode.summary.length - 4);
}
