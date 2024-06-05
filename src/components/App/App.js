import "./App.css";

/* ---------------------- React ------------------- */

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

/* ------------- Components ----------------- */
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import SuccessModal from "../SuccessModal/SuccessModal";
import ProtectedRoute from "../ProtectedRoute.js/ProtectedRoute";

/* ---------------- Contexts ------------------- */

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { MobileContext } from "../../contexts/MobileContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import { HasSearchedContext } from "../../contexts/HasSearchContext";

/* ---------------- Other Imports ------------------- */

import { getSearchResults } from "../../utils/newsApi";
import { registration, authorization, checkToken } from "../../utils/auth";
import {
  getSavedArticles,
  addSavedArticle,
  removeSavedArticle,
} from "../../utils/Api";

function App() {
  /* ---------------- UseStates ------------------- */
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);
  console.log(savedArticles);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken("jwt", jwt)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  //--------universal handle submit-------------//
  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        if (activeModal === "registerModal") {
          setServerError(false);
        } else {
          setServerError(false);
          handleCloseModal();
        }
      })
      .catch((error) => {
        console.log(error);
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //-----------overlay and esc modal close------//

  useEffect(() => {
    const handleEsacape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEsacape);
    return () => document.removeEventListener("keydown", handleEsacape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  //----------callback functions for login------//
  const handleLogin = (email, password) => {
    setIsLoading(true);
    authorization(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          checkToken(res.token).then((data) => {
            setCurrentUser(data);
            setIsLoggedIn(true);
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error("login failed", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //-------callback functions for regisatration-----//
  const handleRegistration = (values) => {
    const makeRequest = () => {
      return registration(values).then((user) => {
        if (user) {
          handleSuccessModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  const handleLoginModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("loginModal");
  };

  const handleRegisterModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("registerModal");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setIsSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSearching(false);
        setSearchError(true);
      });
  };

  const handleAltClick = () => {
    if (activeModal === "loginModal") {
      handleCloseModal();
      handleRegisterModal();
    } else {
      handleCloseModal();
      handleLoginModal();
    }
  };

  //-----------user logout callbacks--------//

  const history = useHistory("");
  const handleLogout = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  //---------Saving article callback--------//

  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);
          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    }
  };

  //---------------remove article callbcak--------//

  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token)
      .then(() => {
        const unsaveNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(unsaveNewsArticles);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`page ${location.pathname === "/saved-news" ? "no-bg" : ""}`}
    >
      {" "}
      <CurrentPageContext.Provider
        value={{ currentPage, setCurrentPage, activeModal }}
      >
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultsContext.Provider value={{ searchResults }}>
              <SavedArticlesContext.Provider
                value={{ savedArticles, setSavedArticles }}
              >
                <KeywordContext.Provider value={{ keyword, setKeyword }}>
                  <MobileContext.Provider
                    value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
                  >
                    <Header
                      handleRegisterModal={handleRegisterModal}
                      onLogin={handleLoginModal}
                      onLogout={handleLogout}
                      handleSuccessModal={handleSuccessModal}
                    ></Header>
                    <Switch>
                      <Route exact path="/">
                        <Main
                          handleSearch={handleSearch}
                          searchError={searchError}
                          handleRemoveArticle={handleRemoveArticle}
                          handleSaveArticle={handleSaveArticle}
                          isLoading={isSearching}
                          onSignUp={handleRegisterModal}
                        ></Main>
                      </Route>
                      <ProtectedRoute path="/saved-news">
                        <SavedNews
                          handleRemoveArticle={handleRemoveArticle}
                        ></SavedNews>
                      </ProtectedRoute>
                    </Switch>
                    <Footer></Footer>

                    {activeModal === "loginModal" && (
                      <LoginModal
                        isOpen={activeModal === "create"}
                        handleAltClick={handleAltClick}
                        isLoading={isLoading}
                        handleRegisterModal={handleRegisterModal}
                        handleLogin={handleLogin}
                        serverError={serverError}
                        onClose={handleCloseModal}
                      ></LoginModal>
                    )}

                    {activeModal === "registerModal" && (
                      <RegisterModal
                        handleRegistration={handleRegistration}
                        handleAltClick={handleAltClick}
                        isLoading={isLoading}
                        serverError={serverError}
                        onSubmit={handleLoginModal}
                        onClose={handleCloseModal}
                        isOpen={activeModal === "create"}
                      ></RegisterModal>
                    )}
                    {activeModal === "successModal" && (
                      <SuccessModal
                        isOpen={activeModal === "create"}
                        onClose={handleCloseModal}
                        onSubmit={handleLoginModal}
                      ></SuccessModal>
                    )}
                  </MobileContext.Provider>
                </KeywordContext.Provider>
              </SavedArticlesContext.Provider>
            </SearchResultsContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
