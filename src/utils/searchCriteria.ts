import { IEpisode } from "../components/EpisodeView";
import { ITvShow } from "../components/TvShowView";

export function searchCriteria(
  media: any,
  searchItem: string
): any[] {
  return media.filter((item: any) => {
    const name = item.name.toLowerCase().includes(searchItem.toLowerCase());
    return item.summary
      ? name || item.summary.toLowerCase().includes(searchItem.toLowerCase())
      : name;
  });
}
