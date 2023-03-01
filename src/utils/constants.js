// const API_KEY = "AIzaSyAyjF12y5Xar-0a5WrpNeWonZHgWuj01oY";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
