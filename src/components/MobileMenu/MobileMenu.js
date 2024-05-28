import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import logoutblack from "../../images/logout-black.svg";
import logoutwhite from "../../images/logout-white.svg";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MobileMenu = ({ onLogin, onLogout }) => {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink className="mobile__link" to="/">
            Home
          </NavLink>
          <NavLink className="mobile__link" to="/saved-news">
            Saved Articles
          </NavLink>
        </nav>
        <button className="mobile__button-loggedin" onClick={onLogout}>
          <p className="mobile__username-loggedin">{currentUser.name}</p>
          <img src={logoutwhite} alt="logout" className="mobile__logout"></img>
        </button>
      </div>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="mobile">
      <div className="mobile__content-savednews">
        <nav className="mobile__links">
          <NavLink className="mobile__link-savednews" to="/">
            Home
          </NavLink>
          <NavLink className="mobile__link-savednews" to="/saved-news">
            Saved Articles
          </NavLink>
        </nav>
        <button className="mobile__button-savednews" onClick={onLogout}>
          <p className="mobile__username-savednews">{currentUser.name}</p>
          <img
            className="mobile__logout-savednews"
            alt="logout"
            src={logoutblack}
          ></img>
        </button>
      </div>
    </div>
  ) : (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink
            className="mobile__link"
            activeClassName="mobile__link-active"
            to="/"
          >
            Home
          </NavLink>
        </nav>
        <button className="mobile__button" onClick={onLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
