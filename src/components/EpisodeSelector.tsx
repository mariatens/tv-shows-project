// https://api.tvmaze.com/shows/SHOW_ID/episodes where SHOW_ID should be replaced
// with the numeric id of the selected show.

// link name to id
 
import shows from '../shows.json'
import { IEpisode } from './EpisodeListView'
import {useState, useEffect} from "react"

interface EpisodeSelectorProps {
    epId: number;
    epName: string;
  }

export function EpisodeSelector(props: EpisodeSelectorProps): JSX.Element{
    const [show, setShow] = useState<IEpisode[]>()
  
    // useEffect(() => {
    //     const fetchEp = async () => {
    //       const response = await fetch(
    //       `https://api.tvmaze.com/shows/${show}/episodes`);
    //       const jsonBody = await response.json();
    //       setShow(jsonBody);
    //     };
    //     fetchEp();
    //   }, []);

      
    return (
                <li className="menu-item">
                    <button>{props.epName}</button>
                </li>
          );
}