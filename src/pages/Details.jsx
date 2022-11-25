import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import SolicitorCard from "../components/SolicitorCard";
import data from "../data/housing-solicitors";

export default function Details() {
  // Here we map through all of the firms in the list
  // returning a SolicitorCard component for each one (singleFirm)
  const firm = data.map((singleFirm) => {
    return <SolicitorCard {...singleFirm} />;
  });

  return (
    <>
      <h2>Law Firm Details Page</h2>
      <h5 className="my-4 lead">
        The organisations listed below are known to offer Legal Aid services for
        your kind of case.
      </h5>
      <p>
        Use the contact details below to try to arrange an appointment and/or
        for them to agree to represent you and your case at court.
        <br />
        When you have either found representation, or exhausted the list of
        contacts click the button at the bottom of the page to complete our
        pre-court form to support you and your legal counsel to best represent
        your case in court.
      </p>
      <div className="pt-2">
        {firm}

        <div className="text-center">
          <Link to="/hassolicitor" role="button" className="m-2 btn btn-success ">
            I have found a solicitor to represent me
          </Link>
          <Link to="/nosolicitor" role="button" className="m-2 btn btn-danger ">
            I was not able to find a solicitor to represent me
          </Link>
        </div>

        <Alert variant="danger" className="my-4 mx-6 d-flex align-items-center">
          <div className="flex-shrink-0 me-2 fs-2">⚠️</div>
          <div>
            Please note: It is very important that you have your case heard, so
            <strong> DO NOT MISS YOUR COURT DATE</strong>. Use this website's
            report to show the Judge/Duty Solicitor at court on the day about
            your case and have your side of the case put across!
          </div>
        </Alert>
      </div>
    </>
  );
}
