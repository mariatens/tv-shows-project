import { IEpisode } from "../components/EpisodeListView";

export function searchCriteria(episodes: IEpisode[], searchItem: string): IEpisode[] {
  return episodes.filter((episode: IEpisode) => {
    return episode.name.toLowerCase().includes(searchItem.toLowerCase())|| episode.summary.toLowerCase().includes(searchItem.toLowerCase())
  })
}