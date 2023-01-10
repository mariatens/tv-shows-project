import { generateEpCode } from "../utils/episodeCode";
import { formatSummary } from "../utils/summaryFormat";

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
      <h1 className="ep-title">
        {props.episodeInfo.name} - {generateEpCode(props.episodeInfo)}
      </h1>
      {props.episodeInfo.image && (
        <img className="ep-img" src={props.episodeInfo.image.medium} alt="" />
      )}
      <br />
      <div className="ep-summary">
        {props.episodeInfo.summary && formatSummary(props.episodeInfo.summary)}
      </div>
      <br />
    </div>
  );
}
