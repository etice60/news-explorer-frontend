import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({ handleRemoveArticle }) => {
  return (
    <section className="saved-news__section">
      <SavedNewsHeader />
      <SavedNewsCardList
        handleRemoveArticle={handleRemoveArticle}
      ></SavedNewsCardList>
    </section>
  );
};

export default SavedNews;
