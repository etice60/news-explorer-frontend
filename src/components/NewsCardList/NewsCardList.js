import "./NewsCardList.css";
import { HasSearchedContext } from "../../contexts/HasSearchContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import { useContext, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ handleSaveArticle, handleRemoveArticle, onSignUp }) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultsContext);
  const [cardDisplayed, setCardsDisplayed] = useState(3);
  const increaseVisibleCards = () => {
    setCardsDisplayed(cardDisplayed + 3);
  };

  return (
    <section className="newscard__section">
      {hasSearched ? (
        <>
          <h2 className="newscard__title">Search Results</h2>
          <div className="newscard__container">
            {searchResults.slice(0, cardDisplayed).map((result) => {
              return (
                <NewsCard
                  newsData={result}
                  key={result.url}
                  handleSaveArticle={handleSaveArticle}
                  handleRemoveArticle={handleRemoveArticle}
                  onSignUp={onSignUp}
                />
              );
            })}
          </div>
          <button
            className={`newscard__button ${
              cardDisplayed >= searchResults.length
                ? "newscard__button_hidden"
                : ""
            }`}
            onClick={increaseVisibleCards}
          >
            Show More
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default NewsCardList;
