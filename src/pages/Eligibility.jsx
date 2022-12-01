import React  from "react";
import { Link } from "react-router-dom";
import checkScreen from "../img/legalAidCheckScreen.png";
import outcomeNo from "../img/outcomeNo.png";
import outcomeYes from "../img/outcomeYes.png";

function Eligibility() {
  return (
    <>
      <h2>Legal Aid Eligibility</h2>

      <p className="lead">
        Please check if you qualify for Legal Aid using the government site:
      </p>

      <p>
        Examples of images they will see, ie. both outcomes and the page the
        should see first.
      </p>
      <p>
        Once you have completed the Government's eligibility check, come back to
        this page and select the image that matches your outcome. If you may
        quality for Legal Aid, then we will provide you with a list of
        Solicitors that maybe able to help you.
      </p>
      <p>
        If you do not qualify for Legal Aid, then you should take the form you
        have just downloaded with you on your court date.
      </p>
      <div className="text-center">
        <a
          href="https://www.gov.uk/check-legal-aid"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={checkScreen}
            className="fluid m-2 img-thumbnail"
            alt="screenshot of the government eligibility check"
          />
        </a>
        <a href="/nosolicitor">
          <img
            src={outcomeNo}
            className="fluid m-2 img-thumbnail"
            alt="alt text"
          />
        </a>
        <a href="/details">
          <img
            src={outcomeYes}
            className="fluid m-2 img-thumbnail"
            alt="alt text"
          />
        </a>
      </div>
{/*
      <div>
        <a
          href="https://www.gov.uk/check-legal-aid"
          role="button"
          className="m-2 btn btn-dark"
          target="_blank"
          rel="noreferrer"
        >
          Check if you are eligible for Legal Aid
        </a>
        <Link to="/details" role="button" className="m-2 btn btn-info">
          See Details of Solicitors
        </Link>
      </div>
*/}
</>
  );
}

export default Eligibility;
