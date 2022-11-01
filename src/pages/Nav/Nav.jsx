import React, {useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import "./nav.css";
import home from "../../img/home.png";

export const Nav = () => {

  // useState sets an error message if needed
  const [error, setError] = useState("");
  // navigate allows for sending the user to a given route
  const navigate = useNavigate();

  //It has to be connected from firebase 
  // const userLog = false; 

  // useAuth() is provided by the context and currentUser is an object
  // if it is present then a user is logged in - used in the conditional
  // rendering of the login/logout buttons
  const { currentUser, logout } = useAuth();

  // this function logs the user out
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }


  const menu = [
    { title: "Home", link: "/" },
    // { title: "About", link: "/" },
    { title: "Eligibility", link: "/eligibility" },
    { title: "Solicitor Info", link: "/details" },
    { title: "Court Form", link: "/court" },
    // { title: "Contact", link: "/" },
  ];

  return (
    <nav className="nav-cont">
      <div className="cont-log">
        <img src={home} alt="logo" />
        <h3>HOUSING APP</h3>
      </div>
      <ul className="items-men">
        {menu.map((res) => {
          return (
            <li>
              <NavLink to={res.link}>{res.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="cont-btns">
        {!currentUser ? (
          <>
            <Link to="/signup" className="btn btn-info">
              Register
            </Link>{" "}
            <Link to="/login" className="btn btn-info">
              Login
            </Link>{" "}
          </>
        ) : (
          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </nav>
  );
};
