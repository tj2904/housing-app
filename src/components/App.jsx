import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../components/App.css"
import { AuthProvider } from "../contexts/AuthContext";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import PrivateRoutes from "../components/PrivateRoutes";
import ForgotPassword from "../pages//auth/ForgotPassword";
import UpdateProfile from "../pages//auth/UpdateProfile";
import CourtInfo from "../pages/CourtInfo";
import Details from "../pages/Details";
import Eligibility from "../pages/Eligibility";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center mt-4"
      
    >
      <div className="w-100" >
        <AuthProvider>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/court" element={<CourtInfo />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/details" element={<Details />} />
              <Route path="/eligibility" element={<Eligibility />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
