import "./Footer.css";
import { Link } from "react-router-dom";
import gitHub from "../../images/github-icon.svg";
import linkedIn from "../../images/linkedin-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &#169; {currentYear} Supersite, Powered by News API{" "}
      </p>
      <div className="footer__links">
        <div className="footer__buttons">
          <Link to="/">
            <button className="footer__button" type="text">
              Home
            </button>
          </Link>
          <a
            href="https://tripleten.com/"
            className="footer__button"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a href="https://github.com/etice60" target="_blank" rel="noreferrer">
            <img src={gitHub} className="footer__icon" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/elizabethtice/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedIn}
              className="footer__icon-button"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
