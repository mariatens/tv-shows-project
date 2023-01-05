export interface ITvShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: null | number;
  averageRuntime: null | number;
  premiered: null | string;
  ended: null | string;
  officialSite: null | string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: null | {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  };
  webChannel: {
    id: number;
    name: string;
    country: null | {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: null | string;
  } | null;
  dvdCountry: null | string;
  externals: {
    tvrage: number;
    thetvdb: null | number;
    imdb: null | string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
    };
    nextepisode?: {
      href: string;
    };
  };
}

interface TvShowProps {
  tvShowInfo: ITvShow;
  onClick: () => void;
}

function TvShowView(props: TvShowProps): JSX.Element {
  return (
    <button onClick={props.onClick} className="episode">
      <h1>{props.tvShowInfo.name}</h1>
      <img src={props.tvShowInfo.image.medium} alt="" />
      {/* <div>{formatSummary(props.tvShowInfo.summary)}</div> */}
    </button>
  );
}
