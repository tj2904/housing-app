import React from "react";
import { Alert } from "react-bootstrap";
import AlertAttendCourt from "../components/AlertAttendCourt";

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
      <AlertAttendCourt />
    </>
  );
}

export default HasSolicitor;
