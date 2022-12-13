import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter as Router } from "react-router-dom";

test("renders page title correctly", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const pageHeading = screen.getByText("Eviction Prevention will help you to check if you are eligible for Legal Aid to help stop your eviction.");
  expect(pageHeading).toBeInTheDocument();
});
