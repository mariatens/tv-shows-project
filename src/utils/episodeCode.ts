import { IEpisode } from "../components/EpisodeListView";

export function generateEpCode(episode: IEpisode): string {
  const epCode = [];
  if (episode.season > 9) {
    epCode.push(`S${episode.season}`);
  } else {
    epCode.push(`S0${episode.season}`);
  }
  if (episode.number > 9) {
    epCode.push(`E${episode.number}`);
  } else {
    epCode.push(`E0${episode.number}`);
  }
  return epCode.join("");
}
