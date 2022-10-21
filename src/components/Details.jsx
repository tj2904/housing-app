import React from "react";
import { Link } from "react-router-dom";

export default function Details() {

  return (
    <>
      <h2>Law Firm Details page</h2>
      <Link to="/court" role="button" className="m-2 btn btn-info ">
        Complete Court Form
      </Link>
    </>
  );
};
