import { IEpisode } from "../components/EpisodeListView";

export function formatSummary(episode: IEpisode): string {
  return episode.summary.slice(3, episode.summary.length - 4);
}
