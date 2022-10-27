import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Eligibility() {

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();


  return (
    <>
      <h2>Legal Aid Eligibility Questionnaire</h2>
      <div >
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
