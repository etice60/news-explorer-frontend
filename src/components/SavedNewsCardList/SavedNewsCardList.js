import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SavedNewsCardList = ({ handleRemoveArticle }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  return (
    <section className="savednews__newscards">
      <div className="savednews__newscards-container">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article) => (
            <NewsCard
              newsData={article}
              key={article.link}
              handleRemoveArticle={handleRemoveArticle}
            ></NewsCard>
          ))}
      </div>
    </section>
  );
};

export default SavedNewsCardList;
