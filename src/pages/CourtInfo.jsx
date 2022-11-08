import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function CourtInfo() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/*add HTML code to this block before the final </> tag  */}
      <h2>Court Info Questionnaire</h2>
      <div className="lead mb-3">
        Please complete this form ahead of your court date ready to share with
        your solicitor so they have all of the information they need to best
        support you.
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="question1">
          <Form.Label>Queston 1</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
          <Form.Text className="text-muted">
            Add additional instructions if needed here.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="question2" required>
          <Form.Label>Question 2 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>

        <Form.Group className="col-sm-6 mb-3">
          <Form.Label for="question3">
            Pre-defined drop-down list queston
          </Form.Label>
          <Form.Select className="form-select" id="question3">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="question4">
          <Form.Label>Question 4</Form.Label>
          <textarea
            className="form-control"
            placeholder="Longer form answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Form.Group>
        <Button className="disabled mt-4">🖨 Print for Court</Button>
      </Form>
    </>
  );
}

export default CourtInfo;
