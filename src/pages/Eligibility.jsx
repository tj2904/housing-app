import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        should see first
      </p>
      <img
        src="https://via.placeholder.com/300x200?text=start_screen"
        className="fluid m-2"
      />
      <img
        src="https://via.placeholder.com/300x200?text=You_Are_Not_Eligible"
        className="fluid m-2"
      />
      <img
        src="https://via.placeholder.com/300x200?text=You_Are_Eligible_screen"
        className="fluid m-2"
      />
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
        >
          Check if you are eligible for Legal Aid
        </a>
        <Link to="/details" role="button" className="m-2 btn btn-secondary">
          See Details of Solicitors
        </Link>
        <Link to="/court" role="button" className="m-2 btn btn-info ">
          Complete Court Form
        </Link>
      </div>
    </>
  );
}

export default Eligibility;
