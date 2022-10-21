import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <>
      <h2>Law Firm Details page</h2>
      <Card className="w-50">
        <CardHeader>
          <Card.Title>Name of Law Firm</Card.Title>
        </CardHeader>
        <div className="row g-0">
          <div className="col-md-6">
            <Card.Body>
              <address>
                1 Law Street <br />
                Southwark <br />
                London <br />
                SE1 9IP <br />
              </address>
              Tel: <a href="tel:0000-000-0000">0121 423 0000</a>
            </Card.Body>
          </div>
          <iframe
            className="col-md-6"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4425.653189850736!2d-0.10403987582161978!3d51.49828426208385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1666541568135!5m2!1sen!2suk"
             width="200"
           height="175"
            allowFullScreen=""
            loading="lazy"
            title="Firm1"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Card>
      <Link to="/court" role="button" className="m-2 btn btn-info ">
        Complete Court Form
      </Link>
    </>
  );
}
