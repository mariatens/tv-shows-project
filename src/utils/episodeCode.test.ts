import { generateEpCode } from "./episodeCode";
import episodes from "../episodes.json";

test("generateEpCode generates the season and episode code following guidelines", () => {
  expect(generateEpCode(episodes[0])).toBe("S01E01");
  expect(generateEpCode(episodes[1])).toBe("S01E02");
  expect(generateEpCode(episodes[2])).toBe("S01E03");
});
