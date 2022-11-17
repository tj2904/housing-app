import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
 

  return (
    // This needs re-doing completely to be the landing/home page that explains the app and it's purpose.
    // Nearly all of the code below should be deleted and replaced with a cool looking page!
 <>
 <h1>Stop Eviction will help check if you are eligible for legal aid to support your housing case.</h1>
 <Alert variant="danger">Please note: DO NOT MISS YOUR COURT DATE! Even if you are not eligible for legal aid or do not have a solicitor, use the websites report to show the Judge/Duty Solicitor in person about your case and your current situation.</p>
 </Alert>

 <p className="lead">Stop Eviction will help you check if you are eligible for legal aid to suport your housing case. 
    If eligible, you can check law firms that accepts legal aid contract in your area and try to get a solicitor for your case. The website also creates a report with your information so you can download it on your device and take it to your solicitor or to court in case you don't find a solicitor.</p>
 


    </>
  );
}

export default Home;
