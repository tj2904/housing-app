import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Section1 } from "../components/Sections/Section1";

function Home() {
  return (
    <>
    
        <Section1 />

      <Alert variant="danger" className="mt-4 mx-6 d-flex align-items-center">
        <div className="flex-shrink-0 me-2 fs-2">⚠️</div>
        <div>
          Please note: It is very important that you have your case heard, so
          <strong> DO NOT MISS YOUR COURT DATE</strong>. Use this website's
          report to show the Judge/Duty Solicitor at court on the day about your
          case and have your side of the case put across!
        </div>
      </Alert>
    </>
  );
}

export default Home;
