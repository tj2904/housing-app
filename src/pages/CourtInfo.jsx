import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function CourtInfo() {
  // pdfDiv is a containing div - everything in it will be in the PDF
  const pdfDiv = useRef();

  // Handle the click event on the download button
  const handleDownload = async () => {
    const element = pdfDiv.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const addFooters = (doc) => {
      const pageCount = doc.internal.getNumberOfPages();

      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      for (var i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text(
          "Page " + String(i) + " of " + String(pageCount),
          doc.internal.pageSize.width / 2,
          287,
          {
            align: "center",
          }
        );
      }
    };

    const pdf = new jsPDF();
    pdf.setLineWidth(15);

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth() - 15;
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.setTextColor("#00ceff");
    pdf.setFontSize(16);
    pdf.text(
      "This report was completed using Tenant's Eviction Support.",
      10,
      8
    );
    pdf.addImage(data, "PNG", 10, 15, pdfWidth, pdfHeight);
    addFooters(pdf);
    pdf.save("TenantEvictionSupport.pdf");
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
        type="button"
        className="btn btn-success"
        onClick={handleDownload}
      >
        💾 📄 Download as a PDF
      </Button>
      <Link to="/" role="button" className="m-4 btn btn-warning ">
        I've downloaded the form
      </Link>
    </>
  );
}

export default CourtInfo;
