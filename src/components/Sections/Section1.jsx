import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import EVICTION from "../../img/EVICTION.png";

export const Section1 = () => {
  return (
    <div>
      <div class="row">
        <div class="col ">
          <h1>
            Eviction Support will help you to check if you are elegible for
            legal aid for your housing issue.
          </h1>
          <p className="col-md-9">
            If you have a court case for eviction, Tenant's Eviction Support
            will help you find out if you are elegible for legal aid for your
            eviction. We will also create a report with your information that
            you can download onto your device and take it to your solicitor or
            to court in case you don't find a solicitor before your court date.
          </p>
          <div>
            <strong className="strong">
              Complete our Court Form and get ready to present your side...
            </strong>
          </div>

          <Link to="/court">
            <button type="button" class="btn btn-primary btn-lg">
              Click Here
            </button>
          </Link>
        </div>
        <div class="col cont-img-pri">
          <div className="cont-img-sec1">
            <img src={EVICTION} />
          </div>
        </div>
      </div>
    </div>
  );
};
