import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function CourtInfo() {
  const navigate = useNavigate();

  return (
    <>
      {/*add HTML code to this block before the final </> tag  */}
      <h2>Court Info Questionnaire</h2>
      <div className="lead mb-3">
        Please complete this form ahead of your court date ready to share with
        your solicitor or the court, so they have all of the information they need to best
        support you.
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="Question1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Question2">
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="Question3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="Question4">
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
       <Form.Group className="mb-3" controlId="Question5">
          <Form.Label>Do you have any dependants?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="Question6">
          <Form.Label>Do you or the people you live with have any significant physical or mental health problems?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
              <Form.Text className="text-muted">
                 Do you have any disability?
              </Form.Text>
        </Form.Group>
    
       <Form.Group className="mb-3" controlId="Question7">
          <Form.Label>Who is your landlord?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
              <Form.Text className="text-muted">
                 Council, Private landord, other...
              </Form.Text>
        </Form.Group>
    
    
      <Form.Group className="mb-3" controlId="Question8">
          <Form.Label>What is your income per month?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
       <Form.Group className="mb-3" controlId="Question9">
          <Form.Label>Do you receive any benefit?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
       <Form.Group className="mb-3" controlId="Question10">
          <Form.Label>How much rent do you owe?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Question11">
          <Form.Label>How much rent do they claim you owe?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Question12">
          <Form.Label>Do you have any other debts?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Question13">
          <Form.Label>What is your plan to clear out your debt?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Question14">
          <Form.Label>Is there any disrepair to your home?</Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Question15">
          <Form.Label>Do you have any deadlines?</Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
              <Form.Text className="text-muted">
            Court Dates, response to be given to Court/Council.
          </Form.Text>
        </Form.Group>

        <Button className="disabled mt-4">🖨 Print for Court</Button>
      </Form>
    </>
  );
}

export default CourtInfo;
