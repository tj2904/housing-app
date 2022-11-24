import React from 'react'
import { Alert } from "react-bootstrap";

export default function NoSolicitor() {
  return (
    <>
      <div>
        <h1>I Have Not Found A Solicitor</h1>
        <p className="lead">
          Even though you have not found a Solicitor you should still attend
          your court date.
        </p>
        <p>
          Take the form you have generated on this site to show to the duty
          solicitor when you meet them atcourt. This will help you give them all
          the details that they need to support you.
        </p>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/300x200?text=Map_Of_Court_Location"
            className="fluid m-2"
          />
        </div>
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
