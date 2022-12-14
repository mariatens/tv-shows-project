import { generateEpCode } from "./episodeCode";
import { IEpisode } from "../components/EpisodeView";

const episodes: IEpisode[] = [
  {
    id: 490,
    url: "https://www.tvmaze.com/episodes/490/lost-girl-1x01-its-a-fae-fae-fae-fae-world",
    name: "It's a Fae, Fae, Fae, Fae World",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2010-09-12",
    airtime: "22:00",
    airstamp: "2010-09-13T01:00:00+00:00",
    runtime: 60,
    rating: { average: 7.5 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/298/746791.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/298/746791.jpg",
    },
    summary:
      "<p>In the series opener, Bo's impulsive decision to protect a young woman in jeopardy (Kenzi) has unexpected consequences: the two become fast friends, while Bo is swept up into the secret world of the Fae, learning for the first time about these ancient people and the birthright she never knew existed.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/490" },
      show: { href: "https://api.tvmaze.com/shows/12" },
    },
  },
  {
    id: 491,
    url: "https://www.tvmaze.com/episodes/491/lost-girl-1x02-where-theres-a-will-theres-a-fae",
    name: "Where There's a Will, There's a Fae",
    season: 1,
    number: 2,
    type: "regular",
    airdate: "2010-09-19",
    airtime: "22:00",
    airstamp: "2010-09-20T01:00:00+00:00",
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/16/41912.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/16/41912.jpg",
    },
    summary:
      "<p>Fresh from the realization that she is a member of the Fae, Bo is approached by a strange client, Will, a real life Will O' the Wisp. The storehouse of jewels he's collected over the centuries has been stolen...by a human! While this line of work is foreign to Bo, Will offers her an irresistible payment - information about where she might have come from. As Bo gets involved in the recovery of Will's gems, she finds the shocking truth about the thief... and the weird and deadly forces that seem to also be on the trail of the jewels.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/491" },
      show: { href: "https://api.tvmaze.com/shows/12" },
    },
  },
  {
    id: 492,
    url: "https://www.tvmaze.com/episodes/492/lost-girl-1x03-oh-kappa-my-kappa",
    name: "Oh Kappa, My Kappa",
    season: 1,
    number: 3,
    type: "regular",
    airdate: "2010-09-26",
    airtime: "22:00",
    airstamp: "2010-09-27T01:00:00+00:00",
    runtime: 60,
    rating: { average: 7.5 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/400/1002195.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/400/1002195.jpg",
    },
    summary:
      "<p>When a missing coed's mother comes begging for help, Bo and Kenzi go undercover on the local college campus to find her. Using all of Bo's unique talents and Kenzi's con artist skills, the women dig into the mysterious underbelly of the school's sorority system and find a surprising Fae connection, while racing to save the kidnapped young coed.<br><br>On the personal side, Bo and Dyson enjoy the afterglow of their first sexual encounter, both wondering where it's leading them... until Trick's stern objections and Kenzi's excited pressuring threatens to put a rift between Bo and Dyson before they're even a couple.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/492" },
      show: { href: "https://api.tvmaze.com/shows/12" },
    },
  },
];

test("generateEpCode generates the season and episode code following guidelines", () => {
  expect(generateEpCode(episodes[0])).toBe("S01E01");
  expect(generateEpCode(episodes[1])).toBe("S01E02");
  expect(generateEpCode(episodes[2])).toBe("S01E03");
});
