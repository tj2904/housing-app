import React from 'react'
import { Alert } from "react-bootstrap";

export default function NoSolicitor() {
  return (
    <>
      <div>
        <h1>If You Have Not Found A Solicitor...</h1>
        <p className="lead">
          Even though you have not found a Solicitor you should still attend
          your court date.
        </p>
        <p>
          Take the form you have generated on this site to show to the duty
          solicitor when you meet them atcourt. This will help you give them all
          the details that they need to support you.
        </p>
        <div className="text-center ">
          <iframe
            className="col-md-6"
            height="300px"
            allowFullScreen=""
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.422077134202!2d-0.08445678401380904!3d51.50547207963484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603501fe15bed%3A0xf4c1de79633c7099!2sSouthwark%20Crown%20Court!5e0!3m2!1sen!2suk!4v1669891620945!5m2!1sen!2suk"
            loading="lazy"
            title="CourtMap"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
