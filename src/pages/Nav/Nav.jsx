import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./nav.css";
import home from "../../img/home.png";

export const Nav = () => {

  //It has to be connected from firebase 
  const userLog = false; 

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
        {!userLog ? (
          <>
            <Link to="/Register" className="btn btn-info">
              Register
            </Link>{" "}
            <Link to="/Register" className="btn btn-info">
              Login
            </Link>{" "}
          </>
        ) : (
          <Link to="/signup" className=" btn btn-info">
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
};
