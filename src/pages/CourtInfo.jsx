import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CourtInfo() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h2>Court Info Questionnaire</h2>
      <Button className="disabled">🖨 Print for Court</Button>
    </>
  );
}

export default CourtInfo;
