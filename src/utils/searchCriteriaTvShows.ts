import { ITvShow } from "../components/TvShowView";

export function searchCriteriaTvShows(
  media: ITvShow[],
  searchItem: string
): ITvShow[] {
  return media.filter((item: ITvShow) => {
    const name = item.name.toLowerCase().includes(searchItem.toLowerCase());
    return item.summary
      ? name || item.summary.toLowerCase().includes(searchItem.toLowerCase())
      : name;
  });
}
