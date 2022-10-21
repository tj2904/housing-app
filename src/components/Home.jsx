import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card>
        <Card.Header as="h3" className="text-center">
          Home Page
        </Card.Header>
        <Card.Body>
          <div>
            <p>
             Update at least this <code>div</code>, if not the whole page.
            </p>
            <p>
              The block below is conditionally rendered depending on the status
              of the <code>currentUser</code> for demonstration purposes and will be removed.
            </p>
          </div>
        </Card.Body>
        <Card.Footer className="text-center d-flex justify-content-evenly ">
          <Link to="/login" role="button" className="btn btn-warning">
            Login
          </Link>

          <Link to="/signup" className=" btn btn-info">
            Sign Up
          </Link>

          <Button variant="secondary" onClick={handleLogout}>
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
