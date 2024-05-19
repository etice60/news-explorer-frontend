import "./NoResults.css";
import NoResultsImage from "../../images/NoResults.svg";

const NoResults = () => {
  return (
    <div className="noresults__container">
      <img
        className="noresults__image"
        src={NoResultsImage}
        alt="No Results"
      ></img>
      <p className="noresults__title">Nothing Found</p>
      <p className="noresults__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NoResults;
