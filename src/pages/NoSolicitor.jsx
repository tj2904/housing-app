import React from "react";
import AlertAttendCourt from "../components/AlertAttendCourt";

export default function NoSolicitor() {
  return (
    <>
      <main>
        <div>
          <h1>If You Do Not Have A Solicitor...</h1>
          <p className="lead">
            Even if you have not arranged a Solicitor you should still attend
            your court date.
          </p>
          <p>
            Take the form you have generated on this site to show to the duty
            solicitor when you meet them at court. This will help you give them
            all the details that they need to support you.
          </p>

          <p>
            Your case is likely to be heard in this court. However it may be
            heard at a different location so{" "}
            <strong>check your court papers carefully</strong> before attending.
          </p>
          <div className="text-center ">
            <iframe
              className="col-md-6"
              height="300px"
              allowFullScreen=""
              src=" https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d620.5948741528218!2d-0.097838233135219!3d51.52459895915485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe165191a9404c32!2sClerkenwell%20and%20Shoreditch%20County%20Court%20and%20Family%20Court!5e0!3m2!1sen!2suk!4v1670495107942!5m2!1sen!2suk"
              loading="lazy"
              title="CourtMap"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <AlertAttendCourt />
    </>
  );
}
