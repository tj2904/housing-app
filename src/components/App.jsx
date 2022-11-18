import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../components/App.css";
import Home from "../pages/Home";
import CourtInfo from "../pages/CourtInfo";
import CourtInfoPageBreak from "../pages/CourtInfoPageBreak"
import Details from "../pages/Details";
import Eligibility from "../pages/Eligibility";
import { Navigation } from "./Nav/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/* Adding nav here means it will show on all pages */}
      <Navigation></Navigation>
      <Container className="pt-2">
        <Routes>
          <Route path="/court" element={<CourtInfo />} />
          <Route path="/courtTest" element={<CourtInfoPageBreak />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/eligibility" element={<Eligibility />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
