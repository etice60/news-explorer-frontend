import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { useContext } from "react";

const SavedNewsHeader = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  const keywordArray = userArticles.map((article) => article.keyword);
  const getKeywordString = (keywords) => {
    if (keywordArray.length === 0) {
      return "";
    }
    if (keywordArray.length === 1) {
      return `${keywordArray}`;
    }
    if (keywordArray.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }
      const sortedKeywordArray = [];
      for (const item in count) {
        sortedKeywordArray.push([item, count[item]]);
      }
      sortedKeywordArray.sort((a, b) => {
        return b[1] - a[1];
      });
      if (sortedKeywordArray.length === 1) {
        return `${sortedKeywordArray[0][0]}`;
      } else if (sortedKeywordArray.length === 2) {
        return `${sortedKeywordArray[0][0]} and ${sortedKeywordArray[1][0]}`;
      } else {
        return `${sortedKeywordArray[0][0]}, ${sortedKeywordArray[1][0]}, and ${
          sortedKeywordArray.length - 2
        }more`;
      }
    } else {
      return null;
    }
  };
  const keywordString = getKeywordString(keywordArray);

  return (
    <div className="saved__news">
      <div className="saved__news-container">
        <div className="saved__news-title">Saved articles</div>
        <h1 className="saved__news-header">
          {currentUser.name}, you have {userArticles.length} saved article
          {userArticles.length !== 1 ? "s" : ""}
        </h1>
        <div className="saved__news-keywords-container">
          <p className="saved__news-keyword-title"> By Keywords:</p>
          <p className="saved__news-keywords">{keywordString}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
