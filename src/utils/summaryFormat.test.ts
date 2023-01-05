import { formatSummary } from "./summaryFormat";
// import episodes from "../episodes.json";
import shows from "../shows.json";

test("remove html tags", () => {
  expect(formatSummary(shows[2].summary)).toBe(
    "Girl Meets World is based on ABC's hugely popular sitcom, Boy Meets World (1993). Set in New York City, the show tells the wonderfully funny heartfelt stories that Boy Meets World is renowned for - only this time from a tween girl's perspective - as the curious and bright 7th grader Riley Matthews and her quick-witted friend Maya Fox embark on an unforgettable middle school experience. But their plans for a carefree year will be adjusted slightly under the watchful eyes of Riley's parents - dad Cory, who's also a faculty member (and their new History teacher), and mom Topanga, who owns a trendy after school hangout that specializes in pudding."
  );
});
