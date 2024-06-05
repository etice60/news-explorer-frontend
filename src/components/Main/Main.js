import "./Main.css";
import { useContext } from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import { HasSearchedContext } from "../../contexts/HasSearchContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import NoResults from "../NoResults/NoResults";

const Main = ({
  isLoading,
  searchError,
  handleSearch,
  handleSaveArticle,
  handleRemoveArticle,
  onSignUp,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultsContext);
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch}></SearchForm>
      <div>
        {hasSearched && searchResults.length > 0 ? (
          <NewsCardList
            onSignUp={onSignUp}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
          ></NewsCardList>
        ) : hasSearched && searchResults.length === 0 ? (
          <NoResults />
        ) : isLoading ? (
          <Preloader />
        ) : searchError === true ? (
          <p>
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : (
          ""
        )}
      </div>
      <About></About>
    </main>
  );
};

export default Main;
