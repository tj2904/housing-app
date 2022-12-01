import React  from "react";
import { Link } from "react-router-dom";
import checkScreen from "../img/legalAidCheckScreen.png";

function Eligibility() {
  return (
    <>
      <h2>Legal Aid Eligibility</h2>

      {/* Add the redirect to the gov.uk form here - maybe an iframe? */}

      <p className="lead">
        Please check if you qualify for Legal Aid using the government site:
      </p>

      <p>
        Examples of images they will see, ie. both outcomes and the page the
        should see first.
      </p>
      <p>
        {" "}
        Once you have completed the Government's eligibility check, come back to
        this page and select the image that matches your outcome. If you may
        quality for Legal Aid, then we will provide you with a list of
        Solicitors that maybe able to help you.
      </p>
      <p>
        If you do not qualify for Legal Aid, then you should take the form you
        have just downloaded with you on your court date.
      </p>
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
      <a href="#" target="_blank" rel="noreferrer">
        <img
          src="https://via.placeholder.com/300x200?text=You_Are_Not_Eligible"
          className="fluid m-2"
          alt="alt text"
        />
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <img
          src="https://via.placeholder.com/300x200?text=You_Are_Eligible_screen"
          className="fluid m-2"
          alt="alt text"
        />
      </a>
      {/* 
      This approach doesn't work
      
      <iframe
        src="https://www.gov.uk/check-legal-aid"
        width={1000}
        height={500}
        sandbox="allow-scripts allow-modal allow-same-origin"
      ></iframe> */}

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
    </>
  );
}

export default Eligibility;
