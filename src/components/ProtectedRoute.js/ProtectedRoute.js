import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to={"/"} />}</Route>
  );
};

export default ProtectedRoute;
