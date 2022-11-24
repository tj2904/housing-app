import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Nav/Navigation";
import { Container } from "react-bootstrap";
import "../components/App.css";
import Home from "../pages/Home";
import CourtInfo from "../pages/CourtInfo";
import Details from "../pages/Details";
import Eligibility from "../pages/Eligibility";
import NoSolicitor from "../pages/NoSolicitor";
import HasSolicitor from "../pages/HasSolicitor";

function App() {
  return (
    <Router>
      {/* Adding nav here means it will show on all pages */}
      <Navigation></Navigation>
      <Container className="pt-2">
        <Routes>
          <Route path="/court" element={<CourtInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/nosolicitor" element={<NoSolicitor />} />
          <Route path="/hassolicitor" element={<HasSolicitor />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
