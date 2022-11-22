import { IEpisode } from "../components/EpisodeListView";


export function selectEpisode(episodes: IEpisode[], option: number){
    return episodes.filter((episode: IEpisode) => episode.id === option)
}