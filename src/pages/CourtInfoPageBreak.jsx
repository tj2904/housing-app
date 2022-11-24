import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js"
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function CourtInfo() {
  // state to control loading behaviour
  const [loading, setLoading] = useState(false);
  // state to control the state of the button to move away from the page
  const [notDownloaded, setNotDownloaded] = useState(true);

  // pdfDiv is a containing div - everything in it will be in the PDF
  const pdfDiv = useRef();


  // Handle the click event on the download button
  const handleDownload = async () => {
    setLoading(true);
    const element = pdfDiv.current;

    // https://github.com/eKoopmans/html2pdf.js#usage
    const opt = {
      margin: 10,
      filename: "TenantEvictionSupport.pdf",
      pagebreak: { mode: 'avoid-all'},
      jsPDF: { }
    };
   // html2pdf(element, opt);

   html2pdf().set(opt).from(element).save();
   setNotDownloaded(false);
   setLoading(false);
  };

  return (
    <>
      {/*add HTML code to this block before the final </> tag  */}
      <h2>Court Info Questionnaire</h2>
      <div className="lead mb-3">
        Please complete this form ahead of your court date ready to share with
        your solicitor or the court, so they have all of the information they
        need to best support you.
      </div>

      <div ref={pdfDiv}>
        <div className="d-none d-print-inline">
          Printed using Tenant's Eviction Support Website.
        </div>
        <Form>
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
          {/* <Button className="disabled mt-4">🖨 Print for Court</Button> */}
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
          </Form.Group>{" "}
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
          </Form.Group>{" "}
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
          </Form.Group>{" "}
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
          </Form.Group>{" "}
          <Form.Group className="mb-3 mt-2" controlId="question1">
            <Form.Label>Queston 1</Form.Label>
            <Form.Control type="text" placeholder="Short answer" />
            <Form.Text className="text-muted">
              Add additional instructions if needed here.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="question2" required>
            <Form.Label>
              Question 2 <span className="text-danger fs-4">*</span>
            </Form.Label>
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
            <Form.Label>Last Question 4</Form.Label>
            <textarea
              className="form-control"
              placeholder="Longer form answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Form.Group>
        </Form>
      </div>
      <Button
        disabled={loading}
        type="button"
        className="btn btn-success"
        onClick={handleDownload}
      >
        💾 📄 Download as a PDF
      </Button>
      <Button
      // only make clickable when the user has downloaded (or at least clicked) on the download button
        disabled={notDownloaded}
        href="/"
        role="button"
        className="m-4 btn btn-warning "
      >
        I've downloaded my form
      </Button>
    </>
  );
}

export default CourtInfo;
