import { IEpisode } from "../components/EpisodeView";

export function searchCriteriaEpisodes(
  media: IEpisode[],
  searchItem: string
): IEpisode[] {
  return media.filter((item: IEpisode) => {
    const name = item.name.toLowerCase().includes(searchItem.toLowerCase());
    return item.summary
      ? name || item.summary.toLowerCase().includes(searchItem.toLowerCase())
      : name;
  });
}
