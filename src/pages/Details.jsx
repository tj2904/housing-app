import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import data from "../data/housing-solicitors"

export default function Details() {
  
  const firm = data;

  return (
    // This uses react bootstrap components to build the card.
    // It will need altering to function well in the final app so that it can map over results
    // We need to decide how this is powered at somepoint too - JSON maybe the best way forward,
    // but we could use a db

    // If keeping maps this needs to be implemented properly
    <>
      <h2>Law Firm Details Page</h2>
      <div className="pt-2">
        <div className="row g-0">
          {firm.map((firm) => {

            return (
              <Card key={firm.id} className=" mb-4 col-12 col-lg-8 mx-auto">
                <CardHeader>
                  <Card.Title>{firm.Firm}</Card.Title>
                </CardHeader>
                <div className="row g-0">
                  <div className="col-md-6">
                    <Card.Body>
                      <address>
                        {firm.StreetName} <br />
                        {firm.City} <br />
                        {firm.Postcode} <br />
                      </address>
                      ☎ <a href={`tel:${firm.Telephone}`}>{firm.Telephone}</a>
                      <br />
                      📧 <a href={`mailto:${firm.email}`}>{firm.email}</a>{" "}
                      <br />
                      🖥  <a href={firm.website} target="_blank" rel="noreferrer">
                        {firm.website}
                      </a>
                    </Card.Body>
                  </div>
                  <iframe
                    className="col-md-6"
                    src={firm.mapEmbed}
                    allowFullScreen=""
                    loading="lazy"
                    title="Firm1"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            );
          })}
        </div>
        {/* End of row */}

        <div className="text-center">
          <Link to="/court" role="button" className="m-2 btn btn-info ">
            Complete Court Form
          </Link>
        </div>
      </div>
    </>
  );
}
