import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Section1 } from "../components/Sections/Section1";

function Home() {
  return (
    <>

      <Section1 />
      <section className="my-4" >
        {/* my-4 gives us 4 units of margin on the y axis */}
        <div>
          <h1 >
            Eviction Support will help you to check if you are elegible for
            legal aid for your housing issue.
          </h1>
        </div>

        {/* gives us some padding when on smaller screens */}
        <div className="container-fluid">
          {/* we set a row so we can arrange columns */}
          <div className="row ">
            {/* columns are x parts of 12, so we have a 9 and a 3 */}
            <p className="col-md-9">
              If you have a court case for eviction, Tenant's Eviction Support
              will help you find out if you are elegible for legal aid for your
              eviction. We will also create a report with your information that
              you can download onto your device and take it to your solicitor or
              to court in case you don't find a solicitor before your court
              date.
              {/* I added a link as we will need a large call to action */}
              <Link
                to="/court"
                role="button"
                className="m-2 btn btn-lg btn-primary mt-5"
              >
                Complete our Court Form and get ready to present your side...
              </Link>
            </p>
            {/* d-none means display-none and then this is over ridden for sizes above md (medium) 
                we contain the img in a div to make layouts easier
                */}
            <div className="col-md-3 d-none d-md-block">
              <img
                src="https://housing.az.gov/sites/default/files/Eviction%20Prevention.png"
                height="500px"
              />
            </div>

            {/*   Alert is a bootstrap component. the markup is taken from
                  https://getbootstrap.com/docs/5.2/components/alerts/#icons 
                  using an emoji insead of the svg in the example*/}
            <Alert
              variant="danger"
              className="mt-4 mx-6 d-flex align-items-center"
            >
              <div className="flex-shrink-0 me-2 fs-2">⚠️</div>
              <div>
                Please note: It is very important that you have your case heard,
                so
                <strong> DO NOT MISS YOUR COURT DATE</strong>. Use this
                website's report to show the Judge/Duty Solicitor at court on
                the day about your case and have your side of the case put
                across!
              </div>
            </Alert>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
