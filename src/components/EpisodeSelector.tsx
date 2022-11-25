// https://api.tvmaze.com/shows/SHOW_ID/episodes where SHOW_ID should be replaced
// with the numeric id of the selected show.

// link name to id

import { IEpisode } from "./EpisodeView";
import { generateEpCode } from "../utils/episodeCode";

interface EpisodeSelectorProps {
  onClick: () => void;
  episode: IEpisode;
}

export function EpisodeSelector(props: EpisodeSelectorProps): JSX.Element {
  return (
    <li className="menu-item">
      <button onClick={props.onClick}>
        {generateEpCode(props.episode)} - {props.episode.name}
      </button>
    </li>
  );
}
