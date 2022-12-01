import React from "react";
import { Alert } from "react-bootstrap";

function HasSolicitor() {
  return (
    <>
      <div>
        <h1>I Have Found A Solicitor</h1>
        <p className="lead">
          Now you have a solicitor you should follow their advice.
        </p>
        <p>
          Take the form you have generated on this site to show to your
          solicitor when you meet them, either at or before court. This will
          help you give them all the details that they need to support you.
        </p>
      </div>
      <Alert variant="danger" className="mt-4 mx-6 d-flex align-items-center">
        <div className="flex-shrink-0 me-2 fs-2">⚠️</div>
        <div>
          Please note: It is very important that you have your case heard, so
          <strong> DO NOT MISS YOUR COURT DATE</strong>. Use this website's
          report to show the Judge/Duty Solicitor at court on the day about your
          case and have your side of the case put across!
        </div>
      </Alert>
    </>
  );
}

export default HasSolicitor;
