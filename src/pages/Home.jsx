import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "./Nav/Nav";

function Home() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    // This needs re-doing completely to be the landing/home page that explains the app and it's purpose.
    // Nearly all of the code below should be deleted and replaced with a cool looking page!
 <>
      <Nav /> 
      <Card>
        <Card.Header as="h3" className="text-center">
          Home Page
        </Card.Header>
        <Card.Body>
          <div>
            <p>Update this page.</p>
            <p>
              The block below is conditionally rendered depending on the status
              of the <code>currentUser</code> for demonstration purposes and
              will be removed.
            </p>
          </div>
          <div className="text-center d-flex justify-content-evenly ">
            <Link to="/eligibility">Eligibility</Link>
            <Link to="/details">Solicitor Info</Link>
            <Link to="/court">Court Form 🔒</Link>
          </div>
        </Card.Body>
        <Card.Footer className="text-center d-flex justify-content-evenly ">
          <Link to="/login" role="button" className="btn btn-warning">
            Login
          </Link>

          <Link to="/signup" className=" btn btn-secondary">
            Sign Up
          </Link>

          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </Card.Footer>
      </Card>
      {error && <Alert variant="danger">{error}</Alert>}

      {currentUser ? (
        <Card
          body
          className="mt-4 fs-5 text-center mb-0"
          bg="success"
          text="white"
        >
          User is signed in
        </Card>
      ) : (
        <Card
          body
          className="mt-4 fs-5 text-center mb-0"
          bg="danger"
          text="white"
        >
          No user is signed in
        </Card>
      )}
    </>
  );
}

export default Home;
