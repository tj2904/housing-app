import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import home from "../../img/home.png";

export const Navigation = () => {
  // useState sets an error message if needed
 
  // navigate allows for sending the user to a given route
  

  

  const menu = [
    //{ title: "Home", link: "/" },
    // { title: "About", link: "/" },
    { title: "Eligibility", link: "/eligibility" },
    { title: "Solicitor Info", link: "/details" },
    { title: "Court Form", link: "/court" },
    // { title: "Contact", link: "/" },
  ];

  return (
    <Navbar className="navbar-dark bg-primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={home}
            alt="logo"
            width="30"  
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Housing Eviction Help
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((res) => {
              return <Nav.Link href={res.link} className="nav-link active">{res.title}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
