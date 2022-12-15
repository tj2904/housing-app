import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import checkScreen from "../img/legalAidCheckScreen.png";
import outcomeNo from "../img/outcomeNo.png";
import cla from "../img/CLA-small.png";

function Eligibility() {
  return (
    <>
      <h2>Legal Aid Eligibility</h2>
      <p className="lead">
        Please check if you qualify for Legal Aid using the government site:
      </p>
      <p>
        Once you have completed the Government's eligibility check, come back to
        this page and select the image that matches your outcome. If you see{" "}
        <strong>"Contact Civil Legal Advice"</strong>, you can do that or
        contact a Solicitor directly for Legal Aid, then we will provide you
        with a list of Solicitors that might able to help you.
      </p>
      <p>
        If you do not qualify for Legal Aid, then you should take the form you
        have just downloaded with you on your court date.
      </p>
      <div className="row justify-content-center row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col lg-w-50">
          <Card className="">
            <a href="https://www.gov.uk/check-legal-aid" target="blank">
              <Card.Body>
                <img
                  src={checkScreen}
                  className="fluid m-2 img-thumbnail"
                  alt="screenshot of the government eligibility check"
                />
              </Card.Body>
              <Card.Footer>Check Your Eligibity</Card.Footer>
            </a>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col lg-w-50">
          <Card className="mb-2">
            <Link to="/noSolicitor">
              <Card.Body className="">
                <img
                  src={outcomeNo}
                  className="fluid m-2 img-thumbnail"
                  alt="screenshot of the government eligibility check"
                />
              </Card.Body>
              <Card.Footer className="link-danger fw-bold">
                Not likely to qualify
              </Card.Footer>
            </Link>
          </Card>
        </div>
        <div className="col lg-w-50">
          <Card>
            <Link to="/details">
              <Card.Body>
                <img
                  src={cla}
                  className="fluid m-2 img-thumbnail"
                  alt="screenshot of the government eligibility check"
                />
              </Card.Body>
              <Card.Footer className="link-success fw-bold">
                Likely to qualify
              </Card.Footer>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Eligibility;
