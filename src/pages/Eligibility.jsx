import React  from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import checkScreen from "../img/legalAidCheckScreen.png";
import outcomeNo from "../img/outcomeNo.png";
import outcomeYes from "../img/outcomeYes.png";

function Eligibility() {
  return (
    <>
      <h2>Legal Aid Eligibility</h2>

      <p className="lead">
        Please check if you qualify for Legal Aid using the government site:
      </p>

      <p>
        Once you have completed the Government's eligibility check, come back to
        this page and select the image that matches your outcome. If you see <strong>"Contact Civil Legal Advice"</strong>, you can do that or contact a Solicitor directly for Legal Aid, then we will provide you with a list of
        Solicitors that might able to help you.
      </p>
      <p>
        If you do not qualify for Legal Aid, then you should take the form you
        have just downloaded with you on your court date.
      </p>
      <div className="mx-auto">
        <div className="text-center mb-4 justify-content-center">
          <Row xs={1} md={2} className="g-4">
            <Card className="col-3 p-0">
              <a href="https://www.gov.uk/check-legal-aid" target="blank">
                <Card.Body>
                  <img
                    src={checkScreen}
                    className="fluid m-2 img-thumbnail"
                    alt="screenshot of the government eligibility check"
                  />
                </Card.Body>
                <Card.Footer>Check Eligibity</Card.Footer>
              </a>
            </Card>
          </Row>
          <Row>
            <Card className="col-3 p-0">
              <Link to="/noSolicitor">
                <Card.Body>
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
            <Card className="col-3 p-0">
              <Link to="/details">
                <Card.Body>
                  <img
                    src={outcomeYes}
                    className="fluid m-2 img-thumbnail"
                    alt="screenshot of the government eligibility check"
                  />
                </Card.Body>
                <Card.Footer className="link-success fw-bold">
                  Likely to qualify
                </Card.Footer>
              </Link>
            </Card>
          </Row>
        </div>
      </div>
      {/*
      <div>
        <a
          href="https://www.gov.uk/check-legal-aid"
          role="button"
          className="m-2 btn btn-dark"
          target="_blank"
          rel="noreferrer"
        >
          Check if you are eligible for Legal Aid
        </a>
        <Link to="/details" role="button" className="m-2 btn btn-info">
          See Details of Solicitors
        </Link>
      </div>
*/}
    </>
  );
}

export default Eligibility;
