import { render, screen } from "@testing-library/react";
import Eligibility from "../Eligibility";
import { BrowserRouter as Router } from "react-router-dom";

test("renders page title correctly", () => {
  render(
    <Router>
      <Eligibility />
    </Router>
  );
  const pageHeading = screen.getByText("Legal Aid Eligibility");
  expect(pageHeading).toBeInTheDocument();
});
