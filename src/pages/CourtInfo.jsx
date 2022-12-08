import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { Button, Form, Alert } from "react-bootstrap";
import AlertAttendCourt from "../components/AlertAttendCourt";

function CourtInfo() {
  // state to regulate active state of button
  const [downloaded, setDownloaded] = useState(true);

  // pdfDiv is a containing div - everything in it will be in the PDF
  const pdfDiv = useRef();

  // Handle the click event on the download button
  const handleDownload = async () => {
    const element = pdfDiv.current;

    // https://github.com/eKoopmans/html2pdf.js#usage
    const opt = {
      margin: 10,
      filename: "TenantEvictionSupport.pdf",
      pagebreak: { mode: "avoid-all" },
      jsPDF: {},
    };
    // html2pdf(element, opt);

    html2pdf().set(opt).from(element).save();
    setDownloaded(false);
  };

  return (
    <>
      {/*add HTML code to this block before the final </> tag  */}
      <h2>Court Infomation Questionnaire</h2>
      <div className="lead mb-3">
        Please complete this form ahead of your court date ready to share with
        your solicitor or the court, so they have all of the information they
        need to best support you.
      </div>
      <div ref={pdfDiv}>
        <Form>
          <Form.Group className="mb-3" controlId="formquestion5">
            <Form.Label>Your name:</Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion1">
            <Form.Label>Who is your landlord? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion2">
            <Form.Label>How long have lived there? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion6">
            <Form.Label>How much rent do they say you owe? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion4">
            <Form.Label>Does anyone else live in the property? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion6">
            <Form.Label>What is your income? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion4">
            <Form.Label>
              Do you or anyone you live with have any health problems?{" "}
            </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion9">
            <Form.Label>Do you have a proposal to reduce your risk?</Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion10">
            <Form.Label>What plan do you have to repay the arrears?</Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion8">
            <Form.Label>Is there anything wrong with the property? </Form.Label>
            <Form.Control type="text " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formquestion11">
            <Form.Label>
              Please provide any other details you think maybe important?
            </Form.Label>
            <textarea type="text " className="form-control" />
          </Form.Group>
        </Form>
      </div>
      <div className="">
        <Button
          type="button"
          className="btn btn-success m-2"
          onClick={handleDownload}
        >
          💾 📄 Download as a PDF
        </Button>
        <Button
          disabled={downloaded}
          href="/eligibility"
          role="button"
          variant={"warning"}
          className=" m-2"
        >
          I've downloaded the form
        </Button>
      </div>
      <AlertAttendCourt />
    </>
  );
}

export default CourtInfo;
