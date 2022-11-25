import { IEpisode } from "../components/EpisodeView";

export function searchCriteria(
  episodes: IEpisode[],
  searchItem: string
): IEpisode[] {
  return episodes.filter((episode: IEpisode) => {
    const name = episode.name.toLowerCase().includes(searchItem.toLowerCase())
    return (
      episode.summary ?
      name || episode.summary.toLowerCase().includes(searchItem.toLowerCase())
      : name
    );
  });
}
