import React, {useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import "./nav.css";
import home from "../../img/home.png";

export const Nav = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();

  //It has to be connected from firebase 
  // const userLog = false; 
  const { currentUser, logout } = useAuth();

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
    { title: "About", link: "/" },
    { title: "Eligibity", link: "/eligibility" },
    { title: "Solicitor Info", link: "/details" },
    { title: "Court Form", link: "/" },
    { title: "Contact", link: "/" },
  ];

  return (
    <nav className="nav-cont">
      <div className="cont-log">
        <img src={home} alt="" />
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
      </div>
    </nav>
  );
};
