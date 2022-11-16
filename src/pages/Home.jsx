import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
 

  return (
    // This needs re-doing completely to be the landing/home page that explains the app and it's purpose.
    // Nearly all of the code below should be deleted and replaced with a cool looking page!
 <>
 <h1>Page Test</h1>
 <p className="lead">Some intro text here that will grab attention/explain the site...</p>
 <Alert variant="danger">Here we can use this element to add the warning about needing to attend court maybe?</Alert>

    </>
  );
}

export default Home;
