import { APIKey, parseCurrentDate, parsePreviousWeek } from "./constants";
import { processServerResponse } from "./utils";

export const getSearchResults = (keyword) => {
  return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${APIKey}
  `).then(processServerResponse);
};
