import { searchCriteria } from "./searchCriteria";
import episodes from "../episodes.json";

test("", () => {
  expect(searchCriteria(episodes[0])).toBe(
    "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage."
  );
});
