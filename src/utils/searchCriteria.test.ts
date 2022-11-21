import { searchCriteria } from "./searchCriteria";
import episodes from "../episodes.json";

test("searchCriteria filters episodes that include the searchInput in either summary or name", () => {
  expect(searchCriteria(episodes, "winter is coming")).toEqual([episodes[0]]);
});
