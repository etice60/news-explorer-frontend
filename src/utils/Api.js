// import { processServerResponse } from "./utils";

export const baseUrl = "http://localhost:3000";

// export const getSavedArticles = () => {
//   const token = localStorage.getItem("jwt");
//   return fetch(`${baseUrl}/articles`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     authorization: `Bearer ${token}`,
//   }).then(processServerResponse);
// };

export const addSavedArticle = (newsData, keyword) => {
  // const token = localStorage.getItem("jwt");
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        id: "65f7371e7bce9e7d331b11a0",
        title: newsData.title,
        text: newsData.description,
        date: newsData.publishedAt,
        source: newsData.source.name,
        link: newsData.url,
        image: newsData.urlToImage,
        keyword: keyword,
      },
    });
  });
  // return fetch(`${baseUrl}/articles`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({
  //     title: newsData.title,
  //     text: newsData.description,
  //     date: newsData.publishedAt,
  //     source: newsData.source.name,
  //     link: newsData.url,
  //     image: newsData.urlToImage,
  //     keyword: keyword,
  //   }),
  // }).then(processServerResponse);
};

export const removeSavedArticle = (selectedArticle) => {
  // const token = localStorage.getItem("jwt");
  return new Promise((resolve) => {
    resolve();
  });
  // return fetch(`${baseUrl}/articles/${selectedArticle._id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   },
  // }).then(processServerResponse);
};

export function getSavedArticles() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "65f7368dfb74bd6a92114c85",
        source: "THE ASSOCIATED PRESS",
        title: "PGA Championship at a glance",
        description:
          "A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club",
        link: "https://apnews.com/article/pga-championship-glance-valhalla-cf9331b47d0320a02bc92e67fbf26e6f",
        urlToImage:
          "https://dims.apnews.com/dims4/default/51a58c5/2147483647/strip/true/crop/6264x4174+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb7%2Fab%2F5e5a8e1bf04925a148b6a00b3eb0%2Fae5f76f5550549d185ed2ae286447961",
        publishedAt: "Updated 9:23 PM EDT, May 16, 2024",
        content:
          "LOUISVILLE, Ky. (AP) — A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club (all times EDT): LEADING: Xander Schauffele at 9-under 62. CHASING: Tony Finau, Sahith Theegala and Mark Hubbard at 65. BROKEN RECORDS: Schauffele set the PGA Championship record with his 62. The 64 rounds under par broke a PGA Championship record for most sub-par scores in the first round. The previous record was 60 at Medinah in 2006. TIED RECORDS: Schauffeles 62 ties the major championship mark. He already had a 62 at the U.S. Open in 2023, along with Rickie Fowler. Branden Grace shot 62 in the 2017 British Open at Royal Birkdale. TIGER TALES: Tiger Woods was on the verge of his first sub-par round in a major since the 2022 PGA Championship. He three-putted for bogey on his last two holes for a 1-over 72. GRAND SLAM 2024: Masters champion Scottie Scheffler opened with a 67 and was five shots back in pursuit of his second straight major..",
        keyword: "PGA",
      },
      {
        id: "65f7368dfb74bd6a92114c85",
        source: "THE ASSOCIATED PRESS",
        title: "PGA Championship at a glance",
        description:
          "A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club",
        link: "https://apnews.com/article/pga-championship-glance-valhalla-cf9331b47d0320a02bc92e67fbf26e6f",
        urlToImage:
          "https://dims.apnews.com/dims4/default/51a58c5/2147483647/strip/true/crop/6264x4174+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb7%2Fab%2F5e5a8e1bf04925a148b6a00b3eb0%2Fae5f76f5550549d185ed2ae286447961",
        publishedAt: "Updated 9:23 PM EDT, May 16, 2024",
        content:
          "LOUISVILLE, Ky. (AP) — A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club (all times EDT): LEADING: Xander Schauffele at 9-under 62. CHASING: Tony Finau, Sahith Theegala and Mark Hubbard at 65. BROKEN RECORDS: Schauffele set the PGA Championship record with his 62. The 64 rounds under par broke a PGA Championship record for most sub-par scores in the first round. The previous record was 60 at Medinah in 2006. TIED RECORDS: Schauffeles 62 ties the major championship mark. He already had a 62 at the U.S. Open in 2023, along with Rickie Fowler. Branden Grace shot 62 in the 2017 British Open at Royal Birkdale. TIGER TALES: Tiger Woods was on the verge of his first sub-par round in a major since the 2022 PGA Championship. He three-putted for bogey on his last two holes for a 1-over 72. GRAND SLAM 2024: Masters champion Scottie Scheffler opened with a 67 and was five shots back in pursuit of his second straight major..",
        keyword: "PGA",
      },
      {
        id: "65f7368dfb74bd6a92114c85",
        source: "THE ASSOCIATED PRESS",
        title: "PGA Championship at a glance",
        description:
          "A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club",
        link: "https://apnews.com/article/pga-championship-glance-valhalla-cf9331b47d0320a02bc92e67fbf26e6f",
        urlToImage:
          "https://dims.apnews.com/dims4/default/51a58c5/2147483647/strip/true/crop/6264x4174+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb7%2Fab%2F5e5a8e1bf04925a148b6a00b3eb0%2Fae5f76f5550549d185ed2ae286447961",
        publishedAt: "Updated 9:23 PM EDT, May 16, 2024",
        content:
          "LOUISVILLE, Ky. (AP) — A brief look at Thursdays opening round at the PGA Championship at Valhalla Golf Club (all times EDT): LEADING: Xander Schauffele at 9-under 62. CHASING: Tony Finau, Sahith Theegala and Mark Hubbard at 65. BROKEN RECORDS: Schauffele set the PGA Championship record with his 62. The 64 rounds under par broke a PGA Championship record for most sub-par scores in the first round. The previous record was 60 at Medinah in 2006. TIED RECORDS: Schauffeles 62 ties the major championship mark. He already had a 62 at the U.S. Open in 2023, along with Rickie Fowler. Branden Grace shot 62 in the 2017 British Open at Royal Birkdale. TIGER TALES: Tiger Woods was on the verge of his first sub-par round in a major since the 2022 PGA Championship. He three-putted for bogey on his last two holes for a 1-over 72. GRAND SLAM 2024: Masters champion Scottie Scheffler opened with a 67 and was five shots back in pursuit of his second straight major..",
        keyword: "PGA",
      },
    ])
  );
}
