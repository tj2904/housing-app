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
        <Form.Group className="mb-3" controlId="Name:" required>
          <Form.Label>Question 1<span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Short answer" />
          <Form.Text className="text-muted">
            Add additional instructions if needed here.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address:" required>
          <Form.Label>Question 2 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
     <Form.Group className="mb-3" controlId="Email Address:" required>
          <Form.Label>Question 3 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="Mobile Number:" required>
          <Form.Label>Question 4 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="Do you have any dependants?" required>
          <Form.Label>Question 5 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
     <Form.Group className="mb-3" controlId="Do you or the people you live with have any significant physical or mental health problems?" required>
          <Form.Label>Question 6 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
              <Form.Text className="text-muted">
            Do you have any disability?
          </Form.Text>
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="Who is your landlord?">
          <Form.Label>Question 7 </Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
              <Form.Text className="text-muted">
            Council, Private landord, other...
          </Form.Text>
        </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="What is your income per month?" required>
          <Form.Label>Question 8 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="Do you receive any benefit?" required>
          <Form.Label>Question 9 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
    <Form.Group className="mb-3" controlId="How much rent do you owe?">
          <Form.Label>Question 10 </Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="How much rent do they claim you owe?">
          <Form.Label>Question 11 </Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Do you have any other debts?" required>
          <Form.Label>Question 12 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="What is your plan to clear out your debt?" required>
          <Form.Label>Question 13 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Is there any disrepair to your home?" required>
          <Form.Label>Question 14 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="Do you have any deadlines?" required>
          <Form.Label>Question 15 <span className="text-danger fs-4">*</span></Form.Label>
          <Form.Control type="text" placeholder="Another short answer" />
              <Form.Text className="text-muted">
            Court Dates, response to be given to Court/Council.
          </Form.Text>
        </Form.Group>



        </Form.Group>
        <Button className="disabled mt-4">🖨 Print for Court</Button>
      </Form>
    </>
  );
}

export default CourtInfo;
