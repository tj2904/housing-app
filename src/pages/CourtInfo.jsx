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
            <Form.Group className="mb-3" controlId="formquestion1">
            <Form.Label>Who is your landlord? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion2">
        <Form.Label>How long have lived there? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion3">
     <Form.Label>How many children do you have? </Form.Label>
     <Form.Control type="text "  />  
     </Form.Group>
       
     <Form.Group className="mb-3" controlId="formquestion4">
                <Form.Label>Do you live with your partner? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion5">
                <Form.Label>Have you got any children with learning difficulties? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion6">
                 <Form.Label>How much rent do you owe? </Form.Label>
        <Form.Control type="text " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion7">
                 <Form.Label>Is your children mentally affected? </Form.Label>
        <Form.Control type="text " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion8">
                 <Form.Label>Is there anything wrong with the property? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion9">
                 <Form.Label>Have you got any proposal to reduce your risk? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion10">
                 <Form.Label>What plan do you have? </Form.Label>
        <Form.Control type="text "  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formquestion11">
                 <Form.Label>Provide brief summary of the issue you are facing? </Form.Label>
        <Form.Control type="text " />
        </Form.Group>
    
      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  



    </>
  );
}

export default CourtInfo;
