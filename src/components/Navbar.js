import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";
import logo from "../Images/starWarLogo.png";

// import authService from "../service/auth.service"

function Navbar() {
  const { user } = useContext(UserContext);
  // to logout a user we need to remove the user from our localStorage and set the User to undifined.
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
      <div className="container-fluid">
        <NavLink exact to="/list" className="navbar-brand px-3">
          <img src={logo} className="logo m-2" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end px-3"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center align-items-center">
            <div
              exact
              to="/"
              activeClassName="active fw-bold letter-spacing"
              className="nav-link mx-2 text-white"
              aria-current="page"
            >
              {user.name}
            </div>

            <div
              exact
              to="/dashboard"
              activeClassName="active fw-bold letter-spacing"
              className="nav-link text-white"
              aria-current="page"
            >
              Since: {user.created}
            </div>

            <NavLink
              exact
              to="/list"
              activeClassName="active"
              className="btn btn-light fw-bold rounded-pill m-2"
            >
              All Movies
            </NavLink>
            {/* Si hay user entonces el botton se vera. onClick removera el user y lo redirecionara hacia home. */}
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="btn btn-light fw-bold rounded-pill m-2"
              onClick={logout}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
