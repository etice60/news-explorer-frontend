import "./NewsCard.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { KeywordContext } from "../../contexts/KeywordContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";

const NewsCard = ({
  onSignUp,
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
}) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeywordContext);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  const formattedDate = new Date(
    newsData.publishedAt || newsData.date
  ).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    handleSaveArticle({ newsData, keyword, token });
  };

  const handleRemoveClick = () => {
    const token = localStorage.getItem("jwt");
    handleRemoveArticle({ newsData, token });
  };

  return (
    <div className="card__container">
      {currentPage === "/saved-news" && (
        <>
          <div className="card__keyword">{newsData.keyword}</div>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text-hidden"
            }`}
          >
            Remove from Saved
          </div>
          <button
            className="card__button-delete"
            onClick={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}
      {isLoggedIn && currentPage === "/" ? (
        <button
          className={`card__button-bookmark ${
            savedArticles.some(
              (savedArticle) => savedArticle.link === newsData.url
            )
              ? "card__button-bookmark_marked"
              : ""
          }`}
          onClick={handleBookmarkClick}
        />
      ) : (
        ""
      )}
      {!isLoggedIn && (
        <>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text-hidden"
            }`}
          >
            Sign in to save articles
          </div>
          <button
            className="card__button-bookmark"
            onClick={onSignUp}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}
      <img
        src={newsData.image || newsData.urlToImage}
        alt={newsData.link || newsData.url}
        className="card__image"
      />
      <div className="card__text">
        <p className="card__date-published">{formattedDate}</p>
        <h3 className="card__title">{newsData.title}</h3>
        <p className="card__content">{newsData.text || newsData.description}</p>
        {newsData.source && (
          <p className="card__source">
            {newsData.source.name || newsData.source}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
