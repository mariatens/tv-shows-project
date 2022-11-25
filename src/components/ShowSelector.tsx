// https://api.tvmaze.com/shows/SHOW_ID/episodes where SHOW_ID should be replaced
// with the numeric id of the selected show.

// link name to id

// import shows from "../shows.json";
import { ITvShow } from "./TvShowListView";
// import { useState, useEffect } from "react";

interface TvShowSelectorProps {
  onClick: () => void;
  show: ITvShow;
}

export function TvShowSelector(props: TvShowSelectorProps): JSX.Element {
  return (
    <li className="menu-item">
      <button onClick={props.onClick}>{props.show.name}</button>
    </li>
  );
}
