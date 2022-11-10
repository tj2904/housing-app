import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Container, Navbar, Nav } from "react-bootstrap";
import home from "../../img/home.png";

export const Navigation = () => {
  // useState sets an error message if needed
  const [error, setError] = useState("");
  // navigate allows for sending the user to a given route
  const navigate = useNavigate();

  //It has to be connected from firebase
  // const userLog = false;

  const menu = [
    //{ title: "Home", link: "/" },
    // { title: "About", link: "/" },
    { title: "Eligibility", link: "/eligibility" },
    { title: "Solicitor Info", link: "/details" },
    { title: "Court Form", link: "/court" },
    // { title: "Contact", link: "/" },
  ];

  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={home}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          HOUSING APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((res) => {
              return <Nav.Link href={res.link}>{res.title}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
