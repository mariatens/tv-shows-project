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
  rating: { average: number | null };
  runtime: number;
  image?: null | {
    medium: string;
    original: string;
  };
  summary?: string;
  _links: {
    self: { href: string };
    show?: { href?: string };
  };
}

interface EpisodeViewProps {
  episodeInfo: IEpisode;
}

export function EpisodeView(props: EpisodeViewProps): JSX.Element {
  return (
    <div className="episode">
      <h1>
        {props.episodeInfo.name} - {generateEpCode(props.episodeInfo)}
      </h1>
      {props.episodeInfo.image && <img src={props.episodeInfo.image.medium} alt="" />}
      <div>
        {props.episodeInfo.summary && formatSummary(props.episodeInfo.summary)}
      </div>
    </div>
  );
}
