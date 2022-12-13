import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import home from "../../img/home.png";

export const Navigation = () => {

  const menu = [
    { title: "Eligibility", link: "/eligibility" },
    { title: "Solicitor Information", link: "/details" },
    { title: "Court Form", link: "/court" },
  ];

  return (
    <Navbar className="navbar-dark bg-primary mb-4" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={home}
            alt="logo"
            width="30"  
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Eviction Prevention
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((res) => {
              return <Nav.Link href={res.link} key={res.title} className="nav-link active">{res.title}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
