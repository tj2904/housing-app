import React from 'react'
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function  SolicitorCard(firm) {

  return (
            <Card className=" mb-4 col-12 col-lg-8 mx-auto">
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
                    <a href={`tel:${firm.Telephone}`}>{firm.Telephone}</a>
                    <br />
                    <a href={`mailto:${firm.email}`}>{firm.email}</a> <br />
                    <a href={firm.website} target="_blank" rel="noreferrer">
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
}
