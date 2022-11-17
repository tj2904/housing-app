import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    // This needs re-doing completely to be the landing/home page that explains the app and it's purpose.
    // Nearly all of the code below should be deleted and replaced with a cool looking page!
    /* <h1>Page title</h1>
 <p className="lead">Some intro text here that will grab attention/explain the site...</p>
 <Alert variant="danger">Here we can use this element to add the warning about needing to attend court maybe?</Alert>*/
    <div>
      <section className="section-1">
        <div className="cont-section1">
          <h1>
          Eviction Support will help you to check if you are elegible for legal aid for your housing issue.
          </h1>
          <p>
          If you have a court case, Eviction Support will help you to check if you are elegible for legal aid for your housing matter. The website also create a report with your informations so you can download it on your device and take it to your solicitor or to court in case you dont find a solicitor
          </p>
          <p>
          Please note: It is very important that you have your case heard, so DO NOT MISS YOUR COURT DATE. use the websites report to show the Judge/Duty Solicitor on site about your case and have your side heard!
          </p>
        </div>
        <div className="cont-img-section1">
          <img src="https://mysocialhousing.co.uk/wp-content/uploads/2021/03/5eab1b1d3b34bcd2802fce13_iPhoneX-Mock-Up-MSH-2-p-500.png" />
        </div>
      </section>
    </div>
  );
}

export default Home;
