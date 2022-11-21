import { formatSummary } from "../utils/summaryFormat";
import { generateEpCode } from "../utils/episodeCode";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface EpisodeMapProps {
  episodeInfo: IEpisode;
}

export function EpisodesMap(props: EpisodeMapProps): JSX.Element {
  return (
    <>
    <div className = "episode">
      <h1>
        {props.episodeInfo.name} - {generateEpCode(props.episodeInfo)}
      </h1>
      <img src={props.episodeInfo.image.medium} alt="" />
      <div>{formatSummary(props.episodeInfo)}</div>
      </div>
    </>
  );
}
