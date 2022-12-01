import React from "react";
import { Link } from "react-router-dom";
import House from "../../img/House.png";

export const Section1 = () => {
  return (
    <div className="mt-4">
      <div class="row">
        <div class="col">
          <h1>
            Eviction Support will help you to check if you are elegible for
            legal aid for your housing issue.
          </h1>
          <p>
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
            <button type="button" class="btn btn-primary btn-lg mt-4">
              Click Here
            </button>
          </Link>
        </div>
        <div class="col cont-img-pri">
          <div className="cont-img-sec1">
            <img
              src={House}
              width="100%"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
