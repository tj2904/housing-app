import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../components/App.css";
import Home from "../pages/Home";
import CourtInfo from "../pages/CourtInfo";
import Details from "../pages/Details";
import Eligibility from "../pages/Eligibility";
import { Navigation } from "./Nav/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="pt-2">
      <div className="w-100">

          <Router>
            {/* Adding nav here means it will show on all pages */}
            <Navigation></Navigation>
            <Routes>
              <Route path="/court" element={<CourtInfo />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/eligibility" element={<Eligibility />} />
            </Routes>
          </Router>

      </div>
    </Container>
  );
}

export default App;
